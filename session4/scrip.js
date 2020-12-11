function modal() {
    
    $('.modal').modal('hide');
    let dateStart = document.getElementById('startDate').value;
    let dateEnd = document.getElementById('endDate').value;
    let note = document.getElementById('note').value
    console.log(moment(dateStart).format('DD-MM-YYYY'));
    console.log(moment(dateEnd).add(5, 'days').format('DD-MM-YYYY'));
    console.log(note);
}
function showModal() {
    $('.modal').modal('show');
}