/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const AssetFolderList: core.serialization.ObjectSchema<
    serializers.AssetFolderList.Raw,
    Webflow.AssetFolderList
> = core.serialization.object({
    assetFolders: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).AssetFolder))
        .optional(),
    pagination: core.serialization.lazyObject(async () => (await import("..")).Pagination).optional(),
});

export declare namespace AssetFolderList {
    interface Raw {
        assetFolders?: serializers.AssetFolder.Raw[] | null;
        pagination?: serializers.Pagination.Raw | null;
    }
}