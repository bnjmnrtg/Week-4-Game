$(document).ready(function(){

var teams = {
	giants:{
		hp: 200,
		attack: 10,

	},
	cowboys:{
		hp:150,
		attack:5,
	},
	redskins:{
		hp:100,
		attack:10,
	},
	eagles:{
		hp:100,
		attack:5,
	}
};

//J Query
//Add Some Audio
// var audio = new Audio('https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90')
//This will play: audio.play()

var teamsBoxId = '';
var opponent = '';
var opponentToggle = false;
var myTeam = ''; 
var myHp = '';
var opponentHp = '';
var defeatedTeams = 0;




// console.log(teams['giants'].hp);
// console.log(giantsHp);

$('.team').on('click', function(e) {
  teamsBoxId = e.target.id;
  console.log(teams[teamsBoxId].attack)
  

  if (opponentToggle === false) {
  	myTeam = teamsBoxId
  	console.log(myTeam)
  	console.log('#'+myTeam)
  	$("#myTeam").append($('#'+myTeam).parent());
   	opponentToggle = true
  } 
  else {
  	if (opponent === '') {
  		opponent = teamsBoxId
  		$("#opponent").append($('#'+opponent).parent());
  	}
  }
  console.log('myTeam: ', myTeam, 'opponent: ', opponent);
})






$('#attackbutton').on('click', function (attack) {
	console.log('attackbutton clicked',myTeam, opponent);
	
	teams[myTeam].hp = teams[myTeam].hp - teams[opponent].attack;
	console.log(teams[myTeam].hp);
	
	teams[opponent].hp -= teams[myTeam].attack;
	
	teams[myTeam].attack += 5; 
	console.log(teams);

	$('#myHpValue').text(teams[myTeam].hp);

	$('#opponentHpValue').text(teams[opponent].hp);

	if (teams[myTeam].hp <= 0) {
		alert("Game Over");
	}
	

	if (teams[opponent].hp <=0) {
		teamsBoxId = '';
		alert("Team Defeated");
		alert("Pick Another Team");
		console.log(opponent)
		$('#'+opponent).parent().remove()
		opponent = '';
		defeatedTeams++
	}

	if (defeatedTeams === 3) {
		console.log('need to reset')
		alert("You Win")
	}

})

function reset(){
	var teamsBoxId = '';
	var opponent = '';
	var opponentToggle = false;
	var myTeam = ''; 
	var myHp = '';
	var opponentHp = '';

}

	
$('#resetbutton').on('click', function() {
	reset();
	console.log("reset pushed")
	


});
});
