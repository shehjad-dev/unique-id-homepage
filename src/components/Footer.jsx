import React from "react";

const Footer = () => {
    return (
        <div className="bg-blue-500">
            <div className="py-20">
                <h2 className="text-center sm:text-xl text-base text-white font-semibold">
                    Thanks to these wonderful people for sharing their knowledge
                </h2>
                <div className="w-fit mx-auto flex gap-4 mt-3">
                    <a
                        href="https://twitter.com/SimonHoiberg"
                        className="p-2 bg-white rounded-lg hover:shadow-xl transition-all duration-75 ease-in"
                    >
                        Simon Heiberg
                    </a>
                    <a
                        href="https://dev.to/rahmanfadhil"
                        className="p-2 bg-white rounded-lg hover:shadow-xl transition-all duration-75 ease-in"
                    >
                        Rahman Fadhil
                    </a>
                </div>
            </div>
            <div className="bg-gray-800 text-white p-5 text-center">
                Made with 💙 by{" "}
                <a
                    href="https://www.threepointdev.com/"
                    className="text-blue-500 font-medium"
                >
                    3PointDev
                </a>
            </div>
        </div>
    );
};

export default Footer;
