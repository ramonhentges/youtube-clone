import { mdiBrightness4, mdiBrightness7, mdiTranslate } from '@mdi/js';
import Icon from '@mdi/react';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { useMyTheme } from '../../contexts/Theme';
import { useDetectOutsideClick } from '../../helpers/useDetectOutsideClick';
import { getLocale } from '../../locales/locales';
import Avatar from '../Avatar';
import Divider from '../Divider';
import Stack from '../Stack';
import Body1 from '../Typography/Body1';

const Nav = styled.nav`
  background: ${(props) => props.theme.pallete.paper};
  border-radius: 8px;
  position: absolute;
  top: 60px;
  right: 0;
  width: 300px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

const MenuItem = styled.div`
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.text.primary};
  padding: 15px 20px;
  display: block;
  border-radius: 8px;
  &:hover {
    background-color: ${(props) => props.theme.pallete.hover};
  }
`;

export default function AvatarMenu() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const openMenu = () => setIsActive(!isActive);
  const { changeTheme, mode } = useMyTheme();
  const router = useRouter();
  const translation = getLocale(router.locale);

  return (
    <>
      <Avatar width="40px" height="40px" src="/avatar.jpg" onClick={openMenu} />

      <Nav
        ref={dropdownRef}
        style={
          isActive
            ? {
                opacity: 1,
                visibility: 'visible',
                transform: 'translateY(0)',
                position: 'absolute'
              }
            : undefined
        }
      >
        <ul>
          <MenuItem onClick={changeTheme}>
            <Stack spacing="10px" style={{ alignItems: 'center' }}>
              <Icon
                path={mode === 'dark' ? mdiBrightness7 : mdiBrightness4}
                size={1}
              />
              <Body1>{translation.changeTheme}</Body1>
            </Stack>
          </MenuItem>
          <Divider />
          <MenuItem
            onClick={() => {
              router.push(router.pathname, router.pathname, {
                locale: 'en-US'
              });
            }}
          >
            <Stack spacing="10px" style={{ alignItems: 'center' }}>
              <Icon path={mdiTranslate} size={1} />
              <Body1>{translation.english}</Body1>
            </Stack>
          </MenuItem>
          <Divider />
          <MenuItem
            onClick={() => {
              router.push(router.pathname, router.pathname, {
                locale: 'pt-BR'
              });
            }}
          >
            <Stack spacing="10px" style={{ alignItems: 'center' }}>
              <Icon path={mdiTranslate} size={1} />
              <Body1>{translation.portuguese}</Body1>
            </Stack>
          </MenuItem>
        </ul>
      </Nav>
    </>
  );
}
