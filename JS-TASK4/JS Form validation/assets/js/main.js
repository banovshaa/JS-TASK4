let button=document.querySelector('#butt')
let name=document.querySelector('.name')
let item=document.querySelectorAll('.item')
let right=document.querySelectorAll('#right')
let email=document.querySelector('.email')
let password=document.querySelector('.password')
let msg=document.querySelectorAll('#msg')
let isUsernameValid= function(){
   let nameLength=name.value.trim().length
   let usernameReg=/^[A-Z][a-z0-9_-]{5,19}$/
   if (nameLength===0) {
      msg[0].innerHTML='User Name cannot be blank'
      msg[0].style.color='red'
      right[0].className='fa-solid fa-circle-exclamation'
      right[0].style.color='red'
   }
   else  if (!usernameReg.test(name.value.trim())){
      msg[0].innerHTML='User Name must at least 6 symbols and begin with uppercase'
      msg[0].style.color='red'
      right[0].className='fa-solid fa-circle-exclamation'
      right[0].style.color='red'
   }else{
      msg[0].innerHTML='User Name is valid'
      msg[0].style.color='rgb(5, 88, 5)'
      right[0].className='fa-solid fa-circle-check'
      right[0].style.color='rgb(5, 88, 5)'
   }
}
let isEmailValid=function(){
   let emailLength=email.value.trim().length
   let emailReg=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
   if (emailLength===0) {
      msg[1].innerHTML='Email Adrress cannot be blank'
      msg[1].style.color='red'
      right[1].className='fa-solid fa-circle-exclamation'
      right[1].style.color='red'
   }else if(!emailReg.test(email.value.trim())){
      msg[1].innerHTML='Enter a valid Email Address'
      msg[1].style.color='red'
      right[1].className='fa-solid fa-circle-exclamation'
      right[1].style.color='red'
   }else{
      msg[1].innerHTML='Email Address is valid'
      msg[1].style.color='rgb(5, 88, 5)'
      right[1].className='fa-solid fa-circle-check'
      right[1].style.color='rgb(5, 88, 5)'
   }
}
let isPasswordValid=function(){
   let passwordLength=password.value.trim().length
   let passwordReg=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,10}$/
   if(passwordLength===0) {
      msg[2].innerHTML='Password cannot be blank'
      msg[2].style.color='red'
      right[2].className='fa-solid fa-circle-exclamation'
      right[2].style.color='red'
   }else if (!passwordReg.test(password.value.trim())){
      msg[2].innerHTML='Password must be min 6, max 10 characters,<br>at least 1 uppercase, 1 lowercase , 1 number and a special character'
      right[2].className='fa-solid fa-circle-exclamation'
      right[2].style.color='red'
   }else{
      msg[2].innerHTML='Password is valid'
      msg[2].style.color='rgb(5, 88, 5)'
      right[2].className='fa-solid fa-circle-check'
      right[2].style.color='rgb(5, 88, 5)'
   }
}
button.addEventListener('click',isUsernameValid)
button.addEventListener('click',isEmailValid)
button.addEventListener('click',isPasswordValid)