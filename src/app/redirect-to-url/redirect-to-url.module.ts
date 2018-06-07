import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedirectToUrlComponent } from './_components/redirect-to-url.component';

@NgModule({
    declarations: [RedirectToUrlComponent],
    imports: [ CommonModule ],
    exports: [RedirectToUrlComponent],
    providers: [],
})
export class RedirectToUrlModule {}
