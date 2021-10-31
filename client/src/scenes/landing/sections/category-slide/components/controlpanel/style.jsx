import styled from "styled-components";
import { styleTokens } from '../../../../../../styles/variable';

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 14px;
  padding-top: 0;
`
export const TabContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0 10px 0;
`
export const Tab = styled.div`
  height: 18px;
  padding: 10px;
  background-color: ${props => props.isSelected ? '#EBECF0' : 'transparent'};
  color: ${props => props.isSelected ? styleTokens.darkColor : '#939498'};
  border-radius: 4px;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
`
export const SearchPanel = styled.div`
  width: 100%;
  padding: 4px 8px;
  background-color: #EEF1F3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 12px;
`
export const SearchIconContainer = styled.div`
  width: 14px;
  height: 14px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 4px;
`
export const SearchInput = styled.input`
  width: calc(100% - 12px);
  background-color: inherit;
  font-size: 12px;
  padding: 4px;
`

export const EmojiAndColorOptions = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  max-height: 105px;
  overflow: auto;
  width: 100%;
`

export const ColorSlot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 4px;
  border: 2px solid ${props => props.color};
  margin: 0 6px 6px 0;
`
export const EmojiSlot = styled.div`
  width: 18px;
  font-size: 14px;
  margin: 0 6px;
`

export const ActionPanel = styled.div`
  display: flex;
  align-self: flex-end;
  width: 72%;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
`