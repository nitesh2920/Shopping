import Image from "next/image";

const SliderSection = () => {
  return (
    <div className="w-full h-full mt-20 border  ">
      <div className=" flex justify-around items-center ">

        <div className="flex justify-end  ">
          <button className="mb-1 mx-6 flex items-center justify-start border border-solid border-[#2D3B36] bg-[#FEFFF4] rounded-full px-4 py-2">
            <div className="bg-[#2D3B36] rounded-full w-5 h-5 mr-3"></div>
            <span className="text-xl font-inter text-[#2D3B36] capitalize">
              Best Seeling Products
            </span>
          </button>
        </div>

        <div className="uppercase mx-6 ">
          <h1 className="text-5xl text-center text-[#2D3B36] font-inter leading-14">
            Skincare That Brings Out <br />
            Your Natural Radiance
          </h1>
        </div>

        <div className="flex gap-4 justify-between ">
          <Image
            src="/images/leftArrow.svg"
            alt="left arrow"
            width={50}
            height={50}
          />

          <Image
            src="/images/rightArrow.svg"
            alt="right arrow"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
