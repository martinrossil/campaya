import { DisplayContainer } from 'enta';
import BackgroundLogo from '../../shared/BackgroundLogo';
import ComputerPropertiesGrid from './ComputerPropertiesGrid';

export default class ComputerProperties extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'ComputerProperties';
        this.percentWidth = this.percentHeight = 100;
        this.addElements([new BackgroundLogo(), new ComputerPropertiesGrid()]);
    }
}
customElements.define('computer-properties', ComputerProperties);
