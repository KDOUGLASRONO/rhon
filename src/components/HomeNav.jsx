import React from "react";
import useAuth from "../state-manager";

const HomeNav = () => {
  const session = useAuth();

  const signOut = () => {
    session.signOut();
  };
  return (
    <div>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Rhon Finance</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
          <button
            onClick={() => {
              signOut();
            }}
            className="inline-flex items-center bg-red-700 border-0 py-1 px-3 focus:outline-none hover:bg-red-500 rounded text-white mt-4 md:mt-0"
          >
            Sign Out
          </button>
        </div>
      </header>
    </div>
  );
};

export default HomeNav;
