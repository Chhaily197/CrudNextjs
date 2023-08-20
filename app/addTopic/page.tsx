'use client'
import { useState } from "react"

export default function AddTopic(){

     const [title, setTitle] = useState('');
     const [descritption, setDes] = useState('');

     const handleSubmit = async (e: any ) =>{
          e.preventDefault();

          if(!title || !descritption){
               alert("Title and description are required");
               return;
          }

          try {
               const res = await fetch('http://localhost:3000/api/topics', {
                    method: "POST",
                    headers: {
                         "Content-type": "application/json",
                    },
                    body: JSON.stringify({ title, descritption}),
               });

               if(res.ok){
                    location.href = '/'
               }else{
                    throw new Error("Failed to create a topic");
               }
          } catch (error) {
               console.error(error);
          }
     }
     return(
          <div>
               <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
                    <input type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                     className="border rounded-sm border-slate-500 py-2 px-8"
                     placeholder="Topic"/>

                    <input type="text"
                     className="border rounded-sm border-slate-500 py-2 px-8"
                     value={descritption}
                     onChange={(e) => setDes(e.target.value)}
                     placeholder="Description"/>
                     <button type='submit' className="bg-green-600 w-[200px] py-2 text-white font-bold rounded-sm">Add Topic</button>
               </form>
          </div>
     )
}