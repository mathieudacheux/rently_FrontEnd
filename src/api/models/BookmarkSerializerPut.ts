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

import { exists, mapValues } from '../runtime'
/**
 *
 * @export
 * @interface BookmarkSerializerPut
 */
export interface BookmarkSerializerPut {
  /**
   *
   * @type {number}
   * @memberof BookmarkSerializerPut
   */
  user_id?: number
  /**
   *
   * @type {number}
   * @memberof BookmarkSerializerPut
   */
  property_id?: number
}

export function BookmarkSerializerPutFromJSON(
  json: any,
): BookmarkSerializerPut {
  return {
    user_id: !exists(json, 'user_id') ? undefined : json['user_id'],
    property_id: !exists(json, 'property_id') ? undefined : json['property_id'],
  }
}

export function BookmarkSerializerPutToJSON(
  value?: BookmarkSerializerPut,
): any {
  if (value === undefined) {
    return undefined
  }
  return {
    user_id: value.user_id,
    property_id: value.property_id,
  }
}
