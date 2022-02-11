import { ApplicationElement } from 'enta';

export default class CampayaApp extends ApplicationElement {
    public constructor() {
        super();
        this.style.height = '100vh';
    }
}
customElements.define('campaya-app', CampayaApp);
