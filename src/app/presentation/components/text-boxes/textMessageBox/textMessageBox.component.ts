import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-text-message-box',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './textMessageBox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextMessageBoxComponent {
  @Input() placeholder: string = '';
  @Input() disableCorrections: boolean = false;

  @Output() onMessage = new EventEmitter<string>();


  public fb = inject(FormBuilder);
  public form = this.fb.group({
    prompt: ['', Validators.required]
  });

/*

la informacion , se toma la iformacion de formulario del prompt
 y se emite o vacia o llega comprobando que el formulario este valido

 */
  handleSubmit() {
    if ( this.form.invalid ) return;

    const { prompt } = this.form.value;
    console.log({prompt});

    this.onMessage.emit(prompt ?? '' );
    this.form.reset();

  }

 }
