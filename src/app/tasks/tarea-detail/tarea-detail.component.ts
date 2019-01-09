import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../tarea';
@Component({
  selector: 'app-tarea-detail',
  templateUrl: './tarea-detail.component.html',
  styleUrls: ['./tarea-detail.component.css']
})
export class TareaDetailComponent implements OnInit {
  @Input() task: Task;
  constructor() { this.show = false; }

  public show: boolean;

  ngOnInit() {}

  }

