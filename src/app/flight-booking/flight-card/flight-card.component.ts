import { Flight } from './../../entities/flight';
import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnChanges {


  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() {
    console.debug('ctor', this.selected, this.item);
  }

  ngOnInit() {
    console.debug('ngOnInit', this.selected, this.item);

    this.selectedChange.next(true);

  }

  ngOnChanges(changes: SimpleChanges): void {
    
    console.debug('ngOnChanges', this.selected, this.item);

    if (changes['selected']) {
      console.debug('\tselected changed')
    }
    if (changes['item']) {
      console.debug('\titem changed')
    }

  }
  
  select(): void {
    this.selected = true;
    this.selectedChange.next(this.selected);
  }

  deselect(): void {
    this.selected = false;
    this.selectedChange.next(this.selected);
  }

}
