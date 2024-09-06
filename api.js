const goku = async() => {
    fetch("https://dummyjson.com/products")
    .then(async (e) => {
        let response = await e.json()
        let products = response.products;
        console.log(products);
    })
    .catch((err) => {
        console.log(err);
    })
};

goku();

