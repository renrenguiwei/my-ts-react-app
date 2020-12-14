const {
  override,
  addLessLoader,
} = require('customize-cra');

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    ModifyVars: {'@primary-color': '#1DA57A'},
    sourceMap:true,
  }),
)