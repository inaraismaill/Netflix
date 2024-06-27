import { SlArrowRight } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMail } from "../reduxslice/mailSlice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const mymail = e.target.email.value;
    navigate("/signup");
    dispatch(addMail(mymail));
    e.preventDefault();
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="sm:flex justify-center mt-[20px]"
    >
      <input
        className="text-[rgba(255, 255, 255, 0.7)] h-[56px] sm:mr-1 border border-solid rounded border-gray-100 w-[85%] sm:w-[65%]  lg:w-[355px] bg-[#0e0e0e7a]  p-2 sm:p-4 lg:py-[15px] lg:px-[20px]"
        type="email"
        name="email"
        placeholder="Email address"
      />
      <div className="flex justify-center h-[56px] sm:m-0 mt-2 lg:m-0">
        <button
          type="submit"
          className="flex items-center sm:ml-1 hover:bg-[#e50914de] bg-[#e50914] px-3  py-2 rounded-md text-[18px] lg:text-[24px] "
        >
          Get Started <SlArrowRight className="ml-2" />
        </button>
      </div>
    </form>
  );
};

export default Signup;
