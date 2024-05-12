import { Item } from "./item.model";
import { MeasurementType } from "./meaurement-type.model";

export interface Ingredient{
    id?: number;
    itemId: number;
    item?: Item;
    measurementTypeId: number;
    measurementType?: MeasurementType;
    amount: number;
}