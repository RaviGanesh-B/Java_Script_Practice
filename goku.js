const goku =async() => {
fetch('https://dummyjson.com/products')
.then(async (e) => {
    let response = await e.json()
    let products = response.products;
    console.log(products);
    
})
.catch((error) => {
    console.log(error);
}
)
}


goku();