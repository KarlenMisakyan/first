'use strict';

var money,
    time;

money = +prompt("Ваш бюджет на месяц?", "");
time = prompt("Введите дату в формате YYYY-MM-DD", "");

var appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false    
};

let quest1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    quest2 = prompt("Во сколько это обойдется?"),
    quest3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    quest4 = prompt("Во сколько это обойдется?")

appData.expenses.quest1 = quest2;
appData.expenses.quest3 = quest4;

alert(appData.budget / 30);