$(document).ready(function(){

	var teams = {
		giants:{
			hp: 200,
			attack: 10,
			name: 'NY Giants',
			imgSrc: "https://s3media.247sports.com/Uploads/Assets/626/238/3238626.png",
		},
		cowboys:{
			hp:150,
			attack:5,
			name: 'Dallas Cowboys',
			imgSrc: "https://s3media.247sports.com/Uploads/Assets/567/238/3238567.png",
		},
		redskins:{
			hp:100,
			attack:10,
			name: 'Washington Redskins',
			imgSrc: "https://s3media.247sports.com/Uploads/Assets/656/238/3238656.png",
		},
		eagles:{
			hp:100,
			attack:5,
			name: 'Philadelphia Eagles',
			imgSrc: "https://s3media.247sports.com/Uploads/Assets/634/238/3238634.png",
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

	function initializeTeams () {
		// loop through the object for...in
		for (var property in teams) {
			var teamData = teams[property];
			console.log(teamData)
			$('.teams').append("<div id='"+teamData.name+"'><img src='"+teamDataimgSrc+"'></div>");
		}
	}
		
		initializeTeams();


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
	  else{
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
			opponent = '';
	 
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
	})	


	
});
