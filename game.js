function game(){
    var target_number = Math.random() * 100;
    target_number = Math.floor(target_number);

    var game_running = true;
    var guess_count = 0;

    var max_number = 100;
    var min_number = 1;

    var difference = 0;

    function changeMinMax(){

        //Adjust Min and Max
        difference = Math.abs(target_number - user_input);
        lowest_max = max_number;
        max_number = target_number + (difference + Math.floor(Math.random()*10));

        if (max_number > lowest_max){
            max_number = lowest_max;
        }
        highest_min = min_number;
        min_number = target_number - (difference + Math.floor(Math.random()*10));
        if (min_number < highest_min){
            min_number = highest_min;
        }
    }

    //Game
    while(game_running == true){
        var user_input_text = prompt("What is your guess? \n\n ["+ min_number +"-"+ max_number +"]");
        var user_input = parseInt(user_input_text);
        guess_count++;
        if (isNaN(user_input)) {
            alert("Not a Number.");
        }
        else{
            if (user_input == target_number){
                alert("You win.");
                if (guess_count == 1){
                    alert("It took you " + guess_count + " guess.");
                }
                else{
                    alert("It took you " + guess_count + " guesses.");
                }
                game_running = false;
            }
            else if (user_input < target_number){
                alert("Guess higher.");

                changeMinMax();
            }
            else if (user_input > target_number){
                alert("Guess lower.");

                changeMinMax();
            }
        }
    }
}