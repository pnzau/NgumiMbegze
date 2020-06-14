export const addToDefault = (val, conditionClass, baseClass = '') => {
  return val ? `${conditionClass} ${baseClass}` : baseClass;
};
