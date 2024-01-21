/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TagSerializer } from '../models/TagSerializer';
import type { TagSerializerPost } from '../models/TagSerializerPost';
import type { TagSerializerPut } from '../models/TagSerializerPut';
import type { TagSerializerRead } from '../models/TagSerializerRead';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TagsService {
    /**
     * Return a list of all tags
     * @returns TagSerializerRead Success
     * @throws ApiError
     */
    public static tagsGetAllTag(): CancelablePromise<Array<TagSerializerRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tags',
        });
    }
    /**
     * Create a new tag
     * @returns TagSerializerRead Created
     * @throws ApiError
     */
    public static tagsCreateTag({
        requestBody,
    }: {
        requestBody: TagSerializerPost,
    }): CancelablePromise<TagSerializerRead> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tags',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Return a tag by his id
     * @returns TagSerializerRead Success
     * @throws ApiError
     */
    public static tagsGetTagById({
        id,
    }: {
        id: number,
    }): CancelablePromise<TagSerializerRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tags/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a tag by its id
     * @returns TagSerializer Success
     * @throws ApiError
     */
    public static tagsUpdateTag({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: TagSerializerPut,
    }): CancelablePromise<TagSerializer> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/tags/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a Tag by its id
     * @returns void
     * @throws ApiError
     */
    public static tagsDeleteTag({
        id,
    }: {
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/tags/{id}',
            path: {
                'id': id,
            },
        });
    }
}
