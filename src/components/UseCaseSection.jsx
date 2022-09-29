import React from "react";
import reactCode from "../assets/reactUseCaseCode.svg";
import codeMockup from "../assets/codeMockup.svg";

const UseCaseSection = () => {
    return (
        <div className="bg-gray-800 text-white border-white py-20">
            <h3 className="bg-blue-500 w-fit mx-auto sm:text-2xl text-lg font-semibold py-3 px-7 rounded-full sm:mb-4 mb-10">
                Example for React Js
            </h3>
            <div className="flex md:flex-row flex-col items-center justify-center">
                <img
                    src={reactCode}
                    className="lg:w-[600px] sm:w-[450px] w-[100vw] rounded-xl"
                />
                <img src={codeMockup} className="sm:w-[600px] w-[800px]" />
            </div>
        </div>
    );
};

export default UseCaseSection;
