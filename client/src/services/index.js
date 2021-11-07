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

export async function getGroupedPlans(categories) {
  const groupedPlans = {};
  genericCategories.forEach(category => {
    groupedPlans[category.id] = {
      ...category,
      list: []
    }
  });
  mockPlans.forEach((plan) => {
    const planCategoryDetails = categories[plan.categoryId];
    if(!groupedPlans[planCategoryDetails.id]) {
      groupedPlans[planCategoryDetails.id] = {
        ...planCategoryDetails,
        list: []
      };
    }
    groupedPlans[planCategoryDetails.id].list.push(plan);
    groupedPlans['all'].list.push(plan);
    if (plan.isCompleted) {
      groupedPlans['completed'].list.push(plan);
    } else {
      groupedPlans['inprogress'].list.push(plan);
    }
    if (plan.isArchived) {
      groupedPlans['archived'].list.push(plan);
    }
  });
  return groupedPlans;
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
  const groupedPlans = await getGroupedPlans(combinedCategories);
  return {
    categories: combinedCategories,
    plans: groupedPlans,
  }
}