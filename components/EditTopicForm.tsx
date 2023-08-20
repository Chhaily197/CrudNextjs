'use client'
import React from 'react'
import { useState } from 'react'

interface UpdateData {
     id: string
}

const EditTopicForm = ({ id }: UpdateData) => {

     const [newTitle, setNewTitle] = useState('');
     const [newdes, setNewDesc] = useState('');

     const handeSubmit = async (e: any) => {
          e.preventDefault();

          try {
               const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                    method: "PUT",
                    headers: {
                         "Content-type": 'application/json',
                    },
                    body: JSON.stringify({ newTitle, newdes }),
               });

               if (!res.ok) {
                    throw new Error("Failed to updated topic");
               }

               location.href = '/'
          } catch (error) {
               console.error(error);
          }
     }

     return (
          <div>
               <form onSubmit={handeSubmit} className="flex flex-col gap-3 w-full">
                    <input type="text"
                         onChange={(e) => setNewTitle(e.target.value)}
                         value={newTitle}
                         className="border rounded-sm border-slate-500 py-2 px-8"
                         placeholder="Topic" />

                    <input type="text"
                         onChange={(e) => setNewDesc(e.target.value)}
                         value={newdes}
                         className="border rounded-sm border-slate-500 py-2 px-8"
                         placeholder="Description" />
                    <button type='submit' className="bg-green-600 w-[200px] py-2 text-white font-bold rounded-sm">Update Topic</button>
               </form>
          </div>
     )
}

export default EditTopicForm