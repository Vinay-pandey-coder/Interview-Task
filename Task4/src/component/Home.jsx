import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-30">
        <div>
          <h1 className="flex ml-39 font-bold text-6xl">AI <span className="ml-4 mr-4 text-green-500">Readiness</span> Score</h1>
          <h1 className=" font-bold text-6xl">For Growth Stage <span className="text-orange-600">Compaines</span></h1>
          <div className="mt-6">
            <p className="ml-45">
              Understand how ready your business is to use Al across systems,
              team, and
            </p>
            <p className="ml-45">
              deta Get a clear score, see what breaks first, and know exactly
              what to fix
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-10 gap-4">
        <button className="bg-black text-white  p-4 rounded-xl cursor-pointer hover:bg-white hover:text-black hover:border hover:border-gray-500">
          Get My Al Readiness Score
        </button>
        <button className="bg-white text-black border border-gray-400 p-4 rounded-xl cursor-pointer hover:bg-gray-300">
          Request Callback →
        </button>
      </div>

      <div className="flex items-center justify-center mt-10">
        <div className="bg-black h-100 mb-10 items-center justify-center mt-30 w-[70%] rounded-4xl grid grid-cols-2">
          <div className="flex items-center justify-center -mt-80 ml-[100%] gap-4">
            <div>
              <div className="bg-blue-700 cursor-pointer hover:shadow hover:shadow-gray-400 w-80 h-50 shadow shadow-gray-200 rounded-2xl">
                <img
                  src="/images/image1.png"
                  alt=""
                  className="w-80 h-50 mt-10 py-5 px-5"
                />
              </div>
            </div>
            <div>
              <div className="bg-red-500 cursor-pointer hover:shadow hover:shadow-gray-400 w-80 h-50 shadow shadow-gray-500 rounded-2xl">
                <img
                  src="/images/image2.png"
                  alt=""
                  className="w-80 h-50 mt-10 py-5 px-5"
                />
              </div>
            </div>
            <div>
              <div className="bg-yellow-600 cursor-pointer hover:shadow hover:shadow-gray-400 w-80 h-50 shadow shadow-gray-500 rounded-2xl">
                <img
                  src="/images/image3.png"
                  alt=""
                  className="w-80 h-50 mt-10 py-5 px-5"
                />
              </div>
            </div>
          </div>

          <div className="mt-25">
            <h1 className="text-white font-bold text-3xl -ml-35">
              Not a Tool. A <span className="text-cyan-500">Diagnostic</span>
            </h1>
            <p className="text-white text-sm -ml-[70%]">
              If you're a founder, COO, or internal operator scaling a business
              that already works-but behind the scenes, it's duct-taped together
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
