/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PermissionSerializerPost } from '../models/PermissionSerializerPost';
import type { PermissionSerializerPut } from '../models/PermissionSerializerPut';
import type { PermissionSerializerRead } from '../models/PermissionSerializerRead';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PermissionsService {
    /**
     * Return a list of all permissions
     * @returns PermissionSerializerRead Success
     * @throws ApiError
     */
    public static permissionsGetAllPermissions(): CancelablePromise<Array<PermissionSerializerRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/permissions',
            errors: {
                404: `Not found`,
            },
        });
    }
    /**
     * Create a new permission
     * @returns PermissionSerializerRead Created
     * @throws ApiError
     */
    public static permissionsCreatePermission({
        requestBody,
    }: {
        requestBody: PermissionSerializerPost,
    }): CancelablePromise<PermissionSerializerRead> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/permissions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Return a permission by his id
     * @returns PermissionSerializerRead Success
     * @throws ApiError
     */
    public static permissionsGetPermissionById({
        id,
    }: {
        id: number,
    }): CancelablePromise<PermissionSerializerRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/permissions/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not found`,
            },
        });
    }
    /**
     * Update a permission by its id
     * @returns PermissionSerializerRead Success
     * @throws ApiError
     */
    public static permissionsUpdatePermission({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: PermissionSerializerPut,
    }): CancelablePromise<PermissionSerializerRead> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/permissions/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Delete a permission by its id
     * @returns void
     * @throws ApiError
     */
    public static permissionsDeletePermission({
        id,
    }: {
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/permissions/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
}
