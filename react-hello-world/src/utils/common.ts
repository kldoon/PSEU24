const getCatKey = (title: string) => {
  return `counter-${title.toLowerCase().replaceAll(' ', '-')}`;
}

export {
  getCatKey
}