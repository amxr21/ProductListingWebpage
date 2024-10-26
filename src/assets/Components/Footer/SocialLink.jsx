import TikTok from "../../Images/sm/Brand/tikTok.png"
const SocialLink = ({iconLink}) => {
    return (
        <div className="social-link flex items-center bg-gradient-to-r from-[#72DEAA] to-[#5B69DE] justify-center w-12 h-12 rounded-xl">
            <img src={iconLink} alt="" />
        </div>
    )
}

export default SocialLink;