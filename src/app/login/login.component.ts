import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;
  router: Router;
  loggedIn :boolean = null;

  constructor(private formBuilder: FormBuilder,_router: Router) { 
    this.messageForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.router = _router;
  }
  

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }

    this.success = true;
    localStorage.setItem("loggedIn", "true");
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.loggedIn = this.isLoggedIn();
    console.log(this.loggedIn);
    if (this.loggedIn)
      this.router.navigate(['/']);
  }

  isLoggedIn(){
    if (localStorage.getItem('loggedIn') == 'true'){return true;}
    return false;
  }

}
