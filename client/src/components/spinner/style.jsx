import styled from 'styled-components';
import { spinnerAnimation } from '../../styles/animation';

export const Container = styled.div`
  width: ${props => props.pWidth}px;
  height: ${props => props.pHeight}px;
  background: transparent;
  border: 1px solid ${props => props.pColor};
  border-bottom-color: transparent;
  border-radius: 50%;
  position: relative;
  animation: 1s ${spinnerAnimation} linear infinite;
`