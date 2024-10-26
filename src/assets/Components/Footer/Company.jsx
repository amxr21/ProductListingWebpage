const Company = ({linksHeader, links}) => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-6 bg-gradient-to-r from-[#72DEAA] to-[#5B69DE] bg-clip-text text-transparent w-fit">{linksHeader}</h2>
            <ul>
                {
                    links.map((link) => {
                        return <li>{link}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Company;