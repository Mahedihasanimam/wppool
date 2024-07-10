import React from "react";

const companies = [
  { company: "Adyen", ticker: "AFRM", vertical: "Payments", price: "$17.15", marketCap: "$50.5", revenueGrowth: "49.0%", grossMargin: "15.8%", evRevenue: "6.3", ytdPerformance: "24.3%" },
  { company: "Affirm", ticker: "AFRM", vertical: "Lending", price: "$16.12", marketCap: "$4.7", revenueGrowth: "42.0%", grossMargin: "48.7%", evRevenue: "4.9", ytdPerformance: "77.1%" },
  { company: "Alkami Technology", ticker: "ALKT", vertical: "B2B SaaS", price: "$16.27", marketCap: "$1.5", revenueGrowth: "34.0%", grossMargin: "53.0%", evRevenue: "7.0", ytdPerformance: "10.0%" },
  { company: "AvidXchange", ticker: "AVDX", vertical: "Payments", price: "$10.21", marketCap: "$2.0", revenueGrowth: "27.0%", grossMargin: "61.5%", evRevenue: "6.0", ytdPerformance: "10.5%" },
  { company: "Bakkt Holdings", ticker: "BKKT", vertical: "Wealth", price: "$1.32", marketCap: "$0.1", revenueGrowth: "38%", grossMargin: "--", evRevenue: "0.4", ytdPerformance: "13.8%" },
  { company: "Virtu Financial Inc", ticker: "VIRT", vertical: "Wealth", price: "$17.0", marketCap: "$3.1", revenueGrowth: "-22.0%", grossMargin: "38.2%", evRevenue: "2.6", ytdPerformance: "-17.8%" },
  // Repeat for other companies...
];

const CompaniesTable = () => {
  return (
    <div className="overflow-x-auto w-full p-4 container mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All Companies</h1>
        <input
          type="text"
          placeholder="Search Companies"
          className="input input-bordered"
        />
      </div>
      <table className="table w-full">
        <thead className="text-black font-bold">
          <tr>
            <th>Company</th>
            <th>Ticker</th>
            <th>Vertical</th>
            <th>Price</th>
            <th>Market Cap ($B)</th>
            <th>Revenue Growth</th>
            <th>Gross Margin</th>
            <th>EV/Revenue</th>
            <th>YTD Performance</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr className="odd:bg-slate-100" key={index}>
              <td>{company.company}</td>
              <td>{company.ticker}</td>
              <td>{company.vertical}</td>
              <td>{company.price}</td>
              <td>{company.marketCap}</td>
              <td>{company.revenueGrowth}</td>
              <td>{company.grossMargin}</td>
              <td>{company.evRevenue}</td>
              <td>{company.ytdPerformance}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <button className="btn bg-[#2042B6] hover:bg-[#2042B6] shadow-md rounded-full text-white border-none mr-2">Download 'All Companies' Data</button>
        <button className="btn bg-[#2042B6] hover:bg-[#2042B6] shadow-md rounded-full text-white border-none ">View Methodology</button>
      </div>
    </div>
  );
};

export default CompaniesTable;
