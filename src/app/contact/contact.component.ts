import { Component } from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  userName:string=""
  isEmpName(){
    let input=$("#userName")
    let label = $('label[for="userName"]');
    if(($(input).val).length>0){
      $(label).css("top", "0px");
    }
    else{
      $(label).css("top", "40");
    }
  }
  isEmpAge(){
    let input=$("#userAge")
    let label = $('label[for="userAge"]');
    if(($(input).val).length>0){
      $(label).css("top", "0px");
    }
    else{
      $(label).css("top", "40px");
    }
  }
  isEmpEmail(){
    let input=$("#userEmail")
    let label = $('label[for="userEmail"]');
    if(($(input).val).length>0){
      $(label).css("top", "0px");
    }
    else{
      $(label).css("top", "40px");
    }
  }
  isEmppassword(){
    let input=$("#userpassword")
    let label = $('label[for="userpassword"]');
    if(($(input).val).length>0){
      $(label).css("top", "0px");
    }
    else{
      $(label).css("top", "40px");
    }
  }


}
