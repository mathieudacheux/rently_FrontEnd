/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserSerializerPost } from '../models/UserSerializerPost';
import type { UserSerializerPut } from '../models/UserSerializerPut';
import type { UserSerializerRead } from '../models/UserSerializerRead';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * Return a list of all users
     * @returns UserSerializerRead Success
     * @throws ApiError
     */
    public static usersGetAllUsers({
        page,
    }: {
        page?: number,
    }): CancelablePromise<Array<UserSerializerRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
            query: {
                'page': page,
            },
        });
    }
    /**
     * Create a new user
     * @returns UserSerializerRead Created
     * @throws ApiError
     */
    public static usersSignupUser({
        requestBody,
    }: {
        requestBody?: UserSerializerPost,
    }): CancelablePromise<UserSerializerRead> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Return a list of users by filter
     * @returns UserSerializerRead Success
     * @throws ApiError
     */
    public static usersGetUsersByFilter({
        mail,
        phone,
        name,
        firstname,
        city,
        zipcode,
        agency,
        role,
    }: {
        mail?: string,
        phone?: string,
        name?: string,
        firstname?: string,
        city?: string,
        zipcode?: string,
        agency?: number,
        role?: number,
    }): CancelablePromise<Array<UserSerializerRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/users_filter',
            query: {
                'mail': mail,
                'phone': phone,
                'name': name,
                'firstname': firstname,
                'city': city,
                'zipcode': zipcode,
                'agency': agency,
                'role': role,
            },
        });
    }
    /**
     * Return a user by his id
     * @returns UserSerializerRead Success
     * @throws ApiError
     */
    public static usersGetUserById({
        id,
    }: {
        id: number,
    }): CancelablePromise<UserSerializerRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a user by its id
     * @returns UserSerializerRead Updated
     * @throws ApiError
     */
    public static usersUpdateUser({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: UserSerializerPut,
    }): CancelablePromise<UserSerializerRead> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a user by its id
     * @returns void
     * @throws ApiError
     */
    public static usersDeleteUser({
        id,
    }: {
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{id}',
            path: {
                'id': id,
            },
        });
    }
}
