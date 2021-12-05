(function() {
  var ExpandingDot, animationLoop, canvas, context, delayedPlace, dots, gui, height, i, scene, width, _i, _ref;

  canvas = document.getElementById("canvas");

  context = canvas.getContext("2d");

  width = window.innerWidth;

  height = window.innerHeight;

  canvas.width = width;

  canvas.height = height;

  scene = {
    finalRadius: 8,
    duration: 500,
    innerColor: "#333",
    outerColor: "#000"
  };

  Math.easeOutQuart = function(t, b, c, d) {
    t /= d;
    t--;
    return -c * (t * t * t * t - 1) + b;
  };

  ExpandingDot = (function() {
    ExpandingDot.prototype.completed = false;

    function ExpandingDot(x, y) {
      this.finalRadius = scene.finalRadius;
      this.startTime = Date.now();
      this.radius = 0;
      this.innerRadius = 0;
      this.position = {
        x: x,
        y: y
      };
    }

    ExpandingDot.prototype.update = function() {
      var currentTime;
      if (!this.completed) {
        currentTime = Date.now() - this.startTime;
        this.radius = Math.easeOutQuart(currentTime, 0, this.finalRadius * 0.9, scene.duration);
        if (currentTime > 100) {
          this.innerRadius = Math.easeOutQuart(currentTime - 100, 0, this.finalRadius * 1.1, scene.duration * 2);
        }
        this.radius = Math.max(this.radius, 0);
        this.innerRadius = Math.max(this.innerRadius, 0);
        if (this.innerRadius > this.radius * 1) {
          this.completed = true;
        }
        return context.lineWidth = Math.easeOutQuart(currentTime, 30, -30, scene.duration);
      }
    };

    ExpandingDot.prototype.render = function() {
      context.globalCompositeOperation = "source-over";
      context.fillStyle = scene.innerColor;
      context.beginPath();
      context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
      context.fill();
      context.strokeStyle = scene.outerColor;
      context.stroke();
      context.globalCompositeOperation = "destination-out";
      context.fillStyle = "red";
      context.beginPath();
      context.arc(this.position.x, this.position.y, this.innerRadius, 0, Math.PI * 2, false);
      return context.fill();
    };

    return ExpandingDot;

  })();

  dots = [];

  (animationLoop = function() {
    var aliveDots, dot, _i, _j, _len, _len1;
    context.clearRect(0, 0, width, height);
    aliveDots = [];
    for (_i = 0, _len = dots.length; _i < _len; _i++) {
      dot = dots[_i];
      if (!dot.completed) {
        aliveDots.push(dot);
      }
    }
    dots = aliveDots;
    for (_j = 0, _len1 = dots.length; _j < _len1; _j++) {
      dot = dots[_j];
      if (!dot.completed) {
        dot.update();
        dot.render();
      }
    }
    return requestAnimationFrame(animationLoop);
  })();

  delayedPlace = function(degree, index) {
    return setTimeout((function(_this) {
      return function() {
        return dots.push(new ExpandingDot(width / 2 + Math.cos(degree * Math.PI / 180) * 200, height / 2 + Math.sin(degree * Math.PI / 180 * 2) * 200 / 2));
      };
    })(this), index * 50);
  };

  window.addEventListener("mousemove", function(event) {
    return dots.push(new ExpandingDot(event.pageX, event.pageY));
  });

  window.addEventListener("click", function(event) {
    return dots.push(new ExpandingDot(event.pageX, event.pageY));
  });

  gui = new dat.GUI();

  gui.add(scene, 'finalRadius', 10, 250);

  gui.addColor(scene, 'innerColor');

  gui.addColor(scene, 'outerColor');

}).call(this);
