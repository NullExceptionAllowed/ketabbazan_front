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
        console.log(flag)
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
        }).then(res => setArticles(res.data.articles)).catch(e => console.log(e))
    }, [articles, refreshArticle])

    const refresh = ()=>{
        setRefresh(!refreshArticle)
    }

    return (
        <>
            <ChangeNav></ChangeNav>
            <SideBar />
            <div className="Admin_Articles_page">


                {articles.length == 0 ? <>هیچ مقاله ای وجود ندارد</> : <>

                    {
                        articles.map(
                            (art) => {
                                return <VeriFyArticles refresh={refresh} article={art} />
                            }
                        )
                    }
                </>}


            </div>
        </>

    );
}

export default Articles;