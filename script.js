// ───── Music AutoPlay ─────
function playMusic() {
  const music = document.getElementById('background-music');
  music.play().catch(() => {}); // Prevent autoplay error
}
window.addEventListener('DOMContentLoaded', playMusic);
document.body.addEventListener('click', playMusic, { once: true });

// ───── Countdown Timer ─────
const timer = document.getElementById('timer');
const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;
let countDown = new Date('Aug 5, 2025 14:07:00').getTime();

const x = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDown - now;

  document.getElementById('days').innerText = Math.floor(distance / day);
  document.getElementById('hours').innerText = Math.floor((distance % day) / hour);
  document.getElementById('minutes').innerText = Math.floor((distance % hour) / minute);
  document.getElementById('seconds').innerText = Math.floor((distance % minute) / second);

  if (distance < 0) {
    timer.classList.add('d-none');
    confetti();
    clearInterval(x);
    _slideSatu();
  }
}, second);

// ───── Slide 1: Intro Image ─────
const _slideSatu = () => {
  const tap = document.getElementById('tap');
  const slide = document.getElementById('slideSatu');
  slide.classList.remove('d-none');

  setTimeout(() => {
    tap.classList.remove('d-none');
    document.body.addEventListener('click', _slideDua, { once: true });
  }, 7000);
};

// ───── Slide 2 ─────
const _slideDua = () => {
  transitionSlide('slideSatu', 'slideDua', _slideTiga);
};

// ───── Slide 3 ─────
const _slideTiga = () => {
  transitionSlide('slideDua', 'slideTiga', _slideEmpatMsg, 40000);
};

// ───── Slide 4 ─────
const _slideEmpatMsg = () => {
  transitionSlide('slideTiga', 'slideEmpatMsg', _slideLimaMsg, 35000);
};

// ───── Slide 5 ─────
const _slideLimaMsg = () => {
  transitionSlide('slideEmpatMsg', 'slideLimaMsg', _slideEnamMsg, 35000);
};

// ───── Slide 6 ─────
const _slideEnamMsg = () => {
  transitionSlide('slideLimaMsg', 'slideEnamMsg', _slideEmpat, 35000);
};

// ───── Slide 7: Do You Like It? ─────
const _slideEmpat = () => {
  const slide = document.getElementById('slideEmpat');
  const btn = document.getElementsByTagName('button');
  slide.classList.remove('d-none');

  btn[0].addEventListener('click', () => {
    const xy = getRandomPosition(slide);
    slide.style.top = xy[0] + 'px';
  });

  btn[1].addEventListener('click', () => {
    slide.classList.replace('animate__fadeInDown', 'animate__bounceOut');
    slide.classList.remove('animate__delay-2s');
    setTimeout(() => {
      slide.classList.add('d-none');
      setTimeout(_slideLima, 500);
    }, 1000);
  });
};

// ───── Slide 8: Heart + Thank You ─────
const _slideLima = () => {
  const slide = document.getElementById('slideLima');
  const trims = document.getElementById('trims');
  slide.classList.remove('d-none');

  setTimeout(() => {
    trims.classList.remove('d-none');
  }, 1000);

  slide.addEventListener('animationend', () => {
    slide.classList.replace('animate__bounceIn', 'animate__fadeOut');
    trims.classList.add('animate__animated', 'animate__fadeOut', 'animate__delay-3s');

    setTimeout(() => {
      trims.remove();
      slide.classList.add('d-none');
      _slideThankYou();  // ✅ Add this to move to the next Thank You slide
    }, 6000);
  });
};

// ───── Tap Transition Handler ─────
function transitionSlide(currentId, nextId, callback, delay = 12000) {
  const tap = document.getElementById('tap');
  const current = document.getElementById(currentId);
  const next = document.getElementById(nextId);

  tap.classList.add('d-none');
  setTimeout(() => {
    current.classList.replace('animate__fadeInRight', 'animate__fadeOut');
    setTimeout(() => {
      current.remove();
      next.classList.remove('d-none');
      setTimeout(() => {
        tap.classList.remove('d-none');
        document.body.addEventListener('click', callback, { once: true });
      }, delay);
    }, 1000);
  }, 1000);
}

// ───── Random Button Movement ─────
function getRandomPosition(element) {
  const y = document.body.offsetWidth - element.clientWidth;
  return [Math.floor(Math.random() * 500), Math.floor(Math.random() * y)];
}

new TypeIt("#teks1", {
  strings: [
    "Hey Shravani 😊",
    "Happy Birthday to the August princess 👑🎂",
    "I hope this year brings you moments that make your heart full 💖, people who make you feel loved 🤗, and wins that remind you of how capable and deserving you are 🏆🌟",
    "Alright, that was the sweet & standard wish... 😌",
    "Now let me say what I really mean 💬"
  ],
  startDelay: 4000,
  speed: 75,
  waitUntilVisible: true
}).go();


new TypeIt("#teks2", {
  strings: [
    "It’s been *years* knowing you... and honestly, it feels like you haven’t changed a bit 🕰️",
    "Still that same beautiful mix of the loudest laugh 😂 and the softest heart 💗 — a combo no girl could ever pull off like you do ✨",
    "Whenever I hear your name, it’s like a reel of memories 🎞️:",
    "Us playing PUBG like it was life 🎮🔥",
    "Your 5 AM 'good mornings' ☀️💬",
    "The random talks that somehow felt comforting 🫶",
    "Those little things... they stuck 🧠"
  ],
  startDelay: 2000,
  speed: 75,
  waitUntilVisible: true
}).go();


new TypeIt("#teks3", {
  strings: [
    "I’m honestly so happy you moved out to Russia for your studies 🎓✈️",
    "No wonder you’re doing amazing — you're built for more 🚀",
    "I was proud, really. Quietly proud 😌",
    "Even if I never said it, I admired you from afar 👀",
    "When I saw you were back, I *badly* wanted to message 📲",
    "But I didn’t know if I should... 🤔",
    "So when *you* texted first… 💬",
    "It felt like a warm hug out of nowhere 🤗"
  ],
  startDelay: 2000,
  speed: 75,
  waitUntilVisible: true
}).go();


new TypeIt("#teks4", {
  strings: [
    "We met during a very dumb phase of my life 😅",
    "I wasn’t really *me*. I wish things were different back then… 🫤",
    "Because maybe we’d have turned out differently too 🧩",
    "I know talking like this after 5 years might not make much sense 🕰️",
    "But sometimes, things unsaid scream louder than things spoken 🔇💭",
    "Hearing your voice again after so long — 📞",
    "It didn’t just bring back memories 🧠",
    "It brought back a feeling I hadn’t felt in ages 💫"
  ],
  startDelay: 2000,
  speed: 75,
  waitUntilVisible: true
}).go();


new TypeIt("#teks5", {
  strings: [
    "You were so pretty the first time we met 🥹✨",
    "You still are 💫",
    "And I truly believe — you always will be 💖",
    "This wasn’t just some birthday wish 🎉",
    "This was something to remind you… 📝",
    "You’re still the **kindest** 🫶, the **cutest** 🐣, the **softest** 🌸, the **prettiest** 👸 — all in one person 💯",
    "And no matter where life takes you… 🌍",
    "I’ll always be silently cheering for you 💛💛 ~Ruu"
  ],
  startDelay: 2000,
  speed: 75,
  waitUntilVisible: true
}).go();



new TypeIt("#trims", {
  strings: ["Thank you."],
  startDelay: 2000,
  speed: 150,
  loop: false,
  waitUntilVisible: true,
}).go();



'use strict';

var onlyOnKonami = false;

function confetti() {
  // Globals
  var $window = $(window),
    random = Math.random,
    cos = Math.cos,
    sin = Math.sin,
    PI = Math.PI,
    PI2 = PI * 2,
    timer = undefined,
    frame = undefined,
    confetti = [];

  var runFor = 2000
  var isRunning = true

  setTimeout(() => {
    isRunning = false
  }, runFor);

  // Settings
  var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
    pointer = 0;

  var particles = 150,
    spread = 20,
    sizeMin = 5,
    sizeMax = 12 - sizeMin,
    eccentricity = 10,
    deviation = 100,
    dxThetaMin = -.1,
    dxThetaMax = -dxThetaMin - dxThetaMin,
    dyMin = .13,
    dyMax = .18,
    dThetaMin = .4,
    dThetaMax = .7 - dThetaMin;

  var colorThemes = [
    function () {
      return color(200 * random() | 0, 200 * random() | 0, 200 * random() | 0);
    },
    function () {
      var black = 200 * random() | 0;
      return color(200, black, black);
    },
    function () {
      var black = 200 * random() | 0;
      return color(black, 200, black);
    },
    function () {
      var black = 200 * random() | 0;
      return color(black, black, 200);
    },
    function () {
      return color(200, 100, 200 * random() | 0);
    },
    function () {
      return color(200 * random() | 0, 200, 200);
    },
    function () {
      var black = 256 * random() | 0;
      return color(black, black, black);
    },
    function () {
      return colorThemes[random() < .5 ? 1 : 2]();
    },
    function () {
      return colorThemes[random() < .5 ? 3 : 5]();
    },
    function () {
      return colorThemes[random() < .5 ? 2 : 4]();
    }
  ];

  function color(r, g, b) {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  // Cosine interpolation
  function interpolation(a, b, t) {
    return (1 - cos(PI * t)) / 2 * (b - a) + a;
  }

  // Create a 1D Maximal Poisson Disc over [0, 1]
  var radius = 1 / eccentricity,
    radius2 = radius + radius;

  function createPoisson() {
    // domain is the set of points which are still available to pick from
    // D = union{ [d_i, d_i+1] | i is even }
    var domain = [radius, 1 - radius],
      measure = 1 - radius2,
      spline = [0, 1];
    while (measure) {
      var dart = measure * random(),
        i, l, interval, a, b, c, d;

      // Find where dart lies
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
        a = domain[i], b = domain[i + 1], interval = b - a;
        if (dart < measure + interval) {
          spline.push(dart += a - measure);
          break;
        }
        measure += interval;
      }
      c = dart - radius, d = dart + radius;

      for (i = domain.length - 1; i > 0; i -= 2) {
        l = i - 1, a = domain[l], b = domain[i];
        // c---d          c---d  Do nothing
        //   c-----d  c-----d    Move interior
        //   c--------------d    Delete interval
        //         c--d          Split interval
        //       a------b
        if (a >= c && a < d)
          if (b > d) domain[l] = d; // Move interior (Left case)
          else domain.splice(l, 2); // Delete interval
        else if (a < c && b > c)
          if (b <= d) domain[i] = c; // Move interior (Right case)
          else domain.splice(i, 0, c, d); // Split interval
      }

      for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
        measure += domain[i + 1] - domain[i];
    }

    return spline.sort();
  }

  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '0';
  container.style.overflow = 'visible';
  container.style.zIndex = '9999';

  // Confetto constructor
  function Confetto(theme) {
    this.frame = 0;
    this.outer = document.createElement('div');
    this.inner = document.createElement('div');
    this.outer.appendChild(this.inner);

    var outerStyle = this.outer.style,
      innerStyle = this.inner.style;
    outerStyle.position = 'absolute';
    outerStyle.width = (sizeMin + sizeMax * random()) + 'px';
    outerStyle.height = (sizeMin + sizeMax * random()) + 'px';
    innerStyle.width = '100%';
    innerStyle.height = '100%';
    innerStyle.backgroundColor = theme();

    outerStyle.perspective = '50px';
    outerStyle.transform = 'rotate(' + (360 * random()) + 'deg)';
    this.axis = 'rotate3D(' +
      cos(360 * random()) + ',' +
      cos(360 * random()) + ',0,';
    this.theta = 360 * random();
    this.dTheta = dThetaMin + dThetaMax * random();
    innerStyle.transform = this.axis + this.theta + 'deg)';

    this.x = $window.width() * random();
    this.y = -deviation;
    this.dx = sin(dxThetaMin + dxThetaMax * random());
    this.dy = dyMin + dyMax * random();
    outerStyle.left = this.x + 'px';
    outerStyle.top = this.y + 'px';

    // Create the periodic spline
    this.splineX = createPoisson();
    this.splineY = [];
    for (var i = 1, l = this.splineX.length - 1; i < l; ++i)
      this.splineY[i] = deviation * random();
    this.splineY[0] = this.splineY[l] = deviation * random();

    this.update = function (height, delta) {
      this.frame += delta;
      this.x += this.dx * delta;
      this.y += this.dy * delta;
      this.theta += this.dTheta * delta;

      // Compute spline and convert to polar
      var phi = this.frame % 7777 / 7777,
        i = 0,
        j = 1;
      while (phi >= this.splineX[j]) i = j++;
      var rho = interpolation(
        this.splineY[i],
        this.splineY[j],
        (phi - this.splineX[i]) / (this.splineX[j] - this.splineX[i])
      );
      phi *= PI2;

      outerStyle.left = this.x + rho * cos(phi) + 'px';
      outerStyle.top = this.y + rho * sin(phi) + 'px';
      innerStyle.transform = this.axis + this.theta + 'deg)';
      return this.y > height + deviation;
    };
  }


  function poof() {
    if (!frame) {
      // Append the container
      document.body.appendChild(container);

      // Add confetti

      var theme = colorThemes[onlyOnKonami ? colorThemes.length * random() | 0 : 0],
        count = 0;

      (function addConfetto() {

        if (onlyOnKonami && ++count > particles)
          return timer = undefined;

        if (isRunning) {
          var confetto = new Confetto(theme);
          confetti.push(confetto);

          container.appendChild(confetto.outer);
          timer = setTimeout(addConfetto, spread * random());
        }
      })(0);


      // Start the loop
      var prev = undefined;
      requestAnimationFrame(function loop(timestamp) {
        var delta = prev ? timestamp - prev : 0;
        prev = timestamp;
        var height = $window.height();

        for (var i = confetti.length - 1; i >= 0; --i) {
          if (confetti[i].update(height, delta)) {
            container.removeChild(confetti[i].outer);
            confetti.splice(i, 1);
          }
        }

        if (timer || confetti.length)
          return frame = requestAnimationFrame(loop);

        // Cleanup
        document.body.removeChild(container);
        frame = undefined;
      });
    }
  }

  $window.keydown(function (event) {
    pointer = konami[pointer] === event.which ?
      pointer + 1 :
      +(event.which === konami[0]);
    if (pointer === konami.length) {
      pointer = 0;
      poof();
    }
  });

  if (!onlyOnKonami) poof();
};


function _slideThankYou() {
  const slide = document.getElementById('slideThankYou');
  slide.classList.remove('d-none');

  new TypeIt("#trims", {
    strings: ["Thank you."],
    startDelay: 1000,
    speed: 150,
    loop: false,
    waitUntilVisible: true,
  }).go();

  setTimeout(() => {
    slide.classList.replace('animate__fadeIn', 'animate__fadeOut');
    setTimeout(() => {
      slide.classList.add('d-none');
      _slideEmpat(); // NOW show the Like/Dislike Slide
    }, 3000);
  }, 6000);
}


