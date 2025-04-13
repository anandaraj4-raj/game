var Main = {



    dressup_array:[1,1,1,1,1,1,1,1],
    next_array:[0],

    l2dekrat_array:[1,1,1],
    l1dekrat_array:[1,1,1],
    dekrat_array:[1,1,1],

    drs_next_array1:[0],
    drs_next_array2:[0],
    drs_next_array3:[0],


    l2drs_next_array1:[0],
    l2drs_next_array2:[0],
    l2drs_next_array3:[0],

    l1drs_next_array1:[0],
    l1drs_next_array2:[0],
    l1drs_next_array3:[0],

    l1_shap_array:[0,0],





};

class preloaderscene extends Phaser.Scene {
    constructor() {
        super('preloader');
    }

    preload() {
        this.load.image('prebglogo', 'assets/prebglogo.png');
    }

    create() {
        const { width } = this.cameras.main;
        const { height } = this.cameras.main;

        const prebglogo = this.add.image(640,320, 'prebglogo').setDepth(1);
        prebglogo.setInteractive({pixelPerfect:true});
        prebglogo.on('pointerup',this.openLink,this);
        
        this.load.on('complete', () => {
            this.scene.start('loader');
        });
        
        this.load.start();
    }

openLink() {
         //YYGGames.navigate("loading", "logo");

    }
}

class loader extends Phaser.Scene {

    constructor() {
        super('loader');
    }

  init() {

  }

  preload() {
     const { width } = this.cameras.main;
     const { height } = this.cameras.main;

  const prebglogo = this.add.image(360,240, 'prebglogo').setDepth(1);
  prebglogo.setInteractive({pixelPerfect:true});
  prebglogo.on('pointerup',this.openLink,this);

   const progress = this.add.text(width / 2-50,height / 2 + 160,"LOADING : ",{font:"bold 35px Arial",fill: "#ffffff",align:"center"});
   progress.setOrigin(0.5, 0.5);

    const percentText = this.add.text(width / 2+75, height / 2 + 160, '0%', {font: 'bold 35px Arial',fill: '#ffffff',});
    percentText.setOrigin(0.5);

    this.load.on('progress',(value) => {
      const percentage = parseInt(value * 100, 10);
       if (percentage >= 0 && percentage < 10) {
        percentText.x = width / 2+75;
    } else if (percentage >= 10 && percentage < 100) {
        percentText.x = width / 2+80;
    } else if (percentage === 100) {
        percentText.x = width / 2+85;
    }
    percentText.setText(`${percentage}%`);
    },this,);
    
    this.load.on('complete',() => {
       progress.alpha=0;
       percentText.alpha=0;

              // AAAAAAA

       ////////////////////////////////////////////////////////////////


        // this.scene.start('level1_cocking'); 


        this.Go = this.add.image(360,500,'Go').setScale(1);
        this.Go.setInteractive({ pixelPerfect:true,useHandCursor:true});
        this.Go.on('pointerdown',function(){
        this.scene.start('title');
       
        },this); 
        },this);


    this.load.audio('bg_music', 'assets/music.mp3');
    this.load.image('addismisbtn', 'assets/addismisbtn.png');
    this.load.image('adfaildbtn', 'assets/adfaildbtn.png');
    this.load.image('Go', 'assets/Go.png');
    this.load.image('logo', 'assets/logo.png');
    this.load.image('lock', 'assets/lock.png');
    this.load.image('music-off', 'assets/soundOffBtn.png');
    this.load.image('music-on', 'assets/soundOnBtn.png');
    this.load.spritesheet('arrow', 'assets/arrow.png', { frameWidth: 80, frameHeight: 197 });
    this.load.image('lock', 'assets/lock.png');

    this.load.image('title_bg','assets/title/title_bg.png');
    this.load.image('title_bg2','assets/title/title_bg2.png');
    this.load.image('title_text','assets/title/title_text.png');
    this.load.image('shutter_bg','assets/title/shutter_bg.png');
    this.load.image('shutter_bg2','assets/title/shutter_bg2.png');
    this.load.image('selt_bg1','assets/food/Food_Truck.png');
    this.load.image('next_lvl','assets/tick.png');
    this.load.image('next_scn','assets/next.png');
    this.load.image('selt_bg1','assets/food/Food_Truck.png');
    this.load.image('cook_bg','assets/title/cook_bg.png');

    this.load.image('truck_0','assets/food/truck.png');
    this.load.image('truck_1','assets/food/truck_1.png');
    this.load.image('truck_2','assets/food/truck_2.png');
    this.load.image('truck_3','assets/food/truck_3.png');
    this.load.image('truck_4','assets/food/truck_4.png');
    this.load.image('truck_5','assets/food/truck_5.png');
    this.load.image('wheel','assets/food/Wheel.png');
    this.load.image('wheel_n','assets/food/Wheel_n.png');
    this.load.image('wheel_new','assets/food/Wheel_n1.png');
    this.load.image('mud','assets/food/mud1.png');
    this.load.image('water','assets/food/water_1.png');
    this.load.image('oil','assets/food/Oil.png');
    this.load.image('oil_1','assets/food/oil_1.png');
    this.load.image('oil_2','assets/food/oil_2.png');
    this.load.image('oil_3','assets/food/oil_3.png');
    this.load.image('oil_4','assets/food/oil_4.png');
    this.load.image('scratch','assets/food/Scratch.png');
    this.load.image('scratch_1','assets/food/scratch_1.png');
    this.load.image('scratch_2','assets/food/scratch_2.png');
    this.load.image('scratch_3','assets/food/scratch_3.png');
    this.load.image('scratch_4','assets/food/scratch_4.png');
    this.load.image('panel','assets/food/panel_back.png');
    this.load.image('towel_p','assets/food/towel_p.png');
    this.load.image('brush_p','assets/food/brush_p.png');
    this.load.image('brush_p2','assets/food/brush_p2.png');
    this.load.image('brush_p3','assets/food/brush_p3.png');
    this.load.image('gun_p','assets/food/gun_p.png');
    this.load.image('paint_p','assets/food/paint_p.png');
    this.load.image('wheel_p','assets/food/wheel_p.png');
    this.load.image('bubble','assets/food/bubble.png');
    this.load.image('bubble_1','assets/food/bubble_1.png');
    this.load.image('bubble_2','assets/food/bubble_2.png');
    this.load.image('bubble_3','assets/food/bubble_3.png');
    this.load.image('bubble_4','assets/food/bubble_4.png');

    this.load.image('bg2','assets/food/cook_1/bg2.png');

    this.load.image('bowl_l1','assets/food/cook_1/bowl_1.png');
    this.load.image('plate_b','assets/food/cook_1/plate_b.png');

    this.load.image('flour_bowl_l1','assets/food/cook_1/flour_bowl.png');
    
    this.load.image('note_l1_lvl1','assets/food/cook_1/note_1.png');
    this.load.image('note_l2_lvl1','assets/food/cook_1/note_2.png');
    this.load.image('note_l3_lvl1','assets/food/cook_1/note_3.png');
    this.load.image('note_l4_lvl1','assets/food/cook_1/note_4.png');

    this.load.image('milk1','assets/food/cook_1/milk1.png');
    this.load.image('milk','assets/food/cook_1/milk.png');

    this.load.image('flour_l1_lvl1','assets/food/cook_1/flour1.png');
    this.load.image('flour_l2_lvl1','assets/food/cook_1/flour2.png');
    this.load.image('flour_l3_lvl1','assets/food/cook_1/flour3.png');
    this.load.image('flour_l4_lvl1','assets/food/cook_1/flour4.png');
    this.load.image('flour_l5_lvl1','assets/food/cook_1/flour5.png');

    this.load.image('sugar_lvl1','assets/food/cook_1/sugar1.png');
    this.load.image('sugarb_l1_lvl1','assets/food/cook_1/sugarb1.png');
    this.load.image('sugarb_l2_lvl1','assets/food/cook_1/sugarb2.png');
    this.load.image('sugarb_l3_lvl1','assets/food/cook_1/sugarb3.png');
    this.load.image('sugarb_l4_lvl1','assets/food/cook_1/sugarb4.png');

    this.load.image('milkb_l1_lvl1','assets/food/cook_1/milk_b1.png');
    this.load.image('milkb_l2_lvl1','assets/food/cook_1/milk_b2.png');
    this.load.image('milkb_l3_lvl1','assets/food/cook_1/milk_b3.png');
    this.load.image('milkp_lvl1','assets/food/cook_1/milk_p.png');

    this.load.image('flour_p_lvl1','assets/food/cook_1/flour_p.png');

    this.load.image('butter_1_lvl1','assets/food/cook_1/butter_1.png');
    this.load.image('butter_2_lvl1','assets/food/cook_1/butter_2.png');
    this.load.image('butter_3_lvl1','assets/food/cook_1/butter_3.png');
    this.load.image('butterp_lvl1','assets/food/cook_1/butter_p.png');
    this.load.image('butterp1_lvl1','assets/food/cook_1/butter_p1.png');

    this.load.atlas("Arrow_Right", 'assets/food/Arrow_R.png', 'assets/food/Arrow_R.json');
    this.load.atlas("Arrow_Left", 'assets/food/Arrow_L.png', 'assets/food/Arrow_L.json');
    this.load.atlas("water_gun", 'assets/food/water_g.png', 'assets/food/water_g.json');

    this.load.atlas("flour_ani", 'assets/food/Sprite Sheet/L1/Flour.png', 'assets/food/Sprite Sheet/L1/Flour.json');
    this.load.atlas("sugar_ani", 'assets/food/Sprite Sheet/L1/Sugar.png', 'assets/food/Sprite Sheet/L1/Sugar.json');

    this.load.atlas("spoon_ani", 'assets/food/Sprite Sheet/L2/Spoon.png', 'assets/food/Sprite Sheet/L2/Spoon.json');

    this.load.atlas("squeeze_ani", 'assets/food/Sprite Sheet/L4/Cooking_4.png', 'assets/food/Sprite Sheet/L4/Cooking_4.json');
    this.load.atlas("Timer_ani", 'assets/food/Sprite Sheet/L5/Timer.png', 'assets/food/Sprite Sheet/L5/Timer.json');
    



      

  }
 openLink (){
//   YYGGames.navigate("loading", "logo");
}
 }

// ******************* // title TTTTTTTTTT
class title extends Phaser.Scene {

 constructor() {
 super('title');
 }

  create() {
   if (!music) {
    music = this.sound.add('bg_music', { volume: 0.5, loop: true });
    music.play();
   }
  
    this.levelGroup = this.add.container();

    //this.title_bg = this.add.sprite(320,360, "title_bg");
    //this.title_bg2 = this.add.sprite(960,360, "title_bg2");
    this.cook_bg = this.add.sprite(0,0, "cook_bg").setOrigin(0,0);
    //this.levelGroup.add(this.title_bg);
    this.levelGroup.add(this.cook_bg);

    this.title_text=this.add.image(380,180,'title_text').setOrigin(0.5, 0.5).setScale(1);  
    this.tweens.add({targets: this.title_text,scaleX: 1.05,scaleY: 1.05,duration: 1000 / 2,ease: 'Linear',yoyo: true,repeat: -1,});
                
        this.playbtn=this.add.image(1150,600,'btn6').setOrigin(0.5, 0.5).setScale(1);
        this.playbtn.setInteractive({ useHandCursor: true });
        this.playbtn.on('pointerover',function(){
            this.tweens.add({targets:this.playbtn,scaleX:1.03,scaleY:1.03,ease: 'Bounce',duration:500},this);
        },this);
        this.playbtn.on('pointerout',function(){
            this.tweens.add({targets:this.playbtn,scaleX:1,scaleY:1,ease: 'Bounce',duration:500},this);
        },this);
        this.playbtn.on('pointerdown',this.enterRoom,this);
        
        this.morebtn=this.add.image(60,660,'btn4').setOrigin(0.5, 0.5).setScale(0);
        this.morebtn.setInteractive({ useHandCursor: true });
        this.morebtn.on('pointerover',function(){
            this.tweens.add({targets:this.morebtn,scaleX:1.1,scaleY:1.1,ease: 'Bounce',duration:500},this);
        },this);
        this.morebtn.on('pointerout',function(){
            this.tweens.add({targets:this.morebtn,scaleX:1,scaleY:1,ease: 'Bounce',duration:500},this);
        },this);
        this.morebtn.on('pointerup',this.morebtnLink,this);

         this.logo =this.add.image(165,55,'logo').setScale(0.65);
        this.logo.setInteractive({pixelPerfect:true});
        this.logo.on('pointerup',this.LogoLink,this);
        
         this.musicBtn = this.add.sprite(1212,50,"music-on");
        this.musicBtn.setInteractive();
        this.musicBtn.on('pointerup',this.changemusic,this);
            
        if (!this.sound.mute) {
        this.musicBtn.setTexture('music-on');
        } else {
        this.musicBtn.setTexture('music-off');
        }
        this.Go = this.add.image(360,500,'Go').setScale(1);
        this.Go.setInteractive({ pixelPerfect:true,useHandCursor:true});
        this.Go.on('pointerdown',function(){
        this.scene.start('selection_lavel');
       
        },this);
    }


changemusic() {
    if (!this.sound.mute) {
    this.musicBtn.setTexture('music-off');
    this.sound.mute = true;
  } else {
    this.musicBtn.setTexture('music-on');
    this.sound.mute = false;
  }
  }   
  morebtnLink (){
    //YYGGames.navigate("game", "morebutton");
  }
  LogoLink (){
    //YYGGames.navigate("game", "logo");
}

enterRoom (){
        var state = 'selection_lavel';
       //MyShowAD(this, state);
   }


  }


  ///////////////////////////////////////////////////////////

class selection_lavel extends Phaser.Scene {

constructor() {
 super('selection_lavel');
}
 create() {
     
    this.levelGroup = this.add.container();

    // this.title_bg = this.add.sprite(320,360, "title_bg");
    // this.title_bg2 = this.add.sprite(960,360, "title_bg2");

    // this.levelGroup.add(this.title_bg);
    // this.levelGroup.add(this.title_bg2);

/////////////////////////////////////////////////////

    this.selt_bg1 = this.add.sprite(0,0, "selt_bg1").setOrigin(0,0);
   this.truck_0 = this.add.image(30,150, "truck_0").setOrigin(0,0);
   this.truck_1 = this.add.image(30,150, "truck_1").setOrigin(0,0);
   this.truck_2 = this.add.image(30,150, "truck_2").setOrigin(0,0);
   this.truck_3 = this.add.image(30,150, "truck_3").setOrigin(0,0);
   this.truck_4 = this.add.image(30,150, "truck_4").setOrigin(0,0);
   this.truck_5 = this.add.image(30,150, "truck_5").setOrigin(0,0);
   this.truck_1.setVisible(false);
   this.truck_2.setVisible(false);
   this.truck_3.setVisible(false);
   this.truck_4.setVisible(false);
   this.truck_5.setVisible(false);
    //this.wheel.setVisible(true);
    this.mud = this.add.sprite(355,360, "mud").setOrigin(0.5,0.5);
    this.water = this.add.sprite(360,350, "water").setOrigin(0.5,0.5);
    this.water.setVisible(false);
    this.water.alpha=0;
    //this.mud_1 = this.add.sprite(640,270, "mud").setOrigin(0.5,0.5);
    //this.bubble = this.add.sprite(640,270, "bubble").setOrigin(0.5,0.5);
    //this.oil = this.add.sprite(650,270, "oil").setOrigin(0.5,0.5);
    this.oil_1 = this.add.sprite(615,350, "oil_1").setOrigin(0.5,0.5);
    this.oil_2 = this.add.sprite(400,300, "oil_2").setOrigin(0.5,0.5);
    this.oil_3 = this.add.sprite(310,450, "oil_3").setOrigin(0.5,0.5);
    this.oil_4 = this.add.sprite(110,400, "oil_4").setOrigin(0.5,0.5);
    //this.scratch = this.add.sprite(650,270, "scratch").setOrigin(0.5,0.5);
    this.scratch_1 = this.add.sprite(495,410, "scratch_1").setOrigin(0.5,0.5);
    this.scratch_2 = this.add.sprite(290,287, "scratch_2").setOrigin(0.5,0.5);
    this.scratch_3 = this.add.sprite(470,220, "scratch_3").setOrigin(0.5,0.5);
    this.scratch_4 = this.add.sprite(120,290, "scratch_4").setOrigin(0.5,0.5);
    this.wheel = this.add.sprite(367,492, "wheel").setOrigin(0.5,0.5);
    this.wheel_n = this.add.sprite(545,490, "wheel_n").setOrigin(0.5,0.5);
    this.wheel_n1 = this.add.sprite(545,490, "wheel_new").setOrigin(0.5,0.5);
    this.wheel_n1.setVisible(false);
    this.bubble_1 = this.add.sprite(140,335, "bubble_1").setOrigin(0.5,0.5);
    this.bubble_2 = this.add.sprite(285,335, "bubble_2").setOrigin(0.5,0.5);
    this.bubble_3 = this.add.sprite(445,335, "bubble_3").setOrigin(0.5,0.5);
    this.bubble_4 = this.add.sprite(570,335, "bubble_4").setOrigin(0.5,0.5);
    this.bubble_1.setVisible(false);
    this.bubble_1.alpha=0;
    this.bubble_2.setVisible(false);
    this.bubble_2.alpha=0;
    this.bubble_3.setVisible(false);
    this.bubble_3.alpha=0;
    this.bubble_4.setVisible(false);
    this.bubble_4.alpha=0;
    this.panel = this.add.sprite(720,300, "panel").setOrigin(0.5,0.5);
    this.towel_p = this.add.sprite(723,179, "towel_p").setOrigin(0.5,0.5);
    this.gun_p = this.add.sprite(723,349, "gun_p").setOrigin(0.5,0.5);
    this.brush_p = this.add.sprite(723,269, "brush_p").setOrigin(0.5,0.5);
    this.brush_p2 = this.add.sprite(723,419, "brush_p2").setOrigin(0.5,0.5);

    this.Arrow_Right = this.add.sprite(650,180, "Arrow_Right");
    this.Arrow_Left = this.add.sprite(130,420, "Arrow_Left");
    this.water_gun = this.add.sprite(530,220, "water_gun");
    this.water_gun.setVisible(false);
    this.Arrow_Left.setVisible(false);

    this.Arrow_Right_aniFrame = this.anims.generateFrameNames('Arrow_Right', {start: 10000,end: 10013,zeroPad: 1,
        prefix: 'arrow instance '});
    this.anims.create({key: 'Arrow_right_key',frames: this.Arrow_Right_aniFrame,frameRate:15,repeat: -1});

    this.Arrow_Left_aniFrame = this.anims.generateFrameNames('Arrow_Left', {start: 10000,end: 10013,zeroPad: 1,
        prefix: 'arrow instance '});
    this.anims.create({key: 'Arrow_left_key',frames: this.Arrow_Left_aniFrame,frameRate:15,repeat: -1});


    this.water_gun_aniFrame = this.anims.generateFrameNames('water_gun', {start: 10000,end: 10009,zeroPad: 1,
        prefix: 'Water instance '});
    this.anims.create({key: 'water_gun_key',frames: this.water_gun_aniFrame,frameRate:15,repeat: -1});

    this.levelGroup.add(this.selt_bg1);

//console.log(this.wheel);  
this.brush_p3 = this.add.sprite(720,208, "brush_p3").setOrigin(0.5,0.5);
this.wheel_p = this.add.sprite(722,297, "wheel_p").setOrigin(0.5,0.5);
this.paint_p = this.add.sprite(722,407, "paint_p").setOrigin(0.5,0.5); 
this.next_lvl =  this.add.sprite(750,500, "next_lvl").setOrigin(0.5,0.5);
this.next_lvl.setVisible(false);
this.brush_p3.setVisible(false);
this.wheel_p.setVisible(false);
this.paint_p.setVisible(false);

 var tool_2X = [[100,415],[100,400],[110,400],[90,400],[90,390],[120,400],[130,400],[90,380]];

    if(this.hitCircle){
        this.hitCircle(tool_2X,5);  
    }
         
        this.hitSprite_tool_2_count = 0;
        this.truck_count = 0;

        this.dragCircle_tool_2 = this.add.graphics();
        this.dragCircle_tool_2.fillStyle(0x000000, 0);
        this.dragCircle_tool_2.fillCircle(0, 0, 20);
        this.physics.add.existing(this.dragCircle_tool_2);
        this.physics.add.collider(this.dragCircle_tool_2, this.hitGroup_tool_2, hitSprite_group_tool_2, null, this);
    
function hitSprite_group_tool_2(dragCircle_tool_2, hitCircle_tool_2) {
const distance = Phaser.Math.Distance.Between(dragCircle_tool_2.x, dragCircle_tool_2.y, hitCircle_tool_2.x, hitCircle_tool_2.y);
//console.log(distance)
if (distance <= 15) {
    const stepsize=1/ tool_2X.length;
//console.log(stepsize)
if(this.oil_4.visible){
    this.oil_4.alpha-=stepsize;

}
if(this.oil_3.visible&&this.Arrow_Left.x==350){
    this.oil_3.alpha-=stepsize;

}
if(this.oil_2.visible&&this.Arrow_Left.x==470){
    this.oil_2.alpha-=stepsize;

}
if(this.oil_1.visible&&this.Arrow_Left.x==650){
    this.oil_1.alpha-=stepsize;

}
if(this.Arrow_Left.x==200){
    this.bubble_1.setVisible(true)
    this.bubble_1.alpha+=stepsize;
}
if(this.Arrow_Left.x==400){
    this.bubble_2.setVisible(true)
    this.bubble_2.alpha+=stepsize;

}
if(this.Arrow_Left.x==550){
    this.bubble_3.setVisible(true)
    this.bubble_3.alpha+=stepsize;

}
if(this.Arrow_Left.x==640){
    this.bubble_4.setVisible(true)
    this.bubble_4.alpha+=stepsize;

}
if(this.Arrow_Left.x==645){
    this.water.setVisible(true);
    this.bubble_1.alpha-=stepsize;
    this.bubble_2.alpha-=stepsize;
    this.bubble_3.alpha-=stepsize;
    this.bubble_4.alpha-=stepsize;
    this.mud.alpha-=stepsize;
    this.water.alpha+=stepsize+0.25;
}
if(this.Arrow_Left.x==643){
this.water.alpha-=stepsize;
}
if(this.Arrow_Left.x==180){
    this.scratch_4.alpha-=stepsize;
}
if(this.Arrow_Left.x==320){
    this.scratch_2.alpha-=stepsize;
}
if(this.Arrow_Left.x==530){
    this.scratch_3.alpha-=stepsize;
}
if(this.Arrow_Left.x==590){
    this.scratch_1.alpha-=stepsize;
}
        this.circle_tool_2.fillCircle(hitCircle_tool_2.x, hitCircle_tool_2.y, 6);
        hitCircle_tool_2.destroy();
        this.hitSprite_tool_2_count++;
        if (this.hitSprite_tool_2_count >= tool_2X.length) {
this.circle_tool_2.destroy();
this.hitSprite_tool_2_count=0;
if(this.oil_4.alpha==0&&this.oil_3.alpha!=0&&this.oil_2.alpha!=0&&this.oil_1.alpha!=0){
    this.oil_4.setVisible(false);
    this.Arrow_Left.x=350;
    this.Arrow_Left.y=450;
    tool_2X=[[310,420],[300,420],[310,430],[300,440],[290,420],[290,440],[290,430],[290,450]]
    this.hitCircle(tool_2X,5);
    this.physics.add.collider(this.dragCircle_tool_2, this.hitGroup_tool_2, hitSprite_group_tool_2, null, this);
}
if(this.oil_4.alpha==0&&this.oil_3.alpha==0&&this.oil_2.alpha!=0&&this.oil_1.alpha!=0){
    this.oil_3.setVisible(false);
    this.Arrow_Left.x=470;
    this.Arrow_Left.y=320;
    tool_2X=[[400,290],[420,290],[410,290],[430,300],[400,300],[390,300],[380,290],[390,310]]
    this.hitCircle(tool_2X,5);
    this.physics.add.collider(this.dragCircle_tool_2, this.hitGroup_tool_2, hitSprite_group_tool_2, null, this);
}
if(this.oil_4.alpha==0&&this.oil_3.alpha==0&&this.oil_2.alpha==0&&this.oil_1.alpha!=0){
    this.oil_2.setVisible(false);
    this.Arrow_Left.x=650;
    this.Arrow_Left.y=390;
    tool_2X=[[610,360],[610,350],[610,370],[620,360],[620,340],[630,360],[630,350],[630,340]]
    this.hitCircle(tool_2X,5);
    this.physics.add.collider(this.dragCircle_tool_2, this.hitGroup_tool_2, hitSprite_group_tool_2, null, this);
}
if(this.oil_4.alpha==0&&this.oil_3.alpha==0&&this.oil_2.alpha==0&&this.oil_1.alpha==0&&this.bubble_1.alpha==0&&this.mud.alpha==1){
    this.oil_1.setVisible(false);
    if((this.oil_1.alpha==0&&this.oil_2.alpha==0&&this.oil_3.alpha==0&&this.oil_4.alpha==0)){
        ///console.log("end")
        this.towel_p.disableInteractive();
        this.Arrow_Left.x=200;
        this.Arrow_Left.y=370;
        this.Arrow_Left.setVisible(false);

        this.tweens.add({targets:this.towel_p,x:723,y:179,ease: 'Quadratic',duration:1200,onComplete:() => {
            this.brush_p.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
            this.Arrow_Right.setVisible(true);
            this.Arrow_Right.x=650;
            this.Arrow_Right.y=270;
        }
    
    },this);
    }
    tool_2X = [[120,350],[120,370],[150,330],[150,360],[150,370]];
    this.hitCircle(tool_2X,25);
    this.physics.add.collider(this.dragCircle_tool_2, this.hitGroup_tool_2, hitSprite_group_tool_2, null, this);

}
if(this.bubble_1.visible==true&&this.bubble_2.visible!=true&&this.bubble_3.visible!=true&&this.bubble_4.visible!=true){
    this.Arrow_Left.x=400;
    this.Arrow_Left.y=370;
    tool_2X = [[320,400],[320,370],[350,380],[350,360],[350,370]];
    this.hitCircle(tool_2X,25);
    this.physics.add.collider(this.dragCircle_tool_2, this.hitGroup_tool_2, hitSprite_group_tool_2, null, this);

}
if(this.bubble_1.visible==true&&this.bubble_2.visible==true&&this.bubble_3.visible!=true&&this.bubble_4.visible!=true){
    this.Arrow_Left.x=550;
    this.Arrow_Left.y=370;
    tool_2X = [[470,400],[470,370],[490,380],[490,360],[490,370]];
    this.hitCircle(tool_2X,25);
    this.physics.add.collider(this.dragCircle_tool_2, this.hitGroup_tool_2, hitSprite_group_tool_2, null, this);

}
if(this.bubble_1.visible==true&&this.bubble_2.visible==true&&this.bubble_3.visible==true&&this.bubble_4.visible!=true){
    this.Arrow_Left.x=640;
    this.Arrow_Left.y=370;
    tool_2X = [[560,400],[560,370],[590,390],[590,360],[590,370]];
    this.hitCircle(tool_2X,25);
    this.physics.add.collider(this.dragCircle_tool_2, this.hitGroup_tool_2, hitSprite_group_tool_2, null, this);

}
if(this.bubble_1.visible==true&&this.bubble_2.visible==true&&this.bubble_3.visible==true&&this.bubble_4.visible==true&&this.mud.alpha==1){
    if(this.bubble_1.visible==true&&this.bubble_2.visible==true&&this.bubble_3.visible==true&&this.bubble_4.visible==true&&this.bubble_4.alpha==1){
        this.brush_p.disableInteractive();
        this.Arrow_Left.setVisible(false);
        this.Arrow_Left.x=645;
        this.Arrow_Left.y=270;
        this.tweens.add({targets:this.brush_p,x:723,y:269,ease: 'Quadratic',duration:1200,onComplete:() => {
            this.gun_p.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
            this.Arrow_Right.setVisible(true);
            this.Arrow_Right.x=650;
            this.Arrow_Right.y=370;
        }
    
    },this);
}
    tool_2X = [[450,320],[450,280],[400,330],[400,280],[400,300],[450,300]];
    this.hitCircle(tool_2X,25);
    this.physics.add.collider(this.dragCircle_tool_2, this.hitGroup_tool_2, hitSprite_group_tool_2, null, this);

}
if(this.mud.alpha<1&&this.water.alpha==1){
    this.water_gun.disableInteractive();
    this.mud.setVisible(false);
        this.water.setVisible(true);
        this.water_gun.disableInteractive();
        this.gun_p.disableInteractive();
        this.water_gun.setVisible(false);
        this.Arrow_Left.setVisible(false);
        this.Arrow_Left.x=643;
        this.Arrow_Left.y=270;
        this.gun_p.alpha=1;
        this.tweens.add({targets:this.gun_p,x:723,y:349,ease: 'Quadratic',duration:1200,onComplete:() => {
            this.brush_p2.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
            this.Arrow_Right.setVisible(true);
            this.Arrow_Right.x=650;
            this.Arrow_Right.y=420;
        }
    
    },this);
    //tool_2X = [[400,275],[420,350],[370,350],[400,320],[450,320],[430,320]];
    tool_2X = [[450,320],[450,280],[400,330],[400,270],[400,300],[450,350]];
    this.hitCircle(tool_2X,25);
    this.physics.add.collider(this.dragCircle_tool_2, this.hitGroup_tool_2, hitSprite_group_tool_2, null, this);

}
if(this.mud.alpha<1&&this.water.alpha<1&&this.scratch_4.alpha==1){
    this.brush_p2.disableInteractive();
if(this.water.alpha<0.15){
this.water.setVisible(false);
        this.Arrow_Left.setVisible(false);
        this.Arrow_Left.x=180;
        this.Arrow_Left.y=280;
        this.tweens.add({targets:this.brush_p2,x:723,y:419,ease: 'Quadratic',duration:1200,onComplete:() => {
            this.Arrow_Right.setVisible(true);
            this.brush_p2.disableInteractive();
            this.Arrow_Right.x=650;
            this.Arrow_Right.y=230;
            this.brush_p3.setVisible(true);
            this.wheel_p.setVisible(true);
            this.paint_p.setVisible(true);
            this.towel_p.setVisible(false);
            this.brush_p2.setVisible(false);
            this.gun_p.setVisible(false);
            this.brush_p.setVisible(false);
            this.brush_p3.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});


        }
    },this);
}
    tool_2X = [[145,250],[145,270],[145,260],[145,240],[145,230]];
        this.hitCircle(tool_2X,20);
        this.physics.add.collider(this.dragCircle_tool_2, this.hitGroup_tool_2, hitSprite_group_tool_2, null, this);
    
}
if(this.water.alpha<1&&this.scratch_4.alpha<1&&this.scratch_2.alpha==1&&this.scratch_3.alpha==1&&this.scratch_1.alpha==1){
    this.Arrow_Left.x=320;
    this.Arrow_Left.y=300;
    tool_2X = [[270,290],[270,250],[270,280],[270,260],[270,270]];
        this.hitCircle(tool_2X,20);
        this.physics.add.collider(this.dragCircle_tool_2, this.hitGroup_tool_2, hitSprite_group_tool_2, null, this);
    
}
if(this.water.alpha<1&&this.scratch_2.alpha<1&&this.scratch_4.alpha<1&&this.scratch_3.alpha==1&&this.scratch_1.alpha==1){
    this.Arrow_Left.x=530;
    this.Arrow_Left.y=230;
    tool_2X = [[450,225],[460,225],[470,225],[480,225],[490,225]];
            this.hitCircle(tool_2X,20);
        this.physics.add.collider(this.dragCircle_tool_2, this.hitGroup_tool_2, hitSprite_group_tool_2, null, this);
    
}
if(this.water.alpha<1&&this.scratch_4.alpha<1&&this.scratch_3.alpha<1&&this.scratch_2.alpha<1&&this.scratch_1.alpha==1){
    this.Arrow_Left.x=590;
    this.Arrow_Left.y=400;
    tool_2X = [[440,400],[460,400],[520,400],[530,400],[420,400]];
        this.hitCircle(tool_2X,25);
        this.physics.add.collider(this.dragCircle_tool_2, this.hitGroup_tool_2, hitSprite_group_tool_2, null, this);

}
if(this.scratch_1.alpha<0.1&&this.scratch_2.alpha<0.1&&this.scratch_3.alpha<0.1&&this.scratch_4.alpha<0.1&&this.wheel_p.visible==true){
    this.brush_p3.disableInteractive();
    this.Arrow_Left.setVisible(false);
    this.Arrow_Left.x=540;
    this.Arrow_Left.y=550;
    
    this.tweens.add({targets:this.brush_p3,x:720,y:208,ease: 'Quadratic',duration:1200,onComplete:() => {
        this.Arrow_Right.setVisible(true);
        this.Arrow_Right.x=650;
        this.Arrow_Right.y=300;
        this.wheel_p.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});


    }
},this);
}         }
         }
        }
////////////////
this.Arrow_Right.play('Arrow_right_key');
this.towel_p.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//this.towel_p.on('pointermove', function (pointer) {
    //this.towel_p.x=this.dragCircle_tool_2.x=pointer.position.x;
    // this.towel_p.y=this.dragCircle_tool_2.y=pointer.position.y;
//},this);
this.towel_p.on('drag', (pointer, dragX, dragY) => {
    this.towel_p.x = dragX;
    this.towel_p.y = dragY;
    //this.towel_p.y-=10;
    this.dragCircle_tool_2.x=dragX;
    this.dragCircle_tool_2.y=dragY;

    this.Arrow_Right.setVisible(false);
    this.Arrow_Left.setVisible(true);
    this.Arrow_Left.play('Arrow_left_key');

});
this.towel_p.on('dragend', () => {
     //this.towel_p = this.add.sprite(723,179, "towel_p").setOrigin(0.5,0.5);
    
},this);
this.brush_p.on('drag', (pointer, dragX, dragY) => {
    this.brush_p.x=dragX;
    this.brush_p.y=dragY;
    this.dragCircle_tool_2.x=dragX;
    this.dragCircle_tool_2.y=dragY;
    this.Arrow_Right.setVisible(false);
    this.Arrow_Left.setVisible(true);
});
this.brush_p.on('dragend', () => {


},this);
this.gun_p.on('drag', (pointer, dragX, dragY) => {
    this.water_gun.setVisible(true);
    this.Arrow_Right.setVisible(false);
    this.Arrow_Left.setVisible(true);
    this.water_gun .setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
    this.gun_p.x=dragX;
    this.gun_p.y=dragY;
this.water_gun.play('water_gun_key');
this.gun_p.alpha=0;
//this.gun_p.disableInteractive();
});

this.gun_p.on('dragend', () => {

},this);

this.water_gun.on('drag', (pointer, dragX, dragY) => {
    this.water_gun.x=this.dragCircle_tool_2.x=dragX;
    this.water_gun.y=this.dragCircle_tool_2.y=dragY;
    this.dragCircle_tool_2.x-=165;
    this.dragCircle_tool_2.y-=75;
});

this.water_gun.on('dragend', () => {
    if(this.mud.alpha<1&&this.water.alpha==1&&this.bubble_1.alpha<0.1){
          
    }
},this);
this.brush_p2.on('drag', (pointer, dragX, dragY) => {
this.Arrow_Right.setVisible(false);
    this.Arrow_Left.setVisible(true);
    this.brush_p2.x=this.dragCircle_tool_2.x=dragX;
    this.brush_p2.y=this.dragCircle_tool_2.y=dragY;
});
this.brush_p3.on('drag', (pointer, dragX, dragY) => {
        this.Arrow_Right.setVisible(false);
        this.Arrow_Left.setVisible(true);
        this.brush_p3.x=this.dragCircle_tool_2.x=dragX;
        this.brush_p3.y=this.dragCircle_tool_2.y=dragY;
});
this.brush_p2.on('dragend', () => {

},this);
this.brush_p3.on('dragend', () => {
    //console.log(this.scratch_4.alpha)
        

},this);
this.wheel_p.on('drag', (pointer, dragX, dragY) => {
    this.Arrow_Right.setVisible(false);
    this.Arrow_Left.setVisible(true);
    this.wheel_p.x=dragX;
    this.wheel_p.y=dragY;
    if(dragX>560&&dragX<600){
        this.wheel_n.setVisible(false);
        this.wheel_n1.setVisible(true);
        this.Arrow_Right.setVisible(true);
    this.Arrow_Left.setVisible(false);
    this.wheel_p.disableInteractive();  
    this.tweens.add({targets:this.wheel_p,x:722,y:297,ease: 'Quadratic',duration:1200,onComplete:() => {
        this.Arrow_Right.setVisible(true);
            this.Arrow_Right.x=650;
            this.Arrow_Right.y=420;
            

    }
},this); 
this.paint_p.setInteractive({useHandCursor:true});
this.paint_p.on('pointerdown',function(){
    this.truck_count++;
if(this.truck_count==6){
    this.truck_count=0;
    this['truck_5'].visible=false;
    this.next_lvl.setVisible(true);
      this.next_lvl.setInteractive({ pixelPerfect:true});
        

}
else if(this.truck_count==1){
    this['truck_0'].visible=false;
}    
else if(this.truck_count!=1){
    this['truck_' + (this.truck_count-1)].visible=false;
}
this['truck_' + this.truck_count].visible=true;
},this);
    }
});
this.next_lvl.on('pointerdown',function(){
this.scene.start('cook_lavel_1');
},this);
    /////////////////////////////////////////////////////
/////////////////////////////////////////////////////

        this.logo =this.add.image(165,55,'logo').setScale(0.65);
        this.logo.setInteractive({pixelPerfect:true});
        this.logo.on('pointerup',this.LogoLink,this);

        this.musicBtn = this.add.sprite(600,50,"music-on");
        this.musicBtn.setInteractive();
        this.musicBtn.on('pointerup',this.changemusic,this);

    this.shutter_group = this.add.container();
    this.shutter_bg =this.add.image(320,360,'shutter_bg');
    this.shutter_bg2 =this.add.image(960,360,'shutter_bg2');
    this.shutter_group.add(this.shutter_bg);
    this.shutter_group.add(this.shutter_bg2);

    this.tweens.add({targets:this.shutter_group,y:-720,ease: 'Quadratic',duration:1200,onComplete:() => {

    }},this);

        if (!this.sound.mute) {
        this.musicBtn.setTexture('music-on');
        } else {
        this.musicBtn.setTexture('music-off');
        }
}
hitCircle (tool_2X,size) {
    this.hitGroup_tool_2 = this.physics.add.group();
    for (let i = 0; i < tool_2X.length; i++) {
            const hitCircle_tool_2 = this.add.graphics();
            hitCircle_tool_2.fillStyle(0x000000, 0);
            hitCircle_tool_2.fillCircle(0, 0, size);
            hitCircle_tool_2.x = tool_2X[i][0];
            hitCircle_tool_2.y = tool_2X[i][1];
            hitCircle_tool_2.id = i;
            this.hitGroup_tool_2.add(hitCircle_tool_2);
            this.physics.add.existing(hitCircle_tool_2);
        }
        
        this.circleGroup_tool_2 = this.add.group();
        this.circle_tool_2 = this.add.graphics();
        this.circle_tool_2.fillStyle(0x000000, 0);
        this.circleGroup_tool_2.add(this.circle_tool_2);

    }
update() {
  // console.log(this.input.x + ':' + this.input.y); 

  if (this.dummy_drag) {
        this.dummy.x = this.input.activePointer.x ;
        this.dummy.y = this.input.activePointer.y;
        } 


  }
          
morebtnLink (){
  //YYGGames.navigate("game", "morebutton");
}
LogoLink (){
      //YYGGames.navigate("game", "logo");
}
enterRoom (){
    this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
    var state = 'cook_lavel_1';
    //MyShowAD(this, state);
    }},this);
   }
  
changemusic() {
     if (!this.sound.mute) {
    this.musicBtn.setTexture('music-off');
    this.sound.mute = true;
  } else {
    this.musicBtn.setTexture('music-on');
    this.sound.mute = false;
  }
  }   
}



///////////////////////////////////////////////////////


class cook_lavel_1 extends Phaser.Scene {

constructor() {
 super('cook_lavel_1');
}
 create() {
     
    this.levelGroup = this.add.container();
    this.cook_bg = this.add.sprite(0,0, "cook_bg").setOrigin(0,0);

    // this.title_bg = this.add.sprite(320,360, "title_bg");
    // this.title_bg2 = this.add.sprite(960,360, "title_bg2");

     this.levelGroup.add(this.cook_bg);
    // this.levelGroup.add(this.title_bg2);
    //this.bg2 = this.add.sprite(470,305, "bg2").setOrigin(0.5,0.5);

    this.bowl_l1 = this.add.sprite(315,385, "bowl_l1").setOrigin(0.5,0.5);

    this.flour_bowl_l1 = this.add.sprite(640,430, "flour_bowl_l1").setOrigin(0.5,0.5);
    
    this.flour_l1_lvl1 = this.add.sprite(315,385, "flour_l1_lvl1").setOrigin(0.5,0.5);
    this.flour_l1_lvl1.setVisible(false);
    this.flour_l2_lvl1 = this.add.sprite(315,375, "flour_l2_lvl1").setOrigin(0.5,0.5);
    this.flour_l2_lvl1.setVisible(false)
    this.flour_l3_lvl1 = this.add.sprite(315,365, "flour_l3_lvl1").setOrigin(0.5,0.5);
    this.flour_l3_lvl1.setVisible(false)
    this.flour_l4_lvl1 = this.add.sprite(315,355, "flour_l4_lvl1").setOrigin(0.5,0.5);
    this.flour_l4_lvl1.setVisible(false)
    this.flour_l5_lvl1 = this.add.sprite(315,345, "flour_l5_lvl1").setOrigin(0.5,0.5);
    this.flour_l5_lvl1.setVisible(false)

    this.note_l1_lvl1 = this.add.sprite(635,140, "note_l1_lvl1").setOrigin(0.5,0.5);

    this.next_scn =  this.add.sprite(740,500, "next_scn").setOrigin(0.5,0.5);
    this.next_scn.setVisible(false);

///////////////////////////////////////


   
 
this.Arrow_Right = this.add.sprite(540,180, "Arrow_Right");

this.flour_ani = this.add.sprite(150,180, "flour_ani");
this.flour_ani.setVisible(false);

this.Arrow_Right_aniFrame = this.anims.generateFrameNames('Arrow_Right', {start: 10000,end: 10013,zeroPad: 1,
    prefix: 'arrow instance '});
this.anims.create({key: 'Arrow_right_key',frames: this.Arrow_Right_aniFrame,frameRate:15,repeat: -1});

this.flour_aniFrame = this.anims.generateFrameNames('flour_ani', {start: 10000,end: 10019,zeroPad: 1,
    prefix: 'flour instance '});
this.anims.create({key: 'flour_key',frames: this.flour_aniFrame,frameRate:15,repeat: 5});



this.Arrow_Right.play('Arrow_right_key');

this.note_l1_lvl1.setInteractive({useHandCursor:true});
this.note_l1_lvl1.on('pointerdown',function(){
    this.note_l1_lvl1.disableInteractive();
    this.flour_ani.setVisible(true);
    this.Arrow_Right.setVisible(false);
    this.flour_ani.play('flour_key');
    this.time.delayedCall(1000,() => {
        this.flour_l1_lvl1.setVisible(true);

    },this);
    this.time.delayedCall(2000,() => {
        this.flour_l1_lvl1.setVisible(false);
        this.flour_l2_lvl1.setVisible(true);

    },this);
    this.time.delayedCall(3000,() => {
        this.flour_l2_lvl1.setVisible(false);
        this.flour_l3_lvl1.setVisible(true);

    },this);
    this.time.delayedCall(4500,() => {
        this.flour_l3_lvl1.setVisible(false);
        this.flour_l4_lvl1.setVisible(true);

    },this);
    this.time.delayedCall(6000,() => {
        this.flour_l4_lvl1.setVisible(false);
        this.flour_l5_lvl1.setVisible(true);
        //this.flour_ani.setVisible(false);

    },this);
    this.time.delayedCall(6700,() => {
        //this.flour_l4_lvl1.setVisible(false);
        //this.flour_l5_lvl1.setVisible(true);
        this.flour_ani.setVisible(false);
        this.next_scn.setVisible(true);
    },this);
},this);
this.next_scn.setInteractive({useHandCursor:true});
this.next_scn.on('pointerdown',function(){
    this.scene.start('cook_lavel_1_1');
},this)
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////


        this.musicBtn = this.add.sprite(1212,50,"music-on");
        this.musicBtn.setInteractive();
        this.musicBtn.on('pointerup',this.changemusic,this);

        if (!this.sound.mute) {
        this.musicBtn.setTexture('music-on');
        } else {
        this.musicBtn.setTexture('music-off');
        }
}
update() {
  // console.log(this.input.x + ':' + this.input.y); 


  }
          
morebtnLink (){
  //YYGGames.navigate("game", "morebutton");
}
LogoLink (){
      //YYGGames.navigate("game", "logo");
}
enterRoom (){
    this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
    var state = 'cook_lavel_2';
    //MyShowAD(this, state);
    }},this);
   }
  
changemusic() {
     if (!this.sound.mute) {
    this.musicBtn.setTexture('music-off');
    this.sound.mute = true;
  } else {
    this.musicBtn.setTexture('music-on');
    this.sound.mute = false;
  }
  }   
}


class cook_lavel_1_1 extends Phaser.Scene {

    constructor() {
     super('cook_lavel_1_1');
    }
     create() {
         
        this.levelGroup = this.add.container();
        this.cook_bg = this.add.sprite(0,0, "cook_bg").setOrigin(0,0);
    
        // this.title_bg = this.add.sprite(320,360, "title_bg");
        // this.title_bg2 = this.add.sprite(960,360, "title_bg2");
    
         this.levelGroup.add(this.cook_bg);
        // this.levelGroup.add(this.title_bg2);
        //this.bg2 = this.add.sprite(470,305, "bg2").setOrigin(0.5,0.5);
    
        this.bowl_l1 = this.add.sprite(315,385, "bowl_l1").setOrigin(0.5,0.5);
        
    
    
        this.note_l3_lvl1 = this.add.sprite(635,140, "note_l3_lvl1").setOrigin(0.5,0.5);

        this.milk1 = this.add.sprite(640,420, "milk1").setOrigin(0.5,0.5);
        //this.milk1.setVisible(false);
        this.milk_1 = this.add.sprite(480,250, "milk").setOrigin(0.5,0.5);
        this.milk_1.setVisible(false);

        this.milkb_l1_lvl1 = this.add.sprite(315,385, "milkb_l1_lvl1").setOrigin(0.5,0.5);
        this.milkb_l1_lvl1.setVisible(false);
        this.milkb_l2_lvl1 = this.add.sprite(315,375, "milkb_l2_lvl1").setOrigin(0.5,0.5);
        this.milkb_l2_lvl1.setVisible(false);
        this.milkb_l3_lvl1 = this.add.sprite(315,365, "milkb_l3_lvl1").setOrigin(0.5,0.5);
        this.milkb_l3_lvl1.setVisible(false);
        this.milkp_lvl1 = this.add.sprite(350,300, "milkp_lvl1").setOrigin(0.5,0.5);
        this.milkp_lvl1.setVisible(false);
    

        this.next_scn =  this.add.sprite(740,500, "next_scn").setOrigin(0.5,0.5);
        this.next_scn.setVisible(false);
    
    ///////////////////////////////////////
    
    this.Arrow_Right = this.add.sprite(540,180, "Arrow_Right");
    
    //this.sugar_ani = this.add.sprite(650,180, "sugar_ani");
    
    this.Arrow_Right_aniFrame = this.anims.generateFrameNames('Arrow_Right', {start: 10000,end: 10013,zeroPad: 1,prefix: 'arrow instance '});
    this.anims.create({key: 'Arrow_right_key',frames: this.Arrow_Right_aniFrame,frameRate:15,repeat: -1});
    
    
    //this.sugar_aniFrame = this.anims.generateFrameNames('sugar_ani', {start: 10000,end: 10034,zeroPad: 1, prefix: 'Sugar instance '});
    //this.anims.create({key: 'sugar_key',frames: this.sugar_aniFrame,frameRate:15,repeat: 3});
    
    
    
    this.Arrow_Right.play('Arrow_right_key');
    
    
    //this.sugar_ani.play('sugar_key');
    
   // this.sugar_ani.setVisible(false);
    this.note_l3_lvl1.setInteractive({useHandCursor:true});
    this.note_l3_lvl1.on('pointerdown',function(){
        this.Arrow_Right.setVisible(false);
        this.note_l3_lvl1.disableInteractive();
        this.tweens.add({targets:this.milk1,x:480,y:250,ease: 'Quadratic',duration:1200,onComplete:() => {
            this.milk1.setVisible(false);
            this.milk_1.setVisible(true);
            this.milkp_lvl1.setVisible(true);
            this.time.delayedCall(1000,() => {
                this.milkb_l1_lvl1.setVisible(true);
        
            },this);
            this.time.delayedCall(2000,() => {
                this.milkb_l1_lvl1.setVisible(false);
                this.milkb_l2_lvl1.setVisible(true);
        
            },this);
            this.time.delayedCall(3000,() => {
                this.milkb_l2_lvl1.setVisible(false);
                this.milkb_l3_lvl1.setVisible(true);
                
        
            },this);
        
            this.time.delayedCall(4000,() => {
                this.milk_1.setVisible(false);
                this.milkp_lvl1.setVisible(false);
                this.next_scn.setVisible(true);
                
        
            },this);
        }
    
    },this);
    },this);
    this.next_scn.setInteractive({useHandCursor:true});
    this.next_scn.on('pointerdown',function(){
        this.scene.start('cook_lavel_1_2');
    },this)
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    
    
            this.musicBtn = this.add.sprite(1212,50,"music-on");
            this.musicBtn.setInteractive();
            this.musicBtn.on('pointerup',this.changemusic,this);
    
     
            if (!this.sound.mute) {
            this.musicBtn.setTexture('music-on');
            } else {
            this.musicBtn.setTexture('music-off');
            }
    }
    update() {
      // console.log(this.input.x + ':' + this.input.y); 
    
    
      }
              
    morebtnLink (){
      //YYGGames.navigate("game", "morebutton");
    }
    LogoLink (){
          //YYGGames.navigate("game", "logo");
    }
    enterRoom (){
        this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
        var state = 'cook_lavel_2';
        //MyShowAD(this, state);
        }},this);
       }
      
    changemusic() {
         if (!this.sound.mute) {
        this.musicBtn.setTexture('music-off');
        this.sound.mute = true;
      } else {
        this.musicBtn.setTexture('music-on');
        this.sound.mute = false;
      }
      }   
}


    class cook_lavel_1_2 extends Phaser.Scene {

        constructor() {
         super('cook_lavel_1_2');
        }
         create() {
             
            this.levelGroup = this.add.container();
            this.cook_bg = this.add.sprite(0,0, "cook_bg").setOrigin(0,0);
        
            // this.title_bg = this.add.sprite(320,360, "title_bg");
            // this.title_bg2 = this.add.sprite(960,360, "title_bg2");
        
             this.levelGroup.add(this.cook_bg);
            // this.levelGroup.add(this.title_bg2);
            //this.bg2 = this.add.sprite(470,305, "bg2").setOrigin(0.5,0.5);
        
            this.bowl_l1 = this.add.sprite(315,385, "bowl_l1").setOrigin(0.5,0.5);
            
        
            this.note_l4_lvl1 = this.add.sprite(635,140, "note_l4_lvl1").setOrigin(0.5,0.5);

            this.sugar_lvl1 = this.add.sprite(640,420, "sugar_lvl1").setOrigin(0.5,0.5);

            this.sugarb_l1_lvl1 = this.add.sprite(315,385, "sugarb_l1_lvl1").setOrigin(0.5,0.5);
            this.sugarb_l1_lvl1.setVisible(false)
            this.sugarb_l2_lvl1 = this.add.sprite(315,385, "sugarb_l2_lvl1").setOrigin(0.5,0.5);
            this.sugarb_l2_lvl1.setVisible(false)
            this.sugarb_l3_lvl1 = this.add.sprite(315,375, "sugarb_l3_lvl1").setOrigin(0.5,0.5);
            this.sugarb_l3_lvl1.setVisible(false)
            this.sugarb_l4_lvl1 = this.add.sprite(315,375, "sugarb_l4_lvl1").setOrigin(0.5,0.5);
            this.sugarb_l4_lvl1.setVisible(false)


    
            this.next_scn =  this.add.sprite(740,500, "next_scn").setOrigin(0.5,0.5);
            this.next_scn.setVisible(false);
        
        ///////////////////////////////////////
        
        this.Arrow_Right = this.add.sprite(540,180, "Arrow_Right");
        
        this.sugar_ani = this.add.sprite(650,260, "sugar_ani");
        
        this.Arrow_Right_aniFrame = this.anims.generateFrameNames('Arrow_Right', {start: 10000,end: 10013,zeroPad: 1,prefix: 'arrow instance '});
        this.anims.create({key: 'Arrow_right_key',frames: this.Arrow_Right_aniFrame,frameRate:15,repeat: -1});
        
        
        this.sugar_aniFrame = this.anims.generateFrameNames('sugar_ani', {start: 10000,end: 10034,zeroPad: 1, prefix: 'Sugar instance '});
        this.anims.create({key: 'sugar_key',frames: this.sugar_aniFrame,frameRate:15,repeat: 3});
        
        
        
        this.Arrow_Right.play('Arrow_right_key');
        
        
        
        
        this.note_l4_lvl1.setInteractive({useHandCursor:true});
        this.note_l4_lvl1.on('pointerdown',function(){
            this.Arrow_Right.setVisible(false);
            this.note_l4_lvl1.disableInteractive();
            this.sugar_ani.play('sugar_key');
            this.time.delayedCall(1500,() => {
                this.sugarb_l1_lvl1.setVisible(true);
        
            },this);
            this.time.delayedCall(4000,() => {
                this.sugarb_l1_lvl1.setVisible(false);
                this.sugarb_l2_lvl1.setVisible(true);
        
            },this);
            this.time.delayedCall(6500,() => {
                this.sugarb_l2_lvl1.setVisible(false);
                this.sugarb_l3_lvl1.setVisible(true);
                
        
            },this);
        
            this.time.delayedCall(9000,() => {
                this.sugarb_l3_lvl1.setVisible(false);
                this.sugarb_l4_lvl1.setVisible(true);
                this.sugar_ani.setVisible(false);
                this.next_scn.setVisible(true);
                
        
            },this);
        },this);
        this.next_scn.setInteractive({ pixelPerfect:true,useHandCursor:true});
        this.next_scn.on('pointerdown',function(){
            this.scene.start('cook_lavel_1_3');
        },this)
        /////////////////////////////////////////////////////
        /////////////////////////////////////////////////////
        
        
                this.musicBtn = this.add.sprite(1212,50,"music-on");
                this.musicBtn.setInteractive();
                this.musicBtn.on('pointerup',this.changemusic,this);
        
         
                if (!this.sound.mute) {
                this.musicBtn.setTexture('music-on');
                } else {
                this.musicBtn.setTexture('music-off');
                }
        }
        update() {
          // console.log(this.input.x + ':' + this.input.y); 
        
        
          }
                  
        morebtnLink (){
          //YYGGames.navigate("game", "morebutton");
        }
        LogoLink (){
              //YYGGames.navigate("game", "logo");
        }
        enterRoom (){
            this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
            var state = 'cook_lavel_2';
            //MyShowAD(this, state);
            }},this);
           }
          
        changemusic() {
             if (!this.sound.mute) {
            this.musicBtn.setTexture('music-off');
            this.sound.mute = true;
          } else {
            this.musicBtn.setTexture('music-on');
            this.sound.mute = false;
          }
          }   
        }


        class cook_lavel_1_3 extends Phaser.Scene {

            constructor() {
             super('cook_lavel_1_3');
            }
             create() {
                 
                this.levelGroup = this.add.container();
                this.cook_bg = this.add.sprite(0,0, "cook_bg").setOrigin(0,0);
            
                // this.title_bg = this.add.sprite(320,360, "title_bg");
                // this.title_bg2 = this.add.sprite(960,360, "title_bg2");
            
                 this.levelGroup.add(this.cook_bg);
                // this.levelGroup.add(this.title_bg2);
                //this.bg2 = this.add.sprite(470,305, "bg2").setOrigin(0.5,0.5);
            
                this.bowl_l1 = this.add.sprite(315,385, "bowl_l1").setOrigin(0.5,0.5);
                
                this.plate_b = this.add.sprite(640,420, "plate_b").setOrigin(0.5,0.5);

                this.butter_1_lvl1 = this.add.sprite(610,380, "butter_1_lvl1").setOrigin(0.5,0.5);
                this.butter_2_lvl1 = this.add.sprite(660,380, "butter_2_lvl1").setOrigin(0.5,0.5);
                this.butter_3_lvl1 = this.add.sprite(620,420, "butter_3_lvl1").setOrigin(0.5,0.5);
                

                this.note_l2_lvl1 = this.add.sprite(635,140, "note_l2_lvl1").setOrigin(0.5,0.5);
    

                

                this.butterp_lvl1 = this.add.sprite(305,395, "butterp_lvl1").setOrigin(0.5,0.5);
                //this.butterp_lvl1.setVisible(false)
                this.butterp1_lvl1 = this.add.sprite(355,395, "butterp1_lvl1").setOrigin(0.5,0.5);
                //this.butterp1_lvl1.setVisible(false)
                
    
                this.next_scn =  this.add.sprite(740,500, "next_scn").setOrigin(0.5,0.5);
                this.next_scn.setVisible(false);
            
            ///////////////////////////////////////
            
            this.Arrow_Right = this.add.sprite(540,180, "Arrow_Right");
            
            
            this.Arrow_Right_aniFrame = this.anims.generateFrameNames('Arrow_Right', {start: 10000,end: 10013,zeroPad: 1,prefix: 'arrow instance '});
            this.anims.create({key: 'Arrow_right_key',frames: this.Arrow_Right_aniFrame,frameRate:15,repeat: -1});
            
            
            
            this.Arrow_Right.play('Arrow_right_key');
            
            this.note_l2_lvl1.setInteractive({useHandCursor:true});
            this.note_l2_lvl1.on('pointerdown',function(){
                this.Arrow_Right.setVisible(false);
                this.note_l2_lvl1.disableInteractive();
                
            },this);
            this.next_scn.setInteractive({ pixelPerfect:true,useHandCursor:true});
            this.next_scn.on('pointerdown',function(){
                this.scene.start('cook_lavel_1_3');
            },this)
            /////////////////////////////////////////////////////
            /////////////////////////////////////////////////////
            
            
                    this.musicBtn = this.add.sprite(1212,50,"music-on");
                    this.musicBtn.setInteractive();
                    this.musicBtn.on('pointerup',this.changemusic,this);
            
             
                    if (!this.sound.mute) {
                    this.musicBtn.setTexture('music-on');
                    } else {
                    this.musicBtn.setTexture('music-off');
                    }
            }
            update() {
              // console.log(this.input.x + ':' + this.input.y); 
            
            
              }
                      
            morebtnLink (){
              //YYGGames.navigate("game", "morebutton");
            }
            LogoLink (){
                  //YYGGames.navigate("game", "logo");
            }
            enterRoom (){
                this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
                var state = 'cook_lavel_2';
                //MyShowAD(this, state);
                }},this);
               }
              
            changemusic() {
                 if (!this.sound.mute) {
                this.musicBtn.setTexture('music-off');
                this.sound.mute = true;
              } else {
                this.musicBtn.setTexture('music-on');
                this.sound.mute = false;
              }
              }   
            }
    
let music;


const gameContainer = document.getElementById('game-container');

const config = {
    type: Phaser.AUTO,
    parent: gameContainer,
    backgroundColor: '#b8175f',
    transparent: true,
    scale: {
        mode: Phaser.Scale.ScaleModes.FIT,
        width: 800,
        height: 600,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
        default: 'arcade'
    },
    scene: [preloaderscene,
        loader,
        title,
        selection_lavel,
    cook_lavel_1,
    cook_lavel_1_1,cook_lavel_1_2,cook_lavel_1_3]
    /*scene: [preloaderscene,
            loader,
            title,
            selection_lavel,

            level2_cocking,
            level2_jar_cocking,
            l2_dekraction_lavel,

            level1_cocking,
            level1_pan_cocking,

            level1_box_shape,
            level1_crack_shape,
            level1_round_shape,

            shape_selection_lavel,
            level1_oven,
            level1_crack_oven,
            level1_round_oven,
            l1_dekraction_lavel,



            l3_cooking_lavel,
            l3_food_box1,
            l3_food_box2,
            l3_ferger_box,
            l3_dekraction_lavel,

            finalscreen_l1,
            finalscreen_l2,
            finalscreen_l3,

            mainscreen,

            finalscreen]*/
};
const game = new Phaser.Game(config);
let randomIndex;
