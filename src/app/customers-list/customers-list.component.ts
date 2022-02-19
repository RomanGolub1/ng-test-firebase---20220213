import {Component, OnInit} from '@angular/core';
import {HttpService} from "../shared/http.service";
import {Customer} from "../shared/customer";

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  isEditPos: number | null = null
  isChanged = false
  private tempCustomer!: Customer

  constructor(public httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getData()
    this.tempCustomer = this.resetCustomer()
  }

  editCustomer(i: number): void {
    this.isEditPos = i
  }

  cancelEdit(): void {
    this.resetEditStatus()
  }

  saveCustomer(customer: Customer, i: number): void {
    const mergeCustomer: Customer = this.mergeCustomerProps(customer, this.tempCustomer)
    this.httpService.updateData(mergeCustomer, i)
    this.resetEditStatus()
  }

  deleteCustomer(customer: Customer): void {
    this.httpService.deleteData(customer)
  }

  setValue(key: string, original: string, value: string): void {
    const valueTrim = value.trim()

    if (value !== original && valueTrim !== this.tempCustomer[key as keyof Customer]) {
      this.isChanged = true
      this.tempCustomer[key as keyof Customer] = valueTrim
    }
  }

  private mergeCustomerProps<T>(original: T, temp: T): T {
    const result: T = {...original}

    Object.keys(temp).forEach(key => {
      if (temp[key as keyof T]) result[key as keyof T] = temp[key as keyof T]

    })

    return result
  }

  private resetEditStatus(): void {
    this.isEditPos = null
    this.isChanged = false
    this.tempCustomer = this.resetCustomer()
  }

  private resetCustomer = (): Customer => ({
    key: null,
    name: null,
    email: null,
    location: null,
    mobile: null
  })

}
