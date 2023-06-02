import React, {useState} from 'react';
import { baseUrl } from "../../Variable";
import Searchbook from "../Searchbook/Searchbook";
import Box from "@mui/material/Box";
import {Grid, useMediaQuery, useTheme} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import {useHistory} from "react-router-dom";


const SearchInput = () => {
    const history = useHistory();
    const theme = useTheme();
    const checkpx = useMediaQuery(theme.breakpoints.down(900));
    const [search, setsearchname] = useState("");
    const [openSearchBar, setOpenSearchBar] = useState(false);
    const Setsearch = (event) => {
        setsearchname(event.target.value);
    };
    const handlesubmit = async (event) => {
        event.preventDefault();
        history.replace(`/Searchbook/?q=${search}`);

    };
    const handleSearch = () => {
        setOpenSearchBar(!openSearchBar);
        console.log(openSearchBar + "2222");
    };
    return (
        <>
            <div >
                {!checkpx && (
                    <Box
                        component="form"
                        style={{
                            direction: "rtl",
                            fontFamily: "BYekan",
                            marginRight: "2%",
                            width: "80%",
                        }}
                        onSubmit={handlesubmit}
                    >
                        <Grid
                            sx={{
                                direction: "rtl",
                                height: "40px",
                                p: "2px 4px",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "50px",
                                backgroundColor: "#EBECF0",
                                display: { md: "flex", xs: "none" },
                            }}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1, padding: "16px" ,direction: "rtl"}}
                                placeholder="جستجوی نویسنده"
                                inputProps={{ "aria-label": "search google maps" }}
                                value={search}
                                onChange={Setsearch}
                            />
                            <IconButton
                                type="submit"
                                sx={{ p: "10px" }}
                                aria-label="search"
                            >
                                <SearchIcon style={{ color: "gray" }} />
                            </IconButton>
                        </Grid>
                    </Box>
                )}
                {checkpx && (
                    <Grid sx={{ marginRight: "2%" }}>
                        <IconButton
                            style={{
                                color: "#1565C0",
                                display: "flex",
                                justifyContent: "center",
                            }}
                            onClick={handleSearch}
                        >
                            <SearchIcon></SearchIcon>
                        </IconButton>
                    </Grid>
                )}
            </div>
        </>
    );
};

export default SearchInput;
