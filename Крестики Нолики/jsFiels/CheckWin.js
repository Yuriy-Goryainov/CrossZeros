function checkWin () {

	//hor check

	if (cell1 == cell2 && cell2 == cell3 && cell1 !== 'none') {
	    if (cell1 == 1) {
	        alert ('Cross Win!!!');
	    }
	    if (cell1 == 0) {
	        alert ('Zeros win');
	    }
	    Game = 'End';
	}
	
	if (cell4 == cell5 && cell5 == cell6 && cell4 !== 'none') {
	    if (cell4 == 1) {
	        alert ('Cross Win!!!');
	    }
	    if (cell4 == 0) {
	        alert ('Zeros win');
	    }
	    Game = 'End';
	}
	
	if (cell7 == cell8 && cell8 == cell9 && cell7 !== 'none') {
	    if (cell7 == 1) {
	        alert ('Cross Win!!!');
	    }
	    if (cell7 == 0) {
	        alert ('Zeros win');
	    }
	    Game = 'End';
	}
	
	//ver check

	if (cell1 == cell4 && cell4 == cell7 && cell1 !== 'none') {
	    if (cell1 == 1) {
	        alert ('Cross Win!!!');
	    }
	    if (cell1 == 0) {
	        alert ('Zeros win');
	    }
	    Game = 'End';
	}
	
	if (cell2 == cell5 && cell5 == cell8 && cell2 !== 'none') {
	    if (cell2 == 1) {
	        alert ('Cross Win!!!');
	    }
	    if (cell2 == 0) {
	        alert ('Zeros win');
	    }
	    Game = 'End';
	}
	
	if (cell3 == cell6 && cell6 == cell9 && cell3 !== 'none') {
	    if (cell1 == 3) {
	        alert ('Cross Win!!!');
	    }
	    if (cell1 == 3) {
	        alert ('Zeros win');
	    }
	    Game = 'End';
	}
	
	//diagonal check

	if (cell1 == cell5 && cell5 == cell9 && cell1 !== 'none') {
	    if (cell1 == 1) {
	        alert ('Cross Win!!!');
	    }
	    if (cell1 == 0) {
	        alert ('Zeros win');
	    }
	    Game = 'End';
	}

	if (cell3 == cell5 && cell5 == cell7 && cell3 !== 'none') {
	    if (cell3 == 1) {
	        alert ('Cross Win!!!');
	    }
	    if (cell3 == 0) {
	        alert ('Zeros win');
	    }
	    Game = 'End';
	}

	//draw check

	if (FreeCells == 0 && Game != 'End') {
		alert ('draw');
		FreeCells == 9;
		bg (bgColor);
		 cell1 = cell2 = cell3 = cell4 = cell5 = cell6 = cell7 = cell8 = cell9 = 'none';
	}
}

