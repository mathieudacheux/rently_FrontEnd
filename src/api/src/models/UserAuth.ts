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
 * @interface UserAuth
 */
export interface UserAuth  {
    /**
     * 
     * @type {object}
     * @memberof UserAuth
     */
    token?: object;
}

export function UserAuthFromJSON(json: any): UserAuth {
    return {
        'token': !exists(json, 'token') ? undefined : json['token'],
    };
}

export function UserAuthToJSON(value?: UserAuth): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'token': value.token,
    };
}


