if (process.env.NOCE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}