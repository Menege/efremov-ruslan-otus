import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, defaultIfEmpty, Observable, throwError } from 'rxjs';
import { Tag } from '../models/tag.model';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  private apiUrl = 'http://your-api-url.com/tasks';

  constructor(private http: HttpClient) {}

  getTags(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  deleteTag(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getTagById(id: string): Observable<Tag> {
    return this.http.get<Tag>(`${this.apiUrl}/${id}`).pipe(
      defaultIfEmpty({ id: '', name: 'Тег не найден' })
    );
  }

  saveTag(id: string | undefined, data: Tag): Observable<Tag> {
    if (!id) {
      return this.http.post<Tag>(`${this.apiUrl}`, data).pipe(
        catchError((error) => {
          console.error('Ошибка при создании тега:', error);
          return throwError(() => new Error('Не удалось создать тег'));
        })
      );
    } else {
      return this.http.put<Tag>(`${this.apiUrl}/${id}`, data).pipe(
        catchError((error) => {
          console.error(`Ошибка при обновлении тега с id ${id}:`, error);
          return throwError(() => new Error('Не удалось обновить тег'));
        })
      );
    }
  }
}
