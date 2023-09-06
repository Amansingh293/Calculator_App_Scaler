const plusBtn = document.querySelector(".btnPlus");
const minusBtn = document.querySelector(".btnMinus");
const multiBtn = document.querySelector(".btnMulti");
const divideBtn = document.querySelector(".btnDivide");
const clearBtn = document.querySelector(".btnClear");
const powBtn = document.querySelector(".btnPow");
const equalToBtn = document.querySelector(".btnEqual");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const btn0 = document.querySelector(".btn0");
const btnLog2 = document.querySelector(".btnLog2");
const btnLog5 = document.querySelector(".btnLog5");
const btnLog10 = document.querySelector(".btnLog10");
const screen = document.querySelector(".screen");

const Parent = document.querySelector(".mainContainer");

let stack = [];

let digit = "";

parent.addEventListener("click", function (e) {
  const clicked = e.target;
  if (clicked.className === "screen" || clicked.className == "mainContainer") {
    return;
  }

  clicked.classList.add("btnHover");

  setTimeout(() => {
    clicked.classList.remove("btnHover");
  }, 200);

//   console.log(clicked);

  if (clicked.innerText === "Clear") {
    stack = [];
    digit = '';
    screen.innerText = '';
    return;
  }
    let check = false;

  calculation(clicked.innerText , check);

 
});

function calculation(value , check) {
    
  if ( (value === "+" || value === "-" || value === "*" || value === "/") ) {
    
    let b = +stack.pop();
    let optr = +stack.pop();
    let a = +stack.pop();

    let ans = applyOperator(optr , a , b);
    console.log(a);
    console.log(b);
    console.log(optr);
    stack.push(+ans);
    stack.push(value);
    check = false;
    screen.innerText = ans;
  } 
  else if( (value === "+" || value === "-" || value === "*" || value === "/") & check === false ) {
    // console.log(digit);
    stack.push(+digit);
    stack.push(value);
    check = true;
    digit = '';
  }
  else{
    digit += value;
    screen.innerText = digit;
  }
  console.log(value);
  console.log(stack);
}

function applyOperator(operator, value1, value2) {
  if (operator === "*") {
    return +value1 * +value2;
  }
  if (operator === "/") {
    if (value2 === "0") {
      alert("Cannot Divide By Zero");
    } else {
      return +value1 / +value2;
    }
  }
  if (operator === "+") {
    return +value1 + +value2;
  }
  if (operator === "-") {
    return +value1 - +value2;
  }

  return;
}
