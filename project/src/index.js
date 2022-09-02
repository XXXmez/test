import "../src/style.scss";
import Element from "./script/element/element";
import parseUrl from "./script/api/api";
import Sorts from "./script/sorts/sorts";
import Component from "./script/component/component";

const urlMini = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&adress=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
const urlBig = 'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&adress=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

const tableContent = document.querySelector('.table__content');
const tableDataBtns = document.querySelectorAll('.table__data-btn');

const tablePaginationPrev = document.querySelector('.table__pagination-prev');
const tablePaginationStr = document.querySelector('.table__pagination-str');
const tablePaginationNext = document.querySelector('.table__pagination-next');

const paginationsCount = document.querySelector('#paginations-count');

const tableSearchBtn = document.querySelector('.table__search-btn');
const tableSearchInput = document.querySelector('.table__search-input');
const tableSearchReset = document.querySelector('.table__search-reset');

let data;
let filterData;
let currentElementPage = 0;
let currentPage = 1;

let sorts = new Sorts(tableContent, start);
let elements = new Component(tableContent, 'div', ['content__elements']);

async function updateDate(url) {
    tableContent.style.opacity = '0.3';
    data = await parseUrl(url);
    console.log(data);
    await sortsSet();
    await start(0);
}
updateDate(urlMini);

async function sortsSet(){
    tableSearchInput.value = '';
    currentElementPage = 0;
    currentPage = 1;
    blockPaginations();
    const contentSortActive = document.querySelector('.content__sort-active');
    if (contentSortActive) {
        if (contentSortActive.classList.contains('content__sort-active-wane')) {
            data.sort((a,b) => a[contentSortActive.dataset.sort] > b[contentSortActive.dataset.sort] ? 1 : -1);
        }
        if (contentSortActive.classList.contains('content__sort-active-growth')) {
            data.sort((a,b) => a[contentSortActive.dataset.sort] < b[contentSortActive.dataset.sort] ? 1 : -1);
        }
    }
}

function removeDataActive() {
    tableDataBtns.forEach((e) => {
        e.classList.remove('table__data-btn-active');
    });
}

tableDataBtns.forEach((e) => {
    e.addEventListener('click', () => {
        removeDataActive();
        e.classList.add('table__data-btn-active');

        if (e.dataset.size == 'mini') updateDate(urlMini);
        if (e.dataset.size == 'big') updateDate(urlBig);
    })
});

async function start(sss, db = data) {
    elements.component.innerHTML = '';

    const paginationsCount = document.querySelector('#paginations-count');
    const count = paginationsCount.value;
    
    for (let i = sss; i < sss + Number(count); i++) {
        if(i < db.length) {
            new Element(elements.component, db[i]);
        }
    }

    tableContent.style.opacity = '1'
    tablePaginationStr.textContent = currentPage;
}

function blockPaginations(){
    const paginationsCount = document.querySelector('#paginations-count').value;
    if (currentElementPage > Number(paginationsCount)-1) {tablePaginationPrev.disabled = false}
    if (currentElementPage + Number(paginationsCount)-1 > data.length) {tablePaginationNext.disabled = true}

    if (currentElementPage < Number(paginationsCount)-1) tablePaginationPrev.disabled = true
    if (currentElementPage + Number(paginationsCount)-1 < data.length) {tablePaginationNext.disabled = false}
}

function paginationNext() {
    const paginationsCount = document.querySelector('#paginations-count').value;
    currentElementPage += Number(paginationsCount);
    currentPage++;
    start(currentElementPage);

    blockPaginations();
}
function paginationPrev() {
    const paginationsCount = document.querySelector('#paginations-count').value;
    currentElementPage -= Number(paginationsCount);
    currentPage--;
    start(currentElementPage);

    blockPaginations();
}

tablePaginationNext.addEventListener('click', () => {
    paginationNext();
})
tablePaginationPrev.addEventListener('click', () => {
    paginationPrev();
})

paginationsCount.onchange = function() {
    sortsSet();
    start(0);
}

function search() {
    const newData = data.filter(e => e.id == tableSearchInput.value.trim());
    if (newData.length > 0) filterData = newData
    else tableSearchInput.value = '';
}

tableSearchBtn.addEventListener('click', () => {
    if (tableSearchInput.value.trim()) {
        search();
        start(0, filterData);
        tablePaginationNext.disabled = true;
    }
});

tableSearchReset.addEventListener('click', () => {
        tableSearchInput.value = '';
        start(0);
        tablePaginationNext.disabled = false;
})

export { start, sortsSet };