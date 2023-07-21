module.exports = {
  loginCred:{
    EMAIL: 'prashantdwivedi.sfdc@gmail.com',
    PASSWORD: '^4D1JwVO44RSHIoD'
  },

  siteInfo: {
    COUNTRY_CODE: 'en-gb',
    SCHEDULE_ID: '50483002',
    FACILITY_ID: '17',

    get APPOINTMENTS_JSON_URL(){
      return `https://ais.usvisa-info.com/${this.COUNTRY_CODE}/niv/schedule/${this.SCHEDULE_ID}/appointment/days/${this.FACILITY_ID}.json?appointments%5Bexpedite%5D=false`
    },

    get LOGIN_URL () {
      return `https://ais.usvisa-info.com/${this.COUNTRY_CODE}/niv/users/sign_in`
    }
  },
  IS_PROD: process.env.NODE_ENV === 'prod',
  NEXT_SCHEDULE_POLL: process.env.NEXT_SCHEDULE_POLL || 60_000, // default to 30 seconds
  MAX_NUMBER_OF_POLL: process.env.MAX_NUMBER_OF_POLL || 250, // number of polls before stopping
  NOTIFY_ON_DATE_BEFORE: '2023-08-31', // in ISO format i.e YYYY-MM-DD

  NOTIFY_EMAILS: 'prashantdwivedi.sfdc@gmail.com', // comma separated list of emails
  mailgun: {
    USERNAME: 'prashantdwivedi.sfdc@gmail.com',
    DOMAIN: 'sandbox1a4569e8241644108c36e4da1201758b.mailgun.org',
    API_KEY: 'key-ced649bd9fc7e638f60c210b594fc828',
  }
}
