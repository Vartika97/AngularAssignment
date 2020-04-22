import { Component } from '@angular/core';
import { AssignmentComponent, Todo } from './../../assignment.component';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
  selectedRow:any
 headers:string[]= ["ID","Type","Description","Completed"];
 todos :Todo[] = new AssignmentComponent().todos;

 ChangeClass(event:Event,item:Todo)
{
  console.log(item.id);
  this.selectedRow=item.id;
}
}
