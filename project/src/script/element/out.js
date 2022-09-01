import Component from "../component/component";

class Out extends Component {
    constructor(root, firstName, lastName, description, address) {
        super(root, 'div', ['out__info']);
        console.log(address);
        this.user = new Component(this.component, 'div', ['out__user'], `Выбран пользователь: ${firstName} ${lastName}`);
        this.user = new Component(this.component, 'div', ['out__description'], `Описание: ${description}`);
        this.user = new Component(this.component, 'div', ['out__address'], `Адрес проживания: ${address.streetAddress}`);
        this.user = new Component(this.component, 'div', ['out__city'], `Город: ${address.city}`);
        this.user = new Component(this.component, 'div', ['out__shtat'], `Провинция/штат: ${address.state}`);
        this.user = new Component(this.component, 'div', ['out__index'], `Индекс: ${address.zip}`);
    }
}

export default Out;