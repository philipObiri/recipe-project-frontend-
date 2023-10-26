import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import {faHome, faList, faCog} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);

    function closeSideBar(){
        setShowSidebar(false);
    }

    const links = [
        {
            name: "Home",
            path: "/",
            icon:faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon:faList
        },
        {
            name: "Settings",
            path: '/settings',
            icon:faCog
        }
    ];


    return (
        <>
            <nav className="navbar container">
                <a href="#!" className="logo">F<span>oo</span>diesHub</a>
                <div className="nav-links">
                    { links.map((link)=>(
                        <a href="#!" key={link.name}> {link.name}</a>
                    ))}
                </div>


                <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </nav>

           {showSidebar && <Sidebar  close={closeSideBar} links={links} />}
        </>
    )
}

export default Navbar;
