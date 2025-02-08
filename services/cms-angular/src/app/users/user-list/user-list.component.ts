import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'; // Ваш сервис для получения пользователей
import { Observable } from 'rxjs'; // Импорт Observable

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$!: Observable<any[]>; // Observable для списка пользователей

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Получаем Observable из сервиса
    this.users$ = this.userService.getUsers(); // возвращаем Observable
  }

  trackByUserId(index: number, user: any): number {
    return user.id; // Возвращаем уникальный идентификатор для каждого пользователя
  }
}
