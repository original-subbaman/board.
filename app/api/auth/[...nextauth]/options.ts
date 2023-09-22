import  CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import nextAuth, { NextAuthOptions } from "next-auth";

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider(
            {
                name: "test", 
                credentials: {
                    email: { label: "Email", type: "text", placeholder: "Email"},
                    password: { label: "Password", type: "password"}
                },
                async authorize(credentials, req){
                    if(!credentials || !credentials.email || !credentials.password) return null; 
                    const user = users.find((item) => item.email === credentials.email); 
                    if(user?.password === credentials.password){
                        return user; 
                    }else{
                        return null; 
                    }
                }

            }
        ),
    ],
    pages: {
        signIn: '/login'
    }
}
