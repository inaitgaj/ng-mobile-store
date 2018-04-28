import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  form: FormGroup;
  messages : string ;
    loading: boolean = false;
  httpPrefix : string = environment.httpPrefix;
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .filter(params => params.messages)
      .subscribe(params => {
        console.log(params); // {order: "popular"}

        this.messages = params.messages;
        console.log(this.messages);
        console.log(decodeURIComponent(this.messages)); // popular
      });
  }
  // onFileChange(event) {
  //    let reader = new FileReader();
  //    if(event.target.files && event.target.files.length > 0) {
  //      let file = event.target.files[0];
  //      reader.readAsDataURL(file);
  //      reader.onload = () => {
  //        this.form.get('avatar').setValue({
  //          filename: file.name,
  //          filetype: file.type,
  //          value: reader.result.split(',')[1]
  //        })
  //      };
  //    }
  //  }
   // onSubmit(formValues) {
   //   if (this.form.valid) {
   //     //check service for true, navigate.
   //     this.adminService.authenticate(formValues)
   //   }
   // }
}
