import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(private authService: AuthService) {
    this.signUpForm = new FormGroup({
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPwd: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const { userEmail, userPwd } = this.signUpForm.value;
      this.authService.SignUp(userEmail, userPwd);
    }
  }
}
