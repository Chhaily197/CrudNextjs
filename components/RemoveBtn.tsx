'use client'
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }: any){

     const router = useRouter();

     const handleRemoveTopic = async () => {
          const confirmed = confirm("Are sure delete topic?");

          if(confirmed){
               const res = await fetch(`http://localhost:3000/api/topics?id=${id}`,{
                    method: "DELETE",
               });

               if(res.ok){
                 router.refresh();
               }
          }
     }
     return(
          <div>
               <button 
                onClick={handleRemoveTopic}
                className="bg-red-600 p-2 rounded-sm text-white w-fit"
               >Remove</button>
          </div>
     )
}