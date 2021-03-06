import { ArrayCollection, IArrayCollection } from 'enta';
import DestinationLink from '../vo/DestinationLink';
import Property from '../vo/Property';

export default class Model {
    private static _properties: IArrayCollection<Property>;
    public static get properties(): IArrayCollection<Property> {
        if (!this._properties) {
            const properties: Array<Property> = [
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1),
                new Property('', '', 6, 3, 1)
            ];
            this._properties = new ArrayCollection(properties);
        }
        return this._properties;
    }

    private static _destinations: IArrayCollection<DestinationLink>;
    public static get destinations(): IArrayCollection<DestinationLink> {
        if (!this._destinations) {
            const destinationLinks: Array<DestinationLink> = [
                /* new DestinationLink('Bornholm', '/bornholm', 1374),
                new DestinationLink('Vesterhavet', '/vesterhavet', 9038),
                new DestinationLink('Nordjylland', '/nordjylland', 3704),
                new DestinationLink('Sj??lland', '/sj??lland', 2722),
                new DestinationLink('Fyn', '/fyn', 694),
                new DestinationLink('Jylland', '/jylland', 14262),
                new DestinationLink('S??nderjylland', '/s??nderjylland', 2670), */
                new DestinationLink('Danmark', '/danmark', 19052),
                new DestinationLink('Finland', '/finland', 2627),
                new DestinationLink('Frankrig', '/frankrig', 11055),
                new DestinationLink('Gr??kenland', '/gr??kenland', 912),
                new DestinationLink('Holland', '/holland', 6345),
                new DestinationLink('Italien', '/italien', 12584),
                new DestinationLink('Kroatien', '/kroatien', 12747),
                new DestinationLink('Norge', '/norge', 2118),
                new DestinationLink('Portugal', '/portugal', 503),
                new DestinationLink('Schweiz', '/schweiz', 3507),
                new DestinationLink('Spanien', '/spanien', 7407),
                new DestinationLink('Storbritannien', '/storbritannien', 1034),
                new DestinationLink('Sverige', '/sverige', 3793),
                new DestinationLink('Tyskland', '/tyskland', 8609),
                new DestinationLink('USA', '/usa', 181),
                new DestinationLink('??strig', '/??strig', 4653)
            ];
            this._destinations = new ArrayCollection(destinationLinks);
        }
        return this._destinations;
    }
}
