const express= require('express')
const db= require('./dataBaseConfig.js')
const cors=require('cors')
const dotenv= require('dotenv')
dotenv.config()
const contactRoute=require('./routes/contactRoute.js')
const enquiryRoute=require('./routes/enquiryRoute.js')
const profileRoute=require('./routes/profileRoute.js')
const signRoute=require('./routes/signRoute.js')
const adminRoute=require('./routes/adminRoute.js')
const statusRoute=require('./routes/statusRoute.js')
const depositeRoute=require('./routes/depositeRoute.js')

let app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('uploads'))

db.connect((err)=>{
if(err) throw err
else{
    console.log("database connected")
}
})

let createTableQuery =`
CREATE TABLE IF NOT EXISTS profile_table(
    id INT NOT NULL AUTO_INCREMENT,
    sponsorEmail VARCHAR(255) NULL,
    sponsorName VARCHAR(255) NULL,
    first_name VARCHAR(255) NULL,
    last_name VARCHAR(255) NULL,
    joiningData VARCHAR(255) NULL,
    activeData VARCHAR(255) NULL,
    number VARCHAR(255) NULL,
    dob VARCHAR(255) NULL,
    motherName VARCHAR(255) NULL,
    documentFront TEXT,
    documentBack TEXT,
    profilePic TEXT,
    documentType VARCHAR(255) NULL,
    documentNumber VARCHAR(255) NULL,
    address VARCHAR(255) NULL,
    accountHolder VARCHAR(255) NULL,
    accountNumber VARCHAR(255) NULL,
    email VARCHAR(255) NULL,
    ifsc VARCHAR(255) NULL,
    bankName VARCHAR(255) NULL,
    upiName VARCHAR(255) NULL,
    upiId VARCHAR(255) NULL,
    nomineeName VARCHAR(255) NULL,
    nomineeEmail VARCHAR(255) NULL,
    nomineeNumber VARCHAR(255) NULL,
    nomineeRelationship VARCHAR(255) NULL,
    nomineeDocumentNumber VARCHAR(255) NULL,
    nomineeDocumentFront TEXT,
    nomineeDocumentBack TEXT,
    deposite VARCHAR(255) NULL,
    tradeTotalIncome VARCHAR(255) NULL,
    referralIncome VARCHAR(255) NULL,
    royaltyIncome VARCHAR(255) NULL,
    rewardIncome VARCHAR(255) NULL,
    totalIncome VARCHAR(255) NULL,
    p2pTransfer VARCHAR(255) NULL,
    p2pRecived VARCHAR(255) NULL,
    password VARCHAR(255) NULL,
    totalInternalTransfer VARCHAR(255) NULL,
    totalWithrawal VARCHAR(255) NULL,
    withrawableBalance VARCHAR(255) NULL,
    onganizationOne VARCHAR(255) NULL,
    onganizationTwo VARCHAR(255) NULL,
    totalDirectBusiness VARCHAR(255) NULL,
    status VARCHAR(255) default 'unverified',
    PRIMARY KEY (id));
`

db.query(createTableQuery, (err, result)=>{
    if(err) throw err
    else{
        console.log("profile_table created successfull")
    }
})
let createDepositeTableQuery =`
CREATE TABLE IF NOT EXISTS deposite_table(
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NULL,
    depositeMethod VARCHAR(255) NULL,
    currency VARCHAR(255) NULL,
    depositeAmount VARCHAR(255) NULL,
    selectNetwork VARCHAR(255) NULL,
    transactionImage VARCHAR(255) NULL,
    transactionId VARCHAR(255) NULL,
    transactionDate VARCHAR(255) NULL,
    dailyProfitPercentage VARCHAR(255) NULL,
    transactionStatus VARCHAR(255) default 'pending',
    PRIMARY KEY (id));
`

db.query(createDepositeTableQuery, (err, result)=>{
    if(err) throw err
    else{
        console.log("deposite_table created successfull")
    }
})


// let signTableQuery=`
// CREATE TABLE IF NOT EXISTS sign_up(
//   id INT NOT NULL AUTO_INCREMENT,
//   name VARCHAR(255) NULL,
//   email VARCHAR(255) NULL unique,
//   password VARCHAR(255) NULL, 
//   paymen_status VARCHAR(255) default 'pending', 
//   view_limit VARCHAR(255) default '0', 
//   current_limit VARCHAR(255) default '0', 
//   PRIMARY KEY (id));
// `
// db.query(signTableQuery, (err, result)=>{
//     if(err) throw err
//     else{
//         console.log("signup table created successfull")
//     }
// })

// let adminTableQuery=`
// CREATE TABLE IF NOT EXISTS admin_table(
//   id INT NOT NULL AUTO_INCREMENT,
//   email VARCHAR(255) NULL,
//   password VARCHAR(255) NULL, 
//   PRIMARY KEY (id));
// `
// db.query(adminTableQuery, (err, result)=>{
//     if(err) throw err
//     else{
//         console.log("admin table created successfull")
//     }
// })

// let statusTableQuery=`
// CREATE TABLE IF NOT EXISTS status_table(
// id INT NOT NULL AUTO_INCREMENT,
// message VARCHAR(255) NULL,
// PRIMARY KEY (id));
// `
// db.query(statusTableQuery, (err, result)=>{
//     if(err) throw err
//     else{
//         console.log("status table created successfull")
//     }
// })
// let paymentTable=`
// CREATE TABLE IF NOT EXISTS payment_table(
// id INT NOT NULL AUTO_INCREMENT,
// upi VARCHAR(255) NULL,
// email VARCHAR(255) NULL,
// amount VARCHAR(255) NULL,
// PRIMARY KEY (id));
// `
// db.query(paymentTable, (err, result)=>{
//     if(err) throw err
//     else{
//         console.log("payment table created successfull")
//     }
// })


app.use('/api',contactRoute)
app.use('/api',enquiryRoute)
app.use('/trade',profileRoute)
app.use('/trade',depositeRoute)
app.use('/api',signRoute)
app.use('/api',adminRoute)
app.use('/api',statusRoute)
app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`)
})





