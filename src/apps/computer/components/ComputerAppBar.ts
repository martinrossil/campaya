import { DisplayContainer, HorizontalLayout, VerticalAlign } from 'enta';
import Colors from '../../../theme/Colors';
import Shadows from '../../../theme/Shadows';
import LogoLarge from '../../shared/LogoLarge';

export default class ComputerAppBar extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'ComputerAppBar';
        this.percentWidth = 100;
        this.paddingLeft = 16;
        this.height = 72;
        this.zIndex = 1;
        this.layout = new HorizontalLayout(NaN, 'left', 'middle');
        this.backgroundColor = Colors.WHITE;
        this.addFilter(Shadows.BOX_SHADOW_DOWN_1);
        this.addFilter(Shadows.BOX_SHADOW_DOWN_2);
        this.addElements([new LogoLarge()]);
    }
}
customElements.define('computer-app-bar', ComputerAppBar);
