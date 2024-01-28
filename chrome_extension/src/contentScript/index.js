console.info('contentScript is running')
const debounce = (func, wait) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const uiEnchantMessage = (ev) => {
  console.log(" Starting enchanting message with UI ");
  const messages = Array.from(ev.target.childNodes);
  const promptTextIdx = messages.findIndex((node) => node.nodeType === 3);
  const messageBdyNode = messages[promptTextIdx];

  const promptText = messageBdyNode.data;

  chrome.runtime.sendMessage(promptText, (response) => {
    messageBdyNode.data = response;
  });
};

const handleUserInput = debounce(uiEnchantMessage, 2000);

setTimeout(() => {
  const messageBdy = document
    .querySelectorAll('[aria-label="Message Body"]')
    .item(1);

  messageBdy.addEventListener("input", handleUserInput);
}, 4000);

window.onbeforeunload = () => {
  if (messageBdy) {
    messageBdy.removeEventListener("input", handleUserInput);
  }
};
