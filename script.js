const publications=[...document.querySelectorAll('.publication')];
const count=document.getElementById('publication-count');
let currentPublication=0;
function showPublication(index){currentPublication=(index+publications.length)%publications.length;publications.forEach((publication,i)=>publication.classList.toggle('active',i===currentPublication));count.textContent=`${String(currentPublication+1).padStart(2,'0')} / ${String(publications.length).padStart(2,'0')}`;}
document.getElementById('previous-publication').addEventListener('click',()=>showPublication(currentPublication-1));
document.getElementById('next-publication').addEventListener('click',()=>showPublication(currentPublication+1));
const menuButton=document.querySelector('.menu-button');const navigation=document.querySelector('.primary-nav');menuButton.addEventListener('click',()=>{const open=navigation.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});document.querySelectorAll('.primary-nav a').forEach(link=>link.addEventListener('click',()=>navigation.classList.remove('open')));
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.08});document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));
