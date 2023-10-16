import FadeElement from "@/components/FadeElement"

import Slider from "react-slick"

export default function Menu() {
    return (
        <div className="min-h-[100vh]">
            <div className="px-6 pb-6 font-sans bg-black/90 text-white rosewood-font min-h-[100vh] pt-24" id="menu">
                <span className="items-end justify-start b-2 border-b-2">
                    <h2 className="text-6xl mt-10"> MENU </h2>
                    <div className="sm:flex sm:space-x-6 space-y-4 sm:space-y-0 mb-10 text-lg mt-4">
                        <h3 className="hover:border-white transition-all duration-300 border-white/25 border-b-2 hover:cursor-pointer"> Appetizers</h3>
                        <h3 className="hover:border-white transition-all duration-300 border-white/25 border-b-2 hover:cursor-pointer"> Mains</h3>
                        <h3 className="hover:border-white transition-all duration-300 border-white/25 border-b-2 hover:cursor-pointer"> Sides</h3>
                        <h3 className="hover:border-white transition-all duration-300  border-white/25 border-b-2 hover:cursor-pointer"> Drinks</h3>
                        <h3 className="hover:border-white transition-all duration-300 border-white/25 border-b-2 hover:cursor-pointer"> Desserts</h3>
                    </div>
                </span>
                <div className="md:flex flex-wrap grid-cols-3 md:space-x-6">
                    <div className="md:w-1/4 font-semibold mt-6 md:mt-0">
                        <FadeElement before='opacity-0' after='opacity-100'>
                        <div>
                            <span className="flex justify-between border-b-2 border-white border-dotted">
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
        </div>
    )
}