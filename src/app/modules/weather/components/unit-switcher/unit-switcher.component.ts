import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-unit-switcher',
  templateUrl: './unit-switcher.component.html',
  styleUrls: ['./unit-switcher.component.scss']
})
export class UnitSwitcherComponent {
  @Output() unitChange = new EventEmitter<string>();

  public switchTempUnit(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedUnit = selectElement.value;
    this.unitChange.emit(selectedUnit);
  }

}
