import Airtable from "airtable";

export default async function handler(req, res) {
  // We only want to handle POST requests, everything else gets a 404
  if (req.method === "GET") {
    await getHandler(req, res);
  } else {
    res.status(404).send("");
  }
}

async function getHandler(req, res) {
  const salaries = await getSalaries();
  res.json(salaries);
}

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base("appco2vCfPMU1zFwb");

const table = base("Submissions");

// maps over the records, calling minifyRecord, giving us required data
const getMinifiedRecords = (records) => {
  return records.map((record) => minifyRecord(record));
};

// gets the data we want and puts it into variables
const minifyRecord = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

async function getSalaries() {
  const records = await table.select({}).all();
  const minifiedRecords = await getMinifiedRecords(records);
  return minifiedRecords;
}
