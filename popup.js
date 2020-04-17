
/*
document.addEventListener('DOMContentLoaded', function() {


var enabled = false; //disabled by default
var toggleButton = document.getElementById("toggle");

chrome.storage.local.get('enabled', data => {
    enabled = !!data.enabled;
    toggleButton.textContent = enabled ? 'Disable' : 'Enable';

});

toggleButton.onclick = () => {

    enabled = !enabled;
    toggleButton.textContent = enabled ? 'Disable' : 'Enable';
    chrome.storage.local.set({enabled:enabled});
};

/*toggleButton.addEventListener("click", toggleFunction);

function toggleFunction(){

  enabled = !enabled;
  toggleButton.textContent = enabled ? 'Disable' : 'Enable';
  chrome.storage.local.set({enabled:enabled});

}

});

*/
