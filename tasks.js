/** ------- Задача № 2
 *  ------- Тема: Объекты.
 *  ------- Ссылка: https://learn.javascript.ru/task/is-empty
 *  ------- Условие задачи:
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
Должно работать так:
    let schedule = {};
    alert( isEmpty(schedule) ); // true
    schedule["8:30"] = "get up";
    alert( isEmpty(schedule) ); // false
 */ 

// ------- Решение:
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}