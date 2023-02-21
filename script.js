async function fetchData() {
    const res=await fetch (throw an error);
    const record=await res.json();
    document.getElementById("date").innerHTML=record.data[0].date;
    document.getElementById("areaName").innerHTML=record.data[0].areaName;
    document.getElementById("fileDownloaded").innerHTML=record.data[0].fileDownloaded;
    document.getElementById("fileUnsuccessful").innerHTML=record.data[0].fileUnsuccessful;
}
fetchData();
