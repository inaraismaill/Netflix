import img from "../assets/img/mainbg.jpg";
import Header from "./Header";
import Signup from "./SignUp";

const Main = () => {
  return (
    <div
      className="text-white sm:h-screen h-[567px]"
      style={{ background: `url(${img})` }}
    >
      <div className="bg-gradient-to-b w-full h-full">
        <div className="mycontainer bg-gradient-to-t w-full h-full  font-netflix-sans  text-center">
          <Header />
          <div className="justify-center flex items-center h-full">
            <div className=" sm:w-[80%]  lg:px-4 px-2">
              <h1 className="lg:text-[48px] text-[32px] font-extrabold">
                Unlimited movies, TV shows, and more
              </h1>
              <h3 className="text-[18px] lg:text-[24px] my-5">
                Watch anywhere. Cancel anytime.
              </h3>
              <h4 className="text-[18px] lg:text-[20px] px-[30px]">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h4>
              <Signup/>
              {/* <form className="sm:flex justify-center  mt-[20px]">
                <input
                  className="text-[rgba(255, 255, 255, 0.7)] h-[56px] sm:mr-1 border border-solid rounded border-gray-100 sm:w-[65%]  lg:w-[355px] bg-[#0e0e0e7a]  p-2 sm:p-4 lg:py-[15px] lg:px-[20px]"
                  type="text"
                  placeholder="Email address"
                />
                <div className="flex justify-center h-[56px] sm:m-0 mt-2 lg:m-0">
                  <button  className="flex items-center sm:ml-1 hover:bg-[#e50914de] bg-[#e50914] px-3  py-2 rounded-md text-[18px] lg:text-[24px] ">
                    Get Started <SlArrowRight className="ml-2" />
                  </button>
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
