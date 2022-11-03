package stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.BankCashNewAccountpage;
import page.DashBoardpage;
import page.ListAccountPage;
import page.LoginPageHomeWork;
import page.TestBaseHomeWork;

public class LoginSteps extends TestBaseHomeWork {

	LoginPageHomeWork loginpage;
	DashBoardpage dashboardpage;
	BankCashNewAccountpage bankcashpage; 
	ListAccountPage listaccountpage;

	@Before
	public void setup()
	{
		initDriver();
		loginpage   = PageFactory.initElements(driver, LoginPageHomeWork.class);
		dashboardpage =PageFactory.initElements(driver, DashBoardpage.class);
		bankcashpage =PageFactory.initElements(driver, BankCashNewAccountpage.class);
		listaccountpage= PageFactory.initElements(driver, ListAccountPage.class);
	}

	@Given("^User is on TechFios Login Page$")
	public void User_is_on_TechFios_Login_page() 
	{
		driver.get("https://techfios.com/billing/?ng=login/");
	}

	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_the_username_as(String username)
	{
		loginpage.insertUserName(username);
	}
	
	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_the_password_as(String password)
	{
		loginpage.insertPassWord(password);
	}

	@And("^User Clicks on signin$")
	public void user_Clicks_on_signin() 
	{
		loginpage.clickSignInButton();
	}
	
	
	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page()
	{
		String expectedTitle = "Dashboard- iBilling";
		String actualTitle = loginpage.getPageTitle();
		Assert.assertEquals(expectedTitle, actualTitle);
	}
	
	@When("^User Clicks on bankcash$")
	public void user_Clicks_on_bankcash()
	{
	    dashboardpage.clickBankCash();
	}
	
	@When("^User Clicks on newAccount$")
	public void user_Clicks_on_newAccount()
	{
		dashboardpage.clickNewAccount();	
	}

	@When("^User enters accountTitle as \"([^\"]*)\" in accounts page$")
	public void user_enters_accountTitle_as_in_accounts_page(String accountTitle)
	{
		bankcashpage.enterAccountTitle(accountTitle + generateRandom(999));
	}
	
	@When("^User enters description as \"([^\"]*)\" in accounts page$")
	public void user_enters_description_as_in_accounts_page(String description)
	{
		bankcashpage.enterDescription(description);
	}
	
	
	@When("^User enters initialBalance as \"([^\"]*)\" in accounts page$")
	public void user_enters_initialBalance_as_in_accounts_page(String initialbalance)
	{
		bankcashpage.enterInitialBalance(initialbalance);
	}
	
	@When("^User enters accountNumber as \"([^\"]*)\" in accounts page$")
	public void user_enters_accountNumber_as_in_accounts_page(String accountnumber)
	{
		bankcashpage.enterAccountnumber(accountnumber + generateRandom(99999));
	}
	
	@When("^User enters contactPerson as \"([^\"]*)\" in accounts page$")
	public void user_enters_contactPerson_as_in_accounts_page(String contactperson)
	{
		bankcashpage.enterContactPerson(contactperson);
	}
	
	@When("^User enters phone as \"([^\"]*)\" in accounts page$")
	public void user_enters_phone_as_in_accounts_page(String phone)
	{
		bankcashpage.enterPhone(phone +generateRandom(9999));
	}
	
	@When("^User enters \"([^\"]*)\" in accounts page$")
	public void user_enters_in_accounts_page(String bankingUrl)
	{
	  bankcashpage.enterBankinUrl(bankingUrl);	
	}
	
	@When("^User clicks on SubmitButton$")
	public void user_clicks_on_submitButton()
	{
		bankcashpage.clickSubmitButton();
	}
	
	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully()
	{
		listaccountpage.getAccountHeader();

	}
	
	@After
	public void tearDown()
	{
		driver.close();
	}
	
	
	
	
	
	
	
	
	
	

}
