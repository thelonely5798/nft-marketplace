const sdk = require('api')('@opensea/v1.0#12u2v92etliyqlisv');

export class BaseOpenSeaApi {
    static key: string = "e2030c99d83e4b8696e20bfdefee5994"
    static getInstanceV1() {
        sdk.auth(this.key)
        return sdk;
    }
}