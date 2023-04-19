/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as errors from "../../../../errors";
import { RevertApi } from "../../../..";
import express from "express";
export declare class InternalServerError extends errors.RevertApiError {
    private readonly body;
    constructor(body: RevertApi.BaseError);
    send(res: express.Response): Promise<void>;
}