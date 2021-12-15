import {
  AppsOutlined,
  KeyboardVoice,
  MenuSharp,
  NotificationsOutlined,
  SearchOutlined,
  VideoCallOutlined
} from '@mui/icons-material';
import styled, { useTheme } from 'styled-components';
import { useMyTheme } from '../../contexts/Theme';
import YouTubeLogo from '../../Images/logo';
import Avatar from '../Avatar';

const MainDiv = styled.div`
  background-color: ${(props) => props.theme.pallete.paper};
  padding: 0 16px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuIcon = styled(MenuSharp)`
  cursor: pointer;
  border-radius: 50%;
  padding: 8px;
  &:active {
    background-color: ${(props) => props.theme.pallete.hover};
  }
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

const SearchIcon = styled(SearchOutlined)`
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

const SpeechIcon = styled(KeyboardVoice)`
  margin: 0 auto;
`;

const SpeechButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.pallete.background};
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
`;

const VideoCallIcon = styled(VideoCallOutlined)`
  cursor: pointer;
  width: 40px;
  margin: 0 auto;
`;
const AppsIcon = styled(AppsOutlined)`
  cursor: pointer;
  width: 40px;
  margin: 0 auto;
`;

const NotificationIcon = styled(NotificationsOutlined)`
  cursor: pointer;
  width: 40px;
  margin: 0 auto;
`;

export default function Navbar() {
  const themeContext = useTheme();
  const { changeTheme } = useMyTheme();
  return (
    <MainDiv>
      <div
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <MenuIcon />
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
          <SearchInput placeholder="Pesquisar" />
          <SearchButton>
            <SearchIcon />
          </SearchButton>
        </div>
        <SpeechButton>
          <SpeechIcon />
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
        <VideoCallIcon />
        <AppsIcon />
        <NotificationIcon />
        <Avatar
          width="40px"
          height="40px"
          src="/avatar.jpg"
          onClick={changeTheme}
        />
      </div>
    </MainDiv>
  );
}
