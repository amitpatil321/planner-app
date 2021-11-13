import styled from 'styled-components';
import chroma from 'chroma-js';

const ColorIndicator = styled.div`
  width: 12px;
  height: 12px;
  font-size: 12px;
  border-radius: 3px;
  background: ${props => props.pColor};
  box-shadow: ${props => chroma(props.pColor).alpha(0.4)} 0px 3px 8px;
`

export default ColorIndicator;