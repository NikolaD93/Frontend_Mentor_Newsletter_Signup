import success from "../assets/icon-success.svg";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="bg-white rounded-[30px] py-10 px-14 h-[480px] w-[500px]">
      <img
        className="h-[50px] w-[50px] mb-10"
        src={success}
        alt="success-icon"
      />
      <h1 className="text-5xl font-[700] mb-5">Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to
        <span className="font-[700]"> ash@loremcompany.com. </span>
        Please open it and click the button inside to confirm your subsctiption.
      </p>
      <button
        onClick={handleClick}
        className="bg-darkSlateGray text-white font-[700] rounded-lg py-4 px-6 mt-10 w-[100%] transition ease-in-out duration-300 hover:bg-gradient-to-r from-pink-500 hover:to-yellow-500 hover:shadow-2xl hover:shadow-pink-500"
      >
        Dismiss message
      </button>
    </div>
  );
};

export default Success;