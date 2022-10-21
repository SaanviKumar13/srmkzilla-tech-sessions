const num = [7, 13, 31];
let n=5;
add(num, n)
function add(num, n)
{
    let i=0;
    for(i=0; i<3; i++)
        console.log(num[i]+" ");
 for(i=0; i<3; i++)
      num[i]+=3;
      console.log("\n");
  for(i=0; i<3; i++)
      console.log(num[i]+" ");
}