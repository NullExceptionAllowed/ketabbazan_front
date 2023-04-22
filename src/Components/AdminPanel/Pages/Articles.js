import React from 'react';
import './ArticlesPage.css';
import SideBar from "../SideBar/SideBar";
import Nav from "../../Navbar/Nav";
import Nav2 from "../../Navbar/Nav2";
import VeriFyArticles from "./VeriFyArticles";
import { baseUrl } from "../../../Variable";
import axios from "axios";


const ChangeNav = () => {

    let temp = null;
    let flag = localStorage.getItem('token');
    if (flag === null) {
        temp = (
            <Nav/>
        );
    }
    else{
        temp = (
            <Nav2/>
        );
    }

    return (
        <div>
            {temp}
        </div>
    );
}
function Articles(props) {
    const [articles, setArticles] = React.useState([])

    const [refreshArticle, setRefresh] = React.useState(false)

    React.useEffect(() => {
        let token = "Token " + localStorage.getItem('token');
        axios.get(`${baseUrl}/admin-panel/article`, {
            headers: {
                'Content-Type': 'application/json ',
                "Authorization": token
            }
        }).then(res => setArticles(res.data)).catch(e => console.log(e))
    }, [refreshArticle])

    const refresh = ()=>{
        setRefresh(!refreshArticle)
    }

    return (
        <>
            <ChangeNav></ChangeNav>
            <SideBar />
            <div style={{display:"flex", height:"100%", flexDirection:"column", padding: 32, overflow:"auto" }} className="Admin_Articles_page">


                {articles.length == 0 ? <>هیچ مقاله ای وجود ندارد</> : <>

                    {
                        articles.map(
                            (art,i) => {
                                return <VeriFyArticles key={i} refresh={refresh} article={art} />
                            }
                        )
                    }
                </>}


            </div>
        </>

    );
}

export default Articles;