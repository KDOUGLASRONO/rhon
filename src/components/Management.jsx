import React from "react";

const Management = () => {
  return (
    <div className="my-4 px-0 w-full md:px-32">
      <div className="text-center w-full md:text-4xl my-4 md:text-center">
          <h2>UNLOCK THE POWER OF POSSIBILITIES</h2>
      </div>
      <div className="md:flex gap-4 justify-between px-4 leading-8 text-lg grid-cols-1">
          <div className="xl:w-3/12 sm:w-full bg-slate-100 py-4 px-4 my-4 hover:bg-slate-200 rounded-lg">
              <div>
                  <img src="https://img.icons8.com/3d-fluency/94/null/coins.png"/>
              </div>
              <h3><i>Accept payments</i></h3>
              <p> The fastest, safe and most convenient way for msmes to accept payment</p>
          </div>
          <div className="xl:w-3/12 sm:w-full bg-slate-100 py-4 px-4 my-4 hover:bg-slate-200 rounded-lg">
              <div>
                  <img src="https://img.icons8.com/3d-fluency/94/null/money.png"/> 
              </div>
              <h3><i>Manage Bills</i></h3>
              <p>The solution just build for your needs, Add bills, saving or financial goals
                  and The smart wallet will do the rest
              </p>
          </div>
          <div className="xl:w-3/12 sm:w-full bg-slate-100 py-4 px-4 my-4 hover:bg-slate-200 rounded-lg">
              <div>
                  <img src="https://img.icons8.com/3d-fluency/94/null/coin-wallet.png"/> 
              </div>
              <h3><i>Digital Wallet</i></h3>
              <p>With this intelligent wallet, We delegate all the redundant and repetitive
                  and focus on your work. 
              </p>
          </div>
      </div>
    </div>
  );
};

export default Management;
