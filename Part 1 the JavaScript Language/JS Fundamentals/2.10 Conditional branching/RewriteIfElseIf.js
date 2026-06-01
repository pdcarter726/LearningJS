/*
    Rewrite

    let message;

    if (login == 'Employee') {
      message = 'Hello';
    } else if (login == 'Director') {
      message = 'Greetings';
    } else if (login == '') {
      message = 'No login';
    } else {
      message = '';
    }
    
    using multiple ternary operators.
*/

let message = (login == 'Employee') ? 'Hello' :
              (login == 'Directory') ? 'Greetings' :
              (login == '') ? 'No login' : ''; 