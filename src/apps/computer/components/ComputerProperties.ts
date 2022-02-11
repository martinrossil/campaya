import { DisplayContainer } from 'enta';
import BackgroundLogo from '../../shared/BackgroundLogo';

export default class ComputerProperties extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'ComputerProperties';
        this.percentWidth = this.percentHeight = 100;
        this.addElement(new BackgroundLogo());
    }
}
customElements.define('computer-properties', ComputerProperties);
