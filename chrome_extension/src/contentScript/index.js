const uiEnchantMessage = (ev) => {
  const messages = Array.from(ev.target.childNodes);
  const promptTextIdx = messages.findIndex((node) => node.nodeType === 3);
  const messageBdyNode = messages[promptTextIdx];

  const promptedText = "Hello world !";
   
  setTimeout(() => {
    messageBdyNode.data = promptedText;
  }, 2000)

};

setTimeout(() => {
  const messageBdy = document
    .querySelectorAll('[aria-label="Message Body"]')
    .item(1);

  messageBdy.addEventListener("input", uiEnchantMessage);
}, 4000);


window.onbeforeunload = () => {
  if (messageBdy) {
    messageBdy.removeEventListener("input", uiEnchantMessage);
  }
};
