import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MycounterComponent } from './components/mycounter/mycounter.component';
import { StoreModule } from '@ngrx/store';
import * as fromCounter from './store/reducers';

@NgModule({
  declarations: [MycounterComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromCounter.counterFeatureKey,
      fromCounter.reducers
    ),
  ],
  exports: [
    MycounterComponent
  ]
})
export class CounterModule {}
