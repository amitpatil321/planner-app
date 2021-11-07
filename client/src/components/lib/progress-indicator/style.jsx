import styled from 'styled-components';
import chroma from 'chroma-js';

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  height: 4px;
`;
export const ProgressRange = styled.div`
  width: 100%;
  position: absolute;
  height: 4px;
  top: 0;
  left: 0;
  background: ${props => chroma(props.pColor).alpha(0.2)};
  border-radius: 4px;
`;
export const ProgressSlider = styled.div`
  width: ${props => props.pWidth}%;
  height: 4px;
  z-index: 1;
  background: ${props => props.pColor};
  position: relative;
  border-radius: 4px;
`;