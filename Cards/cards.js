
    const navs = document.querySelectorAll('.ul li');
    const divs = document.querySelectorAll('.cards');

    // Hide all divs except the first one initially
    divs.forEach((div, index) => {
        if (index !== 0) {
            div.style.display = 'none';
        }
    });

    navs.forEach((li, index) => {
    li.addEventListener("click", () => {
        divs.forEach((div) => {
            div.style.display = 'none';
        });

        divs[index].style.display = 'block';
        navs.forEach((li) => {
            li.classList.remove('color');
        });
        li.classList.add('color');
    });
});
