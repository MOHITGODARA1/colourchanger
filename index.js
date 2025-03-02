const hexvalue=document.querySelector(".hex");
const change=document.body;
const btn=document.querySelector("button");
btn.addEventListener("click",()=>{
   colourgenrator();
})
const colourgenrator=()=>{
   const letter="0123456789ABCDEF";
   let first="#";
   for(let i=0; i<6; i++){
      first+=letter[Math.floor(Math.random()*16)];
   }
   hexvalue.innerHTML=first;
   change.style.backgroundColor=first;
}