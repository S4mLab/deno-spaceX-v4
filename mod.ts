import * as log from 'https://deno.land/std/log/mod.ts';

interface Launch {
  flightNumber: number;
  mission: string;
  rocket: string;
  customers: Array<string>;
}

// download launch data
const downloadLaunchData = async (api: string) => {
  log.info('Loading SpaceX Launching Data...');
  const response = await fetch(api);
  // throw error if the loading fail
  if (!response.ok) {
    log.error('There is an problem with downloading the launch data!!');
    throw new Error('Fail to download launch data');
  }
  // convert response obj to json
  const dataArray = await response.json();
  //   console.log(Object.keys(dataArray[0]));
  // iterate each data obj in the array
  const flightData = dataArray.map((dataObj: any) => {
    return {
      flightNumber: dataObj['flight_number'],
      mission: dataObj['name'],
    };
  });

  return flightData;
};

// download rocket name
const downloadRockets = async (api: string) => {
  log.info('Loading SpaceX Rockets Data...');
  const response = await fetch(api);
  // throw error if the loading fail
  if (!response.ok) {
    log.error('There is an problem with downloading the rockets data!!');
    throw new Error('Fail to download rockets data');
  }
  // convert response obj to json
  const dataArray = await response.json();
  //   console.log(Object.keys(dataArray[0]));
  // iterate each data obj in the array
  const rocketsData = dataArray.map((dataObj: any) => {
    return {
      rocket: dataObj.name,
    };
  });

  return rocketsData;
};

// download customers name
const downloadCustomers = async (api: string) => {};

// main function
const provideSpaceXData = async () => {
  const launches = new Map<number, Launch>();
  const spaceXlaunchesAPI = 'https://api.spacexdata.com/v4/launches';
  const spaceXrocketsAPI = 'https://api.spacexdata.com/v4/rockets';
  const spaceXcustomersAPI = 'https://api.spacexdata.com/v4/payloads';
  // add data to launches
  const launchDataArray = await downloadLaunchData(spaceXlaunchesAPI);
  const rocketNamesArray = await downloadRockets(spaceXrocketsAPI);
  const customersArray = await downloadCustomers(spaceXcustomersAPI);

  // append flightData to launches Map
  // launches.set(flightData.flightNumber, flightData);
};

provideSpaceXData();
