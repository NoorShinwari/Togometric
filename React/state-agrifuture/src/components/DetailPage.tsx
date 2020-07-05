import React, { useState, useEffect } from "react";
import { Location } from "history";

import Card from "./Card";
import Annuncio from "./Annuncio";
import Info from "./Info";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { Job } from "./job.model";
import data from "../assets/data.json";
import { useHistory } from "react-router-dom";

const DetailPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    setJobs(data);
  }, []);
  const history = useHistory();
  const id = history.location.state;
  const filtered = jobs.filter((e) => e._id === id);

  return (
    <Container className="pb-3">
      <Row>
        <Col>
          <Row>
            <Col lg={12}>
              {jobs
                .filter((e) => e._id === id)
                .map((job) => (
                  <Card
                    name={job.name}
                    company={job.company}
                    address={job.address}
                    id={job._id}
                    dateFrom={job.dateFrom}
                    dateTo={job.dateTo}
                  />
                ))}
            </Col>
          </Row>
          <Row>
            <Col lg={8}>
              {filtered.map((job) => (
                <Annuncio
                  activity={job.name}
                  requisiti1={job.requisiti1}
                  requisiti2={job.requisiti2}
                  requisiti3={job.requisiti3}
                />
              ))}
            </Col>
            <Col lg={4}>
              {filtered.map((job) => (
                <Info name={job.name} email={job.email} phone={job.phone} />
              ))}
            </Col>
          </Row>
        </Col>
      </Row>
      <ProgressBar variant="success" animated now={Math.random() * 100} />
    </Container>
  );
};

export default DetailPage;
