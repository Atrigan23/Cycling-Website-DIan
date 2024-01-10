import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card
 `}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
    <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex flex-1 flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="About" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Elevate Your Ride, Transform Your Journey:
          <br className="sm:block-hidden" />
        </h2>
        <h2 className={`${styles.heading2} text-gradient`}>
          {" "}
          Cycling Excellence Starts Here!"
        </h2>
        <p className={`${styles.paragraph} mt-5`}>
          Welcome to Cycling Velocity Coaching, where personalized plans,
          cutting-edge training, and a vibrant community propel your cycling
          journey. Tailored coaching, interactive platforms, and nutritional
          guidance ensure peak performance. Join us to master skills, set new
          speeds, and embrace the thrill of Cycling Velocity Coaching. Elevate
          your ride today!
          <br className="sm:block-hidden" />
          At Cycling Velocity Coaching, we understand that every rider is
          unique. Our personalized coaching programs are crafted to suit your
          individual goals, whether you're a beginner looking to build a solid
          foundation or a seasoned cyclist aiming for podium finishes.
          <br className="sm:block-hidden" />
          Experience the power of tailored training plans designed to optimize
          your performance. Our coaches leverage cutting-edge techniques,
          combining the latest in sports science and cycling technology to
          elevate your strength, endurance, and speed.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};
export default Business;
