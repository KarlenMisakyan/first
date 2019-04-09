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

/*let i = 0;
while ( i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = +prompt("Во сколько это обойдется? ", "");
    if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
    a != '' && b != '') {
        console.log("done");
        appData.expenses[a] = b;
    }
    i++;
}
*/
/*let i = 1;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = +prompt("Во сколько это обойдется? ", "");
    if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
    a != '' && b != '') {
        console.log("done");
        appData.expenses[a] = b;
    }
    i++;
} while (i < 2)
*/


for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = +prompt("Во сколько это обойдется? ", "");

    if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
    a != '' && b != '') {
        console.log("done");
        appData.expenses[a] = b;
    }
}

appData.moneyPerDay = alert(appData.budget / 30);
