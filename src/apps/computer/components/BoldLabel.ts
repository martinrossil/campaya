import { IColor, LabelElement } from 'enta';
import Typography from '../../../theme/Typography';

export default class BoldLabel extends LabelElement {
    public constructor(fontSize = 14, color: IColor, text = '') {
        super();
        this.name = 'BoldLabel';
        this.enabled = false;
        this.typeFace = Typography.POPPINS_BOLD;
        this.fontSize = fontSize;
        this.textColor = color;
        this.text = text;
        this.fontWeight = 700;
    }
}
customElements.define('bold-label', BoldLabel);
