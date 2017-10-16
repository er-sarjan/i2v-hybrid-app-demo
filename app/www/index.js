/**
 * Created by Sarjan on 15-Oct-17.
 */

// Create global variable of application
const appInterface = {};

(function () {
	const oWebViewInterface = window.nsWebViewInterface;

	/**
	 * Handlers for native events.
	 */
	function addNativeMsgListener() {
		oWebViewInterface.on('setViewToCenter', function () {
			$('body,html').animate({
				scrollTop: 200,
				scrollLeft: 300
			}, 500);
		});
	}

	/**
	 * Event emitter from web view to native element
	 *
	 * @param tagName String Tag name of selected bubble
	 */
	function sendSelectedValue(tagName){
		oWebViewInterface.emit('tagClick', tagName);
	}

	function init() {
		addNativeMsgListener();
		appInterface.hashTagClick = function(tagName) {
			sendSelectedValue(tagName);
		}
	}

	init();
})();

