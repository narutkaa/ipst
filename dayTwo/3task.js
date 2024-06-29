const month = Math.floor(Math.random() * 12) + 1;
console.log(`Month: ${month}`);

let season;
if (month === 12 || month === 1 || month === 2) {
    season = 'Зима';
} else if (month >= 3 && month <= 5) {
    season = 'Весна';
} else if (month >= 6 && month <= 8) {
    season = 'Лето';
} else if (month >= 9 && month <= 11) {
    season = 'Осень';
}
console.log(`Season: ${season}`);

// Високосный год или нет
const year = 2022;
let isLeapYear;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    isLeapYear = true;
} else {
    isLeapYear = false;
}
console.log(`Year: ${year}`);
console.log(`Is leap year: ${isLeapYear}`);
