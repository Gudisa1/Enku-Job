import React from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

const Search = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <TextField
        variant="outlined"
        size="small" // Make it a bit smaller
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
          style: {
            backgroundColor: "#f0f0f0",
            borderRadius: "5px",
          },
        }}
        style={{
          width: "200px",
        }}
      />
    </div>
  );
};

export default Search;
