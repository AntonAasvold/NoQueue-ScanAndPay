const appSettings = {
  A2HS_BANNER_ENABLED: true,
  REGISTER_SERVICEWORKER: false,
  DEMO_MODE: true,
  LOCAL_HOST_API: false,
  API_URL_LOCAL_HOST: '',
  API_URL_CLOUD: 'https://prodairliftorchestratorservice.azurewebsites.net',
  COUNTRY: 'SE',
  LOCALE: 'sv_SE',
  JS_DATE_LOCALE: 'en-SE',
  SCANDIT_LICENSE_KEY:
    'AaHhnA7/L+z1EKW5FDmJFv0yPQ6fGK85oEzuoaFbzTiqSNL9wlswc8ZBDV8mYLgDZkORW6FPyKP5NOkkpgB+HscSM2ZSNUCSKmtN99VXhphTBDGuuTwKobVThHtia6/s6Xf1EdgjmODnBGfErzzfx/E1oejGLLvfWn7xPy2R8nTqnxtoKG4b63Dx6w55uBQW4lOwPQ4wgsE7PkXQX30pYI3CNZoU7H7GrOjgy0q5/5fkM4yhtfwsuCiAh7SDtuUgW+wbEYPl57RWZYo0tq/P2PXK+xNiKXLmzyzJkReZH0GyB6fNvAMMwfSUfu6U6XfUEaOKriOkr0r7sva1F7IPSPdXRcEGnUGHs28fY332M7a1wKDWU6yqDgsSFO9ck2xwKB4Bja7TMyhIVQYKUZKtbmAiN/sE8WqRzO6FA7wvPfKGdzCUC2511bQOXZb+Thj/ihFU/Xbu8SLk4b+0EfMqx/uF6EAaR7ZQy6ZY9zfqRUEGCF7hjDM1IzlQ69kJI0Ztf2VHA2uvP9npw0NBSLsPNIesiIByXNH8aMJFgGr2yXf4YTd68pHZrKk8pMV105QHP7aNpZ6CZhlbHQ9/Alb+E018MOpW+tizRN4PZl+G5v9BDOKb/nb2y86vE+oqtvxbB5O7+vGv5snNvn7yxeRfvVW6icW0Clv/USmYW5YagDpQn4hrlSGmV2nt9/XYWgawPgSIYMNE2654KZCHsJdkKXWsuhKJUK5yhbDUCqvhsJGbCDxm8i1lwcPCqUe53Em5xfrKjDy/2QPXcynaonku+n/z4r+v1k5+sL1mNta41jByihezgddtqWIZ9rtAtRPEomv+',
};

const transalations = {
  en_US: {
    HOW_TO_VIEW: {
      WORKFLOW_STEP_ONE: '1. SCAN PRICE TAGS',
      WORKFLOW_STEP_TWO: '2. PAY',
      WORKFLOW_STEP_THREE: '3. REMOVE ALARM TAGS',
      START_BUTTON: 'START',
    },
    APP_CART_FOOTER: {
      TO_SCANNER_BUTTON: 'SCANNER',
      TO_CHECKOUT_BUTTON: 'CHECKOUT',
    },
    APP_SCANNER_FOOTER: {
      SHOW_CART_BUTTON: 'SHOW CART',
    },
    CART_SUMMARY: {
      ORDER_LABLE: 'Order',
      DISCOUNT_LABLE: 'Discount',
      TOTAL_LABLE: 'Total',
    },
    CART_ITEM: {
      ART_NR_LABLE: 'Art.Nr:',
      COLOR_LABLE: 'Color:',
      SIZE_LABLE: 'Size',
      CURRENCY_LABLE: 'USD',
    },
    CART_VIEW: {
      CART_EMPTY_MESSAGE: 'Your shoppingbag is empty!',
    },
  },
  sv_SE: {
    HOW_TO_VIEW: {
      WORKFLOW_STEP_ONE: '1. SKANNA PRISLAPPAR',
      WORKFLOW_STEP_TWO: '2. BETALA',
      WORKFLOW_STEP_THREE: '3. TA BORT LARM',
      START_BUTTON: 'START',
    },
    APP_CART_FOOTER: {
      TO_SCANNER_BUTTON: 'SKANNER',
      TO_CHECKOUT_BUTTON: 'BETALNING',
    },
    APP_SCANNER_FOOTER: {
      SHOW_CART_BUTTON: 'VISA VARUKORG',
    },
    CART_SUMMARY: {
      ORDER_LABLE: 'Order',
      DISCOUNT_LABLE: 'Rabatt',
      TOTAL_LABLE: 'Summa',
    },
    CART_ITEM: {
      ART_NR_LABLE: 'Art.Nr:',
      COLOR_LABLE: 'Färg:',
      SIZE_LABLE: 'Storlek',
      CURRENCY_LABLE: 'kr',
    },
    CART_VIEW: {
      CART_EMPTY_MESSAGE: 'Kundkorgen är tom!',
    },
  },
};

const getLocale = () => {
  switch (appSettings.LOCALE) {
    case 'sv_SE':
      return transalations.sv_SE;
    case 'en_US':
      return transalations.en_US;
    default:
      return transalations.en_US;
  }
};

const getApiURL = () => {
  if (appSettings.LOCAL_HOST_API) {
    return appSettings.API_URL_LOCAL_HOST;
  }
  return appSettings.API_URL_CLOUD;
};

export { appSettings, getLocale, getApiURL };
