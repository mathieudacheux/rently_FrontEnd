/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressSerializerPost } from '../models/AddressSerializerPost';
import type { AddressSerializerPut } from '../models/AddressSerializerPut';
import type { AddressSerializerRead } from '../models/AddressSerializerRead';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AddressesService {
    /**
     * Return a list of all addresses
     * @returns AddressSerializerRead Success
     * @throws ApiError
     */
    public static addressesGetAllAddresses(): CancelablePromise<Array<AddressSerializerRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/addresses',
        });
    }
    /**
     * Create a new address
     * @returns AddressSerializerRead Created
     * @throws ApiError
     */
    public static addressesCreateAddress({
        requestBody,
    }: {
        requestBody: AddressSerializerPost,
    }): CancelablePromise<AddressSerializerRead> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/addresses',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Return a address by his id
     * @returns AddressSerializerRead Success
     * @throws ApiError
     */
    public static addressesGetAddressById({
        id,
    }: {
        id: number,
    }): CancelablePromise<AddressSerializerRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/addresses/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a address by its id
     * @returns AddressSerializerRead Success
     * @throws ApiError
     */
    public static addressesUpdateAddress({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: AddressSerializerPut,
    }): CancelablePromise<AddressSerializerRead> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/addresses/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a address by its id
     * @returns void
     * @throws ApiError
     */
    public static addressesDeleteAddress({
        id,
    }: {
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/addresses/{id}',
            path: {
                'id': id,
            },
        });
    }
}
