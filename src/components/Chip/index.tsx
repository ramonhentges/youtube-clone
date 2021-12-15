import styled from 'styled-components';

type Props = {
  variant?: 'default' | 'outlined';
};
const Chip = styled.div<Props>`
  color: ${(props) =>
    props.variant === 'default'
      ? props.theme.pallete.background
      : props.theme.text.primary};
  background-color: ${(props) =>
    props.variant === 'default'
      ? props.theme.text.primary
      : props.theme.pallete.divider};
  border-radius: 15px;
  border-color: ${(props) =>
    props.variant === 'default'
      ? props.theme.text.primary
      : props.theme.pallete.hover};
  border: 1px solid
    ${(props) =>
      props.variant === 'default'
        ? props.theme.text.primary
        : props.theme.pallete.hover};
  height: 30px;
  min-width: 30px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0px 10px;
  &:hover {
    background-color: ${(props) =>
      props.variant === 'default'
        ? props.theme.text.primary
        : props.theme.pallete.hover};
  }
`;

export default Chip;
