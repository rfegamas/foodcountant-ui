const environment = process.env.NODE_ENV;

const devEndpoints = {
  worshipUrl: "http://127.0.0.1:5000"
};

const prodEndpoints = {
  worshipUrl: "not-defined"
};

const endpointConfig = environment === "prod" ? prodEndpoints : devEndpoints;
const completeConfig = Object.assign({}, endpointConfig);

module.exports = completeConfig;
