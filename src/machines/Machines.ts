import CampayaApp from '../CampayaApp';
import ResponsiveMachine from './ResponsiveMachine';

export default class Machines {
    public constructor(host: CampayaApp) {
        this.responsiveMachine = new ResponsiveMachine(host);
    }

    private responsiveMachine: ResponsiveMachine;
}
