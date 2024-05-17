/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const Domain: core.serialization.ObjectSchema<serializers.Domain.Raw, Webflow.Domain> =
    core.serialization.object({
        id: core.serialization.string(),
        url: core.serialization.string().optional(),
    });

export declare namespace Domain {
    interface Raw {
        id: string;
        url?: string | null;
    }
}