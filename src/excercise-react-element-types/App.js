/**
 *  *HOOK
 *	
 *	1. React element types: String, function / class
 *		-Wrapper
 *			-Header -> Header component
 *			-Content -> Content component
 *			-Footer -> Footer component
 *	2. Biểu diễn đơn giản với JSX
 */

import { Content } from "./Content";
import { Footer } from "./Footer";
import Header from "./Header";
import './App.css';
import React from "react";

export const ElementTypes = () => {
    return (
        // React.Fragment : wrapper bọc các el bên trong
        <React.Fragment>
            <Header/>
            <Content/>
            <Footer/>
        </React.Fragment>
    )
}