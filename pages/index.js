import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import Head from 'next/head';

import Image from 'next/image';

export default function Home() {
    return(
    <>
        <div className="h-[100vh] max-w-7xl mx-auto shadow-xl shadow-black">
            <div className="h-[50vh] bg-[url(/bg.jpeg)] bg-center bg-cover bg-top bg-no-repeat pt-8" > 
                <img src="/transBG.png" className="bg-white m-auto w-64 shadow-xl rounded-b-full border-4 border-[#EEB970]"></img>
            </div>
            <div className="md:flex font-black h-[50vh] bg-white">
                <div className="w-1/3 z-50 -mt-16 ml-8 -pt-16 shadow-xl shadow-black overflow-hidden">
                    <h1 className="text-5xl text-white mx-auto bg-[#BF0603] p-6 rounded-t-xl w-full text-center"> NOLA ✈︎ ROC</h1>
                    <div className="bg-white text-black h-full p-6 pl-6">
                        <h1> Name: </h1>
                        <p className="font-black text-2xl mb-2"> Frenchman Street</p>
                        <div className="flex justify-between">
                            <div>
                                <h1> Address: </h1>
                                <p className="font-semibold text-lg mb-2"> Mercantile On Main <br/> 240 E Main St.</p>
                            </div>
                            <div>
                                <h1> Hours: </h1>
                                <p className="font-semibold text-lg"> 
                                Monday-Friday <br/> 
                                11:30am - 8:00pm</p>
                            </div>
                        </div>
                        <h1> About: </h1>
                        <p className="font-normal mb-2"> Welcome to Frenchman Street, an authentic taste of New Orleans nestled in the heart of Downtown Rochester, NY. Our culinary journey is inspired by the vibrant spirit of the famous Frenchman Street, bringing the soulful flavors of Creole and Cajun cuisine to Upstate New York. Immerse yourself in the lively atmosphere of a New Orleans jazz club, indulge in classic dishes like gumbo and jambalaya, and let the rhythms of jazz transport you to the lively streets of the Big Easy. Join us and experience the essence of Louisiana right here in Rochester!</p>
                        <h1 className="text-lg"> Contact: </h1>
                        <p className="font-normal mb-2"> <b>Phone:</b> 555-345-7890</p>
                        <p className="font-normal mb-2"> Email: contact@frenchmanstreetrochester.com</p>
                    </div>
                </div>
                <div className="-ml-1 w-1/3 bg-[#EEB970] backdrop-blur p-6">
                    <div className="w-full">
                        <h1 className="text-3xl font-black"> Rochester&apos;s Spot For Authentic Creole Cuisine!</h1>
                        <p className="mt-6 text-sm">Step into Frenchman Street and immerse yourself in the lively ambiance of a New Orleans jazz club. The rustic decor, adorned with Mardi Gras colors and jazz-inspired art, creates an inviting and energetic space. Whether you&apos;re enjoying a meal with friends or sipping on a classic cocktail at the bar, our restaurant embodies the vibrant and welcoming spirit of the French Quarter. </p>
                        <button href="/events" className="mt-4 px-4 py-2  rounded-lg ml-auto bg-white text-black "> View Menu</button>
                        <img src="/food.jpg" className="w-full mt-6 rounded-xl shadow-xl shadow-black/50"></img>
                    </div>
                </div>
                <div className="-ml-1 w-1/3 bg-[#325091] text-white backdrop-blur p-6">
                    <div className="w-full">
                        <img src="/food2.jpg" className="w-full mt-6 rounded-xl mb-6 shadow-xl shadow-black/50"></img>
                        <h1 className="text-3xl font-black"> Jazz Up Your Dining Experience! </h1>
                        <p className="mt-6 text-sm"> Indulge in the soulful melodies of New Orleans, the rich flavors of Creole and Cajun cuisine, and the warmth of Southern hospitality. At Frenchman Street, every visit is a celebration of life, love, and good food. We invite you to join us on this gastronomic adventure and let the flavors of the Big Easy take you on a journey through the heart of Louisiana, right here in Rochester, NY. </p>
                        <button href="/events" className="mt-4 px-4 py-2  rounded-lg ml-auto bg-black text-white"> Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
