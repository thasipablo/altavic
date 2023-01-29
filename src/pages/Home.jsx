import React from "react";
import { HeroIllustration } from "../assets/images";
import { Logo } from "../components";

const Home = () => {
  return (
    <main className="min-h-screen sm:pt-8">
      <div className="max-w-7xl mx-auto sm:p-8 flex md:flex-col lg:flex-row">
        <div className="flex flex-col justify-around w-2/3 md:pl-16 sm:justify-between">
          <Logo />
          <div>
            <h1 className="font-bold sm:text-5xl md:text-7xl text-blue-900">
              Welcome to Altavic
            </h1>
            <p className=" text-gray-400 text-lg py-4">
              Move beyond the limits of your imagination.
            </p>
            <button className="my-8 bg-blue-900 text-white text-center font-bold py-4 md:px-12 sm:px-8 rounded-full drop-shadow-xl hover:bg-blue-800">
              Learn more
            </button>
          </div>
        </div>
        <div className="sm:hidden md:block">
          <img
            src={HeroIllustration}
            alt="home page illustration"
            className="sm:hidden md:block"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
