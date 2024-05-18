import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { Subscription, interval } from 'rxjs'

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [FormsModule, MatInputModule],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss',
})
export class CountdownComponent {
  titleText: string = ''
  timerText: string = ''
  selectedDate: Date | null = null
  currentDate: Date = new Date()
  private timerSubscription: Subscription | undefined

  ngOnInit() {
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

  updateCountdown(event?: any) {
    if (this.selectedDate) {
      const timeDifference = this.selectedDate.getTime() - this.currentDate.getTime()

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

    if (this.selectedDate.getTime() === this.currentDate.getTime()) {
      this.timerText = 'Today is the day!'
      this.stopCountdownTimer()
    } else if (this.selectedDate.getTime() < this.currentDate.getTime()) {
      this.timerText = 'Your date has already come and gone! Please select a new date.'
      this.stopCountdownTimer()
    } else {
      this.updateCountdown()
    }
  }
}
