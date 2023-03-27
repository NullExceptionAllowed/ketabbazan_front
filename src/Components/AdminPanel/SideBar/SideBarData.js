import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';


export const SideBarData = [
    {
        title:'خانه',
        path:'/Admin',
        icon:<AiIcons.AiFillHome></AiIcons.AiFillHome>,
        cName:'nav-text'
    },
    {
        title:'کامنت ها',
        path:'/Admin/comments',
        icon:<AiIcons.AiOutlineComment></AiIcons.AiOutlineComment>,
        cName:'nav-text'
    },
    {
        title:'کوییز ها',
        path:'/Admin/Quizzes',
        icon:<MdIcons.MdQuiz></MdIcons.MdQuiz>,
        cName:'nav-text'
    },
    {
        title:'کاربران ها',
        path:'/Admin/Users',
        icon:<AiIcons.AiOutlineUserSwitch></AiIcons.AiOutlineUserSwitch>,
        cName:'nav-text'
    },
    {
        title:'مقاله ها',
        path:'/Admin/Articles',
        icon:<RiIcons.RiArticleLine></RiIcons.RiArticleLine>,
        cName:'nav-text'
    }
]
