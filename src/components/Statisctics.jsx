import React from "react";

const Statisctics = () => {
  return (
    <div className="bg-slate-50 w-full my-8 px-0 py-4 md:px-4">
        <div className="text-center w-full text-xl my-4 md:text-4xl">
            <h3><i>Transforming Lives Through Technology</i></h3>
        </div>
        <div className="grid-cols-1 w-full text-sm md:flex gap-2 justify-between px-4 md:text-center md:text-lg">
            <div className="bg-slate-100 my-8 px-4 rounded-lg text-center py-4">
                <h3>Merchants Onboarded</h3>
                <h1 className="text-xl text-violet-600 my-xl text-center md:text-4xl">2179+</h1>
            </div>
            <div className="bg-slate-100 my-8 px-4 rounded-lg text-center py-4">
                <h3>Transactions processed successfully</h3>
                <h1 className="text-xl text-violet-600 my-xl text-center md:text-4xl">200,000 +</h1>
            </div>
            <div className="bg-slate-100 my-8 px-4 rounded-lg text-center py-4">
                <h3>Transactions per minute</h3>
                <h1 className="text-xl text-violet-600 my-xl text-center md:text-4xl">10,000+</h1>
            </div>
            <div className="bg-slate-100 my-8 px-4 rounded-lg text-center py-4">
                <h3>Months in business</h3>
                <h1 className="text-xl text-violet-600 my-xl text-center md:text-4xl">12 +</h1>
            </div>
        </div>
    </div>
  );
};

export default Statisctics;
