const Product = ({imageLink, header, price, quantity}) => {
    
    let status = quantity == 0 ? "hidden": ''

    return (
        <div className={`${status} product relative flex flex-col h-96 bg-white rounded-xl drop-shadow-xl z-10`}>
            <div className="h-3/4 relative bg-blue-500 max-w-full overflow-hidden rounded-xl drop-shadow-xl">
                <img className="absolute h-auto w-[125%] max-w-[125%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={imageLink} alt="" />
            </div>

            <div className="details h-1/4 p-3">
                <h1 className="text-xl font-bold uppercase">{header}</h1>
                <h6 className="text-lg font-medium">£{price}</h6>
            </div>


            <div className="absolute flex items-center justify-center text-white top-2 left-2 border border-white z-50 rounded-full p-5 w-10 h-10 drop-shadow-xl">
                {quantity == 0 ? "Sold out" : quantity}
            </div>

        </div>
    )
}

export default Product;