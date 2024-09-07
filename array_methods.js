
const anime = [
    {
        series_name : " dragon ball ",
        episode_counts : 656,
        genre : "action",
        main_character : "goku"
    },
    {
        series_name : " naruto ",
        episode_counts : 720,
        genre : "action",
        main_character : "naruto"
    },
    {
        series_name : " bleach ",
        episode_counts : 360,
        genre : "action",
        main_character : "ichigo"
    },
    {
        series_name : " death note ",
        episode_counts : 36,
        genre : "psycho triller",
        main_character : "kira"
    },

]



let main_character =[];

const characterMap = {
    goku: "Dragon Ball",
    naruto: "Naruto",
    ichigo: "Bleach",
    kira: "Death Note"
};

anime.forEach((e) => {
    const series = characterMap[e.main_character];

    if(series) {
        console.log(series);
        main_character.push(e.main_character);
    }
    console.log(e);
});
anime.forEach((e) => {
    const series = characterMap[e.main_character];

    if (series) {
        console.log(series);
        main_character.push(e.main_character);
    }

    console.log(e);
});
anime.map((e)=> {
    if(e.main_character == "goku"){
        console.log("Dragon_Ball")
        main_character.push(e.main_character)
    }
    
    if(e.main_character == "naruto"){
        console.log("Naruto")
        main_character.push(e.main_character)
    }
    
    if(e.main_character == "ichigo"){
        console.log("Ble")
        main_character.push(e.main_character)
    }
    
    if(e.main_character == "kira"){
        console.log("Death note")
        main_character.push(e.main_character)
    }
    


    console.log(e);
})

let episode_counts = [];


anime.map((e)=>{
    if(e.episode_counts >= "100"){
        console.log("long series===>");
        episode_counts.push( e.episode_counts)
        }
        else{
          console.log("short series ===>" + e.episode_counts);
        }
    
console.log(e);
});
let genre =[];

anime.map((e)=> {
    if(e.genre != "action"){
        console.log("thriller")
        genre.push(e.genre);
    }
    else{
        console.log("action anime====>" + e.genre) 
    }

console.log(e)
})


console.log (anime);

map


anime.map((e) => {
  console.log(e);
});