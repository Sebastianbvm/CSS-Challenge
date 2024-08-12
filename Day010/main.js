let dateElement = document.querySelector(".date");
let currentDate = new Date();
let options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
}
let formmatedDate = currentDate.toLocaleDateString("en-US", options);
dateElement.innerHTML = formmatedDate;
let timeElement = document.querySelector(".time");

function updateTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;

    let formmatedTime = hours + ":" + minutes;

    timeElement.innerText = formmatedTime;
}

updateTime();
setInterval(updateTime, 1000);