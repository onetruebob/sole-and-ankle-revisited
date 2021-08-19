/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Dialog aria-label="Main Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" strokeWidth={1} size={32} />
        </CloseButton>
        <MenuNav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </MenuNav>
        <MenuFooter>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </MenuFooter>
      </Dialog>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: hsl(0deg 0% 0% / 0.5);
`;

const Dialog = styled(DialogContent)`
  background-color: white;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 330px;
  padding: 32px 22px 32px 32px;
  display: flex;
  align-items: center;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 32px;
  right: 22px;
`;

const MenuNav = styled.nav`
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  gap: 22px;

  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const MenuFooter = styled.footer`
  position: absolute;
  display: flex;
  gap: 14px;
  flex-direction: column;
  bottom: 32px;

  a {
    color: ${COLORS["gray"]["700"]};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default MobileMenu;
