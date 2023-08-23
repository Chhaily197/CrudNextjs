import React from 'react'
import TopicList from '@/components/TopicsList'
import Navbar from '@/components/Navbar'

const page = () => {
  return (
    <div className='flex flex-1 flex-col items-cente justify-center p-5'>
     <div className='flex items-center justify-center'>
          <Navbar />
     </div>
     <div className='w-[80%] m-auto py-3'>
       <TopicList />
     </div>
    </div>
  )
}

export default page