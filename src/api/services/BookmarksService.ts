/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookmarkSerializerPost } from '../models/BookmarkSerializerPost';
import type { BookmarkSerializerPut } from '../models/BookmarkSerializerPut';
import type { BookmarkSerializerRead } from '../models/BookmarkSerializerRead';
import type { PropertySerializerRead } from '../models/PropertySerializerRead';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BookmarksService {
    /**
     * Return a list of all bookmarks
     * @returns BookmarkSerializerRead Success
     * @throws ApiError
     */
    public static bookmarksGetAllBookmarks(): CancelablePromise<Array<BookmarkSerializerRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bookmarks',
        });
    }
    /**
     * Create a new bookmark
     * @returns BookmarkSerializerRead Created
     * @throws ApiError
     */
    public static bookmarksCreateBookmark({
        requestBody,
    }: {
        requestBody: BookmarkSerializerPost,
    }): CancelablePromise<BookmarkSerializerRead> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bookmarks',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Return a bookmark by his id
     * @returns BookmarkSerializerRead Success
     * @throws ApiError
     */
    public static bookmarksGetBookmarkById({
        id,
    }: {
        id: number,
    }): CancelablePromise<BookmarkSerializerRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bookmarks/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a bookmark by its id
     * @returns BookmarkSerializerRead Success
     * @throws ApiError
     */
    public static bookmarksUpdateBookmark({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: BookmarkSerializerPut,
    }): CancelablePromise<BookmarkSerializerRead> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/bookmarks/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a bookmark by its id
     * @returns void
     * @throws ApiError
     */
    public static bookmarksDeleteBookmark({
        id,
    }: {
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/bookmarks/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Return all properties of a user by his id
     * @returns PropertySerializerRead Success
     * @throws ApiError
     */
    public static bookmarksGetBookmarkByUserId({
        id,
    }: {
        id: number,
    }): CancelablePromise<Array<PropertySerializerRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bookmarks/user/{id}',
            path: {
                'id': id,
            },
        });
    }
}
