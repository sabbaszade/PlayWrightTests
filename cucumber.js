
module.exports = {
  default: {
    require: ["./features/step_definitions/*.js"],
    format: ["progress", "html:cucumber-report.html"],
    publishQuiet: false,
    publishEnabled: false 
  }
}
//npx cucumber-js features/ErrorValidation.feature --exit
//npx cucumber-js --parallel 2 --exit --format html:cucumber-report.html
//npx cucumber-js features/greeting.feature --parallel 2 --exit --format html:cucumber-report.html