import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

// 修改config为如下所示
const config = {
  name: 'geocoder',
  connector: 'rest',
  options: {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json'
    }
  },
  // 百度地图
  operations: [
    {
      template: {
        method: 'GET',
        url: 'https://api.map.baidu.com/geocoding/v3',
        query: {
          output: 'json',
          address: '{address}',
          ak: "你的ak" // 需要到百度自行申请
        },
        // responsePath: '$.result.addressMatches[*].coordinates',
      },
      functions: {
        geocode: ['address'],
      }
    }
  ],
};

@lifeCycleObserver('datasource')
export class GeocoderDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'geocoder';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.geocoder', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
