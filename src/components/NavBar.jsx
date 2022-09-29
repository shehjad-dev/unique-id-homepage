import React from "react";
import uidLogo from "../assets/uid-logo.svg";

const NavBar = () => {
    return (
        <div className="bg-gray-800 text-white py-4 border-b-2 border-white border-opacity-40 ">
            {/* <p className="max-w-6xl mx-auto text-3xl">UID</p> */}
            <div className="max-w-6xl mx-auto sm:pl-0 pl-4">
                <img src={uidLogo} className="sm:w-[110px] w-[70px] h-auto" />
            </div>
        </div>
    );
};

export default NavBar;
