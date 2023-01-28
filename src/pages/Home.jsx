import React from "react";
import { HeroIllustration } from "../assets/images";
import { Logo } from "../components";

const Home = () => {
  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="flex flex-col justify-around w-2/3 pl-16">
          <Logo />
          <div>
            <h1 className="font-bold text-7xl text-blue-900">
              Welcome to Altavic
            </h1>
            <p className=" text-gray-400 text-lg py-4">
              Move beyond the limits of your imagination.
            </p>
            <button className="my-8 bg-blue-900 text-white text-center font-bold py-4 px-12 rounded-full drop-shadow-xl hover:bg-blue-800">
              Learn more
            </button>
          </div>
        </div>
        <div className="">
          <img
            src={HeroIllustration}
            alt="home page illustration"
            className=""
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
