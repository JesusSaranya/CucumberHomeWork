$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/LoginTechFios.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on TechFios Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User Clicks on signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User Clicks on bankcash",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User Clicks on newAccount",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters accountTitle as \"\u003caccountTitle\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters description as \"\u003cdescription\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters initialBalance as \"\u003cinitialBalance\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters accountNumber as \"\u003caccountNumber\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters contactPerson as \"\u003ccontactPerson\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters phone as \"\u003cPhone\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters \"\u003cinternetBankingURL\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User clicks on SubmitButton",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "Phone",
        "internetBakingURL"
      ],
      "line": 25,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Savings",
        "My Account Savings",
        "50000",
        "2345",
        "Saran",
        "4567",
        "https://www.bankofamerica.com/"
      ],
      "line": 26,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3342924900,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on TechFios Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User Clicks on signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User Clicks on bankcash",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User Clicks on newAccount",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters accountTitle as \"Savings\" in accounts page",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters description as \"My Account Savings\" in accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters initialBalance as \"50000\" in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters accountNumber as \"2345\" in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters contactPerson as \"Saran\" in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters phone as \"4567\" in accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters \"\u003cinternetBankingURL\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User clicks on SubmitButton",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.User_is_on_TechFios_Login_page()"
});
formatter.result({
  "duration": 1331950000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginSteps.user_enters_the_username_as(String)"
});
formatter.result({
  "duration": 2206596500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginSteps.user_enters_the_password_as(String)"
});
formatter.result({
  "duration": 2120134700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_Clicks_on_signin()"
});
formatter.result({
  "duration": 2964720500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 8886800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_Clicks_on_bankcash()"
});
formatter.result({
  "duration": 3058423400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_Clicks_on_newAccount()"
});
formatter.result({
  "duration": 3473755300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Savings",
      "offset": 29
    }
  ],
  "location": "LoginSteps.user_enters_accountTitle_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 3106143600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Account Savings",
      "offset": 28
    }
  ],
  "location": "LoginSteps.user_enters_description_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 3136939200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 31
    }
  ],
  "location": "LoginSteps.user_enters_initialBalance_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 3096372000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2345",
      "offset": 30
    }
  ],
  "location": "LoginSteps.user_enters_accountNumber_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 3081457400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Saran",
      "offset": 30
    }
  ],
  "location": "LoginSteps.user_enters_contactPerson_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 3077502700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4567",
      "offset": 22
    }
  ],
  "location": "LoginSteps.user_enters_phone_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 3094283800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cinternetBankingURL\u003e",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_in_accounts_page(String)"
});
formatter.result({
  "duration": 3097002100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_submitButton()"
});
formatter.result({
  "duration": 3796783300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 3040208300,
  "status": "passed"
});
formatter.after({
  "duration": 191465700,
  "status": "passed"
});
});