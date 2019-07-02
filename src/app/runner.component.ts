import { Component } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'runner-main',
  templateUrl: './runner.component.html',
  styleUrls: ['./runner.component.css']
})
export class RunnerComponent {
  output: string = 'test';

  constructor (){
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker('./runner.worker', { type: 'module' });
      worker.onmessage = ({ data }) => {
         
       console.log(`value : ${data}`);
        this.output = `value : ${data}`;
      };
      worker.postMessage('hello');
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
  
}
