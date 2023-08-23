'use client';
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Register: React.FC = () => {

     const [user, setUser] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [error, setError] = useState("");
     const [submting, setSubmitting] = useState(false);

     const router = useRouter();

     const handleSubmit = async (e: any) => {
          e.preventDefault();

          if(!user || !email || !password){
               setError("All fail is input");
               return;
          }

          try {
               setSubmitting(true);
               const res = await fetch('api/registers', {
                    method: 'POST',
                    headers: {
                         "Content-type": "application/json",
                    },
                    body: JSON.stringify({ user, email, password}),
               });
               
               if(res.ok){
                    router.push('/dashboard');
               }else{
                    throw new Error("Feild register");
               }
               setSubmitting(false);
          } catch (error) {
               console.error(error);
               setSubmitting(false);
          }
     }

     return(
          <div className="grid place-items-center h-screen">
               <form className="flex py-3 flex-col items-center gap-3 border-t-4 border-blue-600 rounded w-[500px] shadow-lg">
                    <h2 className="font-bold text-2xl py-3 text-blue-600">Register</h2>
                    <input type="text"
                    value={user}
                    onChange={e => setUser(e.target.value)}
                    placeholder="Name"
                    />
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
                    onClick={handleSubmit}
                    type="submit" disabled={submting} className="bg-blue-600 py-2 w-[150px] rounded-lg shadow-lg text-white font-bold">
                         {submting ? "Submting...":"Register"}
                    </button>
                    <div className="flex gap-1 items-center justify-between w-[450px]">
                         <div>
                              <p className="text-red-600 mb-1 font-bold">{error}</p>
                         </div>
                         <div className="flex gap-3">
                              <p className="text-slate-500">Already account exist.</p>
                              <Link href="/login" className="border-b-2 border-blue-500 text-blue-500 font-bold">Login</Link>
                         </div>
                    </div>
               </form>
          </div>
     )
}

export default Register