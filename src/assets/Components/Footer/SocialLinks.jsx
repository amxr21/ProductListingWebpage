import SocialLink from "./SocialLink";

import TikTok from "../../Images/sm/Brand/tiktok.png"
import Facebook from "../../Images/sm/Brand/facebook.png"
import Instagram from "../../Images/sm/Brand/instagram.png"
import Telegram from "../../Images/sm/Brand/telegram.png"
import Twitter from "../../Images/sm/Brand/twitter.png"
import YouTube from "../../Images/sm/Brand/youtube.png"



const SocialLinks = () => {
    return (
        <div className="">
            <h1 className="mb-6 bg-gradient-to-r text-lg from-[#72DEAA] to-[#5B69DE] bg-clip-text text-transparent font-semibold w-fit">Follow Us</h1>
            <div className="grid grid-cols-3 gap-y-6">
                {
                    [Telegram, TikTok, Twitter, Facebook, YouTube, Instagram].map((s) =>{
                        return <SocialLink iconLink={s} />
                    })
                }
            </div>
        </div>
    )
}

export default SocialLinks;