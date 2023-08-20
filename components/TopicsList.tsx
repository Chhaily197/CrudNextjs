import Link from "next/link";
import RemoveBtn from "./RemoveBtn";

const getTopic = async () => {
     try {
          const res = await fetch('http://localhost:3000/api/topics', {
               cache: "no-store",
          });

          if(!res.ok){
               throw new Error("Failed to fetch topics");
          }
          return res.json();
     } catch (error) {
          console.error("Error lodding topics: ",error);
     }
}

export default async function TopicList(){

     const { topics } = await getTopic();

     return(
          <>
          {topics.map((t: any, index: any) => (
          <div key={index} className="p-4 border rounded-sm border-slate-500 my-3 flex justify-between gap-5 items-start">
               <div>
                    <h2 className="font-bold text-2xl">{t.title}</h2>
                    <div>{t.descritption}</div>
               </div>

               <div className="flex gap-2">
                    <RemoveBtn id={t._id} />
                    <Link href={`/editTopic/${t._id}`}
                    className="bg-blue-500 p-2 w-fit text-white rounded-sm"
                    >Edit</Link>
               </div>
          </div>
          ))}
          </>
     )
}