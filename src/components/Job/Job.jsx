import { FaLocationCrosshairs } from "react-icons/fa6";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {id, logo, job_title,company_name,remote_or_onsite, location,job_type,salary } = job;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img
          src={logo}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-5
          py-2 font-extrabold border rounded border-[#7e90fe] mr-4 text-[#7e90fe]">{remote_or_onsite}</button>
          <button className="px-5
          py-2 font-extrabold border rounded border-[#7e90fe] mr-4 text-[#7e90fe]">{job_type}</button>
        </div>
        <div className="mt-4 flex">
          <h2 className="flex mr-4"><FaLocationCrosshairs className="text-2xl mr-2"></FaLocationCrosshairs>{location}</h2>
          <h2 className="flex mr-2"><AiOutlineDollarCircle className="text-2xl"></AiOutlineDollarCircle>{salary}</h2>
        </div>
        <div className="card-actions">
        <Link to={`/job/${id}`}>
        <button className="btn btn-primary">View Details</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
