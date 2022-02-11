import { ViewBox } from 'enta';
import Colors from '../../theme/Colors';
import { Icons } from '../../theme/Icons';
import IconElement from './IconElement';

export default class LogoLarge extends IconElement {
    public constructor() {
        super();
        this.name = 'Logo';
        this.size(200, 36);
        this.fillColor = Colors.BRAND;
        this.pathData = Icons.LOGO_LARGE;
        this.viewBox = new ViewBox(0, 0, 603, 110);
    }
}
customElements.define('logo-large', LogoLarge);
