document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('moveBtn');
    // onClick's logic below:
    link.addEventListener('click', function() {
        var text = "https://www.acmicpc.net/problem/" + document.getElementById("problem_id").value;
        chrome.tabs.update({url: text});
        window.close();
    });
});

chrome.commands.onCommand.addListener(function (command) {
    if (command === "enter") {
        alert("save");
    }
});