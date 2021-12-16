import {
  mdiClockTimeFourOutline,
  mdiCompassOutline,
  mdiHistory,
  mdiHomeVariant,
  mdiPlayBoxMultipleOutline,
  mdiPlayBoxOutline,
  mdiThumbUpOutline,
  mdiYoutubeSubscription
} from '@mdi/js';
import Icon from '@mdi/react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { getLocale } from '../../locales/locales';

import Divider from '../Divider';
import SidebarItem from './SidebarItem';
import SidebarSubscription from './SidebarSubscription';

const SidebarMain = styled.div`
  width: 240px;
  min-width: 240px;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  background-color: ${(props) => props.theme.pallete.paper};
`;

export default function Sidebar() {
  const { locale } = useRouter();
  const translation = getLocale(locale);
  return (
    <SidebarMain>
      <SidebarItem
        icon={<Icon path={mdiHomeVariant} size={1} />}
        text={translation.home}
        selected
      />
      <SidebarItem
        icon={<Icon path={mdiCompassOutline} size={1} />}
        text={translation.explore}
      />
      <SidebarItem
        icon={<Icon path={mdiYoutubeSubscription} size={1} />}
        text={translation.subscriptions}
      />
      <Divider style={{ marginTop: '10px', marginBottom: '10px' }} />
      <SidebarItem
        icon={<Icon path={mdiPlayBoxMultipleOutline} size={1} />}
        text={translation.library}
      />
      <SidebarItem
        icon={<Icon path={mdiHistory} size={1} />}
        text={translation.history}
      />
      <SidebarItem
        icon={<Icon path={mdiPlayBoxOutline} size={1} />}
        text={translation.yourVideos}
      />
      <SidebarItem
        icon={<Icon path={mdiClockTimeFourOutline} size={1} />}
        text={translation.watchLater}
      />
      <SidebarItem
        icon={<Icon path={mdiThumbUpOutline} size={1} />}
        text={translation.likedVideos}
      />
      <Divider style={{ marginTop: '10px', marginBottom: '10px' }} />
      <h3 style={{ textTransform: 'uppercase', marginBottom: '10px' }}>
        {translation.subscriptions}
      </h3>
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
