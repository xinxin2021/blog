// Thank you, AI
const cronExpression = ['* 12 13 *', '* 7 7 *', '* 9 18 *'];

function isCronTime(cronExpression) {
    const now = new Date();
    const [year, month, dayOfMonth, dayOfWeek] = cronExpression.split(' ');

    // Check year
    if (year !== '*' && parseInt(year) !== now.getFullYear()) {
        return false;
    }

    // Check day of month
    if (dayOfMonth !== '*' && parseInt(dayOfMonth) !== now.getDate()) {
        return false;
    }

    // Check month
    if (month !== '*' && (parseInt(month) - 1) !== now.getMonth()) {
        return false;
    }

    // Check day of week
    if (dayOfWeek !== '*' && parseInt(dayOfWeek) !== now.getDay()) {
        return false;
    }

    return true;
}

for (i = 0; i < cronExpression.length; i++) {
    if (isCronTime(cronExpression[i])) {
        document.getElementsByTagName("html")[0].classList.add("gray");
        break
    }
}