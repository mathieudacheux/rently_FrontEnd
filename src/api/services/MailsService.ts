/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MailsService {
    /**
     * Send a mail with sendingblue
     * @returns any Created
     * @throws ApiError
     */
    public static mailsConfirmAccountMail({
        requestBody,
    }: {
        requestBody?: {
            id?: number;
        },
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mail/mail_confirm',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Send a mail with sendingblue
     * @returns any Created
     * @throws ApiError
     */
    public static mailsResetPasswordMail({
        requestBody,
    }: {
        requestBody?: {
            id?: number;
        },
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mail/reset_password',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Subscribe to newsletter
     * @returns any Created
     * @throws ApiError
     */
    public static mailsSubscribeNewsletter({
        requestBody,
    }: {
        requestBody?: {
            mail?: string;
        },
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mail/subscribe_newsletter',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
}
