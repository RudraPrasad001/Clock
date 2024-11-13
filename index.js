setInterval(function(){var time = new Date();
    let tfhour =time.getHours()>12?time.getHours()-12:time.getHours();
    let amorpm = time.getHours()>12?"PM":"AM";
    let hour = tfhour.toString().padStart(2,0);
    const min = time.getMinutes().toString().padStart(2,0);
    let sec = time.getSeconds().toString().padStart(2,0);
    const timee = hour + ':'+min+':'+sec+' '+amorpm;
    console.log(timee);
    document.getElementById("correcttime").textContent=timee;},1000);
