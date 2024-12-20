import React from 'react'
import Link from 'next/link'
import { BsGithub, BsYoutube } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { LiaLinkedin } from 'react-icons/lia'
import { CgInstagram } from 'react-icons/cg'
import Image from 'next/image'
const Footer = () => {
  return (
    <div>
        <footer className="text-gray-600 body-font bg-cover bg-fixed bg-center" style={{backgroundImage:"url(/images/bg2.jpg)"}}>
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <Link href="" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Link href="" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src="/images/rab (4).jpg" alt="logo" className='rounded-full ' width={50} height={50}/>
      <span className="ml-3 text-xl hover:text-red-500 font-bold">RSK ZAI</span>
    </Link>
      
    </Link>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Rabia Sohail 
     
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link href="https://github.com/rabiasohail098"
      target='_blank' className="text-gray-500">
       <BsGithub className="text-3xl hover:text-gray-600"/>
      </Link>
      <Link href="www.youtube.com/@Parniya098" target='_blank' className="ml-3 text-gray-500">
       <BsYoutube className="text-3xl hover:text-red-600"/>
      </Link>
      <Link href="https://www.facebook.com/shahjarar2022@gmail.com" 
      target='_blank'className="ml-3 text-gray-500">
       <FaFacebook className="text-3xl hover:text-blue-700"/>
      </Link>
      <Link href="https://www.instagram.com/rabiasohail642/" 
      target='_blank'className="ml-3 text-gray-500 text-[19px]">
     <CgInstagram className="text-[27px] hover:text-orange-400"/>
      </Link>
      <Link href="https://www.linkedin.com/in/shahjarar-khan-18a5a016a/" 
      target='_blank'className="ml-3 text-gray-500">
     <LiaLinkedin className="text-[33px] hover:text-blue-800"/>
      </Link>
    </span>
  </div>
</footer>
    </div>
  )
}

export default Footer