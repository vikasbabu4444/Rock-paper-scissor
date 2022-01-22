function computerPlay() 
{
    let arr = ["Rock" , "Paper" , "Scissor"];
    var randomItem = arr[Math.floor(Math.random()*arr.length)];
    return randomItem ;
}

function playRound(playerSection , computerSection)
{
    if(playerSection == computerSection)
    return ("Draw !")
    else
    {
        if(computerSection=="Paper")
        {
            return ("you win !");
        }
        else{
            return ("u lost !")
        }
    }
}


let a = 0  , b = 0 ;
for(i=1;i<=5;i++) {
   let playerSection = prompt("for Rock select 1 ;\n for paper select 2 :\n for scissors select 3")
   if(playerSection == '1')
   playerSection="Rock";
   else if(playerSection=='2')
   playerSection="Paper"
   else if(playerSection=='3')
   playerSection="Scissor"
   else
   alert("u choose other than the options")
   const computerSection = computerPlay();
   const s =  playRound(playerSection , computerSection);
   if(s=="you win !"){
   a++
   alert("you won !")
   }
   else if(s != 'Draw !')
  {
      b++;
      alert("DRaw !")
  }
  else
  alert("computer wins !")
}
console.log(a)
console.log(b)
if(a>b)
alert("you win !");
else if(b>a)
alert("Computer wins ! ");
else
alert("draw !")
