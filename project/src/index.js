import "../src/style.scss";
import Element from "./script/element/element";
import parseUrl from "./script/api/api";
import Sorts from "./script/sorts/sorts";
import Component from "./script/component/component";

const urlMini = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&adress=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
const urlBig = 'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&adress=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

const tableContent = document.querySelector('.table__content');
const tableDataBtns = document.querySelectorAll('.table__data-btn');

let data;
let currentElementPage = 0;

async function updateDate(url) {
    tableContent.style.opacity = '0.3';
    data = await parseUrl(url);
    console.log(data);
    await sortsSet();
    await start(0);
}
updateDate(urlMini);

async function sortsSet(){
    currentElementPage = 0;
    const contentSortActive = document.querySelector('.content__sort-active');
    if (contentSortActive) {
        if (contentSortActive.classList.contains('content__sort-active-wane')) {
            console.log('Убываем', contentSortActive.dataset.sort);
            data.sort((a,b) => a[contentSortActive.dataset.sort] > b[contentSortActive.dataset.sort] ? 1 : -1)
        }
        if (contentSortActive.classList.contains('content__sort-active-growth')) {
            console.log('Возрастание', contentSortActive.dataset.sort);
            data.sort((a,b) => a[contentSortActive.dataset.sort] < b[contentSortActive.dataset.sort] ? 1 : -1)
        }
    }
}

tableDataBtns.forEach((e) => {
    e.addEventListener('click', () => {
        console.log(e.dataset.size);
        if (e.dataset.size == 'mini') updateDate(urlMini);
        if (e.dataset.size == 'big') updateDate(urlBig);
    })
})

// new Element(tableContent, 77, 'Руслан', 'Русланов', 'ruslan@mail.com', 8921212121)

let sorts = new Sorts(tableContent, start);
let elements = new Component(tableContent, 'div', ['content__elements'])

async function start(start) {
    elements.component.innerHTML = '';

    const paginationsCount = document.querySelector('#paginations-count');
    const count = paginationsCount.value;

    currentElementPage = count;
    
    for (let i = start; i < start + count; i++) {
        if(i < data.length) {
            // new Element(elements.component, data[i].id, data[i].firstName, data[i].lastName, data[i].email, data[i].phone);
            new Element(elements.component, data[i]);
        }
    }

    tableContent.style.opacity = '1'
}

export { start, sortsSet}