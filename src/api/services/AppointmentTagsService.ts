/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppointmentTagSerializerRead } from '../models/AppointmentTagSerializerRead';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AppointmentTagsService {
    /**
     * Return a list of appointments tags
     * @returns AppointmentTagSerializerRead Success
     * @throws ApiError
     */
    public static appointmentTagsGetAppointmentTags(): CancelablePromise<Array<AppointmentTagSerializerRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/appointment_tags',
        });
    }
    /**
     * Return an appointment tags by his id
     * @returns AppointmentTagSerializerRead Success
     * @throws ApiError
     */
    public static appointmentTagsGetAppointmentTagById({
        id,
    }: {
        id: number,
    }): CancelablePromise<AppointmentTagSerializerRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/appointment_tags/{id}',
            path: {
                'id': id,
            },
        });
    }
}
