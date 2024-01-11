import React, { useRef } from 'react';
import styles, { layout } from "../style";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {
const form = useRef();
const notify = () => toast.success('Message Sent, Coach will be in touch.', {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  });
  
const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_1v1754r",
      "template_7un6jt5",
      form.current,
      "tAH_kXwNDhqIbSCGf"
    )
    .then(
      (result) => {
        notify()
      },
      (error) => {
        
      }
    );
};

  return (
    <div
      className={`max-w-xl w-full  mx-auto p-6 backdrop-blur-md bg-gray-600 rounded-[20px] `}
    >
      <h2 className={`${styles.heading2} text-center text-gradient `}>
        Get in Touch
      </h2>
      <form ref={form} onSubmit={sendEmail}>
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
            name="name"
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
            name="email"
          />
        </div>
        <div className="mb-4">
          <label
            className={`${styles.paragraph}  font-semibold mt-5 text-white p-6`}
          >
            Contact Number
          </label>
          <input
            href="9051290512"
            id='phone'   
            placeholder="000-000-0000"
            type="number"
            className="w-full px-3 py-2 border rounded-[20px] "
            required
            name="contactNum"
          />
        </div>
        <div className="mb-4">
          <label
            className={`${styles.paragraph}  font-semibold mt-5 text-white p-6`}
          >
            Message
          </label>
          <textarea
            row="8"
            placeholder="Leave a Message here..."
            type="text"
            className="w-full px-3 py-2 border rounded-[20px] "
            required
            name="message"
          />
        </div>

        <div className="justify-center">
          <button
            type="submit"
            className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text[16px]  rounded-[20px]`}
            
          >
            Submit
          </button>
          
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Contact;
