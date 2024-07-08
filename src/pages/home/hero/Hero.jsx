const Hero = () => {
  return (
    <div className=" min-h-screen py-6 h-full w-full bg-[#2042B6]  px-10  text-white pt-32">
      <div className="flex lg:flex-row md:flex-row flex-col-reverse justify-between">
        <div className="">
          <ul className="text-white space-y-6">
            <li>
              <p className="text-4xl font-bold">60</p>
              <p>companies</p>
            </li>
            <li>
              <p className="text-4xl font-bold">$100B </p>
              <p>Market cap</p>
            </li>
            <li>
              <p className="text-4xl font-bold">3.5x</p>
              <p>Revenue multiple</p>
            </li>
            <li>
              <p className="text-4xl font-bold">60%</p>
              <p>LTM avg. revenue growth rate</p>
            </li>
          </ul>
        </div>
        <div className=" space-y-4 text-center mb-12  lg:mr-44  ">
          <div className="bg-network-bg bg-no-repeat bg-center pt-20   min-h-96">
            <h1 className="lg:text-6xl text-4xl font-bold  ">
              The WPPOOL Index
            </h1>
            <p className="text-xl ">
              Monitor the performance of emerging, publicly traded, financial
              technology companies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
