const menuToggle=document.querySelector('.menu-toggle');
const menuList=document.querySelector('.list')

menuToggle.addEventListener('click',()=>{
    menuList.style.display=menuList.style.display==='block'? 'none' : 'block';
});