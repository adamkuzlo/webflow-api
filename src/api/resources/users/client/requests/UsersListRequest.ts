/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../../../..";

/**
 * @example
 *     {}
 */
export interface UsersListRequest {
    /**
     * Offset used for pagination if the results have more than limit records
     */
    offset?: number;
    /**
     * Maximum number of records to be returned (max limit: 100)
     */
    limit?: number;
    /**
     * Sort string to use when ordering users
     *
     * Example(`CreatedOn`, `Email`, `Status`, `LastLogin`, `UpdatedOn`).
     *
     * Can be prefixed with a `-` to reverse the sort (ex. `-CreatedOn`)
     */
    sort?: Webflow.UsersListRequestSort;
}