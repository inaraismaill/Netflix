import { IoLanguage } from "react-icons/io5";
import classNames from 'classnames';

const Footer = () => {
  const navLink = classNames('border-b font-medium inline text-[14px] text-[#b3b3b3] border-[#b3b3b3]');
  const link="w-[50%] sm:w-[25%] my-2"
  return (
    <div>
      <div className="mycontainer py-[80px] text-white">
      <div className="mb-5"><a className={navLink} href={"https://help.netflix.com/en/contactus"}>Questions? Contact us.</a></div>
        <div className="flex flex-wrap">
          <div className={link}><a className={navLink} href={"https://help.netflix.com/en/node/412"}>FAQ</a></div>
          <div className={link}><a className={navLink} href="https://help.netflix.com/en">Help Center</a></div>
          <div className={link}><a className={navLink} href="/login">Account</a></div>
          <div className={link}><a className={navLink} href="https://media.netflix.com/en/">Media Center</a></div>
          <div className={link}><a className={navLink} href="https://ir.netflix.net/ir-overview/profile/default.aspx">Investor Relations</a></div>
          <div className={link}><a className={navLink} href="https://jobs.netflix.com/">Jobs</a></div>
          <div className={link}><a className={navLink} href="https://help.netflix.com/en/node/14361">Ways to Watch</a></div>
          <div className={link}><a className={navLink} href="https://help.netflix.com/legal/termsofuse">Terms of Use</a></div>
          <div className={link}><a className={navLink} href="https://help.netflix.com/legal/privacy">Privacy</a></div>
          <div className={link}><a className={navLink} href="https://help.netflix.com/en/node/134094">Cookie Preferences</a></div>
          <div className={link}><a className={navLink} href="https://help.netflix.com/en/node/134094">Corporate Information</a></div>
          <div className={link}><a className={navLink} href="https://help.netflix.com/en/contactus">Contact Us</a></div>
          <div className={link}><a className={navLink} href="https://fast.com/">Speed Test</a></div>
          <div className={link}><a className={navLink} href="https://help.netflix.com/legal/notices">Legal Notices</a></div>
          <div className={link}><a className={navLink} href="https://www.netflix.com/az/browse/genre/839338">Only on Netflix</a></div>
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
