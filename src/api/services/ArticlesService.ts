/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArticleSerializer } from '../models/ArticleSerializer';
import type { ArticleSerializerPost } from '../models/ArticleSerializerPost';
import type { ArticleSerializerPut } from '../models/ArticleSerializerPut';
import type { ArticleSerializerRead } from '../models/ArticleSerializerRead';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ArticlesService {
    /**
     * Return a list of all articles
     * @returns ArticleSerializerRead Success
     * @throws ApiError
     */
    public static articlesGetAllArticles({
        page,
    }: {
        page?: number,
    }): CancelablePromise<Array<ArticleSerializerRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/articles',
            query: {
                'page': page,
            },
        });
    }
    /**
     * Create a new article
     * @returns ArticleSerializerRead Created
     * @throws ApiError
     */
    public static articlesCreateArticle({
        requestBody,
    }: {
        requestBody: ArticleSerializerPost,
    }): CancelablePromise<ArticleSerializerRead> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/articles',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Return a list of articles by filter
     * @returns ArticleSerializerRead Success
     * @throws ApiError
     */
    public static articlesGetArticlesByFilter({
        name,
        tagId,
        userId,
        home,
    }: {
        name?: string,
        tagId?: number,
        userId?: number,
        home?: boolean,
    }): CancelablePromise<Array<ArticleSerializerRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/articles/articles_filter',
            query: {
                'name': name,
                'tag_id': tagId,
                'user_id': userId,
                'home': home,
            },
            errors: {
                404: `Not found`,
            },
        });
    }
    /**
     * Return a article by his id
     * @returns ArticleSerializerRead Success
     * @throws ApiError
     */
    public static articlesGetArticleById({
        id,
    }: {
        id: number,
    }): CancelablePromise<ArticleSerializerRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/articles/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not found`,
            },
        });
    }
    /**
     * Update a article by its id
     * @returns ArticleSerializer Success
     * @throws ApiError
     */
    public static articlesUpdateArticle({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: ArticleSerializerPut,
    }): CancelablePromise<ArticleSerializer> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/articles/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found`,
            },
        });
    }
    /**
     * Delete a article by its id
     * @returns void
     * @throws ApiError
     */
    public static articlesDeleteArticle({
        id,
    }: {
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/articles/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not found`,
            },
        });
    }
}
