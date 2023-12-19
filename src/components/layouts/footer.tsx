import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='flex justify-between'>
        <h1>© 2023 <Link href="/">SovWare</Link></h1>
        <div className="">
            <ul className='flex'>
                <li>About</li>
                <li>Team</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}
