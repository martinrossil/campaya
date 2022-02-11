import { PathElement, ViewBox } from 'enta';

export default class IconElement extends PathElement {
    public constructor() {
        super();
        this.name = 'IconElement';
        this.size(24, 24);
        this.viewBox = new ViewBox(0, 0, 24, 24);
    }
}
customElements.define('icon-element', IconElement);
