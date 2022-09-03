const i18n = require('i18n');
const { join } = require('path');

i18n.configure({
    locales: [
        "en",
        "pt_br",
    ],
    directory: join(__dirname, "..", "locales"),
    defaultLocale: "pt_br",
    retryInDefaultLocale: true,
    objectNotation: true,
    register: global,

    logWarnFn: function (msg) {
        console.log(msg);
    },

    logErrorFn: function (msg) {
        console.log(msg);
    },

    missingKeyFn: function (locale, value) {
        return value;
    },

    mustacheConfig: {
        tags: ["{{", "}}"],
        disable: false
    }
});

i18n.setLocale(process.env.APP_LANG || "pt_br");

module.exports = {
    i18n
};