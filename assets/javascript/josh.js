$(document).ready(function() {

    var teams = {
        giants: {
            hp: 200,
            attack: 10,
            name: 'NY Giants',
            imgSrc: "https://s3media.247sports.com/Uploads/Assets/626/238/3238626.png",
        },
        cowboys: {
            hp: 150,
            attack: 5,
            name: 'Dallas Cowboys',
            imgSrc: "https://s3media.247sports.com/Uploads/Assets/567/238/3238567.png",
        },
        redskins: {
            hp: 100,
            attack: 10,
            name: 'Washington Redskins',
            imgSrc: "https://s3media.247sports.com/Uploads/Assets/656/238/3238656.png",
        },
        eagles: {
            hp: 100,
            attack: 5,
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
    var myTeamToggle = false;
    var opponentToggle = false;
    var myTeam = 0;
    var myHp = 0;
    var opponentHp = '';
    var teamsBeaten = 0;

    function initializeTeams() {
        // loop through the object for...in
        for (var property in teams) {
            var teamData = teams[property];
            console.log(teams[property])
            $('.teams').append("<div class='team' id='" + property + "'>" + teamData.name + "<img src='" + teamData.imgSrc + "'></div>");

        }
    }

    initializeTeams();

    $('body').on('click', '.team', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('vhgvhghc');
        teamsBoxId = $(this).attr('id')

        if (opponentToggle === false) {
            console.log('opp toggle = false');
            myTeam = teamsBoxId
            $("#myTeam").append($('#' + myTeam));
            myHp = teams[myTeam].hp
            $('#myHpValue').text(teams[myTeam].hp);
            opponentToggle = true
        }
 
        else {
            console.log('opp toggle true')
            if (opponent === '') {
                console.log('opp = empty str')
                opponent = teamsBoxId
                $("#opponent").append($('#' + opponent));
                opponentHp = teams[opponent].hp
                $('#opponentHpValue').text(teams[opponent].hp);
            }
        }
        console.log('myTeam: ', myTeam, 'opponent: ', opponent);


    })


    $('#attackbutton').on('click', function(attack) {
        console.log('attackbutton clicked', myTeam, opponent);

        teams[myTeam].hp = teams[myTeam].hp - teams[opponent].attack;
        // console.log(teams[myTeam].hp);

        teams[opponent].hp -= teams[myTeam].attack;

        teams[myTeam].attack += 5;
        // console.log(teams);
        var myTeamHp = teams[myTeam].hp;
        var opponentTeamHp = teams[opponent].hp;
        if (myTeamHp < 0) {
            myTeamHp = 0;
        }
        if (opponentTeamHp < 0) {
            opponentTeamHp = 0;
        }

        $('#myHpValue').text(myTeamHp);

        $('#opponentHpValue').text(opponentTeamHp);

        if (teams[myTeam].hp <= 0) {
            alert("Game Over");
        }


        if (teams[opponent].hp <= 0) {
            teamsBoxId = '';
            $('#opponent').empty();
            alert("Team Defeated");
            opponentHp = '';
            opponent = '';
            teamsBeaten++;
            if (teamsBeaten < 3) {
                alert("Choose another Team")
            };
        }

        if (teamsBeaten === 3) {
            alert("You Win")
        }

    })

    function reset() {
        teams = {
            giants: {
                hp: 200,
                attack: 10,
                name: 'NY Giants',
                imgSrc: "https://s3media.247sports.com/Uploads/Assets/626/238/3238626.png",
            },
            cowboys: {
                hp: 150,
                attack: 5,
                name: 'Dallas Cowboys',
                imgSrc: "https://s3media.247sports.com/Uploads/Assets/567/238/3238567.png",
            },
            redskins: {
                hp: 100,
                attack: 10,
                name: 'Washington Redskins',
                imgSrc: "https://s3media.247sports.com/Uploads/Assets/656/238/3238656.png",
            },
            eagles: {
                hp: 100,
                attack: 5,
                name: 'Philadelphia Eagles',
                imgSrc: "https://s3media.247sports.com/Uploads/Assets/634/238/3238634.png",
            }
        };
        teamsBoxId = '';
        opponent = '';
        opponentToggle = false;
        myTeam = '';
        teamsBeaten = 0;
        $('.teams').empty();
        $('#myTeam').empty();
        $('#opponent').empty();
        $('#myHpValue').empty();
        $('#opponentHpValue').empty();
        initializeTeams();
    }

    $('#resetbutton').on('click', function() {
        console.log("reset pushed")
        reset();

    })
});
