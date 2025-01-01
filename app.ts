const input = document.getElementById("inp") as HTMLInputElement
console.log(input);

const button = document.querySelectorAll('button') 
// console.log(button);

button.forEach((elem)=>{
    elem.addEventListener('click',(e)=>{
     const btnValue: string|Number = e?.target?.innerText 
     console.log(btnValue);
    //  input.value += btnValue
     if (btnValue == "=" ) {
        const result = eval(input.value)
        input.value = result
        
     }else if(btnValue == "AC"){
        input.value = ""
     }else if(btnValue == "DEL"){
        input.value = input.value.length -1
     }
     else{
        input.value += btnValue
     }
    })
})