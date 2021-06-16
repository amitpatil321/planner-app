import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 12px;
  margin-bottom: 24px;
  border: 1px solid rgb(0 0 0 / 10%);
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

export const Header = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  color: #535B62;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CompletionDetails = styled.div`
  ${props => props.isCompleted ?
  `
  background-color: #61bd4f;
  border-radius: 3px;
  color: #ffff;
  padding: 4px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  ` : `
  padding: 8px 0;
  display: flex;
  align-items: center;
  color: #535B62;
  `}
`

export const SubText = styled.div`
  font-size: 12px;
  color: inherit;
`

export const CategoryBox = styled.div`
  position: relative;
  font-size: 10px;
  padding: 4px 10px;
  border-radius: 12px 4px 4px 12px;
  color: #535B62;
  border: 1px solid rgb(0 0 0 / 10%);
  margin-left: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`