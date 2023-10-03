import React, { useEffect, useState } from 'react';

export default function Home() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    })

    return(
    <>
        <div className="h-auto mx-auto shadow-black">
            <div className={`transition-all duration-1000 ${isVisible ? 'h-[100vh]' : 'h-[0vh]'} bg-no-repeat bg-opacity-25 bg-center`}>
                <div className="m-auto h-full w-full flex flex-col relative w-full">
                    <div className={`w-full bg-white border-b-4 border-blue-500 transition-all duration-1000 ${isVisible ? 'mr-0' : 'mr-[400vh]'}`}>
                        <img
                            src="/transBG.png"
                            className="rounded-xl mx-auto opacity-90 h-[33vh] px-2 mt-16 md:shadow-black"
                            alt="Frenchman Street Logo"
                        />
                    </div>
                    <div className="bottom-16 w-full text-center mx-auto p-8 z-50 text-white-500 absolute mx-auto">
                        <button className="py-4 px-4 bg-white/75 text-black font-semibold">
                            View Menu
                        </button>
                    </div>
                </div>
            </div>
            <div className="lg:flex justify-between backdrop-blur font-black text-white h-1/2 bg-gradient-to-tr from-slate-900/50 to-slate-500/75 lg:pl-6">
                <div className={`lg:w-1/3 relative lg:mr-6 transition-all duration-1000 ${isVisible ? 'lg:mt-6 ' : 'lg:mt-16'}`}>
                    <h1 className="text-4xl text-white mx-auto bg-[#BF0603]/75 lg:rounded-t-xl p-6 text-center"> NOLA <span className="fas fa-plane mx-2"></span> ROC</h1>
                    <div className="text-black p-6 pl-6 font-serif bg-white">
                        <p className="font-serif text-2xl mb-2"> Frenchman Street</p>
                        <p className="mb-4 leading-5 font-serif font-thin indent-4"> Welcome to Frenchman Street, an authentic taste of New Orleans nestled in the heart of Downtown Rochester, NY. Our culinary journey is inspired by the vibrant spirit of the famous Frenchman Street, bringing the soulful flavors of Creole and Cajun cuisine to Upstate New York. Immerse yourself in the lively atmosphere of a New Orleans jazz club, indulge in classic dishes like gumbo and jambalaya, and let the rhythms of jazz transport you to the lively streets of the Big Easy. Join us and experience the essence of Louisiana right here in Rochester!</p>
                        <div className="lg:flex mb-4 justify-between">
                            <div>
                                <h1> Address: </h1>
                                <p className="font-normal font-serif text-lg mb-2"> Mercantile On Main <br/> 240 E Main St.</p>
                            </div>
                            <div>
                                <h1> Hours: </h1>
                                <p className="font-serif font-normal text-lg"> 
                                Monday-Friday <br/> 
                                11:30am - 8:00pm</p>
                            </div>
                        </div>
                        <h1 className="text-lg font-serif"> Contact: </h1>
                        <p className="font-serif font-normal">
                            <b>Phone:</b> 
                            <a href="tel:555-345-7890" className="text-blue-500"> 555-345-7890</a>
                        </p>
                        <p className="font-serif font-normal">
                            <b>Email:</b> 
                            <a href="mailto:contact@frenchman.st" className="text-blue-500"> contact@frenchman.st</a>
                        </p>

                    </div>
                </div>
                <div className="text-black lg:w-1/3 text-white h-full mx-6 lg:mx-0 lg:mb-6">
                    <div className="">
                        <h1 className="text-3xl font-black mt-8 mb-4"> Rochester&apos;s Spot For Authentic Creole Cuisine!</h1>
                        <p className="text-lg">Step into Frenchman Street and immerse yourself in the lively ambiance of a New Orleans jazz club. The rustic decor, adorned with Mardi Gras colors and jazz-inspired art, creates an inviting and energetic space. Whether you&apos;re enjoying a meal with friends or sipping on a classic cocktail at the bar, our restaurant embodies the vibrant and welcoming spirit of the French Quarter. </p>
                        <button href="/events" className="mt-6 px-4 py-2 ml-auto bg-white text-black "> View Menu</button>
                        <img src="/food.jpg" className="py-6"></img>
                    </div>
                </div>
                <div className="text-white backdrop-blur lg:mr-6 lg:w-1/3 w-full pb-6 pt-6">
                    <div className="md:rounded-xl w-full md:flex lg:block">
                        <div className="w-full md:w-1/2 lg:w-full">
                            <img src="/food2.jpg" className="pr-6 md:pr-0 pl-6 mb-6"></img>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-full">
                            <h1 className="text-xl font-black mb-4 px-6 font-serif"> A Culinary Odyssey: From NOLA to Rochester </h1>
                            <p className="text-lg px-6"> Discover the culinary magic of our Head Chef at Frenchman Street, whose journey from the vibrant streets of New Orleans to the heart of Rochester&apos;s Frenchman Street has shaped a tantalizing fusion of flavors. With expertise garnered in the lively food scene of New Orleans, our chef brings the soulful essence of Cajun and Creole cuisine to your plate, infusing it with a touch of Rochester&apos;s local charm. Join us for an unforgettable dining experience that embodies the best of both worlds, a testament to our chef&apos;s passion and culinary artistry. </p>
                            <div className='w-full flex pr-6'>
                                <button href="/events" className="mt-4 px-4 py-2 ml-auto bg-black text-white"> Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:pt-32 p-6  font-serif bg-white">
                <h2 className="text-6xl mb-10 border-b-2 border-black pb-2"> MENU </h2>
                <div className="md:flex md:space-x-6 space-y-6 md:space-y-0 pb-6">
                    <div className=" font-semibold">
                        <h3 className="mb-6 text-2xl"> Appetizers</h3>
                        <div>
                            <span className="flex justify-between">
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
                            <span className="flex justify-between">
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
                            <span className="flex justify-between">
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
                            <span className="flex justify-between">
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
        </div>
    </>
  );
}
