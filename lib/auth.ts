import {betterAuth} from "better-auth";
import {prismaAdapter} from "better-auth/adapters/prisma";
import prisma from "../prisma/client";
import { sendWelcomeEmail } from "./mail";
import { emailOTP } from "better-auth/plugins";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql"
    }),
    emailAndPassword: {
        enabled: true,
    },
    user: {
        additionalFields: {
            role: {type: "string"},
            year: {type: "string"},
            department: {type: "string"},
            college: {type: "string"},
            phone: {type: "string"}
        }
    },
    plugins: [
        emailOTP({
            async sendVerificationOTP({email, otp, type}){
                if(type === "email-verification"){
                    await sendWelcomeEmail(email,otp);
                    await prisma.otp.upsert({
                        where: {
                            email
                        },
                        update: {value: otp},
                        create: {
                            value: otp,
                            email
                        }
                    })
                }
            }
        })
    ]
});