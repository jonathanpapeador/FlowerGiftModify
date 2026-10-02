window.addEventListener('DOMContentLoaded', function() {
var doc=document,flower=doc.querySelector('.flower'),petalPartMarkup='<div class="box"><div class="shape"></div></div>',maxParts=20,maxPetals=6,partsFontStep=25/maxParts;createFlower();function createFlower(){var angle=360/maxPetals;for(var i=0;i<maxPetals;i++){var petal=createPetal(),currAngle=angle*i+'deg',transform='transform: rotateY('+currAngle+') rotateX(-30deg) translateZ(9vmin)';petal.setAttribute('style',transform);flower.appendChild(petal);}}function createPetal(){var box=createBox(null,0),petal=doc.createElement('div');petal.classList.add('petal');for(var i=1;i<=maxParts;i++){box=createBox(box,i);}petal.appendChild(box);return petal;}function createBox(box,pos){var fontSize=partsFontStep*(maxParts-pos)+'vmin',half=maxParts/2,bright='50';if(pos<half+1){fontSize=partsFontStep*pos+'vmin';}else{bright=10+40/half*(maxParts-pos);}var baseHue=320,hueVariation=30,saturation=70+(20*pos/maxParts),color='hsl('+(baseHue+(hueVariation*pos/maxParts))+', '+saturation+'%, '+bright+'%)',newShape=doc.createElement('div');newShape.classList.add('shape');var newBox=doc.createElement('div');newBox.classList.add('box');newBox.setAttribute('style','color: '+color+';font-size: '+fontSize);if(box)newBox.appendChild(box);newBox.appendChild(newShape);return newBox;}function drawGalaxy(){var canvas=document.getElementById('galaxy-canvas');if(!canvas)return;var ctx=canvas.getContext('2d');function resize(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;}resize();window.addEventListener('resize',resize);var stars=[],numStars=120;for(var i=0;i<numStars;i++){stars.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*1.5+0.5,dx:(Math.random()-0.5)*0.7,dy:(Math.random()-0.5)*0.7,alpha:Math.random()*0.5+0.5});}function animate(){ctx.clearRect(0,0,canvas.width,canvas.height);for(var i=0;i<stars.length;i++){var s=stars[i];ctx.save();ctx.globalAlpha=s.alpha;ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fillStyle='rgba(255,182,193,0.9)';ctx.shadowColor='#ffb6d5';ctx.shadowBlur=2;ctx.fill();ctx.restore();s.x+=s.dx;s.y+=s.dy;if(s.x<0||s.x>canvas.width)s.dx*=-1;if(s.y<0||s.y>canvas.height)s.dy*=-1;}requestAnimationFrame(animate);}animate();}document.addEventListener('DOMContentLoaded',drawGalaxy);
  var mainContent = document.getElementById('main-content');
  if (mainContent) mainContent.style.display = '';
  // Efecto typing en el botón al inicio
  var startBtn = document.getElementById('start-btn');
  var btnText = 'Pulsa Aquí';
  startBtn.textContent = '';
  startBtn.disabled = true;
  let iBtn = 0;
  
  function typeBtn() {
    if (iBtn < btnText.length) {
      startBtn.textContent += btnText.charAt(iBtn);
      iBtn++;
      setTimeout(typeBtn, 90);
    } else {
      startBtn.disabled = false;
    }
  }
  typeBtn();
  
  // Followers - Cambiar mensajes
  const messages = [
    { text: 'Mi Lorenita: Sé que no soy muy detallista y que tal vez esperabas algo escrito a mano, pero supongo que me desenvuelvo mejor presentándote un mensaje de este modo. La creatividad me funciona mejor cuando puedo expresarme por este medio, así que, aunque quizá no sea la forma más tradicional, quiero que estas palabras puedan transmitir todo lo que siento por ti.', type: 'image', source: 'imagenes/1.jpeg' },

    { text: 'Ha pasado ya más de un año desde que te conocí de verdad. Puede que estudiáramos juntos y que nos distinguiéramos desde antes, pero nunca me tomé el tiempo de descubrir quién eras realmente. Hoy tengo la fortuna de poder afirmar que eso ya no es así, porque durante este tiempo he tenido la oportunidad de conocerte, de entenderte y de descubrir poco a poco a la persona que eres.', type: 'image', source: 'imagenes/2.jpeg' },

    { text: 'El tiempo se ha pasado demasiado rápido. Creo que, de alguna manera, todavía sigo atrapado en nuestro cuarto mes de novios, porque hemos vivido tantas cosas en tan poco tiempo que, al mismo tiempo, siento que han sido muy pocas cuando pienso en todo el futuro que todavía tenemos por delante. Es algo que todavía no termino de asimilar.', type: 'image', source: 'imagenes/3.jpeg' },

    { text: 'Aún no puedo creer que yo siga siendo aquel que tú escogiste, y mucho menos que seas tú quien, cada día, me siga escogiendo nuevamente. Cuando pienso en todo lo que hemos construido, veo que cada etapa que vivimos juntos es como un lirio que poco a poco se va abriendo. Y, mientras más florece, más me doy cuenta de lo enamorado que estoy de ti.', type: 'image', source: 'imagenes/4.jpeg' },

    { text: 'Decir que te amo parece tan sencillo cuando son solamente tres palabras, pero para mí significan un mundo completamente nuevo y diferente. Es un mundo del que todavía estoy aprendiendo y en el que, de alguna manera, siempre encuentro algo nuevo de ti y de nosotros. Por eso también quiero agradecerte, porque gran parte de lo que hoy entiendo sobre el amor lo he aprendido estando contigo.', type: 'video', source: 'videos/video.mp4' },

    { text: 'Sé que muchas veces has tenido que soportar actitudes y errores míos. Has tenido que contener la molestia que puedo llegar a generarte, tener paciencia conmigo y, aun así, encontrar la manera de permanecer a mi lado. Y por todo eso te estoy profundamente agradecido. Gracias por tu perdón, por tu dedicación, por tu apoyo, por tu paciencia, por tu consuelo, por tu carácter y, sobre todo, gracias por ser tú.', type: 'image', source: 'imagenes/5.jpeg' },

    { text: 'A veces me pregunto a quién debería agradecerle por haberte puesto en mi camino. ¿A ti? Creo que también debe existir algo más que me haya dado la oportunidad de tenerte en mi vida, porque incluso después de todo este tiempo sigo sintiendo que no te merezco, que eres algo imposible, casi platónico. Y, aunque pueda parecer extraño, esa sensación también se ha convertido en un reto para mí: uno que me motiva a levantarme cada día, a estar feliz, a mirar hacia adelante, a levantar la cabeza y a querer ser mejor.', type: 'image', source: 'imagenes/6.jpeg' },

    { text: 'Porque yo de verdad sigo viéndote como la mujer de mi vida. Te veo como esa persona que quiero que me acompañe siempre, a cualquier lugar al que vaya; como aquella a quien pueda nombrar cada vez que tenga que presentarme, como aquella a quien pueda señalar y decir: “ella es mi amor”. Y, aunque quizá sean palabras muy grandes, así es como te veo y así es como te siento en mi vida.', type: 'image', source: 'imagenes/7.jpeg' },

    { text: 'También quiero que sepas que, aunque a veces pueda parecer un poco distante, eso nunca significa que quiera hacerte daño o alejarme de ti. Todo lo contrario. Una de las cosas en las que más insisto es en tu palabra, en tu confianza para poder decirme lo que sientes, lo que piensas o aquello que te molesta. Nunca voy a querer que entre nosotros exista un silencio que nos haga daño. Prefiero que hablemos, incluso cuando sea difícil, porque para mí nuestra comunicación es una de las cosas más importantes que tenemos.', type: 'image', source: 'imagenes/8.jpeg' },

    { text: 'Por eso también quiero agradecerte por haber mejorado tu comunicación conmigo y por ser honesta. Antes no era una persona que hablara demasiado, pero contigo he aprendido a querer escuchar, a querer conocer lo que pasa por tu cabeza y, sobre todo, a querer que me cuentes todo aquello que quieras compartir conmigo. Me gusta saber de ti, incluso de las cosas más pequeñas.', type: 'video', source: 'videos/video2.mp4' },

    { text: 'Sé que todavía nos queda muchísimo camino por delante, pero hay algo que me tranquiliza: saber que siempre voy a poder tomarte de la mano. Siento que, caminando contigo, puedo convertirme en un mejor hombre y que puedo llegar a donde sea. Y, sinceramente, estando contigo, no me importa demasiado a dónde lleguemos.', type: 'image', source: 'imagenes/9.jpeg' },

    { text: 'Al final, ¿qué más da el lugar al que lleguemos si puedo hacerlo contigo? Todavía no logro entender cómo llegamos hasta donde estamos, cómo esos pequeños momentos, esas conversaciones, esos detalles y todos los días que compartimos terminaron convirtiéndose en algo tan grande. No consigo dimensionarlo ni reunirlo en algo que pueda explicar con facilidad. Simplemente sé que existe, que lo siento y que ese algo es el amor tan grande que te tengo.', type: 'image', source: 'imagenes/10.jpeg' },

    { text: 'Ese amor es también el que me da la seguridad de que, sin importar dónde termine, voy a ser feliz si sé que estaré contigo. Así lo siento hoy, así lo pensé hace meses cuando soñaba con nuestro primer aniversario y así lo sigo pensando ahora. Sueño con que seas tú quien me acaricie por siempre, quien permanezca a mi lado durante el resto de mi impredecible vida y con quien pueda seguir descubriendo todo lo que todavía nos queda por vivir.', type: 'image', source: 'imagenes/11.jpeg' },

    { text: 'Te amo, Lorena. Gracias por un año completo de vida en el que pude sentirme realmente vivo. Gracias, en serio, por absolutamente todo: por cada regalo, cada detalle, cada palabra, cada regaño, cada momento y por todo lo que haces por mí. No sé si alguna vez tendré la forma de devolverte todo lo que me has dado, pero sí sé que quiero seguir correspondiéndote con todo el amor que pueda darte.', type: 'image', source: 'imagenes/12.jpeg' },

    { text: 'Te amo muchísimo, mi niña. Feliz aniversario. Gracias por este primer año y por haberme permitido vivirlo contigo. Y si algo tengo claro después de todo este tiempo, es que quiero seguir tomando tu mano y caminando contigo durante todos los años que todavía nos quedan ♥.', type: 'video', source: 'videos/video3.mp4' },
  ];
  
  var wrapper = document.querySelector('.wrapper');
  var msg = document.querySelector('.flower-message');
  var messageContent = document.querySelector('.message-content');
  var messageImage = document.querySelector('.message-image');
  var messageVideo = document.querySelector('.message-video');
  var flowerInstruction = document.getElementById('flower-instruction');
  var closeButtonContainer = document.getElementById('close-message-container');
  var closeButton = document.getElementById('close-message-btn');
  var petals = Array.prototype.slice.call(flower.querySelectorAll('.petal'));
  var messageCirclePositions = [2, 9, 16];
  var messagesPerPetal = [3, 3, 3, 2, 2, 2];
  var circleMessageIndex = 0;
  var flowerState = 'closed';
  var flowerTransitionTimer;
  var isMessageVisible = false;
  var typingAnimation;

  petals.forEach(function(petal, petalIndex) {
    petal.dataset.openTransform = petal.style.transform;
    petal.style.transition = 'transform 800ms cubic-bezier(.2,.8,.2,1), opacity 500ms ease';
    petal.style.transform = 'rotateX(0deg) translateZ(0) scale(0.08)';
    petal.style.opacity = '0';
    petal.style.pointerEvents = 'none';

    var shapes = petal.querySelectorAll('.shape');
    for (var circleIndex = 0; circleIndex < messagesPerPetal[petalIndex]; circleIndex++) {
      var circle = shapes[messageCirclePositions[circleIndex]];
      circle.classList.add('is-message-circle');
      circle.dataset.messageIndex = circleMessageIndex;
      circle.setAttribute('role', 'button');
      circle.setAttribute('tabindex', '-1');
      circle.setAttribute('aria-label', 'Abrir mensaje ' + (circleMessageIndex + 1));
      circleMessageIndex++;
    }
  });

  flower.setAttribute('tabindex', '0');
  flower.setAttribute('role', 'group');
  flower.setAttribute('aria-label', 'Flor interactiva. Activa para abrirla.');

  function openFlower() {
    if (isMessageVisible || flowerState !== 'closed') return;
    flowerState = 'opening';
    wrapper.classList.add('is-open');
    var animatedParts = [flower].concat(Array.prototype.slice.call(flower.querySelectorAll('.box')));
    animatedParts.forEach(function(part) {
      part.style.animation = 'none';
    });
    void flower.offsetWidth;
    animatedParts.forEach(function(part) {
      part.style.animation = '';
    });
    petals.forEach(function(petal) {
      petal.style.transform = petal.dataset.openTransform;
      petal.style.opacity = '1';
      petal.style.pointerEvents = 'auto';
    });
    flowerInstruction.style.display = 'block';
    flower.querySelectorAll('.is-message-circle').forEach(function(circle) {
      circle.setAttribute('tabindex', '0');
    });
    flowerTransitionTimer = window.setTimeout(function() {
      if (flowerState === 'opening') flowerState = 'open';
    }, 850);
  }

  function closePetals() {
    if (flowerTransitionTimer) window.clearTimeout(flowerTransitionTimer);
    flowerState = 'closing';
    wrapper.classList.remove('is-open');
    petals.forEach(function(petal) {
      petal.style.transform = 'rotateX(0deg) translateZ(0) scale(0.08)';
      petal.style.opacity = '0';
      petal.style.pointerEvents = 'none';
    });
    flower.querySelectorAll('.is-message-circle').forEach(function(circle) {
      circle.setAttribute('tabindex', '-1');
    });
    flowerTransitionTimer = window.setTimeout(function() {
      if (flowerState === 'closing') flowerState = 'closed';
    }, 850);
  }

  function showMessage(index) {
    if (typingAnimation) cancelAnimationFrame(typingAnimation);
    var text = messages[index].text;
    var duration = Math.min(text.length * 90, 5000);
    var startTime = null;
    msg.textContent = '';
    messageVideo.pause();
    messageVideo.removeAttribute('src');
    messageVideo.load();

    if (messages[index].type === 'video') {
      messageImage.style.display = 'none';
      messageVideo.style.display = 'block';
      messageVideo.src = messages[index].source;
      messageVideo.load();
      var playback = messageVideo.play();
      if (playback !== undefined) playback.catch(function() {});
    } else {
      messageVideo.style.display = 'none';
      messageImage.style.display = 'block';
      messageImage.src = messages[index].source;
      messageImage.alt = 'Foto para el mensaje ' + (index + 1);
    }

    function typeText(timestamp) {
      if (startTime === null) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      msg.textContent = text.slice(0, Math.ceil(progress * text.length));
      if (progress < 1) typingAnimation = requestAnimationFrame(typeText);
    }

    typingAnimation = requestAnimationFrame(typeText);
  }

  function selectMessage(index, circle) {
    if (flowerState !== 'open' || isMessageVisible) return;
    circle.classList.add('is-selected');
    isMessageVisible = true;
    flowerState = 'message';
    flowerInstruction.style.display = 'none';
    wrapper.classList.add('is-shifted');
    window.setTimeout(function() {
      messageContent.style.display = 'flex';
      closeButtonContainer.style.display = 'block';
      showMessage(index);
    }, 1100);
  }

  flower.addEventListener('click', function(event) {
    var selectedCircle = event.target.closest('.is-message-circle');
    if (!selectedCircle && flowerState === 'open') {
      var nearestDistance = 36;
      flower.querySelectorAll('.is-message-circle').forEach(function(circle) {
        var bounds = circle.getBoundingClientRect();
        var deltaX = event.clientX - (bounds.left + bounds.width / 2);
        var deltaY = event.clientY - (bounds.top + bounds.height / 2);
        var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          selectedCircle = circle;
        }
      });
    }
    if (selectedCircle) {
      selectMessage(Number(selectedCircle.dataset.messageIndex), selectedCircle);
    } else if (flowerState === 'closed' && !isMessageVisible) {
      openFlower();
    }
  });

  flower.addEventListener('keydown', function(event) {
    if ((event.key === 'Enter' || event.key === ' ') && event.target === flower && flowerState === 'closed') {
      event.preventDefault();
      openFlower();
    }
  });

  flower.querySelectorAll('.is-message-circle').forEach(function(circle) {
    circle.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        selectMessage(Number(circle.dataset.messageIndex), circle);
      }
    });
  });

  closeButton.addEventListener('click', function() {
    if (typingAnimation) cancelAnimationFrame(typingAnimation);
    messageVideo.pause();
    messageVideo.removeAttribute('src');
    messageVideo.load();
    messageContent.style.display = 'none';
    closeButtonContainer.style.display = 'none';
    msg.textContent = '';
    wrapper.classList.remove('is-shifted');
    isMessageVisible = false;
    flowerState = 'closed';
    window.setTimeout(openFlower, 50);
  });
  
  // Centra el contenedor con JS
  var container = document.getElementById('start-btn-container');
  container.style.position = 'fixed';
  container.style.top = '50%';
  container.style.left = '50%';
  container.style.transform = 'translate(-50%,-50%)';
  container.style.zIndex = '100';

  startBtn.addEventListener('click', function() {
    // Detect mobile (screen width <= 600px)
    var isMobile = window.innerWidth <= 600;
    // Eliminado loader móvil
    container.style.display = 'none';
    wrapper.style.display = '';
    // Reproducir música
    var music = document.getElementById('bg-music');
    if (music) {
      music.currentTime = 0;
      var playPromise = music.play();
      if (playPromise !== undefined) {
        playPromise.catch(function(error) {
          alert('No se pudo reproducir la música. Verifica el archivo o permisos del navegador.');
        });
      }
    }
    // Mostrar el canvas de galaxia después de 2 segundos
    setTimeout(function() {
      var galaxyCanvas = document.getElementById('galaxy-canvas');
      galaxyCanvas.style.display = '';
      galaxyCanvas.width = window.innerWidth;
      galaxyCanvas.height = window.innerHeight;
      var ctx = galaxyCanvas.getContext('2d');
        var numDots = isMobile ? 3 : 60;
      var dots = [];
      var dotsToAdd = 0;
      var minDotSize = isMobile ? 0.5 : 0.7;
      var maxDotSize = isMobile ? 1.1 : 1.7;

      // Web Audio API para analizar el volumen
      var audio = document.getElementById('bg-music');
      var audioCtx, analyser, dataArray;
      if (window.AudioContext && audio) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        var source = audioCtx.createMediaElementSource(audio);
        analyser = audioCtx.createAnalyser();
        source.connect(analyser);
        analyser.connect(audioCtx.destination);
        analyser.fftSize = 64;
        dataArray = new Uint8Array(analyser.frequencyBinCount);
      }

      function addDot() {
        if (dotsToAdd < numDots) {
          let angle = Math.random() * 2 * Math.PI;
          let radius = Math.random() * (galaxyCanvas.width/2.2);
          let x = galaxyCanvas.width/2 + Math.cos(angle) * radius;
          let y = galaxyCanvas.height/2 + Math.sin(angle) * radius;
          let speed = 0.2 + Math.random() * 0.7;
          let dir = Math.random() * 2 * Math.PI;
          let dotSize = minDotSize + Math.random() * (maxDotSize - minDotSize);
          dots.push({x, y, r: dotSize, dx: Math.cos(dir)*speed, dy: Math.sin(dir)*speed, alpha: 0.5+Math.random()*0.5});
          dotsToAdd++;
          setTimeout(addDot, 10); // speed of appearance optimizada
        }
      }
      addDot();
      function animateGalaxy() {
        ctx.clearRect(0, 0, galaxyCanvas.width, galaxyCanvas.height);
        let hue = 55; // amarillo
        let speedFactor = 1;
        if (analyser && dataArray) {
          analyser.getByteFrequencyData(dataArray);
          let avg = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
          speedFactor = 0.7 + (avg / 255) * 2.5;
        }
        for (let dot of dots) {
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.r, 0, 2*Math.PI);
          ctx.fillStyle = `hsla(${hue}, 80%, 70%, ${dot.alpha})`;
          ctx.shadowColor = `hsla(${hue},80%,70%,0.5)`;
          ctx.shadowBlur = 1; // Menos blur para mejor rendimiento
          ctx.fill();
          dot.x += dot.dx * speedFactor;
          dot.y += dot.dy * speedFactor;
          if (dot.x < 0) dot.x = galaxyCanvas.width;
          if (dot.x > galaxyCanvas.width) dot.x = 0;
          if (dot.y < 0) dot.y = galaxyCanvas.height;
          if (dot.y > galaxyCanvas.height) dot.y = 0;
        }
        requestAnimationFrame(animateGalaxy);
      }
      setTimeout(function() {
        galaxyCanvas.style.opacity = '1';
      }, 50);
      animateGalaxy();
    }, 2000);
    wrapper.classList.remove('is-shifted');
    messageContent.style.display = 'none';
    closeButtonContainer.style.display = 'none';
  });
});
