import { DisplayContainer } from 'enta';

export default class ComputerHomePage extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'ComputerHomePage';
        this.top = 72;
        this.percentWidth = this.percentHeight = 100;
    }
}
customElements.define('computer-home-page', ComputerHomePage);
