"use client"

import Hero1 from "@/components/Hero1";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    AOS.init({
        easing:"ease-out-back",
        duration:1200,
        delay:100,
        mirror:true,
        anchorPlacement:"bottom-bottom",
        offset:100,
    });
    AOS.refresh();
},[])
  return (
  <div>
    <Hero1/>
  </div>
  );
}