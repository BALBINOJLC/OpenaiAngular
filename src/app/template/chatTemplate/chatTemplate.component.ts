import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GptMessageComponent, MyMessageComponent, TextMessageBoxComponent, TextMessageEvent, TypingLoaderComponent } from '@components/index';
import { TextMessageBoxEvent } from '@components/text-boxes/textMessageBoxSelect/textMessageBoxSelect.component';
import { Message } from '@interfaces/message.interface';
import { OpenAiService } from 'app/presentation/services/OpenaiService.service';

@Component({
  selector: 'app-chat-template',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GptMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent
  ],
  templateUrl: './chatTemplate.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatTemplateComponent {

  public messages = signal<Message[]>([ { text: 'Hola Mundo', isGpt: true } ]);
  public isLoading = signal(false);
  public openAiService = inject( OpenAiService );


  handleMessage( prompt: string ) {
    console.log({ prompt });
  }

  handleMessageWithFile( { prompt, file }: TextMessageEvent ) {
    console.log({ prompt, file });
  }

  handleMessageWithSelect( event: TextMessageBoxEvent ) {
    console.log(event);
  }

 }