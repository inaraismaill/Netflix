import { useQuery } from "@tanstack/react-query";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaPlay } from "react-icons/fa";

const Movies = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:3000/movies").then((res) => res.json()),
    retry: false,
  });

  if (isLoading) return "Loading...";

  if (error) return "have not any data";
  
  const bgImage = data[0].video;
  return (
    <div className="bg-[#141414] w-full min-h-screen">
      <div
        className="object-cover text-white bg-no-repeat bg-center w-full h-screen bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <header className="py-5 bg-[#00000085]">
          <div className="justify-between  mycontainer flex-wrap items-center lg:p-0 h-full flex">
            <div className="flex md:w-[600px] w-[89px]">
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
              <div className="md:flex items-center hidden justify-between ml-[50px] w-[400px]">
                <div>Ana sayfa</div>
                <div>Diziler</div>
                <div>Filmler</div>
                <div>En Yeniler</div>
                <div>Listem</div>
              </div>
            </div>
            <div className="flex justify-between w-[100px] text-[30px] text-white">
              <IoSearch />
              <IoMdNotificationsOutline />
              <CgProfile />
            </div>
          </div>
        </header>
        <div className="mycontainer h-[70%] flex justify-end flex-col">
          <h1 className="font-bold text-[25px] sm:text-[34px]">
            {data[0].name}
          </h1>
          <p className="text-bold sm:text-[18px] my-5 text-[15px]">
            {data[0].description}
          </p>
          <div>
            <button className="rounded inline-flex items-center p-2 px-4 font-bold bg-white text-black mr-5">
              <FaPlay className="mr-4" />
              Oynat
            </button>
            <button className="rounded inline-block p-2 px-4 font-bold bg-[#00000050] text-white mr-5">
              Daha fazla bilgi
            </button>
          </div>
        </div>
      </div>

      <div className="mycontainer py-5">
          <h2 className="text-white text-[20px] font-bold mb-4">Animasyon</h2>
          <Slider {...settings}>
            {data &&
              data?.map((item) => (
                <div key={item.id} className=" card ml-5">
                  <div className="relative transition-all w-[90%] h-[122px]">
                    <img
                      className="w-full rounded h-full object-cover"
                      src={item.poster}
                      alt=""
                    />
                    <div className="absolute rounded bg-slate-800 p-5 transition-all opacity-0 hover:opacity-100 top-0">
                      <img className="h-full rounded w-full" src={item.video} alt="" />
                      <h3 className="text-white mt-3">{item.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
        <div className="mycontainer py-5">
          <h2 className="text-white text-[20px] font-bold mb-4">Belgeseller</h2>
          <Slider {...settings}>
            {data &&
              data?.map((item) => (
                <div key={item.id} className="card ml-5">
                  <div className="relative transition-all w-[90%] h-[122px]">
                    <img
                      className="w-full rounded h-full object-cover"
                      src={item.poster}
                      alt=""
                    />
                    <div className="absolute rounded bg-slate-800 p-5 transition-all opacity-0 hover:opacity-100 top-0">
                      <img className="h-full rounded w-full" src={item.video} alt="" />
                      <h3 className="text-white mt-3">{item.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
        <div className="mycontainer py-5">
          <h2 className="text-white text-[20px] font-bold mb-4">Komedi</h2>
          <Slider {...settings}>
            {data &&
              data?.map((item) => (
                <div key={item.id} className="card ml-5">
                  <div className="relative transition-all w-[90%] h-[122px]">
                    <img
                      className="w-full rounded h-full object-cover"
                      src={item.poster}
                      alt=""
                    />
                    <div className="absolute rounded bg-slate-800 p-5 transition-all opacity-0 hover:opacity-100 top-0">
                      <img className="h-full rounded w-full" src={item.video} alt="" />
                      <h3 className="text-white mt-3">{item.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
    </div>
  );
};

export default Movies;
