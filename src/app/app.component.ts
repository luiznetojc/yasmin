import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  senhaCorreta = 'yasmin';
  senhaDigitada = '';
  acessoPermitido = false;
  senhaIncorreta = false;

  verificarSenha() {
    if (this.senhaDigitada === this.senhaCorreta) {
      this.acessoPermitido = true;
      this.senhaIncorreta = false;
    } else {
      this.acessoPermitido = false;
      this.senhaIncorreta = true;
    }
  }
}
