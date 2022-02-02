/*
* Excercise 1
*
*/



/*
* Then write a function that changes the text and the color inside the div
*
*/
const colorBlock = document.getElementById('color-block');
const originalColor = colorBlock.style['background-color'];
colorBlock.onclick = changeColor;

function changeColor() {
    //Write a condition determine what color it should be changed to
    if (colorBlock.style['background-color'] != originalColor) {
        //change the background color using JS
        colorBlock.style['background-color'] = originalColor;
        //Change the text of the color using the span id color-name
        document.getElementById('color-name').innerHTML = '#F08080';
    }
    else {
        //change the background color using JS
        colorBlock.style['background-color'] = 'blue';
        //Change the text of the color using the span id color-name
        document.getElementById('color-name').innerHTML = 'blue';

    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

convertButton = document.getElementById('convertbtn');
convertButton.addEventListener('click', (e) => {
    // console.log(document.getElementById('f-input').value);
    convertTemp(document.getElementById('f-input').value);
})

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(fInput) {
    //Calculate the temperature here
    cOutput = (fInput - 32) * 5 / 9;
    document.getElementById('c-output').innerHTML = cOutput;
    
    //Send the calculated temperature to HTML

}


