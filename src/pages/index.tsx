import type { NextPage } from 'next';
import Head from 'next/head';
import Divider from '../components/Divider';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Stack from '../components/Stack';
import Suggestions from '../components/Suggestions';
import VideoCard from '../components/VideoCard';

const videos = [
  {
    title: 'Javascript render',
    avatarUrl: '/avatar.jpg',
    channelName: 'Javascripto',
    views: Math.floor(Math.random() * 5000),
    date: new Date(),
    thumbnailUrl: '/thumb1.jpg'
  },
  {
    title: 'Music top',
    avatarUrl: '/avatar.jpg',
    channelName: 'Tecno',
    views: Math.floor(Math.random() * 5000),
    date: new Date(),
    thumbnailUrl: '/thumb2.jpg'
  },
  {
    title: 'Javascript render',
    avatarUrl: '/avatar.jpg',
    channelName: 'Javascripto',
    views: Math.floor(Math.random() * 5000),
    date: new Date(),
    thumbnailUrl: '/thumb3.jpg'
  },
  {
    title: 'Javascript render',
    avatarUrl: '/avatar.jpg',
    channelName: 'Javascripto',
    views: Math.floor(Math.random() * 5000),
    date: new Date(),
    thumbnailUrl: '/thumb1.jpg'
  },
  {
    title: 'Javascript render',
    avatarUrl: '/avatar.jpg',
    channelName: 'Javascripto',
    views: Math.floor(Math.random() * 5000),
    date: new Date(),
    thumbnailUrl: '/thumb2.jpg'
  },
  {
    title: 'Javascript render',
    avatarUrl: '/avatar.jpg',
    channelName: 'Javascripto',
    views: Math.floor(Math.random() * 5000),
    date: new Date(),
    thumbnailUrl: '/thumb3.jpg'
  },
  {
    title: 'Javascript render',
    avatarUrl: '/avatar.jpg',
    channelName: 'Javascripto',
    views: Math.floor(Math.random() * 5000),
    date: new Date(),
    thumbnailUrl: '/thumb1.jpg'
  }
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Youtube</title>
        <meta name="description" content="Youtube clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div
          style={{ display: 'flex', flexDirection: 'row', height: 'inherit' }}
        >
          <Sidebar />
          <Stack direction="column">
            <Divider />
            <Suggestions />
            <Divider />
            <Stack direction="row" style={{ padding: '10px' }} spacing="10px">
              {videos.map((video, idx) => (
                <VideoCard key={idx} {...video} />
              ))}
            </Stack>
          </Stack>
        </div>
      </main>
    </>
  );
};

export default Home;
