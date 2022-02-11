import { ApplicationElement } from 'enta';
import Machines from './machines/Machines';
import Colors from './theme/Colors';

export default class CampayaApp extends ApplicationElement {
    public constructor() {
        super();
        this.style.height = '100vh';
        document.body.style.backgroundColor = Colors.NEUTRAL_50.toString();
    }

    private machines = new Machines(this);
}
customElements.define('campaya-app', CampayaApp);
