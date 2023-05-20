import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';


export const SideBarData = [
    {
        title:'خانه',
        path:'/Root',
        icon:<AiIcons.AiFillHome></AiIcons.AiFillHome>,
        cName:'nav-text'
    },
    {
        title:'کامنت ها',
        path:'/Root_comments',
        icon:<AiIcons.AiOutlineComment></AiIcons.AiOutlineComment>,
        cName:'nav-text'
    },
    {
        title:'کوییز ها',
        path:'/Root_Quizzes',
        icon:<MdIcons.MdQuiz></MdIcons.MdQuiz>,
        cName:'nav-text'
    },
    {
        title:'کاربران ها',
        path:'/Root_Users',
        icon:<AiIcons.AiOutlineUserSwitch></AiIcons.AiOutlineUserSwitch>,
        cName:'nav-text'
    },
    {
        title:'مقاله ها',
        path:'.../.../AdminPanel/Pages/Articles',
        icon:<RiIcons.RiArticleLine></RiIcons.RiArticleLine>,
        cName:'nav-text'
    }
]
