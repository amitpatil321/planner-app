import styled from 'styled-components';

import { styleTokens } from '../../../styles/variable';

const EmojiContainer = styled.div`
  width: 12px;
  height: 12px;
  font-size: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-shadow: ${styleTokens.lightDarkColor} 0px 2px 4px;
  margin-top: 2px;
`

export default EmojiContainer;