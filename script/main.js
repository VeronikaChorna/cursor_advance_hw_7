const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1.Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this
function getMyTaxes() {
    return salary * this.tax;
}
console.log('1. Amount of taxes of entered salary is:', getMyTaxes.call(ukraine, salary = +prompt('Enter your salary:')));

// 2.Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this
function getMiddleTaxes() {
    return (this.tax * this.middleSalary).toFixed(2);
}
console.log('2. Average of taxes that IT specialists pay in Ukraine:', getMiddleTaxes.call(ukraine));

// 3.Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this
function getTotalTaxes() {
    return (this.tax * this.middleSalary * this.vacancies).toFixed(2);
}
console.log('3. Amount of taxes that IT specialists pay in Ukraine:', getTotalTaxes.call(ukraine));

// 4.Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary. profit = salary - taxes; для виводу в консоль кожні 10 секунд використайте setInterval
function getMySalary(country) {
    const min = 1500;
    const max = 2000;
    const salary = (Math.random() * (max - min) + min).toFixed(0);
    const taxes = (country.tax * salary).toFixed(2);
    const profit = (salary - taxes).toFixed(2);
    const mySalary = {salary, taxes, profit};
    console.log(mySalary);
}
setInterval(() => {
    getMySalary(ukraine)
}, 10000);



