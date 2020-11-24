$(document).ready(function () {
    $('#subscribe').submit(function(e) {
        e.preventDefault();

        const email = $('#email').val();

        if (!email) {
            alert('Email is required!');
            return;
        }

        fetch('http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: {
                email: email
            }
            })
            .then(response => {
                alert('You are subscribed!');
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    });
});