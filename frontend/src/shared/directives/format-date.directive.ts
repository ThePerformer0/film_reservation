import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appFormatDate]'
})
export class FormatDateDirective {

  @Input() appFormatDate!: string;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appFormatDate']) {
      this.formatDate(this.appFormatDate);
    }
  }

  private formatDate(dateString: string): void {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
    this.el.nativeElement.textContent = formattedDate;
  }

}
