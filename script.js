const changeColor = ()=>
{
  const body =  document.querySelector('body');
  body.style.backgroundColor = getRandomHexColor();
}
// function getRandomHexColor() {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
// }
function getRandomHexColor() {
   const hex = '0123456789ABCDE';
   let color = '#';
   for(let i = 0 ; i  < 6  ; i++)
   {
        color+=hex[Math.floor(Math.random()*16)];
   }
 return color;
}



const start = document.querySelector('.start');
let eventStart ;
start.addEventListener('click',()=>{
  if(!eventStart)
  {
    eventStart =  setInterval(changeColor,1000);
  }
});

const stop = document.querySelector('.stop');
stop.addEventListener('click', ()=>
{
  clearInterval(eventStart); // stop the active interval 
  eventStart = null; // to propery restart as !eventStart has an id stored;
})


// Why Preventing Multiple Intervals is Important
// When you use setInterval, it creates a unique timer that repeatedly executes a function at a specified interval. Each call to setInterval returns a unique interval ID, which can be used to stop that particular timer with clearInterval.

// If a user clicks the "Start" button multiple times without any restriction:

// Multiple setInterval timers are created.
// Each timer runs independently, and all of them execute the changeColor function every second.
// This causes unintended behavior, such as the background color changing much faster than expected (e.g., multiple colors changing per second).