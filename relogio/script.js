const d = new Date();
let hour = d.getHours();
let minute = d.getMinutes();
let seconds = d.getSeconds();

let span = document.querySelector('span')

span.textContent = `${hour}:${minute}`