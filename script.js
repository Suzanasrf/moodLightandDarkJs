const mode = document.getElementById('mood_icon')
const modeSun = document.getElementById('mood_sun')

mode.addEventListener('click', () =>{
const form= document.getElementById('login_form')
if(mode.classList.contains('fa-moon')){
    form.classList.add('dark')
    mode.classList.remove('fa-moon')
    mode.classList.add('fa-sun')

}else{
    form.classList.remove('dark')

    mode.classList.add('fa-moon')
    mode.classList.remove('fa-sun')
        
}

})