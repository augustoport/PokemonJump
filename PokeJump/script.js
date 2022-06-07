const pikachu = document.querySelector('.pikachu')
const obj = document.querySelector('.obstacle')
const clouds = document.querySelector('.clouds')

const jump = () => {
    pikachu.classList.add('jump');

    setTimeout(() => {
        pikachu.classList.remove('jump');
    }, 500)
}

// setTimeout(() => {
//     obj.animate(+500)
// }, 30000)

const loop = setInterval(() => {
    const objPosition = obj.offsetLeft;
    const cloudPosition = clouds.offsetLeft;
    const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px', '')
    if(objPosition < 70 && pikachuPosition < 70){
        obj.style.animation = 'none'
        obj.style.left = `${objPosition}px`

        clouds.style.animation = 'none'
        clouds.style.left = `${cloudPosition}px`

        pikachu.style.animation = 'none'
        pikachu.style.bottom = `${pikachuPosition}px`

        pikachu.src = './imgs/loss.png'
        pikachu.style.width = '70px'
    }
}, 10);

document.addEventListener('keydown', jump);
