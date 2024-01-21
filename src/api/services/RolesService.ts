/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RoleSerializer } from '../models/RoleSerializer';
import type { RoleSerializerPost } from '../models/RoleSerializerPost';
import type { RoleSerializerPut } from '../models/RoleSerializerPut';
import type { RoleSerializerRead } from '../models/RoleSerializerRead';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RolesService {
    /**
     * Return a list of all roles
     * @returns RoleSerializer Success
     * @throws ApiError
     */
    public static rolesGetAllRoles({
        name,
    }: {
        name?: string,
    }): CancelablePromise<Array<RoleSerializer>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/roles',
            query: {
                'name': name,
            },
        });
    }
    /**
     * Create a new role
     * @returns RoleSerializerRead Created
     * @throws ApiError
     */
    public static rolesCreateRole({
        requestBody,
    }: {
        requestBody: RoleSerializerPost,
    }): CancelablePromise<RoleSerializerRead> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/roles',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Return a role by his id
     * @returns RoleSerializerRead Success
     * @throws ApiError
     */
    public static rolesGetRoleById({
        id,
    }: {
        id: number,
    }): CancelablePromise<RoleSerializerRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/roles/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a role by its id
     * @returns RoleSerializerRead Success
     * @throws ApiError
     */
    public static rolesUpdateRole({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: RoleSerializerPut,
    }): CancelablePromise<RoleSerializerRead> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/roles/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a role by its id
     * @returns void
     * @throws ApiError
     */
    public static rolesDeleteRole({
        id,
    }: {
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/roles/{id}',
            path: {
                'id': id,
            },
        });
    }
}
