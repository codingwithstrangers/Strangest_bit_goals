document.addEventListener('goalLoad', function(obj) {
    console.log(obj.detail);
    var currentAmount = parseInt(obj.detail.amount.current, 10);
    var totalAmount = parseInt(obj.detail.amount.target, 10);
    var percent = currentAmount * (100 / totalAmount);  

    // Update the progress bar width
    $('.inside').css({
        'width': percent + '%'
    });

    // Check if the goal is met
    if (currentAmount >= totalAmount) {
        $('.inside span').text('Complete');
    }
});

document.addEventListener('goalEvent', function(obj) {
    console.log(obj.detail);

    var currentAmount = parseInt(obj.detail.amount.current, 10);
    var totalAmount = parseInt(obj.detail.amount.target, 10);
    var percent = currentAmount * (100 / totalAmount);

    // Update the displayed amounts
    $('.e-total span').text(totalAmount);
    $('.e-current span').text(currentAmount);

    // Update the progress bar width
    $('.inside').css({
        'width': percent + '%'
    });

    // Check if the goal is met
    if (currentAmount >= totalAmount) {
        $('.inside span').text('Complete');
    }
});
