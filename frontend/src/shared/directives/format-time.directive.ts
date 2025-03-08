import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appFormatTime]'
})
export class FormatTimeDirective {

  @Input() appFormatTime!: string;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appFormatTime']) {
      this.formatTime(this.appFormatTime);
    }
  }

  private formatTime(dateString: string): void {
    const date = new Date(dateString);
    const formattedTime = date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    this.el.nativeElement.textContent = formattedTime;
  }

}
