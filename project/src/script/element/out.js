import Component from "../component/component";

class Out extends Component {
    constructor(root, firstName, lastName, description, address) {
        super(root, 'div', ['out__info']);
        
        this.user = new Component(this.component, 'div', ['out__user']);
        this.user.component.innerHTML = `Выбран пользователь: ${'<b>'}${firstName} ${lastName}${'</b>'}`;

        this.description = new Component(this.component, 'div', ['out__description'], `Описание: ${description}`);

        this.address = new Component(this.component, 'div', ['out__address']);
        this.address.component.innerHTML = `Адрес проживания: ${'<b>'}${address.streetAddress}${'</b>'}`;

        this.city = new Component(this.component, 'div', ['out__city']);
        this.city.component.innerHTML = `Город: ${'<b>'}${address.city}${'</b>'}`;

        this.shtat = new Component(this.component, 'div', ['out__shtat']);
        this.shtat.component.innerHTML = `Провинция/штат: ${'<b>'}${address.state}${'</b>'}`;

        this.index = new Component(this.component, 'div', ['out__index']);
        this.index.component.innerHTML = `Индекс: ${'<b>'}${address.zip}${'</b>'}`;
    }
}

export default Out;