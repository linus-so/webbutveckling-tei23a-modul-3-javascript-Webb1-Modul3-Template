var finalNum = Math.floor(Math.random() * 100)
var score = 0
var oldNum = 0
var slider = document.getElementById('valueSlider')

slider.addEventListener('input', function(){
    document.getElementById('selectedNumber').innerHTML=slider.value
})

function updateHint(){
    if (parseInt(slider.value) < finalNum){
        document.getElementById('hint').innerHTML = 'Number is higher'
    }
    else if (parseInt(slider.value) > finalNum){
        document.getElementById('hint').innerHTML = 'Number is lower'
    }
    else{
        document.getElementById('hint').innerHTML = 'Number is Correct'
        return true
    }
}

function guessNumber(){
    if (updateHint() && finalNum != oldNum){

        score += 1
        oldNum = finalNum
                   
        document.getElementById('score').innerHTML = 'Score: ' + score
        var sliderMax = parseInt(slider.getAttribute('max'))
        slider.setAttribute('max', sliderMax + 100 )
        newNumber()
    }

}

function newNumber(){
    finalNum = Math.floor(Math.random() * 100)
    console.log('Button: '+ finalNum)
    updateHint()
}
    
