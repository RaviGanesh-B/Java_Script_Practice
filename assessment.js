const goku = async() =>{
    fetch("https://dummyjson.com/products")
    .then(async (e) =>{
        let response = await e.json()
        let products = response.products;       
        console.log(products);
        let market=[];
        let shop=[];
        for(let index = 0; index < products.length; index++)
            {
                let element = products[index];
                if(element.price >500){
                    market.push(element)
                    
                }
                else{
                    shop.push(element)
                    
                }
                // console.log(market);
                // console.log(shop);
            
            }
            let update = market.map(e =>{
                if(e.id==12) {
                      return{...e,brand:"wood",price:450,title:"speaker" };
                
                }
                return e;
               
            })
            // console.log(update[1]);

            delete update[1].description;

            console.log(update[1]);

            
    })
    .catch((err) =>{
        console.log(err);
    })
    
}

goku();