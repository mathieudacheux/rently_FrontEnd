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

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface AddressSerializerRead
 */
export interface AddressSerializerRead {
  /**
   *
   * @type {number}
   * @memberof AddressSerializerRead
   */
  address_id?: number
  /**
   *
   * @type {string}
   * @memberof AddressSerializerRead
   */
  address?: string
  /**
   *
   * @type {string}
   * @memberof AddressSerializerRead
   */
  city?: string
  /**
   *
   * @type {string}
   * @memberof AddressSerializerRead
   */
  zipcode?: string
  /**
   *
   * @type {string}
   * @memberof AddressSerializerRead
   */
  additionnal_info?: string
  /**
   *
   * @type {string}
   * @memberof AddressSerializerRead
   */
  longitude?: string
  /**
   *
   * @type {string}
   * @memberof AddressSerializerRead
   */
  latitude?: string
}

export function AddressSerializerReadFromJSON(
  json: any,
): AddressSerializerRead {
  return {
    address_id: !exists(json, 'address_id') ? undefined : json['address_id'],
    address: !exists(json, 'address') ? undefined : json['address'],
    city: !exists(json, 'city') ? undefined : json['city'],
    zipcode: !exists(json, 'zipcode') ? undefined : json['zipcode'],
    additionnal_info: !exists(json, 'additionnal_info')
      ? undefined
      : json['additionnal_info'],
    longitude: !exists(json, 'longitude') ? undefined : json['longitude'],
    latitude: !exists(json, 'latitude') ? undefined : json['latitude'],
  }
}

export function AddressSerializerReadToJSON(
  value?: AddressSerializerRead,
): any {
  if (value === undefined) {
    return undefined
  }
  return {
    address_id: value.address_id,
    address: value.address,
    city: value.city,
    zipcode: value.zipcode,
    additionnal_info: value.additionnal_info,
    longitude: value.longitude,
    latitude: value.latitude,
  }
}