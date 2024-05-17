/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of access group based on how it was assigned to the user.
 *
 * - `admin` - Assigned to the user via API or in the designer
 * - `ecommerce` - Assigned to the user via an ecommerce purchase
 */
export type UserAccessGroupsItemType = "admin" | "ecommerce";

export const UserAccessGroupsItemType = {
    Admin: "admin",
    Ecommerce: "ecommerce",
} as const;
