import React, {useState} from 'react';
import { baseUrl } from "../../Variable";
import SearchInput from "./SearchInput";
import './AdvancedSearch.css'
import Box from "@mui/material/Box";
import {Link, useHistory} from "react-router-dom";
import { Rating } from '@mui/material';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Grid,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import Advsearch from "../../assets/Image/advanced-search.svg"
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { FaLeanpub } from 'react-icons/fa';
const AdvancedSearch = () => {
    const history = useHistory();
    const [stars, setstarscount] = useState(0);
    const [writer, setwritername] = useState("");
    const [publisher, setpublishername] = useState("");
    const [ganre, setganrename] = useState("");
    const setstars = (event) => {
        setstarscount(event.target.value);
    };
    const Setpublisher = (event) => {
        setpublishername(event.target.value);
    };
    const setganre = (event) => {
        setganrename(event.target.value);
    };
    const Setwriter = (event) => {
        setwritername(event.target.value);
    };
    const handlesubmit = async (event) => {
        event.preventDefault();
        history.replace(`/Searchbook/?s=${stars}?w=${writer}?pb=${publisher}?g=${ganre}`);

    };
    return (
        <>

            <div className="Advanced_Search">
                <Box
                    component="form"
                    sx={{ flexGrow: 1, direction: "rtl" }}
                    onSubmit={handlesubmit}
                >
                    <Grid
                        style={{
                            display: "flex",
                            alignItems: "center",
                            height: "63px",
                            width: "84%",
                        }}
                    >
                        <Grid
                            style={{
                                color: "#0D9ECF",
                                marginRight: "10px",
                                textDecoration: "none",
                            }}
                        >
                            <img
                                className="advanced_search_img"
                                src={Advsearch}
                            />
                        </Grid>
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
                                value={writer}
                                onChange={Setwriter}
                            />
                            <IconButton
                                type="submit"
                                sx={{ p: "10px" }}
                                aria-label="search"
                            >
                                <SearchIcon style={{ color: "gray" }} />
                            </IconButton>
                        </Grid>
                        <Grid
                            style={{
                                color: "#0D9ECF",
                                marginRight: "10px",
                                textDecoration: "none",
                            }}
                        >
                            <Typography
                                sx={{
                                    marginRight: "1.1rem",
                                    textDecoration: "none",
                                    color: "#545252",
                                }}
                            >
                                امتیاز از :
                            </Typography>
                        </Grid>
                        <Grid
                            style={{
                                color: "#0D9ECF",
                                marginRight: "10px",
                                textDecoration: "none",
                                direction:"ltr",
                            }}
                        >
                            <Rating name="size-medium"  value={stars} defaultValue={2} onChange={setstars} />
                        </Grid>
                        <Grid
                            style={{
                                color: "#0D9ECF",
                                marginRight: "10px",
                                textDecoration: "none",
                            }}
                        >
                            <Typography
                                sx={{
                                    marginRight: "1.1rem",
                                    textDecoration: "none",
                                    color: "#545252",
                                }}
                            >
                                انتشارات :
                            </Typography>
                        </Grid>
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
                                placeholder="انتشارات"
                                inputProps={{ "aria-label": "search google maps" }}
                                value={publisher}
                                onChange={Setpublisher}
                            />
                            <IconButton
                                type="submit"
                                sx={{ p: "10px" }}
                                aria-label="search"
                            >
                                <FaLeanpub style={{ color: "gray" }} />
                            </IconButton>
                        </Grid>
                        <Grid
                            style={{
                                color: "#0D9ECF",
                                marginRight: "10px",
                                textDecoration: "none",
                            }}
                        >
                            <Typography
                                sx={{
                                    marginRight: "1.1rem",
                                    textDecoration: "none",
                                    color: "#545252",
                                }}
                            >
                                دسته بندی :
                            </Typography>
                        </Grid>


                    </Grid>

                </Box>
            </div>
        </>
    );
};

export default AdvancedSearch;
