import {Component, OnInit} from '@angular/core';
import {HttpService} from "../shared/http.service";
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {FORM_ERRORS, FORM_LABELS, FORM_PLACEHOLDERS, FORM_SUCCESS, FORM_VALIDATION_MESSAGES} from "../form-data";
import {validCustomer} from "../customer";
import {emailValidators,} from "../custom-validators";

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.scss']
})
export class CustomersDetailsComponent implements OnInit {

  formLabels = FORM_LABELS
  formPlaceholder = FORM_PLACEHOLDERS
  formSuccess = FORM_SUCCESS
  formErrors: any = FORM_ERRORS
  validationMessages: any = FORM_VALIDATION_MESSAGES
  userForm!: FormGroup

  private user: validCustomer = new validCustomer(null, null, null, null)

  constructor(private httpService: HttpService, private fb: FormBuilder) {
  }

  get form(): { [key: string]: AbstractControl } {
    return this.userForm.controls
  }

  ngOnInit(): void {
    this.buildForm()
    // this.createControls()
  }

  onSubmit(): void {
    this.httpService.createData(this.userForm.value)
    this.clearForm()
  }

  onValueChanged(): void {
    const form = this.userForm

    Object.keys(this.formErrors).forEach(field => {
      this.formErrors[field] = ''

      const control = form.get(field)
      if ((control?.dirty || control?.touched) && control.invalid) {
        const messages = this.validationMessages[field]

        Object.keys(control.errors as ValidationErrors).some(key => this.formErrors[field] = messages[key])
      }
    })
  }

  private buildForm(): void {
    this.userForm = this.fb.group({
      name: [this.user.name, [Validators.required, Validators.minLength(4), Validators.maxLength(23)]],
      email: [this.user.email, [Validators.required, emailValidators]],
      mobile: [this.user.mobile, [Validators.required, Validators.minLength(9), Validators.maxLength(13)]],
      location: [this.user.location, [Validators.required]]
    })
    this.userForm.valueChanges.subscribe((data) => this.onValueChanged())
  }

  private createControls(): void {
    this.userForm.controls['name'].setValue('John Smith')
    this.userForm.controls['email'].setValue('joh@gmail.com')
    this.userForm.controls['mobile'].setValue('12346789')
    this.userForm.controls['location'].setValue('SomeHere')
  }

  private clearForm(): void {
    Object.keys(this.userForm.controls).forEach(key => this.userForm.controls[key].setValue(null))
  }

}
