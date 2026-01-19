let res = document.getElementById('result')

function calculateSum() {
    const values = document.getElementsByClassName('sliders')

    let opp=document.getElementById('operation').value

    var arrValues = [1];

    for (var i=0; i < values.length; i++){
        arrValues[i] = parseFloat(document.getElementById('num' + (i + 1)).value)
    }

    console.log(arrValues)

    let sum = 0

    if(opp=='0'){
        arrValues.forEach(num => {
            sum+= num;
        })
        res.innerHTML = 'Result: ' + sum;
    }

    else if(opp=='1'){
        sum = arrValues[0]
        for (var i=1; i< arrValues.length; i++){
            sum -= arrValues[i]
        }
        res.innerHTML = 'Result: ' + sum;
    }

    else if(opp=='2'){
        sum = arrValues[0]
        for (var i=1; i< arrValues.length; i++){
            sum *= arrValues[i]
        }
        res.innerHTML = 'Result: ' + sum;
    }

    else if(opp=='3'){
        sum = arrValues[0]
        for (var i=1; i< arrValues.length; i++){
            sum /= arrValues[i]
        }
        res.innerHTML = 'Result: ' + sum;
    }

    
}


function createSlider() {
    const values = document.getElementsByClassName('sliders').length
    const SliderButton = document.getElementById('addSliderButton')

    const input = document.createElement('input')
    input.type = 'range'
    input.id = 'num' + (values + 1)
    input.className = 'sliders'
    input.placeholder = 'Enter number '
    input.value = 50

    const inputP = document.createElement('p')
    inputP.id= 'num' + (values + 1) + 'Text'
    inputP.innerHTML= '50'

    input.addEventListener('input', function() {
        const textId = this.id + 'Text'
        document.getElementById(textId).innerHTML = this.value
    })

    document.body.insertBefore(input, SliderButton)
    document.body.insertBefore(inputP, SliderButton)
}


const slidersUpdate = document.getElementsByClassName('sliders')
for (var i = 0; i < slidersUpdate.length; i++){
    slidersUpdate[i].addEventListener('input', function() {
        const textId = this.id + 'Text'
        document.getElementById(textId).innerHTML = this.value
    })
}