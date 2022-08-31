class Component {
    constructor(root, name = 'div', classes = '', content) {
        this.component = document.createElement(name);
        this.component.classList.add(...classes);
        if (content) this.component.textContent = content;
        if (root) root.append(this.component);
    }
}

export default Component;