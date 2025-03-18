const storeData = (data: any, key: string) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const readData = (key: string): any => {
  return JSON.parse(localStorage.getItem(key) || '');
};

export {
  readData,
  storeData
}