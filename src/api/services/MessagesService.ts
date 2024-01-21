/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageSerializerPost } from '../models/MessageSerializerPost';
import type { MessageSerializerPut } from '../models/MessageSerializerPut';
import type { MessageSerializerRead } from '../models/MessageSerializerRead';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MessagesService {
    /**
     * Return a list of all messages
     * @returns MessageSerializerRead Success
     * @throws ApiError
     */
    public static messagesGetAllMessages({
        userId1,
        userId2,
    }: {
        userId1?: number,
        userId2?: number,
    }): CancelablePromise<Array<MessageSerializerRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/messages',
            query: {
                'user_id_1': userId1,
                'user_id_2': userId2,
            },
            errors: {
                404: `Not found`,
            },
        });
    }
    /**
     * Create a new message
     * @returns MessageSerializerRead Created
     * @throws ApiError
     */
    public static messagesCreateMessage({
        requestBody,
    }: {
        requestBody: MessageSerializerPost,
    }): CancelablePromise<MessageSerializerRead> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/messages',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Return a message by his id
     * @returns MessageSerializerRead Success
     * @throws ApiError
     */
    public static messagesGetMessageById({
        id,
    }: {
        id: number,
    }): CancelablePromise<MessageSerializerRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/messages/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not found`,
            },
        });
    }
    /**
     * Update a message by its id
     * @returns MessageSerializerRead Success
     * @throws ApiError
     */
    public static messagesUpdateMessage({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: MessageSerializerPut,
    }): CancelablePromise<MessageSerializerRead> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/messages/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a message by its id
     * @returns void
     * @throws ApiError
     */
    public static messagesDeleteMessage({
        id,
    }: {
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/messages/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not found`,
            },
        });
    }
}
