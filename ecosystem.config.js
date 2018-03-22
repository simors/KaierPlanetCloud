module.exports = {
  apps : [{
    name   : "KaierPlanetCloud",
    script : "./bin/www",
    watch  : true,
    env: {
      NODE_ENV: "development",
      PORT: 4901,
      APP_ID: 'BtayVajHGy5dnmykZK4JRtV0',
      APP_SECRET: 'vVSHw5yXxSQSHt95a3WVdNt4Rs6MYCkH',
      API_SERVER_URL: 'https://kaierbase-dev.xiaojee.cn',
      AUTH_SERVER_URL: 'https://kaierbase-dev.xiaojee.cn',
      ENGINE_SERVER_URL: 'https://kaiercloud-dev.xiaojee.cn',
    },
    env_staging : {
      NODE_ENV: "staging",
      PORT: 4902,
      APP_ID: 'BtayVajHGy5dnmykZK4JRtV0',
      APP_SECRET: 'vVSHw5yXxSQSHt95a3WVdNt4Rs6MYCkH',
      API_SERVER_URL: 'https://kaierbase-stage.xiaojee.cn',
      AUTH_SERVER_URL: 'https://kaierbase-stage.xiaojee.cn',
      ENGINE_SERVER_URL: 'https://kaiercloud-stage.xiaojee.cn',
    },
    env_production : {
      NODE_ENV: "production",
      PORT: 4903,
      APP_ID: 'BtayVajHGy5dnmykZK4JRtV0',
      APP_SECRET: 'vVSHw5yXxSQSHt95a3WVdNt4Rs6MYCkH',
      API_SERVER_URL: 'https://kaierbase.xiaojee.cn',
      AUTH_SERVER_URL: 'https://kaierbase.xiaojee.cn',
      ENGINE_SERVER_URL: 'https://kaiercloud.xiaojee.cn',
    }
  }]
}
