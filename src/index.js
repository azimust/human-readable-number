module.exports = function toReadable (number) {
    const z_n = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve','thirteen', 'fourteen', 'fifteen',
    'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    const t_n = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred = ['hundred'];

    if(number < 20){
        return z_n[number]
    }
    if(number < 100){
        return t_n[Math.floor(number / 10) - 2] + (number % 10 ? ' ' + z_n[number % 10] : '')
    }
    if(number < 1000){
        return z_n[Math.floor(number / 100)] + ' ' + hundred + ' ' + (number % 100 == 0 ? '' : toReadable(number % 100))
    }
}
