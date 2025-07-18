import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-[#EFF5E1] h-[100%]   overflow-hidden px-4 relative md:flex-row md:px-8 flex-wrap  flex place-items-center justify-around">
      <div className=" md:flex-1 order-1 flex-wrap  h-auto md:w-1/3 w-full ">
        <p className="w-62 indent-20 text-wrap text-justify text-[#2D3B36]">
          Transform your skincare routine with premium products that restore,
          protect, and enhance your nautural glow every day.
        </p>
      </div>

      <div className="hidden md:block md:flex-1 order-3 md:order-2 text-center md:text-left flex-1 w-1/3 mb-16">
        <h1 className="text-5xl md:text-8xl font-bold md:leading-23 uppercase">
          Glow
          <br />
          Natur-
          <br />
          Ally
        </h1>
      </div>

      <div className="   w-full sm:1/2 order-3 block md:hidden  mb-6 md:w-1/3 ">
        <h1
          className=" tracking-[-0.03em] text-[#2D3B36] absolute overflow-hidden top-79 -left-9 uppercase text-[135px]   font-inter font-extrabold leading-[100px]"
          style={{ fontFeatureSettings: "'cv10' on" }}
        >
          Glowwwww
          <br />
          Naturally
        </h1>
      </div>

      <div className="realtive overflow-hidden my-4 md:my-0 order-2 md:order-3  flex justify-end lg:justify-center flex-1 w-1/3 ">
        <Image
          src="/images/PlumSkinCare.png"
          alt="plumpImage"
          width={80}
          height={60}
          className="lg:w-55 lg:h-52 w-90 h-101 lg:rounded-2xl  md:mx-0"
        />
      </div>

      <div className="relative  order-4 md:w-full flex-col h-[108vh]  p-5  flex justify-between ">
        <div className="flex md-full order-1  ">
          <button className="rounded-[100px] cursor-pointer bg-[#2D3B36] text-[#EFF5E1] p-4 text-2xl h-14 flex items-center justify-center font-normal">
            Shop Now
          </button>
        </div>

        <div className="relative h-80 w-screen order-5  -ml-14 -mb-5 flex flex-col justify-end">
          <div
            className="  w-[100vw]  
               text-[#2D3B36] text-[20vw] 
               font-extrabold font-inter uppercase 
               text-left pointer-events-none font-inter
               leading-none  z-0 flex justify-end "
          >
            SKINCARE
          </div>
        </div>

        <div className="relative  ">
          <div className="absolute    -top-[1vh] left-1/2 -translate-x-1/2 z-10">
            <Image
              src="/images/AvocadoGirl.png"
              alt="girl demonstration"
              width={150}
              height={150}
              className="w-[40vw] h-auto object-cover rounded-4xl"
            />

            <div className="absolute  bottom-2 p-1 w-[30vw] left-1/2 -translate-x-1/2 z-11 flex items-center px-4 py-1 gap-6 bg-[#EFF5E1]   rounded-4xl">
              <div className="border border-dashed border-[#2D3B36] p-1 rounded-full">
                <Image
                  src="/images/PlumSkinCare.png"
                  alt="plumpImage"
                  width={80}
                  height={80}
                  className=" rounded-full "
                />
              </div>

              <p className="text-xl ">
                While giving you an invigorating cleansing experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
