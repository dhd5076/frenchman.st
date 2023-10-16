import FadeElement from '@/components/FadeElement';
import React, { useEffect, useState } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Link from 'next/link';

import Image from 'next/image';

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
        <div className="h-auto w-full" id="top">
            <div className={`transition-all duration-1000 ${isVisible ? 'bg-black/50' : 'bg-black/100'}`}>
                <div className="relative h-screen">
                    <img src="/logo/Frenchman Street Alternate Logo.svg" className={`w-full mx-auto h-full md:object-cover object-center transition-all delay-500 duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} alt="Background" />
                    <div className="absolute inset-0 flex flex-col justify-end items-center">
                        <div className="text-white mb-8">
                        <span className={`fas fa-chevron-down opacity-50 hover:opacity-75 text-5xl pb-16 md:pb-0 animate-bounce hover:cursor-pointer ${showScroll ? 'invisible' : ''}`} onClick={() => { scrollToElementById("first"); setShowScroll(false) }}></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:flex bg-primary" id="first">
                <div className="md:w-1/2 w-full bg-black md:relative">
                    <Image
                    width={1024}
                    height={1024}
                    src="/place.jpg"
                    className="object-cover w-full max-h-[50vh] md:h-full md:max-h-none md:absolute inset-0"
                    />
                </div>
                <div className="w-full md:w-1/2 p-6 pb-0 rosewood-font text-left flex flex-col">
                    <div className="md:flex-grow">
                        <FadeElement before="opacity-0" after="opacity-100" className="flex flex-col justify-between">
                            <div className="pb-6 max-w-lg mr-auto">
                            <h2 className="text-3xl text-white mb-2">Welcome To New Orleans</h2>
                            <p className="text-white">Indulge in the vibrant flavors of the Big Easy right here in the heart of Rochester. Our New Orleans-inspired restaurant brings you a taste of Louisiana&apos;s rich culinary heritage with a menu bursting with Cajun and Creole classics. From gumbo to jambalaya, our dishes are crafted with authentic spices and local ingredients, guaranteeing a soulful dining experience that transports you straight to the streets of New Orleans. Join us and savor the magic of the French Quarter in every bite.</p>
                            <Link className="mt-6 hover:scale-[1.1] transition-all duration-100 bg-secondary text-black block px-4 py-2 font-serif font-bold mr-auto inline-block" href="/menu"> View Menu </Link>
                            </div>
                            <div className="text-accent p-6 -mx-6 space-y-4 bg-highlight">
                            <div className="flex">
                                <span className="fas fa-map-pin w-8" />
                                <div className="font-sans">
                                <b>Mercantile On Main</b> <br />
                                240 E. Main St. <br />
                                Rochester, NY 14603
                                </div>
                            </div>
                            <div className="flex">
                                <span className="fas fa-clock w-8" />
                                <div className="font-sans">
                                <b>Monday - Friday</b> <br />
                                11:30am - 8:00pm <br />
                                <b>Saturday - Sunday</b> <br />
                                <span className="indent-4">Private Events Only</span>
                                </div>
                            </div>
                            <div id="contact">
                                <span className="fas fa-phone w-8" /><span className="font-sans font-bold">(585) 555-1234</span>
                            </div>
                            <div>
                                <span className="fas fa-envelope w-8" /><span className="font-sans font-bold">contact@frenchman.st</span>
                            </div>
                            </div>
                        </FadeElement>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
