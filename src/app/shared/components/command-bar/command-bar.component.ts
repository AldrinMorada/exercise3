import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit {

  @Output() actionEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  actionEvent(action: string){
    this.actionEmitter.emit(action);
  }
}
