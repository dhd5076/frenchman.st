import FadeElement from '@/components/FadeElement';
import React, { useEffect, useState } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image from 'next/image';

import Slider from 'react-slick';

export default function Home() {

    const [showScroll, setShowScroll] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const scrollToElementById = (elementId) => {
        const element = document.getElementById(elementId);
      
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {

        setIsVisible(true);

        window.addEventListener('scroll', () => {
            if(window.scrollY > 300) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }

        })
    });


    return(
    <>
        <div className="fixed z-50 bottom-16 right-16 bg-white shadow-xl transition-all opacity-50 hover:opacity-100 rounded-full hover:scale-[1.25]">
            <button
                className={`w-12 h-12 fas fa-chevron-up text-black p-4 ${showScroll ? '' : 'hidden'}`}
                onClick={() => {
                scrollToElementById("top");
                }}
            />
        </div>
        <div className="h-auto w-full" id="top">
            <div className={`transition-all duration-1000 ${isVisible ? 'bg-black/75' : 'bg-black/100'}`}>
            <div className="relative h-screen">
                <img src="/logo/Frenchman Street Alternate Logo.svg" className={`w-full h-full md:object-cover object-center transition-all delay-500 duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} alt="Background" />
                <div className="absolute inset-0 flex flex-col justify-end items-center">
                    <div className="text-white mb-8">
                    <span className="fas fa-chevron-down text-5xl pb-16 md:pb-0 animate-bounce hover:cursor-pointer" onClick={() => { scrollToElementById("first"); setShowScroll(false) }}></span>
                    </div>
                </div>
            </div>

            </div>
            <div className="md:flex bg-primary min-h-[100vh]" id="first">
                <div className="md:w-1/2 bg-black">
                    <FadeElement>
                        <img src="place.jpg" className="w-full h-full object-cover"/>
                    </FadeElement>
                </div>
                <div className="md:w-1/2 p-8 rosewood-font flex flex-col items-center justify-center text-left">
                    <div className="w-full">
                        <FadeElement>
                            <div className="border-b-4 pb-6 max-w-lg mr-auto">
                                <h2 className="text-3xl text-white mb-2">Welcome to the Taste of New Orleans</h2>
                                <p className="text-white">Indulge in the vibrant flavors of the Big Easy right here in the heart of Rochester. Our New Orleans-inspired restaurant brings you a taste of Louisiana&apos;s rich culinary heritage with a menu bursting with Cajun and Creole classics. From gumbo to jambalaya, our dishes are crafted with authentic spices and local ingredients, guaranteeing a soulful dining experience that transports you straight to the streets of New Orleans. Join us and savor the magic of the French Quarter in every bite.</p>
                                <button className="my-4 bg-secondary text-black block px-4 py-4 mr-auto" onClick={() => scrollToElementById("second")}> Learn More </button>
                            </div>
                        </FadeElement>
                    </div>
                </div>
            </div>
            <div className="md:flex bg-secondary text-accent min-h-[50vh] md:h-[100vh]" id="second">
                <div className="md:w-1/2 bg-black order-1">
                    <FadeElement>
                        <img src="chef.jpeg" className="w-full h-full object-cover"/>
                    </FadeElement>
                </div>
                <div className="md:w-1/2 p-8 rosewood-font flex flex-col items-center justify-center text-right">
                    <div className="w-full">
                        <FadeElement>
                            <div className="border-b-4 border-accent pb-6 max-w-lg ml-auto">
                                <h2 className="text-3xl mb-2">Savor the Culinary Magic of New Orleans: Meet Our Renowned Chef</h2>
                                <p className="">Explore the rich flavors and vibrant culture of New Orleans through the exquisite creations of our master chef. Get to know the culinary artist behind the enchanting dishes that capture the essence of the Crescent City.</p>
                                <button className="my-4 bg-primary text-white block px-4 py-4 ml-auto" onClick={() => scrollToElementById("menu")}> View Menu </button>
                            </div>
                        </FadeElement>
                    </div>
                </div>
            </div>
            <div className="p-6 font-sans bg-black text-white rosewood-font" id="menu">
                <FadeElement>
                <Slider slidesToShow={3} autoplay={true} autoplaySpeed={2000} slidesToScroll={1} dots={false} arrows={false} className="bg-black -mx-6 mt-6" infinite={true}>
                    <img src="/food.jpg" height={256} alt="Image 1" />
                    <img src="/place.jpg" height={256} alt="Image 1" />
                    <img src="/bg.jpeg" height={256} alt="Image 1" />
                    <img src="/bg2.jpg" height={256} alt="Image 1" />
                </Slider>
                </FadeElement>
                <span className="flex items-end justify-start space-x-6 my-10 pb-2 border-b-2">
                    <h2 className="text-6xl border-text"> MENU </h2>
                    <h3 className="hover:border-b-2 hover:cursor-pointer"> Appetizers</h3>
                    <h3 className="hover:border-b-2 hover:cursor-pointer"> Mains</h3>
                    <h3 className="hover:border-b-2 hover:cursor-pointer"> Sides</h3>
                    <h3 className="hover:border-b-2 hover:cursor-pointer"> Drinks</h3>
                    <h3 className="hover:border-b-2 hover:cursor-pointer"> Desserts</h3>
                </span>
                <div className="md:flex flex-wrap grid-cols-3 md:space-x-6 pb-6">
                    <div className="md:w-1/4 font-semibold mt-6 md:mt-0">
                        <FadeElement>
                        <div>
                            <span className="flex justify-between border-b-2 border-black border-dotted">
                                <h4 className="text-xl font-normal uppercase"> Jambalaya </h4>
                                <span> $15.99</span>
                            </span>
                            <p className="text-normal text-normal font-thin leading-2 pt-2 italic">
                            Our mouthwatering Jambalaya is a celebration of flavors that transport you straight to the heart of New Orleans. A harmonious blend of spicy and savory, this dish features tender chunks of chicken, succulent shrimp, and spicy Andouille sausage, all simmered to perfection in a rich Creole tomato sauce. Served over a bed of fragrant rice and garnished with fresh green onions, it&apos;s a Cajun classic that&apos;s sure to satisfy your cravings for a taste of the Bayou. Come experience the true essence of NOLA right here at our restaurant!
                            </p>
                        </div>
                        </FadeElement>
                    </div>
                </div>
            </div>
            <div className="backdrop-blur bg-gradient-to-r p-6 bg-slate-900">
                <div className="max-w-xl mx-auto p-6 border-2">
                    <a className="block text-center mx-auto" href="https://avvinorochester.com">
                        <Image width={1024} height={1024} alt="Logo For Avvino, Text surrounded by curly frills" src="/avvino.png" className="mb-4 px-4 py-2 rounded object-fit" />
                    </a>
                    <div className=" mx-auto">
                        <h2 className='font-bold text-lg text-white font-serif underline mb-2 mt-0 text-center'> From Avvino To Frenchman Street</h2>
                        <p className="text-white mx-6 mb-6 text-sm font-serif mt-2 text-center">
                            Frenchman Street is a proud offspring of Avvino, our original and highly acclaimed restaurant. Avvino, renowned for its exceptional dining experience and rich culinary heritage, has been a cornerstone of our community for many years. As we continue to evolve and innovate, we decided to introduce La Bola, a new venture that carries forward Avvino&apos;s legacy while embracing the vibrant flavors of Spain and the Mediterranean. La Bola promises to enchant your taste buds with an array of delightful dishes, inspired by the same passion and expertise that originated at Avvino.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full p-4 text-center text-white bg-black">
                <span className="text-center w-full block">Copyright &copy; 2023 Frenchman Street</span>
                <span className="text-xs"> Made With ❤️ By <a className="underline" href="https://dylandunn.me">Dylan Dunn</a></span>
            </div>
        </div>
    </>
  );
}
