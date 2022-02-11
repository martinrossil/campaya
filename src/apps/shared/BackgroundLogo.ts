import Colors from '../../theme/Colors';
import LogoSmall from './LogoSmall';

export default class BackgroundLogo extends LogoSmall {
    public constructor() {
        super();
        this.size(800, 800);
        this.fillColor = Colors.NEUTRAL_100;
        this.alignHorizontal = 'center';
        this.alignVertical = 'middle';
    }
}
customElements.define('background-logo', BackgroundLogo);
