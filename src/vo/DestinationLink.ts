import Link from './Link';

export default class DestinationLink extends Link {
    public constructor(label: string, href: string, count: number) {
        super(label, href);
        this.count = count;
    }

    public count: number;
}
