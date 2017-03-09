var fs =require('fs');
var file = process.argv[2];
var readfile = function(callback){
fs.readFile(file,'utf-8',function(err, contents){
  // var pattern = "HTTP_METHOD URL HTTP_VERSION ORIGIN_HEADER  SSL_CIPHER SSL_PROTOCOL LB_NAME CLIENT_IP:port BACKEND_IP:port request_processing_time backend_processing_time response_processing_time elb_status_code backend_status_code received_bytes sent_bytes";
  // var patternKeys = pattern.split(" ");
  // console.log(patternKeys.length);
if(err) console.log("Error Output");
var buf = contents.toString();
callback(buf);
// var map = {};
// for(var i=0; i<pattern.length;i++){
//   map[patternKeys[i]] = logitem[i];
// }
// console.log(map);
});
}

readfile(function(contents){
  var pattern = "HTTP_METHOD URL HTTP_VERSION ORIGIN_HEADER  SSL_CIPHER SSL_PROTOCOL LB_NAME CLIENT_IP:port BACKEND_IP:port request_processing_time backend_processing_time response_processing_time elb_status_code backend_status_code received_bytes sent_bytes";
  var patternKeys = pattern.split(" ");
  var logLine = contents.split('\n');
  console.log(logLine.length);
  var logItem = logLine[0].split(' ');
  console.log(logItem.length);
  var map = {};
  for(var i=0; i<pattern.length;i++){
    map[patternKeys[i]] = logItem[i];
  }
  console.log(map);
  console.log(map.ORIGIN_HEADER);
  //if(map.ORIGIN_HEADER == "MATLAB" )
  console.log("Yes" + logLine[0] );
  return 
})
