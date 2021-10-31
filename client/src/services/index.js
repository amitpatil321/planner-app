import {
  planCategories, planStatus, defaultPlanConfig,
} from "../configs/plan";

function getCombinedPlanConfig() {
  const combinedArr = [...planCategories, ...planStatus];
  const configObj = {};
  combinedArr.forEach((data) => {
    configObj[data.type] = {
      label: data.label,
      color: data.color,
      type: data.type,
      emoji: data.emoji,
    };
  });
  return configObj;
}

export function getGroupedPlans(plans) {
  const config = getCombinedPlanConfig();
  const { allCategory, archivedCategory } = defaultPlanConfig;
  const groupedPlans = {};
  groupedPlans[allCategory.type] = {
    ...allCategory,
    list: [ ...plans ].map((plan) => ({
      ...plan,
      categoryInfo: {
        ...config[plan.categoryIndex]
      }
    })),
  };
  groupedPlans[archivedCategory.type] = {
    ...archivedCategory,
    list: [],
  }
  plans.forEach((data) => {
    if (data.isArchived) {
      groupedPlans[archivedCategory.type].list.push({
        data,
        categoryInfo: {
          ...config[data.categoryIndex]
        }
      });
    } else {
      if (!groupedPlans[data.categoryIndex]) {
        groupedPlans[data.categoryIndex] = {
          ...config[data.categoryIndex],
          list: []
        };
      }
      groupedPlans[data.categoryIndex].list.push({
        data,
        categoryInfo: {
          ...config[data.categoryIndex]
        }
      });
    }
  });
  return groupedPlans;
}

