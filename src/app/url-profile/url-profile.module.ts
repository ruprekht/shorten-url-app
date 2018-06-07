import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlProfileComponent } from './_components/url-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [ UrlProfileComponent ],
    imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
    exports: [ UrlProfileComponent ],
    providers: [],
})
export class UrlProfileModule {}
