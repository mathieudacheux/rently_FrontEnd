/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgencySerializer } from '../models/AgencySerializer';
import type { AgencySerializerPost } from '../models/AgencySerializerPost';
import type { AgencySerializerRead } from '../models/AgencySerializerRead';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AgenciesService {
    /**
     * Return a list of all agencies
     * @returns AgencySerializerRead Success
     * @throws ApiError
     */
    public static agenciesGetAllAgencies({
        expanded,
    }: {
        expanded?: boolean,
    }): CancelablePromise<Array<AgencySerializerRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/agencies',
            query: {
                'expanded': expanded,
            },
        });
    }
    /**
     * Create a new agency
     * @returns AgencySerializerRead Created
     * @throws ApiError
     */
    public static agenciesCreateAgency({
        requestBody,
    }: {
        requestBody: AgencySerializerPost,
    }): CancelablePromise<AgencySerializerRead> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/agencies',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Return a list of agencies by filter
     * @returns AgencySerializerRead Success
     * @throws ApiError
     */
    public static agenciesGetAgenciesByFilter({
        city,
        zipcode,
    }: {
        city?: string,
        zipcode?: string,
    }): CancelablePromise<Array<AgencySerializerRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/agencies/agency_filter',
            query: {
                'city': city,
                'zipcode': zipcode,
            },
        });
    }
    /**
     * Return a agency by his id
     * @returns AgencySerializerRead Success
     * @throws ApiError
     */
    public static agenciesGetAgencyById({
        id,
    }: {
        id: number,
    }): CancelablePromise<AgencySerializerRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/agencies/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a agency by its id
     * @returns AgencySerializerRead Success
     * @throws ApiError
     */
    public static agenciesUpdateAgency({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: AgencySerializer,
    }): CancelablePromise<AgencySerializerRead> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/agencies/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a agency by its id
     * @returns void
     * @throws ApiError
     */
    public static agenciesDeleteAgency({
        id,
    }: {
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/agencies/{id}',
            path: {
                'id': id,
            },
        });
    }
}
