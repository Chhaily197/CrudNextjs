import Link from 'next/link'

export default function Navbar() {
     return(
          <nav className='bg-slate-800 p-4 flex items-center justify-between w-[80%]'>
               <Link
                className='text-white font-bold py-1'
                href={`/`}>CHLCoding</Link>
                <div className='flex gap-3'>
                    <Link href="/login"
                    className='text-white font-bold py-1'
                    >Log out</Link>
                    <Link
                    className='text-white font-bold py-1'
                    href={`/addTopic`}>Add Topic</Link>
                </div>
          </nav>
     )
}