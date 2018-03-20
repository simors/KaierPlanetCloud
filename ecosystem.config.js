module.exports = {
  apps : [{
    name   : "KaierPlanetBase",
    script : "./bin/www",
    watch  : true,
    env: {
      NODE_ENV: "development",
      PORT: 4801,
      APP_ID: 'BtayVajHGy5dnmykZK4JRtV0',
      APP_SECRET: 'vVSHw5yXxSQSHt95a3WVdNt4Rs6MYCkH',
      API_SERVER_URL: 'http://kaierbase-dev.xiaojee.cn',
      AUTH_SERVER_URL: 'http://kaierbase-dev.xiaojee.cn',
      ENGINE_SERVER_URL: 'http://kaiercloud-dev.xiaojee.cn',
    },
    env_staging : {
      NODE_ENV: "staging",
      PORT: 4802,
      APP_ID: 'BtayVajHGy5dnmykZK4JRtV0',
      APP_SECRET: 'vVSHw5yXxSQSHt95a3WVdNt4Rs6MYCkH',
      API_SERVER_URL: 'http://kaierbase-dev.xiaojee.cn',
      AUTH_SERVER_URL: 'http://kaierbase-dev.xiaojee.cn',
      ENGINE_SERVER_URL: 'http://kaiercloud-dev.xiaojee.cn',
    },
    env_production : {
      NODE_ENV: "production",
      PORT: 4803,
      APP_ID: 'BtayVajHGy5dnmykZK4JRtV0',
      APP_SECRET: 'vVSHw5yXxSQSHt95a3WVdNt4Rs6MYCkH',
      API_SERVER_URL: 'http://kaierbase.xiaojee.cn',
      AUTH_SERVER_URL: 'http://kaierbase.xiaojee.cn',
      ENGINE_SERVER_URL: 'http://kaiercloud.xiaojee.cn',
    }
  }]
}
