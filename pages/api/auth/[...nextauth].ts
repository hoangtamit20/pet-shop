import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers : [
        GoogleProvider({
            clientId : "315291005790-t3q4qgiq256f3tn4pmrd6fmqqpki6iir.apps.googleusercontent.com",
            clientSecret : "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"
        })
    ]
})