import React, { useState, useEffect } from "react";
import { Location } from "history";

import Card1 from "./Card";
import Annuncio from "./Annuncio";
import Info from "./Info";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { Job } from "./job.model";
import data from "../assets/data.json";
import { useHistory } from "react-router-dom";
import { Z_FILTERED } from "zlib";

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
                  <Card1
                    name={job.name}
                    company={job.company}
                    address={job.address}
                    id={job._id}
                  />
                ))}
            </Col>
          </Row>
          <Row>
            <Col lg={7}>
              {filtered.map((job) => (
                <Annuncio activity={job.name} requisiti={job.email} />
              ))}
            </Col>
            <Col lg={5}>
              <Info />
            </Col>
          </Row>
        </Col>
      </Row>
      <ProgressBar variant="success" now={Math.random() * 100} />
    </Container>
  );
};

export default DetailPage;
