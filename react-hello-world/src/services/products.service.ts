// async function name(params: type) { }

// const fetchProducts = async () => {
const fetchProducts = ():Promise<Store.IProduct[]> => {

  // try {
  //   const res = await fetch('http://localhost:3000/products/');
  //   console.log(res);
  // } catch (error) {
  //   console.log("error: ----");
  //   console.log(error);
  // }

  return fetch('http://localhost:3000/products/').then(async res => {
    const products = await res.json();
    // .then(products => {
    //   console.log("products----");
    //   console.log(products);
    // });
    return products;
  }).catch(error => {
    console.log("error: ----");
    console.log(error);
    return [];
  }).finally(() => {
  });
}

export {
  fetchProducts
}