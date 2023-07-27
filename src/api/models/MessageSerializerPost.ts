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
 * @interface MessageSerializerPost
 */
export interface MessageSerializerPost {
  /**
   *
   * @type {string}
   * @memberof MessageSerializerPost
   */
  content?: string
  /**
   *
   * @type {number}
   * @memberof MessageSerializerPost
   */
  user_id_1?: number
  /**
   *
   * @type {number}
   * @memberof MessageSerializerPost
   */
  user_id_2?: number
}

export function MessageSerializerPostFromJSON(
  json: any,
): MessageSerializerPost {
  return {
    content: !exists(json, 'content') ? undefined : json['content'],
    user_id_1: !exists(json, 'user_id_1') ? undefined : json['user_id_1'],
    user_id_2: !exists(json, 'user_id_2') ? undefined : json['user_id_2'],
  }
}

export function MessageSerializerPostToJSON(
  value?: MessageSerializerPost,
): any {
  if (value === undefined) {
    return undefined
  }
  return {
    content: value.content,
    user_id_1: value.user_id_1,
    user_id_2: value.user_id_2,
  }
}
