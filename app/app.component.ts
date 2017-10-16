import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LoadEventData, WebView } from 'tns-core-modules/ui/web-view';

const webViewInterfaceModule = require('nativescript-webview-interface');

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {

 @ViewChild('webView') webView: ElementRef;
 private webInterface;

  ngAfterViewInit() {
    this.setupWebViewInterface();
  }

  // Initializes plugin with a webView and set view
  private setupWebViewInterface() {
    const webView: WebView = this.webView.nativeElement;
    this.webInterface = new webViewInterfaceModule.WebViewInterface(webView, '~/www/test.html');
    // Set listener and emit event after web view is loaded
    webView.on(WebView.loadFinishedEvent, (args: LoadEventData) => {
      if (!args.error) {
        this.listenLangWebViewEvents();
        this.webInterface.emit('setViewToCenter');
      }
    });
  }

  private listenLangWebViewEvents() {
    this.webInterface.on('tagClick', (tagName) => {
      alert('You have clicked on ' + tagName);
    });
  }
}

