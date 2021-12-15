import styled from 'styled-components';

type Props = {
  direction?: string;
  spacing?: string;
  justifyContent?: string;
};
const Stack = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  flex-wrap: wrap;
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  gap: ${(props) => props.spacing || '0px'};
`;

export default Stack;
