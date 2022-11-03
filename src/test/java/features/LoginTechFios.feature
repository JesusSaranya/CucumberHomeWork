
Feature: Techfios bank and cash New Account Functionality

Scenario Outline: User should be able to login with valid credentials and open a new account

Given User is on TechFios Login Page
When User enters username as "<username>"
When User enters password as "<password>"
And User Clicks on signin 
Then User should land on Dashboard page
When User Clicks on bankcash
When User Clicks on newAccount
When User enters accountTitle as "<accountTitle>" in accounts page
When User enters description as "<description>" in accounts page
When User enters initialBalance as "<initialBalance>" in accounts page
When User enters accountNumber as "<accountNumber>" in accounts page
When User enters contactPerson as "<contactPerson>" in accounts page
When User enters phone as "<Phone>" in accounts page
When User enters "<internetBankingURL>" in accounts page
When User clicks on SubmitButton
Then User should be able to validate account created successfully


Examples:
|username  |password|accountTitle|description|initialBalance|accountNumber|contactPerson|Phone|internetBakingURL|
|demo@techfios.com|abc123|Savings|My Account Savings|50000|2345|Saran|4567|https://www.bankofamerica.com/|