import React, { useContext } from "react";

const Searchresults = ({ results }) => {
  
//   const{setStockSymbol}=useContext(StockContext);

  if (!results) {
    // Handle the case where results is undefined or null
    return null; // or return a default message or loading indicator
  }
  return (
    <ul
      className="absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll border-neutral-200 custom-scrollbar
         bg-[#07011f] border-[#44387307011f] bg-neutral-200">
      
    
      {results.map((item) => {
        return (
          <li
          onClick={()=>{
            // setStockSymbol(item.symbol)
          }}
            key={item.symbol}
            className="cursor-pointer p-4 m-2 flex items-center justify-between rounded-md hover:bg-indigo-200"
          >
            <span> {item.symbol}</span>
            <span>{item.descrption}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Searchresults;