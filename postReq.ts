import * as log from 'https://deno.land/std/log/mod.ts';

const dataObj = {
  name: 'Elon Musk',
  job: 'billionaire',
};

const postObj = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(dataObj),
};

const elon = async () => {
  log.info('Loading Lauching Data...');
  const resObj = await fetch('https://reqres.in/api/users', postObj);

  if (!resObj.ok) {
    log.error('Problem downloading launching data!');
    throw new Error('Launch data loading fail!!');
  }

  const data = await resObj.json();
  console.log(data);
};

await elon();
