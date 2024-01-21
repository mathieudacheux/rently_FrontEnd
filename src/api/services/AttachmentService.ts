/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AttachmentService {
    /**
     * Create the image in the folder 'id' in the folder 'folder'
     * @returns void
     * @throws ApiError
     */
    public static attachmentUploadFileImg({
        folder,
        id,
        formData,
    }: {
        folder: string,
        id: number,
        formData?: {
            file?: Blob;
        },
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/file/img/{folder}/{id}',
            path: {
                'folder': folder,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `<File too long | Too many parts | Too many files | Field name too long | Field value too long | Too many fields | Unexpected field>  [fieldName] Example: File too long file1`,
            },
        });
    }
    /**
     * Create the pdf in the folder 'id' in the folder 'folder'
     * @returns void
     * @throws ApiError
     */
    public static attachmentUploadFilePdf({
        folder,
        id,
        formData,
    }: {
        folder: string,
        id: number,
        formData?: {
            file?: Blob;
        },
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/file/pdf/{folder}/{id}',
            path: {
                'folder': folder,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `<File too long | Too many parts | Too many files | Field name too long | Field value too long | Too many fields | Unexpected field>  [fieldName] Example: File too long file1`,
            },
        });
    }
    /**
     * Return all the images in the folder 'id'
     * @returns any Success
     * @throws ApiError
     */
    public static attachmentGetAllFolderImg({
        id,
    }: {
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/file/img/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Return all the pdf in the folder 'id'
     * @returns any Success
     * @throws ApiError
     */
    public static attachmentGetAllFolderPdf({
        id,
    }: {
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/file/pdf/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Return the image 'file' in the folder 'id'
     * @returns any Success
     * @throws ApiError
     */
    public static attachmentGetOneFileImg({
        id,
        file,
    }: {
        id: number,
        file: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/file/img/{id}/{file}',
            path: {
                'id': id,
                'file': file,
            },
        });
    }
    /**
     * Return the pdf 'file' in the folder 'id'
     * @returns any Success
     * @throws ApiError
     */
    public static attachmentGetOneFilePdf({
        id,
        file,
    }: {
        id: number,
        file: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/file/pdf/{id}/{file}',
            path: {
                'id': id,
                'file': file,
            },
        });
    }
}
