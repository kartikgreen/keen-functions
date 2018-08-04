import * as functions from 'firebase-functions';
const KeenTracking = require('keen-tracking');
const client = new KeenTracking({
    projectId: "5b632724c9e77c00014eab51",
    writeKey: "75AB3EB10F0E55811949D43099072CBF253C34EACB99B31543FE7863B0BCCF761ACAB18971013DC8B8FFAB7CF8648115ACE79ECFC16C92DA4826D5FAEE5DA0FA8F7004123E911C17BDDAE9AE978B8DDC50079A953C2B853CAF026AAD632AB011"
  });

export const onNewEventsCreate = functions.database.ref('/job-queue/{id}').onCreate(async (snapshot, context) => {
    const data = await snapshot.val();
      client.recordEvent('purchases', data, (err, res) => {
        if (err) {
          // Handle error
          console.log('You got an error', res);
        }
        else {
          console.log('Here is the response', res);
        }
      });
})