import {Component, OnInit} from '@angular/core';
import {HttpService} from "../shared/http.service";

@Component({
  selector: 'app-customers-host',
  templateUrl: './customers-host.component.html',
  styleUrls: ['./customers-host.component.scss']
})
export class CustomersHostComponent implements OnInit {

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    // this.httpService.createData()
  }

}
