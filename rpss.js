function user (usersChoice) {
// <!--	debugger  -->

	var Choices =  ['rock','scissors','paper','lizard','spock']
  
  var i = Math.floor(Math.random() * 5) 
	var mine = Choices[i] 
	



	var pairs = {
  scissors: { paper: 'cut', lizard: 'decapitate'},
  paper:    { rock: 'covers', spock: 'disproves'},
  lizard:   { spock: 'poisons', paper: 'eats' },
  rock:     { scissors: 'smashes', lizard: 'crushes' },
  spock:    { rock: 'vaporizes', scissors: 'melts' }
  }

  if (mine == usersChoice) {legend = 'Draw, we both chose ' + mine}
  else { 
	  var verb = pairs[usersChoice][mine]

	  if (verb) { legend = 'You win, your ' + usersChoice  + ' ' + verb                     + ' my '   + mine}
	  else      { legend = 'I win, my '     + mine         + ' ' + pairs[mine][usersChoice] + ' your ' + usersChoice}
	}
  document.out.outcome.value = legend;

//  --------------------------- or ----------------------------------------

	var combinations = {}
	var I = 'I win, my '
	var You = 'You win, your '

	combinations['rock scissors']   = I    + 'rock smashes your scissors'
	combinations['rock lizard']     = I    + 'rock crushes your lizard'
	combinations['rock paper']      = You  + 'paper covers my rock' 
	combinations['rock spock']      = You  + 'spock vapourises my rock'

	combinations['scissors rock']   = You  + 'rock smashes my scissors'
	combinations['scissors lizard'] = I    + 'scissors decapitate your lizard'
	combinations['scissors paper']  = I    + 'scissors cut your paper'
	combinations['scissors spock']  = You  + 'spock melts my scissors'

	combinations['lizard rock']     = You  + 'rock crushes my lizard'
	combinations['lizard scissors'] = You  + 'scissors decapitate my lizard'
	combinations['lizard paper']    = I    + 'lizard eats your paper'  
	combinations['lizard spock']    = I    + 'lizard poisons your spock'
	
	combinations['paper rock']      = I    + 'paper covers your rock'
	combinations['paper scissors']  = You  + 'scissors cut my paper'
	combinations['paper lizard']    = You  + 'lizard eats my paper'
	combinations['paper spock']     = I    + 'paper disproves your spock'
	
	combinations['spock rock']      = I    + 'spock vapourises your rock'
	combinations['spock scissors']  = I    + 'spock melts your scissors'
	combinations['spock lizard']    = You  + 'lizard poisons my spock' 
	combinations['spock paper']     = You  + 'paper disproves my spock'

	if (mine == usersChoice) {legend = 'Draw, we both chose ' + mine}
  else { legend = combinations[mine + ' ' + usersChoice] }
	
	document.out.outcome2.value = legend;


//  --------------------------- or ----------------------------------------

	var combinations = {}
	
	combinations['rock scissors']   = 'smashes'
	combinations['rock lizard']     = 'crushes'
	combinations['paper rock']      = 'covers' 
	combinations['spock rock']      = 'vapourises'

	combinations['scissors lizard'] = 'decapitate'
	combinations['scissors paper']  = 'cut'
	combinations['spock scissors']  = 'melts'

	combinations['lizard paper']    = 'eats'  
	combinations['lizard spock']    = 'poisons'
	
	combinations['paper spock']     = 'disproves'
	

	if (mine == usersChoice) 
		{legend = 'Draw, we both chose ' + mine}
  else {
  	verb = combinations[mine + ' ' + usersChoice]
  	if (verb) { legend = 'I win, my '     + mine        + ' ' + verb                                   + ' your ' + usersChoice	}
  	else      { legend = 'You win, your ' + usersChoice + ' ' + combinations[usersChoice + ' ' + mine] + ' my '   + mine
  	}
	}
	document.out.outcome3.value = legend;
		
}