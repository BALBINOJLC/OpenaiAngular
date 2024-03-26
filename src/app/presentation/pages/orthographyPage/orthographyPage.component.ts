import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GptMessageComponent, MyMessageComponent, TextMessageBoxComponent, TextMessageBoxFileComponent, TextMessageEvent, TypingLoaderComponent } from '@components/index';
import { TextMessageBoxEvent, TextMessageBoxSelectComponent } from '@components/text-boxes/textMessageBoxSelect/textMessageBoxSelect.component';
import { Message } from '@interfaces/message.interface';
import { OpenAiService } from 'app/presentation/services/OpenaiService.service';




@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,
    GptMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,

    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
    TextMessageBoxSelectComponent
  ],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent {

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
