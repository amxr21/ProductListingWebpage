import axios from "axios"
import { useEffect, useState } from "react";
import Product from "../Components/Products/Product";

const Products = () => {
    const [products, setProducts] = useState([])
    
    const [clicked, setClicked] = useState(false)


    useEffect(() => {
        const fetchProducts = async () => {
            const a = await axios.get('https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products')
            .then((response) => setProducts(response.data[0]));

        }
        fetchProducts()

    }, [])

    console.log(products);

    let a = products.length > 0 ?
    !clicked ?
    products.slice(0,7).map((product) => {
        return <Product
                    key={product.id}
                    imageLink={product.image}
                    header={product.product_name}
                    price={product.price}
                    quantity={product.stock_count}
                />
    })
    :
    products.map((product) => {
        return <Product
                    key={product.id}
                    imageLink={product.image}
                    header={product.product_name}
                    price={product.price}
                    quantity={product.stock_count}
                />
    })
    : "nothin to show"

    return (
        <div id="Products" className="grid 2xl:grid-cols-4 grid-cols-3 2xl:gap-14 md:gap-20 my-48">
            {
                a
            }
        {!clicked && <p className="cursor-pointer text-[#5B69DE] font-semibold" onClick={() => {setClicked(true)}}>Load more</p>}

        </div>
    )
}


export default Products;