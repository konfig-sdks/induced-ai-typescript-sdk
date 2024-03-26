/*
Autonomous API

Building the next evolution of actionable AI.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface ExtractionFromUrlRequest
 */
export interface ExtractionFromUrlRequest {
    /**
     * 
     * @type {string}
     * @memberof ExtractionFromUrlRequest
     */
    'url'?: string;
    /**
     * 
     * @type {string}
     * @memberof ExtractionFromUrlRequest
     */
    'query'?: string;
    /**
     * 
     * @type {string}
     * @memberof ExtractionFromUrlRequest
     */
    'columns'?: string;
    /**
     * 
     * @type {number}
     * @memberof ExtractionFromUrlRequest
     */
    'limit'?: number;
    /**
     * 
     * @type {string}
     * @memberof ExtractionFromUrlRequest
     */
    'format'?: ExtractionFromUrlRequestFormatEnum;
}

type ExtractionFromUrlRequestFormatEnum = 'json' | 'csv' | 'markdown'

