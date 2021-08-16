function convertTime(time, timezone){
    let date = new Date(time * 1000);
    return date.toLocaleString('en-US', { timeZone: timezone, timeStyle: "short" })
}

export {convertTime}