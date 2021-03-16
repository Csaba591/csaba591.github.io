const btnStart = document.getElementById('btnStart');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

let timer = null;

btnStart.onclick = () => {
    minutes.textContent = '20';
    seconds.textContent = '00';
    timer = setInterval(tick, 1000);
}

const tick = () => {
    mins = parseInt(minutes.innerText);
    secs = parseInt(seconds.innerText);
    
    if (mins == 0 && secs == 1) {
        alert('time\'s up!');
        clearInterval(timer);
        return;
    }
    
    mins -= secs == 0 ? 1 : 0;
    secs = secs == 0 ? 59 : secs-1;

    minutes.innerText = pad(mins);
    seconds.innerText = pad(secs);
}

const pad = (number) => (number < 10 ? '0' : '') + number;
