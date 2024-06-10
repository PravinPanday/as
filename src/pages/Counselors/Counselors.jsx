import CounselorCard from "./../../components/Counselors//CounselorCard";
import { Counselors } from "./../../assets/data/Counselors";
import Testimonial from "../../components/Testimonial/Testimonial";



const Doctors = () => {
    return (
        <>
        <section className="bg-[#f6f6f6]">
  <div className="container text-center">
    <h2 className="heading">Find a Counselor </h2>
    <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
      <input 
        type="search"
        className="py-4 pl-2 bg-transparent w-full focus:outline-none cursor-pointer"
        placeholder="Search Doctor"
      />
      <button className="btn mt-0 rounded-[0px] rounded-r-md">
        Search
      </button>
    </div>
  </div>
</section>

<section>
  <div className="container">
    {/* add counselor 1,2,3,4  */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  </div>
</section>
<section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">What our User say</h2>
          <p className="text_para text-center">
            World-class care for everyone. Our health system offers unmatched, expert health care.
          </p>
        </div>
        <Testimonial />
      </div>
    </section>


        </>

    );
};
export default Counselor ;
