/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropertySerializer } from '../models/PropertySerializer'
import type { CancelablePromise } from '../core/CancelablePromise'
import { OpenAPI } from '../core/OpenAPI'
import { request as __request } from '../core/request'
export class MailsService {
  /**
   * Send a mail with sendingblue
   * @returns any Created
   * @throws ApiError
   */
  public static mailsConfirmAccountMail({
    requestBody,
  }: {
    requestBody?: {
      id?: number
    }
  }): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/mail/mail_confirm',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
      },
    })
  }
  /**
   * Send a mail with sendingblue
   * @returns any Created
   * @throws ApiError
   */
  public static mailsResetPasswordMail({
    requestBody,
  }: {
    requestBody?: {
      id?: number
    }
  }): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/mail/reset_password',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
      },
    })
  }
  /**
   * Subscribe to newsletter
   * @returns any Created
   * @throws ApiError
   */
  public static mailsSubscribeNewsletter({
    requestBody,
  }: {
    requestBody?: {
      mail?: string
    }
  }): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/mail/subscribe_newsletter',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
      },
    })
  }
  /**
   * Mail after a sale
   * @returns any Created
   * @throws ApiError
   */
  public static mailsSalesConfirmationSaler({
    requestBody,
  }: {
    requestBody?: {
      property?: PropertySerializer
      new_owner?: number
    }
  }): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/mail/sale_confirmation_saler',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
      },
    })
  }
  /**
   * Mail after a sale
   * @returns any Created
   * @throws ApiError
   */
  public static mailsSalesConfirmationBuyer({
    requestBody,
  }: {
    requestBody?: {
      property?: PropertySerializer
      new_owner?: number
    }
  }): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/mail/sale_confirmation_buyer',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
      },
    })
  }
  /**
   * Mail after a location
   * @returns any Created
   * @throws ApiError
   */
  public static mailsRentConfirmationTenant({
    requestBody,
  }: {
    requestBody?: {
      property?: PropertySerializer
      tenant?: number
    }
  }): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/mail/rent_confirmation_tenant',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
      },
    })
  }
  /**
   * Mail after a location
   * @returns any Created
   * @throws ApiError
   */
  public static mailsRentConfirmationOwner({
    requestBody,
  }: {
    requestBody?: {
      property?: PropertySerializer
      tenant?: number
    }
  }): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/mail/rent_confirmation_owner',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
      },
    })
  }
}
