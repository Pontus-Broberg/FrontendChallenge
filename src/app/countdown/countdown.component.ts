import { Component } from '@angular/core'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss',
})
export class CountdownComponent {}
