/** ------- Задача № 2
 *  ------- Тема: Фильтрация по диапазону
 *  ------- Ссылка: https://learn.javascript.ru/task/filter-range
 *  ------- Условие задачи:
 Напишите функцию filterRange(arr, a, b), которая принимает массив arr, 
 ищет элементы со значениями больше или равными a и меньше или равными b и 
 возвращает результат в виде массива.

    Функция должна возвращать новый массив и не изменять исходный.
        Например:
        let arr = [5, 3, 8, 1];
        let filtered = filterRange(arr, 1, 4);
        alert( filtered ); // 3,1 (совпадающие значения)
        alert( arr ); // 5,3,8,1 (без изменений)
 */
// ------- Решение:

function filterRange(arr, a, b) {
    return addEventListener.filter(item => (a <= item && item <= b));
}
