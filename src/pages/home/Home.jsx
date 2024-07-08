import React from "react";
import Hero from "./hero/Hero";
import ChartComponent from "./chart/ChartComponent";
import Sidebar from "./chart/Sidebar";
import TopCards from "./chart/TopCards";

const Home = () => {
  return (
    <div className="mt-16">
      <Hero />
      <div className="flex container mx-auto flex-col lg:flex-row h-fit px-2 my-4">
        <Sidebar />
        <div className="flex flex-col flex-grow p-4">
          <header className="App-header text-black py-4 mb-4">
            <h1 className="text-3xl font-bold">The WPPOOL Index</h1>
          </header>
          <TopCards />
          <main className="flex-grow">
            <ChartComponent />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
