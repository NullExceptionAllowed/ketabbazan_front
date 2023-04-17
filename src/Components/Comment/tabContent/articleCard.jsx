import { Divider, Grid } from "@mui/material"
import { Link } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import "./../../ShowAllarticle/style.css"

const ArticleCard = ({article}) => {

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down(550));

    const {
        id, image, title, summary, created_jalali
    } = article

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
                <Link to={`/articleinfo/${id}`}>
                    <img
                        src={image}
                        alt="img"
                        style={{
                            width: "140px",
                            height: "100%",
                            borderRadius: "2px",
                            objectFit: "conver",
                        }}
                    />
                </Link>
                <div>
                    <Link
                        to={`/articleinfo/${id}`}
                        style={{ textDecoration: "none" }}
                    >
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
                    </Link>
                    <Link
                        to={`/articleinfo/${id}`}
                        style={{ textDecoration: "none" }}
                    >
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
                    </Link>
                </div>
            </div>
        </Grid>
        <Divider
            style={{ color: "red", width: "100%", marginTop: "2%" }}
        />
    </div>
}

export default ArticleCard