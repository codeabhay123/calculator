let input = document.getElementById('InputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);  // Corrected Array.forms to Array.from

arr.forEach(button => {
    button.addEventListener('click', (e) => {  // Fixed addEventListner to addEventListener
        if (e.target.innerHTML == '=') {
            string = eval(string);  // Evaluate the string when '=' is pressed
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;

        }
        else if (e.target.innerHTML == 'del') {
            string = string.substring(0, string.length - 1)
            input.value = string;
        }
        else {
            string += e.target.innerHTML;  // Concatenate clicked button's content to the string
        }
        input.value = string;  // Update the input box with the new string
    });
});
