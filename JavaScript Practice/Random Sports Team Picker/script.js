'use strict';

const americanFootballTeams = ["Arizona Cardinals", "Atlanta Falcons", "Baltimore Ravens", "Buffalo Bills", "Carolina Panthers", "Chicago Bears",
    "Cincinnati Bengals", "Cleveland Browns", "Dallas Cowboys", "Denver Broncos", "Detroit Lions", "Green Bay Packers", "Houston Texans",
    "Indianapolis Colts", "Jacksonville Jaguars", "Kansas City Chiefs", "Las Vegas Raiders", "Los Angeles Chargers", "Los Angeles Rams",
    "Miami Dolphins", "Minnesota Vikings", "New England Patriots", "New Orleans Saints", "New York Giants", "New York Jets", "Philadelphia Eagles",
    "Pittsburgh Steelers", "San Francisco 49ers", "Seattle Seahawks", "Tampa Bay Buccaneers", "Tennessee Titans", "Washington Football Team"
];

const majorLeagueBaseballTeams = ["Arizona Diamondbacks", "Atlanta Braves", "Baltimore Orioles", "Boston Red Sox", "Chicago White Sox",
    "Chicago Cubs", "Cincinnati Reds", "Cleveland Indians", "Colorado Rockies", "Detroit Tigers", "Houston Astros", "Kansas City Royals",
    "Los Angeles Angels", "Los Angeles Dodgers", "Miami Marlins", "Milwaukee Brewers", "Minnesota Twins", "New York Yankees", "New York Mets",
    "Oakland Athletics", "Philadelphia Phillies", "Pittsburgh Pirates", "San Diego Padres", "San Francisco Giants", "Seattle Mariners",
    "St. Louis Cardinals", "Tampa Bay Rays", "Texas Rangers", "Toronto Blue Jays", "Washington Nationals"];

function callRandomNFLTeam() {
    let randomTeamSelected = document.getElementById("NFLTeamSelected").innerHTML = americanFootballTeams[Math.floor(Math.random() * americanFootballTeams.length)];
    console.log(randomTeamSelected);
    //Calling function that adds a counter each time team is called.
    addCounterToTeams(randomTeamSelected);
    return randomTeamSelected;
}

function addCounterToTeams(randomTeamSelected) {
    let teamCalled = randomTeamSelected;
    console.log(`This team was the team called => ${teamCalled}`);
}

function callRandomMLBTeam() {
    let randomTeamSelected = document.getElementById("MLBTeamSelected").innerHTML = majorLeagueBaseballTeams[Math.floor(Math.random() * majorLeagueBaseballTeams.length)];
    console.log(randomTeamSelected);
    //Calling function that adds a counter each time team is called.
    addCounterToTeams(randomTeamSelected);
    return randomTeamSelected;
}

