import CampayaApp from '../CampayaApp';
import NavigationMachine from './NavigationMachine';
import ResponsiveMachine from './ResponsiveMachine';

export default class Machines {
    public constructor(host: CampayaApp) {
        this.responsiveMachine = new ResponsiveMachine(host);
        this.navigationMachine = new NavigationMachine(host);
    }

    private responsiveMachine: ResponsiveMachine;
    private navigationMachine: NavigationMachine;
}
