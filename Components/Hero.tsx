"use client";
import Image from "next/image";
import React from "react";
import Custombutton from "./Custombutton";



const Hero = () => {

    const handleScroll = () => {

    }
    return(
        <div className="hero"> 
            <div className="flex-1 pt-36 padding -x">
                <h1 className="hero__title">
                    find, book, or rent a car -
                    quickly and easily

                </h1>

                <p className="hero__subtitle">
                    Streamline your car rental process with our easy-to-use platform. 
                    Find the perfect car for your trip, book it online, and pick it up at the airport.

                </p>


                <Custombutton 
                
                title= "Explore cars"
                containerStyles="bg-primary-bluetext-white rounded-full mt-10"
                handleClick={handleScroll}
                />                
            </div>


            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src= "/hero.png" alt="hero"
                    fill className="object_contain" />

                    <div className="hero__image-overlay">


                    </div>

                
                
                
                </div>

            </div>

        </div>
    )
}

export default Hero;