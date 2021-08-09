var images=[
    "download.png",
    "download(1).png",
    "download(2).png",
    "download(3).png",
    "download(4).png",
    "download(5).png",
  ]
  var i = 0;
  function nextimage(){
   if(i==6)
     {
       i=0;
     }
    document.getElementById("Page_turn").src=images[i];
    i++;
  }