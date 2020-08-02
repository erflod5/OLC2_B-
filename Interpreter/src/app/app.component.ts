import { Component } from '@angular/core';
import * as CodeMirror from 'codemirror';

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
    this.salida = this.entrada;
  }
}
