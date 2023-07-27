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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PropertyTypeSerializerRead
 */
export interface PropertyTypeSerializerRead  {
    /**
     * 
     * @type {number}
     * @memberof PropertyTypeSerializerRead
     */
    property_type_id?: number;
    /**
     * 
     * @type {string}
     * @memberof PropertyTypeSerializerRead
     */
    label?: string;
}

export function PropertyTypeSerializerReadFromJSON(json: any): PropertyTypeSerializerRead {
    return {
        'property_type_id': !exists(json, 'property_type_id') ? undefined : json['property_type_id'],
        'label': !exists(json, 'label') ? undefined : json['label'],
    };
}

export function PropertyTypeSerializerReadToJSON(value?: PropertyTypeSerializerRead): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'property_type_id': value.property_type_id,
        'label': value.label,
    };
}


