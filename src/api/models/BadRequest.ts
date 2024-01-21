/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenericError } from './GenericError';
export type BadRequest = {
    /**
     * The error name
     */
    name: string;
    /**
     * An error message
     */
    message: string;
    /**
     * The status code of the exception
     */
    status: number;
    /**
     * A list of related errors
     */
    errors?: Array<GenericError>;
    /**
     * The stack trace (only in development mode)
     */
    stack?: string;
};

