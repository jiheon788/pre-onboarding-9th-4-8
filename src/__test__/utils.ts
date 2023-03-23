export const isElementTD = (array: HTMLElement[]) => {
  return array.every((item) => item.tagName === 'TD');
};
