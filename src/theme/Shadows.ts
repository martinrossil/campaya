import { BoxShadowFilter, Color, IFilter } from 'enta';

export default class Shadows {
    public static BOX_SHADOW_DOWN_1: IFilter = new BoxShadowFilter(0, 4, 3, NaN, new Color(0, 0, 0, 0.07));
    public static BOX_SHADOW_DOWN_2: IFilter = new BoxShadowFilter(0, 2, 2, NaN, new Color(0, 0, 0, 0.06));
}
