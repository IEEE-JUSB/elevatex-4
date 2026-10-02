"use client";
import { emailOtp } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { validateForm } from "./formValidation";
import { handleSignup } from "./signup";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    college: "",
    dept: "",
    year: "",
    phone: "",
  });
  const [status, setStatus] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleSendOtp = () => {
    setStatus("Sending OTP...");
    setOtpSent(true);
    emailOtp.sendVerificationOtp({
      email: formData.email,
      type: "email-verification"
    })
    .then(()=>{
      setStatus("Email sent with OTP.");
    })
  }

  const handleSubmitOtp = () => {
    setStatus("Loading...");
    handleSignup(otp, formData)
    .then(res => {
      setStatus(res.message);
      if(res.ok) redirect("/dashboard")
    })
  }

  const handleSubmit = () => {
    const formValidity = validateForm(formData);
    if (!formValidity.ok) {
      toast.error(formValidity.message);
      return;
    }
    dialogRef.current?.showModal();
  };

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <div className="sm:min-h-screen flex flex-col sm:flex-row">
      <dialog
        ref={dialogRef}
        className="backdrop:bg-gray-800/80 rounded-xl bg-blue-400 font-syne p-3 outline-none top-1/2 left-1/2 -translate-1/2 w-4/5 sm:w-1/2"
      >
        <div className="flex flex-col items-center gap-y-3">
          <h2 className="text-2xl xl:text-3xl font-semibold">
            OTP Verification
          </h2>
          <p className="text-sm font-sans">
            If you&apos;re seeing this, your email isn&apos;t verified.
          </p>
          <p>Email Address: {formData.email}</p>
          <button className="bg-white text-black px-2 py-1 rounded-md cursor-pointer hover:bg-gray-200 transition-colors duration-200"
          onClick={()=>handleSendOtp()} disabled={otpSent}>
            Send OTP
          </button>
          <input
            type="text"
            className="px-2 py-1 rounded-sm outline-none bg-white"
            placeholder="Enter your OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button className="bg-white text-black px-2 py-1 rounded-md cursor-pointer hover:bg-gray-200 transition-colors duration-200"
          onClick={()=>handleSubmitOtp()} disabled={status === "Loading..."}>
            Submit OTP
          </button>
          <p>{status}</p>
        </div>
      </dialog>
      <div className="w-full bg-gradient-to-br from-blue-300 to-blue-400 p-12 flex flex-col justify-center overflow-y-auto font-syne">
        <div className="max-w-md mx-auto w-full py-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">
            Step into the
          </h1>
          <h2 className="text-5xl font-extrabold text-indigo-900 mb-2">
            Future of
          </h2>
          <p className="text-4xl italic text-gray-800 mb-8">Innovation</p>

          <div className="space-y-5">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-full bg-blue-200 bg-opacity-50 border-2 border-blue-300 focus:outline-none focus:border-indigo-500 text-gray-800 placeholder-gray-600"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="johndoe@email.com"
                className="w-full px-4 py-3 rounded-full bg-blue-200 bg-opacity-50 border-2 border-blue-300 focus:outline-none focus:border-indigo-500 text-gray-800 placeholder-gray-600"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Password (8 characters or more)
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-full bg-blue-200 bg-opacity-50 border-2 border-blue-300 focus:outline-none focus:border-indigo-500 text-gray-800 placeholder-gray-600"
              />
            </div>

            {/* College Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                College
              </label>
              <input
                type="text"
                value={formData.college}
                onChange={(e) => handleChange("college", e.target.value)}
                placeholder="Your College Name"
                className="w-full px-4 py-3 rounded-full bg-blue-200 bg-opacity-50 border-2 border-blue-300 focus:outline-none focus:border-indigo-500 text-gray-800 placeholder-gray-600"
              />
            </div>

            {/* Department and Year Fields */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Department
                </label>
                <input
                  type="text"
                  value={formData.dept}
                  onChange={(e) => handleChange("dept", e.target.value)}
                  placeholder="CSE"
                  className="w-full px-4 py-3 rounded-full bg-blue-200 bg-opacity-50 border-2 border-blue-300 focus:outline-none focus:border-indigo-500 text-gray-800 placeholder-gray-600"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Year
                </label>
                <input
                  type="text"
                  value={formData.year}
                  onChange={(e) => handleChange("year", e.target.value)}
                  placeholder="2nd"
                  className="w-full px-4 py-3 rounded-full bg-blue-200 bg-opacity-50 border-2 border-blue-300 focus:outline-none focus:border-indigo-500 text-gray-800 placeholder-gray-600"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="9876543210"
                className="w-full px-4 py-3 rounded-full bg-blue-200 bg-opacity-50 border-2 border-blue-300 focus:outline-none focus:border-indigo-500 text-gray-800 placeholder-gray-600"
                required
              />
            </div>

            {/* Register Button */}
            <div className="pt-4">
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200 cursor-pointer"
                disabled={status === "Loading..."}
              >
                Register
              </button>
            </div>

            {/* Additional Links */}
            <div className="text-center pt-2">
              <a
                href="/login"
                className="text-sm text-gray-800 hover:text-indigo-900 font-medium"
              >
                Already have an account?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
