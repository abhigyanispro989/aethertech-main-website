const menuButton=document.getElementById('menuToggle');
const nav=document.getElementById('mainNav');
if(menuButton&&nav){
  menuButton.addEventListener('click',()=>{
    const isOpen=nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded',String(isOpen));
    menuButton.setAttribute('aria-label',isOpen?'Close navigation':'Open navigation');
    menuButton.textContent=isOpen?'×':'☰';
  });
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded','false');
    menuButton.setAttribute('aria-label','Open navigation');
    menuButton.textContent='☰';
  }));
}