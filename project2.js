window.addEventListener('keydown', (e) => {
    const div = document.querySelector(`div[data-key='${e.keyCode}']`);
    div.classList.add('border');

    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    if (!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();
})

const keys = document.querySelectorAll(".subcontainer");
keys.forEach(function (key) {
    key.addEventListener('transitionend', function (e) {
        if (e.propertyName !== "transform") {
            return;
        }
        this.classList.remove('border');
    })
})
