import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  show_sack(){
    // tslint:disable-next-line:prefer-const
    let elem = document.getElementById('snackbar');
   // let  btnvar1= document.getElementById('but1');
   // let  btnvar2= document.getElementById('but2');

   // console.log(btnvar1.innerText);
    elem.className = 'show';
    setTimeout(() => { elem.className = elem.className.replace('show', ''); }, 3000);
  }
}
