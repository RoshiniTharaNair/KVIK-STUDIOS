import Image from "next/image";
import Home1 from "@/components/Home/home1";
import Home2 from "@/components/Home/home2";
import Home3 from "@/components/Home/home3";
import Home4 from "@/components/Home/home4";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';

export default function Home() {
  return (
    <>
    <Home1 />
    <Home2 />
    <Home4 />
    <Home3 />


    </>
  );
}
