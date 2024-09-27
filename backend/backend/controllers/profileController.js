// controllers/profileController.js
const connection = require('../dataBaseConfig.js');
const path = require('path');
let jwt = require('jsonwebtoken')
const cron = require('node-cron');
const nodemailer = require('nodemailer');
function generateToken(data) {
  return jwt.sign({ id: data.id }, "hii", { expiresIn: '1d' })
}

// GET: Retrieve all profiles
exports.getAllProfiles = (req, res) => {
  connection.query('SELECT * FROM profile_table', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// GET: Retrieve a single profile by ID
exports.getProfileById = (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM profile_table WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Profile not found' });
    res.json(results[0]);
  });
};

// POST: Create a new profile with image upload
exports.createProfile = (req, res) => {
  const {
    sponsorEmail, sponsorName, firstName, lastName, dob, motherName, number,
    email, documentType, documentNumber, password, confirmPassword
  } = req.body;

  try {
    // Check if the required images are uploaded
    let documentFrontFile = req.files['documentFrontFile'] ? req.files['documentFrontFile'][0].filename : null;
    let documentBackFile = req.files['documentBackFile'] ? req.files['documentBackFile'][0].filename : null;

    const newProfile = {
      sponsorEmail: sponsorEmail,
      sponsorName: sponsorName,
      first_name: firstName,
      last_name: lastName,
      dob: dob,
      motherName: motherName,
      number: number,
      email: email,
      documentType: documentType,
      documentNumber: documentNumber,
      documentFront: documentFrontFile,  // Store the file path
      documentBack: documentBackFile,    // Store the file path
      password: password
    };

    const query = 'INSERT INTO profile_table SET ?';
    connection.query(query, newProfile, (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ id: results.insertId, ...newProfile });
    });
  } catch (error) {
    console.error('Error handling request:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

exports.verifyOtp =async (req, res) => {
  const { email, otp } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'amitmrj914011@gmail.com', // Your email
      pass: 'azsw pqru lywb hcxt', // Your email password (or app-specific password)
    },
  });

  let mailOptions = {
    from: 'amit@techxpert.in', // Sender email
    to: email, // Receiver's email (from frontend)
    subject: 'Your OTP Code',
    text: `Your OTP is here ${otp}`, // Email content
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('OTP sent successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error sending email');
  }
}
exports.clientLogin = (req, res) => {
  let email = req.body.email
  let password = req.body.password

  let sql = `select * from profile_table where email = ? and password = ?`

  connection.query(sql, [email, password], async (err, result) => {
    if (err) throw err
    else {
      if (result.length > 0) {
        let token = await generateToken(result[0])
        let isMatch = true
        res.json({ isMatch, token })
      } else {
        let isMatch = false
        res.json({ isMatch })
      }
    }
  })

}
// PUT: Update a profile by ID with image upload
exports.updateProfile = (req, res) => {
  const email = req.params.email;
  let updatedData = req.body;
  if(req.files['profilePic']){
    updatedData = {...updatedData,profilePic: req.files['profilePic'][0].filename}
  }
  if(req.files['documentFront']){
    updatedData = {...updatedData,documentFront: req.files['documentFront'][0].filename}
  }
  if(req.files['documentBack']){
    updatedData = {...updatedData,documentBack: req.files['documentBack'][0].filename}
  }
  if(req.files['nomineeDocumentFront']){
    updatedData = {...updatedData,nomineeDocumentFront: req.files['nomineeDocumentFront'][0].filename}
  }
  if(req.files['nomineeDocumentBack']){
    updatedData = {...updatedData,nomineeDocumentBack: req.files['nomineeDocumentBack'][0].filename}
  }
  console.log(updatedData)

  
  const query = 'UPDATE profile_table SET ? , deposite = deposite - 20 WHERE email = ?';
  try {
    connection.query(query, [updatedData, email], (err, results) => {
      if (err) throw err;
      // if (results.affectedRows === 0) return res.status(404).json({ message: 'Profile not found' });
      res.send("updated");
    });
  } catch (error) {
    console.log(error)
  }
};
exports.updatePassword = (req, res) => {
  const email = req.params.email;
  let password = req.body.password;
const query = 'UPDATE profile_table SET password = ? WHERE email = ?';
  try {
    connection.query(query, [password, email], (err, results) => {
      if (err) throw err;
      // if (results.affectedRows === 0) return res.status(404).json({ message: 'Profile not found' });
      res.send("updated");
    });
  } catch (error) {
    console.log(error)
  }
};
// DELETE: Remove a profile by ID
exports.deleteProfile = (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM profile_table WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0) return res.status(404).json({ message: 'Profile not found' });
    res.status(204).end();
  });
};
exports.verifyClient = (req, res) => {
  let token = req.body.token
  // console.log(token)
  if (token) {
    jwt.verify(token, "hii", (err, decode) => {
      if (err) {
        res.json({ valid: false })
      }
      else {
        let sql = `select * from profile_table where id = ?`
        connection.query(sql, [decode.id], async (err, result) => {
          if (err) throw err
          else {
            if (result.length > 0){
              res.json({ result, valid:true })
            } else {
              res.json({ valid:false })
            }
          }
        })
      }
    })
  }
}

