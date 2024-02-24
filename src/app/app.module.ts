import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar local de la app
import localEs from '@angular/common/locales/es-CU';
import { registerLocaleData } from '@angular/common';
// llamada a la funcion para registrar el idioma
registerLocaleData(localEs);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, AppRouterModule, VentasModule],
  providers: [
    {provide: LOCALE_ID, useValue:'es-CU'}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
/** 
 * Para configurar el idioma de la 
 * aplicacion de forma global se usa:
 *  // para seleccionar idioma
 *  import localEs from '@angular/common/locales/es-CU';
 *  // para regitrar idioma 
 * import { registerLocaleData } from '@angular/common';
 * 
 * luego se ubica en los providers como un objeto con los parametros:
 *  {provide: LOCALE_ID, useValue:'es-CU'}
 * // estos deven ser importados
*/