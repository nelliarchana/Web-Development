
var randomnum1 = Math.floor(Math.random()*6+1);
var randomimage1 = "dice"+randomnum1+".png";
var image1src = 'images/'+randomimage1;
var a = document.querySelectorAll("img")[0].src=image1src;


var randomnum2 = Math.floor(Math.random()*6+1);
var randomimage2 = "dice"+randomnum2+'.png';
var image2src = 'images/'+randomimage2;
document.querySelectorAll('img')[1].src=image2src;

if(randomnum1>randomnum2){
  document.querySelector('h1').innerHTML ="🚩Player1 Wins!";
}
else if(randomnum1<randomnum2){
    document.querySelector('h1').innerHTML ="Player2 Wins!🚩";
}
else{
    document.querySelector('h1').innerHTML ="Draw";
}
