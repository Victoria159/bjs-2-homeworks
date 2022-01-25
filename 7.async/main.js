const testCase = () => {
    let alarmClock = new AlarmClock();
    alarmClock.addClock('22:55', () => console.log ('New week!'), 1);
    alarmClock.addClock('22:56', () => {
        console.log('New week!!!');
        alarmClock.printAlarms();
        alarmClock.removeClock(2);
        alarmClock.printAlarms();
    }, 2);
    alarmClock.addClock('22:57', () => {
        console.log("Go sleep");
        alarmClock.printAlarms();
        alarmClock.stop();
        alarmClock.printAlarms();
    }, 3);
    alarmClock.start();
    alarmClock.printAlarms();
}

testCase();// тут вы можете вызывать функции из task.js