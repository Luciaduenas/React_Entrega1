import React from "react";
import { ProductCardStyle, ProductImg, PriceContainer } from "./styles";
import { Button } from "../../button/button";

export const ProductCard = ( {img, name, price})=>{
    return (
        <ProductCardStyle>
              <ProductImg src={img} alt={name} />
            <h2>{name}</h2>
            <PriceContainer>
                <p>{price}usd</p>
                <Button>ADD TO CART</Button>
            </PriceContainer>
        </ProductCardStyle>
    )
}