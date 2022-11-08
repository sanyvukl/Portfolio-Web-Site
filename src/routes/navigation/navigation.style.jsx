import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled for html components
export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
`;
// Styled for existing react components
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 20px;
`;
export const NavLink = styled(Link)`
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
`;
export const NavLinks = styled.div`
  min-width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
