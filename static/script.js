
  var passwordField = document.querySelector('.password');
  var show = document.querySelector('.show');
  var hide = document.querySelector('.hide');

  show.onclick = function(){
    passwordField.setAttribute("type","text");
    show.style.display = "none";
    hide.style.display = "block";
  }
  hide.onclick = function(){
    passwordField.setAttribute("type","password");
    hide.style.display = "none";
    show.style.display = "block";
  }

  // desabled'''''''''''''''''''''''''''''''''''desabled

show_hide = document.querySelector(".massage")
show_hidee = document.querySelector(".massagee")
under = document.querySelector(".eyeg")



loginForm.addEventListener("input",()=>{
  if (Name.value.length >0 ){
  }

  if(Name.value.length >0){
    show_hide.textContent = "usernames are case-sensitive";
    show_hide.style.color = "rgba(0, 0, 0, 0.54)";
    
  }if(Name.value.length >0){
    show_hide.textContent = "usernames are case-sensitive";
    show_hide.style.color = "rgba(0, 0, 0, 0.54)";
    
  }
else{
    show_hide.textContent = "Required";
    show_hide.style.color = "red";
    
  }

});

// input box 222222222222222
loginForm.addEventListener("input",()=>{
  

  if(password.value.length >1){
    show_hidee.textContent = "Minimum 8 characters";
    show_hidee.style.color = "red";
    under.style.color = "red";
    
  }if(password.value.length >7){
    show_hidee.textContent = "password are case-sensitiv";
    show_hidee.style.color = "rgba(0, 0, 0, 0.54)";
    under.style.color = "#4f6df5";
    
  }
  if(password.value.length <0){
        show_hidee.textContent = "Required";
      show_hidee.style.color = "red";
    
  }

    else{
      // show_hidee.textContent = "Required";
      // show_hidee.style.color = "red";
      }

});







// password FileSystemDirectoryEntry

  loginForm.addEventListener("input", () =>{
  if (Name.value.length >0 && password.value.length >8){
    submit.removeAttribute("disabled");
    
  }

  else{
    submit.setAttribute("disabled", "disabled")
  }
});

   




