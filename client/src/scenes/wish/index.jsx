import React from 'react';
import { withRouter } from "react-router";
import queryString from 'query-string';

import { getWishlistById } from '../../helper';
import { isEmptyObject } from '../../utils';

import WishDetailsView from './components/wishdetails';

const Wish = (props) => {
  const [wishlist, updateWishlist] = React.useState(null);
  const { history, location: { search } } = props;
  const { id } = queryString.parse(search);

  React.useEffect(()=>{
    const newWishlist = getWishlistById(id);
    updateWishlist(newWishlist);
  }, [id]);

  return (
    <>
      {wishlist === null ? (
        <>Loading Data</>
      ): (
        <>
          {
            !isEmptyObject(wishlist) ?
            (
              <WishDetailsView wishlist={wishlist} />
            ) : (<>No Data Found</>)
          }
        </>
      )
      }
    </>
  )
};

export default withRouter(Wish);
