"use client";
import React, { useState } from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { cn } from "@/lib/utils";
import axios from "axios";
import { useRouter } from "next/navigation";

// Define types for formData and errors
interface FormData {
  sponsorEmail: string;
  sponsorName: string;
  firstName: string;
  lastName: string;
  dob: string;
  motherName: string;
  number: string;
  email: string;
  documentType: string;
  documentNumber: string;
  documentFrontFile: File | null;
  documentBackFile: File | null;
  password: string;
  confirmPassword: string;
}

interface Errors {
  [key: string]: string;
}

export default function Signup() {
  let navigation = useRouter();

  const [generatedOTP, setGeneratedOTP] = useState<string>('');
  const [enteredOTP, setEnteredOTP] = useState<string>('');
  const [isVerified, setIsVerified] = useState<boolean>(false);

  // State for form data and errors
  const [formData, setFormData] = useState<FormData>({
    sponsorEmail: "",
    sponsorName: "",
    firstName: "",
    lastName: "",
    dob: "",
    motherName: "",
    number: "",
    email: "",
    documentType: "",
    documentNumber: "",
    documentFrontFile: null,
    documentBackFile: null,
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState<boolean>(false);

  // Function to generate a 6-digit OTP
  const generateOTP = (): string => {
    const otp = Math.floor(100000 + Math.random() * 999999).toString();
    setGeneratedOTP(otp);
    return otp;
  };

  // Validation function
  const validate = (): boolean => {
    let newErrors: Errors = {};

    if (!formData.sponsorEmail) newErrors.sponsorEmail = "Sponsor Email is required";
    if (!formData.sponsorName) newErrors.sponsorName = "Sponsor name is required";
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.dob) newErrors.dob = "Date of Birth is required";
    if (!formData.motherName) newErrors.motherName = "Mother's name is required";
    if (!formData.number) newErrors.number = "Phone number is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!enteredOTP) newErrors.enteredOTP = "Fill OTP";
    if (!formData.documentType) newErrors.documentType = "Document type is required";
    if (!formData.documentNumber) newErrors.documentNumber = "Document number is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form change for inputs and files
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | any>) => {
    const { id, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [id]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  // Handle OTP submission
  const handleSendOTP = async () => {
    let email = formData.email;
    if (email) {
      const otp = generateOTP();

      try {
        await axios.post('http://localhost:4000/trade/verifyotp', { email, otp });
        alert('OTP has been sent to your email');
      } catch (err) {
        console.error('Error sending OTP:', err);
        alert('Failed to send OTP');
      }
    } else {
      alert("Please Enter Email");
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {
      return; // Stop form submission if validation fails
    }

    // Create a FormData object to hold the form data and files
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'documentFrontFile' || key === 'documentBackFile') {
        if (formData[key as keyof FormData] instanceof File) {
          formDataToSend.append(key, formData[key as keyof FormData] as File);
        }
      } else {
        formDataToSend.append(key, formData[key as keyof FormData] as string);
      }
    });

    try {
      setLoading(true);
      if (enteredOTP === generatedOTP) {
        const response = await axios.post("http://localhost:4000/trade/saveUser", formDataToSend, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        navigation.push('/signin');
      } else {
        alert("Invalid OTP");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[95%] md:w-3/4 mx-auto rounded md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black mt-[120px] mb-[40px] md:mt-[150px]">
      <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200">
        Welcome to FILIXO.COM
      </h2>
      <p className="text-neutral-600 text-xl max-w-sm mt-2 dark:text-neutral-300">
        Sign up to FILIXO.COM
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        {/* First and Last Name */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstName">Referral Email (optional)</Label>
            <Input
              id="sponsorEmail"
              placeholder="Referral Email"
              type="text"
              value={formData.sponsorEmail}
              onChange={handleChange}
            />
            {errors.sponsorEmail && <p className="text-red-500 text-sm">{errors.sponsorEmail}</p>}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastName">Referral Name (optional)</Label>
            <Input
              id="sponsorName"
              placeholder="Referral Name"
              type="text"
              value={formData.sponsorName}
              onChange={handleChange}
            />
            {errors.sponsorName && <p className="text-red-500 text-sm">{errors.lastsponsorNameName}</p>}
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              placeholder="Enter First Name"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              placeholder="Enter Last Name"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </LabelInputContainer>
        </div>

        {/* Date of Birth */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="dob">Date of Birth</Label>
          <Input
            id="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
          />
          {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
        </LabelInputContainer>

        {/* Mother s Name */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="motherName">Father s Name</Label>
          <Input
            id="motherName"
            placeholder="Enter Father s Name"
            type="text"
            value={formData.motherName}
            onChange={handleChange}
          />
          {errors.motherName && <p className="text-red-500 text-sm">{errors.motherName}</p>}
        </LabelInputContainer>

        {/* Phone Number */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="number">Phone Number</Label>
          <Input
            id="number"
            placeholder="123-456-7890"
            type="tel"
            value={formData.number}
            onChange={handleChange}
          />
          {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}
        </LabelInputContainer>

        {/* Email */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="Enter Email Address"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Verify Email Address By OTP</Label>
          <div className="flex w-full">
          <Input
            id="enteredOTP"
            placeholder="Enter OTP"
            type="text"
            value={enteredOTP}
            onChange={(e)=>setEnteredOTP(e.target.value)}
            className=""
          />
          <button onClick={handleSendOTP} className="bg-white text-black px-2 rounded-lg ml-2 text md:text-xl font-[600]">Send OTP</button>
          </div>
          {errors.enteredOTP && <p className="text-red-500 text-sm">{errors.enteredOTP}</p>}
        </LabelInputContainer>

        <h1 className="py-5 text-2xl">KYC Information:-</h1>

        {/* Document Type */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="documentType">Document Type</Label>
          <select
            id="documentType"
            className="border rounded-md p-2 bg-black"
            value={formData.documentType}
            onChange={handleChange}
          >
            <option value="">Select Document Type</option>
            <option value="passport">Passport</option>
            <option value="id">Aadhar Card</option>
            <option value="license">Driver s License</option>
          </select>
          {errors.documentType && <p className="text-red-500 text-sm">{errors.documentType}</p>}
        </LabelInputContainer>

        {/* Document Number */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="documentNumber">Document Number</Label>
          <Input
            id="documentNumber"
            placeholder="123456789"
            type="text"
            value={formData.documentNumber}
            onChange={handleChange}
          />
          {errors.documentNumber && <p className="text-red-500 text-sm">{errors.documentNumber}</p>}
        </LabelInputContainer>

        {/* Document Upload (Front and Back) */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="documentFrontFile">Document Front</Label>
          <Input
            id="documentFrontFile"
            name="documentFrontFile"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="documentBackFile">Document Back</Label>
          <Input
            id="documentBackFile"
            type="file"
            name="documentBackFile"
            accept="image/*"
            onChange={handleChange}
          />
        </LabelInputContainer>

        {/* Password */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="text"
            value={formData.password || ""}
            onChange={handleChange}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </LabelInputContainer>

        {/* Confirm Password */}
        <LabelInputContainer className="mb-8">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="text"
            value={formData.confirmPassword || ""}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          )}
        </LabelInputContainer>

        {/* <h1 className="py-5 text-2xl">Nominee Information:-</h1> */}

        {/* Nominee Name */}
        {/* <LabelInputContainer className="mb-4">
          <Label htmlFor="nomineeName">Nominee Name</Label>
          <Input
            id="nomineeName"
            placeholder="Nominee Name"
            type="text"
            value={formData.nomineeName}
            onChange={handleChange}
          />
          {errors.nomineeName && <p className="text-red-500 text-sm">{errors.nomineeName}</p>}
        </LabelInputContainer> */}

        {/* Nominee Email */}
        {/* <LabelInputContainer className="mb-4">
          <Label htmlFor="nomineeEmail">Nominee Email</Label>
          <Input
            id="nomineeEmail"
            placeholder="nominee@example.com"
            type="email"
            value={formData.nomineeEmail}
            onChange={handleChange}
          />
          {errors.nomineeEmail && <p className="text-red-500 text-sm">{errors.nomineeEmail}</p>}
        </LabelInputContainer> */}

        {/* Nominee Phone Number */}
        {/* <LabelInputContainer className="mb-4">
          <Label htmlFor="nomineeNumber">Nominee Phone Number</Label>
          <Input
            id="nomineeNumber"
            placeholder="123-456-7890"
            type="tel"
            value={formData.nomineeNumber}
            onChange={handleChange}
          />
          {errors.nomineeNumber && <p className="text-red-500 text-sm">{errors.nomineeNumber}</p>}
        </LabelInputContainer> */}

        {/* Nominee Relationship */}
        {/* <LabelInputContainer className="mb-8">
          <Label htmlFor="nomineeRelationship">Nominee Relationship</Label>
          <Input
            id="nomineeRelationship"
            placeholder="Relation to Nominee"
            type="text"
            value={formData.nomineeRelationship}
            onChange={handleChange}
          />
          {errors.nomineeRelationship && (
            <p className="text-red-500 text-sm">{errors.nomineeRelationship}</p>
          )}
        </LabelInputContainer> */}

        {/* Submit Button */}
        <button
          className="bg-gradient-to-l bg-blue-500 from-[#2E64C0] w-full text-white rounded-md h-10 font-medium"
          type="submit"
          disabled={loading}
        >
         {loading ? 'proccesing' : ` Register`}
        </button>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
 
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
