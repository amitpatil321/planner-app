import { wishGenres, wishStatus, wishTypes } from "../configs/wishlist";

function getCombinedWishConfig() {
  const combinedArr = [...wishGenres, ...wishStatus, ...wishTypes];
  const configObj = {};
  combinedArr.forEach((data) => {
    configObj[data.type] = {
      label: data.label,
      asset: data.asset,
      type: data.type
    };
  });
  return configObj;
}

export function getGroupedWishes(wishlists) {
  const config = getCombinedWishConfig();
  const groupedByGenre = {};
  const groupedByStatus = {};
  const groupedByTags = {};
  let re = {
    genre: [],
    status: [],
    others: []
  };

  wishlists.forEach((data) => {
    /* Operation For Genre */
    if (!groupedByGenre[data.genre]) {
      groupedByGenre[data.genre] = {
        ...config[data.genre],
        list: []
      };
    }
    if (!data.isArchived) {
      groupedByGenre[data.genre].list.push(data);
    }
    /* End of Operation For Genre */

    /* Operation for Status*/
    if (data.isCompleted) {
      if (!groupedByStatus["completed"]) {
        groupedByStatus["completed"] = {
          ...config["completed"],
          list: []
        };
      }
      if (!data.isArchived) {
        groupedByStatus["completed"].list.push(data);
      }
    } else {
      if (!groupedByStatus["incomplete"]) {
        groupedByStatus["incomplete"] = {
          ...config["incomplete"],
          list: []
        };
      }
      if (!data.isArchived) {
        groupedByStatus["incomplete"].list.push(data);
      }
    }
    /* End of Operation for Status*/

    /* Operation for Favorite */
    if (data.isFavorite) {
      if (!groupedByTags["favorite"]) {
        groupedByTags["favorite"] = {
          ...config["favorite"],
          list: []
        };
      }
      if (!data.isArchived) {
        groupedByTags["favorite"].list.push(data);
      }
    }

    /* Operation for Archived */
    if (data.isArchived) {
      if (!groupedByTags["archive"]) {
        groupedByTags["archive"] = {
          ...config["archive"],
          list: []
        };
      }
      groupedByTags["archive"].list.push(data);
    }
  });

  for (let key in groupedByGenre) {
    if (groupedByGenre[key].list.length) re.genre.push(groupedByGenre[key]);
  }
  for (let key in groupedByStatus) {
    if (groupedByStatus[key].list.length) re.status.push(groupedByStatus[key]);
  }
  for (let key in groupedByTags) {
    if (groupedByTags[key].list.length) re.others.push(groupedByTags[key]);
  }
  return re;
}

export function getCategoryInfo(genreType) {
  if (genreType) return wishGenres.find((genre) => genre.type === genreType);
  else return {};
}

export function getDetailedListCount(list = []) {
  let complete = 0;
  list.forEach((data) => {
    if (data.isCompleted) {
      complete++;
    }
  });
  return (
    <>
      {complete}/{list.length}
    </>
  );
}
