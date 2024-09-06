const Streaming_site= () =>{
    const Available_collections=[
        {
            Genre: "horror",
            Horror_collection: 1313,
            Top_rated: "Evil dead rise",
            most_recommended: "conjuring",
        },
        {
            Genre: "Action",
            Action_collection: 900,
            Top_rated: "Fast and furious",
            most_recommended: "kung fu hustle",
        },
        {
            Genre: "romcom",
            Romcom_collection: 878,
            Top_rated: "titanic",
            most_recommended: "12 rounds",
        },
        {
            Genre: "parody",
            Parody_collection: 878,
            Top_rated: "trip to rome",
            most_recommended: "english_movies",
        },
        {
            Genre: "anime",
            Anime_collection: 878,
            Top_rated: "your_name",
            most_recommended: "weathering_with_you",
        },

    ];
        //map
    
        let Horror_collection=[];
        let Anime_collection=[];
        let Action_collection=[];
    
        Available_collections.map((e) => 
            {
            
                if(e.Genre == "horror")
                    {
                        Horror_collection.push(e.Top_rated,e.most_recommended)
                    }
                if(e.Genre == "anime")
                    {
                        Anime_collection.push(e.Top_rated,e.most_recommended)
                    }
                if(e.Genre == "Action")
                    {
                        Action_collection.push(e.Top_rated,e.most_recommended)
                    }
            }
        );
    
        console.log("horror collection =>" ,Horror_collection);
        console.log("Anime collection => ", Anime_collection);
        console.log("Action collection =>", Action_collection)
    
    
    }
    
    Streaming_site()