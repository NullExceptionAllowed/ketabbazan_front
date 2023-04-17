import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

import ArticleCard from './tabContent/articleCard';
// import VeriFyArticles from '../VerifyArticles';
import axios from 'axios';
import { baseUrl } from '../../Variable';
import ConditionBook from '../Profile/Tools/Conditionbook';
import { ButtonBase, Grid } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({user}) {
  const [value, setValue] = React.useState(0);

  const [userArticles, setUserArticles] = React.useState([]);
  const [userBooks, setUserBooks] = React.useState([]);
  const [userComments, setComments] = React.useState([]);


  React.useState(()=>{
    let token = "Token " + localStorage.getItem('token');
    axios.get(`${baseUrl}/showprofile/?username=${user}`, {
      headers: {
        'Content-Type': 'application/json ',
        "Authorization": token
      }
    }).then(res => {
      setUserBooks(res.data.read_books)
      setUserArticles(res.data.user_articles)
      setComments(res.data.user_comments)}).catch(e => console.log(e))
    axios.get()
  },[])

  // اينا بايد برن توي ادمين  پنل
 
  // از اون بالا تا اين پايين برن توي ادمين  پنل


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const MouseOver = (event) => {
    event.target.style.color = "#30C7CE";
  };
  const MouseOut = (event) => {
    event.target.style.color = "black";
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="کتاب های خوانده شده" {...a11yProps(0)} />
          <Tab label="مقاله های نوشته شده" {...a11yProps(1)} />
          <Tab label="کامنت هاي نوشته شده" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div style={{display:"flex", flexDirection:"row"}}>
        {userBooks.map((info,index)=>{ return                 <Grid
                  className="showbookall_paper"
                  key={index}
                  to={`/bookinfo/${info.id}`}
                  component={Link}
                  sx={{
                    direction: "rtl",
                  }}
                  style={{
                    marginTop: "0px",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <ButtonBase style={{ display: "flex", alignItems: "center" }}>
                    <img
                      alt="complex1"
                      className="showbookall_img"
                      src={info.image_url}
                      style={{
                        marginTop: "20px",
                        height: "150px",
                        width: "120px",
                        boxShadow: "rgba(0, 0, 0, 0.445) 0px 2px 10px",
                        borderRadius: "2px",
                      }}
                    />
                  </ButtonBase>

                  <div
                    className="showbookall_name"
                    variant="subtitle1"
                    component="div"
                    style={{ color: "black" }}
                    onMouseOver={MouseOver}
                    onMouseOut={MouseOut}
                  >
                    {info.name}
                  </div>
                  <div
                    variant="body2"
                    style={{ color: "#757C86", fontSize: "13px" }}
                    className="showbookall_author"
                  >
                    {info.author}
                  </div>
                </Grid>})}
                </div>
      </TabPanel>
      <TabPanel value={value} index={1}>

        {userArticles.length == 0 ? <>هیچ مقاله ای وجود ندارد</> : <>
          {
            userArticles.map(
              (art) => {
                return <ArticleCard article={art} />
              }
            )
          }
        </>}
      </TabPanel>
      <TabPanel value={value} index={2}>
      {userComments.length == 0 ? <>هیچ نظري وجود ندارد</> : <>
      {
            userComments.map(
              (comment) => {
                return <div style={{padding:8}} >{comment.comment_text}</div>

              }
            )
          }
      </>}
       
      </TabPanel>
    </Box>
  );

}