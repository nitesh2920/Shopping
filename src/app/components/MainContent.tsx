import Image from "next/image";
import { Medal } from "../icons/medal";

export default function MainContent() {
  const features = [
    {
      number: "01",
      title: "Bio Ingredients",
      description:
        "Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin."
    },

    {
      number: "02",
      title: "Everything Natural",
      description:
        "Pure ingredients for pure skin. The Perfect solution for your skin care needs."
    },

    {
      number: "03",
      title: "All Handmade",
      description:
        "Made with love and care. Just for you. Give your skin the tender loving care it deserves."
    }
  ];
  return (
    <main className="flex ">
      <section className=" h-auto w-3/6">
        <div>
          <button className="mb-14 mx-6 flex items-center justify-start border border-solid border-[#2D3B36] bg-[#FEFFF4] rounded-full px-4 py-2">
            <div className="bg-[#2D3B36] rounded-full w-5 h-5 mr-3"></div>
            <span className="text-xl font-inter text-[#2D3B36] capitalize">
              why our products
            </span>
          </button>

          <div className="uppercase mx-6">
            <h1 className="text-5xl text-[#2D3B36] font-inter leading-14">
              your skin deserves
              <br />
              the best care.
            </h1>
          </div>
          <div className="mx-6 my-6  ">
            <p className="text-xs   text-justify">
              Discover a curated collection of skincare products designed to
              rejuvenate, protect, and pamper your skin. Explore our rage
              crafted with love backed by science, and inspired by nature.
            </p>
          </div>

          <div className="space-y-6 mx-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-8">
                <div className=" bg-gradient-to-b from-[#293330] to-[#FEFFF4] text-transparent bg-clip-text leading-normal  md:text-4xl">
                  {feature.number}
                </div>

                <div>
                  <h1 className="text-[#2d3b36] text-4xl  mb-4 whitespace-nowrap">
                    {feature.title}
                  </h1>
                  <p className="font-normal text-[18px] text-[#525349] tracking-[-0.36px] leading-6">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="   h-auto w-3/6 flex flex-col justify-center items-center flex-wrap">
        <div className="mt-2  relative">
          <Image
            src="/images/AvocadoDemonstrate.png"
            alt="Avocado Demo"
            width={500}
            height={900}
            className="  object-cover rounded-4xl"
          />

          <div className="absolute  bottom-9  w-[30vw] left-1/2 -translate-x-1/2 z-11 flex  items-center p-4 gap-8 bg-[#EFF5E1]   rounded-4xl">
            <div className="border border-dashed border-[#2D3B36] p-1 rounded-full  ">
              <div className="bg-[#2D3B36] p-2 rounded-full ">
                <Medal className="text-[#EFF5E1] " />
              </div>
            </div>

            <p className="text-xl ">Best Skin Care Product Award Wining.</p>
          </div>
        </div>
        <div className=" flex  mt-3 w-lg justify-between ">
          <span>Since 2001 </span>
          <span>Learn More</span>
        </div>
      </section>
    </main>
  );
}
