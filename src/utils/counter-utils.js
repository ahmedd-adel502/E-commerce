export function counter(targetDate){
    if (!targetDate) {
        let offerEnds = { hours: 0, minutes: 0, seconds: 0 };
        const now = targetDate ? new Date(targetDate).getTime() : new Date().getTime();
        const desiredDate = new Date().setHours(23,59,59,999);
        const hours = Math.trunc((desiredDate - now) / (1000 * 60 * 60)).toString().padStart(2, '0');
        const minutes = Math.trunc((desiredDate - now) / (1000 * 60) % 60).toString().padStart(2, '0');
        const seconds = Math.trunc((desiredDate - now) / 1000 % 60).toString().padStart(2, '0');

        return offerEnds = { hours, minutes, seconds };
    }

}