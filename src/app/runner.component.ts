import { Component } from '@angular/core';

@Component({
  selector: 'runner-main',
  templateUrl: './runner.component.html',
  styleUrls: ['./runner.component.css']
})
export class RunnerComponent {

}
if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker('./runner.worker', { type: 'module' });
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}