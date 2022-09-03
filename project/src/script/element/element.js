import Component from "../component/component";
import Out from "./out";

class Element {
    constructor(root, data) {
        this.root = root;
        this.data = data;

        this.tableOut = document.querySelector('.table__out');

        this.element = new Component(this.root, 'div', ['content__element']);

        this.elementId = new Component(this.element.component, 'div', ['content__element-id'], String(this.data.id));
        this.elementFirstName = new Component(this.element.component, 'div', ['content__element-firstName'], this.data.firstName);
        this.elementLastName = new Component(this.element.component, 'div', ['content__element-lastName'], this.data.lastName);
        this.elementEmail = new Component(this.element.component, 'div', ['content__element-email'], this.data.email);
        this.elementPhone = new Component(this.element.component, 'div', ['content__element-phone'], this.data.phone);

        this.element.component.addEventListener('click', () => {
            console.log('Нажатие на персону: ', this.data.id);
            this.tableOut.innerHTML = '';
            this.out = new Out(
                this.tableOut,
                this.data.firstName,
                this.data.lastName,
                this.data.description,
                this.data.adress
            );
        })
    }
}

export default Element;