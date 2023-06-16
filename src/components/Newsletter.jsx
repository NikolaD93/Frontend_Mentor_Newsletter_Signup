import React from "react";
import list from "../assets/icon-list.svg";
import success from "../assets/icon-success.svg";
import imgDesktop from "../assets/illustration-sign-up-desktop.svg";
import imgMobile from "../assets/illustration-sign-up-mobile.svg";

const Newsletter = () => {
  return (
    <div className="flex bg-white rounded-[30px] p-5 h-[600px]">
      <div className="py-14 px-8 color-charcoalGrey">
        <h1 className="text-5xl font-[700] mb-5">Stay updated!</h1>
        <p className="max-w-[380px] mb-5">Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li className="flex mb-3">
            <img src={list} alt="list" /> &nbsp; Product discovery and building
            what matters
          </li>
          <li className="flex mb-3">
            <img src={list} alt="list" /> &nbsp; Measuring to ensure updates are
            a success
          </li>
          <li className="flex mb-10">
            <img src={list} alt="list" /> &nbsp; And much more!
          </li>
        </ul>

        <label className="text-[12px] font-[700]">Email address</label>
        <br />
        <input className="border-2 rounded-lg mt-2 mb-4 py-4 px-6 w-[100%]" type="email" placeholder="email@company.com" />
        <br />
        <button className="bg-darkSlateGray text-white font-[700] rounded-lg py-4 px-6 w-[100%] transition ease-in-out duration-300 hover:bg-gradient-to-r from-pink-500 hover:to-yellow-500 hover:shadow-2xl hover:shadow-pink-500">Subscribe to monthly newsletter</button>
      </div>
      <div>
        <img className="h-[100%]" src={imgDesktop} alt="desktop-image" />
      </div>
    </div>
  );
};

export default Newsletter;