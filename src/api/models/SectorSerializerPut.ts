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
 * @interface SectorSerializerPut
 */
export interface SectorSerializerPut {
  /**
   *
   * @type {string}
   * @memberof SectorSerializerPut
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof SectorSerializerPut
   */
  polygon?: string
  /**
   *
   * @type {number}
   * @memberof SectorSerializerPut
   */
  agency_id?: number
}

export function SectorSerializerPutFromJSON(json: any): SectorSerializerPut {
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
    polygon: !exists(json, 'polygon') ? undefined : json['polygon'],
    agency_id: !exists(json, 'agency_id') ? undefined : json['agency_id'],
  }
}

export function SectorSerializerPutToJSON(value?: SectorSerializerPut): any {
  if (value === undefined) {
    return undefined
  }
  return {
    name: value.name,
    polygon: value.polygon,
    agency_id: value.agency_id,
  }
}
