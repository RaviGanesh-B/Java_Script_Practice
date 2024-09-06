//array
//map
// IPL_teams.map((e) => {})------syntax map is a method of array used to continous statement or looping statement
const IPL_teams = [
    {team : "CSk",
     players : 11,
     substiute : 4,
     coach : "Stephen",
     sponser : "snj-999",
     captain : "msdhoni",
    },
    {   team : "MI",
        players : 11,
        substiute : 4,
        coach : "pollard",
        sponser : "snj-999",
        captain : "rohit",
    },
    {   team : "RCB",
        players : 11,
        substiute : 4,
        coach : "Stephen",
        sponser : "snj-999",
        captain : "faf-duplesis",
    },
    {   team : "DC",
        players : 11,
        substiute : 4,
        coach : "Stephen",
        sponser : "snj-999",
        captain : "rishab-pant",
    },
    {   team : "SRH",
        players : 11,
        substiute : 4,
        coach : "Stephen",
        sponser : "snj-999",
        captain : "travis-head",
    },
    {   team : "PK",
        players : 11,
        substiute : 4,
        coach : "Stephen",
        sponser : "snj-999",
        captain : "Axar",
    },
    {   team : "KKR",
        players : 11,
        substiute : 4,
        coach : "Stephen",
        sponser : "snj-999",
        captain : "shreyas",
    },
    {   team : "RR",
        players : 11,
        substiute : 4,
        coach : "Stephen",
        sponser : "snj-999",
        captain : "sanju",
    },
    {   team : "GT",
        players : 11,
        substiute : 4,
        coach : "Stephen",
        sponser : "snj-999",
        captain : "gill",
    },
    {   team : "LSG",
        players : 11,
        substiute : 4,
        coach : "Stephen",
        sponser : "snj-999",
        captain : "klrahul",
    }
];


let teamnames = ["dvc"]

IPL_teams.forEach((ishu) => {
    // console.log(e);
    if(ishu.team != "RCB"){
        teamnames.push(ishu.team)
    }
    else{
        console.log("please Collect Better Player ==> " + ishu.team);
    }

});

console.log("name list",teamnames);


console.log("no of teams",IPL_teams.length);

//for loop is used to continous statement   (variable - defining , condition - increment)


let rg = IPL_teams.filter((goku) => {
    return goku.captain == "msdhoni";
});

console.log(rg);