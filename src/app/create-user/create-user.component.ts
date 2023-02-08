import { Component, OnInit } from '@angular/core';
import { BackServiceService } from '../services/back-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
user:{mail:string, password:string} = {
  mail : "",
  password : ""

}



  constructor(private back : BackServiceService) { }

  ngOnInit(): void {

  }
testConnection(data:any){

  this.back.testConnection(data).subscribe((res: any) =>{
    console.log(res)
    if(res.token) localStorage.setItem('token', res.token);
  })
}
}
