import { Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { Subscription, interval } from 'rxjs'
import { LocalStorageService } from '../local-storage.service'

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [FormsModule, MatInputModule],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss',
})
export class CountdownComponent implements OnInit {
  titleText: string = 'Welcome to the countdown app!'
  timerText: string = 'Please select a time to start the countdown.'
  selectedDate: Date | null = null
  private timerSubscription: Subscription | undefined

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.titleText = this.localStorageService.getTitle() || ''
    this.startCountdownTimer()
  }

  ngOnDestroy() {
    this.stopCountdownTimer()
  }

  startCountdownTimer() {
    this.timerSubscription = interval(1000).subscribe(() => {
      this.updateCountdown()
    })
  }

  stopCountdownTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe()
    }
  }

  updateCountdown() {
    if (this.selectedDate) {
      const currentDate = new Date()
      const timeDifference = this.selectedDate.getTime() - currentDate.getTime()

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

        this.timerText = `${days} days, ${hours}h, ${minutes}m, ${seconds}s`
      } else {
        this.timerText = 'Times up! Your selected date has arrived!'
      }
    }
  }

  onDateChange(event: any) {
    this.selectedDate = new Date(event.target.value)
    this.updateCountdown()
  }

  onTitleChange(event: any) {
    this.titleText = event.target.value
    this.localStorageService.setTitle(this.titleText)
  }
}
