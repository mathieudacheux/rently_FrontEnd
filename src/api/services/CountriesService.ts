/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountryModel } from '../models/CountryModel';
import type { CountryModelCreation } from '../models/CountryModelCreation';
import type { CountryModelRead } from '../models/CountryModelRead';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CountriesService {
    /**
     * Return a list of all countries
     * @returns CountryModelRead Success
     * @throws ApiError
     */
    public static countriesGetAllCountries({
        name,
    }: {
        name?: string,
    }): CancelablePromise<Array<CountryModelRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/countries',
            query: {
                'name': name,
            },
        });
    }
    /**
     * Create a new country
     * @returns CountryModelRead Created
     * @throws ApiError
     */
    public static countriesCreateCountry({
        requestBody,
    }: {
        requestBody: CountryModelCreation,
    }): CancelablePromise<CountryModelRead> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/countries',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Return a country by his id
     * @returns CountryModelRead Success
     * @throws ApiError
     */
    public static countriesGetCountryById({
        id,
    }: {
        id: number,
    }): CancelablePromise<CountryModelRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/countries/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a country by its id
     * @returns CountryModel Success
     * @throws ApiError
     */
    public static countriesUpdateCountry({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: CountryModel,
    }): CancelablePromise<CountryModel> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/countries/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a country by its id
     * @returns void
     * @throws ApiError
     */
    public static countriesDeleteCountry({
        id,
    }: {
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/countries/{id}',
            path: {
                'id': id,
            },
        });
    }
}
