const num1 = parseFloat(prompt('Enter first number:'));
const operator=prompt('Enter Choice of operator to use: (+,-,*,/)');
const num2=  parseFloat(prompt('Enter second number:'));

let result = 0;
if(isNaN(num1)  || isNaN (num2)){
    alert('Wrong input entered:');
}else{
    if(operator=='+'){
      result = num1 + num2;
    } 
      else if (operator == '-'){
      result= num1 - num2;
    }else if (operator =='*'){
      result = num1*num2;
    }else if (operator =='/'){
        result = num1/num2;
    }
      alert(num1 + ' '+ operator + ' '+num2 + ' =' + result)
}
  

