/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "..";

/**
 * A variant/option type for a SKU
 */
export interface SkuPropertyList {
    /** Unique identifier for a collection of Product Variants */
    id: string;
    /** Name of the collection of Product Variants */
    name: string;
    /** The individual Product variants that are contained within the collection */
    enum: Webflow.SkuPropertyListEnumItem[];
}