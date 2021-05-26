import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.appService.recuperarSwapiInfo("people/1/").subscribe((result) => {
      // caso de certo, a info vai mostrar no console do navegador
      console.log(result)
    })
  }

}
