import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlsListComponent } from './_components/urls-list.component';

@NgModule({
    declarations: [ UrlsListComponent ],
    imports: [ CommonModule ],
    exports: [ UrlsListComponent ],
    providers: [],
})
export class UrlsListModule {}
