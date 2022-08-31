import Component from "../component/component";

class Sorts extends Component {
    constructor(root) {
        super(root, 'div', ['content__sorts']);

        this.sortsId = new Component(this.component, 'div', ['content__sorts-id'], 'id');
        this.sortsFirstName = new Component(this.component, 'div', ['content__sorts-firstName'], 'firstName');
        this.sortsLastName = new Component(this.component, 'div', ['content__sorts-lastName'], 'lastName');
        this.sortsEmail = new Component(this.component, 'div', ['content__sorts-email'], 'email');
        this.sortsPhone = new Component(this.component, 'div', ['content__sorts-phone'], 'phone');
    }
}

export default Sorts;