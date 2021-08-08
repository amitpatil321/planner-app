import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  min-height: 170px;
  border-radius: 8px;
  padding: 20px 24px;
  width: 80%;
`;
export const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > p {
    padding: 8px 0;
    text-align: center;
  }
`;
export const ActionPanel = styled.div`
  display: flex;
  justify-content: space-evenly;
`;