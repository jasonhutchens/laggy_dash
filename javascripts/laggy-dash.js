(function(){window.LaggyDash={}}).call(this),function(){var t,e,a=function(t,e){return function(){return t.apply(e,arguments)}},i={}.hasOwnProperty,n=function(t,e){function a(){this.constructor=t}for(var n in e)i.call(e,n)&&(t[n]=e[n]);return a.prototype=e.prototype,t.prototype=new a,t.__super__=e.prototype,t};t=window.LaggyDash,e=function(t){function e(){this.done=a(this.done,this)}return n(e,t),e.prototype.create=function(){var t,e;return this.game.stage.backgroundColor="#FFFFFF",this.labs=this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,"labs"),this.labs.body=null,this.labs.scale.setTo(.4,.4),this.labs.anchor.setTo(.5,.5),this.labs.alpha=0,t=this.game.add.tween(this.labs),t.to({alpha:1},1e3,Phaser.Easing.Linear.None,!1),e=this.game.add.tween(this.labs),e.to({alpha:0},1e3,Phaser.Easing.Linear.None,!1),t.onComplete.addOnce(function(){return function(){return e.start()}}(this)),e.onComplete.addOnce(this.done),t.start()},e.prototype.destroy=function(){return destroy(this.labs)},e.prototype.done=function(){return this.game.state.start("landscape")},e}(Phaser.State),t.Splash=e}.call(this),function(){var t,e,a=function(t,e){return function(){return t.apply(e,arguments)}},i={}.hasOwnProperty,n=function(t,e){function a(){this.constructor=t}for(var n in e)i.call(e,n)&&(t[n]=e[n]);return a.prototype=e.prototype,t.prototype=new a,t.__super__=e.prototype,t};t=window.LaggyDash,e=function(t){function e(){this.done=a(this.done,this),this.showPlayer=a(this.showPlayer,this),this.hit=a(this.hit,this),this.jump=a(this.jump,this)}var i;return n(e,t),i=1,e.prototype.preload=function(){return window.laggydash.connect("laggydash",laggydash.game.rnd.uuid()+(":"+this.game.player_name))},e.prototype.create=function(){var t,e,a,n,s,r,o,h,d,u,l,g,m;for(this.game.stage.backgroundColor="#000055",this.night=this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,"night"),this.night.body=null,this.night.alpha=0,this.night.anchor.setTo(.5,.5),e=this.game.add.tween(this.night),e.to({alpha:1},3e5/i,Phaser.Easing.Linear.None,!0,15e4/i,999,!0),e.start,this.sky=this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,"sky"),this.sky.body=null,this.sky.alpha=1,this.sky.anchor.setTo(.5,.5),e=this.game.add.tween(this.sky),e.to({alpha:0},45e4/i,Phaser.Easing.Linear.None,!0,0,999,!0),e.start,this.sun=this.game.add.sprite(0,0,"sun"),this.sun.body=null,this.sun.anchor.setTo(.5,.5),this.sun.scale.setTo(.3,.4),this.sun.x=this.game.world.centerX,this.sun.y=.5*this.game.world.centerY-100,a=this.game.add.tween(this.sun.scale),a.to({x:1.5,y:1.5},45e4/i,Phaser.Easing.Cubic.InOut,!0,0,999,!0),a.start,o=this.game.add.tween(this.sun),o.to({y:675},45e4/i,Phaser.Easing.Sinusoidal.InOut,!0,0,999,!0),o.start,e=this.game.add.tween(this.sun),e.to({alpha:0},45e4/i,Phaser.Easing.Linear.None,!0,0,!0,!0),e.start,this.cloud=this.game.add.sprite(1e3,70,"cloud"),this.cloud.body=null,this.cloud.alpha=.4,r=this.game.add.tween(this.cloud),r.to({x:-800},7e4/i,Phaser.Easing.Linear.None,!0,0,999),r.start,this.mountain0a=this.game.add.sprite(0,180,"mountain0"),this.mountain0a.body=null,this.mountain0b=this.game.add.sprite(2e3,180,"mountain0"),this.mountain0b.body=null,this.collect_group=this.game.add.group(),this.player_group=this.game.add.group(),this.mountain1a=this.game.add.sprite(0,180,"mountain1"),this.mountain1a.body=null,this.mountain1b=this.game.add.sprite(2e3,180,"mountain1"),this.mountain1b.body=null,this.heightmap=[],u=122,d=l=0,m=this.mountain1a.width;m>=0?m>=l:l>=m;d=m>=0?++l:--l){if(h=this.mountain1a.input.checkPixel(d,u)){for(;h;)u-=1,h=this.mountain1a.input.checkPixel(d,u);u+=1}else for(;!(h||(u+=1,h=this.mountain1a.input.checkPixel(d,u),u>200)););this.heightmap.push(u)}for(this.mountain2a=this.game.add.sprite(0,180,"mountain2"),this.mountain2a.body=null,this.mountain2b=this.game.add.sprite(2e3,180,"mountain2"),this.mountain2b.body=null,this.mountain3a=this.game.add.sprite(0,180,"mountain3"),this.mountain3a.body=null,this.mountain3a.alpha=.4,this.mountain3b=this.game.add.sprite(2e3,180,"mountain3"),this.mountain3b.body=null,this.mountain3b.alpha=.4,this.avatar_group=this.game.add.group(),this.exposions=[],n=g=0;5>=g;n=++g)t=this.game.add.sprite(0,0,"explosion"),t.anchor.setTo(.5,.5),t.animations.add("bang",[0,1,2,3],4,!1),t.animations.play("bang",4,!1,!0),t.kill();return this.tree0=this.game.add.sprite(2e3,490,"tree0"),this.tree0.body=null,this.tree0.anchor.setTo(.5,1),r=this.game.add.tween(this.tree0),r.to({x:-2e3},3400/i,Phaser.Easing.Linear.None,!0,3e3/i,999),r.start,this.tree1=this.game.add.sprite(2e3,490,"tree1"),this.tree1.body=null,this.tree1.anchor.setTo(.5,1),r=this.game.add.tween(this.tree1),r.to({x:-2e3},3500/i,Phaser.Easing.Linear.None,!0,7e3/i,999),r.start,this.tree2=this.game.add.sprite(2e3,490,"tree2"),this.tree2.body=null,this.tree2.anchor.setTo(.5,1),r=this.game.add.tween(this.tree2),r.to({x:-2e3},3600/i,Phaser.Easing.Linear.None,!0,13e3/i,999),r.start,this.tree3=this.game.add.sprite(2e3,490,"tree3"),this.tree3.body=null,this.tree3.anchor.setTo(.5,1),r=this.game.add.tween(this.tree3),r.to({x:-2e3},3400/i,Phaser.Easing.Linear.None,!0,17e3/i,999),r.start,this.grass1=this.game.add.sprite(0,380,"grass"),this.grass1.body=null,this.grass2=this.game.add.sprite(896,380,"grass"),this.grass2.body=null,this.label_group=this.game.add.group(),this.position=0,this.players={},this.addPlayer(window.laggydash.user.replace(/:.*$/,""),this.game.player_name,!0),s=this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),s.onDown.add(this.jump),this.game.input.onTap.add(this.jump),this.current=null,this.timer=this.game.time.create(),this.timer.start()},e.prototype.update=function(){var t,e,a,n,s,r;return this.position+=1,this.grass1.x-=20*i,this.grass2.x-=20*i,this.grass1.x<=-896&&(this.grass1.x+=1792),this.grass2.x<=-896&&(this.grass2.x+=1792),this.mountain0a.x-=1.1*i,this.mountain0b.x-=1.1*i,this.mountain0a.x<=-2e3&&(this.mountain0a.x+=4e3),this.mountain0b.x<=-2e3&&(this.mountain0b.x+=4e3),this.mountain1a.x-=1.7*i,this.mountain1b.x-=1.7*i,this.mountain1a.x<=-2e3&&(this.mountain1a.x+=4e3),this.mountain1b.x<=-2e3&&(this.mountain1b.x+=4e3),this.mountain2a.x-=2.3*i,this.mountain2b.x-=2.3*i,this.mountain2a.x<=-2e3&&(this.mountain2a.x+=4e3),this.mountain2b.x<=-2e3&&(this.mountain2b.x+=4e3),this.mountain3a.x-=2.9*i,this.mountain3b.x-=2.9*i,this.mountain3a.x<=-2e3&&(this.mountain3a.x+=4e3),this.mountain3b.x<=-2e3&&(this.mountain3b.x+=4e3),a=Math.round(Math.min(this.mountain1a.x,this.mountain1b.x)),this.position>200&&this.position%50===0&&(n=this.position%100===0&&this.game.rnd.frac()<.2?this.game.add.sprite(900,0,"bomb"):this.game.add.sprite(900,0,"coin"),n.body.allowGravity=!1,n.anchor.setTo(.5,.5),n.animations.add("spin",[0,1,2,3,4,5],10,!0),n.animations.play("spin"),this.collect_group.add(n),r=(n.x-a)%2e3,e=this.game.rnd.pick([20,80]),n.y=this.heightmap[Math.round(r)]+this.mountain1a.y-e,n.alpha=1,n.move=this.game.add.tween(n),n.move.to({x:-100},1e4,Phaser.Easing.Linear.None,!0,0),n.move.onComplete.add(function(t){return function(){return t.collect(n)}}(this)),n.fade=this.game.add.tween(n),n.fade.to({alpha:.3},500,Phaser.Easing.Linear.None,!0,3e3),n.revive(),this.game.rnd.frac()<.25&&(n.jump=this.game.add.tween(n),t=80===e?60:-60,n.jump.to({y:n.y+t},300,Phaser.Easing.Linear.None,!0,1400))),this.player_group.forEachAlive(function(t){return function(e){var i,n,s,o;return e.dot.y=e.avatar.y-e.avatar.height-5,e.dot.height=e.dot.y-e.y-8,r=(e.x-a)%2e3,o=t.heightmap[Math.round(r)]+t.mountain1a.y,s=e.onGround,i=e.y-o,e.onGround=i>0,-20>i&&(e.jump=!1),e.onGround&&(e.y=o,e.body.velocity.y=0,e.jump&&(e.jump=!1,e.onGround=!1,e.y-=10,e.body.velocity.y=-200,e.animations.stop(),e.frame="runner"===e.key?4:2)),!s&&e.onGround&&e.play("run"),"wolf"===e.key&&e.x===e.target&&e.onGround?(e.target=t.game.rnd.integerInRange(100,500),n=t.game.add.tween(e),n.to({x:e.target},t.game.rnd.realInRange(3e3,8e3),Phaser.Easing.Sinusoidal.InOut,!1,t.game.rnd.realInRange(0,1e4)),n.start()):void 0}}(this)),null!=this.current&&(s=this.players[this.current],s.avatar.x=s.runner.x,s.runner.dot.x=s.runner.x,s.label.x=s.runner.x-s.label.width/2),null!=this.prev&&(s=this.players[this.prev],s.avatar.x=s.runner.x,s.runner.dot.x=s.runner.x,s.label.x=s.runner.x-s.label.width/2),this.player_group.forEachAlive(function(t){return function(e){return"runner"===e.key?t.game.physics.overlap(e,t.collect_group,t.hit):void 0}}(this))},e.prototype.jump=function(){return this.player_group.forEachAlive(function(){return function(t){return"runner"===t.key?(t.jump=!0,window.laggydash.send({action:"jump"})):void 0}}(this))},e.prototype.hit=function(t,e){return this.collect(e)},e.prototype.collect=function(t){return this.game.tweens.remove(t.move),t.move=null,this.game.tweens.remove(t.jump),t.jump=null,this.game.tweens.remove(t.fade),t.fade=null,t.destroy()},e.prototype.addPlayer=function(t,e,a){var i,n,s,r,o,h,d,u,l,g;return null==a&&(a=!1),g=a?600:this.game.rnd.integerInRange(100,500),u=a?"runner":"wolf",s=a?8:12,h=a?.9:1,d=this.game.add.sprite(g,0,u),d.animations.add("run",[0,1,2,3,4,5],s,!0),d.anchor.setTo(.5,h),d.onGround=!1,d.jump=!1,d.frame=a?3:4,d.target=g,d.id=t,this.player_group.add(d),i=this.game.add.sprite(g,475,"@"+e),i.body=null,i.id=t,i.name=e,i.width=60,i.height=60,i.anchor.setTo(.5,1),i.alpha=0,i.inputEnabled=!0,i.useHandCursor=!0,i.events.onInputDown.add(function(){return function(){return i.alpha>.5?window.laggydash.showUser(e):void 0}}(this)),this.avatar_group.add(i),n=this.game.add.sprite(g,i.y,"dot"),n.body=null,n.id=t,n.height=100,n.anchor.setTo(.5,1),n.alpha=0,d.dot=n,d.avatar=i,this.avatar_group.add(n),l={font:"10pt Courier",fill:"#ffffff"},o=this.game.add.text(g,480,"@"+e,l),o.x-=o.width/2,o.alpha=0,this.label_group.add(o),a?(r=this.game.add.tween(i),r.to({alpha:.8},1e3,Phaser.Easing.Linear.None,!0,2e3),r.start,r=this.game.add.tween(n),r.to({alpha:.3},1e3,Phaser.Easing.Linear.None,!0,2e3),r.start,r=this.game.add.tween(o),r.to({alpha:1},1e3,Phaser.Easing.Linear.None,!0,2e3),r.start):this.players[t]={runner:d,avatar:i,label:o}},e.prototype.showPlayer=function(){var t,e,a,i,n,s,r;if(a=_.keys(this.players),0===a.length)return this.current=null,this.prev=null,void 0;for(null!=this.current&&a.length>1&&(this.prev=this.current,a=_.without(a,this.current),i=this.players[this.current],e=this.game.add.tween(i.avatar),e.to({alpha:0},1e3,Phaser.Easing.Linear.None,!0),e.start,e=this.game.add.tween(i.runner.dot),e.to({alpha:0},1e3,Phaser.Easing.Linear.None,!0),e.start,e=this.game.add.tween(i.label),e.to({alpha:0},1e3,Phaser.Easing.Linear.None,!0),e.start),this.current=this.game.rnd.pick(a),i=this.players[this.current],e=this.game.add.tween(i.avatar),e.to({alpha:.8},1e3,Phaser.Easing.Linear.None,!0,500),e.start,e=this.game.add.tween(i.runner.dot),e.to({alpha:.3},1e3,Phaser.Easing.Linear.None,!0,500),e.start,e=this.game.add.tween(i.label),e.to({alpha:1},1e3,Phaser.Easing.Linear.None,!0,500),e.start,r=this.timer.events,n=0,s=r.length;s>n;n++)t=r[n],this.timer.remove(t);return this.timer.add(8e3,this.showPlayer)},e.prototype.delPlayer=function(t){return null!=this.players[t]?(this.players[t].runner.dot.destroy(),this.players[t].runner.destroy(),this.players[t].avatar.destroy(),this.players[t].label.destroy(),delete this.players[t],this.current===t&&(this.current=null,this.showPlayer()),this.prev===t?this.prev=null:void 0):void 0},e.prototype.avatarLoaded=function(t){return this.avatar_group.forEach(function(){return function(e){return"__missing"===e.key&&t==="@"+e.name?(e.loadTexture(t),e.width=60,e.height=60):void 0}}(this))},e.prototype.handle=function(t){switch(t.action){case"join":if(this.addPlayer(t.id,t.name),null===this.current)return this.showPlayer();break;case"bail":return this.delPlayer(t.id);case"jump":return this.player_group.forEachAlive(function(){return function(e){return e.id===t.id?e.jump=!0:void 0}}(this))}},e.prototype.delMob=function(t,e){return console.log("ADD "+e)},e.prototype.destroy=function(){return destroy(this.tree0),destroy(this.tree1),destroy(this.tree2),destroy(this.tree3),destroy(this.night),destroy(this.sky),destroy(this.sun),destroy(this.cloud),destroy(this.grass1),destroy(this.grass2),destroy(this.runner)},e.prototype.done=function(){return this.game.state.start("splash")},e}(Phaser.State),t.Landscape=e}.call(this),function(){var t,e,a,i,n=function(t,e){return function(){return t.apply(e,arguments)}},s={}.hasOwnProperty,r=function(t,e){function a(){this.constructor=t}for(var i in e)s.call(e,i)&&(t[i]=e[i]);return a.prototype=e.prototype,t.prototype=new a,t.__super__=e.prototype,t};t=window.LaggyDash,i=t.Splash,e=t.Landscape,a=function(t){function a(t){this.parent=null!=t?t:"",this._message=n(this._message,this),this._presence=n(this._presence,this),this.startGame=n(this.startGame,this),this.ready=n(this.ready,this)}return r(a,t),a.prototype.run=function(t){var e;return null==t&&(t=!1),e=t?Phaser.CANVAS:Phaser.AUTO,new Phaser.Game(896,504,e,this.parent,this)},a.prototype.destroy=function(){return destroy(this.text),destroy(this.graphics)},a.prototype.preload=function(){var t,a;return this.game.stage.disableVisibilityChange=!0,this.game.stage.scale.pageAlignHorizontally=!0,this.game.stage.scale.pageAlignVertically=!1,this.game.stage.scale.setShowAll(),this.game.stage.scale.refresh(),this.game.stage.scale.enterLandscape.add(function(t){return function(){return t.game.stage.scale.setShowAll(),t.game.stage.scale.refresh()}}(this)),this.game.stage.scale.enterPortrait.add(function(t){return function(){return t.game.stage.scale.setShowAll(),t.game.stage.scale.refresh()}}(this)),this.setPlayerName(location.search),this.game.physics.gravity.y=400,t="=== L A G G Y D A S H ===\nis\nLOADING",a={font:"30px Courier",fill:"#00ff44",align:"center"},this.text=this.game.add.text(this.game.world.centerX,this.game.world.centerY,t,a),this.text.anchor.setTo(.5,.5),this.graphics=this.game.add.graphics(0,0),this.graphics.lineStyle(1,5605580,1),this.graphics.drawRect(199,339,502,22),this.game.load.onLoadComplete.addOnce(this.ready),this.game.state.add("splash",new i,!1),this.game.state.add("landscape",new e,!1),this.game.load.image("labs","images/labs-6e6507d0.png"),this.game.load.image("night","images/night_sky-536d3c4e.png"),this.game.load.image("stars","images/night_stars-db528057.png"),this.game.load.image("sky","images/sky-7c5c1b96.jpg"),this.game.load.image("sun","images/sun-9189a743.png"),this.game.load.image("cloud","images/cloud-16060b57.png"),this.game.load.image("mountain0","images/mountain0-f8f2cbad.png"),this.game.load.image("mountain1","images/mountain1-8de3a136.png"),this.game.load.image("mountain2","images/mountain2-1d8dfe88.png"),this.game.load.image("mountain3","images/mountain3-baf33425.png"),this.game.load.image("grass","images/grass-d6b8cba6.png"),this.game.load.image("tree0","images/tree0-23f3bb56.png"),this.game.load.image("tree1","images/tree1-769d4031.png"),this.game.load.image("tree2","images/tree2-646e82b2.png"),this.game.load.image("tree3","images/tree3-514f4f08.png"),this.game.load.image("dot","images/dot-309749be.png"),this.game.load.spritesheet("runner","images/running-cb59ff48.png",44,64,6),this.game.load.spritesheet("wolf","images/wolf-aa062f94.png",64,32,6),this.game.load.spritesheet("coin","images/coin-28be484f.png",16,18,6),this.game.load.spritesheet("bomb","images/bomb-3e619ff7.png",18,18,6),this.game.load.spritesheet("explosion","images/explosion-5fb4e372.png",32,32,4)},a.prototype.loadRender=function(){return this.graphics.beginFill(65348),this.graphics.drawRect(200,340,5*this.game.load.progress,20),this.graphics.endFill()},a.prototype.render=function(){return this.graphics.clear(),this.game.load.hasLoaded?void 0:this.loadRender()},a.prototype.ready=function(){var t,e;return this.game.load.onFileComplete.add(function(t){return function(e,a){return t.onAvatarLoaded(a)}}(this)),this.text.alpha=0,null!=this.game.player_name?this.startGame():(t="Your Twitter Handle (so we can show you in the game)",e={labels:{ok:"Play",cancel:"Surprise Me"}},alertify.set(e),alertify.prompt(t,function(t){return function(e,a){return e&&t.setPlayerName(a),null==t.game.player_name&&t.randomPlayerName(),t.startGame()}}(this)))},a.prototype.setPlayerName=function(t){return null!=t?(this.game.player_name=t.replace(/[^a-z0-9_]/i,"").toLowerCase(),this.game.player_name.length<1||this.game.player_name.length>15?this.game.player_name=null:void 0):void 0},a.prototype.randomPlayerName=function(){var t,e;return t=["BarackObama","Eminem","BillGates","ParisHilton","ConanOBrien","tomhanks","TheRock","stephenfry","MichelleObama"],e=this.game.rnd.pick(t),this.setPlayerName(e)},a.prototype.startGame=function(){return this.game.state.start("splash")},a.prototype.connect=function(t,e){return this.channel=t,this.user=e,this.pubnub=PUBNUB.init({publish_key:"pub-c-e5d7da60-f65b-4173-b353-2b06890cfe5b",subscribe_key:"sub-c-4cf670be-96d5-11e3-b9e1-02ee2ddab7fe",uuid:this.user}),this.pubnub.subscribe({channel:t,message:this._message,presence:this._presence})},a.prototype.send=function(t){return this.pubnub.publish({channel:this.channel,message:{uuid:this.user,data:t}})},a.prototype.loadAvatar=function(t){var e;if(e="@"+t,this.game.cache.checkImageKey(e)||this.game.load.checkKeyExists("image",e));else if(this.game.load.image(e,"http://res.cloudinary.com/kranzky/image/twitter_name/"+t+".jpg"),!this.game.load.isLoading)return this.game.load.start()},a.prototype.onAvatarLoaded=function(t){return"landscape"===laggydash.game.state.current?this.game.state.getCurrentState().avatarLoaded(t):void 0},a.prototype.showUser=function(t){return this.openWindow("https://twitter.com/intent/user?screen_name="+t)},a.prototype.tweet=function(t,e){var a,i;return i=encodeURI("http://laggydash.com/"),t=encodeURI(t),a=encodeURI(e.toString()),this.openWindow("https://twitter.com/intent/tweet?text="+t+"&hashtags=laggydash&url="+i+"&related="+a+"&")},a.prototype.openWindow=function(t){var e,a,i,n,s;return s="scrollbars=yes,resizable=yes,toolbar=no,location=yes",n=550,e=420,a=Math.round(screen.width/2-n/2),i=0,screen.height>e&&(i=Math.round(screen.height/2-e/2)),window.open(t,"intent",""+s+",width="+n+",height="+e+",left="+a+",top="+i)},a.prototype._presence=function(t){var e,a;if(a=t.uuid.replace(/:.*$/i,""),e=t.uuid.replace(/^.*:/i,""),t.uuid!==this.user)switch(t.action){case"join":this._handle({id:a,action:"join",name:e}),alertify.success("@"+e+" has joined");break;case"leave":this._handle({id:a,action:"bail",name:e}),alertify.error("@"+e+" has bailed")}return(t.action="join")?this.loadAvatar(e):void 0},a.prototype._message=function(t){var e,a;if(t.uuid!==this.user)return a=t.uuid.replace(/:.*$/i,""),e=t.uuid.replace(/^.*:/i,""),t.data.id=a,t.data.name=e,this._handle(t.data)},a.prototype._handle=function(t){return"landscape"===laggydash.game.state.current?this.game.state.getCurrentState().handle(t):void 0},a}(Phaser.State),t.Main=a}.call(this),function(){}.call(this);