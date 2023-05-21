"use strict";
/**
 * This file was auto-generated by Fern from our API Definition.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trace = void 0;
const serializers = __importStar(require("../../../../serialization"));
const url_join_1 = __importDefault(require("url-join"));
const core = __importStar(require("../../../../core"));
const errors = __importStar(require("../../../../errors"));
class Trace {
    options;
    constructor(options) {
        this.options = options;
    }
    /**
     * Add a trace to the database
     */
    async create(request) {
        const _response = await core.fetcher({
            url: (0, url_join_1.default)(this.options.environment, "/traces/create"),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
            },
            contentType: "application/json",
            body: await serializers.CreateTraceRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.Trace.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }
        if (_response.error.reason === "status-code") {
            throw new errors.FintoLangfuseError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }
        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FintoLangfuseError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FintoLangfuseTimeoutError();
            case "unknown":
                throw new errors.FintoLangfuseError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
exports.Trace = Trace;
