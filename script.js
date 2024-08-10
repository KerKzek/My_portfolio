let imgs = document.querySelector('.imgplace')
let hientai = document.createElement('img')
let sau = document.createElement('img')

i = 1;
sau.src = `P${i}.jpg`
imgs.appendChild(sau)

async function left() {
    if (window.innerWidth > 768) {

        hientai.src = `P${i}.jpg`
        hientai.style.left = '45%'
        hientai.style.opacity = '1'
        imgs.appendChild(hientai)
        imgs.removeChild(sau)

        if (i == 1) i = 5
        else i--

        sau.style.left = '90%'

        sau.src = `P${i}.jpg`
        imgs.appendChild(sau)

        await new Promise(resolve => setTimeout(resolve, 0));
        hientai.style.left = '0'
        hientai.style.opacity = '0.2'

        sau.style.left = '45%'

        await new Promise(resolve => setTimeout(resolve, 200));
        hientai.style.opacity = '0'
        imgs.removeChild(hientai)
    }
    else if (window.innerWidth <= 768) {
        hientai.src = `P${i}.jpg`
        hientai.style.left = '25%'
        hientai.style.opacity = '1'
        imgs.appendChild(hientai)
        imgs.removeChild(sau)

        if (i == 1) i = 5
        else i--

        sau.style.left = '45%'

        sau.src = `P${i}.jpg`
        imgs.appendChild(sau)
        await new Promise(resolve => setTimeout(resolve, 0));
        hientai.style.left = '0'
        hientai.style.opacity = '0'

        sau.style.left = '25%'

        await new Promise(resolve => setTimeout(resolve, 250));
        imgs.removeChild(hientai)
    }

}

async function right() {
    if (window.innerWidth > 768) {

        hientai.src = `P${i}.jpg`
        hientai.style.left = '45%'
        hientai.style.opacity = '1'
        imgs.appendChild(hientai)
        imgs.removeChild(sau)

        if (i == 5) i = 1
        else i++

        sau.style.left = '0'
        sau.src = `P${i}.jpg`
        imgs.appendChild(sau)

        await new Promise(resolve => setTimeout(resolve, 0));
        hientai.style.left = '90%'
        hientai.style.opacity = '0'
        sau.style.left = '45%'

        await new Promise(resolve => setTimeout(resolve, 200));
        imgs.removeChild(hientai)
    }
    else if (window.innerWidth <=768) {
        hientai.src = `P${i}.jpg`
        hientai.style.left = '25%'
        hientai.style.opacity = '1'
        imgs.appendChild(hientai)
        imgs.removeChild(sau)

        if (i == 5) i = 1
        else i++

        sau.style.left = '0'
        sau.src = `P${i}.jpg`
        imgs.appendChild(sau)

        await new Promise(resolve => setTimeout(resolve, 0));
        hientai.style.left = '45%'
        hientai.style.opacity = '0'
        sau.style.left = '25%'

        await new Promise(resolve => setTimeout(resolve, 200));
        imgs.removeChild(hientai)
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key == 'ArrowRight') {
        right()
    }
    else if (e.key == "ArrowLeft") {
        left()
    }
})