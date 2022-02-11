import { DisplayContainer } from 'enta';
import Colors from '../../../theme/Colors';
import Shadows from '../../../theme/Shadows';

export default class ComputerFilterSideBar extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'ComputerFilterSideBar';
        this.width = 272;
        this.percentHeight = 100;
        this.backgroundColor = Colors.WHITE;
        this.addFilter(Shadows.BOX_SHADOW_LEFT_1);
        this.addFilter(Shadows.BOX_SHADOW_LEFT_2);
    }
}
customElements.define('computer-filter-side-bar', ComputerFilterSideBar);
