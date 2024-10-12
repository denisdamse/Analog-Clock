const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
function setup()
{
    createCanvas(400,500);
}
function draw()
{
    stroke('black')
   circle(200,250,300);
   // Drawing hours
   if(hours<12)
   {
    line(200,250,200+Math.sin(hours*30*(Math.PI/180))*150, 250+Math.cos(hours*30*(Math.PI/180))*150);
   }
   else if(hours>12)
   {
    line(200,250,200+Math.sin((hours-12)*30*(Math.PI/180))*150, 250+Math.cos((hours-12)*30*(Math.PI/180))*150);
   }
   //Drawing minutes
   stroke('red');
   {
    line(200,250,200+Math.sin(minutes*6*(Math.PI/180))*150, 250+Math.cos(minutes*6*(Math.PI/180))*150);
   }
}