import { DataRenderer, IMouseTouch } from 'enta';
import Colors from '../../../theme/Colors';
import Shadows from '../../../theme/Shadows';
import Property from '../../../vo/Property';

export default class PropertyRenderer extends DataRenderer<Property> implements IMouseTouch {
    public constructor() {
        super();
        this.backgroundColor = Colors.WHITE;
        this.cornerSize = 8;
        this.addFilter(Shadows.BOX_SHADOW_DOWN_1);
        this.addFilter(Shadows.BOX_SHADOW_DOWN_2);
    }

    protected updateInternalHeight(): void {
        super.updateInternalHeight();
        this.internalHeight = this.actualWidth;
    }

    public initial(): void {
        //
    }

    public hover(): void {
        //
    }

    public pressed(x: number, y: number): void {
        //
    }

    public clicked(): void {
        //
    }
}
customElements.define('property-renderer', PropertyRenderer);
