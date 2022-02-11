import { DisplayContainer } from 'enta';

export default class ComputerApp extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'ComputerApp';
        this.percentWidth = this.percentHeight = 100;
    }
}
customElements.define('computer-app', ComputerApp);
