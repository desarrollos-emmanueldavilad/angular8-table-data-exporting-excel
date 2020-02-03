import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  posts: any = [];

  fileName= 'ExcelSheet.xlsx';

  constructor(private _postService: PostsService) { }

  ngOnInit() {
    this.getData();
  }

  exportexcel(): void
  {
     /* table id is passed over here */
     let element = document.getElementById('excel-table');
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Dashboard');

     /* save to file */
     XLSX.writeFile(wb, this.fileName);

  }

  getData(){
    this._postService.getUsers()
    .subscribe((data:any)=>{
      this.posts = data;
      console.log(this.posts)
    })
  }

}
