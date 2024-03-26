/*
Autonomous API

Building the next evolution of actionable AI.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ExtractionFromUrlResponseData } from './extraction-from-url-response-data';

/**
 * 
 * @export
 * @interface ExtractionFromUrlResponse
 */
export interface ExtractionFromUrlResponse {
    /**
     * 
     * @type {boolean}
     * @memberof ExtractionFromUrlResponse
     */
    'success'?: boolean;
    /**
     * 
     * @type {ExtractionFromUrlResponseData}
     * @memberof ExtractionFromUrlResponse
     */
    'data'?: ExtractionFromUrlResponseData;
    /**
     * 
     * @type {string}
     * @memberof ExtractionFromUrlResponse
     */
    'requestId'?: string;
    /**
     * 
     * @type {number}
     * @memberof ExtractionFromUrlResponse
     */
    'timeTaken'?: number;
}
