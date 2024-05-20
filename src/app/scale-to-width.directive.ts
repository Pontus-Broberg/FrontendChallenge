import { Directive, ElementRef, effect, input, Renderer2 } from '@angular/core'

@Directive({
  selector: '[appScaleToWidth]',
  standalone: true,
})
export class ScaleToWidthDirective {
  appScaleToWidth = input<string>('')

  constructor(private el: ElementRef) {
    effect(() => {
      const element = this.el.nativeElement

      if (element.className === 'title-text') {
        element.style.fontSize = `calc(90vw/(${this.appScaleToWidth().length + 9}/2))`
      } else {
        element.style.fontSize = `calc(90vw/(${this.appScaleToWidth().length}/2))`
      }
      element.style.lineHeight = '1'
    })
  }
}
