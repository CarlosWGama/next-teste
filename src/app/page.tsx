"use client";
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  useEffect(() => {
    redirect('/login')
  }, [])

  return (
    <h1></h1>
  )
}
