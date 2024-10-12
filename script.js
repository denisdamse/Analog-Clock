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
    stroke('black')
   circle(200,250,300);
   // Drawing hours
   if(updatedHours<12)
   {
    line(200,250,200+Math.sin(updatedHours*30*(Math.PI/180))*150, 250-Math.cos(updatedHours*30*(Math.PI/180))*150);
   }
   else if(updatedHours>12)
   {
    line(200,250,200+Math.sin((updatedHours-12)*30*(Math.PI/180))*150, 250-Math.cos((updatedHours-12)*30*(Math.PI/180))*150);
   }
   //Drawing minutes
   stroke('red');
   {
    line(200,250,200+Math.sin(updatedMinutes*6*(Math.PI/180))*150, 250-Math.cos(updatedMinutes*6*(Math.PI/180))*150);
   }
   //Drawing seconds
   stroke('blue');
   {
    line(200,250,200+Math.sin(updatedSeconds*6*(Math.PI/180))*150, 250-Math.cos(updatedSeconds*6*(Math.PI/180))*150);
   }
}