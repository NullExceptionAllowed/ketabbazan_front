import React, { useState, useEffect } from 'react';
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
import { BsSearch } from 'react-icons/bs';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
// import Dropdown from 'react-dropdown';
import axios from "axios";
const AdvancedSearch = () => {
    const history = useHistory();
    const [stars, setstarscount] = useState(0);
    const [writer, setwritername] = useState("");
    const [publisher, setpublishername] = useState("");
    const [ganre, setganrename] = useState("");
    const [options, setoptions] = useState(["دسته بندی ای وجود ندارد"]);
    const setstars = (event) => {
        setstarscount(event.target.value);
    };
    const Setpublisher = (event) => {
        setpublishername(event.target.value);
    };
    const Setganre = (event) => {
        setganrename(event.target.value);
    };
    const Setwriter = (event) => {
        setwritername(event.target.value);
    };
    const handlesubmit = async (event) => {
        event.preventDefault();
        history.replace(`/Searchbook/?s=${stars}?w=${writer}?pb=${publisher}?g=${ganre}`);

    };

    useEffect(() => {
        axios({
            url: `${baseUrl}/read_book/allgenres`,
        }).then((response) => {
            setoptions(response.data);
            console.log(response.data);
        });
    }, []);


    const allgeners = options.map((item,index) => item.name);
    allgeners.push("سایر دسته بندی ها")
    console.log(allgeners)
    console.log(typeof(allgeners))
    function GenerList(props) {
        const listItems = allgeners.map((item) =>
            <option onChange={Setganre} value={ganre}>{item}</option>
        );
        return (
            <select className="GenerList">{listItems}</select>
        );
    }





    return (
        <>
            <Typography
                variant="h5"
                style={{
                    fontWeight: 800,
                    color: "#1565C0",
                    textAlign: "center",
                    marginBottom: "20px",
                }}
            >
                جستجوی پیشرفته
            </Typography>


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
                            width: "100%",
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
                            <GenerList/>
                        </Grid>
                        <Grid
                            sx={{
                                marginRight: "1.1rem",
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
                            <IconButton
                                type="submit"
                                sx={{ p: "10px" }}
                            >
                                <BsSearch style={{ color: "#0D9ECF" }} />
                            </IconButton>
                        </Grid>


                    </Grid>

                </Box>
            </div>
        </>
    );
};

export default AdvancedSearch;
