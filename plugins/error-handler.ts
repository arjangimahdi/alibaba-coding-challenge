export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.errorHandler = (error, context) => {
        // error handling
        console.log("error happed");
        console.error(error);
    };
});
