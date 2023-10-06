import React from "react";
import {
  Container,
  Paper,
  Typography,
  Divider,
  Grid,
  Box,
} from "@mui/material";

const jobDetails = {
  companyName: "Company XYZ",
  companyDescription:
    "Company XYZ is a leading tech company that specializes in developing innovative software solutions for a wide range of industries. With a team of highly skilled professionals, we are dedicated to delivering excellence in every project we undertake.",
  companyLinkedinUrl: "https://www.linkedin.com/company/company-xyz",
  jobTitle: "Software Engineer",
  jobLocation: "San Francisco, CA",
  jobType: "Full-Time",
  experienceLevel: "Mid-Level",
  jobDescription:
    "We are looking for a talented Software Engineer to join our team...",
  salaryRange: "$80,000 - $100,000",
};

const LinkedinJobDetail = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      <Paper elevation={3} style={{ padding: "20px", background: "#F5F5F5" }}>
        <Typography variant="h4" sx={{ color: "#007BFF", mb: 1 }}>
          {jobDetails.jobTitle}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
          {jobDetails.companyName}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" sx={{ mb: 1 }}>
          <a
            href={jobDetails.companyLinkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#007BFF" }}
          >
            {jobDetails.companyLinkedinUrl}
          </a>
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" sx={{ color: "#007BFF", mb: 1 }}>
          Company Description
        </Typography>
        <Typography variant="body1">{jobDetails.companyDescription}</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" sx={{ color: "#007BFF", mb: 1 }}>
          Job Description
        </Typography>
        <Typography variant="body1">{jobDetails.jobDescription}</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" sx={{ color: "#007BFF", mb: 1 }}>
          Job Details
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
          Location: {jobDetails.jobLocation}
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
          Job Type: {jobDetails.jobType}
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
          Experience Level: {jobDetails.experienceLevel}
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
          Salary Range: {jobDetails.salaryRange}
        </Typography>
      </Paper>
    </Container>
  );
};

export default LinkedinJobDetail;
