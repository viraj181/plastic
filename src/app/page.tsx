"use client";
import Image from "next/image";
import darkmode from "@/image/MoonStars.svg";
import React, { useState } from "react";
import fistImageDark from "@/image/firstPage.png";
import fistImageLight from "@/image/firstPageLight.png";
import plasticPowerDark from "@/image/plastiPowerdark.png";
import plasticPowerLight from "@/image/plastiPowerlight.png";
import icoDark from "@/image/icoDark.png";
import icoLight from "@/image/icoLight.png";
import noodleDark from "@/image/noodleDark.png";
import noodleLight from "@/image/noodleLight.png";
import meshDark from "@/image/meshDark.png";
import meshLight from "@/image/meshLight.png";
import pillDark from "@/image/pillDark.png";
import pillLight from "@/image/pillLight.png";
import springDark from "@/image/springDark.png";
import springLight from "@/image/springLight.png";
import torusDark from "@/image/torusDark.png";
import torusLight from "@/image/torusLight.png";
import lightWightLight from "@/image/lightWightLight.png";
import lightWightDark from "@/image/lightWightDark.png";
import lightWightRlight from "@/image/lightWightRlight.png";
import lightWightRdark from "@/image/lightWightRDark.png";
import enduringDurabilityLight from "@/image/enduringDurabilityLight.png";
import enduringDurabilityDark from "@/image/enduringDurabilityDark.png";
import insulatingExcellenceLight from "@/image/insulatingExcellenceLight.png";
import insulatingExcellenceDark from "@/image/insulatingExcellenceDark.png";
import tringleLight from "@/image/tringleLight.png";
import tringleDark from "@/image/tringleDark.png";
import twist from "@/image/twist.png";
import twistDark from "@/image/twistDark.png";
import sustainabilityLight from "@/image/sustainabilityLight.png";
import sustainabilityDark from "@/image/sustainabilityDark.png";
import footerFLight from "@/image/footerFLight.png";
import footerFDark from "@/image/footerFDark.png";
import logo from "@/image/logo.png";
import logoLight from "@/image/logoLight.png";

const imageList = [
  {
    dark: icoDark,
    light: icoLight,
    label: "ico",
  },
  {
    dark: noodleDark,
    light: noodleLight,
    label: "noodle",
  },
  {
    dark: meshDark,
    light: meshLight,
    label: "mesh",
  },
  {
    dark: pillDark,
    light: pillLight,
    label: "pill",
  },
  {
    dark: springDark,
    light: springLight,
    label: "spring",
  },
  {
    dark: torusDark,
    light: torusLight,
    label: "torus",
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const darkmodeClick = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <>
      {/* navbar  */}
      <div className="flex justify-end p-2 bg-[#F1F1F1] dark:bg-[--black] ">
        <div
          onClick={darkmodeClick}
          className="flex justify-center cursor-pointer border border-[#F0F3F8] dark:border-none shadow-md dark:bg-gradient-to-r from-[#6A7178] from-0%  to-[#6a71781f] to-100% rounded-[100%] p-[11px]"
        >
          <button id="darkModeToggle">
            <Image width={3000} src={darkmode} alt="" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* main page */}
      <div className="bg-[#F1F1F1] dark:bg-[--black] dark:text-[--white]  ">
        <div className="container mx-auto max-w-screen-2xl h-full">
          {/* first part */}
          <div className="grid md:grid-cols-2 justify-between h-[700px] px-10">
            <div className=" h-full ">
              <div className="flex">
                <span className="text-3xl font-bold uppercase flex items-end">
                  Plasticity
                </span>
                <span className="text-sm font-bold uppercase flex items-start">
                  3d
                </span>
              </div>
              <div className="flex items-center h-full">
                <div>
                  <div className="flex">
                    <p className="text-7xl font-light">Plastic Power </p>

                    <Image
                      width={3000}
                      src={darkMode ? plasticPowerDark : plasticPowerLight}
                      alt=""
                      className="w-10 h-10 ml-2"
                    />
                  </div>
                  <p className="text-xl font-light">
                    As a versatile and dynamic material, plastic has
                    revolutionized industries and daily life, thanks to its
                    exceptional physical properties. Let&apos;s delve into the
                    fascinating characteristics that make plastic an
                    indispensable part of our modern world.
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <Image
                width={3000}
                src={darkMode ? fistImageDark : fistImageLight}
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
          {/* second part */}

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 py-4 px-10">
            {imageList.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  width={3000}
                  src={darkMode ? item.dark : item.light}
                  alt={item.label}
                  className="w-[200px] h-[200px]"
                />
                <p className="my-2 ">{item.label}</p>
              </div>
            ))}
          </div>

          {/* third part     */}
          <div>
            {/* Lightweight Marvel */}
            <div className="flex flex-col md:flex-row items-center relative">
              <div className="md:max-h-[450px] md:max-w-[250px]">
                <Image
                  src={darkMode ? lightWightDark : lightWightLight}
                  alt=""
                  width={3000}
                  height={3000}
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 md:p-0 lg:w-[50%] md:pt-16  gap-8 grid">
                <p className="text-3xl font-light">Lightweight Marvel</p>
                <p className="text-base font-light">
                  Plastic&apos;s low density makes it an ideal choice for a wide
                  range of applications, from packaging materials to aerospace
                  components. This lightweight nature not only enhances fuel
                  efficiency but also ensures ease of handling and transport,
                  making it a true champion in the materials arena.
                </p>
              </div>
              <div className="absolute right-0 w-[350px] top-28 hidden lg:block">
                <Image
                  src={darkMode ? lightWightRdark : lightWightRlight}
                  alt=""
                  width={3000}
                  height={3000}
                  className="w-full h-full"
                />
              </div>
            </div>
            {/* Enduring Durability */}
            <div className="flex flex-col md:flex-row items-center pt-10">
              {/* Text Content */}
              <div className="p-4 md:p-0 lg:w-[50%] md:pt-16 md:pl-10 gap-8 grid md:order-1 order-2">
                <p className="text-3xl font-light">Enduring Durability</p>
                <p className="text-base font-light">
                  Don&apos;t let its lightweight and flexible nature fool you –
                  plastic boasts impressive durability. Its resistance to
                  corrosion, chemicals, and weathering makes it a long-lasting
                  choice, ensuring that products made from plastic stand the
                  test of time.
                </p>
              </div>

              {/* Image */}
              <div className="max-h-[450px] max-w-[250px] md:pl-10 md:pt-24 md:order-2 order-1">
                <Image
                  src={
                    darkMode ? enduringDurabilityDark : enduringDurabilityLight
                  }
                  alt=""
                  width={3000}
                  height={3000}
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Insulating Excellence */}
            <div className="flex flex-col md:flex-row items-center justify-between relative">
              <div className="max-h-[450px] max-w-[450px] pl-10 ">
                <Image
                  src={
                    darkMode
                      ? insulatingExcellenceDark
                      : insulatingExcellenceLight
                  }
                  alt=""
                  width={3000}
                  height={3000}
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 md:p-0 lg:w-[50%] md:pt-16 md:mr-40 relative gap-8 grid">
                <p className="text-3xl font-light">Insulating Excellence</p>
                <p className="text-base font-light ">
                  In the realm of electrical and thermal insulation, plastic
                  emerges as a champion. Its ability to resist electrical
                  conductivity and transfer of heat has made it a staple in the
                  production of insulating materials. From electrical wires to
                  the insulation in our homes, plastic&apos;s insulating prowess
                  plays a vital role in ensuring safety and efficiency.
                </p>
              </div>{" "}
              <div className="hidden md:flex flex-col items-center absolute right-10 -top-16">
                <Image
                  width={3000}
                  src={darkMode ? springDark : springLight}
                  alt=""
                  className="w-[200px] h-[200px]"
                />
              </div>
            </div>
            {/* Design Freedom Unleashed */}
            <div className="flex flex-col sm:flex-row items-center justify-between ">
              <div className="p-4 md:p-0 lg:w-[50%]  md:pl-10 relative gap-8 grid order-2 md:order-1">
                <div className="flex ">
                  <p className="text-3xl font-light">
                    Design Freedom Unleashed
                  </p>
                  <div className="absolute md:flex md:justify-center md:pl-12 md:-top-16 right-0 md:-right-10">
                    <Image
                      width={3000}
                      src={darkMode ? tringleDark : tringleLight}
                      alt=""
                      className="w-[80px] h-[80px]"
                    />
                  </div>
                </div>
                <p className="text-base font-light">
                  Beyond its physical attributes, plastic offers unparalleled
                  design freedom. Through various molding and manufacturing
                  techniques, plastic can take on an array of shapes, colors,
                  and textures. This freedom of design allows for the creation
                  of products that not only perform exceptionally but also
                  captivate with their aesthetic appeal, showcasing the artistic
                  side of this versatile material.
                </p>
              </div>
              <div className="max-h-[450px] max-w-[450px] pl-10 order-1 md:order-2">
                <Image
                  src={darkMode ? twistDark : twist}
                  alt=""
                  width={3000}
                  height={3000}
                  className="w-full h-full"
                />
              </div>
            </div>
            {/* Where Strength Meets Sustainability */}
            <div className="flex flex-col md:flex-row items-center pb-16">
              <div className="md:max-h-[450px] md:max-w-[250px]">
                <Image
                  // src={sustainabilityLight}
                  src={darkMode ? sustainabilityDark : sustainabilityLight}
                  alt=""
                  width={3000}
                  height={3000}
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 md:p-0 lg:w-[50%]   gap-8 grid relative">
                <p className="text-3xl font-light">
                  Where Strength Meets Sustainability
                </p>
                <p className="text-base font-light">
                  Beyond its lightweight charm and flexibility, plastic embraces
                  a paradox – the delicate dance between strength and
                  sustainability. With advancements in technology, we witness a
                  new era where durable plastics coexist with eco-conscious
                  initiatives.
                </p>
                <div className="hidden lg:flex justify-end items-end absolute -right-64 -bottom-24 ">
                  {" "}
                  <Image
                    width={3000}
                    // src={noodleDark}
                    src={darkMode ? noodleDark : noodleLight}
                    alt=""
                    className="w-[200px] h-[200px]"
                  />
                </div>
              </div>
            </div>

            {/* footer */}
            <div className="bg-[#E8E8E8] dark:bg-[#131313] h-60 relative w-full">
              <div className=" absolute -top-24 w-full flex justify-center items-center">
                {" "}
                <Image
                  width={3000}
                  src={darkMode ? footerFDark : footerFLight}
                  // src={footerFLight}
                  alt=""
                  className="w-[200px] h-[200px]"
                />
              </div>
              <div className=" flex items-center justify-start h-full pl-10 md:pl-20">
                {" "}
                <Image
                  width={3000}
                  // src={logo}
                  src={darkMode ? logoLight : logo}
                  alt=""
                  className="w-[250px] h-[100px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
