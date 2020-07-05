import React, { useState, useEffect } from "react";
import data from "../assets/data.json";
import Card from "./Card";
import { Job } from "./job.model";
import { useHistory } from "react-router-dom";

let Search = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  console.log(data);
  useEffect(() => {
    setJobs(data);
  }, []);

  const history = useHistory();
  const searcheName: string = history.location.state as string;

  const filteredResult = jobs.filter((e) => {
    return e.name.indexOf(searcheName) !== -1;
  });

  return (
    <div>
      {searcheName || searcheName !== ""
        ? filteredResult.map((job) => (
            <Card
              key={job._id}
              id={job._id}
              name={job.name}
              company={job.company}
              address={job.address}
              dateFrom={job.dateFrom}
              dateTo={job.dateTo}
            />
          ))
        : jobs.map((job) => (
            <Card
              key={job._id}
              id={job._id}
              name={job.name}
              company={job.company}
              address={job.address}
              dateFrom={job.dateFrom}
              dateTo={job.dateTo}
            />
          ))}
    </div>
  );
};
export default Search;
