import Faq from "../components/FAQ";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Section from "../components/Section";

const Home = () => {
  return (
    <div className="bg-black">
      <Main />
      <div className="w-full bg-[#232323] h-[8px]"></div>
      <Section
        id="1"
        title="Enjoy on your TV"
        text="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
      />
      <div className="w-full bg-[#232323] h-[8px]"></div>
      <Section
        id="2"
        title="Download your shows to watch offline"
        text="Save your favorites easily and always have something to watch."
      />
      <div className="w-full bg-[#232323] h-[8px]"></div>
      <Section
        id="3"
        title="Watch everywhere"
        text="WStream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
      />
      <div className="w-full bg-[#232323] h-[8px]"></div>
      <Section
        id="4"
        title="Create profiles for kids"
        text="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
      />
      <div className="w-full bg-[#232323] h-[8px]"></div>
      <Faq />
      <div className="w-full bg-[#232323] h-[8px]"></div>
      <Footer />
    </div>
  );
};

export default Home;
