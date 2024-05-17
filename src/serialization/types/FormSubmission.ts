/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const FormSubmission: core.serialization.ObjectSchema<serializers.FormSubmission.Raw, Webflow.FormSubmission> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        displayName: core.serialization.string().optional(),
        siteId: core.serialization.string().optional(),
        workspaceId: core.serialization.string().optional(),
        dateSubmitted: core.serialization.date().optional(),
        formResponse: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    });

export declare namespace FormSubmission {
    interface Raw {
        id?: string | null;
        displayName?: string | null;
        siteId?: string | null;
        workspaceId?: string | null;
        dateSubmitted?: string | null;
        formResponse?: Record<string, unknown> | null;
    }
}
