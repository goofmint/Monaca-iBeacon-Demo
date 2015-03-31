///// Initialize top page
function initTopPage() {
    
}
    


///// Called when app launch
function onReady() {
    initTopPage();
    
    var logToDom = function (message) {
    var e = document.createElement('label');
    e.innerText = message;

    var br = document.createElement('br');
    var br2 = document.createElement('br');
    document.body.appendChild(e);
    document.body.appendChild(br);
    document.body.appendChild(br2);

    window.scrollTo(0, window.document.height);
};

var delegate = new cordova.plugins.locationManager.Delegate();

delegate.didDetermineStateForRegion = function (pluginResult) {

    // logToDom('[DOM] didDetermineStateForRegion: ' + JSON.stringify(pluginResult));

};

delegate.didStartMonitoringForRegion = function (pluginResult) {
    // console.log('didStartMonitoringForRegion:', pluginResult);

    // logToDom('didStartMonitoringForRegion:' + JSON.stringify(pluginResult));
};

//delegate.didRangeBeaconsInRegion = function (pluginResult) {
delegate.didRangeBeaconsInRegion = function (pluginResult) {

    logToDom('[DOM] didRangeBeaconsInRegion: ' + JSON.stringify(pluginResult));
    cordova.plugins.locationManager.appendToDeviceLog('[DOM] didRangeBeaconsInRegion: '
        + JSON.stringify(pluginResult));
};

var uuid = '1E21BCE0-7655-4647-B492-A3F8DE2F9A02';
var identifier = 'Sample Beacon1';
var minor = 1;
var major = 1;
var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);

cordova.plugins.locationManager.setDelegate(delegate);

// required in iOS 8+
// cordova.plugins.locationManager.requestWhenInUseAuthorization(); 
cordova.plugins.locationManager.requestAlwaysAuthorization()

/*
cordova.plugins.locationManager.startMonitoringForRegion(beaconRegion)
    .fail(console.error)
    .done();
*/
// cordova.plugins.locationManager.didRangeBeaconsInRegion(beaconRegion)
cordova.plugins.locationManager.startRangingBeaconsInRegion(beaconRegion)
    .fail(console.error)
    .done();


}

$(onReady); // on DOMContentLoaded

