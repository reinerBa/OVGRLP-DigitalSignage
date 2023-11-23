import { By, PageElement } from '@serenity-js/web'

// removal of Target.
// https://serenity-js.org/handbook/getting-started/upgrading-to-serenity-js-3/#portable-pageelements

export class Roomcontrol {
  static versionElement = PageElement.located(By.css('body > app-root > div > div.alert.alert-app-level')).describedAs('version element')
  static titleNavField = Target.the('title element').located(by.css('body > app-root > div > header > div.branding > a > span'))

  static DisplayItems = Target.all('display items').located(by.css('body > app-root > div > div.content-container > div > app-home > li > a'))
  static FirstDisplayLi = Target.the('display items').located(by.css('body > app-root > div > div.content-container > div > app-home > li'))

  static clockTimeTableElement = Target.the('clock time header').located(by.css('app-root clr-dg-column.ds-termin-column-uhrzeit.datagrid-column.datagrid-fixed-width > div > span'))

  static AppointmentListItems = Target.all('appointment entries').located(by.css('app-root app-display app-termine clr-datagrid clr-dg-table-wrapper > div.datagrid-body > clr-dg-row'))

  static displayStatusCard = Target.the('display card').located(by.css('app-root app-display app-display-control > div > div.card-header'))
}
