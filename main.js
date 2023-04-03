const slideList = [{
        img: 'images/img1.jpg',
        text: 'Pierwszy tekst'
    },
    {
        img: 'images/img2.jpg',
        text: 'Drugi tekst'
    },
    {
        img: 'images/img3.jpg',
        text: 'Trzeci tekst'
    }
];
const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
// Zamiana z nodeList na tablice + ...rest
const dots = [...document.querySelectorAll('.dots span')];
/* Interfejs */
const time = 3000;
let active = 0;
/* Implementacje */
const changeDot = () => {
    // Wykonujemy na kadym elemencie tablicy, gdy zwróci true to findIndex się zatrzymuje
    // .contains sprawdza czy zawiera klasę active - zwróci jej index
    const activeDot = dots.findIndex(item => item.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    // chcemy dodać do elem który jest avtie a nie dla innego dlatego usuwamy wyzej
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    // Sprawdzanie czy indexy active są równe długości obiektu slideList - jeśli tak to zerujemy aby leciało od początku
    if (active === slideList.length) {
        active = 0;
    }
    // Iterujemy po slideList[iteracja]
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot()
}
let indexInterval = setInterval(changeSlide, time);

const keyChangeSlide = (e) => {
    if (e.keyCode == 37 || e.keyCode == 39) {
        clearInterval(indexInterval);
        e.keyCode == 37 ? active-- : active++
        if (active === slideList.length) {
            active = 0;
        } else if (active < 0) {
            active = slideList.length - 1
        }
        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot()
        indexInterval = setInterval(changeSlide, time);
    }
}
window.addEventListener('keydown', keyChangeSlide);