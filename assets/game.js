
//PseudoCoding
// upon game start, assign random value to match, assign random values to gems
// when gem pushed, add value to totalScore
// check if game won, add 1 to wins, reset
// check if game lost, add 1 to losses, reset

$(document).ready(function(){

    var randomNum = 0;
    var winTracker = 0;
    var lossTracker = 0;
    var totalScore = 0;

    function startGame(){
        totalScore = 0
        randomNum = Math.floor(Math.random() *131) + 19
        $('.gems').each(function(){
            var randomGemNum = Math.floor(Math.random() *11) + 1
            $(this).attr('gemNum', randomGemNum)
        })
        console.log('randomNum: ', randomNum )
        $('#randomNum').text(randomNum)
        $('#totalScore').text(totalScore)
    }

    startGame()

    $('.gems').on('click', function(){
        var gemNum = parseInt($(this).attr('gemNum'))
        console.log(gemNum)
    })

    function calculateGems(){

    }

    function checkIfGameWon(){
        if (totalScore === randomNum) {
            $("userScore").append ("You Win!");
            winTracker ++;
        }

    function checkIfGameLost(){
        if  (totalScore > randomNum) {
            $("userScore").append ("You Lost!");
            lossTracker ++;
        }
    }   





}


})