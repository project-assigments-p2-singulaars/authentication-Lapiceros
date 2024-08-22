import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { User } from '../shared/models/user';
import { Router } from '@angular/router';
import { errorInterceptor } from '../interceptor/error.interceptor';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  private service = inject(AuthService);
  private formBuilder = inject(FormBuilder);
  private router = inject(Router)
  registerForm!: FormGroup;

  ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
        email:["", Validators.required],
        password:["",Validators.required]
      })
  }

  submit(){
    if(this.registerForm.valid){
      const user: User = {
        email: this.registerForm.controls["email"].value,
        password: this.registerForm.controls["password"].value,
      } 
      this.service.register(this.registerForm.value);
      this.router.navigateByUrl('/login');
    }else{
      alert('Algo malio sal intentalo de nuevo cabezon');
    }
  }
}
