import { DisplayContainer, HorizontalLayout } from 'enta';
import ComputerDetinationsSideBar from '../components/ComputerDestinationSideBar';
import ComputerFilterSideBar from '../components/ComputerFilterSideBar';
import ComputerProperties from '../components/ComputerProperties';

export default class ComputerHomePage extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'ComputerHomePage';
        this.percentWidth = this.percentHeight = 100;
        this.layout = new HorizontalLayout();
        this.addElements([new ComputerDetinationsSideBar(), new ComputerProperties(), new ComputerFilterSideBar()]);
    }
}
customElements.define('computer-home-page', ComputerHomePage);
