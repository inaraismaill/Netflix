import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser } from "../reduxslice/usersSlise";

const Register = () => {
  const mymail = useSelector((state) => state.email.value);
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  const { register, handleSubmit, formState } = useForm({});
  const { errors } = formState;

  const checkData = (data) => {
    let userExists = false;
    users.forEach((item) => {
      if (item.email === data.email) {
        userExists = true;
      }
    });
    return userExists;
  };

  console.log(users);
  const onSubmit = (data) => {
    if (!checkData(data)) {
      dispatch(addNewUser(data));
      console.log(users);
      navigate("/login");
    } else {
      alert("User with this data already exists");
    }
  };

  const input =
    "text-[rgba(255, 255, 255, 0.7)] h-[56px] text-start text-[16px] mt-4 border border-solid rounded border-gray-700 w-full bg-[#0e0e0e7a]  p-3";

  return (
    <div className="bg-black">
      <div className="text-white sm:h-screen h-[567px] sm:bg-transparent sm:bg-image bg-black">
        <div className="w-full h-full font-netflix-sans  ">
          <div className="bg-[#00000091] w-full h-full  text-start">
            <header className="py-5">
              <div className="justify-between mycontainer flex-wrap items-center lg:p-0  px-4 h-full flex">
                <div className="lg:w-[148px] lg:h-[40px] w-[89px]">
                  <svg
                    viewBox="0 0 111 30"
                    version="1.2"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="w-full bg-red-600 p-2 rounded h-full"
                  >
                    <g>
                      <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" />
                    </g>
                  </svg>
                </div>
              </div>
            </header>
            <div className="mycontainer flex justify-center">
              <div className="bg-[#000000cb] rounded sm:py-[48px] p-5 sm:px-[68px] w-full sm:w-[450px]">
                <h2 className=" text-[24px] sm:text-[32px] font-bold">
                  Sign Up
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className={input}
                    defaultValue={mymail}
                    placeholder="Email"
                    type="email"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "mail is importand",
                      },
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message:
                          "Email length needs to be at least 6 characters",
                      },
                    })}
                  />
                  <p className="text-red-500 mt-2">{errors.email?.message}</p>
                  <input
                    placeholder="Password"
                    className={input}
                    type="password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "password is importand",
                      },
                      validate: {
                        azeri: (fieldvalue) => {
                          return (
                            fieldvalue.trim() !== "" || "this is sooo wrong"
                          );
                        },
                      },
                    })}
                  />
                  <p className="text-red-500 mt-2">
                    {errors.password?.message}
                  </p>
                  <button
                    type="submit"
                    className="block w-full hover:bg-[#e50914de] py-1 text-center my-4 bg-[#e50914] rounded text-[16px]"
                  >
                    Sign Up
                  </button>
                </form>
                <div className="text-[#8C8C88]">
                  <h4 className="text-[16px]">
                    Have account to Netflix?{" "}
                    <NavLink to="/login" className="text-white">
                      Sign in now.
                    </NavLink>
                  </h4>
                  <h5 className="text-[13px] mt-[20px] leading-4">
                    This page is protected by Google reCAPTCHA to ensure you re
                    not a bot. Learn more.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
