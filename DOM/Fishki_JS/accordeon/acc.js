const acc = (selector) => {
    const container = document.querySelector(selector);
    const buttons = document.querySelectorAll('.button');
    const contents = document.querySelectorAll('.content');

    const show = e => {
        [...contents].forEach(el => {
            if (e.target.nextElementSibling !== el) {
                el.classList.remove('active')
            }
        });
        e.target.nextElementSibling.classList.toggle('active')
    }
    [...buttons].forEach(el => el.addEventListener('click', show));
}

acc('.acc_container')