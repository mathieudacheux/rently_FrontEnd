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
 * @interface AgencySerializerRead
 */
export interface AgencySerializerRead  {
    /**
     * 
     * @type {number}
     * @memberof AgencySerializerRead
     */
    agencyId?: number;
    /**
     * 
     * @type {string}
     * @memberof AgencySerializerRead
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof AgencySerializerRead
     */
    feeId?: number;
    /**
     * 
     * @type {number}
     * @memberof AgencySerializerRead
     */
    addressId?: number;
}

export function AgencySerializerReadFromJSON(json: any): AgencySerializerRead {
    return {
        'agencyId': !exists(json, 'agency_id') ? undefined : json['agency_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'feeId': !exists(json, 'fee_id') ? undefined : json['fee_id'],
        'addressId': !exists(json, 'address_id') ? undefined : json['address_id'],
    };
}

export function AgencySerializerReadToJSON(value?: AgencySerializerRead): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'agency_id': value.agencyId,
        'name': value.name,
        'fee_id': value.feeId,
        'address_id': value.addressId,
    };
}


