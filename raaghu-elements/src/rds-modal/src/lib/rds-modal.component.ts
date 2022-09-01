import { Component, EventEmitter, Input, AfterViewInit, OnInit, Output, SimpleChanges, TemplateRef } from '@angular/core';

@Component({
  selector: 'rds-modal',
  templateUrl: './rds-modal.component.html',
  styleUrls: ['./rds-modal.component.scss']
})
export class RdsModalComponent implements OnInit, AfterViewInit {

  onChange!: (value: string) => void;
  onTouched!: () => void

  constructor() { }


  ngAfterViewInit(): void {
    if (this.modalId) {
      var myModalEl = document.getElementById(this.modalId);
      if (myModalEl) {
        const that = this;
        myModalEl.addEventListener('hidden.bs.modal', function (event) {
          that.onClose.emit();
        })
      }
    }
  }


  ngOnInit(): void {
  }



  @Input()
  isModalHeader: boolean = true;

  @Input()
  isModalFooter: boolean = true;

  @Input()
  label?: string;

  @Input() title?: string;
  @Input() content?: string;

  @Input()
  modalId?: string;
  @Input()
  backdropstatic?: any;
  @Input() modalData: any;
  @Output()
  onShow = new EventEmitter<Event>();
  @Output()
  onClose = new EventEmitter<Event>();
  @Output() onClick = new EventEmitter();
  @Input()
  modalClasses: 'centered' | 'scrollable' | 'xl' | 'lg' | 'sm' = 'centered';
  @Input()
  modalAnimation: 'modal fade' | 'modal fade-scale' | 'modal fade-rotate' | 'modal fade-flip' = 'modal fade';
  @Input()
  modalheader!: TemplateRef<any>;
  @Input()
  Modalbody!: TemplateRef<any>
  @Input()
  Modalfooter!: TemplateRef<any>

  public get classes(): string {
    var classes = `modal-dialog modal-${this.modalClasses === 'centered' ? 'dialog-centered' :
      this.modalClasses === 'scrollable' ? 'dialog-scrollable' : this.modalClasses === 'xl' ? 'xl' :
        this.modalClasses === 'lg' ? 'lg' : this.modalClasses === 'sm' ? 'sm' : 'centered'}`;
    return classes;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }



  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  public get modalAnimationClass(): string {
    var modalAnimations = `modal ${this.modalAnimation === 'modal fade-rotate' ? 'fade-rotate' :
      this.modalAnimation === 'modal fade' ? 'modal fade' : this.modalAnimation === 'modal fade-scale' ? 'fade-scale' :
        this.modalAnimation === 'modal fade-flip' ? 'fade-flip' : 'modal fade'}`;
    return modalAnimations;
  }

}
