function setup()
{
    createCanvas(400,500);
}
function draw()
{
    const updatedDate= new Date();
    let updatedHours = updatedDate.getHours();
    let updatedMinutes = updatedDate.getMinutes();
    let updatedSeconds = updatedDate.getSeconds();
    stroke('black');
   circle(200,250,350);
   // Drawing hours
   text('12',190,90);
   text('3',360,255);
   text('6',200,420);
   text('9',35,255);
   strokeWeight(5);
   if(updatedHours<12)
   {
    line(200,250,200+Math.sin(updatedHours*30*(Math.PI/180))*150, 250-Math.cos(updatedHours*30*(Math.PI/180))*150);
   }
   else if(updatedHours>12)
   {
    line(200,250,200+Math.sin((updatedHours-12)*30*(Math.PI/180))*150, 250-Math.cos((updatedHours-12)*30*(Math.PI/180))*150);
   }
   //Drawing minutes
   strokeWeight(3);
    line(200,250,200+Math.sin(updatedMinutes*6*(Math.PI/180))*150, 250-Math.cos(updatedMinutes*6*(Math.PI/180))*150);
   //Drawing seconds
   strokeWeight(1);
    line(200,250,200+Math.sin(updatedSeconds*6*(Math.PI/180))*150, 250-Math.cos(updatedSeconds*6*(Math.PI/180))*150);
}