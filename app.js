const but = document.getElementById('but');
const counter = document.getElementById('count');

let num = 0
// Imma attach a click listener now to the button .. but wait .. I gotta have a variable that counts .. there we go ..

but.addEventListener('click', ()=>{
   num++;
   counter.innerText = toString(num); //Dont know if this is right or not bruh ... 
})

// I cant even view the site .. I gotta find a way to view it somehow .. 