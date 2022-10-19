let word= prompt("Enter a word.");
let i=0;
strManipulationTFunc(word);// traditional function
function strManipulationTFunc(word)
{

    for(i=0; i<word.length; i++)
    {
    console.log(word[i]);
    }

}
word= prompt("Enter another word");
let strManipulationAFunc = ( word) => {
let i=0;
for(i=0; i<word.length; i++)
    {
    console.log(word[i]);
    }
}
strManipulationAFunc(word);
