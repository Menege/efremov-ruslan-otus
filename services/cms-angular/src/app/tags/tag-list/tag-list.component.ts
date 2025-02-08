import { Component, OnInit } from '@angular/core';
import { TagService } from '../../services/tag.service';
import { Observable } from 'rxjs';
import { Tag } from '../../models/tag.model';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {
  tags$!: Observable<Tag[]>; // Теперь это Observable

  constructor(private tagService: TagService) {}

  ngOnInit(): void {
    this.fetchTags();
  }

  fetchTags(): void {
    this.tags$ = this.tagService.getTags();
  }

  deleteTag(id: string): void {
    this.tagService.deleteTag(id);
  }
}
