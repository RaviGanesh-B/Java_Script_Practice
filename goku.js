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



const vegeta = async () => {
    fetch('https://dummyjson.com/products')
    .then(async (e) => {
        let response = await e.json();
        let products = response.products;
        console.log(products)
    }   
    )
    .catch(
        (error) => {
           console.log(error)
        }
    )
}

vegeta();

const shop = async () => {
    fetch("https://dummyjson.com/products")
    .then(async (e) => {
        let response = await e.json();
        let products = response.products;
        console.log(products)
    })
    .catch((error) => {
        console.log(error)
    })
    
}

shop();

const top = async() => {
    fetch("https://dummyjson.com/products")
    .then(async (e) => {
        let response = await e.json();
        let products = response.products;
        console.log(products)
    })
    .catch((error) => {
        console.log(error);
    })
}

top();

const rgshop = async () => {
    fetch("https://dummyjson.com/products")
    .then(async (e) => {
        let response = await e.json();
        let products = response.products;
        console.log(products);
    })
    .catch((error) => {
        console.log(error)
    })
}

rgshop();

const fshop = async() => {
    fetch('https://dummyjson.com/products')
    .then(async (e) => {
        let response = await e.json();
        let products = response.products;
        console.log(products);
    }
    )
    .catch((error)=>{
        console.log(error);
    })
}

fshop();
