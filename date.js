module.exports.getday=getday;

function getday(){
    let today =new Date();
    let option={
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    var day=today.toLocaleDateString("en-US",option);
    return day;
}