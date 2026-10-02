"use server";
import prisma from "@/prisma/client";
import { FormDataType } from "./formValidation";
import { auth } from "@/lib/auth";

export const handleSignup = async (otp: string, formData: FormDataType) => {
  const otpStatus = await prisma.otp.findFirst({
    where: {
        email: formData.email
    }
  })
  if(!otpStatus) return {ok: false, message: "No OTP found. Try again."}
  if(otpStatus.value !== otp) return {ok: false, message: "Incorrect OTP. Try again."}

  const res = await auth.api.signUpEmail({
    body: {
        email: formData.email,
        name: formData.name,
        password: formData.password,
        phone: formData.phone,
        role: "USER",
        year: formData.year,
        college: formData.college,
        department: formData.dept
    },
    asResponse: true
  });

  if(res.ok) return {ok: true, message: "Registered successfully!"};
  else return {ok: true, message: "An error occurred. Try again."}
};
