import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FcIcons from 'react-icons/fc';

export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
     {
        title: 'About',
        path: '/About',
        icon: <FaIcons.FaFont />,
        cName: 'nav-text'
    },
     {
        title: 'Projects',
        path: '/Projects',
        icon: <AiIcons.AiFillProject />,
        cName: 'nav-text'
    },
     {
        title: 'Hobbies',
        path: '/Hobbies',
        icon: <FaIcons.FaGamepad />,
        cName: 'nav-text'
    },
     {
        title: 'Contact',
        path: '/Contact',
        icon: <AiIcons.AiFillContacts />,
        cName: 'nav-text'
    },
    {
        title: 'HobbyForm',
        path: '/HobbieFormPage',
        icon: '',
        cName: 'nav-text'
    },
]