const dress= () =>{
    const Available_collections=[
        {
            Categories: "men",
            Men_collection: 50 ,

        },
        {
            Categories: "women",
            Women_collection: 100 ,
        },
        { 
            Categories: "kids",
            Kids_collection: 80 ,
        },
    ];
        //map
    
        let Men_collection=[];
        let Women_collection=[];
        let Kids_collection=[];
    
        Available_collections.forEach((ishu) => 
            {
            
                if(ishu.Categories == "men")
                    {
                        Men_collection.push(ishu.Men_collection)
                    }
                if(ishu.Categories == "women")
                    {
                        Women_collection.push(ishu.Women_collection)
                    }
                if(ishu.Categories == "kids")
                    {
                        Kids_collection.push(ishu.Kids_collection)
                    }
            }
        );
    
        console.log("Men collection =>" , Men_collection);
        console.log("Women collection => ", Women_collection);
        console.log("Kids collection =>", Kids_collection);
    
    
    }
    
    dress()