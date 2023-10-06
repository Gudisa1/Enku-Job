import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Link,
  Button,
} from "@material-ui/core";

const sampleJobsData = [
  {
    id: 1,
    companyName: "Company A",
    companyUrl: "https://www.companyA.com",
    jobTitle: "Software Engineer",
    location: "New York, NY",
    postedTime: "2 hours ago",
    salaryRange: "$80,000 - $100,000",
    jobDetailUrl: "https://www.jobdetails.com/job1",
  },
  {
    id: 2,
    companyName: "Company B",
    companyUrl: "https://www.companyB.com",
    jobTitle: "Web Developer",
    location: "San Francisco, CA",
    postedTime: "1 day ago",
    salaryRange: "$90,000 - $110,000",
    jobDetailUrl: "https://www.jobdetails.com/job2",
  },
  {
    id: 3,
    companyName: "Company C",
    companyUrl: "https://www.companyC.com",
    jobTitle: "Data Analyst",
    location: "Chicago, IL",
    postedTime: "3 days ago",
    salaryRange: "$70,000 - $90,000",
    jobDetailUrl: "https://www.jobdetails.com/job3",
  },
];

const LinkedinJobs = () => {
  return (
    <Grid container spacing={2} style={{ margin: "20px" }}>
      {sampleJobsData.map((job) => (
        <Grid item xs={12} sm={6} md={4} key={job.id}>
          <Card
            variant="outlined"
            style={{
              padding: "16px",
              marginBottom: "20px",
              "&:hover": {
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                transform: "scale(1.02)",
                transition: "transform 0.2s ease",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                style={{
                  fontWeight: "bold",
                  marginBottom: "8px",
                  color: "#007BFF",
                }}
              >
                {job.companyName}
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ marginTop: "8px", color: "#555" }}
              >
                <span style={{ fontWeight: "bold" }}>Company URL:</span>{" "}
                <Link
                  href={job.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "#007BFF",
                    wordBreak: "break-all",
                  }}
                >
                  {job.companyUrl}
                </Link>
              </Typography>

              <Typography
                variant="subtitle2"
                style={{ marginTop: "8px", color: "#555" }}
              >
                <span style={{ fontWeight: "bold" }}>Job Title:</span>{" "}
                {job.jobTitle}
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ marginTop: "8px", color: "#555" }}
              >
                <span style={{ fontWeight: "bold" }}>Location:</span>{" "}
                {job.location}
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ marginTop: "8px", color: "#555" }}
              >
                <span style={{ fontWeight: "bold" }}>Posted Time:</span>{" "}
                {job.postedTime}
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ marginTop: "8px", color: "#555" }}
              >
                <span style={{ fontWeight: "bold" }}>Salary Range:</span>{" "}
                {job.salaryRange}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href={job.jobDetailUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: "16px" }}
              >
                Show Details
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default LinkedinJobs;
