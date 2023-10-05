import FadeElement from '@/components/FadeElement';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';

export default function Home() {

    const [showScroll, setShowScroll] = useState(true);
    const [scrollPos, setScrollPos] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const scrollToElementById = (elementId) => {
        const element = document.getElementById(elementId);
      
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        setIsVisible(true);
    });


    return(
    <>
        <div className="h-auto w-full">
            <div className={`transition-all duration-1000 ${isVisible ? 'bg-black/75' : 'bg-black/100'}`}>
            <div className="relative h-screen">
                <img src="/logo/Frenchman Street Alternate Logo.svg" className={`w-full h-full object-cover object-center transition-all delay-500 duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} alt="Background" />
                <div className="absolute inset-0 flex flex-col justify-end items-center">
                    <div className="text-white mb-8">
                    <span className="fas fa-chevron-down text-5xl animate-bounce hover:cursor-pointer" onClick={() => { scrollToElementById("first"); setShowScroll(false) }}></span>
                    </div>
                </div>
            </div>

            </div>
            <div className="flex bg-primary h-[100vh]" id="first">
                <div className="w-1/2 bg-white">
                    <img src="place.jpg" className="w-full h-full object-cover">
                    </img>
                </div>
                <div className="w-1/2 p-8 rosewood-font flex flex-col items-center justify-center text-left">
                    <div className="border-b-2 pb-6 w-full">
                        <FadeElement>
                        <h2 className="text-3xl text-white mb-2">Welcome to the Taste of New Orleans</h2>
                        <p className="text-white">Indulge in the vibrant flavors of the Big Easy right here in the heart of Rochester. Our New Orleans-inspired restaurant brings you a taste of Louisiana's rich culinary heritage with a menu bursting with Cajun and Creole classics. From gumbo to jambalaya, our dishes are crafted with authentic spices and local ingredients, guaranteeing a soulful dining experience that transports you straight to the streets of New Orleans. Join us and savor the magic of the French Quarter in every bite.</p>
                        <button className="my-4 bg-secondary block px-4 py-4 ml-auto" onClick={() => scrollToElementById("second")}> Learn More </button>
                        </FadeElement>
                    </div>
                </div>
            </div>
            <div className="flex bg-secondary text-accent h-[100vh]" id="second">
                <div className="w-1/2 p-8 rosewood-font flex flex-col items-center justify-center text-left">
                    <div className="border-b-2 border-accent pb-6 w-full">
                        <FadeElement>
                        <h2 className="text-3xl mb-2">Savor the Culinary Magic of New Orleans: Meet Our Renowned Chef</h2>
                        <p className="">Explore the rich flavors and vibrant culture of New Orleans through the exquisite creations of our master chef. Get to know the culinary artist behind the enchanting dishes that capture the essence of the Crescent City.</p>
                        <button className="my-4 bg-primary text-white block px-4 py-4 ml-auto" onClick={() => scrollToElementById("menu")}> View Menu </button>
                        </FadeElement>
                    </div>
                </div>
                <div className="w-1/2 bg-white">
                    <img src="chef.jpeg" className="w-full h-full object-cover">
                    </img>
                </div>
            </div>
            <div className="p-6 font-sans bg-highlight rosewood-font min-h-[100vh] pt-24" id="menu">
                <h2 className="text-6xl mb-10 border-b-2 border-black py-2"> MENU </h2>
                <div className="md:flex md:space-x-6 pb-6">
                    <FadeElement>
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
                    </FadeElement>
                    <FadeElement>
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
                    </FadeElement>
                    <FadeElement>
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
                    </FadeElement>
                    <FadeElement>
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
                    </FadeElement>
                </div>
            </div>
            <div className="backdrop-blur bg-black/90">
                <div className="w-1/3 mx-auto p-6">
                    <a className="block text-center mx-auto" href="https://avvinorochester.com">
                        <Image width={1024} height={1024} alt="Logo For Avvino, Text surrounded by curly frills" src="/avvino.png" className="mb-4 px-4 py-2 rounded object-fit" />
                    </a>
                    <div className=" mx-auto">
                        <h2 className='font-bold text-lg text-white font-serif ml-6 mb-2 mt-0'> From Avvino To La Bola</h2>
                        <p className="text-white mx-6 mb-6 text-sm font-serif mt-2">
                            Frenchman Street is a proud offspring of Avvino, our original and highly acclaimed restaurant. Avvino, renowned for its exceptional dining experience and rich culinary heritage, has been a cornerstone of our community for many years. As we continue to evolve and innovate, we decided to introduce La Bola, a new venture that carries forward Avvino&apos;s legacy while embracing the vibrant flavors of Spain and the Mediterranean. La Bola promises to enchant your taste buds with an array of delightful dishes, inspired by the same passion and expertise that originated at Avvino.
                        </p>
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
