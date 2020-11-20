var makePolitician = function (name, partyColor) {

	var politician = {};
		politician.name = name;
		politician.electionResults = null;
		politician.totalVotes = 0;
		politician.partyColor = partyColor;


	politician.totalVotes = function ()
		{
			this.totalVotes = 0;
			for (var i = 0; i < this.electionResults.length; i++) {
				this.totalVotes = this.totalVotes + this.electionResults[i];
			}
		}

		return politician;
}

var biden = makePolitician ("Joe Biden", [9, 40, 158]);
var trump = makePolitician ("Donald Trump", [178, 32, 15]);

biden.electionResults = [0, 0, 11, 0, 55, 9, 7, 3, 3, 0, 16, 4, 0, 20, 0, 0, 0, 0, 0, 3, 10, 11, 16, 10, 0, 0, 0, 1, 6, 4, 14, 5, 29, 0, 0, 0, 0, 7, 20, 4, 0, 0, 0, 0, 0, 3, 13, 12, 0, 10, 0];

trump.electionResults = [9, 3, 0, 6, 0, 0, 0, 0, 0, 29, 0, 0, 4, 0, 11, 6, 6, 8, 8, 1, 0, 0, 0, 0, 6, 10, 3, 4, 0, 0, 0, 0, 0, 15, 3, 18, 7, 0, 0, 0, 9, 3, 11, 38, 6, 0, 0, 0, 5, 0, 3];


var stateResults = document.getElementById("stateResults");
var header = stateResults.children[0];
var stateName = header.children[0].children[0];
var stateAbbrev = header.children[0].children[1];
var body = stateResults.children[1];
var name1 = body.children[0].children[0];
var results1 = body.children[0].children[1];
var name2 = body.children[1].children[0];
var results2 = body.children[1].children[1];
var winnerName = body.children[2].children[1];

var setStateResults = function (state) {

		theStates[state].winner = null;

		if (biden.electionResults[state] > trump.electionResults[state]) {
			theStates[state].winner = biden;
		} else if (trump.electionResults[state] > biden.electionResults[state]) {
			theStates[state].winner = trump;
		} 

		var stateWinner = theStates[state].winner;
		if (stateWinner !== null) {
			theStates[state].rgbColor = stateWinner.partyColor;
		} else {
			theStates[state].rgbColor = [69, 69, 69];
		};

		stateName.innerText = theStates[state].nameFull;
		stateAbbrev.innerText = theStates[state].nameAbbrev;
		name1.innerText = biden.name;
		name2.innerText = trump.name;
		results1.innerText = biden.electionResults[state];
		results2.innerText = trump.electionResults[state];

		if (biden.electionResults[state] > trump.electionResults[state]) {
			winnerName.innerText = biden.name;
		} else if (trump.electionResults[state] > biden.electionResults[state]) {
			winnerName.innerText = trump.name;
		} else {
			winnerName.innerText = "DRAW";
		}

	};



biden.totalVotes();
trump.totalVotes();

var winner = "???";


if (biden.totalVotes > trump.totalVotes) {
		winner = biden.name;
	} else if (trump.totalVotes > biden.totalVotes) 	{
		winner = trump.name;
	}else {
			winner = "DRAW";
		};
	
var countryResults = document.getElementById("countryResults");
countryResults.children[0].children[0].children[0].innerText = "Biden";
countryResults.children[0].children[0].children[1].innerText = biden.totalVotes;
countryResults.children[0].children[0].children[2].innerText = "Trump";
countryResults.children[0].children[0].children[3].innerText = trump.totalVotes;
countryResults.children[0].children[0].children[5].innerText = winner;



console.log("Biden:" + biden.totalVotes);
console.log("Trump:" + trump.totalVotes);
console.log("The winner is: " + winner + "!");

