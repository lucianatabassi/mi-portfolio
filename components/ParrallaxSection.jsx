function ParrallaxSection({children}) {
    return (
        <main className="relative z-10 mt-[25vh] md:mt-[100vh] bg-[#00000F] w-full pt-10 pb-20 rounded-t-3xl">
            {children}
        </main>
    );
    
}

export default ParrallaxSection;