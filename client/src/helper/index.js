import { wishlistGenre, wishlistStatus, wishlistTag } from "../configs/wishlist";

function getCombinedWishlistConfig() {
  const combinedArr = [
    ...wishlistGenre,
    ...wishlistStatus,
    ...wishlistTag
  ]
  const configObj = {};
  combinedArr.forEach((data) => {
    configObj[data.type] = {
      label: data.label,
      asset: data.asset,
      type: data.type
    }
  });
  return configObj;
}

export function getGroupedWishlist(wishlists) {
  const config = getCombinedWishlistConfig();
  const groupedByGenre = {};
  const groupedByStatus = {};
  const groupedByTags = {};
  let re = {
    genre: [],
    status: [],
    others: [],
  };

  wishlists.forEach((data) => {
    /* Operation For Genre */
    if (!groupedByGenre[data.genre]) {
      groupedByGenre[data.genre] = {
        title: config[data.genre].label,
        asset: config[data.genre].asset,
        type: config[data.genre].type,
        list: []
      };
    }
    groupedByGenre[data.genre].list.push(data);

    /* Operation for Status*/
    if (data.isCompleted) {
      if(!groupedByStatus['completed']) {
        groupedByStatus['completed'] = {
          title: config['completed'].label,
          asset: config['completed'].asset,
          type: config['completed'].type,
          list: []
        }
      }
      groupedByStatus['completed'].list.push(data);
    } else {
      if(!groupedByStatus['incomplete']) {
        groupedByStatus['incomplete'] = {
          title: config['incomplete'].label,
          asset: config['incomplete'].asset,
          type: config['incomplete'].type,
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
          type: config['favorite'].type,
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
          type: config['archive'].type,
          list: []
        }
      }
      groupedByTags['archive'].list.push(data);
    }
  });

  for (let key in groupedByGenre) {
    re.genre.push(groupedByGenre[key]);
  }
  for (let key in groupedByStatus) {
    re.status.push(groupedByStatus[key]);
  }
  for (let key in groupedByTags) {
    re.others.push(groupedByTags[key]);
  }
  return re;
}

export function getCategoryInfo(genreType) {
  return wishlistGenre.find((genre) => genre.type === genreType).label
}