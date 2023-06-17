import { useNavigate } from "react-router-dom";
import list from "../assets/icon-list.svg";
import imgDesktop from "../assets/illustration-sign-up-desktop.svg";
import imgMobile from "../assets/illustration-sign-up-mobile.svg";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const navigate = useNavigate();
  const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleClick = () => {
    if (!email || !validEmail.test(email)) {
      setErrorMsg(true);
    } else {
      setErrorMsg(false);
      navigate("/success");
    }
  };

  return (
    <div className="flex flex-col-reverse bg-white md:rounded-[30px] md:flex-row md:p-5 md:h-[600px]">
      <div className="py-10 md:py-14 px-8 color-charcoalGrey">
        <h1 className="text-4xl md:text-5xl font-[700] mb-5">Stay updated!</h1>
        <p className="max-w-[380px] mb-5">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul>
          <li className="flex items-start mb-3">
            <img src={list} alt="list" /> &nbsp; Product discovery and building
            what matters
          </li>
          <li className="flex items-start mb-3">
            <img src={list} alt="list" /> &nbsp; Measuring to ensure updates are
            a success
          </li>
          <li className="flex items-start mb-10">
            <img src={list} alt="list" /> &nbsp; And much more!
          </li>
        </ul>

        <div className="flex justify-between">
          <label className="text-[12px] font-[700]">Email address</label>
          <span
            className={`${
              errorMsg ? "text-[12px] font-[700] text-tomato" : "hidden"
            }`}
          >
            Valid email required
          </span>
        </div>
        <br />
        <input
          onChange={(e) => setEmail(e.target.value)}
          className={`${
            errorMsg
              ? "border-2 border-tomato bg-red-200  placeholder-tomato"
              : "border-2"
          } rounded-lg -mt-5 mb-4 py-4 px-6 w-[100%]`}
          type="email"
          placeholder="email@company.com"
        />
        <br />
        <button
          onClick={handleClick}
          className="bg-darkSlateGray text-white font-[700] rounded-lg py-4 px-6 w-[100%] transition ease-in-out duration-300 hover:bg-gradient-to-r from-pink-500 hover:to-yellow-500 hover:shadow-2xl hover:shadow-pink-500"
        >
          Subscribe to monthly newsletter
        </button>
      </div>
      <div>
        <img
          className="h-[100%] hidden md:block"
          src={imgDesktop}
          alt="desktop-image"
        />
        <img
          className="w-[100%] md:hidden"
          src={imgMobile}
          alt="mobile-image"
        />
      </div>
    </div>
  );
};

export default Newsletter;
