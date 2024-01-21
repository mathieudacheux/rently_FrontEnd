/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthentificationsService {
    /**
     * Login an user and return a token
     * @returns any Success
     * @throws ApiError
     */
    public static authentificationsLogin({
        requestBody,
    }: {
        requestBody?: {
            mail?: string;
            password?: string;
        },
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/authentifications',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
