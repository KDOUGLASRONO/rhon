import React from "react";
// import { Link } from "react-router-dom";
import {FaUserAlt} from "react-icons/fa";
import {MdAccountBalanceWallet} from "react-icons/md"
import { useNavigate } from "react-router-dom";
const Header = ({userInfo, setSession}) => {
  const navigate = useNavigate();
  const handleLogOut = ()=>{
    sessionStorage.removeItem('session');
    setSession(null);
    navigate('/', {replace: true});
  }

  return (
      <header className=" flex w-full text-gray-400 bg-violet-500 body-font">
        <div className="container  flex flex-wrap p-5 justify-between md:flex-row items-center">
          <div className="flex text-xl px-2 py-1 rounded-2xl border-solid border-2  text-white mb-4 md:mb-0">
            <img src="https://img.icons8.com/cotton/64/null/gender-neutral-user--v2.png" className="bg-slate-300 rounded-2xl h-8 w-8 mr-4"/>
            <h3><i>{userInfo.name}</i></h3>
          </div>
          <div className="flex text-lg border-solid border-2 bg-violet-300 rounded-2xl px-2 py-2 text-yellow-400">
            <h3 className="mr-4">Balance:</h3>
            <h3><i>Ksh: </i>{userInfo.balance<0?0:userInfo.balance}</h3>                 
          </div>
          <div>
            <button
              onClick={handleLogOut}
              className="bg-red-600 px-2 py-2 rounded-lg text-white hover:text-xl">
              Sign Out
            </button>
          </div>        
        </div>
      </header>
  );
};

export default Header;
