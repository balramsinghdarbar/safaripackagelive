import React, { useState } from 'react';
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
 import Edituserinfo from './EditProfileTab/EditProfileSubTab/edit-user-info';
import EditProfiletab from './EditProfileTab/edit-profile-tab';
export default function editprofile() {



    return (
        <>
            <Header />
            <Edituserinfo/>
            <EditProfiletab/>
            <Footer />
        </>
    );

}