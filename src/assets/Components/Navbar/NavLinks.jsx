import NavLink from "./NavLink";

const links = ['Home', 'About', 'Blog', 'Pricing']

const NavLinks = () => {
    return (
        <ul className="flex list-none gap-x-14">
            {
                links.map((link) => {
                    return <NavLink key={link} text={link} link={link} />
                })
            }
        </ul>
    )
}

export default NavLinks;