import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpParamsInterceptor, HttpErrorsInterceptor } from './interceptors';

@NgModule({
    imports: [CommonModule, HttpClientModule],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpParamsInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorsInterceptor,
            multi: true,
        },
    ],
    declarations: [],
    exports: [HttpClientModule],
})
export class CoreModule {}
