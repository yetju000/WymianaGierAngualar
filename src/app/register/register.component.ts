import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  messageForm: FormGroup;
  submitted : boolean = false;
  success : boolean = false;
  loggedIn : boolean = false;
  router: Router;

  constructor(private formBuilder: FormBuilder, _router: Router) { 
    this.messageForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.router = _router;
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }

    this.success = true;
  }

  ngOnInit() {
    this.loggedIn = this.isLoggedIn();
    console.log(this.loggedIn);
    if (this.loggedIn)
      this.router.navigateByUrl('/');
  }

  isLoggedIn(){
    if (localStorage.getItem('loggedIn') == 'true'){return true;}
    return false;
  }

}
