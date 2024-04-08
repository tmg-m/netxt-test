"use client"
import React, { useState, useEffect } from 'react';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import MainNavResponsive from './MainNavResponsive';
import Link from 'next/link';

export default function MainNav() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
  
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);

    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);
  return (
    <>
      {isMobile ? 
        <MainNavResponsive /> :
        <div className="flex justify-between items-center mx-5 py-5">
          <Link href='/' className="">Logo</Link>
          <div className="flex justify-between items-center">
            <Link href='/' className="mx-5">Home</Link>
            <Link href='/products' className="mx-5">All products</Link>
            <Link href='/products/phone' className="mx-5">Phone</Link>
            <Link href='/products/tablets' className="mx-5">Tablet</Link>
            <Link href='/products/tv' className="mx-5">TV</Link>
            <Link href='/products/accessories' className="mx-5">Accessories</Link>
            <Link href='/about' className="mx-5">About</Link>
          </div>
          <div className="flex gap-5 text-gray-500">
            <Link href="/orders"><LocalShippingOutlinedIcon href="#" className='' /></Link>
            <Link href="/summary"><ShoppingBagOutlinedIcon className='' /></Link>
            <Link href="#"><AccountCircleOutlinedIcon href="" className='' /></Link>
          </div>
        </div>
      }
    </>
  );
}
