// tslint:disable
/**
 * Api documentation
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { HttpMethods, QueryConfig, ResponseBody, ResponseText } from 'redux-query';
import * as runtime from '../runtime';
import {
    BookmarkSerializerPost,
    BookmarkSerializerPostFromJSON,
    BookmarkSerializerPostToJSON,
    BookmarkSerializerPut,
    BookmarkSerializerPutFromJSON,
    BookmarkSerializerPutToJSON,
    BookmarkSerializerRead,
    BookmarkSerializerReadFromJSON,
    BookmarkSerializerReadToJSON,
    PropertySerializerRead,
    PropertySerializerReadFromJSON,
    PropertySerializerReadToJSON,
} from '../models';

export interface BookmarksCreateBookmarkRequest {
    bookmarkSerializerPost: BookmarkSerializerPost;
}

export interface BookmarksDeleteBookmarkRequest {
    id: number;
}

export interface BookmarksGetBookmarkByIdRequest {
    id: number;
}

export interface BookmarksGetBookmarkByUserIdRequest {
    id: number;
}

export interface BookmarksUpdateBookmarkRequest {
    id: number;
    bookmarkSerializerPut?: BookmarkSerializerPut;
}


/**
 * Create a new bookmark
 */
function bookmarksCreateBookmarkRaw<T>(requestParameters: BookmarksCreateBookmarkRequest, requestConfig: runtime.TypedQueryConfig<T, BookmarkSerializerRead> = {}): QueryConfig<T> {
    if (requestParameters.bookmarkSerializerPost === null || requestParameters.bookmarkSerializerPost === undefined) {
        throw new runtime.RequiredError('bookmarkSerializerPost','Required parameter requestParameters.bookmarkSerializerPost was null or undefined when calling bookmarksCreateBookmark.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/bookmarks`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters || BookmarkSerializerPostToJSON(requestParameters.bookmarkSerializerPost),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(BookmarkSerializerReadFromJSON(body), text);
    }

    return config;
}

/**
* Create a new bookmark
*/
export function bookmarksCreateBookmark<T>(requestParameters: BookmarksCreateBookmarkRequest, requestConfig?: runtime.TypedQueryConfig<T, BookmarkSerializerRead>): QueryConfig<T> {
    return bookmarksCreateBookmarkRaw(requestParameters, requestConfig);
}

/**
 * Delete a bookmark by its id
 */
function bookmarksDeleteBookmarkRaw<T>(requestParameters: BookmarksDeleteBookmarkRequest, requestConfig: runtime.TypedQueryConfig<T, void> = {}): QueryConfig<T> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
        throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling bookmarksDeleteBookmark.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/bookmarks/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'DELETE',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
    }

    return config;
}

/**
* Delete a bookmark by its id
*/
export function bookmarksDeleteBookmark<T>(requestParameters: BookmarksDeleteBookmarkRequest, requestConfig?: runtime.TypedQueryConfig<T, void>): QueryConfig<T> {
    return bookmarksDeleteBookmarkRaw(requestParameters, requestConfig);
}

/**
 * Return a list of all bookmarks
 */
function bookmarksGetAllBookmarksRaw<T>( requestConfig: runtime.TypedQueryConfig<T, Array<BookmarkSerializerRead>> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/bookmarks`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'GET',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(body.map(BookmarkSerializerReadFromJSON), text);
    }

    return config;
}

/**
* Return a list of all bookmarks
*/
export function bookmarksGetAllBookmarks<T>( requestConfig?: runtime.TypedQueryConfig<T, Array<BookmarkSerializerRead>>): QueryConfig<T> {
    return bookmarksGetAllBookmarksRaw( requestConfig);
}

/**
 * Return a bookmark by his id
 */
function bookmarksGetBookmarkByIdRaw<T>(requestParameters: BookmarksGetBookmarkByIdRequest, requestConfig: runtime.TypedQueryConfig<T, BookmarkSerializerRead> = {}): QueryConfig<T> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
        throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling bookmarksGetBookmarkById.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/bookmarks/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'GET',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(BookmarkSerializerReadFromJSON(body), text);
    }

    return config;
}

/**
* Return a bookmark by his id
*/
export function bookmarksGetBookmarkById<T>(requestParameters: BookmarksGetBookmarkByIdRequest, requestConfig?: runtime.TypedQueryConfig<T, BookmarkSerializerRead>): QueryConfig<T> {
    return bookmarksGetBookmarkByIdRaw(requestParameters, requestConfig);
}

/**
 * Return all properties of a user by his id
 */
function bookmarksGetBookmarkByUserIdRaw<T>(requestParameters: BookmarksGetBookmarkByUserIdRequest, requestConfig: runtime.TypedQueryConfig<T, PropertySerializerRead> = {}): QueryConfig<T> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
        throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling bookmarksGetBookmarkByUserId.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/bookmarks/user/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'GET',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(PropertySerializerReadFromJSON(body), text);
    }

    return config;
}

/**
* Return all properties of a user by his id
*/
export function bookmarksGetBookmarkByUserId<T>(requestParameters: BookmarksGetBookmarkByUserIdRequest, requestConfig?: runtime.TypedQueryConfig<T, PropertySerializerRead>): QueryConfig<T> {
    return bookmarksGetBookmarkByUserIdRaw(requestParameters, requestConfig);
}

/**
 * Update a bookmark by its id
 */
function bookmarksUpdateBookmarkRaw<T>(requestParameters: BookmarksUpdateBookmarkRequest, requestConfig: runtime.TypedQueryConfig<T, BookmarkSerializerRead> = {}): QueryConfig<T> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
        throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling bookmarksUpdateBookmark.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/bookmarks/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'PUT',
            headers: headerParameters,
        },
        body: queryParameters || BookmarkSerializerPutToJSON(requestParameters.bookmarkSerializerPut),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(BookmarkSerializerReadFromJSON(body), text);
    }

    return config;
}

/**
* Update a bookmark by its id
*/
export function bookmarksUpdateBookmark<T>(requestParameters: BookmarksUpdateBookmarkRequest, requestConfig?: runtime.TypedQueryConfig<T, BookmarkSerializerRead>): QueryConfig<T> {
    return bookmarksUpdateBookmarkRaw(requestParameters, requestConfig);
}

