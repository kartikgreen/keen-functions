"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const KeenTracking = require('keen-tracking');
const client = new KeenTracking({
    projectId: "5b632724c9e77c00014eab51",
    writeKey: "75AB3EB10F0E55811949D43099072CBF253C34EACB99B31543FE7863B0BCCF761ACAB18971013DC8B8FFAB7CF8648115ACE79ECFC16C92DA4826D5FAEE5DA0FA8F7004123E911C17BDDAE9AE978B8DDC50079A953C2B853CAF026AAD632AB011"
});
exports.onNewEventsCreate = functions.database.ref('/job-queue/{id}').onCreate((snapshot, context) => __awaiter(this, void 0, void 0, function* () {
    const data = snapshot.val();
    const newData = {
        customer: data.customer.name.toUpperCase()
    };
    console.log('here is your new data', newData);
    client.recordEvent('purchases', data, (err, res) => {
        if (err) {
            // Handle error
            console.log('You got an error', res);
        }
        else {
            console.log('Here is the response', res);
        }
    });
    // return snapshot.ref.update({name: data.customer.name.toUpperCase()})
}));
//# sourceMappingURL=index.js.map