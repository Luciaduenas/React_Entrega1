import React from "react";
import { motion } from "framer-motion";
import { HeroContainer, CoverImg, TextContainer } from "./styles";
import { Button } from "../button/button";

export const Hero = () => {
    return (
        <HeroContainer>
                <CoverImg src="src/assets/images/cover.jpg" alt="cover image" />
            <TextContainer>
                <h1>All GOOD VIBES & COLOR.</h1>
                <p> We handpick the happiest items to bright up your life!</p>
                <Button secondary radius= "0"> Shop Online</Button>
            </TextContainer>
        </HeroContainer>
    )

}