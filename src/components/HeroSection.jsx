import React from "react";
import npmInstallImg from "../assets/npmInstall.svg";
/* Get a Unique Id
The one stop solution to get a uniqe id for your use case. Play with it and integrate for your particular use case. Good luck! */

const HeroSection = () => {
    return (
        <div className="bg-gray-800 text-white flex sm:flex-row flex-col items-center justify-center gap-4 py-20">
            <div className="sm:p-0 p-4">
                <h3 className="text-3xl font-bold tracking-wide mr-6">
                    Get a uniqie Id ...
                </h3>
                <p className="max-w-[400px] text-blue-400 mt-3">
                    The one stop solution to get a uniqe id for your use case.
                    Play with it and integrate for your particular use case.
                    Good luck!
                </p>
            </div>

            <img
                src={npmInstallImg}
                className="rounded-xl sm:w-[450px] w-[300px] sm:mt-0 mt-4"
            />
        </div>
    );
};

export default HeroSection;
