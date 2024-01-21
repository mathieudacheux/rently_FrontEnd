/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StatusSerializerPost } from '../models/StatusSerializerPost';
import type { StatusSerializerPut } from '../models/StatusSerializerPut';
import type { StatusSerializerRead } from '../models/StatusSerializerRead';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StatusesService {
    /**
     * Return a list of all statuses
     * @returns StatusSerializerRead Success
     * @throws ApiError
     */
    public static statusesGetAllStatus(): CancelablePromise<Array<StatusSerializerRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/statuses',
        });
    }
    /**
     * Create a new status
     * @returns StatusSerializerRead Created
     * @throws ApiError
     */
    public static statusesCreateStatus({
        requestBody,
    }: {
        requestBody: StatusSerializerPost,
    }): CancelablePromise<StatusSerializerRead> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/statuses',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Return a status by his id
     * @returns StatusSerializerRead Success
     * @throws ApiError
     */
    public static statusesGetStatusById({
        id,
    }: {
        id: number,
    }): CancelablePromise<StatusSerializerRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/statuses/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a status by its id
     * @returns StatusSerializerRead Success
     * @throws ApiError
     */
    public static statusesUpdateStatus({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: StatusSerializerPut,
    }): CancelablePromise<StatusSerializerRead> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/statuses/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a status by its id
     * @returns void
     * @throws ApiError
     */
    public static statusesDeleteStatus({
        id,
    }: {
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/statuses/{id}',
            path: {
                'id': id,
            },
        });
    }
}
