import Error from "../components/Error/Error";
import Loader from "../components/Loader/Loader";
import  useGetProfile  from "../hooks/useFetchData";
import { BASE_URL } from "../config";
import Tabs from "./Tabs";
import { useState } from "react";
import CounselorAbout from "./../../pages/Counselors/CounselorAbout";
import Profile from "./Profile";
import Appointments from "./Appointments"
const Dashboard = () => {
  const { data, loading, error } = useGetProfile(`${BASE_URL}/counselors/profile/me`);
  const [tab,setTab] = useState('overview')

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loader />}
        {!loading && error && <Error />}
        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
            {/* Add your content here */}
            <Tabs tab={tab} setTab={setTab}/>
            <div className="lg:col-span-2">
                {data.isApproved ==='pending' &&(
                <div className="flex p-4 md-4 text-yellow-800 bg-yellow-500 rouded-lg">
                    
                    <svg 
                       aria-hidden="true" 
                       className="flex-shrink-0 w-5 h-5" 
                  fill="currentColor" 
                   viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
  >
             <path 
                   fillRule="evenodd" 
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 10-2 0 1 1 0 002 0zm-2 9a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm0-2v-3a1 1 0 112 0v3a1 1 0 11-2 0z" 
      clipRule="evenodd"
                 />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div className="ml-3 text-sm font-medium" >
                        To get approval complete your profile . We&apos;ll
                        review manually and approve within 3days.

                    </div>

                </div>
                ) }
                <div className="mt-8">
                    {tab==='overview' && (
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <figure className="max-w-[200px] max-h-[200px]">
                                <img src="{data?.photo}" alt="" className="w-full" />
                            </figure>
                            <div>
  <span className="bg-[#CCF0F7] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded-full text-[12px] 
  leading-4 lg:text-[16px] lg:leading-6 font-semibold">
    {data.specialization}
  </span>
  <h3 className="text-[22px] leading-9 font-bold text-headingColor mt-3">
    {data.name}
  </h3>
  <div className="flex items-center gap-[6px]">
    <span className="flex items-center gap-[6px] text-headingColor text-[14px] leading-5 
    lg:text-[16px] lg:leading-6 font-semibold">
      <img src={starIcon} alt="" />
      {data.averageRating}
    </span>
    <span className="text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
      <img src={starIcon} alt="" />
      ({data.totalRating})
    </span>
  </div>
  <p className="text__para font-[15px] lg:max-w-[390px] leading-6">
    {data?.bio}

  </p>
</div>
<CounselorAbout 
name={Date.name} 
about= {data.about} 
qulification={data.qulification}
experience= {data.experience}/>
 </div>
                        
                    </div> )}
                    {tab==='appointment' && <Appointments appointments={data.appointments}/> }
                    {tab==='setting' && <Profile counselorData={data}/> }
                    </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
