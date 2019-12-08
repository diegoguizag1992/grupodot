import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  grupoDot = 'https://www.grupodot.com/';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  grupodot(){
    location.href = this.grupoDot;
  }

}
