import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { selectIsAuthenticated } from './auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectIsAuthenticated).pipe(
      take(1), // Берем только первое значение (не подписываемся постоянно)
      map((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(['/login']); // Перенаправляем на страницу входа, если не авторизован
          return false;
        }
        return true;
      })
    );
  }
}
