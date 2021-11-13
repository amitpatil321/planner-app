import React from 'react';

import {
  Wrapper,
  Tabs,
  TabIndicator,
} from './style';

const RouteTab = ({
  optionCount,
  tabs = [],
  handleClick = () => {},
  selectedTabId,
}) => {
  return(
    <Wrapper>
      {
        tabs
        .reverse()
        .map((tab) => (
          <Tabs
            key={tab.id}
            onClick={() => handleClick(tab.id)}
            isSelected={selectedTabId === tab.id}
          >
            <div>{tab.label}</div>
            <TabIndicator
              isSelected={selectedTabId === tab.id}
            />
          </Tabs>
        ))
      }
    </Wrapper>
  )
}

export default RouteTab;