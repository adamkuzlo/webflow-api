/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "..";

export interface Error_ {
    /** Error code */
    code?: string;
    /** Error message */
    message?: string;
    /** Link to more information */
    externalReference?: string;
    /** Array of errors */
    details?: Webflow.ErrorDetailsItem[];
}