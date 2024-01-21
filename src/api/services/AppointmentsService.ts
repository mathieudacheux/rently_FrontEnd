/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppointmentSerializerPost } from '../models/AppointmentSerializerPost';
import type { AppointmentSerializerPut } from '../models/AppointmentSerializerPut';
import type { AppointmentSerializerRead } from '../models/AppointmentSerializerRead';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AppointmentsService {
    /**
     * Return a list of all appointments
     * @returns AppointmentSerializerRead Success
     * @throws ApiError
     */
    public static appointmentsGetAllAppointments(): CancelablePromise<Array<AppointmentSerializerRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/appointments',
        });
    }
    /**
     * Create a new appointment
     * @returns AppointmentSerializerRead Success
     * @throws ApiError
     */
    public static appointmentsCreateAppointment({
        requestBody,
    }: {
        requestBody: AppointmentSerializerPost,
    }): CancelablePromise<AppointmentSerializerRead> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/appointments',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Return a list of appointments by filter
     * @returns AppointmentSerializerRead Success
     * @throws ApiError
     */
    public static appointmentsGetAppointmentsByFilter({
        userId1,
        userId2,
    }: {
        userId1?: number,
        userId2?: number,
    }): CancelablePromise<Array<AppointmentSerializerRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/appointments/appointments_filter',
            query: {
                'user_id_1': userId1,
                'user_id_2': userId2,
            },
        });
    }
    /**
     * Return a appointment by his id
     * @returns AppointmentSerializerRead Success
     * @throws ApiError
     */
    public static appointmentsGetAppointmentById({
        id,
    }: {
        id: number,
    }): CancelablePromise<AppointmentSerializerRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/appointments/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a appointment by its id
     * @returns AppointmentSerializerRead Success
     * @throws ApiError
     */
    public static appointmentsUpdateAppointment({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: AppointmentSerializerPut,
    }): CancelablePromise<AppointmentSerializerRead> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/appointments/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a appointment by its id
     * @returns void
     * @throws ApiError
     */
    public static appointmentsDeleteAppointment({
        id,
    }: {
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/appointments/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Return a list of appointments by user id
     * @returns any Success
     * @throws ApiError
     */
    public static appointmentsGetAppointmentsByUserId({
        id,
    }: {
        id: number,
    }): CancelablePromise<Array<Record<string, any>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/appointments/user/{id}',
            path: {
                'id': id,
            },
        });
    }
}
