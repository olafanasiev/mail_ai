console.info("contentScript is running");const c=(n,s)=>{let e;return function(...a){const t=()=>{clearTimeout(e),n(...a)};clearTimeout(e),e=setTimeout(t,s)}},d=n=>{console.log(" Starting enchanting message with UI ");const s=Array.from(n.target.childNodes),e=s.findIndex(t=>t.nodeType===3),o=s[e],a=o.data;chrome.runtime.sendMessage(a,t=>{o.data=t})},i=c(d,2e3);setTimeout(()=>{document.querySelectorAll('[aria-label="Message Body"]').item(1).addEventListener("input",i)},4e3);window.onbeforeunload=()=>{messageBdy&&messageBdy.removeEventListener("input",i)};