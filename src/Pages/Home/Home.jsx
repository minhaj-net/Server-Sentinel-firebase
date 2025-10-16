import React from "react";
import { Bounce, toast } from "react-toastify";

const Home = () => {
  const handleNotifyMe = () => {
    console.log("Handle button notify");
    toast.success("🦄  You’ll be notified when the profile is ready!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };
  return (
    <div className="hero min-h-screen bg-gradient-to-br from-purple-300 via-purple-500 to-purple-300">
      <div className="hero-overlay"></div>
      <title>Firebase-Home</title>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-4xl">
          <h1 className="mb-5 text-5xl font-bold animate-bounce">
            🚀 Homepage is Coming Soon
          </h1>
          <p className="mb-5">
            Stay tuned! We’re crafting something amazing for you ✨
          </p>
          <button
            onClick={handleNotifyMe}
            className="btn relative px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(139,92,246,0.7)] "
          >
            Notify me !
          </button>

          <p className="mt-24">Developed by MINHAJ 💎</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
