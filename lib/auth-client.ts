import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from "better-auth/client/plugins";
import { emailOTPClient } from "better-auth/client/plugins";
import type {auth} from "./auth";

export const {signIn, signUp, signOut, useSession, getSession, emailOtp} = createAuthClient({
    plugins: [inferAdditionalFields<typeof auth>(), emailOTPClient()]
});