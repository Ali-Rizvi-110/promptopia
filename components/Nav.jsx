"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Nav = () => {
  return (
    <nav className='flex-betweeen w-full mb-16 pt-3'>
        <Link href="/" className='flex gap-2 flex-center' >
            <Image width={50} height={50} alt='image'
                src= "/assets/images/logo.svg"
                className='object-contain'
            />
            <p className='logo_text'>Promptopia</p>
        </Link>
    </nav>
  )
}

export default Nav