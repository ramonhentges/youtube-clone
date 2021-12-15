import styled from 'styled-components';

type ItemProps = {
  selected?: boolean;
};

const Item = styled.div<ItemProps>((props) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  backgroundColor: props.selected
    ? props.theme.pallete.hover
    : props.theme.pallete.paper,
  height: '40px',
  cursor: 'pointer',
  padding: '0 24px',
  '&:hover': {
    backgroundColor: props.theme.pallete.hover
  }
}));

const Text = styled.a`
  font-size: 15px;
  color: ${(props) => props.theme.text.primary};
  margin-left: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const News = styled.div`
  border-radius: 50%;
  height: 5px;
  width: 5px;
  background-color: ${(props) => props.theme.pallete.inputFocus};
  margin-left: auto;
`;

type SidebarItemProps = {
  icon: React.ReactNode;
  selected?: boolean;
  text: string;
  haveNews?: boolean;
};

export default function SidebarItem({
  selected,
  icon,
  text,
  haveNews
}: SidebarItemProps) {
  return (
    <Item selected={selected}>
      {icon}
      <Text>{text}</Text>
      {haveNews && <News />}
    </Item>
  );
}
