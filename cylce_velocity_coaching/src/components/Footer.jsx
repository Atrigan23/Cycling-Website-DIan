import React from "react";
import styles from "../style";
import { logo, cycling } from "../assets";
import { footerLinks } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div>
        <img
          src={cycling}
          alt="CVC"
          className="w-[266px] h-[100px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          Ignite Your Pedals, Unleash Your Potential: Coaching the Future of
          Cycling
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between felx-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLinks) => (
          <div
            key={footerLinks.key}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className={`font-poppins font-medium text-[18px] leading-[27px] text-white`}>{footerLinks.title}</h4>
            <ul>
              {footerLinks.links.map((link,index)=> (
                <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLinks.links.length -1 ? 'mb-4' : 'mb-0'}`}>
                  {link.name}


                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
