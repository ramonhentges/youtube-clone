import styled, { useTheme } from 'styled-components';
import YouTubeLogo from '../../Images/logo';
import Icon from '@mdi/react';
import {
  mdiMenu,
  mdiApps,
  mdiMagnify,
  mdiMicrophone,
  mdiVideoPlusOutline,
  mdiBellOutline
} from '@mdi/js';
import MyIcon from '../MyIcon';
import { useRouter } from 'next/router';
import { getLocale } from '../../locales/locales';
import AvatarMenu from '../AvatarMenu';

const MainDiv = styled.div`
  background-color: ${(props) => props.theme.pallete.paper};
  padding: 0 16px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchInput = styled.input`
  background-color: ${(props) => props.theme.pallete.background};
  border-color: ${(props) => props.theme.pallete.divider};
  border: 1px solid ${(props) => props.theme.pallete.divider};
  border-radius: 2px 0 0 2px;
  height: 34px;
  color: ${(props) => props.theme.text.primary};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 16px;
  padding: 2px 6px;
  width: 500px;
  &:focus {
    border-color: ${(props) => props.theme.pallete.inputFocus};
    border: 1px solid ${(props) => props.theme.pallete.inputFocus};
    outline: none;
  }
`;

const SearchIcon = styled(Icon)`
  color: ${(props) => props.theme.text.secondary};
  margin: 0 auto;
`;

const SearchButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.pallete.divider};
  height: 40px;
  padding: 3px 20px;
  border: none;
`;

const SpeechButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.pallete.background};
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Navbar() {
  const themeContext = useTheme();
  const { locale } = useRouter();
  const translation = getLocale(locale);

  return (
    <MainDiv>
      <div
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <MyIcon path={mdiMenu} size={1} />
        <div>
          <YouTubeLogo color={themeContext.text.primary} />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <SearchInput placeholder={translation.search} list="searchList" />
          <datalist id="searchList">
            <option value="Vintage" />
            <option value="Alok" />
            <option value="TypeScript" />
          </datalist>
          <SearchButton>
            <SearchIcon size={1} path={mdiMagnify} />
          </SearchButton>
        </div>
        <SpeechButton>
          <Icon size={1} path={mdiMicrophone} />
        </SpeechButton>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        <MyIcon size={1} path={mdiVideoPlusOutline} />
        <MyIcon size={1} path={mdiApps} />
        <MyIcon size={1} path={mdiBellOutline} />

        <AvatarMenu />
      </div>
    </MainDiv>
  );
}
