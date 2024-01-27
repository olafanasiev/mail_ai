console.log('background is running')

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request)
  // fetch('http://localhost:3000/email', {method: "POST",headers: {"Content-Type": "application/json"}, body: {'message': "Test"}}).then(r) => {
    sendResponse("RESPONSE MESSAGE! ");
  // });
  return true;
})
