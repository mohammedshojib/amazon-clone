import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from 'react'
import Currency from "react-currency-format";

function Product({id, title, price, description, category, image}) {
    // const {hasPrime} = useState(Math.random() < 0.5)
    return (
        <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400 '>{category}</p>
            <img src={image} height={200} width={200} objectFit="contain"/>
            <h4 className='m-3 '>{title}</h4>
            <p className="text-xs m-2 line-clamp-2">{description}</p>
            <h5 className="m-5">${price}</h5>
            <p  className='text-xs text-gray-500 '>FREE next day delivery</p>
            <button className='mt-auto button'>Add to cart</button>
        </div>
    )
}

export default Product
