/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropertySerializerPost } from '../models/PropertySerializerPost';
import type { PropertySerializerPut } from '../models/PropertySerializerPut';
import type { PropertySerializerRead } from '../models/PropertySerializerRead';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PropertiesService {
    /**
     * Return a list of properties
     * @returns PropertySerializerRead Success
     * @throws ApiError
     */
    public static propertiesGetProperties({
        page,
    }: {
        page?: number,
    }): CancelablePromise<Array<PropertySerializerRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/properties',
            query: {
                'page': page,
            },
        });
    }
    /**
     * Create a new property
     * @returns PropertySerializerRead Created
     * @throws ApiError
     */
    public static propertiesCreateProperty({
        requestBody,
    }: {
        requestBody: PropertySerializerPost,
    }): CancelablePromise<PropertySerializerRead> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/properties',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Return a list of properties by filter
     * @returns PropertySerializerRead Success
     * @throws ApiError
     */
    public static propertiesGetPropertiesByFilter({
        propertyType,
        price,
        surface,
        landSize,
        bathroom,
        kitchen,
        toilet,
        bedroom,
        elevator,
        balcony,
        terrace,
        cellar,
        parking,
        numberRoom,
        pool,
        caretaker,
        fiberDeployed,
        duplex,
        topFloor,
        garage,
        workDone,
        lifeAnnuity,
        groundFloor,
        landSize1,
        garden,
        dpe,
        city,
        zipcode,
        agentId,
    }: {
        propertyType?: number,
        price?: number,
        surface?: string,
        landSize?: string,
        bathroom?: number,
        kitchen?: number,
        toilet?: number,
        bedroom?: number,
        elevator?: boolean,
        balcony?: boolean,
        terrace?: boolean,
        cellar?: boolean,
        parking?: boolean,
        numberRoom?: number,
        pool?: boolean,
        caretaker?: boolean,
        fiberDeployed?: boolean,
        duplex?: boolean,
        topFloor?: boolean,
        garage?: boolean,
        workDone?: boolean,
        lifeAnnuity?: boolean,
        groundFloor?: boolean,
        landSize1?: string,
        garden?: boolean,
        dpe?: number,
        city?: string,
        zipcode?: string,
        agentId?: number,
    }): CancelablePromise<Array<PropertySerializerRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/properties/properties_filter',
            query: {
                'property_type': propertyType,
                'price': price,
                'surface': surface,
                'land_size': landSize,
                'bathroom': bathroom,
                'kitchen': kitchen,
                'toilet': toilet,
                'bedroom': bedroom,
                'elevator': elevator,
                'balcony': balcony,
                'terrace': terrace,
                'cellar': cellar,
                'parking': parking,
                'number_room': numberRoom,
                'pool': pool,
                'caretaker': caretaker,
                'fiber_deployed': fiberDeployed,
                'duplex': duplex,
                'top_floor': topFloor,
                'garage': garage,
                'work_done': workDone,
                'life_annuity': lifeAnnuity,
                'ground_floor': groundFloor,
                'land_size_1': landSize1,
                'garden': garden,
                'dpe': dpe,
                'city': city,
                'zipcode': zipcode,
                'agent_id': agentId,
            },
            errors: {
                404: `Not found`,
            },
        });
    }
    /**
     * Return a list of 6 properties for the home page
     * @returns PropertySerializerRead Success
     * @throws ApiError
     */
    public static propertiesGetPropertiesForHome({
        baseLatitude,
        baseLongitude,
    }: {
        baseLatitude?: number,
        baseLongitude?: number,
    }): CancelablePromise<Array<PropertySerializerRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/properties/properties_home',
            query: {
                'base_latitude': baseLatitude,
                'base_longitude': baseLongitude,
            },
        });
    }
    /**
     * Return a property by his id
     * @returns PropertySerializerRead Success
     * @throws ApiError
     */
    public static propertiesGetPropertyById({
        id,
    }: {
        id: number,
    }): CancelablePromise<PropertySerializerRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/properties/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a property by its id
     * @returns PropertySerializerRead Success
     * @throws ApiError
     */
    public static propertiesUpdateProperty({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: PropertySerializerPut,
    }): CancelablePromise<PropertySerializerRead> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/properties/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a property by its id
     * @returns void
     * @throws ApiError
     */
    public static propertiesDeleteProperty({
        id,
    }: {
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/properties/{id}',
            path: {
                'id': id,
            },
        });
    }
}
