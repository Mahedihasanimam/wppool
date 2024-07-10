import { GoArrowDown } from "react-icons/go";

const Hero = () => {
  return (
    <div className=" py-6 h-full w-full bg-[#2042B6]  px-10  text-white pt-32">
      <div className="flex container mx-auto lg:flex-row md:flex-row flex-col-reverse justify-between">
        <div className="">
          <ul className="text-white space-y-6">
            <li>
              <p className="text-4xl font-normal">60</p>
              <p className="text-[#CDCDCD]">companies</p>
            </li>
            <li>
              <p className="text-4xl font-normal">$100B </p>
              <p className="text-[#CDCDCD]">Market cap</p>
            </li>
            <li>
              <p className="text-4xl font-normal">3.5x</p>
              <p className="text-[#CDCDCD]">Revenue multiple</p>
            </li>
            <li>
              <p className="text-4xl font-normal">60%</p>
              <p className="text-[#CDCDCD]">LTM avg. revenue growth rate</p>
            </li>
          </ul>
        </div>
        <div className=" space-y-4 text-center mb-12  lg:mr-44  ">
          <div className="bg-network-bg bg-no-repeat bg-center pt-20   min-h-96">
            <h1 className="lg:text-6xl text-4xl font-normal  ">
              The WPPOOL Index
            </h1>
            <p className="text-xl ">
              Monitor the performance of emerging, publicly traded, financial
              technology companies
            </p>
          </div>
        </div>
      </div>

      <button className="btn bg-white text-black rounded-full px-2.5 hover:bg-white absolute bottom-20 right-10">
      <GoArrowDown size={27}/>
      </button>
    </div>
  );
};

export default Hero;
