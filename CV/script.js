const lightbox = document.createElement('div'); 
lightbox.id = 'lightbox'; 
document.body.appendChild(lightbox); 

const imgpf = document.querySelectorAll('.img-pf'); 
imgpf.forEach(img => { 
    img.addEventListener('click', e => { 
        lightbox.classList.add('active'); 
        const slImg = document.createElement('img'); 
        slImg.src = img.src; 
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild); 
        }
        lightbox.appendChild(slImg); 
    })
});

lightbox.addEventListener('click', e => { 
    if (e.target !== e.currentTarget) return; 
    lightbox.classList.remove('active'); 
});

