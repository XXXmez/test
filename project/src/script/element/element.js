import Component from "../component/component";

class Element {
    constructor(root, id, firstName, lastName, email, phone) {
        this.root = root;
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;

        this.element = new Component(this.root, 'div', ['content__elements']);

        this.elementId = new Component(this.element.component, 'div', ['content__element-id'], this.id);
        this.elementFirstName = new Component(this.element.component, 'div', ['content__element-firstName'], this.firstName);
        this.elementLastName = new Component(this.element.component, 'div', ['content__element-lastName'], this.lastName);
        this.elementEmail = new Component(this.element.component, 'div', ['content__element-email'], this.email);
        this.elementPhone = new Component(this.element.component, 'div', ['content__element-phone'], this.phone);

        this.element.component.addEventListener('click', () => {
            console.log('Нажатие на персону: ', this.id);
        })
    }
}

export default Element;