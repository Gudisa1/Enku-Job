import React from "react";
import {
  Container,
  Paper,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Grid,
  Box,
} from "@mui/material";

const JobsDetail = () => {
  // Replace with actual job details
  const jobDetails = {
    employerName: "Company A",
    jobPublisher: "Publisher A",
    employmentType: "Full-Time",
    jobTitle: "Software Developer",
    applyLink: "https://example.com/job1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    qualifications: [
      "Bachelor's Degree in Computer Science",
      "3+ years of experience",
    ],
    responsibilities: [
      "Develop software applications",
      "Collaborate with the team",
    ],
    benefits: ["Health insurance", "Flexible work hours"],
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      <Paper elevation={3} style={{ padding: "20px", background: "#F5F5F5" }}>
        <Typography variant="h4" sx={{ color: "#007BFF", mb: 1 }}>
          {jobDetails.jobTitle}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
          {jobDetails.employerName}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" sx={{ mb: 1 }}>
          Publisher: {jobDetails.jobPublisher}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" sx={{ mb: 2 }}>
          Employment Type: {jobDetails.employmentType}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" sx={{ color: "#007BFF", mb: 1 }}>
          Job Description
        </Typography>
        <Typography variant="body1">{jobDetails.description}</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" sx={{ color: "#007BFF", mb: 1 }}>
          Apply Now
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href={jobDetails.applyLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            textTransform: "uppercase",
            ":hover": {
              backgroundColor: "#0056b3",
            },
          }}
        >
          Apply Now
        </Button>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" sx={{ color: "#007BFF", mb: 1 }}>
          Job Highlights
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box
              border={1}
              borderRadius={5}
              borderColor="#007BFF"
              p={2}
              textAlign="center"
              sx={{
                height: "100%",
                background: "#F9FAFB", // Background color for qualifications section
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                Qualifications
              </Typography>
              <List>
                {jobDetails.qualifications.map((qualification, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={qualification} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              border={1}
              borderRadius={5}
              borderColor="#007BFF"
              p={2}
              textAlign="center"
              sx={{
                height: "100%",
                background: "#FDFDFD", // Background color for responsibilities section
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                Responsibilities
              </Typography>
              <List>
                {jobDetails.responsibilities.map((responsibility, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={responsibility} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              border={1}
              borderRadius={5}
              borderColor="#007BFF"
              p={2}
              textAlign="center"
              sx={{
                height: "100%",
                background: "#E5F0FF", // Background color for benefits section
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                Benefits
              </Typography>
              <List>
                {jobDetails.benefits.map((benefit, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={benefit} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default JobsDetail;
