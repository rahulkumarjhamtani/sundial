setInterval(() => {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    a = 30*h + m/2;
    b = 6*m;
    c = 6*s;

    hour.style.transform = `rotate(${a}deg)`;
    minute.style.transform = `rotate(${b}deg)`;
    second.style.transform = `rotate(${c}deg)`;
}, 1000);