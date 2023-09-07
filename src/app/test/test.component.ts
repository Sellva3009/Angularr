import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  name = 'Dhoni';

  myId = 'id123';

  isDisabled = true;
  successClass = 'text-success';
  hasError = true;
  isSpecial = true;
  messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };
  highlightColor = 'orange';
  titleStyles = {
    color: 'blue',
    fontStyle: 'italic',
  };

  greetname() {
    return 'Hello ' + this.name;
  }

  greeting = '';
  info = '';
  onClick(event: any) {
    console.log('Welcome to WebDive');
    console.log(event);
    this.greeting = 'This is WebDive';
    this.info = event.type;
  }

  logMessage(value: any) {
    console.log(value);
  }

  twowayBinding = '';

  displayName = true;

  displayNameWithElse = false;

  displayName2 = false;

  color = 'blue';

  colors = ["red", "blue", "green", "yellow"]

  lowercase = "lowercase";
  uppercase = "uppercase";
  titlecase = "It will change to titlecase";
  person = {
    "firstname": "MS",
    "lastname": "Dhoni"
  }

  date = new Date();

  @Input('parentData') dataFromParent: any;

  @Output() public childEvent = new EventEmitter();

  fireEvent(): void {
    this.childEvent.emit('This is from Child Component');
  }
}
