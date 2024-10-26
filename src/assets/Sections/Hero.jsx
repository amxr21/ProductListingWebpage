import HeroSection from "../Components/Hero/HeroSection";
import ReadMoreBtn from "../Components/ReadMoreBtn";

const Hero = () => {
    return (
        <div id="Hero" className="flex flex-col gap-y-8 my-[18rem] w-[46rem] mx-auto h-fit">
            <HeroSection />
            <ReadMoreBtn textHolder={"Read more"} />
        </div>
    )
}

export default Hero;