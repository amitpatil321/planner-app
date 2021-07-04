import React from 'react';
import { withRouter } from "react-router";
import queryString from 'query-string';
import { useSelector } from 'react-redux';

import { isEmptyObject } from '../../utils';

import WishDetailsView from './components/wishdetails';

const Wish = (props) => {
  const wishes = useSelector(state => state.wishes.all);
  const [currentWish, updateCurrentWish] = React.useState(null);
  const { history, location: { search } } = props;
  const { id } = queryString.parse(search);

  React.useEffect(() => {
    const newWish = wishes
      .find(data => Number(data.id) === Number(id));
    updateCurrentWish(newWish);
  }, [id, wishes]);

  return (
    <>
      {currentWish === null ? (
        <>Loading Data</>
      ): (
        <>
          {
            !isEmptyObject(currentWish) ?
            (
              <WishDetailsView wish={currentWish} />
            ) : (<>No Data Found</>)
          }
        </>
      )
      }
    </>
  )
};

export default withRouter(Wish);
