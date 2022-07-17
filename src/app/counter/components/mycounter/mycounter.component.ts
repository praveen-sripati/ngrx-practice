import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  AppState, decrement,
  increment,
  reset, selectCount
} from '../../store';

@Component({
  selector: 'app-mycounter',
  templateUrl: './mycounter.component.html',
  styleUrls: ['./mycounter.component.scss'],
})
export class MycounterComponent implements OnInit {
  count$!: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select(selectCount));
  }

  ngOnInit(): void {}

  increment(): void {
    this.store.dispatch(increment());
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }

  reset(): void {
    this.store.dispatch(reset());
  }
}
