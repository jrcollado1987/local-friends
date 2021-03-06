/**
 * Application Settings
 */

var appSettings = {

    everlive: {
        apiKey: 'Al95XtZ2oDPNpSR5', // Put your Backend Services API key here
        scheme: 'http'
    },

    eqatec: {
        productKey: 'e409f06f532d48c495b12cc6d06f27ba',  // Put your EQATEC product key here
        version: '1.0.0.0' // Put your application version here
    },

    facebook: {
        appId: '180949372090739', // Put your Facebook App ID here
        redirectUri: 'https://www.facebook.com/connect/login_success.html' // Put your Facebook Redirect URI here
    },

    google: {
        clientId: '318106095636.apps.googleusercontent.com', // Put your Google Client ID here
        redirectUri: 'https://www.localseosearch.ca.com/oauth2callback' // Put your Google Redirect URI here
    },

    liveId: {
        clientId: '000000004C10D1AF', // Put your LiveID Client ID here
        redirectUri: 'https://login.live.com/oauth20_desktop.srf' // Put your LiveID Redirect URI here
    },

    adfs: {
        adfsRealm: '$ADFS_REALM$', // Put your ADFS Realm here
        adfsEndpoint: '$ADFS_ENDPOINT$' // Put your ADFS Endpoint here
    },

    messages: {
        mistSimulatorAlert: 'The social login doesn\'t work in the In-Browser Client, you need to deploy the app to a device, or run it in the simulator of the Windows Client or Visual Studio.',
        removeActivityConfirm: 'Are you sure you want to delete this Activity?'
    }
};
