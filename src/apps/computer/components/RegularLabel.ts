import { Color, IColor, LabelElement } from 'enta';
import Typography from '../../../theme/Typography';

export default class RegularLabel extends LabelElement {
    public constructor(fontSize = 14, color: IColor, text = '') {
        super();
        this.name = 'RegularLabel';
        this.enabled = false;
        this.typeFace = Typography.POPPINS_REGULAR;
        this.fontSize = fontSize;
        this.textColor = color;
        this.text = text;
    }
}
customElements.define('regular-label', RegularLabel);
