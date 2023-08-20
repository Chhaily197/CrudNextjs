import EditTopicForm from "@/components/EditTopicForm";

export default async function EditTopic({ params }: {params: {id: string}}){
     const { id } = params;

     if(typeof id !== 'string'){
          return <div>Loading...</div>
     }

     return(
          <div>
               <EditTopicForm id={id}/>
          </div>
     )
}
