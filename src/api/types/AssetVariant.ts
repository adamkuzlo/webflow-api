/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface AssetVariant {
    /** URL of where the asset variant is hosted */
    hostedUrl?: string;
    /** Original file name of the variant */
    originalFileName?: string;
    /** Display name of the variant */
    displayName?: string;
    /** format of the variant */
    format?: string;
    /** Width in pixels */
    width?: number;
    /** Height in pixels */
    height?: number;
    /** Value between 0 and 100 representing the image quality */
    quality?: number;
    /** Any associated validation errors */
    error?: string;
}