import React from 'react'
import styles from '../style'
import { quotes } from '../assets'

const Feedback = ({content,title}) => 
   (
    <div className='flex jusitfy-between flex-col px-15 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card '>
      <img src={quotes} alt="" className='w-[42px] h-[27px] object-contain'/>
      <p className={` font-poppins font-semibold text-[36px] leading-[50px] text-gradient`}>{title}</p>
    <p className=' font-poppins font-normal text-[18px] py-10 leading-[32px] text-white my-10'>{content}</p>  
    </div>
  )


export default Feedback