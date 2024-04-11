import React from "react";
import ProductReviewCard from './ProductReviewCard.js'
import  '../Styles/ProductReviews.css'

const ProductReviews = ({ productReviews }) => {
    return (
        <div className="ProductReviews">
            {productReviews.map((item, index) => (
                <ProductReviewCard
                    price={item.price}
                    name={item.name}
                    image={item.image}
                    review={item.review}
                    index={index} // using the index from map function
                    key={item.image} // ensure each element has a unique key
                />
            ))}
        </div>
    );
};

export default ProductReviews;