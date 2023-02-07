import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { resolve } from 'dns';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {


  active: boolean = false;

  public subscriberForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    tel: new FormControl('', [Validators.required])
  });

  public loginForm = new FormGroup({
    mail: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(param => {
      this.active = (param['active'] == 'true') ? true : false;
    });
  }

  ngOnInit(): void {
  }



  // private userDto: CreateUserDto;

  // constructor(private userService: UsersService, private snackbar: MatSnackBar, private router: Router) { }




  public async register(): Promise<void> {

    // if (this.subscriberForm.valid) {
    //   const controls = this.subscriberForm.controls;
    //   try {
    //     this.userDto = {
    //       isAdmin: false,
    //       mail: controls['mail'].value,
    //       name: controls['username'].value,
    //       password: controls['password'].value,
    //       tel: controls['tel'].value
    //     }
    //     this.userService.usersControllerCreate({ body: this.userDto }).subscribe({
    //       next: res => {
    //         if (res._id) {
    //           this.subscriberForm.controls['mail'].setValue("");
    //           this.subscriberForm.controls['username'].setValue("");
    //           this.subscriberForm.controls['password'].setValue("");
    //           this.subscriberForm.controls['tel'].setValue("");


    //           this.snackbar.open("Inscription terminée avec succès!", '', {
    //             duration: 3000,
    //             // verticalPosition: 'top',
    //             // horizontalPosition: 'center',
    //           });
    //           setTimeout(() => {
    //             location.reload();
    //           }, 1000);
    //         }
    //       },
    //       error: err => {
    //         if (err.error.message = "Email already exist!") {
    //           this.snackbar.open("L'adresse email est déjà utilisé", '', {
    //             duration: 3000,
    //             panelClass: ['kivy']
    //           });
    //         } else {
    //           this.snackbar.open("Une erreur s'est produite", '', {
    //             duration: 3000,
    //             panelClass: ['kivy']
    //           });
    //         }
    //       }
    //     })
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
  }

  public async login() {
    // try {
    //   if (this.loginForm.valid) {
    //     const controls = this.loginForm.controls;
    //     const data = {
    //       mail: controls['mail'].value,
    //       password: controls['password'].value
    //     }
    //     this.userService.usersControllerLogin({ body: data }).subscribe({
    //       next: res => {
    //         if (res) {
    //           sessionStorage.setItem('token', res.token);
    //           location.assign('/home');
    //         }
    //       },
    //       error: err => {
    //         console.log("ERR: ", err);

    //         if (err.error.message == "Invalid password")
    //           this.snackbar.open("Mot de passe incorrect", '', {
    //             duration: 3000,
    //             panelClass: ['kivy']
    //           });
    //         else
    //           this.snackbar.open("Votre compte n'existe pas", '', {
    //             duration: 3000,
    //             panelClass: ['kivy']
    //           });
    //       }
    //     });
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  }

}
