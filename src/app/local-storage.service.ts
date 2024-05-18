import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly TITLE_KEY = 'countdownTitle'
  private readonly DATE_KEY = 'countdownDate'

  setTitle(title: string): void {
    localStorage.setItem(this.TITLE_KEY, title)
  }

  getTitle(): string | null {
    return localStorage.getItem(this.TITLE_KEY)
  }

  setDate(date: string): void {
    localStorage.setItem(this.DATE_KEY, date)
  }

  getDate(): string | null {
    const storedDate = localStorage.getItem(this.DATE_KEY)
    return storedDate ? storedDate : null
  }
}
