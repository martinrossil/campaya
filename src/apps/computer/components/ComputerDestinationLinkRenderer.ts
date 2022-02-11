import { DataRenderer, ILabelElement, ILinkContainer, IMouseTouch, LinkContainer, MouseTouchMachine } from 'enta';
import Colors from '../../../theme/Colors';
import DestinationLink from '../../../vo/DestinationLink';
import BoldLabel from './BoldLabel';
import MediumLabel from './MediumLabel';

export default class ComputerDestinationLinkRenderer extends DataRenderer<DestinationLink> implements IMouseTouch {
    public constructor() {
        super();
        this.name = 'ComputerDestinationLinkRenderer';
        this.percentWidth = 100;
        this.cornerSize = 4;
        this.addElement(this.linkContainer);
    }

    private mouseTouchMachine: MouseTouchMachine = new MouseTouchMachine(this);

    public initial(): void {
        this.updateProperties();
    }

    public hover(): void {
        this.backgroundColor = Colors.BRAND;
        this.nameLabel.textColor = Colors.WHITE;
        this.countLabel.textColor = Colors.WHITE;
    }

    public pressed(x: number, y: number): void {
        this.backgroundColor = Colors.BRAND_DARK;
        this.nameLabel.textColor = Colors.WHITE;
        this.countLabel.textColor = Colors.WHITE;
    }

    public clicked(): void {
        // override
        if (this.data) {
            this.data.selected = !this.data.selected;
        }
    }

    protected dataChanged(): void {
        if (this.data) {
            this.nameLabel.text = this.data.label;
            this.countLabel.text = this.data.count.toString();
            this.linkContainer.href = this.data.href;
            this.data.addEventListener('changed', this.updateProperties.bind(this));
        }
    }

    private updateProperties(): void {
        if (this.data) {
            if (this.data.selected) {
                this.backgroundColor = Colors.BRAND;
                this.nameLabel.textColor = Colors.WHITE;
                this.countLabel.textColor = Colors.WHITE;
            } else {
                this.backgroundColor = null;
                this.nameLabel.textColor = Colors.NEUTRAL_600;
                this.countLabel.textColor = Colors.NEUTRAL_600;
            }
            this.linkContainer.href = this.data.href;
        }
    }

    private _linkContainer!: ILinkContainer;
    private get linkContainer(): ILinkContainer {
        if (!this._linkContainer) {
            this._linkContainer = new LinkContainer();
            this._linkContainer.percentWidth = 100;
            this._linkContainer.height = 40;
            this._linkContainer.addElements([this.nameLabel, this.countLabel]);
        }
        return this._linkContainer;
    }

    private _nameLabel!: ILabelElement;
    private get nameLabel(): ILabelElement {
        if (!this._nameLabel) {
            this._nameLabel = new MediumLabel(16, Colors.NEUTRAL_600);
            this._nameLabel.left = 12;
            this._nameLabel.alignVertical = 'middle';
        }
        return this._nameLabel;
    }

    private _countLabel!: ILabelElement;
    private get countLabel(): ILabelElement {
        if (!this._countLabel) {
            this._countLabel = new MediumLabel(16, Colors.NEUTRAL_600);
            this._countLabel.right = 12;
            this._countLabel.alignVertical = 'middle';
        }
        return this._countLabel;
    }
}
customElements.define('computer-destination-link-renderer', ComputerDestinationLinkRenderer);
