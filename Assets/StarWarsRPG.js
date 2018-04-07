var charSelected = false;
var yourChar = false;
var enemySelected = false;
var yourEnemy;
var readyToFight = false;
var bodyCount = 0;

var yourHealth;
var enemyHealth;

var enemyAttack;
var maceCountAttack = 10;
var ackbarCountAttack = 20;
var vaderCountAttack = 15;
var maulCountAttack = 12;

var yourAttack = 0;
var yourBaseAttack;
var maceBaseAttack = 20;
var ackbarBaseAttack = 25;
var vaderBaseAttack = 22;
var maulBaseAttack = 15;

$(document).ready(function(){
    $(".stats_card").on("click", function(){
        if(charSelected == fales) {
            $('.commented').remove()
            $("#mace").appendTo("#enemy_list").addClass("enemy_stats_card");
            $("#ackbar").appendTo("#enemy_list").addClass("enemy_stats_card");
            $("#vader").appendTo("#enemy_list").addClass("enemy_stats_card");
            $("#maul").appendTo("#enemy_list").addClass("enemy_stats_card");

            $(this).removeClass("enemy_stats_card").addClass("your_stats_card").appendTo("#char_list");

            yourChar = this.id;
            yourHealth = $(this).attr('value');

if(yourChar == 'mace'){
    yourBaseAttack = maceBaseAttack;
}

if(yourChar == 'ackbar'){
    yourBaseAttack = ackbarBaseAttack;
}

if(yourChar == 'vader'){
    yourBaseAttack = vaderBaseAttack;
}

if(yourChar == 'maul'){
    yourBaseAttack = maulBaseAttack;
}

charSelected = true;
return;
        }
    }

)});

$(".stats_card").on("click", function(){
    if(this.id != yourChar && enemySelected == false){

        $(this).appendTo("#defend_list").removeClass('enemy_stats_card').addClass('defender_stats_card');

        yourEnemy = this.id;
        enemyHealth = $(this).attr('value');

        $('.commented').remove();

        // Change global variable and return
        enemySelected = true;
        readyToAttack = true;
        return;	
    }
        
});

if(readyToAttack){

    // Test you and defender are alive
    if(yourHealth > 0 && enemyHealth > 0){

        // Remove any old Battle commentary
        $('.commented').remove();


     
        yourAttack += yourBaseAttack;


        if(yourEnemy == 'mace'){
            enemyAttack = maceCountAttack;
        }
        if(yourEnemy == 'ackbar'){
            enemyAttack = ackbarCountAttack;
        }
        if(yourEnemy == 'vader'){
            enemyAttack = vaderCountAttack;
        }
        if(yourEnemy == 'maul'){
            enemyAttack = maulCountAttack
        }}; 

        // Battle Logic
				yourHealth = yourHealth - enemyAttack;
				enemyHealth = enemyHealth - yourAttack;


	

				// Change Enemy Stats on screen
				if(yourEnemy == 'mace'){
					$('#mace_hp').html(enemyHealth);
					enemyName = "Mace Windu";
				}
				if(yourEnemy == 'ackbar'){
					$('#ackbar_hp').html(enemyHealth);
					enemyName = "Admiral Ackbar";
				}
				if(yourEnemy == 'vader'){
					$('#vader_hp').html(enemyHealth);
					enemyName = "Darth Vader";
				}
				if(yourEnemy == 'maul'){
					$('#maul_hp').html(enemyHealth);
					enemyName = "Darth Maul";
				}


				// Change Your Stats on screen
				if(yourChar == 'mace'){
					$('mace_hp').html(yourHealth);
				}
				if(yourChar == 'ackbar'){
					$('#ackbar_hp').html(yourHealth);
				}
				if(yourChar == 'vader'){
					$('#vader_hp').html(yourHealth);
				}
				if(yourChar == 'maul'){
					$('#maul_hp').html(yourHealth);
				}


			
				$('#battle_comments').append("<p class = 'commented'>You attacked " + "<span class = inline_bold>" + enemyName + "</span>" + " for " + "<span class = inline_bold>" + yourAttack + "</span>" + " damage.</p>");
				$('#battle_comments').append("<p class = 'commented'>" + enemyName + " attacked <span class = inline_bold>you</span> back for " + "<span class = inline_bold>" + enemyAttack + "</span>" + " damage.</p>");

			}

			if(yourHealth <= 0){

				
				$('.commented').remove();

				// Display loser message
				$('#battle_comments').append("<p>I find your lack of faith distrubing... Game Over!</p>");
				$('#battle_comments').append("<button id = 'restart'>Try Again!</button>");

					
					$("#restart").on("click", function(){
						location.reload();
					});

				
				readyToAttack = false;
				return;	

			}

			
			if(enemyHealth <= 0){

				
				bodyCount += 1;


				$('.commented').remove();


				
				if(yourEnemy == 'mace'){
					$('#obi').addClass('hide_dead_enemy');
					enemyName = "Mace Windu";
				}
				if(yourEnemy == 'ackbar'){
					$('#luke').addClass('hide_dead_enemy');
					enemyName = "Admiral Ackbar";
				}
				if(yourEnemy == 'vader'){
					$('#sidi').addClass('hide_dead_enemy');
					enemyName = "Darth Vader";
				}
				if(yourEnemy == 'maul'){
					$('#maul').addClass('hide_dead_enemy');
					enemyName = "Darth Maul";
				}


				if(bodyCount < 3){

				
					$('#battle_comments').append("<p class = 'commented'>You have defeated " + "<span class = inline_bold>" + enemyName + "</span>" + ", choose another opponent!</p>");

					readyToAttack = false;
					enemySelected = false;
					return;
				}
				else{

				
					$('.commented').remove();
					
					$('#battle_comments').append("<p class = 'commented'>You have defeated everyone! You Win!</p>");
					$('#battle_comments').append("<button id = 'replay'>Play Again?</button>");

						
						$("#replay").on("click", function(){
							location.reload();
						});

					readyToAttack = false;
					return;	
				}

			}

	
		
		else if (charSelected == false){
			
			$('.commented').remove();
			$('#replay').remove();

			
			$('#battle_comments').append("<p class = commented>No player selected! Please click on your character!</p>");
        }
        
		else if (enemySelected == false){
			
			$('.commented').remove();
			$('#replay').remove();

			// Display idiot message
			$('#battle_comments').append("<p class = commented>No enemy here! Please click on your opponent!</p>");
		}

