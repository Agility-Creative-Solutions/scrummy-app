/* eslint-disable import/no-extraneous-dependencies */
// setup staging branch
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
});

module.exports = (phase, defaultConfig) => {
  return withBundleAnalyzer(defaultConfig);
};
