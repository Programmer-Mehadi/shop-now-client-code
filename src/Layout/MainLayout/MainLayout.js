import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Shared/Footer/Footer';
import Navbar from '../../components/Shared/Navbar/Navbar';

class MainLayout extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        );
    }
}

export default MainLayout;