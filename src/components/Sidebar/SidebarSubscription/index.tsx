import Avatar from '../../Avatar';
import SidebarItem from '../SidebarItem';

type SidebarSubscriptionProps = {
  avatarUrl: string;
  channelName: string;
  selected?: boolean;
  haveNews?: boolean;
};

export default function SidebarSubscription({
  avatarUrl,
  channelName,
  selected,
  haveNews
}: SidebarSubscriptionProps) {
  return (
    <SidebarItem
      icon={<Avatar width={30} height={30} src={avatarUrl} />}
      text={channelName}
      selected={selected}
      haveNews={haveNews}
    />
  );
}
