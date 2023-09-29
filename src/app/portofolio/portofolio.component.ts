import { Component } from '@angular/core';
@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent {

  firefunc(){
    let items=document.querySelectorAll(".item .layer")
    let imgs=document.querySelectorAll(".item img")
    let modalbox=$("#modal")
    let innermodal=$(".innermodal")
  
       console.log("hekll")
      console.log(items)
      for (let i=0;i<items.length;i++){
        items[i].addEventListener("click",function(){
          $(modalbox).css("display", "flex");
          let sorc=imgs[i].getAttribute('src')
          console.log(sorc)
          $(innermodal).css("background-image", 'url('+sorc+')')
        })
       
  
      }
     let i=document.querySelector ("#modal")
     i?.addEventListener("click",function(e){
      $(modalbox).css("display", "none");
  
     })
    }
  
  }
  
