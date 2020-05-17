const timerMinutes = document.querySelector('.js-timer__minutes');
const timerSeconds = document.querySelector('.js-timer__seconds');

const btn59Min = document.querySelector ('.js-btn-59min');
const btn30Min = document.querySelector ('.js-btn-30min');
const btn10Min = document.querySelector ('.js-btn-10min');

const btn59Sec = document.querySelector ('.js-btn-59sec');
const btn30Sec = document.querySelector ('.js-btn-30sec');
const btn10Sec = document.querySelector ('.js-btn-10sec');

const btn1MinMinus = document.querySelector ('.js-btn-1min-minus');
const btn1MinPlus = document.querySelector ('.js-btn-1min-plus');
const btn1SecMinus = document.querySelector ('.js-btn-1sec-minus');
const btn1SecPlus = document.querySelector ('.js-btn-1sec-plus');

const btnStart = document.querySelector ('.js-btn-start');
const btnPause = document.querySelector ('.js-btn-pause');
const btnReset = document.querySelector ('.js-btn-reset');

const btnInput = document.querySelector ('.js-btn-input');
const messageText = document.querySelector ('.message-text');

const timer = document.querySelector ('.timer');

let time = 0;
let interval = null;
let a = null;

//Функция по добавлению нуля перед значением минут и секунд:
const converterNumber = (value) => {
    if (value < 10) {
        return `0${value}`;
    }
    return `${value}`;
}

//Функция по преобразованию заданного времени в секундах в минуты и секунды:
const changeTimerTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    
    timerMinutes.innerHTML = converterNumber(minutes);
    timerSeconds.innerHTML = converterNumber(seconds);
}
changeTimerTime();

//Функции по изменению времени при нажатии на кнопки с фиксированным временем:
//Минутные кнопки
btn59Min.addEventListener('click', () => {
    time = 59 * 60;
    changeTimerTime();
});
btn30Min.addEventListener('click', () => {
    time = 30 * 60;
    changeTimerTime();
});
btn10Min.addEventListener('click', () => {
    time = 10 * 60;
    changeTimerTime();
});
//Секундные кнопки
btn59Sec.addEventListener('click', () => {
    time = 59;
    changeTimerTime();
});
btn30Sec.addEventListener('click', () => {
    time = 30;
    changeTimerTime();
});
btn10Sec.addEventListener('click', () => {
    time = 10;
    changeTimerTime();
});

//Функции по изменению времени на "единицу" (вычитание и сложение):
//На одну минуту
btn1MinMinus.addEventListener('click', () => {
    if (time > 0) {
        time = time - 60;
        changeTimerTime();
    }
});
btn1MinPlus.addEventListener('click', () => {
    time = time + 60;
    changeTimerTime();
});
//На одну секунду
btn1SecMinus.addEventListener('click', () => {
    if (time > 0) {
        time = time - 1;
        changeTimerTime();
    }
});
btn1SecPlus.addEventListener('click', () => {
    time = time + 1;
    changeTimerTime();
});

//Функции по управлению таймером (старт, пауза, сброс):
//Старт
btnStart.addEventListener('click', () => {
    if (!interval && time > 0) {
        interval = setInterval(() => {
            if (time > 0) {
                time = time - 1;
                changeTimerTime();
            } else {
                timer.innerHTML = '<div class="message-text"><p>Таймер закончил отсчёт времени</p><button id="repeat" onclick="repeat()">ЗАНОВО</button></div>';
                clearInterval(interval);
            }
        }, 1000);
    }
});

//Пауза
btnPause.addEventListener('click', () => {
    if (interval) {
        clearInterval(interval);
        interval = null;
    };
});
//Сброс
btnReset.addEventListener('click', () => {
    time = 0;
    changeTimerTime();
});

//Функции по работе со строками ввода
btnInput.addEventListener('click', () => {
    const inputMin = document.getElementById('js-input-min').value;
    const inputSec = document.getElementById('js-input-sec').value;
    let minutes = Number(inputMin);
    let seconds = Number(inputSec);
    time = time + minutes * 60 + seconds;
    changeTimerTime();
});

const repeat = () => {
    document.getElementById('repeat');
    document.location.reload(true);
};