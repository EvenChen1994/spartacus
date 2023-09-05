import { Injectable } from '@angular/core';

// https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
declare var webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root',
})
export class ConfiguratorSpeechRecognitionService {
  speechRecognition = new webkitSpeechRecognition();
  recordedText: string;
  errorMsg: string;

  init() {
    this.speechRecognition.lang = 'en-US';
    this.speechRecognition.maxAlternatives = 5;
    this.speechRecognition.interimResults = false;

    this.speechRecognition.addEventListener('result', (event: any) => {
      const transcript = event.results[0][0].transcript;
      console.log(transcript);
      this.recordedText = transcript;
    });

    this.speechRecognition.addEventListener('nomatch', () => {
      console.error('Speech not recognized');
      this.errorMsg = "Please, repeat. I don't understand you";
    });

    this.speechRecognition.addEventListener('error', (event: any) => {
      console.error(`Speech recognition error detected: ${event.error}`);
      this.errorMsg = "Please, repeat. I don't understand you";
    });
  }

  getErrorMsg() : string {
    return this.errorMsg;
  }

  getRecordedText(): string {
    return this.recordedText;
  }

  resetRecordedText() {
    this.recordedText = '';
  }

  startRecording() {
    console.log('Speech recognition started');
    this.speechRecognition.start();
  }

  stopRecording() {
    console.log('Speech recognition ended');
    this.speechRecognition.stop();
  }
}