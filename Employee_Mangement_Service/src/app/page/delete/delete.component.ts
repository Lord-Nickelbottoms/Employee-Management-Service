import { Component } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  clickMethod(name: string) {
    if(confirm("Are you sure to delete this user?")) {
      console.log("Implement delete functionality here");
    }
  }
  
}
