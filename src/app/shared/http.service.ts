import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Customer} from "./customer";
import {catchError, Observable, of} from "rxjs";

const url = 'https://ng-test-firebase---20220213-default-rtdb.europe-west1.firebasedatabase.app/customers';
const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  customers: Customer[] = []

  constructor(private httpClient: HttpClient) {
  }


  // create => POST
  createData(customer: Customer) {
    this.httpClient.post<Customer>(`${url}.json`, customer, httpOptions).subscribe({
      next: res => this.customers.push({...{key: res.name}, ...customer}),
      error: catchError(this.errorHandler<Customer>('POST'))
    })
  }

  // read => GET
  getData() {
    this.httpClient.get<Customer[]>(`${url}.json`, httpOptions).subscribe({
      next: res => {
        Object.keys(res).forEach(key => this.customers.push({key, ...res[key as any]}))
      },
      error: catchError(this.errorHandler<Customer[]>('GET'))
    })
  }

  // update => PUT / PATCH
  updateData(customer: Customer, i: number): void {
    const {key, ...data} = customer
    this.httpClient.put<Customer>(`${url}/${key}.json`, data, httpOptions).subscribe({
      next: res => this.customers[i] = customer,
      error: catchError(this.errorHandler<Customer>('PUT'))
    })
  }

  // update => DELETE
  deleteData(customer: Customer): void {
    const {key, ...data} = customer
    this.httpClient.delete<void>(`${url}/${customer.key}.json`).subscribe({
      next: () => this.customers.splice(this.customers.indexOf(customer), 1),
      error: catchError(this.errorHandler<Customer>('DELETE'))
    })
  }

  private errorHandler<T>(operation: string, res?: T): any {
    return (err: any): Observable<T> => {
      console.error(`${operation} failed: ${err}`)
      return of(res as T)
    }
  }
}


