import { DisplayContainer, VerticalLayout } from 'enta';
import ComputerAppBar from './components/ComputerAppBar';
import ComputerHomePage from './pages/ComputerHomePage';

export default class ComputerApp extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'ComputerApp';
        this.percentWidth = this.percentHeight = 100;
        this.layout = new VerticalLayout();
        this.addElements([new ComputerAppBar(), new ComputerHomePage()]);
    }
}
customElements.define('computer-app', ComputerApp);
