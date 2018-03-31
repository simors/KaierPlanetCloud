module.exports = {
  apps : [{
    name   : "KaierPlanetCloud",
    script : "./bin/www",
    watch  : true,
    log_date_format: "YYYY-MM-DD HH:mm:ss Z",
    env: {
      NODE_ENV: "development",
      PORT: 4901,
      APP_ID: 'BtayVajHGy5dnmykZK4JRtV0',
      APP_SECRET: 'vVSHw5yXxSQSHt95a3WVdNt4Rs6MYCkH',
      API_SERVER_URL: 'https://kaierbase-dev.xiaojee.cn',
      AUTH_SERVER_URL: 'https://kaierbase-dev.xiaojee.cn',
      ENGINE_SERVER_URL: 'https://kaiercloud-dev.xiaojee.cn',
      SMS_APP_ID: '1400077093',
      SMS_APP_KEY: '45a725e82703b9b1ac98676278f1804e',
      AUTH_SECRET: 'aU1YJa8ABZbTGH15X9Cp0af9IcRt5q7o',
      REDIS_URL: '193.112.106.11',
      REDIS_PORT: '6379',
      REDIS_DB: '0',
      REDIS_AUTH: 'Simors2018',
      MONGODB_URL: 'mongodb://simors:simors401a@193.112.106.11:27017/KaierPlanet_dev',
      PROVIDER: 'https://ropsten.infura.io/',
    },
    env_staging : {
      NODE_ENV: "staging",
      PORT: 4902,
      APP_ID: 'BtayVajHGy5dnmykZK4JRtV0',
      APP_SECRET: 'vVSHw5yXxSQSHt95a3WVdNt4Rs6MYCkH',
      API_SERVER_URL: 'https://kaierbase-stage.xiaojee.cn',
      AUTH_SERVER_URL: 'https://kaierbase-stage.xiaojee.cn',
      ENGINE_SERVER_URL: 'https://kaiercloud-stage.xiaojee.cn',
      SMS_APP_ID: '1400077093',
      SMS_APP_KEY: '45a725e82703b9b1ac98676278f1804e',
      AUTH_SECRET: 'aU1YJa8ABZbTGH15X9Cp0af9IcRt5q7o',
      REDIS_URL: '193.112.106.11',
      REDIS_PORT: '6379',
      REDIS_DB: '1',
      REDIS_AUTH: 'Simors2018',
      MONGODB_URL: 'mongodb://simors:simors401a@193.112.106.11:27017/KaierPlanet_stage',
      PROVIDER: 'https://ropsten.infura.io/',
    },
    env_production : {
      NODE_ENV: "production",
      PORT: 4903,
      APP_ID: 'BtayVajHGy5dnmykZK4JRtV0',
      APP_SECRET: 'vVSHw5yXxSQSHt95a3WVdNt4Rs6MYCkH',
      AUTH_SERVER_URL: 'https://kaierbase.xiaojee.cn',
      ENGINE_SERVER_URL: 'https://kaiercloud.xiaojee.cn',
      SMS_APP_ID: '1400077093',
      SMS_APP_KEY: '45a725e82703b9b1ac98676278f1804e',
      AUTH_SECRET: 'aU1YJa8ABZbTGH15X9Cp0af9IcRt5q7o',
      API_SERVER_URL: 'https://kaierbase.xiaojee.cn',
      REDIS_URL: '193.112.106.11',
      REDIS_PORT: '6379',
      REDIS_DB: '2',
      REDIS_AUTH: 'Simors2018',
      MONGODB_URL: 'mongodb://simors:simors401a@193.112.106.11:27017/KaierPlanet',
      PROVIDER: 'https://ropsten.infura.io/',
    }
  }]
}
