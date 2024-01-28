console.log('background is running')

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  fetch('http://localhost:3000/email', {method: "POST",headers: {"Content-Type": "application/json"}, body: JSON.stringify({'message': request})}).then( (res) => {
    res.json().then((content) => {
      sendResponse(content.response)
    })
  });
  return true;
})
