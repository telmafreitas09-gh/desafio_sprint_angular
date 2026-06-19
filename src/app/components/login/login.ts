import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html', 
  styleUrls: ['./login.css']    
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    // Configura os campos do formulário e diz que são obrigatórios
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    const { username, password } = this.loginForm.value;

    if (username === 'admin' && password === '123456') {
      this.router.navigate(['/home']); 
    } else {
      this.errorMessage = 'Usuário ou senha incorretos.';
    }
  }
}