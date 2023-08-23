"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {

     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [error, setError] = useState('');
     const [submting, setSubmting] = useState(false);

     const router = useRouter();

     const handleSubmit = async (e: any) => {
          e.preventDefault();

          if(!email || !password){
               setError("Please enter email or password!");
               return;
          }

          try {
               setSubmting(true);
               const res = await fetch('/api/login', {
                    method: "POST",
                    headers: {
                         'Content-Type': 'application/json', 
                    },
                    body: JSON.stringify({ email, password }),
               });

               if(res.ok){
                    router.push('/dashboard');
               }else{
                    throw new Error("Failed login");
               }
               setSubmting(false);
          } catch (error) {
              console.error(error); 
               setSubmting(false);
          }
     }

     return(
          <div className="grid place-items-center h-screen">
               <form onSubmit={handleSubmit} className="flex py-3 flex-col items-center gap-3 border-t-4 border-blue-600 rounded w-[500px] shadow-lg">
                    <h2 className="font-bold text-2xl py-3 text-blue-600">Login</h2>
                    <input type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    />
                    <input type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    />
                    <button
                     disabled={submting}
                     type="submit" className="bg-blue-600 py-2 w-[150px] rounded-lg shadow-lg text-white font-bold">
                         {submting ? "Loging...": 'Login'}
                    </button>
                    <div className="flex gap-1 items-center justify-between w-[450px]">
                         <div>
                              <p className="text-red-500">{error}</p>
                         </div>
                         <div className="flex gap-3">
                              <p className="text-slate-500">Haven't account?</p>
                              <Link href="/register" className="border-b-2 border-blue-500 text-blue-500 font-bold">Register</Link>
                         </div>
                    </div>
               </form>
          </div>
     )
}

export default Login