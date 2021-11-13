import React from 'react'
import { RiSearchLine } from 'react-icons/ri';

import {
  Wrapper,
  SearchIconWrapper,
  SearchBar,
  SearchInput,
} from './style';

const SearchCategory = ({ searchQuery, setSearchQuery }) => {
  return (
    <Wrapper>
      <SearchBar>
        <SearchIconWrapper>
          <RiSearchLine />
        </SearchIconWrapper>
        <SearchInput
          type='text'
          value={searchQuery}
          onChange={(e)=> setSearchQuery(e.target.value)}
          placeholder='Search plans...'
        />
      </SearchBar>
    </Wrapper>
  )
}

export default SearchCategory;