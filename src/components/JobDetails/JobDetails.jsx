import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";


const JobDetails = () => {
  const jobs= useLoaderData();
  const {id} = useParams();
  const idInt = parseInt(id)
  const job = jobs.find(job => job.id === idInt);
  console.log(job);

  const handleApplyJob = () => {
    saveJobApplication(idInt)
  toast('You have applied successfully');
  }
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-4">
        <div className=" border md:col-span-3">
          <h2 className="text-4xl">Details coming here</h2>
          <h1>Job Details of: {job.job_title}</h1>
          <p>{job.job_description}</p>
         
         <div className="mt-3">
         <h1>Job Details of: {job.job_title}</h1>
         <p>{job.job_responsibility}</p>
         </div>
        </div>
        <div className="border">
        <h2 className="text-2xl">side thing</h2>
        <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply now</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;