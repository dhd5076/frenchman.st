import React, { useEffect, useState } from 'react';

export default function Home() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    })

    return(
    <>
        <div className="h-auto max-w-7xl mx-auto shadow-xl shadow-black">
            <div className={`h-[50vh] lg:h-[50vh] bg-[url(/bg.jpeg)] transition-all duration-1000 bg-fill bg-no-repeat ${isVisible ? 'pt-16 opacity-100' : 'pt-8 opacity-100'}`}> 
                <img src="/transBG.png" className="bg-white m-auto w-64 shadow-xl rounded-b-full border-4 border-[#EEB970]"></img>
            </div>
            <div className="lg:flex font-black bg-[#EEB970] lg:pl-8 h-1/2">
                <div className={`lg:w-1/3 shadow-xl shadow-black/50 bg-white lg:rounded-xl mb-8 transition-all duration-1000 ${isVisible ? '-mt-16' : 'mt-16'}`}>
                    <h1 className="text-5xl text-white lg:rounded-t-xl mx-auto bg-[#BF0603] p-6 text-center"> NOLA ✈︎ ROC</h1>
                    <div className="text-black p-6 pl-6">
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
                <div className="bg-[#EEB970] backdrop-blur p-6 lg:w-1/3">
                    <div className="">
                        <h1 className="text-3xl font-black"> Rochester&apos;s Spot For Authentic Creole Cuisine!</h1>
                        <p className="mt-6 text-sm">Step into Frenchman Street and immerse yourself in the lively ambiance of a New Orleans jazz club. The rustic decor, adorned with Mardi Gras colors and jazz-inspired art, creates an inviting and energetic space. Whether you&apos;re enjoying a meal with friends or sipping on a classic cocktail at the bar, our restaurant embodies the vibrant and welcoming spirit of the French Quarter. </p>
                        <button href="/events" className="mt-4 px-4 py-2  rounded-lg ml-auto bg-white text-black "> View Menu</button>
                        <img src="/food.jpg" className="mt-6 rounded-xl shadow-xl shadow-black/50"></img>
                    </div>
                </div>
                <div className="bg-[#325091] text-white backdrop-blur p-6 lg:w-1/3">
                    <div className="">
                        <img src="/food2.jpg" className="mt-6 rounded-xl mb-6 shadow-xl shadow-black/50"></img>
                        <h1 className="text-3xl font-black"> Jazz Up Your Dining Experience! </h1>
                        <p className="mt-6 text-sm"> Indulge in the soulful melodies of New Orleans, the rich flavors of Creole and Cajun cuisine, and the warmth of Southern hospitality. At Frenchman Street, every visit is a celebration of life, love, and good food. We invite you to join us on this gastronomic adventure and let the flavors of the Big Easy take you on a journey through the heart of Louisiana, right here in Rochester, NY. </p>
                        <button href="/events" className="mt-4 px-4 py-2  rounded-lg ml-auto bg-black text-white"> Learn More</button>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    </>
  );
}
