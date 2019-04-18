import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './cutomers-list/customers-list.component';
import { FilterTextBoxComponent } from './cutomers-list/filter-textboxcomponent';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ CustomersComponent, CustomersListComponent, FilterTextBoxComponent],
    exports : [ CustomersComponent ]
})

export class CustomersModule {
    
}