import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PartnersListComponent } from './partners/components/partners-list/partners-list.component';
import { MessageListComponent } from './messages/components/message-list/message-list.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
    },
    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path: 'messages',
        component: MessageListComponent
    },
    {
        path: 'partners',
        component: PartnersListComponent
    }
];
