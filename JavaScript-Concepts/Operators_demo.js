// Post increament operator also cld as unary operator.
function addition(a)
{
    // return a++; //a= a+1
    return ++a; //a+1 =a
}
console.log("After post increament value = " +addition(7));











// Addition
function addNumbers(a,b)
{
    return a+b;
}
console.log("Addition =" +addNumbers(7,3));

// Substraction
function substractNumbers(a,b)
{
    return a-b;
}
console.log("Substraction =" +substractNumbers(6,3));

// Multiplication Operator
function multiplyNumbers(a,b)
{
    return a*b;
}
console.log("Multiplicaton ="+multiplyNumbers(7,3));

// Division Operator
function divideNumbers(a,b)
{
    return a/b;
}
console.log("Division = "+divideNumbers(10, 2));

// Modulus Operator
function findRemainder(a,b)
{
    return a%b;
}
console.log("Modulus = "+findRemainder(7,2));

// Comparison operator : Check Equality
function isEqual(a,b)
{
    return a===b;
}
console.log("Equality check a equals to b = "+isEqual(2,2));

// Check Greater Number
function isGreater(a,b)
{
    return a>b;
}
console.log("Greater Number a is greater than b= "+isGreater(7,4));

// Check Smaller Number
function isSmaller(a,b)
{
    return a<b;
}
console.log("Smaller Number a is less than b = "+isSmaller(2,9));

// Check Positive and negative number
function checkNumber(num)
{
    if(num>0){
        return "Positive";
    }else if(num<0){
        return "Negative";
    }else{
        return "Zero";
    }
}
console.log(checkNumber(3));
console.log(checkNumber(-2));
console.log(checkNumber(0));

// Voting Eligibility
function canVote(age)
{
    if(age>18){
        return "Its True.. You can Vote!"
    }else{
        return "Sorry! You are under 18."
    }
}
console.log(canVote(19));