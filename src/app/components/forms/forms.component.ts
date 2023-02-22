import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserType } from 'src/generated-types';
import { AuthService } from './auth.service';
// import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {


  active: boolean = false;

  public subscriberForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    tel: new FormControl('', [Validators.required])
  });

  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
  constructor(private route: ActivatedRoute, private router: Router, private snackbar: MatSnackBar, private authService: AuthService) {
    this.route.params.subscribe(param => {
      this.active = (param['active'] == 'true') ? true : false;
    });
  }

  ngOnInit(): void {
  }


  public async register() {
    if (this.subscriberForm.valid) {
      const controls = this.subscriberForm.controls;
      try {
        const userDto = {
          id: ''!,
          image: ''!,
          isAdmin: false,
          email: controls['email'].value!,
          username: controls['username'].value!,
          password: controls['password'].value!,
          tel: controls['tel'].value!
        }
        this.authService.signUp(userDto).subscribe({
          next: (res: any) => {
            if (res._id) {
              this.subscriberForm.controls['email'].setValue("");
              this.subscriberForm.controls['username'].setValue("");
              this.subscriberForm.controls['password'].setValue("");
              this.subscriberForm.controls['tel'].setValue("");
              this.snackbar.open("Inscription terminée avec succès!", '', {
                duration: 3000,
                // verticalPosition: 'top',
                // horizontalPosition: 'center',
              });
              // setTimeout(() => {
              //   location.reload();
              // }, 1000);
            }
          },
          error: (err: any) => {
            console.log(err);

            // if (err.error.message = "Email already exist!") {
            // this.snackbar.open("L'adresse email est déjà utilisé", '', {
            //   duration: 3000,
            //   panelClass: ['kivy']
            // });
            // } else {
            // this.snackbar.open("Une erreur s'est produite", '', {
            //   duration: 3000,
            //   panelClass: ['kivy']
            // });
            // }
          }
        })
      } catch (err) {
        console.log(err);
      }
    }
  }

  public async login() {
    try {
      if (this.loginForm.valid) {
        const controls = this.loginForm.controls;
        const data = {
          email: controls['email'].value!,
          password: controls['password'].value!
        }
        this.authService.login(data).subscribe({
          next: (res: any) => {
            console.log(res);
            if (res.token) {
              sessionStorage.setItem('token', res.token);
              // this.router.navigate(['/sell']);
              this.snackbar.open("Connecté", '', {
                duration: 3000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
              });
              // location.assign('/sell');
            } else {
              console.log(res.message);
            }
          },
          error: (err: any) => {
            console.log("ERR: ", err);
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
}
