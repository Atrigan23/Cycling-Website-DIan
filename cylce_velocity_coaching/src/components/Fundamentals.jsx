import React from "react";
import { coreFund, feedback } from "../constants";
import styles, { layout } from "../style";
import Feedback from "./Feedback";

const Fundamentals = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>
      <div className="absolute z-[5] w-[80%] h-[80%] -right-[50%] rounded-full purple"/>
      <div className="w-full flex justify-between items-center md:flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={`${styles.heading2} text-gradient`}>
          Core
          <br className=" sm:block" />
        </h1>
        <h1 className={`${styles.heading2} text-white`}>Fundamentals</h1>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] ">

        {coreFund.map((core)=>(

          <Feedback key={core.id} {...core} />


        ) )}
        
      </div>
    </section>
  );
};

export default Fundamentals;
