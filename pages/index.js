import React, { useEffect, useState } from 'react';

export default function Home() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    })

    return(
    <>
        <div className="h-auto mx-auto shadow-xl shadow-black">
            <div className={`transition-all duration-1000 pt-16 ${isVisible ? 'h-[75vh]' : 'h-[0vh]'} bg-no-repeat bg-[url(/bg.jpeg)] bg-cover bg-center`}>
                <div className="md:w-64 m-auto h-full flex-col">
                    <img src="/transBG.png" className="md:w-64 w-1/2 m-auto bg-white px-2"></img>
                </div>
            </div>
            <div className="lg:flex font-black bg-black text-white h-1/2 md:pl-8">
                <div className={`shadow-xl mx-4 md:max-w-[480px] relative bg-white rounded-xl mb-8 transition-all font-consolas duration-1000 ${isVisible ? '-mt-16' : 'mt-16'}`}>
                    <h1 className="text-4xl text-white rounded-t-xl mx-auto bg-[#BF0603] p-6 text-center"> NOLA <span className="fas fa-plane"></span> ROC</h1>
                    <div className="text-black p-6 pl-6">
                        <h1> Name: </h1>
                        <p className="font-black text-2xl mb-2 font-consolas"> Frenchman Street</p>
                        <div className="md:flex mb-4 justify-between">
                            <div>
                                <h1> Address: </h1>
                                <p className="font-normal font-consolas text-lg mb-2"> Mercantile On Main <br/> 240 E Main St.</p>
                            </div>
                            <div>
                                <h1> Hours: </h1>
                                <p className="font-normal text-lg font-consolas"> 
                                Monday-Friday <br/> 
                                11:30am - 8:00pm</p>
                            </div>
                        </div>
                        <h1> About: </h1>
                        <p className="font-normal font-consolas mb-2 leading-5 indent-8"> Welcome to Frenchman Street, an authentic taste of New Orleans nestled in the heart of Downtown Rochester, NY. Our culinary journey is inspired by the vibrant spirit of the famous Frenchman Street, bringing the soulful flavors of Creole and Cajun cuisine to Upstate New York. Immerse yourself in the lively atmosphere of a New Orleans jazz club, indulge in classic dishes like gumbo and jambalaya, and let the rhythms of jazz transport you to the lively streets of the Big Easy. Join us and experience the essence of Louisiana right here in Rochester!</p>
                        <h1 className="text-lg"> Contact: </h1>
                        <p className="font-normal mb-2 font-consolas"> <b>Phone:</b> 555-345-7890</p>
                        <p className="font-normal mb-2 font-consolas"> Email: contact@frenchman.st</p>
                        <img className="w-1/2" src="/barcode.png"/>
                    </div>
                </div>
                <div className="backdrop-blur p-6 lg:1/3">
                    <div className="">
                        <h1 className="text-3xl font-black"> Rochester&apos;s Spot For Authentic Creole Cuisine!</h1>
                        <p className="mt-6 text-sm">Step into Frenchman Street and immerse yourself in the lively ambiance of a New Orleans jazz club. The rustic decor, adorned with Mardi Gras colors and jazz-inspired art, creates an inviting and energetic space. Whether you&apos;re enjoying a meal with friends or sipping on a classic cocktail at the bar, our restaurant embodies the vibrant and welcoming spirit of the French Quarter. </p>
                        <button href="/events" className="mt-4 px-4 py-2  rounded-lg ml-auto bg-white text-black "> View Menu</button>
                        <img src="/food.jpg" className="mt-6 rounded-xl shadow-xl shadow-black/50"></img>
                    </div>
                </div>
                <div className="bg-black text-white backdrop-blur p-6 lg:flex-grow">
                    <div className="">
                        <img src="/food2.jpg" className="mt-6 rounded-xl mb-6 shadow-xl shadow-black/50"></img>
                        <h1 className="text-3xl font-black"> Jazz Up Your Dining Experience! </h1>
                        <p className="mt-6 text-sm"> Indulge in the soulful melodies of New Orleans, the rich flavors of Creole and Cajun cuisine, and the warmth of Southern hospitality. At Frenchman Street, every visit is a celebration of life, love, and good food. We invite you to join us on this gastronomic adventure and let the flavors of the Big Easy take you on a journey through the heart of Louisiana, right here in Rochester, NY. </p>
                        <button href="/events" className="mt-4 px-4 py-2  rounded-lg ml-auto bg-white text-black"> Learn More</button>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    </>
  );
}
