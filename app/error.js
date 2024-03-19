"use client"
import Link from 'next/link'
import React from 'react'

const error = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      Sorry this page is not designed yet.
      <Link href='/'>Move to home page</Link>
    </div>
  )
}

export default error
