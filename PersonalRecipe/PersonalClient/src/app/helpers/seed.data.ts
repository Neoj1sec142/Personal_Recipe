import { Chef } from "../models/chef.model";
import { Item } from "../models/item.model";
import { MeasurementType } from "../models/meaurement-type.model";

export const items: Item[] = [
    { name: 'Corrieander', description: 'Common Spice' },
    { name: 'Garlic', description: 'Common Spice' },
    { name: 'Onion Powder', description: 'Common Spice' },
    { name: 'Chili Powder', description: 'Common Spice' },
    { name: 'Black Pepper', description: 'Common Spice' },
    { name: 'Table Salt', description: 'Common Spice' },
    { name: 'Brown Sugar', description: 'Sweets' },
    { name: 'White Sugar', description: 'Sweets' },
    { name: 'Worechestier Sauce', description: 'Steak Sauce' },
    { name: 'Cilantro', description: 'Herb' }
];

export const mts: MeasurementType[] = [
    { name: 'Grams', description: 'g.' },
    { name: 'Milligrams', description: 'mg.' },
    { name: 'Ounces', description: 'oz.' },
    { name: 'Pounds', description: 'lbs.' },
    { name: 'Fluid Ounces', description: 'fl.' },
    { name: 'Cups', description: 'c.' },
    { name: 'Teaspoons', description: 'ts.' },
    { name: 'Tablespoon', description: 'tbs.' },
    { name: 'Pint', description: 'pt.' },
    { name: 'Gallon', description: 'gal.' }
];

export const chefs: Chef[] = [
    { name: "NEO" },
    { name: "MEREBEAR" },
    { name: "MOMMA HARMON" },
    { name: "OLDMAN HARMON" },
    { name: "MOMMA SWANSON" },
    { name: "OLDMAN SWANSON" },
    { name: "GMA HARMON" },
    { name: "GMA SWANSON" },
    { name: "NIKKI WEAVER" }
]