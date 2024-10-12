const date = new Date();
let hours = date.getHours();
function setup()
{
    createCanvas(400,500);
}
function draw()
{
   circle(200,250,300);
   if(hours<12)
   {
    line(200,250,200+Math.sin(hours*30*(Math.PI/180))*150, 250+Math.cos(hours*30*(Math.PI/180))*150);
   }
   else if(hours>12)
   {
    line(200,250,200+Math.sin((hours-12)*30*(Math.PI/180))*150, 250+Math.cos((hours-12)*30*(Math.PI/180))*150);
   }
}