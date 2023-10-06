import { init as initApm } from '@elastic/apm-rum'


var apm = initApm({
    serviceName: 'my-service-name',
  
    serverUrl: 'https://c151f948fac140d9a1f4f3b62746bd1c.apm.sa-east-1.aws.cloud.es.io:443',
  
    serviceVersion: '',
  
    environment: 'my-environment'
  })