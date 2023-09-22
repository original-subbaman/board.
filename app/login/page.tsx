"use client";

import { signIn } from "next-auth/react";
import "./styles.css"; 
export default function LogInScreen() {
    return <div className="flex flex-row w-screen h-screen">
        <div className="banner hidden md:flex flex-col grow py-4 px-4">
            <div className="self-start">
                <h2 className="font-bold text-4xl">LOGO</h2>
            </div>
            <div className="grow flex justify-center items-center">
                <h1 className="font-bold text-8xl">Board.</h1>
            </div>
            <div className="grid grid-cols-4 gap-4 self-center justify-end">
                <img src="/ic_github.png" className="w-10 h-10" alt="github"></img>
                <img src="/ic_twitter.png"  className="w-10 h-10" alt="twitter" />
                <img src="/ic_linkedin.png" className="w-10 h-10"  alt="linkedin" />
                <img src="/ic_discord.png"  className="w-10 h-10" alt="discord" />
            </div>
        </div>
        <div className="flex flex-col bg-gray-100 text-black grow py-8 px-8 justify-center items-center">
            <div>
                
                <h1 className="font-bold text-2xl">Sign In</h1>
                <p className="text-sm">Sign In with your account</p>
        
                <div className="grid grid-cols-2 my-4 gap-4">
                    <button onClick={(e:any) => signIn('google', {callbackUrl: '/dashboard'})} className="flex justify-center items-center bg-gray-200 rounded-lg p-2 text-sm text-gray-500">
                        <img src="/ic_apple.svg" className="w-10 h-10"></img>Sign in With Google</button>
                    <button className="flex justify-center items-center bg-gray-200 rounded-lg p-2 text-sm text-gray-500">
                        <img src="/ic_google.svg" className="w-8 h-8"></img>Sign in With Apple</button>
                </div>

                <form action="#" className="flex flex-col bg-white rounded-2xl p-6">
                    <label className="text-sm">Email</label>
                    <input type="text" name="email" placeholder="Email" className="bg-gray-200 rounded-lg p-2 mb-4"/>
                    <label className="text-sm">Password</label>
                    <input type="password" name="password" placeholder="Password" className="bg-gray-200 rounded-lg p-2"/>
                    <a className="text-blue-500 text-sm my-4">Forgot Password?</a>
                    <button onClick={(e:any)=> console.log("clicked")}className="bg-blue-500 rounded-lg text-white py-2">Log In</button>
                </form>

                <p className="text-sm mt-4 text-center">Don't have an account? <span className="text-blue-500">Register here</span></p>
            </div>
        </div>
    </div>
}