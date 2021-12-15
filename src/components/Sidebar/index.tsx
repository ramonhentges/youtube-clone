import {
  Explore,
  ExploreOutlined,
  HistoryOutlined,
  Home,
  PlayCircleOutline,
  SubscriptionsOutlined,
  ThumbUpOutlined,
  VideoLibraryOutlined,
  WatchLaterOutlined
} from '@mui/icons-material';
import styled from 'styled-components';
import Avatar from '../Avatar';
import Divider from '../Divider';
import SidebarItem from './SidebarItem';
import SidebarSubscription from './SidebarSubscription';

const SidebarMain = styled.div`
  width: 240px;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  background-color: ${(props) => props.theme.pallete.paper};
`;

export default function Sidebar() {
  return (
    <SidebarMain>
      <SidebarItem icon={<Home />} text="Início" selected />
      <SidebarItem icon={<ExploreOutlined />} text="Explorar" />
      <SidebarItem icon={<SubscriptionsOutlined />} text="Inscrições" />
      <Divider style={{ marginTop: '10px', marginBottom: '10px' }} />
      <SidebarItem icon={<VideoLibraryOutlined />} text="Biblioteca" />
      <SidebarItem icon={<HistoryOutlined />} text="Histórico" />
      <SidebarItem icon={<PlayCircleOutline />} text="Seus vídeos" />
      <SidebarItem icon={<WatchLaterOutlined />} text="Assistir mais tarde" />
      <SidebarItem
        icon={<ThumbUpOutlined />}
        text="Vídeos marcados como gostei"
      />
      <Divider style={{ marginTop: '10px', marginBottom: '10px' }} />
      <h3>INSCRIÇÕES</h3>
      <SidebarSubscription
        avatarUrl="/avatar.jpg"
        channelName="Vintage"
        haveNews
      />
      <SidebarSubscription avatarUrl="/avatar.jpg" channelName="Alok" />
      <SidebarSubscription
        avatarUrl="/avatar.jpg"
        channelName="Typescript"
        haveNews
      />
    </SidebarMain>
  );
}
