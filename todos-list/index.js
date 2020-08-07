let form =  document.querySelector("form");
//console.log(form);

form.addEventListener("submit",(event)=>{
    event.preventDefault()
  //console.log(event.target)
  let input = document.querySelector(".input");
  let value = input.value;
 //console.log(value);  
 input.value="";     
})
