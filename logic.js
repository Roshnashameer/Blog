function register(){
    uid=userid.value
    uname=username.value
    
    psw=password.value
    psw1=cpassword.value
     if(psw==psw1){
         a1.innerHTML=""
         //object
         user={uid,uname,psw}
         //console.log(user);
         if(uid in localStorage){
             window.location='login.html'
             alert("User alredy registered")
             
         }
         else{
           localStorage.setItem(uid,JSON.stringify(user))
           window.location='login.html'
           alert("Account created successfully")
           
         }
     }
     else{
         a1.innerHTML='<p class="text-danger"> Password doesnt match</p>'
     }
 
 }
 function login(){
     uid=userid.value
     psw=password.value
     if(uid in localStorage){
         userObj=JSON.parse(localStorage.getItem(uid))
         // console.log(userObj.psw);
         // console.log(psw);
 
         if(userObj.psw == psw){
             
             window.location='home.html'
             alert("Login success")
 
         }
         else{
             alert('Incorrect password')
         }
         
 
     }
     else{
         alert("Invalid account no")
     }
 
 }
 