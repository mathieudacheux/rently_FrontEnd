/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropertyTypeSerializerRead } from '../models/PropertyTypeSerializerRead';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PropertyTypesService {
    /**
     * Return a list of property types
     * @returns PropertyTypeSerializerRead Success
     * @throws ApiError
     */
    public static propertyTypesGetAllPropertyTypes(): CancelablePromise<Array<PropertyTypeSerializerRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/property_types',
        });
    }
    /**
     * Return a property type by his id
     * @returns PropertyTypeSerializerRead Success
     * @throws ApiError
     */
    public static propertyTypesGetPropertyTypeById({
        id,
    }: {
        id: number,
    }): CancelablePromise<PropertyTypeSerializerRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/property_types/{id}',
            path: {
                'id': id,
            },
        });
    }
}
