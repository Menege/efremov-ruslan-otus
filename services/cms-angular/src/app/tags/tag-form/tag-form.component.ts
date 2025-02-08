import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { selectCurrentTag } from '../state/tags.selectors';
import { loadTagById, saveTag } from '../state/tags.actions';

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.css']
})
export class TagFormComponent implements OnInit {
  tagForm!: FormGroup;
  tagId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Создание формы
    this.tagForm = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });

    // Получение ID тега из параметров маршрута
    this.tagId = this.route.snapshot.paramMap.get('id');

    if (this.tagId) {
      // Если редактируем существующий тег — загружаем данные
      this.store.dispatch(loadTagById({ id: this.tagId }));

      // Подписка на текущий тег из Store
      this.store.select(selectCurrentTag).subscribe((tag) => {
        if (tag) {
          this.tagForm.patchValue({
            name: tag.name,
            description: tag.description
          });
        }
      });
    }
  }

  onSubmit(): void {
    if (this.tagForm.valid && this.tagId) {
      const tagData = this.tagForm.value;
      this.store.dispatch(saveTag({ id: this.tagId, data: tagData }));
      this.router.navigate(['/tags']);
    }
  }
}
