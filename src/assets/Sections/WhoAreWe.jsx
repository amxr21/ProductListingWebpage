import ReadMoreBtn from "../Components/ReadMoreBtn";
import Description from "../Components/WhoAreWe/Description";
import DescriptiveImage from "../Components/WhoAreWe/DescriptiveImage";

const WhoAreWe = () => {
    return (
        <div id="WhoAreWe" className="grid items-center grid-cols-2 gap-x-8">
            <div>
                <Description/>
                <ReadMoreBtn textHolder={"Read More"} />
            </div>
            <DescriptiveImage/>
        </div>
    )
}

export default WhoAreWe;