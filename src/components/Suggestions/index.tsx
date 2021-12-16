import { useRouter } from 'next/router';
import { useTheme } from 'styled-components';
import { getLocale } from '../../locales/locales';
import Chip from '../Chip';
import Stack from '../Stack';

const items = [
  'Deep House',
  'Música',
  'Sertanejo',
  'Tecno',
  'Javascript',
  'Typescript',
  'Java',
  'Sports'
];

export default function Suggestions() {
  const theme = useTheme();
  const { locale } = useRouter();
  const translate = getLocale(locale);
  return (
    <Stack
      style={{
        height: '45px',
        alignItems: 'center',
        paddingInlineStart: '10px',
        backgroundColor: theme.pallete.paper
      }}
      spacing="10px"
    >
      <Chip variant="default">{translate.all}</Chip>
      {items.map((item) => (
        <Chip key={item} variant="outlined">
          {item}
        </Chip>
      ))}
    </Stack>
  );
}
