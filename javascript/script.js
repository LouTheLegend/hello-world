$( document ).ready (function() {

        const audio = new Audio('./assets/Pacman_Dies_Sound_Effect.mp3')
        const helloWorld = (input) => {
          if (input % 15 == 0) return 'Hello World';
          else if (input % 3 == 0) return 'Hello';
          else if (input % 5 == 0) return 'World';
          else return 'Goodbye'
        }

        $('#number-button').click(() => {
          const number = $('#number-input').val()
          $('#number-input').val('')
          const text = helloWorld(number)
          $('#hello').text(text);
          if (text === 'Hello World') {
              $('#hello-world-img').effect( 'shake', {distance:5} );
              startConfetti()
              stopConfetti()
          }
          if (text === 'Goodbye') {
            audio.play()
          }
      });

        $( '#toad-img' ).hover(
            function() {
              $( this ).effect( 'shake', {distance:5} );
              start();
              stop();
            }
          );


        const startConfetti = () => {
          setTimeout(() => {
            confetti.start()
            }, 50);
        };


        const stopConfetti = () => {
          setTimeout(() => {
            confetti.stop()
          }, 1500); 
        };

        startConfetti();
        stopConfetti();

});
