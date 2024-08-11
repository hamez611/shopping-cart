import React from "react";
import styled from "@emotion/styled";
import { GNB } from "components/GNB";
import { GNB_TYPE } from "constants/common";
import { ProductInCart } from "components/ProductInCart";
import { Box } from "styles/StyleComponent";

function CartPage({ cart, setCart }) {
  return (
    <Base>
      <GNB type={GNB_TYPE.MAIN} />
      <Inner>
        <Box gap={30}>
          {cart.map((consulting, id) => (
            <ProductInCart
              key={id}
              product={consulting}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </Box>
      </Inner>
    </Base>
  );
}

export default CartPage;

const Base = styled.div`
  width: 100%;
`;
const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 72px 20px 69px;
`;
