import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectAllEntities } from '../selector';
import { fromEntityActions } from '../action';

@Component({
  selector: 'app-entities-page',
  templateUrl: './entities-page.component.html',
  styleUrls: ['./entities-page.component.scss']
})
export class EntitiesPageComponent implements OnInit {

  title = "Entities Page";

  entities$ = this.store.pipe(select(selectAllEntities));

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(fromEntityActions.loadEntities());
  }

}
