var input = document.getElementById("inp");
console.log(input);
var button = document.querySelectorAll('button');
// console.log(button);
button.forEach(function (elem) {
    elem.addEventListener('click', function (e) {
        var btnValue = e.target.innerText;
        console.log(btnValue);
        //  input.value += btnValue
        if (btnValue == "=") {
            var result = eval(input.value);
            input.value = result;
        }
        else if (btnValue == "AC") {
            input.value = "";
        }
        else if (btnValue == "DEL") {
            input.value = input.value.slice(0,input.value.length -1)
        }
        else {
            input.value += btnValue;
        }
    });
});
