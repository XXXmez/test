import "../src/style.scss";
import Element from "./script/element/element";
import parseUrl from "./script/api/api";
import Sorts from "./script/sorts/sorts";

const urlMini = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&adress=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
const urlBig = 'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&adress=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

let data;
let currentElementPage = 0;

async function updateDate(url) {
    data = await parseUrl(url);
    await start(0);
}
updateDate(urlMini)

const tableContent = document.querySelector('.table__content');

// new Element(tableContent, 77, 'Руслан', 'Русланов', 'ruslan@mail.com', 8921212121)

async function start (start) {
    tableContent.innerHTML = '';
    let sorts = new Sorts(tableContent);
    const paginationsCount = document.querySelector('#paginations-count');
    const count = paginationsCount.value;
    
    for (let i = start; i < count; i++) {
        new Element(tableContent, data[i].id, data[i].firstName, data[i].lastName, data[i].email, data[i].phone)
    }
}


