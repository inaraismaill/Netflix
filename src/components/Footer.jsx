import { IoLanguage } from "react-icons/io5";
import classNames from 'classnames';

const Footer = () => {
  const navLink = classNames('border-b font-medium inline text-[14px] text-[#b3b3b3] border-[#b3b3b3]');
  const link="w-[50%] sm:w-[25%] my-2"
  return (
    <div>
      <div className="mycontainer py-[80px] text-white">
      <div className="mb-5"><a className={navLink} href="#">Questions? Contact us.</a></div>
        <div className="flex flex-wrap">
          <div className={link}><a className={navLink} href="#">FAQ</a></div>
          <div className={link}><a className={navLink} href="#">Help Center</a></div>
          <div className={link}><a className={navLink} href="#">Account</a></div>
          <div className={link}><a className={navLink} href="#">Media Center</a></div>
          <div className={link}><a className={navLink} href="#">Investor Relations</a></div>
          <div className={link}><a className={navLink} href="#">Jobs</a></div>
          <div className={link}><a className={navLink} href="#">Ways to Watch</a></div>
          <div className={link}><a className={navLink} href="#">Terms of Use</a></div>
          <div className={link}><a className={navLink} href="#">Privacy</a></div>
          <div className={link}><a className={navLink} href="#">Cookie Preferences</a></div>
          <div className={link}><a className={navLink} href="#">Corporate Information</a></div>
          <div className={link}><a className={navLink} href="#">Contact Us</a></div>
          <div className={link}><a className={navLink} href="#">Speed Test</a></div>
          <div className={link}><a className={navLink} href="#">Legal Notices</a></div>
          <div className={link}><a className={navLink} href="#">Only on Netflix</a></div>
        </div>
      <div>
      <div className="justify-between border border-gray-400 p-1 sm:mr-[30px] my-5 rounded border-solid inline-block">
        <div className="flex">
              <IoLanguage className="text-white mr-2 h-full flex" />
              <select
                id="lang"
                className="rounded sm:w-[100px] w-[20px] bg-[#0e0e0e7a]  text-white"
              >
                <option
                  className="bg-white text-black"
                  lang="en"
                  label="English"
                  value="en-AZ"
                  selected=""
                >
                  English
                </option>
                <option
                  className="bg-white text-black"
                  lang="ru"
                  label="Русский"
                  value="ru-AZ"
                >
                  Русский
                </option>
              </select>
            </div>
        </div>
        <h5 className="text-[14px] text-[#b3b3b3]">Netflix Azerbaijan</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
