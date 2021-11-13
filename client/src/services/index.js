import mockCategories from '../__mocks__/category.json';
import mockPlans from '../__mocks__/data.json';

import { genericCategories, colorList, emojiList } from '../configs/category';

async function getCombinedCategories() {
  const combinedCategories = [...mockCategories, ...genericCategories];
  const categoryObj = {};
  combinedCategories.forEach((data) => {
    categoryObj[data.id] = {
      label: data.label,
      color: colorList.find(color => color.id === data.colorId).color,
      emoji: (emojiList.find(emoji => emoji.id === data.emojiId) || {}).emoji || null,
      id: data.id,
    };
  });
  return categoryObj;
}

async function getPlans() {
  return mockPlans;
}

export function getFilteredPlans(
  plans,
  selectedCategoryId,
  selectedTabId,
  searchQuery
) {
  let ret = [];
  if (selectedCategoryId === genericCategories[0].id) {
    ret = [...plans];
  } else if (selectedCategoryId === genericCategories[1].id) {
    ret = plans.filter(data => data.isArchived);
  } else {
    ret = plans.filter(data => data.categoryId === selectedCategoryId);
  }

  if (selectedTabId === genericCategories[2].id)
    ret = ret.filter(data => data.isImportant);
  if (selectedTabId === genericCategories[3].id)
    ret = ret.filter(data => data.isCompleted);
  if (selectedTabId === genericCategories[4].id)
    ret = ret.filter(data => !data.isCompleted);

  return ret
  .filter(data =>
    data.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
}

export function getProgressDetails(plans = []) {
  if(plans.length) {
    const completeCount = (plans.filter(data => data.isCompleted)).length;
    return {
      completeCount,
      totalCount: plans.length,
    }
  }
  return {}
}

export async function fetchAppData() {
  // mock api call
  const combinedCategories = await getCombinedCategories();
  const plans = await getPlans();
  return {
    categories: combinedCategories,
    plans: plans,
  }
}

export function getPlansCategoryDetails() {

}