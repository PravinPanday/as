import  { useState } from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { formatDate } from "../../utils/formatDate";
import {AiFillStar} from 'react-icons/ai';
import FeedbackForm from './FeedbackForm';


const Feedback = () => {
    const[ShowFeedbackform,setShowFeedbackform] =useState(false)
  return (
    <div className="mb-[50px]">
      <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
        All reviews (272)
      </h4>
      <div className="flex justify-between gap-10 mb-[30px]">
        <figure className="max-w-[50px]">
          <img className="w-full rounded-full" src={avatar} alt="" />
        </figure>
        <div className="flex gap-3">
          <div>
            <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
              Ali Ahmed
            </h5>
            <p className="text-[14px] leading-6 text-textColor">
              {formatDate("02-14-2023")}
            </p>
            <p className="text_para mt-3 font-medium text-[15px]">
              Good services, highly recommended 
            </p>
          </div>
        </div>
      <div className="flex gap-1">
        {[.. Array(5).keys()].map((_ , index)=> <AiFillStar key= {index} color ='#0067FF'/>)}
      </div>
      </div>
              
 {!ShowFeedbackform && <div className="text-center">
                <button children="btn"  onClick={()=>setShowFeedbackform(true)}>Give Feedback </button>
              </div>
 }
 {ShowFeedbackform && <FeedbackForm/>}
    </div>
  );
};

export default Feedback;
// c->feedbackform.jsx
