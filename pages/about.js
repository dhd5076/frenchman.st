<div className="md:flex bg-secondary text-accent" id="second">
<div className="bg-black order-1 flex w-auto justify-center items-center md:w-1/2">
    <FadeElement before="opacity-0" after="opacity-100" className="w-full">
        <Image src="/chef.jpeg" width={1024} height={1024} className="object-cover w-full h-auto" />
    </FadeElement>
</div>
<FadeElement className="p-6 rosewood-font flex flex-col items-center text-right md:w-1/2">
    <div className="w-full">
        <FadeElement before="opacity-0" after="opacity-100">
            <div className="max-w-lg ml-auto">
                <h2 className="text-3xl mb-2">Savor the Culinary Magic of New Orleans: Meet Our Renowned Chef</h2>
                <p className="">Explore the rich flavors and vibrant culture of New Orleans through the exquisite creations of our master chef. Get to know the culinary artist behind the enchanting dishes that capture the essence of the Crescent City.</p>
                <button className="mt-4 hover:scale-[1.1] transition-all duration-100 bg-accent text-white block px-4 py-2 font-serif font-bold ml-auto" onClick={() => scrollToElementById("menu")}> View Menu </button>
            </div>
        </FadeElement>
    </div>
</FadeElement>
</div>