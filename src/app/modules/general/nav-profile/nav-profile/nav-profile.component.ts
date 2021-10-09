import { Component, OnInit } from '@angular/core';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {faUserAstronaut} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-nav-profile',
  templateUrl: './nav-profile.component.html',
  styleUrls: ['./nav-profile.component.scss']
})
export class NavProfileComponent implements OnInit {
  faUserAstronaut = faUserAstronaut;
  constructor(private readonly library: FaIconLibrary) {
    this.library.addIcons(faUserAstronaut);
  }

  ngOnInit(): void {

  }

}
