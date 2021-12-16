import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { getLocale } from '../../locales/locales';
import Avatar from '../Avatar';
import Stack from '../Stack';
import Body1 from '../Typography/Body1';
import Body2 from '../Typography/Body2';

type VideoCardProps = {
  title: string;
  avatarUrl: string;
  thumbnailUrl: string;
  channelName: string;
  views: number;
  date: Date;
};

const MainDiv = styled.div`
  width: 253px;
`;

const Container = styled.div`
  position: relative;
`;

export default function VideoCard({
  title,
  avatarUrl,
  channelName,
  views,
  date,
  thumbnailUrl
}: VideoCardProps) {
  const { locale } = useRouter();
  const translation = getLocale(locale);

  return (
    <MainDiv>
      <Stack direction="column" spacing="10px">
        <img
          width="100%"
          height="142px"
          alt="video thumbnail"
          src={thumbnailUrl}
        />

        <Stack
          direction="row"
          spacing="10px"
          style={{ alignItems: 'flex-start', flexWrap: 'nowrap' }}
        >
          <Avatar
            width="40px"
            height="40px"
            src={avatarUrl}
            objectPosition=""
          />
          <Stack
            direction="column"
            style={{ alignItems: 'flex-start' }}
            spacing="5px"
          >
            <Body1>{title}</Body1>
            <Body2>{channelName}</Body2>
            <Body2>
              {`${views} ${translation.views} ⦁ ${date.toLocaleString()}`}
            </Body2>
          </Stack>
        </Stack>
      </Stack>
    </MainDiv>
  );
}
