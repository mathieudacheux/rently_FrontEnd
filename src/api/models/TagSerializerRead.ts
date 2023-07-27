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
 * @interface TagSerializerRead
 */
export interface TagSerializerRead  {
    /**
     * 
     * @type {number}
     * @memberof TagSerializerRead
     */
    tag_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TagSerializerRead
     */
    name?: string;
}

export function TagSerializerReadFromJSON(json: any): TagSerializerRead {
    return {
        'tag_id': !exists(json, 'tag_id') ? undefined : json['tag_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function TagSerializerReadToJSON(value?: TagSerializerRead): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'tag_id': value.tag_id,
        'name': value.name,
    };
}


