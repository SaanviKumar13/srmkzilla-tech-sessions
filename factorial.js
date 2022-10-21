
let num=prompt("Enter a number.");
factorial(num)
function factorial(num)
{
let i=num;
let fact=1;
if(num==0)
    fact=1;
for(i=num; i>=1; i--)
    {
        fact*=i;
    }
console.log("Factorial ="+ fact);
}
export{num, factorial};
