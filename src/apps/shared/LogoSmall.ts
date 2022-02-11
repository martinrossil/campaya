import { ViewBox } from 'enta';
import Colors from '../../theme/Colors';
import { Icons } from '../../theme/Icons';
import IconElement from './IconElement';

export default class Logo extends IconElement {
    public constructor() {
        super();
        this.name = 'Logo';
        this.size(56, 56);
        this.fillColor = Colors.BRAND;
        this.pathData = Icons.LOGO_SMALL;
        this.viewBox = new ViewBox(-14, -16, 141, 140);
    }
}
customElements.define('logo-small', Logo);
