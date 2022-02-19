import {Component, OnInit} from '@angular/core';
import {HttpService} from "../shared/http.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.scss']
})
export class CustomersDetailsComponent implements OnInit {

  form = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required, Validators.minLength(8)]],
    location: ['', [Validators.required]],
  })

  constructor(private httpService: HttpService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    // this.createControls()
  }

  onSubmit(): void {
    this.httpService.createData(this.form.value)
    this.clearForm()
  }

  private createControls(): void {
    this.form.controls['name'].setValue('John Smith')
    this.form.controls['email'].setValue('joh@gmail.com')
    this.form.controls['mobile'].setValue('12346789')
    this.form.controls['location'].setValue('SomeHere')
  }

  private clearForm(): void {
    Object.keys(this.form.controls).forEach(key => this.form.controls[key].setValue(null))
  }

}
