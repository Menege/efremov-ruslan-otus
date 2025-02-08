import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as TagsActions from './tags.actions';
import { TagService } from '../../services/tag.service'; // Сервис для работы с API

@Injectable()
export class TagsEffects {
  constructor(
    private actions$: Actions,
    private tagsService: TagService, // Сервис для взаимодействия с API
    private store: Store
  ) {}

  // Эффект для загрузки тега по ID
  loadTagById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TagsActions.loadTagById),
      mergeMap((action) =>
        this.tagsService.getTagById(action.id).pipe(
          map((tag) => TagsActions.loadTagByIdSuccess({ tag })),
          catchError((error) => of({ type: '[Tags] Load Tag By Id Failure', error }))
        )
      )
    )
  );

  // Эффект для сохранения тега
  saveTag$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TagsActions.saveTag),
      mergeMap((action) =>
        this.tagsService.saveTag(action.id, action.data).pipe(
          map((tag) => TagsActions.saveTagSuccess({ tag })),
          catchError((error) => of({ type: '[Tags] Save Tag Failure', error }))
        )
      )
    )
  );
}
