import { ColumnLayout, DataContainer } from 'enta';
import Model from '../../../state/Model';
import Property from '../../../vo/Property';
import PropertyRenderer from './PropertyRenderer';

export default class ComputerPropertiesGrid extends DataContainer<Property> {
    public constructor() {
        super();
        this.name = 'ComputerPropertiesGrid';
        this.padding = 32;
        this.percentWidth = this.percentHeight = 100;
        this.layout = new ColumnLayout(272, 6, 32);
        this.DataRendererClass = PropertyRenderer;
        this.dataProvider = Model.properties;
    }
}
customElements.define('computer-properties-grid', ComputerPropertiesGrid);
