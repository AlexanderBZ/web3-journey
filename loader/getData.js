const Airtable = require("airtable");

export default function getData() {
  var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    "appco2vCfPMU1zFwb"
  );

  const totalRecords = [];

  return new Promise((resolve, reject) => {
    base("Submissions")
      .select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 3,
        view: "Grid view",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.

          records.forEach(function (record) {
            console.log("Retrieved", record.get("Autonumber"));
            totalRecords.push(record);
          });

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        function done(err) {
          if (err) return reject(err);

          return resolve(totalRecords);
        }
      );
  });
}
