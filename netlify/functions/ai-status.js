"use strict";

const {
  SUPPORTED_PROVIDERS,
  inferProviderName,
  getProviderApiKey,
  getProviderStatus,
  response,
} = require("./_shared/ai");

exports.handler = async function handler() {
  const activeProvider = inferProviderName();
  const activeStatus = getProviderStatus(activeProvider);
  const backends = Object.fromEntries(SUPPORTED_PROVIDERS.map((provider) => [provider, getProviderStatus(provider)]));

  return response(200, {
    ...activeStatus,
    available: Boolean(getProviderApiKey(activeProvider)),
    backends,
  });
};
