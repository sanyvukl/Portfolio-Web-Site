import styled from "styled-components";
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg"

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 24px;
  height: 24px;
`;
export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  position: relative;
  cursor: pointer;
  margin-bottom: 5px;
`;
export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
