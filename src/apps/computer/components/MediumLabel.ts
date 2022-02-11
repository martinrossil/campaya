import { IColor, LabelElement } from 'enta';
import Typography from '../../../theme/Typography';

export default class MediumLabel extends LabelElement {
    public constructor(fontSize = 14, color: IColor, text = '') {
        super();
        this.name = 'MediumLabel';
        this.enabled = false;
        this.typeFace = Typography.POPPINS_MEDIUM;
        this.fontSize = fontSize;
        this.textColor = color;
        this.text = text;
        this.fontWeight = 500;
    }
}
customElements.define('medium-label', MediumLabel);
