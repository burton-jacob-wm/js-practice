function game(){
    var target_number = Math.random() * 100;
    target_number = Math.floor(target_number);

    var game_running = true;
    var guess_count = 0;

    while(game_running == true){
        var user_input_text = prompt("What is your guess? \n\n [1-100]");
        var user_input = parseInt(user_input_text);
        guess_count++;

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
        }
        else if (user_input > target_number){
            alert("Guess lower.");
        }

    }
}