import React, { useEffect, useState } from 'react';

export default function Home() {

    const [showScroll, setShowScroll] = useState(true);

    const scrollToElementById = (elementId) => {
        const element = document.getElementById(elementId);
      
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    })

    return(
    <>
        <div className="h-auto w-full shadow-black">
            <div className={`transition-all pt-16 duration-1000 bg-black/75`}>
                <img src="/logo/Frenchman Street Alternate Logo.png" className="h-[100vh] mx-auto object-contain">
                </img>
                <div className="text-white w-full -mt-32 pb-16 text-center relative bottom-0 bg-gradient-to-b from-black/0 to-black/25">
                    <span className={`rounded-full transition-all duration-1000 border-2 p-4 fas fa-chevron-down bg-white/25 animate-bounce ${showScroll ? 'opacity-100' : 'opacity-0'}`} onClick={() => { scrollToElementById("first"); setShowScroll(false) }}></span>
                </div>
            </div>
            <div className="flex bg-primary h-[100vh]" id="first">
                <div className="w-1/2 bg-white">
                    <img src="bg.jpeg" className="w-full h-full object-cover">
                    </img>
                </div>
                <div className="w-1/2 p-8 rosewood-font flex flex-col items-center justify-center text-left">
                    <div className="border-b-2 pb-6 w-full">
                        <h2 className="text-3xl text-white mb-2">Welcome to the Taste of New Orleans</h2>
                        <p className="text-white">Indulge in the vibrant flavors of the Big Easy right here in the heart of [Your City]. Our New Orleans-inspired restaurant brings you a taste of Louisiana's rich culinary heritage with a menu bursting with Cajun and Creole classics. From gumbo to jambalaya, our dishes are crafted with authentic spices and local ingredients, guaranteeing a soulful dining experience that transports you straight to the streets of New Orleans. Join us and savor the magic of the French Quarter in every bite.</p>
                        <button className="my-4 bg-secondary block px-4 py-4 ml-auto"> View Menu </button>
                    </div>
                </div>

            </div>
            <div className="p-6 font-sans bg-secondary rosewood-font">
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
