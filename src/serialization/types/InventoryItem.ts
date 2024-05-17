/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const InventoryItem: core.serialization.ObjectSchema<serializers.InventoryItem.Raw, Webflow.InventoryItem> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        quantity: core.serialization.number().optional(),
        inventoryType: core.serialization.lazy(async () => (await import("..")).InventoryItemInventoryType).optional(),
    });

export declare namespace InventoryItem {
    interface Raw {
        id?: string | null;
        quantity?: number | null;
        inventoryType?: serializers.InventoryItemInventoryType.Raw | null;
    }
}
