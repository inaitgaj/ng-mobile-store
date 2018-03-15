import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-nav-child',
  templateUrl: './nav-child.component.html',
  styleUrls: ['./nav-child.component.css']
})
export class NavChildComponent implements OnInit {
  @Input() usernameChild: string;
  @Input() cartQuantity: number;
  @Output() onLogout = new EventEmitter<Object>();
  constructor() { }
  logOut() {

  }
  ngOnInit() {
  }

  logOutChild(){
    console.log('child\'s viewThumb called');
    this.onLogout.emit();
  }

}
