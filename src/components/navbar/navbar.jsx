import React from "react";
import { motion } from "framer-motion";
import { FaShoppingCart } from 'react-icons/fa';
import { NavbarContainer } from "./styles";
import { NavbarLink } from "./styles";
import { NavbarLogo, NavbarLinksCartContainer, CartContsiner, NabvarLinksContainer } from "./styles";

export const Navbar = () => {
return (
    <NavbarContainer>
        <NavbarLogo src="/LOGO HAPPY COLORS.png" alt="Happy Colors Logo" />
        <NavbarLinksCartContainer>
            <NabvarLinksContainer>
                    <motion.div whileHover={{scale:0.97}}>  
                      <NavbarLink href="#">Shop</NavbarLink>
                    </motion.div>
                    <motion.div whileHover={{scale:0.97}}>
                      <NavbarLink href="#">Log in</NavbarLink>
                    </motion.div>
            </NabvarLinksContainer>
            <CartContsiner>
                <motion.div whileHover={{scale:0.97}}>  
                    <FaShoppingCart/>
                </motion.div>
            </CartContsiner>

        </NavbarLinksCartContainer>
    </NavbarContainer>
)

}