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
      API_SERVER_URL: 'http://localhost',
      AUTH_SERVER_URL: 'http://localhost',
      ENGINE_SERVER_URL: 'http://localhost',
    },
    env_staging : {
      NODE_ENV: "staging",
      PORT: 4902,
      APP_ID: 'BtayVajHGy5dnmykZK4JRtV0',
      APP_SECRET: 'vVSHw5yXxSQSHt95a3WVdNt4Rs6MYCkH',
      API_SERVER_URL: 'http://kaierbase-stage.xiaojee.cn',
      AUTH_SERVER_URL: 'http://kaierbase-stage.xiaojee.cn',
      ENGINE_SERVER_URL: 'http://kaiercloud-stage.xiaojee.cn',
    },
    env_production : {
      NODE_ENV: "production",
      PORT: 4903,
      APP_ID: 'BtayVajHGy5dnmykZK4JRtV0',
      APP_SECRET: 'vVSHw5yXxSQSHt95a3WVdNt4Rs6MYCkH',
      API_SERVER_URL: 'http://kaierbase.xiaojee.cn',
      AUTH_SERVER_URL: 'http://kaierbase.xiaojee.cn',
      ENGINE_SERVER_URL: 'http://kaiercloud.xiaojee.cn',
    }
  }]
}
