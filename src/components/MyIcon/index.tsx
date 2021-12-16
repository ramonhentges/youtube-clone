import Icon from '@mdi/react';
import styled from 'styled-components';

const MyIcon = styled(Icon)`
  cursor: pointer;
  border-radius: 50%;
  padding: 8px;
  &:active {
    background-color: ${(props) => props.theme.pallete.hover};
  }
`;

export default MyIcon;
