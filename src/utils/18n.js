import i18n from "i18n";
import { join } from "path";

i18n.configure({
    locales: [
        "en",
        "pt_br",
    ],
    directory: join(__dirname, "..", "locales"),
    defaultLocale: "en",
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

export { i18n };