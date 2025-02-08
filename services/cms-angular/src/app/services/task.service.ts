import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://your-api-url.com/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getTaskById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addTask(taskData: any): Observable<any> {
    return this.http.post(this.apiUrl, taskData);
  }

  updateTask(id: string, taskData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, taskData);
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
