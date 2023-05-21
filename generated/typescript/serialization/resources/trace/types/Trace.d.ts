/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as FintoLangfuse from "../../../../api";
import * as core from "../../../../core";
export declare const Trace: core.serialization.ObjectSchema<serializers.Trace.Raw, FintoLangfuse.Trace>;
export declare namespace Trace {
    interface Raw {
        id: string;
        timestamp: string;
        name: string;
        attributes?: unknown;
        status: string;
        statusMessage?: string | null;
    }
}
