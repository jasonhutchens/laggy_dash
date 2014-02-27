(function(){window.LaggyDash={}}).call(this),function(){var t,e,s=function(t,e){return function(){return t.apply(e,arguments)}},a={}.hasOwnProperty,i=function(t,e){function s(){this.constructor=t}for(var i in e)a.call(e,i)&&(t[i]=e[i]);return s.prototype=e.prototype,t.prototype=new s,t.__super__=e.prototype,t};t=window.LaggyDash,e=function(t){function e(){this.done=s(this.done,this)}return i(e,t),e.prototype.create=function(){var t,e;return this.game.stage.backgroundColor="#FFFFFF",this.labs=this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,"labs"),this.labs.scale.setTo(.4,.4),this.labs.anchor.setTo(.5,.5),this.labs.alpha=0,t=this.game.add.tween(this.labs),t.to({alpha:1},1e3,Phaser.Easing.Linear.None,!1),e=this.game.add.tween(this.labs),e.to({alpha:0},1e3,Phaser.Easing.Linear.None,!1),t.onComplete.addOnce(function(){return function(){return e.start()}}(this)),e.onComplete.addOnce(this.done),t.start()},e.prototype.destroy=function(){return destroy(this.labs)},e.prototype.done=function(){return this.game.state.start("landscape")},e}(Phaser.State),t.Splash=e}.call(this),function(){var t,e,s=function(t,e){return function(){return t.apply(e,arguments)}},a={}.hasOwnProperty,i=function(t,e){function s(){this.constructor=t}for(var i in e)a.call(e,i)&&(t[i]=e[i]);return s.prototype=e.prototype,t.prototype=new s,t.__super__=e.prototype,t};t=window.LaggyDash,e=function(t){function e(){this.done=s(this.done,this)}var a;return i(e,t),a=1,e.prototype.create=function(){var t,e,s,i;return this.game.stage.backgroundColor="#000055",this.night=this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,"night"),this.night.alpha=0,this.night.anchor.setTo(.5,.5),t=this.game.add.tween(this.night),t.to({alpha:1},3e5/a,Phaser.Easing.Linear.None,!0,2e5/a),t.start,this.sky=this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,"sky"),this.sky.alpha=1,this.sky.anchor.setTo(.5,.5),t=this.game.add.tween(this.sky),t.to({alpha:0},5e5/a,Phaser.Easing.Linear.None,!0),t.start,this.sun=this.game.add.sprite(0,0,"sun"),this.sun.anchor.setTo(.5,.5),this.sun.scale.setTo(.3,.4),this.sun.x=this.game.world.centerX,this.sun.y=.5*this.game.world.centerY-100,e=this.game.add.tween(this.sun.scale),e.to({x:5,y:3},12e5/a,Phaser.Easing.Linear.None,!0),e.start,i=this.game.add.tween(this.sun),i.to({y:450},3e5/a,Phaser.Easing.Quintic.None,!0),i.start,t=this.game.add.tween(this.sun),t.to({alpha:0},4e5/a,Phaser.Easing.Linear.None,!0),t.start,this.cloud=this.game.add.sprite(1e3,40,"cloud"),this.cloud.alpha=.4,s=this.game.add.tween(this.cloud),s.to({x:-800},3e5/a,Phaser.Easing.Linear.None,!0,0,1),s.start,this.mountain0a=this.game.add.sprite(0,180,"mountain0"),this.mountain0b=this.game.add.sprite(2e3,180,"mountain0"),this.mountain1a=this.game.add.sprite(0,180,"mountain1"),this.mountain1b=this.game.add.sprite(2e3,180,"mountain1"),this.guy=this.game.add.sprite(600,330,"guy"),this.guy.scale.setTo(.25,.25),this.mountain2a=this.game.add.sprite(0,180,"mountain2"),this.mountain2b=this.game.add.sprite(2e3,180,"mountain2"),this.tree0=this.game.add.sprite(2e3,490,"tree0"),this.tree0.anchor.setTo(.5,1),s=this.game.add.tween(this.tree0),s.to({x:-2e3},3400/a,Phaser.Easing.Linear.None,!0,3e3/a,999),s.start,this.tree1=this.game.add.sprite(2e3,490,"tree1"),this.tree1.anchor.setTo(.5,1),s=this.game.add.tween(this.tree1),s.to({x:-2e3},3500/a,Phaser.Easing.Linear.None,!0,7e3/a,999),s.start,this.tree2=this.game.add.sprite(2e3,490,"tree2"),this.tree2.anchor.setTo(.5,1),s=this.game.add.tween(this.tree2),s.to({x:-2e3},3600/a,Phaser.Easing.Linear.None,!0,13e3/a,999),s.start,this.tree3=this.game.add.sprite(2e3,490,"tree3"),this.tree3.anchor.setTo(.5,1),s=this.game.add.tween(this.tree3),s.to({x:-2e3},3400/a,Phaser.Easing.Linear.None,!0,17e3/a,999),s.start,this.grass1=this.game.add.sprite(0,380,"grass"),this.grass2=this.game.add.sprite(896,380,"grass"),this.position=0,this.game.add.sprite(100,100,"foo"),window.laggydash.send("join")},e.prototype.update=function(){return this.position+=1,this.grass1.x-=20*a,this.grass2.x-=20*a,this.grass1.x<=-896&&(this.grass1.x+=1792),this.grass2.x<=-896&&(this.grass2.x+=1792),this.mountain0a.x-=.3*a,this.mountain0b.x-=.3*a,this.mountain0a.x<=-2e3&&(this.mountain0a.x+=4e3),this.mountain0b.x<=-2e3&&(this.mountain0b.x+=4e3),this.mountain1a.x-=.6*a,this.mountain1b.x-=.6*a,this.mountain1a.x<=-2e3&&(this.mountain1a.x+=4e3),this.mountain1b.x<=-2e3&&(this.mountain1b.x+=4e3),this.mountain2a.x-=.9*a,this.mountain2b.x-=.9*a,this.mountain2a.x<=-2e3&&(this.mountain2a.x+=4e3),this.mountain2b.x<=-2e3&&(this.mountain2b.x+=4e3),this.position%9===0?this.guy.frame=(this.guy.frame+1)%6:void 0},e.prototype.destroy=function(){return destroy(this.tree0),destroy(this.tree1),destroy(this.tree2),destroy(this.tree3),destroy(this.night),destroy(this.sky),destroy(this.sun),destroy(this.cloud),destroy(this.grass1),destroy(this.grass2),destroy(this.guy)},e.prototype.done=function(){return this.game.state.start("splash")},e}(Phaser.State),t.Landscape=e}.call(this),function(){var t,e,s,a,i=function(t,e){return function(){return t.apply(e,arguments)}},n={}.hasOwnProperty,r=function(t,e){function s(){this.constructor=t}for(var a in e)n.call(e,a)&&(t[a]=e[a]);return s.prototype=e.prototype,t.prototype=new s,t.__super__=e.prototype,t};t=window.LaggyDash,a=t.Splash,e=t.Landscape,s=function(t){function s(t){this.parent=null!=t?t:"",this._here=i(this._here,this),this._time=i(this._time,this),this._message=i(this._message,this),this._presence=i(this._presence,this),this.ready=i(this.ready,this)}return r(s,t),s.prototype.run=function(t){var e;return null==t&&(t=!1),e=t?Phaser.CANVAS:Phaser.AUTO,new Phaser.Game(896,504,e,this.parent,this)},s.prototype.destroy=function(){return destroy(this.text),destroy(this.graphics)},s.prototype.preload=function(){var t,s;return this.game.stage.disableVisibilityChange=!0,this.game.stage.scale.pageAlignHorizontally=!0,this.game.stage.scale.pageAlignVertically=!1,this.game.stage.scale.setShowAll(),this.game.stage.scale.refresh(),this.game.stage.scale.enterLandscape.add(function(t){return function(){return t.game.stage.scale.setShowAll(),t.game.stage.scale.refresh()}}(this)),this.game.stage.scale.enterPortrait.add(function(t){return function(){return t.game.stage.scale.setShowAll(),t.game.stage.scale.refresh()}}(this)),t="=== L A G G Y D A S H ===\nis\nLOADING",s={font:"30px Courier",fill:"#00ff44",align:"center"},this.text=this.game.add.text(this.game.world.centerX,this.game.world.centerY,t,s),this.text.anchor.setTo(.5,.5),this.graphics=this.game.add.graphics(0,0),this.graphics.lineStyle(1,5605580,1),this.graphics.drawRect(199,339,502,22),this.game.load.onLoadComplete.addOnce(this.ready),this.game.state.add("splash",new a,!1),this.game.state.add("landscape",new e,!1),this.game.load.image("labs","images/labs-6e6507d0.png"),this.game.load.image("night","images/night_sky-536d3c4e.png"),this.game.load.image("stars","images/night_stars-db528057.png"),this.game.load.image("sky","images/sky-7c5c1b96.jpg"),this.game.load.image("sun","images/sun-9189a743.png"),this.game.load.image("cloud","images/cloud-16060b57.png"),this.game.load.image("mountain0","images/mountain0-0416ca9b.png"),this.game.load.image("mountain1","images/mountain1-8de3a136.png"),this.game.load.image("mountain2","images/mountain2-1d8dfe88.png"),this.game.load.image("mountain3","images/mountain3-baf33425.png"),this.game.load.image("grass","images/grass-d6b8cba6.png"),this.game.load.image("tree0","images/tree0-23f3bb56.png"),this.game.load.image("tree1","images/tree1-769d4031.png"),this.game.load.image("tree2","images/tree2-646e82b2.png"),this.game.load.image("tree3","images/tree3-514f4f08.png"),this.game.load.image("foo","http://res.cloudinary.com/kranzky/image/twitter_name/barnaby_joyce.jpg"),this.game.load.spritesheet("guy","images/running-fe677839.png",90,128,6)},s.prototype.loadRender=function(){return this.graphics.beginFill(65348),this.graphics.drawRect(200,340,5*this.game.load.progress,20),this.graphics.endFill()},s.prototype.render=function(){return this.loadRender()},s.prototype.ready=function(){return this.game.state.start("splash"),this.connect("laggydash",laggydash.game.rnd.uuid())},s.prototype.connect=function(t,e){return this.channel=t,this.user=e,this.pubnub=PUBNUB.init({publish_key:"pub-c-e5d7da60-f65b-4173-b353-2b06890cfe5b",subscribe_key:"sub-c-4cf670be-96d5-11e3-b9e1-02ee2ddab7fe",uuid:this.user}),this.pubnub.subscribe({channel:t,message:this._message,presence:this._presence}),this.sync()},s.prototype.send=function(t){return this.pubnub.publish({channel:this.channel,message:{uuid:this.user,time:this.worldTime(),data:t}})},s.prototype.worldTime=function(){return Date.now()-this.latency},s.prototype.sync=function(){return this.pubnub.time(this._time)},s.prototype.here=function(){return this.pubnub.here_now({channel:this.channel,callback:this._here})},s.prototype._presence=function(t){return console.log(t)},s.prototype._message=function(t){return t.uuid!==this.user&&"landscape"===laggydash.game.state.current?this.game.state.getCurrentState().movChaser(t.uuid,t.time,t.data):void 0},s.prototype._time=function(t){return this.latency=Date.now()-t/1e4},s.prototype._here=function(t){return console.log(t)},s}(Phaser.State),t.Main=s}.call(this),function(){}.call(this);