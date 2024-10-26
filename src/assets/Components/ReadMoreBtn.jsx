const ReadMoreBtn = ({textHolder}) => {
    return (
        <div id="ReadMoreBtn" className="text-lg bg-gradient-to-r from-[#5B69DE] to-[#72DEAA] h-12 w-fit px-14 rounded-full text-white text-center flex items-center justify-center">
            <button className="">{textHolder}</button>
        </div>
    )
}

export default ReadMoreBtn;