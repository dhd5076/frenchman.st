import React, { useEffect, useState } from 'react';

export default function Home() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    })

    return(
    <>
        <div className="h-auto w-full shadow-black">
            <div className={`transition-all pt-16 w-full duration-1000`}>
                <div className="flex">
                    <div className={`transition-all duration-100`}>
                        <img
                            src="/transBG.png"
                            className="bg-white object-cover p-6 h-[50vh] md:shadow-black"
                            alt="Frenchman Street Logo"
                        />
                    </div>
                    <div className="relative flex-grow">
                        <img src="/bg2.jpg" className="h-[50vh] w-full object-cover" alt="Background Image" />
                        <h1 className="absolute top-0 bottom-0 left-0 right-0 text-white text-4xl text-center flex flex-col justify-center items-center p-4">
                            <span className="font-sans font-black text-7xl block">NOLA TO ROC</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="lg:flex justify-between backdrop-blur font-black font-sans xl:h-[100vh] bg-[#EEB970] text-black">
                <div className={`lg:w-1/3 relative transition-all duration-1000`}>
                    <div className="">
                        <img src="/place.jpg" className="w-full object-cover xl:h-[50vh]"/>
                        <div className="p-6">
                            <div className="font-sans border-b-4 border-[#325091] pb-6">
                                <p className="font-sans text-2xl"> Frenchman Street</p>
                                <p className="font-sans text-sm"> Welcome to Frenchman Street, an authentic taste of New Orleans nestled in the heart of Downtown Rochester, NY. Our culinary journey is inspired by the vibrant spirit of the famous Frenchman Street, bringing the soulful flavors of Creole and Cajun cuisine to Upstate New York. Immerse yourself in the lively atmosphere of a New Orleans jazz club, indulge in classic dishes like gumbo and jambalaya, and let the rhythms of jazz transport you to the lively streets of the Big Easy. Join us and experience the essence of Louisiana right here in Rochester!</p>
                            </div>    
                            <div className="lg:flex my-4 justify-between">
                                <div>
                                    <h1> Address: </h1>
                                    <p className="font-normal font-sans text-lg mb-2"> Mercantile On Main <br/> 240 E Main St.</p>
                                </div>
                                <div>
                                    <h1> Hours: </h1>
                                    <p className="font-sans font-normal text-lg"> 
                                    Monday-Friday <br/> 
                                    11:30am - 8:00pm</p>
                                </div>
                            </div>
                            <h1 className="text-lg font-sans border-t-4 border-[#325091] pt-2"> Contact: </h1>
                            <p className="font-sans font-normal">
                                Phone: 
                                <a href="tel:555-345-7890" className="text-[#325091] font-bold"> 555-345-7890</a>
                            </p>
                            <p className="font-sans font-normal">
                                Email: 
                                <a href="mailto:contact@frenchman.st" className="text-[#325091] font-bold"> contact@frenchman.st</a>
                            </p>
                        </div>

                    </div>
                </div>
                <div className="lg:w-1/3 h-full lg:mb-6">
                    <div className="xl:h-[50vh] p-6">
                        <h1 className="text-3xl font-black"> Rochester&apos;s Spot For Authentic Creole Cuisine!</h1>
                        <p className="text-lg">Step into Frenchman Street and immerse yourself in the lively ambiance of a New Orleans jazz club. The rustic decor, adorned with Mardi Gras colors and jazz-inspired art, creates an inviting and energetic space. Whether you&apos;re enjoying a meal with friends or sipping on a classic cocktail at the bar, our restaurant embodies the vibrant and welcoming spirit of the French Quarter. </p>
                        <div className='w-full flex'>
                                <button href="/events" className="mt-4 px-4 py-2 ml-auto bg-white text-black">View Menu</button>
                        </div>
                    </div>
                    <img src="/food.jpg" className="xl:h-[50vh] bottom-0 object-cover"></img>
                </div>
                <div className="lg:w-1/3 w-full">
                    <div className="md:rounded-xl w-full md:flex lg:block">
                        <div className="w-full md:w-1/2 lg:w-full">
                            <img src="/food2.jpg" className="w-full object-cover lg:h-[50vh]"></img>
                        </div>
                        <div className="w-full p-6 md:w-1/2 lg:w-full xl:h-[50vh]">
                            <h1 className="text-2xl font-black font-sans"> A Culinary Odyssey: From NOLA to Rochester </h1>
                            <p className="text-lg"> Discover the culinary magic of our Head Chef at Frenchman Street, whose journey from the vibrant streets of New Orleans to the heart of Rochester&apos;s Frenchman Street has shaped a tantalizing fusion of flavors. With expertise garnered in the lively food scene of New Orleans, our chef brings the soulful essence of Cajun and Creole cuisine to your plate, infusing it with a touch of Rochester&apos;s local charm. Join us for an unforgettable dining experience that embodies the best of both worlds, a testament to our chef&apos;s passion and culinary artistry. </p>
                            <div className='w-full flex'>
                                <button href="/events" className="mt-4 px-4 py-2 ml-auto bg-white text-black"> Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-6 font-sans bg-white">
                <h2 className="text-6xl mb-10 border-y-2 border-black py-2"> MENU </h2>
                <div className="md:flex md:space-x-6 space-y-6 md:space-y-0 pb-6">
                    <div className=" font-semibold">
                        <h3 className="mb-6 text-2xl"> Appetizers</h3>
                        <div>
                            <span className="flex justify-between border-b-2 border-black border-dotted">
                                <h4 className="text-xl font-normal uppercase"> Jambalaya </h4>
                                <span> $15.99</span>
                            </span>
                            <p className="text-normal text-normal font-thin leading-2 pt-2 italic">
                            Our mouthwatering Jambalaya is a celebration of flavors that transport you straight to the heart of New Orleans. A harmonious blend of spicy and savory, this dish features tender chunks of chicken, succulent shrimp, and spicy Andouille sausage, all simmered to perfection in a rich Creole tomato sauce. Served over a bed of fragrant rice and garnished with fresh green onions, it&apos;s a Cajun classic that&apos;s sure to satisfy your cravings for a taste of the Bayou. Come experience the true essence of NOLA right here at our restaurant!
                            </p>
                        </div>
                    </div>
                    <div className="font-semibold">
                        <h3 className="mb-6 text-2xl"> Appetizers</h3>
                        <div>
                            <span className="flex justify-between border-b-2 border-black border-dotted">
                                <h4 className="text-xl font-normal uppercase"> Jambalaya </h4>
                                <span> $15.99</span>
                            </span>
                            <p className="text-normal text-normal font-thin leading-2 pt-2 italic">
                            Our mouthwatering Jambalaya is a celebration of flavors that transport you straight to the heart of New Orleans. A harmonious blend of spicy and savory, this dish features tender chunks of chicken, succulent shrimp, and spicy Andouille sausage, all simmered to perfection in a rich Creole tomato sauce. Served over a bed of fragrant rice and garnished with fresh green onions, it&apos;s a Cajun classic that&apos;s sure to satisfy your cravings for a taste of the Bayou. Come experience the true essence of NOLA right here at our restaurant!
                            </p>
                        </div>
                    </div>
                    <div className="font-semibold">
                        <h3 className="mb-6 text-2xl"> Appetizers</h3>
                        <div>
                            <span className="flex justify-between border-b-2 border-black border-dotted">
                                <h4 className="text-xl font-normal uppercase"> Jambalaya </h4>
                                <span> $15.99</span>
                            </span>
                            <p className="text-normal text-normal font-thin leading-2 pt-2 italic">
                            Our mouthwatering Jambalaya is a celebration of flavors that transport you straight to the heart of New Orleans. A harmonious blend of spicy and savory, this dish features tender chunks of chicken, succulent shrimp, and spicy Andouille sausage, all simmered to perfection in a rich Creole tomato sauce. Served over a bed of fragrant rice and garnished with fresh green onions, it&apos;s a Cajun classic that&apos;s sure to satisfy your cravings for a taste of the Bayou. Come experience the true essence of NOLA right here at our restaurant!
                            </p>
                        </div>
                    </div>
                    <div className="font-semibold">
                        <h3 className="mb-6 text-2xl"> Appetizers</h3>
                        <div>
                            <span className="flex justify-between border-b-2 border-black border-dotted">
                                <h4 className="text-xl font-normal uppercase"> Jambalaya </h4>
                                <span> $15.99</span>
                            </span>
                            <p className="text-normal text-normal font-thin leading-2 pt-2 italic">
                            Our mouthwatering Jambalaya is a celebration of flavors that transport you straight to the heart of New Orleans. A harmonious blend of spicy and savory, this dish features tender chunks of chicken, succulent shrimp, and spicy Andouille sausage, all simmered to perfection in a rich Creole tomato sauce. Served over a bed of fragrant rice and garnished with fresh green onions, it&apos;s a Cajun classic that&apos;s sure to satisfy your cravings for a taste of the Bayou. Come experience the true essence of NOLA right here at our restaurant!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-4 text-center text-white bg-black">
                <span className="text-center w-full block">&copy; 2023 Frenchman Street</span>
                <span className="text-xs"> Made With ❤️ By <a className="underline" href="https://dylandunn.me">Dylan Dunn</a></span>
            </div>
        </div>
    </>
  );
}
