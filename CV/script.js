const lightbox = document.createElement('div'); //       1. creates a div
lightbox.id = 'lightbox'; //                             2. adds a 'lightbox' id for div
document.body.appendChild(lightbox); //                  3. puts created div as a 'body' child

const imgpf = document.querySelectorAll('.img-pf'); //   4. variable selecting portfolio images
imgpf.forEach(img => { //                                5. for each image in said variable...
    img.addEventListener('click', e => { //              6. every time we click on it...
        lightbox.classList.add('active'); //             7. we add a 'active' class to the div...
        const slImg = document.createElement('img'); //  8. we create a new image...
        slImg.src = img.src; //                          9. and said image is the one we clicked on
        while (lightbox.firstChild) { //             10/11. we fix the multiple image bug
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(slImg); //                 12. we add the selected image as a child
    })
});

lightbox.addEventListener('click', e => { //            13. when lightbox is active, when we click...
    if (e.target !== e.currentTarget) return; //        14. on the image, nothing is returned...
    lightbox.classList.remove('active'); //             15. but when it's not the image, we remove the 'active' class
});

