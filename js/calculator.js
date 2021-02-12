const  equal = document.querySelector(".form button");

const result = document.getElementById('result');

result.textContent = "null";


const calculate = (n1, n2, o) => {
    num1 = Number(n1);
    num2 = Number(n2);
    o(num1,num2);
};

const calculateHandler = () => {
    const num1 = document.getElementById("num1").value;
    const num2 = document.querySelector("#num2").value;
    const op = document.querySelector('.form input[type=text]').value;
    console.log(op);
    console.log(num1);
    console.log(num2);
    
    // if (op === "+") {
    //     calculate(num1,num2, (n1,n2) => {
    //         const r = n1 + n2;
    //         result.textContent = r;
    //     });
    // } else if (op === "*") {
    //      calculate(num1,num2, (n1,n2) => {
    //         const r = n1 * n2;
    //         result.textContent = r;
    //     });
    // }
   switch(op){
       case "+":
           calculate(num1,num2,(num1,num2) => {
               const r = num1 + num2;
               result.textContent = r;
           });
           break;
       case "-":
           calculate(num1,num2,(num1,num2) => {
               const r = num1 - num2;
               result.textContent = r;
           });
           break;
       case "*":
           calculate(num1,num2,(num1,num2) => {
               const r = num1 * num2;
               result.textContent = r;
           });
           break;
       case "/":
           calculate(num1,num2,(num1,num2) => {
               const r = num1 / num2;
               result.textContent = r;
           });
           break;
       case "%":
           calculate(num1,num2,(num1,num2) => {
               const r = num1 % num2;
               result.textContent = r;
           });
           break;
       default:
           result.textContent = "This is not a operator";
           break; 
   }
};

equal.addEventListener('click', calculateHandler);
