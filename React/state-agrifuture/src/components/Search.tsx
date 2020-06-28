import React, { useState, useEffect } from "react";
import data from "../assets/data.json";
import Card from "./Card";
import { Job } from "./job.model";

let Search = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  console.log(data);
  useEffect(() => {
    setJobs(data);
  }, []);

  return (
    <div>
      {jobs.length === 0 ? (
        <p>Jobs are loading</p>
      ) : (
        jobs.map((job) => (
          <Card
            key={job._id}
            id={job._id}
            name={job.name}
            company={job.company}
            address={job.address}
          />
        ))
      )}
    </div>
  );
};
export default Search;
