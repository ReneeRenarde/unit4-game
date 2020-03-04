
//PseudoCoding
// upon game start, assign random value to match, assign random values to gems
// when gem pushed, add value to totalScore
// check if game won, add 1 to wins, reset
// check if game lost, add 1 to losses, reset

$(document).ready(function () {

    var randomNum = 0;
    var winTracker = 0;
    var lossTracker = 0;
    var totalScore = 0;

    function startGame() {
        totalScore = 0
        // creates random number to match
        randomNum = Math.floor(Math.random() * 131) + 19;
        $('.gems').each(function () {
            var randomGemNum = Math.floor(Math.random() * 11) + 1;
            $(this).attr('gemNum', randomGemNum);
        })
        console.log('randomNum: ', randomNum);
        $('#randomNum').text(randomNum);
        $('#totalScore').text(totalScore);
        
    }

    startGame()

    // assigns each gem a random value
    $('.gems').on('click', function () {
        $('#result').empty();
        var gemNum = parseInt($(this).attr('gemNum'));
        totalScore = totalScore + gemNum;
        console.log(gemNum);
        console.log(totalScore);
        checkIfGameWon();

    })
    


    function checkIfGameWon() {
        if (totalScore === randomNum) {
            $("#result").text("You Win!");
            winTracker++;
            $("#winTracker").text(winTracker);
            startGame();
        }

        else if (totalScore > randomNum) {
            $("#result").text("You Lost!");
            lossTracker++;
            $("#lossTracker").text(lossTracker);
            startGame();
        } 
        else {
            $('#totalScore').text(totalScore);
        }
    }



})