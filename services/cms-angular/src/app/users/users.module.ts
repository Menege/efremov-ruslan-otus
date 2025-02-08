import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { usersReducer } from './state/users.reducer';

@NgModule({
  declarations: [
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('users', usersReducer),
    EffectsModule.forFeature([]) // Для будущих эффектов
  ],
  exports: []
})
export class UsersModule {}
