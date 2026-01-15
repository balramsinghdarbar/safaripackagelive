import React, { useState } from 'react';
import Header from '../../../Components/Layout/Header';
import Footer from '../../../Components/Layout/Footer';
import Userinfo from './Profile Tab/ProfileSubTab/user-info';
import Profiletab from './Profile Tab/profile-tab';
export default function profile() {



    return (
        <>
            <Header />
            <Userinfo/>
            <Profiletab/>
            <Footer />
        </>
    );

}