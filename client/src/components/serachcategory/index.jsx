import React from 'react'

import { wishGenres } from '../../configs/wish';
import {
  IconWrapper,
  SearchIcon
} from '../../styles/icon'

import {
  Wrapper,
  SearchBar,
  SearchInput,
  Container,
  Row,
  Image,
  Detail
} from './style';

const SearchCategory = ({onSelect}) => {
  const [state, setState] = React.useState('');
  return (
    <Wrapper>
      <SearchBar>
        <IconWrapper
          iconSize={20}
        >
          <SearchIcon />
        </IconWrapper>
        <SearchInput
          type='text'
          value={state}
          onChange={(e)=> setState(e.target.value)}
          placeholder='Search'
        />
      </SearchBar>
      <Container>
        {
          wishGenres
          .filter((genre) =>
          genre.label.toLowerCase().includes(state.toLowerCase())
          )
          .map((data, index)=>{
            return (
            <Row
              key={index}
              onClick={() => onSelect(data)}
            >
              <Image asset={data.asset} />
              <Detail>
                {data.label}
              </Detail>
            </Row>
            )
          })
        }
      </Container>
    </Wrapper>
  )
}

export default SearchCategory;