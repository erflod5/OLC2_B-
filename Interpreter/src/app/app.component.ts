import { Component } from '@angular/core';
import Parser from '../app/grammar/grammar'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  entrada = "";
  salida = "";
  options: any = {
    lineNumbers: true,
    theme:'blackboard',
    lineWrapping : true,
    indentWithTabs: true,
    mode: 'javascript',
    styleActiveLine: true,
  };

  ejecutar(){
    const value = Parser.parse(this.entrada);
    this.salida = value + '';
  }
}
