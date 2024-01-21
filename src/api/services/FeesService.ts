/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FeeSerializerPut } from '../models/FeeSerializerPut';
import type { FeeSerializerRead } from '../models/FeeSerializerRead';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FeesService {
    /**
     * Return a list of all fees
     * @returns FeeSerializerRead Success
     * @throws ApiError
     */
    public static feesGetAllFees(): CancelablePromise<Array<FeeSerializerRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fees',
        });
    }
    /**
     * Create a new fee
     * @returns FeeSerializerRead Created
     * @throws ApiError
     */
    public static feesCreateFee({
        requestBody,
    }: {
        requestBody: FeeSerializerPut,
    }): CancelablePromise<FeeSerializerRead> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/fees',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Return a fee by his id
     * @returns FeeSerializerRead Success
     * @throws ApiError
     */
    public static feesGetFeeById({
        id,
    }: {
        id: number,
    }): CancelablePromise<FeeSerializerRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/fees/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a fee by its id
     * @returns FeeSerializerRead Success
     * @throws ApiError
     */
    public static feesUpdateFee({
        id,
        requestBody,
    }: {
        id: number,
        requestBody: FeeSerializerPut,
    }): CancelablePromise<FeeSerializerRead> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/fees/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a fee by its id
     * @returns void
     * @throws ApiError
     */
    public static feesDeleteFee({
        id,
    }: {
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/fees/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not found`,
            },
        });
    }
}
