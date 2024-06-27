const Section = ({ title, text, id }) => {
  return (
    <div className="text-white min-h-[521px]  py-[70px] flex justify-center items-center">
      <div
        className={`mycontainer flex flex-col items-center justify-between ${
          id % 2 ? "md:flex-row " : "md:flex-row-reverse"
        }`}
      >
        <div className="md:w-1/2 w-full text-center md:text-start">
          <h2 className="text-[32px] md:text-[48px] font-bold md:font-extrabold">
            {title}
          </h2>
          <p className="text-[18px] md:text-[24px] mt-3 md:mr-5">{text}</p>
        </div>
        <div className="md:w-1/2 w-full z-50 relative overflow-hidden min-w-[272px] min-h-[204px] ">
          {id === "1" && (
            <>
              <video
                style={{ top: "20%", left: "10%" }}
                className="absolute z-0 min-w-[79%] min-h-[57%]"
                autoPlay
                playsInline
                muted
                loop
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              ></video>
              <img
                className="w-full h-full relative z-10"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                alt=""
              />
            </>
          )}
          {id === "2" && (
            <>
              <img
                className="relative"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                alt=""
              />
              <div
                style={{ bottom: "10%", left: "15%" }}
                className="bg-black absolute z-0 flex lg:h-[96px] sm:h-[76px] border h-[64px] border-gray-400 rounded-xl lg:p-4 p-2 items-center justify-between w-[70%]"
              >
                <div className="h-full flex">
                  <img
                    className=" h-full object-cover "
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                    alt=""
                  />
                  <div className="text-[14px] sm:text-[18px] pl-3">
                    <h3>Stranger Things</h3>
                    <h4 className=" text-blue-500">Downloading...</h4>
                  </div>
                </div>
                <img
                  className="w-[28px] h-[28px] sm:h-[40px] sm:w-[40px] object-cover"
                  src="https://cdn.dribbble.com/users/891352/screenshots/2154221/download_dot_bounce__success__dribbble.gif"
                  alt=""
                />
              </div>
            </>
          )}
          {id === "3" && (
            <>
              <video
                style={{ top: "10%", left: "20%" }}
                className="absolute overflow-hidden h-full  z-0 max-w-[63%] max-h-[47%]"
                autoPlay
                playsInline
                muted
                loop
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
              ></video>
              <img
                className="w-full overflow-hidden h-full relative z-10"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                alt=""
              />
            </>
          )}
          {id === "4" && (
            <>
              <img
                src="https://occ-0-7292-3467.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
                alt=""
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section;
