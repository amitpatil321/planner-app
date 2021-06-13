import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 84px;
  border-radius: 12px;
  margin-bottom: 24px;
  border: 1px solid rgb(0 0 0 / 8%);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 18px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Header = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: #535B62;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
`

export const DetailsSection = styled.div`
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