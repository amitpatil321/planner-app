import React from 'react'
import { RiSearchLine } from 'react-icons/ri';

import {
  Wrapper,
  SearchIconWrapper,
  SearchBar,
  SearchInput,
} from './style';

const SearchCategory = ({ onSelect }) => {
  const [state, setState] = React.useState('');
  return (
    <Wrapper>
      <SearchBar>
        <SearchIconWrapper>
          <RiSearchLine />
        </SearchIconWrapper>
        <SearchInput
          type='text'
          value={state}
          onChange={(e)=> setState(e.target.value)}
          placeholder='Search Plans'
        />
      </SearchBar>
    </Wrapper>
  )
}

export default SearchCategory;