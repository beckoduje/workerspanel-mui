import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { workersActions } from "../../store/workers-slice";

import {
  Box,
  Typography,
  InputBase,
  IconButton,
  FormControl,
  Select,
  SelectChangeEvent,
  MenuItem,
  styled,
} from "@mui/material";

import { FilterAlt, SortByAlpha } from "@mui/icons-material";

const Filter = ({ sortValue, setSortValue }: any) => {
  const dispatch = useDispatch();
  const workers = useSelector((state: any) => state.workers.workers);

  const [sortOrder, setSortOrder] = useState("up");
  const [showFilters, setShowFilters] = useState(false);

  // function handleValueChange(event: any) {
  //   setSortValue(event.target.value);
  // }

  const handleChange = (event: SelectChangeEvent) => {
    setSortValue(event.target.value as string);
  };

  // function that sorts by sort value
  function sortByValue(val: any, sortOrder: any) {
    if (val === "last-name" && sortOrder === "up") {
      dispatch(workersActions.sortWorkersByLastNameASC());
    } else if (val === "last-name" && sortOrder === "down") {
      dispatch(workersActions.sortWorkersByLastNameDSC());
    } else if (val === "name" && sortOrder === "up") {
      dispatch(workersActions.sortWorkersByNameASC());
    } else if (val === "name" && sortOrder === "down") {
      dispatch(workersActions.sortWorkersByNameDSC());
    }
  }

  function handleSortOrder() {
    sortOrder === "up" ? setSortOrder("down") : setSortOrder("up");
  }

  useEffect(() => {
    sortByValue(sortValue, sortOrder);
  }, [sortValue, sortOrder, workers]);
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginRight: "auto" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <IconButton
          sx={{ paddingLeft: 0, color: "#0b9afa" }}
          aria-label="upload picture"
          component="span"
          onClick={() => setShowFilters(!showFilters)}
        >
          <FilterAlt />
        </IconButton>
        {/* {showFilters && (
          <select
            className="filter__options"
            value={sortValue}
            onChange={handleValueChange}
          >
            <option value="name">name</option>
            <option value="last-name">last name</option>
          </select>
        )} */}
        {showFilters && (
          <FormControl
            sx={{ position: "absolute", top: "2rem", padding: "0.2rem" }}
          >
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sortValue}
              // label="Age"
              onChange={handleChange}
            >
              <MenuItem value="name">name</MenuItem>
              <MenuItem value="last-name">last name</MenuItem>
            </Select>
          </FormControl>
        )}
      </Box>
      <IconButton
        sx={{ paddingLeft: 0, color: "#0b9afa" }}
        aria-label="upload picture"
        component="span"
        onClick={() => handleSortOrder()}
      >
        <SortByAlpha />
      </IconButton>
    </Box>
  );
};

export default Filter;
