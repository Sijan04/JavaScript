
var photos =["jj.png","sijan.png","img2.png"];
var imgTag=document.querySelector("img");   //image tag k find korte hocceh image boshanor jonno queryselector "img diye"

var count=0;
function next()
{
  
  count ++;
  if(count >=photos.length)
  {
    count=0;
    imgTag.src=photos[count];
  }
  else
  {
    imgTag.src =photos[count];
  }

}

function prev()
{
    count --;
    if(count <0)
    {
      count=photos.length-1;
      imgTag.src=photos[count];
    }
    else
    {
      imgTag.src =photos[count];
    }
  

}