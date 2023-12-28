import React from "react";
import styles, { layout } from "../style";

const Contact = () => (
  <div
    className={`max-w-xl w-full  mx-auto p-6 backdrop-blur-md bg-gray-600 rounded-[20px] `}
  >
    
    <h2 className={`${styles.heading2} text-center text-gradient `}>Get in Touch</h2>

    <form action="">
      <div className="mb-4">
        <label
          className={`${styles.paragraph} font-semibold mt-5 text-white p-6`}
          htmlFor=""
        >
          Name and Surname
        </label>
        {""}
        <input
          placeholder="John Doe"
          type="text"
          className="w-full px-3 py-2 border rounded-[20px] "
          required
        />
      </div>

      <div className="mb-4">
        <label
          className={`${styles.paragraph}  font-semibold mt-5 text-white p-6`}
        >
          Contact Email
        </label>
        <input
          placeholder="JohnD@example.com"
          type="email"
          className="w-full px-3 py-2 border rounded-[20px] "
          required
        />
      </div>
      <div className="mb-4">
        <label
          className={`${styles.paragraph}  font-semibold mt-5 text-white p-6`}
        >
          Contact Number
        </label>
        <input
          placeholder="000-000-0000"
          type="number"
          className="w-full px-3 py-2 border rounded-[20px] "
          required
        />
      </div>

      <div className="mb-4">
        <label
          className={`${styles.paragraph}  font-semibold mt-5 text-white p-6`}
        >
          Message
        </label>
        <textarea row='8'
          placeholder="Leave a Message here..."
          type="text"
          className="w-full px-3 py-2 border rounded-[20px] "
          required
        />
      </div>
    </form>

    <div className="justify-center">
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text[16px]  rounded-[20px]`} >
      Submit

    </button>
    </div>

  </div>
);

export default Contact;
