import { Component } from '@angular/core';
import { book } from '../modules/book.module';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  id = 0;
  booktitle: string = " ";
  bookauthor: string = "";
  allbooks: book[] = [];


ngOnInit(){


 let allitems= localStorage.getItem("books");

 if(allitems){
   this.allbooks=JSON.parse(allitems);
 }



}

 

   addbook(){

    let newbook:book ={
      id: this.id+1,
      title: this.booktitle,
      author: this.bookauthor,
     
    }


   

     this.allbooks.push(newbook);

     localStorage.setItem("books",JSON.stringify(this.allbooks));
   }




   deletebook( id:number){

    this.allbooks = this.allbooks.filter(book=> book.id!=id);
localStorage.setItem("books",JSON.stringify(this.allbooks));


   }




}
