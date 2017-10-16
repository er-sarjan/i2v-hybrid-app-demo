"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var web_view_1 = require("tns-core-modules/ui/web-view");
var webViewInterfaceModule = require('nativescript-webview-interface');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.setupWebViewInterface();
    };
    // Initializes plugin with a webView and set view
    AppComponent.prototype.setupWebViewInterface = function () {
        var _this = this;
        var webView = this.webView.nativeElement;
        this.webInterface = new webViewInterfaceModule.WebViewInterface(webView, '~/www/test.html');
        // Set listener and emit event after web view is loaded
        webView.on(web_view_1.WebView.loadFinishedEvent, function (args) {
            if (!args.error) {
                _this.listenLangWebViewEvents();
                _this.webInterface.emit('setViewToCenter');
            }
        });
    };
    AppComponent.prototype.listenLangWebViewEvents = function () {
        this.webInterface.on('tagClick', function (tagName) {
            alert('You have clicked on ' + tagName);
        });
    };
    __decorate([
        core_1.ViewChild('webView'),
        __metadata("design:type", core_1.ElementRef)
    ], AppComponent.prototype, "webView", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app.component.html'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Y7QUFDaEYseURBQXNFO0FBRXRFLElBQU0sc0JBQXNCLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFNekU7SUFBQTtJQTJCQSxDQUFDO0lBdEJDLHNDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsaURBQWlEO0lBQ3pDLDRDQUFxQixHQUE3QjtRQUFBLGlCQVVDO1FBVEMsSUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDcEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQzVGLHVEQUF1RDtRQUN2RCxPQUFPLENBQUMsRUFBRSxDQUFDLGtCQUFPLENBQUMsaUJBQWlCLEVBQUUsVUFBQyxJQUFtQjtZQUN4RCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixLQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztnQkFDL0IsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM1QyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sOENBQXVCLEdBQS9CO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQUMsT0FBTztZQUN2QyxLQUFLLENBQUMsc0JBQXNCLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBeEJvQjtRQUFyQixnQkFBUyxDQUFDLFNBQVMsQ0FBQztrQ0FBVSxpQkFBVTtpREFBQztJQUY5QixZQUFZO1FBSnhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsc0JBQXNCO1NBQ3BDLENBQUM7T0FDVyxZQUFZLENBMkJ4QjtJQUFELG1CQUFDO0NBQUEsQUEzQkQsSUEyQkM7QUEzQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9hZEV2ZW50RGF0YSwgV2ViVmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvd2ViLXZpZXcnO1xuXG5jb25zdCB3ZWJWaWV3SW50ZXJmYWNlTW9kdWxlID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXdlYnZpZXctaW50ZXJmYWNlJyk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWFwcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gQFZpZXdDaGlsZCgnd2ViVmlldycpIHdlYlZpZXc6IEVsZW1lbnRSZWY7XG4gcHJpdmF0ZSB3ZWJJbnRlcmZhY2U7XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuc2V0dXBXZWJWaWV3SW50ZXJmYWNlKCk7XG4gIH1cblxuICAvLyBJbml0aWFsaXplcyBwbHVnaW4gd2l0aCBhIHdlYlZpZXcgYW5kIHNldCB2aWV3XG4gIHByaXZhdGUgc2V0dXBXZWJWaWV3SW50ZXJmYWNlKCkge1xuICAgIGNvbnN0IHdlYlZpZXc6IFdlYlZpZXcgPSB0aGlzLndlYlZpZXcubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLndlYkludGVyZmFjZSA9IG5ldyB3ZWJWaWV3SW50ZXJmYWNlTW9kdWxlLldlYlZpZXdJbnRlcmZhY2Uod2ViVmlldywgJ34vd3d3L3Rlc3QuaHRtbCcpO1xuICAgIC8vIFNldCBsaXN0ZW5lciBhbmQgZW1pdCBldmVudCBhZnRlciB3ZWIgdmlldyBpcyBsb2FkZWRcbiAgICB3ZWJWaWV3Lm9uKFdlYlZpZXcubG9hZEZpbmlzaGVkRXZlbnQsIChhcmdzOiBMb2FkRXZlbnREYXRhKSA9PiB7XG4gICAgICBpZiAoIWFyZ3MuZXJyb3IpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5MYW5nV2ViVmlld0V2ZW50cygpO1xuICAgICAgICB0aGlzLndlYkludGVyZmFjZS5lbWl0KCdzZXRWaWV3VG9DZW50ZXInKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbGlzdGVuTGFuZ1dlYlZpZXdFdmVudHMoKSB7XG4gICAgdGhpcy53ZWJJbnRlcmZhY2Uub24oJ3RhZ0NsaWNrJywgKHRhZ05hbWUpID0+IHtcbiAgICAgIGFsZXJ0KCdZb3UgaGF2ZSBjbGlja2VkIG9uICcgKyB0YWdOYW1lKTtcbiAgICB9KTtcbiAgfVxufVxuXG4iXX0=