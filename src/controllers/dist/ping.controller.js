"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.PingController = void 0;
var core_1 = require("@loopback/core");
var rest_1 = require("@loopback/rest");
/**
 * OpenAPI response for ping()
 */
var PING_RESPONSE = {
    description: 'Ping Responsed',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                title: 'PingResponse',
                properties: {
                    greeting: { type: 'string' },
                    date: { type: 'string' },
                    url: { type: 'string' },
                    headers: {
                        type: 'object',
                        properties: {
                            'Content-Type': { type: 'string' }
                        },
                        additionalProperties: true
                    }
                }
            }
        }
    }
};
/**
 * A simple controller to bounce back http requests
 */
var PingController = /** @class */ (function () {
    function PingController(req) {
        this.req = req;
    }
    // Map to `GET /ping`
    PingController.prototype.ping = function () {
        console.log("~~~~~~~~~~!~");
        // Reply with a greeting, the current time, the url, and request headers
        return {
            greeting: 'Hello from LoopBack',
            date: new Date(),
            url: this.req.url,
            headers: Object.assign({}, this.req.headers)
        };
    };
    __decorate([
        rest_1.get('/ping'),
        rest_1.response(200, PING_RESPONSE)
    ], PingController.prototype, "ping");
    PingController = __decorate([
        __param(0, core_1.inject(rest_1.RestBindings.Http.REQUEST))
    ], PingController);
    return PingController;
}());
exports.PingController = PingController;
