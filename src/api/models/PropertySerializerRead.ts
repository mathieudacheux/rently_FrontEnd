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
 * @interface PropertySerializerRead
 */
export interface PropertySerializerRead {
  /**
   *
   * @type {number}
   * @memberof PropertySerializerRead
   */
  propertyId?: number
  /**
   *
   * @type {string}
   * @memberof PropertySerializerRead
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof PropertySerializerRead
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof PropertySerializerRead
   */
  signatureDate?: string
  /**
   *
   * @type {number}
   * @memberof PropertySerializerRead
   */
  propertyType?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerRead
   */
  price?: number
  /**
   *
   * @type {string}
   * @memberof PropertySerializerRead
   */
  surface?: string
  /**
   *
   * @type {string}
   * @memberof PropertySerializerRead
   */
  landSize?: string
  /**
   *
   * @type {number}
   * @memberof PropertySerializerRead
   */
  bathroom?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerRead
   */
  kitchen?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerRead
   */
  toilet?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerRead
   */
  bedroom?: number
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerRead
   */
  elevator?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerRead
   */
  balcony?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerRead
   */
  terrace?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerRead
   */
  cellar?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerRead
   */
  parking?: boolean
  /**
   *
   * @type {number}
   * @memberof PropertySerializerRead
   */
  numberRoom?: number
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerRead
   */
  pool?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerRead
   */
  caretaker?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerRead
   */
  fiberDeployed?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerRead
   */
  duplex?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerRead
   */
  topFloor?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerRead
   */
  garage?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerRead
   */
  workDone?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerRead
   */
  lifeAnnuity?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerRead
   */
  groundFloor?: boolean
  /**
   *
   * @type {string}
   * @memberof PropertySerializerRead
   */
  landSize1?: string
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerRead
   */
  garden?: boolean
  /**
   *
   * @type {number}
   * @memberof PropertySerializerRead
   */
  ownerId?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerRead
   */
  statusId?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerRead
   */
  tenantId?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerRead
   */
  addressId?: number
  /**
   *
   * @type {string}
   * @memberof PropertySerializerRead
   */
  city?: string
  /**
   *
   * @type {string}
   * @memberof PropertySerializerRead
   */
  zipcode?: string
  /**
   *
   * @type {string}
   * @memberof PropertySerializerRead
   */
  way?: string
  /**
   *
   * @type {string}
   * @memberof PropertySerializerRead
   */
  longitude?: string
  /**
   *
   * @type {string}
   * @memberof PropertySerializerRead
   */
  latitude?: string
  /**
   *
   * @type {number}
   * @memberof PropertySerializerRead
   */
  dpe?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerRead
   */
  agencyId?: number
}

export function PropertySerializerReadFromJSON(
  json: any,
): PropertySerializerRead {
  return {
    propertyId: !exists(json, 'property_id') ? undefined : json['property_id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    description: !exists(json, 'description') ? undefined : json['description'],
    signatureDate: !exists(json, 'signature_date')
      ? undefined
      : json['signature_date'],
    propertyType: !exists(json, 'property_type')
      ? undefined
      : json['property_type'],
    price: !exists(json, 'price') ? undefined : json['price'],
    surface: !exists(json, 'surface') ? undefined : json['surface'],
    landSize: !exists(json, 'land_size') ? undefined : json['land_size'],
    bathroom: !exists(json, 'bathroom') ? undefined : json['bathroom'],
    kitchen: !exists(json, 'kitchen') ? undefined : json['kitchen'],
    toilet: !exists(json, 'toilet') ? undefined : json['toilet'],
    bedroom: !exists(json, 'bedroom') ? undefined : json['bedroom'],
    elevator: !exists(json, 'elevator') ? undefined : json['elevator'],
    balcony: !exists(json, 'balcony') ? undefined : json['balcony'],
    terrace: !exists(json, 'terrace') ? undefined : json['terrace'],
    cellar: !exists(json, 'cellar') ? undefined : json['cellar'],
    parking: !exists(json, 'parking') ? undefined : json['parking'],
    numberRoom: !exists(json, 'number_room') ? undefined : json['number_room'],
    pool: !exists(json, 'pool') ? undefined : json['pool'],
    caretaker: !exists(json, 'caretaker') ? undefined : json['caretaker'],
    fiberDeployed: !exists(json, 'fiber_deployed')
      ? undefined
      : json['fiber_deployed'],
    duplex: !exists(json, 'duplex') ? undefined : json['duplex'],
    topFloor: !exists(json, 'top_floor') ? undefined : json['top_floor'],
    garage: !exists(json, 'garage') ? undefined : json['garage'],
    workDone: !exists(json, 'work_done') ? undefined : json['work_done'],
    lifeAnnuity: !exists(json, 'life_annuity')
      ? undefined
      : json['life_annuity'],
    groundFloor: !exists(json, 'ground_floor')
      ? undefined
      : json['ground_floor'],
    landSize1: !exists(json, 'land_size_1') ? undefined : json['land_size_1'],
    garden: !exists(json, 'garden') ? undefined : json['garden'],
    ownerId: !exists(json, 'owner_id') ? undefined : json['owner_id'],
    statusId: !exists(json, 'status_id') ? undefined : json['status_id'],
    tenantId: !exists(json, 'tenant_id') ? undefined : json['tenant_id'],
    addressId: !exists(json, 'address_id') ? undefined : json['address_id'],
    city: !exists(json, 'city') ? undefined : json['city'],
    zipcode: !exists(json, 'zipcode') ? undefined : json['zipcode'],
    way: !exists(json, 'way') ? undefined : json['way'],
    longitude: !exists(json, 'longitude') ? undefined : json['longitude'],
    latitude: !exists(json, 'latitude') ? undefined : json['latitude'],
    dpe: !exists(json, 'dpe') ? undefined : json['dpe'],
    agencyId: !exists(json, 'agency_id') ? undefined : json['agency_id'],
  }
}

export function PropertySerializerReadToJSON(
  value?: PropertySerializerRead,
): any {
  if (value === undefined) {
    return undefined
  }
  return {
    property_id: value.propertyId,
    name: value.name,
    description: value.description,
    signature_date: value.signatureDate,
    property_type: value.propertyType,
    price: value.price,
    surface: value.surface,
    land_size: value.landSize,
    bathroom: value.bathroom,
    kitchen: value.kitchen,
    toilet: value.toilet,
    bedroom: value.bedroom,
    elevator: value.elevator,
    balcony: value.balcony,
    terrace: value.terrace,
    cellar: value.cellar,
    parking: value.parking,
    number_room: value.numberRoom,
    pool: value.pool,
    caretaker: value.caretaker,
    fiber_deployed: value.fiberDeployed,
    duplex: value.duplex,
    top_floor: value.topFloor,
    garage: value.garage,
    work_done: value.workDone,
    life_annuity: value.lifeAnnuity,
    ground_floor: value.groundFloor,
    land_size_1: value.landSize1,
    garden: value.garden,
    owner_id: value.ownerId,
    status_id: value.statusId,
    tenant_id: value.tenantId,
    address_id: value.addressId,
    city: value.city,
    zipcode: value.zipcode,
    way: value.way,
    longitude: value.longitude,
    latitude: value.latitude,
    dpe: value.dpe,
    agency_id: value.agencyId,
  }
}
