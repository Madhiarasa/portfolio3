document.addEventListener('DOMContentLoaded',()=>{
    const drop=document.getElementById('drop');
    const headerul=document.querySelector('.headerul');

    drop.addEventListener('click',()=>{
        headerul.classList.toggle('show');
        drop.classList.toggle('active');
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const roles = ["Web Developer", "Coder", "Programmer"];
    const textChange = document.getElementById('textchange');
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentRole = roles[roleIndex];
        textChange.textContent = currentRole.substring(0, charIndex);

        if (!isDeleting && charIndex < currentRole.length) {
            charIndex++;
            setTimeout(typeEffect, 200);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, 150);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeEffect, 1000);
        }
    }

    typeEffect();
});

