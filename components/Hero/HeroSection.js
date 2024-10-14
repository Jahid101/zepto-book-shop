import React from 'react';
import Image from "next/image";
// import Logo from "../public/images/logo.webp";

const HeroSection = () => {

    return (
        <div className='flex'>
            {/* Left */}
            <div>
                <small className="title-line line-48">Imagine, Invent, Implement</small>

            </div>

            {/* Right */}
            <div>
                <div className="flex justify-center">
                    {/* <Image
                        src={Logo}
                        alt="logo"
                        className="rounded-lg"
                        width={500}
                        height={350}
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
