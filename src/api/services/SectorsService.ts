/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SectorSerializerPost } from '../models/SectorSerializerPost';
import type { SectorSerializerPut } from '../models/SectorSerializerPut';
import type { SectorSerializerRead } from '../models/SectorSerializerRead';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SectorsService {
    /**
     * Return a list of all sectors
     * @returns SectorSerializerRead Success
     * @throws ApiError
     */
    public static sectorsGetAllAgencies(): CancelablePromise<Array<SectorSerializerRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sectors',
        });
    }
    /**
     * Create a new sector
     * @returns SectorSerializerRead Created
     * @throws ApiError
     */
    public static sectorsCreateSector({
        requestBody,
    }: {
        requestBody: SectorSerializerPost,
    }): CancelablePromise<SectorSerializerRead> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sectors',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Return a sector by his id
     * @returns SectorSerializerRead Success
     * @throws ApiError
     */
    public static sectorsGetSectorById({
        id,
    }: {
        id: number,
    }): CancelablePromise<SectorSerializerRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sectors/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a sector by its id
     * @returns SectorSerializerRead Success
     * @throws ApiError
     */
    public static sectorsUpdateSector({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: SectorSerializerPut,
    }): CancelablePromise<SectorSerializerRead> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sectors/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a sector by its id
     * @returns void
     * @throws ApiError
     */
    public static sectorsDeleteSector({
        id,
    }: {
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sectors/{id}',
            path: {
                'id': id,
            },
        });
    }
}
