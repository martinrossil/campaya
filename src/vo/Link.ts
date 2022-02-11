import { EventDispatcher } from 'enta';

export default class Link extends EventDispatcher {
    public constructor(label: string, href: string) {
        super();
        this.label = label;
        this.href = href;
    }

    public label: string;
    public href;

    private _selected = false;
    public set selected (value: boolean) {
        if (this._selected === value) {
            return;
        }
        this._selected = value;
        this.notifyChanged();
    }

    public get selected(): boolean {
        return this._selected;
    }

    private notifyChanged(): void {
        this.dispatch('changed');
    }
}
