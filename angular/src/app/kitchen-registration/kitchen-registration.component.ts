import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-kitchen-menu-form',
  templateUrl: './kitchen-registration.component.html',
  styleUrls: ['./kitchen-registration.component.css']
})
export class KitchenRegistrationComponent implements OnInit {
  timings:[String] = ['7:00 am', '8:00 am', '9:00 am',
    '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm',
    '6:00 pm', '7:00 pm', '8:00 pm', '9:00 pm', '10:00 pm', '11:00 pm', '5:00 am', '6:00 am'
  ];
  myForm: FormGroup;
  successMessage: String = '';
  constructor(private _myservice: MyserviceService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) {
    this.myForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      kitchenid: new FormControl(null, Validators.required)
    });

  }

  isValid(controlName) {
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched;
  }

  ngOnInit() {
  }

}
