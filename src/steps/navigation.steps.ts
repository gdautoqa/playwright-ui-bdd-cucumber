import { When } from '@cucumber/cucumber';
import HorizontalSliderPage from '../pages/horizontalSliderPage';
import HoversPage from '../pages/hoversPage';
import JavaScriptAlertsPage from '../pages/javaScriptAlertsPage';
import KeyPressesPage from '../pages/keyPressesPage';
import { SortableDataTablesPage } from '../pages/sortableDataTablesPage';

When(
  'I navigate to the generic {string} page',
  async function (pageName: string) {
    const urlMap: { [key: string]: string } = {
      'File Download': '/download',
      'Form Authentication': '/login',
      'Add/Remove Elements': '/add_remove_elements/',
      Checkboxes: '/checkboxes',
      'Context Menu': '/context_menu',
      'Digest Authentication': '/digest_auth',
      'Drag and Drop': '/drag_and_drop',
      Dropdown: '/dropdown',
      'Dynamic Loading': '/dynamic_loading',
      'Dynamic Controls': '/dynamic_controls',
      'File Upload': '/upload',
      'Multiple Windows': '/windows',
      'Horizontal Slider': '/horizontal_slider',
      Hovers: '/hovers',
      'JavaScript Alerts': '/javascript_alerts',
      'Key Presses': '/key_presses',
      'Shifting Content': '/shifting_content',
      'Sortable Data Tables': '/tables',
    };

    const path = urlMap[pageName];
    if (!path) throw new Error(`Page "${pageName}" is not implemented.`);
    await this.page.goto(`https://the-internet.herokuapp.com${path}`);
  },
);

When('I click on {string} link', async function (linkText: string) {
  if (linkText === 'Key Presses') {
    this.keyPressesPage = new KeyPressesPage(this.page);
    await this.keyPressesPage.clickKeyPressesLink();
  } else if (linkText === 'Hovers') {
    this.hoversPage = new HoversPage(this.page);
    await this.hoversPage.navigateToHomePage();
    await this.hoversPage.clickHoversLink();
  } else if (linkText === 'Horizontal Slider') {
    this.horizontalSliderPage = new HorizontalSliderPage(this.page);
    await this.horizontalSliderPage.clickHorizontalSliderLink();
  } else if (linkText === 'Sortable Data Tables') {
    this.sortableDataTablesPage = new SortableDataTablesPage(this.page);
    await this.sortableDataTablesPage.clickSortableTablesLink();
  } else if (linkText === 'JavaScript Alerts') {
    this.javascriptAlertsPage = new JavaScriptAlertsPage(this.page);
    await this.javascriptAlertsPage.clickJavaScriptAlertsLink();
  } else {
    await this.page.click(`text=${linkText}`);
  }
});
