import QuickLinks from "../Components/Footer/QuickLinks";
import SocialLinks from "../Components/Footer/SocialLinks";
import WebsiteInfo from "../Components/Footer/WebsiteInfo";
import FooterBlob from "../Images/footer.png"

const Footer = () => {
    return (
        <div id="Footer" className="relative px-16 py-16 grid gap-x-36" style={{gridTemplateColumns: "1.3fr 1fr 1fr"}}>
            <WebsiteInfo />
            <QuickLinks />
            <SocialLinks />
            <img className="absolute w-[36em] -bottom-[12em] -left-[6em] z-[-999]" src={FooterBlob} alt="" />
        </div>
    )
}

export default Footer;