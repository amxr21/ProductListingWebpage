import Company from "./Company";
import Products from "./Products";

const QuickLinks = () => {
    return (
        <div className="grid grid-cols-2 gap-x-16">
            <Company linksHeader={'Company'} links={['About','Careers','Our work', 'Contact']} />
            <Company linksHeader={'Products'} links={['About','Careers','Our work', 'Contact']} />
        </div>
    )
}

export default QuickLinks;