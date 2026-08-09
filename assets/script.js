
const menuBtn = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');
if(menuBtn){
  menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
}
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click',()=>navLinks?.classList.remove('open'));
});
const year=document.querySelector('#year');
if(year) year.textContent=new Date().getFullYear();
