function init() {
    var stage1 = new createjs.Stage("demoCanvas");
    var circle1 = new createjs.Shape();
    circle1.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle1.x = 100;
    circle1.y = 100;
    stage1.addChild(circle1);
    createjs.Tween.get(circle1, {loop: true})
      .to({x: 820}, 1000, createjs.Ease.getPowInOut(3))
      .to({alpha: 0, y: 75}, 500, createjs.Ease.getPowInOut(1))
      .to({alpha: 0, y: 125}, 100)
      .to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(1))
      .to({x: 100}, 800, createjs.Ease.getPowInOut(2));
    // createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage1);
  }
