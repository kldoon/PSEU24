const storeData = (data: any, key: string) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const readData = (key: string): any => {
  const strData = localStorage.getItem(key);
  return strData ? JSON.parse(strData) : null;
};

export {
  readData,
  storeData
}