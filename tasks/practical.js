// Задача №1
// Реализуйте функцию parseUrl(string), которая будет парсить URL строку и возвращать объект с распарсенными данными.

function parseUrl(string) {
    let url = new URL(string)
    return url;
}

let a = parseUrl('http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo');

console.log(a.hash);



// Задача №2
// Разработать скрипт для парсинга данных. Результат выполнения файл в соответствии со спецификацией geojson.
// Атрибутивная информация находится в поле title (представлена в виде html кода, необходимо разобрать по формату ключ: значение),
// координаты в поле coordinates. Желательно задачу реализовать с помощью команды npm (пример запуска - npm run parse).

// Данные находятся в файле data.json

function parse(url) {
    fetch(url)
   .then(response => response.json())
   .then(json => {
       console.log(json);
   })
}

// parse('/data.json')

// выведет в браузере



// Задача №3
// Необходимо разработать компонент для отображения таблиц с данными

