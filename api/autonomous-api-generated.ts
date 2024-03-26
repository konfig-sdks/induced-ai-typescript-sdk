/* tslint:disable */
/* eslint-disable */
/*
Autonomous API

Building the next evolution of actionable AI.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AutonomousGetResultResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * AutonomousApi - axios parameter creator
 * @export
 */
export const AutonomousApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get Autonomous Task Result
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getResult: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getResult', 'id', id)
            const localVarPath = `/autonomous/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "x-api-key", keyParamName: "apiKeyAuth", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/autonomous/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Stop an Autonomous Task
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        terminateTask: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('terminateTask', 'id', id)
            const localVarPath = `/autonomous/{id}/stop`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "x-api-key", keyParamName: "apiKeyAuth", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/autonomous/{id}/stop',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AutonomousApi - functional programming interface
 * @export
 */
export const AutonomousApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AutonomousApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get Autonomous Task Result
         * @param {AutonomousApiGetResultRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getResult(requestParameters: AutonomousApiGetResultRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AutonomousGetResultResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getResult(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Stop an Autonomous Task
         * @param {AutonomousApiTerminateTaskRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async terminateTask(requestParameters: AutonomousApiTerminateTaskRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.terminateTask(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AutonomousApi - factory interface
 * @export
 */
export const AutonomousApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AutonomousApiFp(configuration)
    return {
        /**
         * 
         * @summary Get Autonomous Task Result
         * @param {AutonomousApiGetResultRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getResult(requestParameters: AutonomousApiGetResultRequest, options?: AxiosRequestConfig): AxiosPromise<AutonomousGetResultResponse> {
            return localVarFp.getResult(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Stop an Autonomous Task
         * @param {AutonomousApiTerminateTaskRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        terminateTask(requestParameters: AutonomousApiTerminateTaskRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.terminateTask(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getResult operation in AutonomousApi.
 * @export
 * @interface AutonomousApiGetResultRequest
 */
export type AutonomousApiGetResultRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof AutonomousApiGetResult
    */
    readonly id: string
    
}

/**
 * Request parameters for terminateTask operation in AutonomousApi.
 * @export
 * @interface AutonomousApiTerminateTaskRequest
 */
export type AutonomousApiTerminateTaskRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof AutonomousApiTerminateTask
    */
    readonly id: string
    
}

/**
 * AutonomousApiGenerated - object-oriented interface
 * @export
 * @class AutonomousApiGenerated
 * @extends {BaseAPI}
 */
export class AutonomousApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Get Autonomous Task Result
     * @param {AutonomousApiGetResultRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AutonomousApiGenerated
     */
    public getResult(requestParameters: AutonomousApiGetResultRequest, options?: AxiosRequestConfig) {
        return AutonomousApiFp(this.configuration).getResult(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Stop an Autonomous Task
     * @param {AutonomousApiTerminateTaskRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AutonomousApiGenerated
     */
    public terminateTask(requestParameters: AutonomousApiTerminateTaskRequest, options?: AxiosRequestConfig) {
        return AutonomousApiFp(this.configuration).terminateTask(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}