async function left() {
    hientai.src = `P${i}.jpg`
    hientai.style.left = '45%'  // place img remove at center
    imgs.appendChild(hientai)
    imgs.removeChild(sau)

    sau.style.left = '45%'  // place insert at center
    sau.style.right = 'auto' // right = null
    //default value


    if (i == 1) i = 5
    else i--
    // decrease i 

    sau.src = `P${i}.jpg`
    sau.style.left = 'auto'
    sau.style.right = '0'
    imgs.appendChild(sau)
    // place insert at right


    await new Promise(resolve => setTimeout(resolve, 0));
    hientai.style.left = '0%'       // move delete to left before delete
    sau.style.left = '45%'          // move insert to center

    await new Promise(resolve => setTimeout(resolve, 200));
    imgs.removeChild(hientai)   // delete remove

}