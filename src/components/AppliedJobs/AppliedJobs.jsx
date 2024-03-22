import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setappliedJobs] = useState([]);

  useEffect(() => {
    const storedJobId = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobId.includes(job.id));
      console.log(jobs, storedJobId, jobsApplied);
      setappliedJobs(appliedJobs);
    }
  }, [jobs]);
  return (
    <div>
      <h1>AppliedJobs: {appliedJobs.length}</h1>
      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a>All</a>
          </li>
          <li>
            <a>Remote</a>
          </li>
          <li>
            <a>onside</a>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default AppliedJobs;
