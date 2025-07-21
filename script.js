const btn =document.getElementById('menubtn')
const nav =document.getElementById('menu')
const close= document.getElementById('closebtn')

close.addEventListener('click', () => {
    nav.classList.add('hidden')
})

   btn.addEventListener('click', () => {
    nav.classList.remove('hidden')
})


const btn1 =document.getElementById('frame-btn')
const navv =document.getElementById('trailer')
const close1= document.getElementById('close-btn')

close1.addEventListener('click', () => {
    navv.classList.add('hidden')

})

btn1.addEventListener('click',() => {
        navv.classList.remove('hidden')
})

