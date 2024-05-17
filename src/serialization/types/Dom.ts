/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const Dom: core.serialization.ObjectSchema<serializers.Dom.Raw, Webflow.Dom> = core.serialization.object({
    pageId: core.serialization.string().optional(),
    nodes: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).Node)).optional(),
    pagination: core.serialization.lazyObject(async () => (await import("..")).Pagination).optional(),
});

export declare namespace Dom {
    interface Raw {
        pageId?: string | null;
        nodes?: serializers.Node.Raw[] | null;
        pagination?: serializers.Pagination.Raw | null;
    }
}