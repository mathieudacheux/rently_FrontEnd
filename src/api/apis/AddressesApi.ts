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

import { QueryConfig, ResponseBody } from 'redux-query'
import * as runtime from '../runtime'
import {
  AddressSerializerPost,
  AddressSerializerPostToJSON,
  AddressSerializerPut,
  AddressSerializerPutToJSON,
  AddressSerializerRead,
  AddressSerializerReadFromJSON,
} from '../models'

export interface AddressesCreateAddressRequest {
  addressSerializerPost: AddressSerializerPost
}

export interface AddressesDeleteAddressRequest {
  id: number
}

export interface AddressesGetAddressByIdRequest {
  id: number
}

export interface AddressesUpdateAddressRequest {
  id: number
  addressSerializerPut?: AddressSerializerPut
}

/**
 * Create a new address
 */
function addressesCreateAddressRaw<T>(
  requestParameters: AddressesCreateAddressRequest,
  requestConfig: runtime.TypedQueryConfig<T, AddressSerializerRead> = {},
): QueryConfig<T> {
  if (
    requestParameters.addressSerializerPost === null ||
    requestParameters.addressSerializerPost === undefined
  ) {
    throw new runtime.RequiredError(
      'addressSerializerPost',
      'Required parameter requestParameters.addressSerializerPost was null or undefined when calling addressesCreateAddress.',
    )
  }

  let queryParameters = null

  const headerParameters: runtime.HttpHeaders = {}

  headerParameters['Content-Type'] = 'application/json'

  const { meta = {} } = requestConfig

  meta.authType = ['bearer']
  const config: QueryConfig<T> = {
    url: `${runtime.Configuration.basePath}/addresses`,
    meta,
    update: requestConfig.update,
    queryKey: requestConfig.queryKey,
    optimisticUpdate: requestConfig.optimisticUpdate,
    force: requestConfig.force,
    rollback: requestConfig.rollback,
    options: {
      method: 'POST',
      headers: headerParameters,
    },
    body:
      queryParameters ||
      AddressSerializerPostToJSON(requestParameters.addressSerializerPost),
  }

  const { transform: requestTransform } = requestConfig
  if (requestTransform) {
    config.transform = (body: ResponseBody, text: ResponseBody) =>
      requestTransform(AddressSerializerReadFromJSON(body), text)
  }

  return config
}

/**
 * Create a new address
 */
export function addressesCreateAddress<T>(
  requestParameters: AddressesCreateAddressRequest,
  requestConfig?: runtime.TypedQueryConfig<T, AddressSerializerRead>,
): QueryConfig<T> {
  return addressesCreateAddressRaw(requestParameters, requestConfig)
}

/**
 * Delete a address by its id
 */
function addressesDeleteAddressRaw<T>(
  requestParameters: AddressesDeleteAddressRequest,
  requestConfig: runtime.TypedQueryConfig<T, void> = {},
): QueryConfig<T> {
  if (requestParameters.id === null || requestParameters.id === undefined) {
    throw new runtime.RequiredError(
      'id',
      'Required parameter requestParameters.id was null or undefined when calling addressesDeleteAddress.',
    )
  }

  let queryParameters = null

  const headerParameters: runtime.HttpHeaders = {}

  const { meta = {} } = requestConfig

  meta.authType = ['bearer']
  const config: QueryConfig<T> = {
    url: `${runtime.Configuration.basePath}/addresses/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(requestParameters.id)),
    ),
    meta,
    update: requestConfig.update,
    queryKey: requestConfig.queryKey,
    optimisticUpdate: requestConfig.optimisticUpdate,
    force: requestConfig.force,
    rollback: requestConfig.rollback,
    options: {
      method: 'DELETE',
      headers: headerParameters,
    },
    body: queryParameters,
  }

  const { transform: requestTransform } = requestConfig
  if (requestTransform) {
  }

  return config
}

/**
 * Delete a address by its id
 */
export function addressesDeleteAddress<T>(
  requestParameters: AddressesDeleteAddressRequest,
  requestConfig?: runtime.TypedQueryConfig<T, void>,
): QueryConfig<T> {
  return addressesDeleteAddressRaw(requestParameters, requestConfig)
}

/**
 * Return a address by his id
 */
function addressesGetAddressByIdRaw<T>(
  requestParameters: AddressesGetAddressByIdRequest,
  requestConfig: runtime.TypedQueryConfig<T, AddressSerializerRead> = {},
): QueryConfig<T> {
  if (requestParameters.id === null || requestParameters.id === undefined) {
    throw new runtime.RequiredError(
      'id',
      'Required parameter requestParameters.id was null or undefined when calling addressesGetAddressById.',
    )
  }

  let queryParameters = null

  const headerParameters: runtime.HttpHeaders = {}

  const { meta = {} } = requestConfig

  meta.authType = ['bearer']
  const config: QueryConfig<T> = {
    url: `${runtime.Configuration.basePath}/addresses/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(requestParameters.id)),
    ),
    meta,
    update: requestConfig.update,
    queryKey: requestConfig.queryKey,
    optimisticUpdate: requestConfig.optimisticUpdate,
    force: requestConfig.force,
    rollback: requestConfig.rollback,
    options: {
      method: 'GET',
      headers: headerParameters,
    },
    body: queryParameters,
  }

  const { transform: requestTransform } = requestConfig
  if (requestTransform) {
    config.transform = (body: ResponseBody, text: ResponseBody) =>
      requestTransform(AddressSerializerReadFromJSON(body), text)
  }

  return config
}

/**
 * Return a address by his id
 */
export function addressesGetAddressById<T>(
  requestParameters: AddressesGetAddressByIdRequest,
  requestConfig?: runtime.TypedQueryConfig<T, AddressSerializerRead>,
): QueryConfig<T> {
  return addressesGetAddressByIdRaw(requestParameters, requestConfig)
}

/**
 * Return a list of all addresses
 */
function addressesGetAllAddressesRaw<T>(
  requestConfig: runtime.TypedQueryConfig<T, Array<AddressSerializerRead>> = {},
): QueryConfig<T> {
  let queryParameters = null

  const headerParameters: runtime.HttpHeaders = {}

  const { meta = {} } = requestConfig

  meta.authType = ['bearer']
  const config: QueryConfig<T> = {
    url: `${runtime.Configuration.basePath}/addresses`,
    meta,
    update: requestConfig.update,
    queryKey: requestConfig.queryKey,
    optimisticUpdate: requestConfig.optimisticUpdate,
    force: requestConfig.force,
    rollback: requestConfig.rollback,
    options: {
      method: 'GET',
      headers: headerParameters,
    },
    body: queryParameters,
  }

  const { transform: requestTransform } = requestConfig
  if (requestTransform) {
    config.transform = (body: ResponseBody, text: ResponseBody) =>
      requestTransform(body.map(AddressSerializerReadFromJSON), text)
  }

  return config
}

/**
 * Return a list of all addresses
 */
export function addressesGetAllAddresses<T>(
  requestConfig?: runtime.TypedQueryConfig<T, Array<AddressSerializerRead>>,
): QueryConfig<T> {
  return addressesGetAllAddressesRaw(requestConfig)
}

/**
 * Update a address by its id
 */
function addressesUpdateAddressRaw<T>(
  requestParameters: AddressesUpdateAddressRequest,
  requestConfig: runtime.TypedQueryConfig<T, AddressSerializerRead> = {},
): QueryConfig<T> {
  if (requestParameters.id === null || requestParameters.id === undefined) {
    throw new runtime.RequiredError(
      'id',
      'Required parameter requestParameters.id was null or undefined when calling addressesUpdateAddress.',
    )
  }

  let queryParameters = null

  const headerParameters: runtime.HttpHeaders = {}

  headerParameters['Content-Type'] = 'application/json'

  const { meta = {} } = requestConfig

  meta.authType = ['bearer']
  const config: QueryConfig<T> = {
    url: `${runtime.Configuration.basePath}/addresses/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(requestParameters.id)),
    ),
    meta,
    update: requestConfig.update,
    queryKey: requestConfig.queryKey,
    optimisticUpdate: requestConfig.optimisticUpdate,
    force: requestConfig.force,
    rollback: requestConfig.rollback,
    options: {
      method: 'PUT',
      headers: headerParameters,
    },
    body:
      queryParameters ||
      AddressSerializerPutToJSON(requestParameters.addressSerializerPut),
  }

  const { transform: requestTransform } = requestConfig
  if (requestTransform) {
    config.transform = (body: ResponseBody, text: ResponseBody) =>
      requestTransform(AddressSerializerReadFromJSON(body), text)
  }

  return config
}

/**
 * Update a address by its id
 */
export function addressesUpdateAddress<T>(
  requestParameters: AddressesUpdateAddressRequest,
  requestConfig?: runtime.TypedQueryConfig<T, AddressSerializerRead>,
): QueryConfig<T> {
  return addressesUpdateAddressRaw(requestParameters, requestConfig)
}
