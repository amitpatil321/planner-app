import React from 'react';
import { RiSearchLine } from 'react-icons/ri';

import {defaultColors, emojiList, tabOptions} from '../../../configs/category';

import Button from '../buttons/generic';

import {
  Container,
  TabContainer,
  Tab,
  SearchPanel,
  SearchIconContainer,
  SearchInput,
  EmojiAndColorOptions,
  ActionPanel,
  EmojiSlot,
  ColorSlot
} from './style'

const ControlPanel = ({
  isNewCategory,
  clickHandle = () => {}
}) => {
  const [selectedTab, toggleTabs] = React.useState(tabOptions[0]);

  const handleTabChange = (e, data) => {
    e.preventDefault();
    toggleTabs(data);
  }

  return (
      <Container>
        <TabContainer>
        {
          tabOptions.map((data) => (
            <Tab
              key={data.key}
              onClick={e => handleTabChange(e, data)}
              isSelected={selectedTab.key === data.key}
            >
            {data.label}
          </Tab>
          ))
        }
        </TabContainer>
        {selectedTab.key === 'emoji' && (
          <SearchPanel>
            <SearchIconContainer>
              <RiSearchLine />
            </SearchIconContainer>
            <SearchInput
              placeholder="Search"
              type="text"
              />
          </SearchPanel>
        )}
        <EmojiAndColorOptions>
          {selectedTab.key === 'color' ?
            (
              <>
                {
                  defaultColors.map((color, idx) => (
                    <ColorSlot
                      color={color}
                      key={idx}
                    />
                  ))
                }
              </>
            ):
            (
              <>
                {
                  emojiList.map((emoji, idx) => (
                    <EmojiSlot
                      key={idx}
                    >
                      {emoji}
                    </EmojiSlot>
                  ))
                }
              </>
            )
          }
        </EmojiAndColorOptions>
        <ActionPanel>
          <Button
            type='secondary-active'
            size='sm'
          >
            {isNewCategory ? 'Save' : 'Update'}
        </Button>
        <Button
          type='secondary-inactive'
          size='sm'
          >
          Delete
        </Button>
        </ActionPanel>
      </Container>
  )
}

export default ControlPanel;