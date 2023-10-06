import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const Jobs = () => {
  // Example job data, replace with your actual job data
  const jobsData = [
    {
      id: 1,
      employerName: "Company A",
      jobPublisher: "Publisher A",
      employmentType: "Full-Time",
      jobTitle: "Software Developer",
      applyLink: "https://example.com/job1",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit....",
    },
    {
      id: 2,
      employerName: "Company B",
      jobPublisher: "Publisher B",
      employmentType: "Part-Time",
      jobTitle: "Web Designer",
      applyLink: "https://example.com/job2",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit....",
    },
    {
      id: 3,
      employerName: "Company C",
      jobPublisher: "Publisher C",
      employmentType: "Part-Time",
      jobTitle: "Web Developer",
      applyLink: "https://example.com/job2",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit....",
    },
    // Add more job data as needed
  ];

  return (
    <div style={{ marginTop: "20px" }}>
      ,
      <Typography
        variant="h5"
        style={{
          fontWeight: "bold",
          color: "#007BFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Explore Job Listings
      </Typography>
      <Grid container spacing={2}>
        {jobsData.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">{job.employerName}</Typography>
                <Typography variant="subtitle2">
                  Publisher: {job.jobPublisher}
                </Typography>
                <Typography variant="subtitle2">
                  Employment Type: {job.employmentType}
                </Typography>
                <Divider style={{ margin: "16px 0" }} />
                <Typography variant="h6">{job.jobTitle}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </Button>
                <Link to={`/job/${job.id}`}>
                  <Button variant="outlined" color="primary">
                    Show More Details
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Jobs;
