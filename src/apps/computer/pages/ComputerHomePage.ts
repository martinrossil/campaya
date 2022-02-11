import { DisplayContainer } from 'enta';
import BackgroundLogo from '../../shared/BackgroundLogo';
import ComputerDetinationsSideBar from '../components/ComputerDestinationSideBar';

export default class ComputerHomePage extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'ComputerHomePage';
        this.percentWidth = this.percentHeight = 100;
        this.addElements([new ComputerDetinationsSideBar(), new BackgroundLogo()]);
    }
}
customElements.define('computer-home-page', ComputerHomePage);
