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
                defaultValue="Today" // Set the default value here
                select
                fullWidth
              >
                <MenuItem value="today">Today</MenuItem>
                <MenuItem value="this-week">This Week</MenuItem>
                <MenuItem value="this-month">This Month</MenuItem>
                <MenuItem value="this-year">This Year</MenuItem>
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
                <MenuItem value="full-time">Full-Time</MenuItem>
                <MenuItem value="part-time">Part-Time</MenuItem>
                <MenuItem value="contract">Contract</MenuItem>
              </TextField>
            </Grid>
          </Grid>

          <Typography variant="body2" style={{ marginLeft: "16px" }}>
            LinkedIn Jobs
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
