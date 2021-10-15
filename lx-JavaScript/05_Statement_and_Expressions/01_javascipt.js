let choice = 1;
let tempFahrenheit = 104;
const THIRTYTWO = 32;
const TEMP = 1.8;
const NORMAL_CELSIUS = 37;
let result1 = tempFahrenheit - THIRTYTWO;
let result2 = result1 / TEMP;

switch (choice) {
    case 1:
        document.write("Your body temperature in Celsius is: " + result2 + "<br>");
        result2 > NORMAL_CELSIUS ? document.write("You have fever, take rest!")
            : document.write("You are absolutely OK!! Enjoy");
        break;
    case 2:
        document.write("No, I don't want to check whether i have fever or not<br>");
        break;
    default:
        document.write("Sorry wrong choice provided<br>");
}
