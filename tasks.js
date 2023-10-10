/** ------- Задача № 5
 *  ------- Тема: Скопировать и отсортировать массив
 *  ------- Ссылка: https://learn.javascript.ru/task/copy-sort-array
 *  ------- Условие задачи:
У нас есть массив строк arr. Нужно получить отсортированную копию, 
но оставить arr неизменённым.
Создайте функцию copySorted(arr), которая будет возвращать такую копию.

    let arr = ["HTML", "JavaScript", "CSS"];
    let sorted = copySorted(arr);
    alert( sorted ); // CSS, HTML, JavaScript
    alert( arr ); // HTML, JavaScript, CSS (без изменений)
 */
// ------- Решение:

function copySorted(arr) {
    return arr.slice().sort();
}