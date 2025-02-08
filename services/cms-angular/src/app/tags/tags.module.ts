import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TagListComponent } from './tag-list/tag-list.component';
import { TagFormComponent } from './tag-form/tag-form.component';
import { tagsReducer } from './state/tags.reducer';

@NgModule({
  declarations: [
    TagListComponent,
    TagFormComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('tags', tagsReducer),
    EffectsModule.forFeature([]) // Для будущих эффектов
  ],
  exports: []
})
export class TagsModule {}
