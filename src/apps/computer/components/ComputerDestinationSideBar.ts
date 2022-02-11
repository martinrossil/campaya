import { DataContainer, VerticalLayout } from 'enta';
import Model from '../../../state/Model';
import Colors from '../../../theme/Colors';
import Shadows from '../../../theme/Shadows';
import DestinationLink from '../../../vo/DestinationLink';
import ComputerDestinationLinkRenderer from './ComputerDestinationLinkRenderer';

export default class ComputerDetinationsSideBar extends DataContainer<DestinationLink> {
    public constructor() {
        super();
        this.name = 'ComputerDetinationsSideBar';
        this.width = 272;
        this.percentHeight = 100;
        this.paddingTop = 12;
        this.paddingX = 8;
        this.zIndex = 1;
        this.backgroundColor = Colors.WHITE;
        this.addFilter(Shadows.BOX_SHADOW_RIGHT_1);
        this.addFilter(Shadows.BOX_SHADOW_RIGHT_2);
        this.layout = new VerticalLayout(8);
        this.DataRendererClass = ComputerDestinationLinkRenderer;
        this.dataProvider = Model.destinations;
    }
}
customElements.define('computer-destinations-side-bar', ComputerDetinationsSideBar);
