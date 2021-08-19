import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Side>
          <LaptopNav>
            <NavLink href="/sale">SaleLonger</NavLink>
            <NavLink href="/new">New&nbsp;ReleasesLonger</NavLink>
            <NavLink href="/men">MenLonger</NavLink>
            <NavLink href="/women">WomenLonger</NavLink>
            <NavLink href="/kids">KidsLonger</NavLink>
            <NavLink href="/collections">CollectionsLonger</NavLink>
          </LaptopNav>
          <MobileNav>
            <UnstyledButton>
              <Icon id="shopping-bag" strokeWidth={1} />
            </UnstyledButton>
            <UnstyledButton>
              <Icon id="search" strokeWidth={1} />
            </UnstyledButton>
            <UnstyledButton onClick={() => setShowMobileMenu(true)}>
              <Icon id="menu" strokeWidth={1} />
            </UnstyledButton>
          </MobileNav>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow: hidden;
  overflow-x: auto;

  @media ${QUERIES.phoneAndLower} {
    padding: 18px 16px;
  }
`;

const LaptopNav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${QUERIES.tabletAndLower} {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;

  @media ${QUERIES.tabletAndLower} {
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
    margine: 0 2rem;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
