import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import { Link, useHistory, useLocation } from 'react-router-dom';
const Searchbook = () => {
  const location = useLocation();
  const search = location.search;
  const category = new URLSearchParams(search).get('category');
  const searchUrlParam = new URLSearchParams(search).get('search');
  console.log(searchUrlParam);
  console.log(category);
  return (
    <div>
      salam
    </div>
  );
};

export default Searchbook;
