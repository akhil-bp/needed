in child componemt *******************************************************
import { Output, EventEmitter} from '@angular/core';
@Output() private a = new EventEmitter<string>();

 getname(data){
    this.a.emit(data.target.value)
  }
  
  
in parent component ****************************************************
 <app-child (a)="val($event)"></app-child>
  val(val){
    console.log(val)
  }
