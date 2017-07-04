document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('moveBtn');
    link.addEventListener('click', function() {
        var problemId = document.getElementById("problem_id").value;
        if(problemId < 1000) {
            problemId = 1000;
        }
        var text = "https://www.acmicpc.net/problem/" + problemId;
        chrome.tabs.update({url: text});
        window.close();
    });
});