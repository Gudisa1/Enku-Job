import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { Grid } from "@material-ui/core";
import Search from "./Search";

const NavBar = () => {
  return (
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6">Enku Job</Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Search />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                variant="outlined"
                size="small"
                label="Filter by Date"
                defaultValue="Filter by Time" // Set the default value here
                select
                fullWidth
              >
                <MenuItem value="today">Any Time</MenuItem>
                <MenuItem value="this-week">Past Month</MenuItem>
                <MenuItem value="this-month">Past Week</MenuItem>
                <MenuItem value="this-year">Past 24 Hours</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <TextField
                variant="outlined"
                size="small"
                label=" Filter by Employment Type"
                select
                fullWidth
                defaultValue="Full-Time" // Set the default value here
              >
                <MenuItem value="full-time">On-Site</MenuItem>
                <MenuItem value="part-time">Hybrid</MenuItem>
                <MenuItem value="contract">Reomot</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                variant="outlined"
                size="small"
                label=" Filter by Experience "
                select
                fullWidth
                defaultValue="Senior" // Set the default value here
              >
                <MenuItem value="Internship">Internship</MenuItem>
                <MenuItem value="Associate">Associate</MenuItem>
                <MenuItem value="Director">Director</MenuItem>
                <MenuItem value="Entry-Level">Entry Level</MenuItem>
                <MenuItem value="Mid-Senior">Mid Senior</MenuItem>
                <MenuItem value="Senior">Senior</MenuItem>
                <MenuItem value="Executive">Executive</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
