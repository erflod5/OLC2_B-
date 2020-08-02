import { Component } from '@angular/core';
import Parser from '../app/grammar/grammar'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  entrada = "5*(1+3+20) - ((1+2)*(3+4))";
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
    try {
      const value = Parser.parse(this.entrada);
      this.salida = value + '';  
    } catch (error) {
      alert("Aun no valido errores")
    }
  }
}
