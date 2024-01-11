import styles from "../style";
import { discount, robot, cycling } from "../assets";
import GetStarted from "./getStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div
        className={`flex flex-row items-center py-[6px] px-4 
      bg-discount-gradient rounded-[10px] mb-2`}
      >
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount for{" "}
          <span className="text-white"> 1 Month</span> Account
        </p>
      </div>

      <div className={`flex flex-row justify-between items-center w-full`}>
        <h1 className=" flex-1 flex-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Build You're <br className="sm:block hidden" />{" "}
          <span className="text-gradient font-serif">LEGACY</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      {/* <h1 className="flex-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        Payment Method
      </h1> */}
      <p className={`${styles.paragraph} max-w-[470px]`}>
        "Ride as much or as little, or as long or as short as you feel. But
        ride." - Eddy Merckx
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative `}>
      <img
        src={cycling}
        alt="billing"
        className="w-[100%] h-[100%] gradient-blue leading-[26px] p-10 relative z-[5]"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
      <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient"></div>
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 top-0 blue__gradient"></div>
    </div>
    <div className={`ss:hidden ${styles.flexCenter} `}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
