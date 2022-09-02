import Component from "../component/component";
import { start, sortsSet } from "../../index";

class Sorts extends Component {
    constructor(root) {
        super(root, 'div', ['content__sorts']);

        this.sortsId = new Component(this.component, 'div', ['content__sort', 'content__sorts-id', 'content__sort-active', 'content__sort-active-wane'], 'Id');
        this.sortsId.component.dataset.sort = 'id';
        this.sortsFirstName = new Component(this.component, 'div', ['content__sort', 'content__sorts-firstName'], 'First name');
        this.sortsFirstName.component.dataset.sort = 'firstName'
        this.sortsLastName = new Component(this.component, 'div', ['content__sort', 'content__sorts-lastName'], 'Last name');
        this.sortsLastName.component.dataset.sort = 'lastName'
        this.sortsEmail = new Component(this.component, 'div', ['content__sort', 'content__sorts-email'], 'Email');
        this.sortsEmail.component.dataset.sort = 'email'
        this.sortsPhone = new Component(this.component, 'div', ['content__sort', 'content__sorts-phone'], 'Phone');
        this.sortsPhone.component.dataset.sort = 'phone'

        let sortsArr = [this.sortsId, this.sortsFirstName, this.sortsLastName, this.sortsEmail, this.sortsPhone];

        sortsArr.forEach(e => {
            e.component.addEventListener('click', () => {
                if (e.component.classList.contains('content__sort-active-wane')) {
                    e.component.classList.remove('content__sort-active-wane');
                    e.component.classList.add('content__sort-active-growth');
                    sortsSet()
                    start(0)
                }else if(e.component.classList.contains('content__sort-active-growth')) {
                    e.component.classList.remove('content__sort-active-growth');
                    e.component.classList.add('content__sort-active-wane');
                    sortsSet()
                    start(0)
                } else {
                    remove();
                    e.component.classList.add('content__sort-active', 'content__sort-active-wane');
                    sortsSet()
                    start(0)
                    
                }
                
            })
        })

        function remove(){
            sortsArr.forEach(e => {
                e.component.classList.remove('content__sort-active', 'content__sort-active-wane', 'content__sort-active-growth')
            })
        }
    }
}

export default Sorts;