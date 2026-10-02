"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function LoginPage() {
  // const params = useSearchParams();
  const from = "dashboard";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("");
  const handleSubmit = () => {
    signIn.email({
      email: formData.email,
      password: formData.password,
      callbackURL: "/dashboard"
    },{
      onRequest: () => {
        setStatus("Loading...");
      },
      onSuccess: () => {
        setStatus("Logged in successfully!");
        redirect("/dashboard")
      },
      onError: (err) => {
        if(err.error.message === "Email not verified"){
          setStatus("Email not verified. Please check your email for verification mail.");
        }
        else setStatus(`Error occurred: ${err.error.message}`);
      }
    })
  };

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
      <div className="sm:min-h-screen flex flex-col md:flex-row">
        <div className="w-full bg-gradient-to-br from-blue-300 to-blue-400 p-12 pt-0 flex flex-col items-center justify-around">
          <Link href={"/"}>
            <Image src={"/elevatex-logo.png"} alt="ElevateX 4.0 Logo" height={200} width={400} className="aspect-video object-contain" />
          </Link>
          <div className="max-w-md mx-auto w-full font-syne">
            <h1 className="text-5xl font-bold text-gray-900 mb-2">
              Step into the
            </h1>
            <h2 className="text-5xl font-extrabold text-indigo-900 mb-2">
              Future of
            </h2>
            <p className="text-6xl italic text-gray-800 mb-12">Innovation</p>

            <div className="space-y-6">
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
                  Password
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 rounded-full bg-blue-200 bg-opacity-50 border-2 border-blue-300 focus:outline-none focus:border-indigo-500 text-gray-800 placeholder-gray-600"
                />
              </div>

              <p className="text-white">{status}</p>
              {status === "Logged in successfully!" && <p className="text-white">You should be redirected automatically, else click here - <Link href={"/dashboard"} className="underline underline-offset-2">/dashboard</Link></p>}

              {/* Login Button */}
              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200 cursor-pointer"
                  disabled={status==="Loading..."}
                >
                  Login
                </button>
              </div>

              {/* Additional Links */}
              <div className="text-center pt-2">
              <a href="/register" className="text-sm text-gray-800 hover:text-indigo-900 font-medium">
              Don&apos;t have an account?
              </a>
              </div>

              {(from === "dashboard") && <p className="text-black/60 text-center">If you logged in but weren&apos;t redirected, click <Link href={"/dashboard"}className="underline">here</Link></p>}
            </div>
          </div>
        </div>
      </div>
  );
}