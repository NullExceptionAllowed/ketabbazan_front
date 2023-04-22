import { Button, Dialog, IconButton, ToggleButton } from "@mui/material"
import ArticleCard from "../../Comment/tabContent/articleCard"
import { Divider, Grid } from "@mui/material"
import { Link } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import CheckIcon from '@mui/icons-material/Check';
import { baseUrl } from "../../../Variable";


const VeriFyArticles = ({ article, refresh }) => {

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down(550));

    const [dialogStatus, setDialogStatus] = useState(false)

    const {
        id, image, title, summary, created_jalali, is_verified, body
    } = article

    const changeStatus = () => {
        let token = "Token " + localStorage.getItem('token');
        axios.post(`${baseUrl}/admin-panel/article/verify/${id}`, {} , {
            headers: {
                'Content-Type': 'application/json ',
                "Authorization": token
            }
        }).then(res => console.log(res)).catch(e => console.log(e))
        refresh()
    }


    return <div>
        <Grid
            style={{
                marginTop: "3px",
                display: "flex",
                textDecoration: "none",
            }}
            key={id}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "150px",
                }}
            >

                <img
                    src={baseUrl+image}
                    alt="img"
                    style={{
                        width: "140px",
                        height: "100%",
                        borderRadius: "2px",
                        objectFit: "conver",
                    }}
                />
                <div>

                    <div
                        style={{
                            fontWeight: "bold",
                            marginRight: "10px",
                            color: "black",
                        }}
                        className="showar_title"
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            marginTop: "5px",
                            marginRight: "10px",
                            color: "#757C86",
                            overflow: "Hidden",
                            whiteSpace: "normal",
                            textOverflow: "ellipsis",
                            textJustify: "inter-word",
                            textAlign: "justify",
                        }}
                        className="showall_summary"
                    >
                        {isMatch
                            ? summary.slice(0, 100) + "..."
                            : summary.slice(0, 250) + "..."}
                    </div>
                    <Grid
                        style={{
                            marginTop: "3px",
                            marginRight: "10px",
                            color: "#757C86",
                        }}
                        className="showar_tarikh"
                    >
                        {"تاریخ مقاله:" + created_jalali}
                    </Grid>
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>

                <ToggleButton
                    value="check"
                    selected={is_verified}
                    onChange={() => {
                        changeStatus()
                    }}
                >
                    <CheckIcon />
                </ToggleButton>

                <Button onClick={() => { setDialogStatus(true) }} variant="outlined">
                    Text
                </Button>
            </div>

        </Grid>
        <Divider
            style={{ color: "red", width: "100%", marginTop: "2%" }}
        />

        <Dialog open={dialogStatus}>
            <div style={{ padding: "24px", paddingTop: "42px" }}>
                {body}
            </div>
            <IconButton
                aria-label="close"
                onClick={() => { setDialogStatus(false) }}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
        </Dialog>
    </div>
}

export default VeriFyArticles