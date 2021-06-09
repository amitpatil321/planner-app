import { wishlistCategory, wishlistStatus, wishlistTag } from "../configs/wishlist";

function getCombinedWishlistConfig() {
  const combinedArr = [
    ...wishlistCategory,
    ...wishlistStatus,
    ...wishlistTag
  ]
  const configObj = {};
  combinedArr.forEach((data) => {
    configObj[data.type] = {
      label: data.label,
      asset: data.asset
    }
  });
  return configObj;
}

export function getGroupedWishlist(wishlists) {
  const config = getCombinedWishlistConfig();
  const groupedByCategory = {};
  const groupedByStatus = {};
  const groupedByTags = {};
  let re = {
    grouped: [],
    status: [],
    others: [],
  };

  wishlists.forEach((data) => {
    /* Operation For Category */
    if (!groupedByCategory[data.category]) {
      groupedByCategory[data.category] = {
        title: config[data.category].label,
        asset: config[data.category].asset,
        list: []
      };
    }
    groupedByCategory[data.category].list.push(data);

    /* Operation for Status*/
    if (data.isCompleted) {
      if(!groupedByStatus['completed']) {
        groupedByStatus['completed'] = {
          title: config['completed'].label,
          asset: config['completed'].asset,
          list: []
        }
      }
      groupedByStatus['completed'].list.push(data);
    } else {
      if(!groupedByStatus['incomplete']) {
        groupedByStatus['incomplete'] = {
          title: config['incomplete'].label,
          asset: config['incomplete'].asset,
          list: []
        }
      }
      groupedByStatus['incomplete'].list.push(data);
    }

    /* Operation for Favorite */
    if (data.isFavorite) {
      if(!groupedByTags['favorite']) {
        groupedByTags['favorite'] = {
          title: config['favorite'].label,
          asset: config['favorite'].asset,
          list: []
        }
      }
      groupedByTags['favorite'].list.push(data);
    }

    /* Operation for Archived */
    if (data.isArchived) {
      if(!groupedByTags['archive']) {
        groupedByTags['archive'] = {
          title: config['archive'].label,
          asset: config['archive'].asset,
          list: []
        }
      }
      groupedByTags['archive'].list.push(data);
    }
  });

  for (let key in groupedByCategory) {
    re.grouped.push(groupedByCategory[key]);
  }
  for (let key in groupedByStatus) {
    re.status.push(groupedByStatus[key]);
  }
  for (let key in groupedByTags) {
    re.others.push(groupedByTags[key]);
  }
  return re;
}
