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


        this.Go = this.add.image(360,540,'Go').setScale(1);
        this.Go.setInteractive({ pixelPerfect:true});
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
    
    this.load.image('truck','assets/food/truck.png');
    this.load.image('wheel','assets/food/Wheel.png');
    this.load.image('mud','assets/food/Mud.png');
    this.load.image('oil','assets/food/Oil.png');
    this.load.image('scratch','assets/food/Scratch.png');
    




      

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

    this.title_bg = this.add.sprite(320,360, "title_bg");
    this.title_bg2 = this.add.sprite(960,360, "title_bg2");

    this.levelGroup.add(this.title_bg);
    this.levelGroup.add(this.title_bg2);

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
        this.Go = this.add.image(360,540,'Go').setScale(1);
        this.Go.setInteractive({ pixelPerfect:true});
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
    this.truck = this.add.sprite(0,0, "truck").setOrigin(0.5,0.5);
    this.wheel = this.add.sprite(0,0, "wheel").setOrigin(0.5,0.5);
    this.mud = this.add.sprite(0,0, "mud").setOrigin(0.5,0.5);
    this.oil = this.add.sprite(0,0, "oil").setOrigin(0.5,0.5);
    this.scratch = this.add.sprite(0,0, "scratch").setOrigin(0.5,0.5);
    this.levelGroup.add(this.selt_bg1);

console.log(this.selt_bg1);    

////////////////

    

    
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

       this.playbtn=this.add.image(1190,640,'btn2').setOrigin(0.5, 0.5).setScale(0);
        this.playbtn.setInteractive({ useHandCursor: true });
        this.playbtn.on('pointerover',function(){this.playbtn.setScale(1.05)},this);
        this.playbtn.on('pointerout',function(){this.playbtn.setScale(1)},this);
        this.playbtn.on('pointerdown',this.enterRoom,this);

        this.morebtn=this.add.image(60,660,'btn4').setOrigin(0.5, 0.5).setScale(0);
        this.morebtn.setInteractive({ useHandCursor: true });
        this.morebtn.on('pointerover',function(){this.morebtn.setScale(1.05)},this);
        this.morebtn.on('pointerout',function(){this.morebtn.setScale(1)},this);
        this.morebtn.on('pointerup',this.morebtnLink,this);

         this.logo =this.add.image(165,55,'logo').setScale(0.65);
        this.logo.setInteractive({pixelPerfect:true});
        this.logo.on('pointerup',this.LogoLink,this);

          this.musicBtn = this.add.sprite(1212,50,"music-on");
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
    var state = 'finalscreen';
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


// class shape_selection_lavel extends Phaser.Scene {

// constructor() {
//  super('shape_selection_lavel');
// }
//  create() {
     
//     this.levelGroup = this.add.container();

//     // this.title_bg = this.add.sprite(320,360, "title_bg");
//     // this.title_bg2 = this.add.sprite(960,360, "title_bg2");

//     // this.levelGroup.add(this.title_bg);
//     // this.levelGroup.add(this.title_bg2);

// /////////////////////////////////////////////////////

//     this.selt_bg1 = this.add.sprite(320,360, "l2_bg");

//     this.selt_bg2 = this.add.sprite(960,360, "l2_bg1");


//     this.blue1_Front_open = this.add.sprite(800,400, "blue1_Front_open");

//     this.l1meet_bowl = this.add.sprite(300,400, "l1meet_bowl");
//     this.l1meet_bowl.setVisible(true);
//     this.l1meet_bowl.setFrame('l1meet_bowl4');


// ////////////////



// ////////////////



//     this.boxe_round = this.add.sprite(600,500, "boxe_round").setScale(1.4);
//     this.boxe_round.setInteractive({useHandCursor:true});
//     this.boxe_round.on('pointerdown',function(){

//         this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     var state = 'level1_box_shape';
//     MyShowAD(this, state);
//     }},this);

   
//     },this);



   
 
   

// ////////////////

//     this.round_round = this.add.sprite(900,500, "round_round").setScale(1.4);
//     this.round_round.setInteractive({useHandCursor:true});
//     this.round_round.on('pointerdown',function(){
 

//            this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     var state = 'level1_round_shape';
//     MyShowAD(this, state);
//     }},this);

//     },this);
   

   
 

   
  
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////

//        this.playbtn=this.add.image(1190,640,'btn2').setOrigin(0.5, 0.5).setScale(0);
//         this.playbtn.setInteractive({ useHandCursor: true });
//         this.playbtn.on('pointerover',function(){this.playbtn.setScale(1.05)},this);
//         this.playbtn.on('pointerout',function(){this.playbtn.setScale(1)},this);
//         this.playbtn.on('pointerdown',this.enterRoom,this);

//         this.morebtn=this.add.image(60,660,'btn4').setOrigin(0.5, 0.5).setScale(0);
//         this.morebtn.setInteractive({ useHandCursor: true });
//         this.morebtn.on('pointerover',function(){this.morebtn.setScale(1.05)},this);
//         this.morebtn.on('pointerout',function(){this.morebtn.setScale(1)},this);
//         this.morebtn.on('pointerup',this.morebtnLink,this);

//          this.logo =this.add.image(165,55,'logo').setScale(0.65);
//         this.logo.setInteractive({pixelPerfect:true});
//         this.logo.on('pointerup',this.LogoLink,this);

//           this.musicBtn = this.add.sprite(1212,50,"music-on");
//         this.musicBtn.setInteractive();
//         this.musicBtn.on('pointerup',this.changemusic,this);

//     this.shutter_group = this.add.container();
//     this.shutter_bg =this.add.image(320,360,'shutter_bg');
//     this.shutter_bg2 =this.add.image(960,360,'shutter_bg2');
//     this.shutter_group.add(this.shutter_bg);
//     this.shutter_group.add(this.shutter_bg2);

//     this.tweens.add({targets:this.shutter_group,y:-720,ease: 'Quadratic',duration:1200,onComplete:() => {

//     }},this);

//         if (!this.sound.mute) {
//         this.musicBtn.setTexture('music-on');
//         } else {
//         this.musicBtn.setTexture('music-off');
//         }
// }
// update() {
//   // console.log(this.input.x + ':' + this.input.y); 

//   if (this.dummy_drag) {
//         this.dummy.x = this.input.activePointer.x ;
//         this.dummy.y = this.input.activePointer.y;
//         } 


//   }
          
// morebtnLink (){
//   YYGGames.navigate("game", "morebutton");
// }
// LogoLink (){
//       YYGGames.navigate("game", "logo");
// }
// enterRoom (){
//     this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     var state = 'finalscreen';
//     MyShowAD(this, state);
//     }},this);
//    }
  
// changemusic() {
//      if (!this.sound.mute) {
//     this.musicBtn.setTexture('music-off');
//     this.sound.mute = true;
//   } else {
//     this.musicBtn.setTexture('music-on');
//     this.sound.mute = false;
//   }
//   }   
// }



// //////////////////////////////////////////
// ////////////l3_cooking_lavel//////////////

// class l3_cooking_lavel extends Phaser.Scene {

// constructor() {
//  super('l3_cooking_lavel');
// }
//  create() {
     
//     this.levelGroup = this.add.container();

//     // this.title_bg = this.add.sprite(320,360, "title_bg");
//     // this.title_bg2 = this.add.sprite(960,360, "title_bg2");

//     // this.levelGroup.add(this.title_bg);
//     // this.levelGroup.add(this.title_bg2);

// //////////////////////////////////////////////////////////////

//     this.cook_bg1 = this.add.sprite(320,360, "cook_bg1");

//     this.cook_bg2 = this.add.sprite(960,360, "cook_bg2");

// ////////////////////cook///////////////////////////////
    
//     this.wall_anger = this.add.sprite(880,50, "wall_anger");

// /////////

//     this.miechn_cup_btm= this.physics.add.sprite(865, 450, 'miechn_cup_btm');

// /////////

//     this.dem1_mix_crm_dft_color = this.add.image(880,385,'mix_crm_dft_color');
//     this.dem1_mix_crm_dft_color.alpha=0;

//     this.dem2_mix_crm_dft_color = this.add.image(880,370,'mix_crm_dft_color');
//     this.dem2_mix_crm_dft_color.alpha=0;

// /////////////////////////miechne///////////////////////////

//     this.miechn_run= this.physics.add.sprite(1010, 340, 'miechn_run');
//     // this.miechn_run.play('miechn_run_key1');
//     // this.miechn_run.setInteractive({useHandCursor:true});
//     this.miechn_run.on('pointerdown',function(){
//     this.miechn_run.disableInteractive();
//     this.arrow7.setVisible(false);

//     this.miechn_run.play('miechn_run_key1');

//     this.tweens.add({targets:this.dem2_mix_crm_dft_color,y:400,ease: 'Quadratic',duration:1200,onComplete:() => { 
//     this.tweens.add({targets:this.dem2_mix_crm_dft_color,y:385,ease: 'Quadratic',duration:1200,onComplete:() => { 
//     this.tweens.add({targets:this.dem2_mix_crm_dft_color,y:400,ease: 'Quadratic',duration:1200,onComplete:() => { }},this);
//     this.tweens.add({targets:this.dem2_mix_crm_dft_color,y:385,ease: 'Quadratic',duration:1200,onComplete:() => { }},this);

//     }},this);
//     }},this);
//     },this);

//     this.miechn_run.on("animationcomplete",function() {

//     this.done1.setVisible(true);
//     this.done1.setInteractive({useHandCursor:true});



//     },this);

//     this.anims.create({key: 'miechn_run_key1',
//     frames: this.anims.generateFrameNames('miechn_run', 
//     { start: 0, end: 11, zeroPad: 1, prefix: 'miechn_run' }),
//     frameRate: 6,});  

// ///////////////////////////////////////////////////////////

//     this.ice_cream_blow= this.physics.add.sprite(210, 400, 'ice_cream_blow');
//     // this.ice_cream_blow.play('ice_cream_blow_key1');
//     this.ice_cream_blow.on("animationcomplete",function() {


//     },this);

//     this.anims.create({key: 'ice_cream_blow_key1',
//     frames: this.anims.generateFrameNames('ice_cream_blow', 
//     { start: 0, end: 1, zeroPad: 1, prefix: 'ice_cream_blow' }),
//     frameRate: 8 });  

// /////

//     this.anims.create({key: 'ice_cream_blow_key2',
//     frames: this.anims.generateFrameNames('ice_cream_blow', 
//     { start: 1, end: 2, zeroPad: 1, prefix: 'ice_cream_blow' }),
//     frameRate: 8 });

// /////////

//     this.rice_blow= this.physics.add.sprite(480, 480, 'rice_blow');
//     // this.rice_blow.play('rice_blow_key1');
//     this.rice_blow.on("animationcomplete",function() {


//     },this);

// /////

//     this.anims.create({key: 'rice_blow_key1',
//     frames: this.anims.generateFrameNames('rice_blow', 
//     { start: 0, end: 1, zeroPad: 1, prefix: 'rice_blow' }),
//     frameRate: 8 });

// /////

//     this.anims.create({key: 'rice_blow_key2',
//     frames: this.anims.generateFrameNames('rice_blow', 
//     { start: 1, end: 2, zeroPad: 1, prefix: 'rice_blow' }),
//     frameRate: 8 });

// /////

//     this.anims.create({key: 'rice_blow_key3',
//     frames: this.anims.generateFrameNames('rice_blow', 
//     { start: 2, end: 3, zeroPad: 1, prefix: 'rice_blow' }),
//     frameRate: 8 });

// /////

//     this.anims.create({key: 'rice_blow_key4',
//     frames: this.anims.generateFrameNames('rice_blow', 
//     { start: 3, end: 4, zeroPad: 1, prefix: 'rice_blow' }),
//     frameRate: 8 });

// //////////////////////////spon///////////////////////////

//     this.wall_spon= this.physics.add.sprite(760, 170, 'wall_spon');
//     this.wall_spon.setInteractive({useHandCursor:true});
//     this.wall_spon.on('pointerdown',function(){
//     this.arrow1.setVisible(false);
//     this.arrow2.setVisible(true);

//     this.wall_spon.setVisible(false);
//     this.dem1_cup_spon1.setVisible(true);
//     this.dem1_cup_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});

//     },this);

//     this.anker_top= this.physics.add.sprite(765, 70, 'anker_top');

// /////////////////////////spon1

//     this.dem1_cup_spon1 = this.add.image(400,400,'cup_spon1');
//     this.dem1_cup_spon1.setVisible(false);
//     // this.dem1_cup_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem1_cup_spon1.on('drag', (pointer, dragX, dragY) => {
//         this.dem1_cup_spon1.x = dragX;
//         this.dem1_cup_spon1.y = dragY;
//         this.dem1_cup_spon1.setTexture('cup_spon2');
//     this.arrow2.setVisible(false);
//     this.arrow3.setVisible(true);

//         this.children.bringToTop(this.dem1_cup_spon1);
//         this.children.bringToTop(this.musicBtn);
//         this.children.bringToTop(this.logo);

//     });
//     this.dem1_cup_spon1.on('dragend', () => {
//     if ((this.input.x>770 && this.input.x<1120 && this.input.y>300 && this.input.y<520)){
//     this.dem1_cup_spon1.setVisible(false);
//     this.dem2_cup_spon1.setVisible(true);
//     this.dem2_cup_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.rice_blow.play('rice_blow_key1');

//     this.arrow2.setVisible(true);
//     this.arrow3.setVisible(false);

//         }

//     else{

//     this.arrow2.setVisible(true);
//     this.arrow3.setVisible(false);

//             this.dem1_cup_spon1.setTexture('cup_spon1');
//             this.dem1_cup_spon1.x=400;
//             this.dem1_cup_spon1.y=400;
//         }

//     },this);

// ////////////

//     this.dem2_cup_spon1 = this.add.image(400,400,'cup_spon1');
//     this.dem2_cup_spon1.setVisible(false);
//     // this.dem2_cup_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem2_cup_spon1.on('drag', (pointer, dragX, dragY) => {
//         this.dem2_cup_spon1.x = dragX;
//         this.dem2_cup_spon1.y = dragY;
//         this.dem2_cup_spon1.setTexture('cup_spon2');

//         this.children.bringToTop(this.dem2_cup_spon1);
//         this.children.bringToTop(this.musicBtn);
//         this.children.bringToTop(this.logo);

//     this.arrow2.setVisible(false);
//     this.arrow3.setVisible(true);

//     });

//     this.dem2_cup_spon1.on('dragend', () => {
//     if ((this.input.x>770 && this.input.x<1120 && this.input.y>300 && this.input.y<520)){
//     this.dem2_cup_spon1.setVisible(false);
//     this.dem3_cup_spon1.setVisible(true);
//     this.dem3_cup_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.rice_blow.play('rice_blow_key2');

//     this.arrow2.setVisible(true);
//     this.arrow3.setVisible(false);

//         }


//     else{

//            this.arrow2.setVisible(true);
//            this.arrow3.setVisible(false);

//             this.dem2_cup_spon1.setTexture('cup_spon1');
//             this.dem2_cup_spon1.x=400;
//             this.dem2_cup_spon1.y=400;
//         }

//     },this);

// ////////////

//     this.dem3_cup_spon1 = this.add.image(400,400,'cup_spon1');
//     this.dem3_cup_spon1.setVisible(false);
//     // this.dem3_cup_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem3_cup_spon1.on('drag', (pointer, dragX, dragY) => {
//         this.dem3_cup_spon1.x = dragX;
//         this.dem3_cup_spon1.y = dragY;
//         this.dem3_cup_spon1.setTexture('cup_spon2');

//         this.children.bringToTop(this.dem3_cup_spon1);
//         this.children.bringToTop(this.musicBtn);
//         this.children.bringToTop(this.logo);

//            this.arrow2.setVisible(false);
//            this.arrow3.setVisible(true);

//     });
//     this.dem3_cup_spon1.on('dragend', () => {
//     if ((this.input.x>770 && this.input.x<1120 && this.input.y>300 && this.input.y<520)){
//     this.dem3_cup_spon1.setVisible(false);
//     this.rice_blow.play('rice_blow_key3');
//     this.dem4_cup_spon1.setVisible(true);
//     this.dem4_cup_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});

//            this.arrow2.setVisible(true);
//            this.arrow3.setVisible(false);

//         }

//     else{

//            this.arrow2.setVisible(true);
//            this.arrow3.setVisible(false);

//             this.dem3_cup_spon1.setTexture('cup_spon1');
//             this.dem3_cup_spon1.x=400;
//             this.dem3_cup_spon1.y=400;
//         }

//     },this);

// ////////////

//     this.dem4_cup_spon1 = this.add.image(400,400,'cup_spon1');
//     this.dem4_cup_spon1.setVisible(false);
//     // this.dem4_cup_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem4_cup_spon1.on('drag', (pointer, dragX, dragY) => {
//         this.dem4_cup_spon1.x = dragX;
//         this.dem4_cup_spon1.y = dragY;
//         this.dem4_cup_spon1.setTexture('cup_spon2');

//         this.children.bringToTop(this.dem4_cup_spon1);
//         this.children.bringToTop(this.musicBtn);
//         this.children.bringToTop(this.logo);

//            this.arrow2.setVisible(false);
//            this.arrow3.setVisible(false);

//     });
//     this.dem4_cup_spon1.on('dragend', () => {
//     if ((this.input.x>770 && this.input.x<1120 && this.input.y>300 && this.input.y<520)){
//     this.dem4_cup_spon1.setVisible(false);
//     this.rice_blow.play('rice_blow_key4');

//     this.time.delayedCall(1000,() => {
//     this.tweens.add({targets:this.rice_blow,x:-1000,ease: 'Quadratic',duration:1200,onComplete:() => {
//     this.dem01_crem_spon1.setVisible(true);
//     this.dem01_crem_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});

//            this.arrow2.setVisible(false);
//            this.arrow3.setVisible(false);
//            this.arrow4.setVisible(true);


//     }},this);    

//     },this);

//         }

//     else{

//            this.arrow2.setVisible(true);
//            this.arrow3.setVisible(false);

//             this.dem4_cup_spon1.setTexture('cup_spon1');
//             this.dem4_cup_spon1.x=400;
//             this.dem4_cup_spon1.y=400;
//         }

//     },this);

// /////////////////////////spon2

//     this.dem01_crem_spon1 = this.add.image(150,300,'crem_spon1');
//     this.dem01_crem_spon1.setVisible(false);
//     // this.dem01_crem_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem01_crem_spon1.on('drag', (pointer, dragX, dragY) => {
//         this.dem01_crem_spon1.x = dragX;
//         this.dem01_crem_spon1.y = dragY;
//         this.dem01_crem_spon1.setTexture('crem_spon2');

//         this.children.bringToTop(this.dem01_crem_spon1);
//         this.children.bringToTop(this.musicBtn);
//         this.children.bringToTop(this.logo);

//         this.arrow4.setVisible(false);
//         this.arrow3.setVisible(true);


//     });
//     this.dem01_crem_spon1.on('dragend', () => {
//     if ((this.input.x>770 && this.input.x<1120 && this.input.y>300 && this.input.y<520)){
//     this.dem01_crem_spon1.setVisible(false);
//     this.ice_cream_blow.play('ice_cream_blow_key1');
//     this.dem1_mix_crm_dft_color.alpha=1;
//     this.dem02_crem_spon1.setVisible(true);
//     this.dem02_crem_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});

//         this.arrow4.setVisible(true);
//         this.arrow3.setVisible(false);


//         }

//     else{

//         this.arrow4.setVisible(true);
//         this.arrow3.setVisible(false);


//             this.dem01_crem_spon1.setTexture('crem_spon1');
//             this.dem01_crem_spon1.x=150;
//             this.dem01_crem_spon1.y=300;
//         }

//     },this);

// ////////////

//     this.dem02_crem_spon1 = this.add.image(150,300,'crem_spon1');
//     this.dem02_crem_spon1.setVisible(false);
//     // this.dem02_crem_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem02_crem_spon1.on('drag', (pointer, dragX, dragY) => {
//         this.dem02_crem_spon1.x = dragX;
//         this.dem02_crem_spon1.y = dragY;
//         this.dem02_crem_spon1.setTexture('crem_spon2');

//         this.children.bringToTop(this.dem02_crem_spon1);
//         this.children.bringToTop(this.musicBtn);
//         this.children.bringToTop(this.logo);

//         this.arrow4.setVisible(false);
//         this.arrow3.setVisible(true);

//     });
//     this.dem02_crem_spon1.on('dragend', () => {
//     if ((this.input.x>770 && this.input.x<1120 && this.input.y>300 && this.input.y<520)){
//     this.dem02_crem_spon1.setVisible(false);
//     this.ice_cream_blow.play('ice_cream_blow_key2');
//     this.dem2_mix_crm_dft_color.alpha=1;

//     this.arrow4.setVisible(false);
//     this.arrow3.setVisible(false);

//     this.time.delayedCall(1000,() => {
//     this.tweens.add({targets:this.ice_cream_blow,x:-1000,ease: 'Quadratic',duration:1200,onComplete:() => {
//     this.tweens.add({targets:this.sugar,x:350,ease: 'Quadratic',duration:1200,onComplete:() => {   }},this);
//     this.tweens.add({targets:this.dem_red_drip,x:303,ease: 'Quadratic',duration:1200,onComplete:() => {   }},this);
//     this.tweens.add({targets:this.dem_yellow_drip,x:387,ease: 'Quadratic',duration:1200,onComplete:() => {   }},this);
//     this.tweens.add({targets:this.dem_blue_drip,x:328,ease: 'Quadratic',duration:1200,onComplete:() => { 

//     this.wall_spon01.setVisible(true);
//     this.sugar.setInteractive({useHandCursor:true});
//     this.arrow5.setVisible(true);


//     }},this);

//     }},this);    

//     },this);


//         }

//     else{

//     this.arrow4.setVisible(true);
//     this.arrow3.setVisible(false);

//             this.dem02_crem_spon1.setTexture('crem_spon1');
//             this.dem02_crem_spon1.x=150;
//             this.dem02_crem_spon1.y=300;
//         }

//     },this);


//     // this.dem1_mix_crm_dft_color = this.add.image(880,385,'mix_crm_dft_color');
//     // this.dem1_mix_crm_dft_color.alpha=0;

//     // this.dem2_mix_crm_dft_color = this.add.image(880,370,'mix_crm_dft_color');
//     // this.dem2_mix_crm_dft_color.alpha=0;

// //////////////////////sugar///////////////////////////dddddddddd

//     this.sugar= this.physics.add.sprite(-1000, 400, 'sugar');

//     // this.sugar= this.physics.add.sprite(350, 400, 'sugar');
//     // this.sugar.play('sugar_key1');
//     // this.sugar.setInteractive({useHandCursor:true});
//     this.sugar.on('pointerdown',function(){
//     this.sugar.disableInteractive();
//     this.sugar.play('sugar_key1');
//     this.arrow5.setVisible(false);

//     this.time_liner3.setVisible(true);
//     this.time_liner3.play('time_liner3_key');


//     },this);

//     this.sugar.on("animationcomplete",function() {
//     this.sugar_top.alpha=1;
//     this.time_liner3.setVisible(false);

//     this.wall_spon01.setInteractive({useHandCursor:true});
//     this.arrow1.setVisible(true);

//     },this);
//     this.anims.create({key: 'sugar_key1',
//     frames: this.anims.generateFrameNames('sugar', 
//     { start: 0, end: 6, zeroPad: 1, prefix: 'sugar' }),
//     frameRate: 5 }); 

//     this.sugar_top= this.physics.add.sprite(510, 550, 'sugar_top');
//     this.sugar_top.alpha=0;

// //////////////////////////spon///////////////////////////

//     this.wall_spon01= this.physics.add.sprite(760, 170, 'wall_spon');
//     this.wall_spon01.setVisible(false);
//     // this.wall_spon01.setInteractive({useHandCursor:true});
//     this.wall_spon01.on('pointerdown',function(){
//     this.wall_spon01.setVisible(false);
//     this.dem1_sugar_spon1.setVisible(true);
//     this.dem1_sugar_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});

//     this.arrow1.setVisible(false);
//     this.arrow5.setVisible(true);



//     },this);

// /////////////////////////////sugar_spon1

//     this.dem1_sugar_spon1 = this.add.image(230,220,'sugar_spon1');
//     this.dem1_sugar_spon1.setVisible(false);
//     // this.dem1_sugar_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem1_sugar_spon1.on('drag', (pointer, dragX, dragY) => {
//         this.dem1_sugar_spon1.x = dragX;
//         this.dem1_sugar_spon1.y = dragY;
//         this.dem1_sugar_spon1.setTexture('sugar_spon2');

//     this.arrow5.setVisible(false);
//     this.arrow3.setVisible(true);

//         this.children.bringToTop(this.dem1_sugar_spon1);
//         this.children.bringToTop(this.musicBtn);
//         this.children.bringToTop(this.logo);

//     });
//     this.dem1_sugar_spon1.on('dragend', () => {
//     if ((this.input.x>770 && this.input.x<1120 && this.input.y>300 && this.input.y<520)){
//     this.dem1_sugar_spon1.setVisible(false);

//     this.arrow5.setVisible(false);
//     this.arrow3.setVisible(false);

//     this.tweens.add({targets:this.clr_btn_grp,x:0,ease: 'Quadratic',duration:1200,onComplete:() => {

//     }},this);


//     }

//     else{

//     this.arrow5.setVisible(true);
//     this.arrow3.setVisible(false);

//             this.dem1_sugar_spon1.setTexture('sugar_spon1');
//             this.dem1_sugar_spon1.x=230;
//             this.dem1_sugar_spon1.y=220;
//         }

//     },this);

// ///////////////////////////////////////////////

//     this.red_drip= this.physics.add.sprite(800,400, 'red_drip');
//     this.red_drip.setVisible(false);
//     // this.red_drip.setFrame('red_drip1');

//     // this.red_drip.play('red_drip_key1');
//     this.red_drip.on("animationcomplete",function() {
//     this.red_drip.setVisible(false);
//     this.miechn_run.setInteractive({useHandCursor:true});
//     this.arrow7.setVisible(true);
//     this.arrow7.flipX=true;


//     },this);
//     this.anims.create({key: 'red_drip_key1',
//     frames: this.anims.generateFrameNames('red_drip', 
//     { start: 1, end: 4, zeroPad: 1, prefix: 'red_drip' }),
//     frameRate: 3 });

// /////////////
    
//     this.yellow_drip= this.physics.add.sprite(800,400, 'yellow_drip');
//     this.yellow_drip.setVisible(false);
//     // this.yellow_drip.setFrame('yellow_drip1');

//     // this.yellow_drip.play('yellow_drip_key1');
//     this.yellow_drip.on("animationcomplete",function() {
//     this.yellow_drip.setVisible(false);
//     this.miechn_run.setInteractive({useHandCursor:true});
//     this.arrow7.flipX=true;
//     this.arrow7.setVisible(true);


//     },this);
//     this.anims.create({key: 'yellow_drip_key1',
//     frames: this.anims.generateFrameNames('yellow_drip', 
//     { start: 1, end: 4, zeroPad: 1, prefix: 'yellow_drip' }),
//     frameRate: 3 });

// /////////////

//     this.blue_drip= this.physics.add.sprite(800,400, 'blue_drip');
//     this.blue_drip.setVisible(false);
//     // this.blue_drip.play('blue_drip_key1');
//     this.blue_drip.on("animationcomplete",function() {
//     this.blue_drip.setVisible(false);
//     this.miechn_run.setInteractive({useHandCursor:true});
//     this.arrow7.setVisible(true);
//     this.arrow7.flipX=true;


//     },this);
//     this.anims.create({key: 'blue_drip_key1',
//     frames: this.anims.generateFrameNames('blue_drip', 
//     { start: 1, end: 4, zeroPad: 1, prefix: 'blue_drip' }),
//     frameRate: 3 });

// //////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////
// /////////////01


//     this.dem_red_drip = this.add.image(-1000,436,'red_drip');
//     // this.dem_red_drip.setVisible(false);
//     // this.dem_red_drip.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem_red_drip.on('drag', (pointer, dragX, dragY) => {
//         this.dem_red_drip.x = dragX;
//         this.dem_red_drip.y = dragY;

//     this.arrow6.setVisible(false);
//     this.arrow3.setVisible(true);


//         this.children.bringToTop(this.dem_red_drip);
//         this.children.bringToTop(this.musicBtn);
//         this.children.bringToTop(this.logo);

//     });
//     this.dem_red_drip.on('dragend', () => {
//     if ((this.input.x>770 && this.input.x<1120 && this.input.y>300 && this.input.y<520)){
//     this.dem_red_drip.setVisible(false);
//     this.red_drip.setVisible(true);
//     this.red_drip.play('red_drip_key1');

//     this.time_liner3.setVisible(true);
//     this.time_liner3.play('time_liner3_key');


//     this.arrow6.setVisible(false);
//     this.arrow3.setVisible(false);



//     }

//     else{

//     this.arrow6.setVisible(true);
//     this.arrow3.setVisible(false);

//             this.dem_red_drip.x=303;
//             this.dem_red_drip.y=436;

//         this.children.bringToTop(this.dem_red_drip);
//         this.children.bringToTop(this.dem_yellow_drip);
//         this.children.bringToTop(this.dem_blue_drip);

//         }

//     },this);

// /////////////02

//     this.dem_yellow_drip = this.add.image(-1000,436,'yellow_drip');
//     // this.dem_yellow_drip.setVisible(false);
//     // this.dem_yellow_drip.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem_yellow_drip.on('drag', (pointer, dragX, dragY) => {
//         this.dem_yellow_drip.x = dragX;
//         this.dem_yellow_drip.y = dragY;

//         this.children.bringToTop(this.dem_yellow_drip);
//         this.children.bringToTop(this.musicBtn);
//         this.children.bringToTop(this.logo);

//     this.arrow6.setVisible(false);
//     this.arrow3.setVisible(true);

//     });
//     this.dem_yellow_drip.on('dragend', () => {
//     if ((this.input.x>770 && this.input.x<1120 && this.input.y>300 && this.input.y<520)){
//     this.dem_yellow_drip.setVisible(false);
//     this.yellow_drip.setVisible(true);
//     this.yellow_drip.play('yellow_drip_key1');

//     this.arrow6.setVisible(false);
//     this.arrow3.setVisible(false);

//  this.time_liner3.setVisible(true);
//     this.time_liner3.play('time_liner3_key');

//     }

//     else{

//         this.children.bringToTop(this.dem_red_drip);
//         this.children.bringToTop(this.dem_yellow_drip);
//         this.children.bringToTop(this.dem_blue_drip);


//     this.arrow6.setVisible(true);
//     this.arrow3.setVisible(false);

//             this.dem_yellow_drip.x=387;
//             this.dem_yellow_drip.y=436;
//         }

//     },this);

// /////////////03


//         // this.dummy_drag=true;
//         // this.dummy =this.add.sprite(226,403,'blue_drip');


//     this.dem_blue_drip = this.add.image(-1000,467,'blue_drip');
//     // this.dem_blue_drip.setVisible(false);
//     // this.dem_blue_drip.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem_blue_drip.on('drag', (pointer, dragX, dragY) => {
//         this.dem_blue_drip.x = dragX;
//         this.dem_blue_drip.y = dragY;

//         this.children.bringToTop(this.dem_blue_drip);
//         this.children.bringToTop(this.musicBtn);
//         this.children.bringToTop(this.logo);

//     this.arrow6.setVisible(false);
//     this.arrow3.setVisible(true);

//     });
//     this.dem_blue_drip.on('dragend', () => {
//     if ((this.input.x>770 && this.input.x<1120 && this.input.y>300 && this.input.y<520)){
//     this.dem_blue_drip.setVisible(false);
//     this.blue_drip.setVisible(true);
//     this.blue_drip.play('blue_drip_key1');

//     this.arrow6.setVisible(false);
//     this.arrow3.setVisible(false);

//     this.time_liner3.setVisible(true);
//     this.time_liner3.play('time_liner3_key');


//     }

//     else{

//         this.children.bringToTop(this.dem_red_drip);
//         this.children.bringToTop(this.dem_yellow_drip);
//         this.children.bringToTop(this.dem_blue_drip);


//     this.arrow6.setVisible(true);
//     this.arrow3.setVisible(false);

//             this.dem_blue_drip.x=328;
//             this.dem_blue_drip.y=467;
//         }

//     },this);

// //////////////////////////////////////////////
// //////////////////color///////////////////////

//     this.clr_btn_grp = this.add.container();
//     this.clr_btn_grp.x=-1000;

//     this.clr_pnl = this.add.image(180,350,'clr_pnl');

// ////////01

//     this.clr_1btn = this.add.image(180,210+30,'clr_1btn');
//     this.clr_1btn.setInteractive({useHandCursor:true});
//     this.clr_1btn.on('pointerdown',function(){

//     this.tweens.add({targets:this.clr_btn_grp,x:-1000,ease: 'Quadratic',duration:1200,onComplete:() => {
//     this.dem_yellow_drip.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem_blue_drip.disableInteractive();
//     this.dem_red_drip.disableInteractive();

//     this.arrow6.setVisible(true);

//     }},this);


//     },this);

// ////////02

//     this.clr_2btn = this.add.image(180,310+50,'clr_2btn');
//     this.clr_2btn.setInteractive({useHandCursor:true});
//     this.clr_2btn.on('pointerdown',function(){

//     this.tweens.add({targets:this.clr_btn_grp,x:-1000,ease: 'Quadratic',duration:1200,onComplete:() => {
//     this.dem_blue_drip.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem_yellow_drip.disableInteractive()
//     this.dem_red_drip.disableInteractive()

//     this.arrow6.setVisible(true);

//     }},this);


//     },this);

// ////////03

//     this.clr_3btn = this.add.image(180,400+80,'clr_3btn');
//     this.clr_3btn.setInteractive({useHandCursor:true});
//     this.clr_3btn.on('pointerdown',function(){

//     this.tweens.add({targets:this.clr_btn_grp,x:-1000,ease: 'Quadratic',duration:1200,onComplete:() => {
//     this.dem_red_drip.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem_yellow_drip.disableInteractive()
//     this.dem_blue_drip.disableInteractive()

//     this.arrow6.setVisible(true); 

//     }},this);


//     },this);

// /////////

//     this.clr_btn_grp.add(this.clr_pnl);
//     this.clr_btn_grp.add(this.clr_1btn);
//     this.clr_btn_grp.add(this.clr_2btn);
//     this.clr_btn_grp.add(this.clr_3btn);

// /////////

//     this.miechn_cup_top= this.physics.add.sprite(865, 450, 'miechn_cup_top');

// //////////////////////////////////////////////
// /////////////////nxt/////////////////////////

//     this.done1 = this.add.image(1150,660,'btn5');
//     this.done1.setVisible(false);
//     // this.done1.setInteractive({useHandCursor:true});
//     this.done1.on('pointerdown',function(){

//     this.sugar_top.alpha=0;
//     this.done1.setVisible(false);
//     this.miechn_run.setVisible(false);
//     this.miechn_cup_btm.setVisible(false);
//     this.miechn_cup_top.setVisible(false);
//     this.dem1_mix_crm_dft_color.setVisible(false);
//     this.dem2_mix_crm_dft_color.setVisible(false);
//     this.ice_cream_blow.setVisible(false);
//     this.sugar.setVisible(false);
//     this.dem_red_drip.setVisible(false);
//     this.dem_yellow_drip.setVisible(false);
//     this.dem_blue_drip.setVisible(false);

//     this.red_jam.setVisible(true);
//     this.Ovan01.setVisible(true);

//     this.arrow8.setVisible(true);

// this.off_btn.x=1129; 
// this.off_btn.y=328; 

//     },this);

// ////////////////////////////////////////////////////////////
// /////////////////////////oven///////////////////////////////

//     this.red_jam= this.physics.add.sprite(180, 470, 'red_jam');
//     this.red_jam.setVisible(false);
//     this.red_jam.setInteractive({useHandCursor:true});
//     this.red_jam.on('pointerdown',function(){
//     this.red_jam.disableInteractive();
//     this.red_jam.play('red_jam_key');
//     this.arrow8.setVisible(false);

//     },this);

// ///////////

//     // this.red_jam.play('red_jam_key');
//     this.red_jam.on("animationcomplete",function() {
//     this.red_jam.setVisible(false);
//     this.dem_red_jam.setVisible(true);
//     this.click_rect1.setInteractive({useHandCursor:true});
//     this.arrow9.setVisible(true);

//     },this);
//     this.anims.create({key: 'red_jam_key',
//     frames: this.anims.generateFrameNames('red_jam', 
//     { start: 0, end: 5, zeroPad: 1, prefix: 'red_jam' }),
//     frameRate: 8, });

// ///////////

//     this.dem_red_jam = this.add.image(230,470,'oven_jam');
//     this.dem_red_jam.setVisible(false);
//     // this.dem_red_jam.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem_red_jam.on('drag', (pointer, dragX, dragY) => {
//         this.dem_red_jam.x = dragX;
//         this.dem_red_jam.y = dragY;

//     this.arrow8.setVisible(false);
//     this.arrow9.setVisible(true);

//         this.children.bringToTop(this.dem_red_jam);
//         this.children.bringToTop(this.musicBtn);
//         this.children.bringToTop(this.logo);

//     });
//     this.dem_red_jam.on('dragend', () => {
//     if ((this.input.x>550 && this.input.x<1060 && this.input.y>230 && this.input.y<560)){
//     this.dem_red_jam.setVisible(false);
//     this.oven_jam.alpha=1;
//     this.click_rect2.setInteractive({useHandCursor:true});

//     this.arrow8.setVisible(false);
//     this.arrow9.setVisible(true);

//     }

//     else{

//     this.arrow8.setVisible(true);
//     this.arrow9.setVisible(false);

//             this.dem_red_jam.x=230;
//             this.dem_red_jam.y=470;
//         }

//     },this);

// /////////////////////////oven//////////////////////////

//     this.Ovan01 = this.add.image(850,450,'Ovan1');
//     this.Ovan01.setVisible(false);

//     this.click_rect1 = this.add.rectangle(800, 430, 500, 250, 0xff0000,0).setOrigin(0.5);
//     // this.click_rect1.setInteractive({useHandCursor:true});
//     this.click_rect1.on('pointerdown',function(){
//     this.click_rect1.disableInteractive();
//     this.dem_red_jam.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.arrow9.setVisible(false);
//     this.arrow8.setVisible(true);

//     this.Ovan02.alpha=1;
//     this.Ovan01.setTexture('Ovan2');

//     },this);

// //////////

//     this.Ovan02 = this.add.image(850,450,'Ovan2');
//     this.Ovan02.alpha=0;

//     this.click_rect2 = this.add.rectangle(800, 430, 500, 250, 0xff0000,0).setOrigin(0.5);
//     // this.click_rect2.setInteractive({useHandCursor:true});
//     this.click_rect2.on('pointerdown',function(){
//     this.click_rect2.disableInteractive();
//     this.Ovan01.alpha=0;
//     this.Ovan02.setTexture('Ovan1');
//     this.click_rect3.setInteractive({useHandCursor:true});
//     this.arrow9.setVisible(false);
//     this.arrow10.setVisible(true);

//     },this);

// /////////////////////////on/off//////////////////////////

//     this.off_btn = this.add.image(1090,430,'off_btn');

//     this.click_rect3 = this.add.rectangle(1135, 325, 80, 80, 0xff0000,0).setOrigin(0.5);
//     // this.click_rect3.setInteractive({useHandCursor:true});
//     this.click_rect3.on('pointerdown',function(){
//     this.click_rect3.disableInteractive();
//     this.arrow10.setVisible(false);

//     this.on_btn.alpha=1;
//     this.off_btn.alpha=0    

//     this.time.delayedCall(3000,() => {
//     this.arrow10.setVisible(true);
//     this.click_rect4.setInteractive({useHandCursor:true});
//     },this);

//     },this);

// ///////////

//     this.on_btn = this.add.image(1125,326,'on_btn');
//     this.on_btn.alpha=0;
//     this.click_rect4 = this.add.rectangle(1125, 330, 80, 80, 0xff0000,0).setOrigin(0.5);
//     // this.click_rect4.setInteractive({useHandCursor:true});
//     this.click_rect4.on('pointerdown',function(){
//     this.click_rect4.disableInteractive();
//     this.Ovan02.setTexture('Ovan2');
//     this.oven_jam.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.arrow10.setVisible(false);
//     this.arrow9.setVisible(true);

//     this.on_btn.alpha=0;
//     this.off_btn.alpha=1;

//     },this);

// ///////////

//     this.oven_jam = this.add.image(820,450,'oven_jam');
//     this.oven_jam.alpha=0;
//     // this.oven_jam.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.oven_jam.on('drag', (pointer, dragX, dragY) => {
//         this.oven_jam.x = dragX;
//         this.oven_jam.y = dragY;
//     this.arrow9.setVisible(false);
//     this.arrow8.setVisible(true);

//         this.children.bringToTop(this.oven_jam);
//         this.children.bringToTop(this.musicBtn);
//         this.children.bringToTop(this.logo);

//     });
//     this.oven_jam.on('dragend', () => {
//     if ((this.input.x>30 && this.input.x<400 && this.input.y>230 && this.input.y<560)){
//     this.oven_jam.setVisible(false);
//     this.red_jam.setVisible(true);
//     this.done2.setVisible(true);
//     this.done2.setInteractive({useHandCursor:true});
//     this.arrow9.setVisible(false);
//     this.arrow8.setVisible(false);


//     }

//     else{

//     this.children.bringToTop(this.arrow9);
//     this.arrow9.setVisible(true);
//     this.arrow8.setVisible(false);

//             this.oven_jam.x=820;
//             this.oven_jam.y=450;
//         }

//     },this);


//     // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//     this.time_liner3 = this.add.sprite(-650,630, "time_liner");
//     this.time_liner3.setVisible(false);

//         this.time_liner3Frame1 = this.anims.generateFrameNames('time_liner', {start: 0,end: 14,zeroPad: 1,
//         prefix: 'time_liner'});
//         this.anims.create({key: 'time_liner3_key',frames: this.time_liner3Frame1,frameRate:11,}); 
//         this.time_liner3.on("animationcomplete",function() {
//         this.time_liner3.setVisible(false);

//        },this);


// /////////////////nxt/////////////////////////

//     this.done2 = this.add.image(1150,660,'btn5');
//     this.done2.setVisible(false);
//     // this.done2.setInteractive({useHandCursor:true});
//     this.done2.on('pointerdown',function(){

//     this.scene.start('l3_food_box1');

//     },this);

// ////////////////////arrow///////////////////////

//     var arrow_Posx = [910,480,880,220,300,250,850,230,800,1130,];
//     var arrow_Posy = [150,300,280,210,130,330,160,330,430,220,];
             
//     for (var i = 1; i <= 50; i++) {
//         this['arrow' + i] = this.add.sprite(arrow_Posx[i - 1], arrow_Posy[i - 1], 'arrow');
//         this['arrow' + i].setOrigin(0.5);
//         this['arrow' + i].anims.create({key: 'arrow',
//             frames: this.anims.generateFrameNumbers('arrow', { start: 0, end: 8 }),
//             frameRate: 20,
//             repeat: -1
//     });

//     this['arrow' + i].anims.play('arrow');
//     this['arrow' + i].setVisible(false);

//     if (i === 1 ) {
//         this['arrow' + i].setVisible(false);
//         this['arrow' + i].rotation=1.58;
//         }

//     if (i === 7 ) {
//         this['arrow' + i].setVisible(false);
//         this['arrow' + i].rotation=-1.58;
//         }

//     // if (i === 6 ) {
//     //     this['arrow' + i].setVisible(false);
//     //     this['arrow' + i].rotation=-1.58;
//     //     }            
            
//     }

// //////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////

//        this.playbtn=this.add.image(1190,640,'btn2').setOrigin(0.5, 0.5).setScale(0);
//         this.playbtn.setInteractive({ useHandCursor: true });
//         this.playbtn.on('pointerover',function(){this.playbtn.setScale(1.05)},this);
//         this.playbtn.on('pointerout',function(){this.playbtn.setScale(1)},this);
//         this.playbtn.on('pointerdown',this.enterRoom,this);

//         this.morebtn=this.add.image(60,660,'btn4').setOrigin(0.5, 0.5).setScale(0);
//         this.morebtn.setInteractive({ useHandCursor: true });
//         this.morebtn.on('pointerover',function(){this.morebtn.setScale(1.05)},this);
//         this.morebtn.on('pointerout',function(){this.morebtn.setScale(1)},this);
//         this.morebtn.on('pointerup',this.morebtnLink,this);

//          this.logo =this.add.image(165,55,'logo').setScale(0.65);
//         this.logo.setInteractive({pixelPerfect:true});
//         this.logo.on('pointerup',this.LogoLink,this);

//          this.musicBtn = this.add.sprite(1212,50,"music-on");
//         this.musicBtn.setInteractive();
//         this.musicBtn.on('pointerup',this.changemusic,this);

//     this.shutter_group = this.add.container();
//     this.shutter_bg =this.add.image(320,360,'shutter_bg');
//     this.shutter_bg2 =this.add.image(960,360,'shutter_bg2');
//     this.shutter_group.add(this.shutter_bg);
//     this.shutter_group.add(this.shutter_bg2);


//     this.tweens.add({targets:this.shutter_group,y:-720,ease: 'Quadratic',duration:1200,onComplete:() => {
//     this.arrow1.setVisible(true);

//     }},this);


//         if (!this.sound.mute) {
//         this.musicBtn.setTexture('music-on');
//         } else {
//         this.musicBtn.setTexture('music-off');
//         }
// }
// update() {
//   // console.log(this.input.x + ':' + this.input.y); 

//   if (this.dummy_drag) {
//         this.dummy.x = this.input.activePointer.x ;
//         this.dummy.y = this.input.activePointer.y;
//         } 



//   }
          
// morebtnLink (){
//   YYGGames.navigate("game", "morebutton");
// }
// LogoLink (){
//       YYGGames.navigate("game", "logo");
// }
// enterRoom (){

//     this.anims.remove('miechn_run_key1');
//     this.anims.remove('rice_blow_key1');
//     this.anims.remove('rice_blow_key2');
//     this.anims.remove('rice_blow_key3');
//     this.anims.remove('rice_blow_key4');
//     this.anims.remove('ice_cream_blow_key1');
//     this.anims.remove('ice_cream_blow_key2');
//     this.anims.remove('sugar_key1');
//     this.anims.remove('red_drip_key1');
//     this.anims.remove('yellow_drip_key1');
//     this.anims.remove('blue_drip_key1');
//     this.anims.remove('red_jam_key');

//     this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     var state = 'l3_food_box1';
//     MyShowAD(this, state);
//     }},this);
//    }
  
// changemusic() {
//      if (!this.sound.mute) {
//     this.musicBtn.setTexture('music-off');
//     this.sound.mute = true;
//   } else {
//     this.musicBtn.setTexture('music-on');
//     this.sound.mute = false;
//   }
//   }   
// }


//////////////////////////////////////////
//////////////////////////////////////////

// class l3_food_box1 extends Phaser.Scene {

// constructor() {
//  super('l3_food_box1');
// }
//  create() {
     
//     this.levelGroup = this.add.container();

//     // this.title_bg = this.add.sprite(320,360, "title_bg");
//     // this.title_bg2 = this.add.sprite(960,360, "title_bg2");

//     // this.levelGroup.add(this.title_bg);
//     // this.levelGroup.add(this.title_bg2);

// /////////////////////////////////////////////////////

//     this.cook_bg1 = this.add.sprite(320,360, "cook_bg1");

//     this.cook_bg2 = this.add.sprite(960,360, "cook_bg2");

// /////////////////////////////////////////////////////

//     this.wall_anger = this.add.sprite(880,50, "wall_anger");

//     this.wall_spon= this.physics.add.sprite(760, 170, 'wall_spon');
//     // this.wall_spon.setInteractive({useHandCursor:true});
//     this.wall_spon.on('pointerdown',function(){
//     this.wall_spon.setVisible(false);
//     this.arrow5.setVisible(false);
//     this.arrow4.setVisible(true);

//     this.dem1_final_spon1.setVisible(true);
//     this.dem1_final_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});

//     },this);

//     this.anker_top= this.physics.add.sprite(765, 70, 'anker_top');

// ///////////////////cup///////////////////////

//     this.final_cup_btm= this.physics.add.sprite(1060, 350, 'final_cup_btm');
//     this.final_dft_color= this.physics.add.sprite(1080, 270, 'final_dft_color');
//     this.final_cup_top= this.physics.add.sprite(1060, 350, 'final_cup_top');

// //////////////////spon1/////////////////////
// ////////1

//     this.dem1_final_spon1 = this.add.image(1000,200,'final_spon1');
//     this.dem1_final_spon1.setVisible(false);
//     // this.dem1_final_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem1_final_spon1.on('drag', (pointer, dragX, dragY) => {
//         this.dem1_final_spon1.x = dragX;
//         this.dem1_final_spon1.y = dragY;
//         this.dem1_final_spon1.setTexture('final_spon2');
//     this.arrow4.setVisible(false);
//     this.arrow2.setVisible(true);

//         this.children.bringToTop(this.dem1_final_spon1);
//         this.children.bringToTop(this.musicBtn);
//         this.children.bringToTop(this.logo);

//     });
//     this.dem1_final_spon1.on('dragend', () => {
//     if ((this.input.x>450 && this.input.x<810 && this.input.y>360 && this.input.y<500)){
//     this.dem1_final_spon1.setVisible(false);
//     this.final_cream1.alpha=1;
//     this.dem2_final_spon1.setVisible(true);
//     this.dem2_final_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});

//     this.arrow4.setVisible(true);
//     this.arrow2.setVisible(false);

//     }

//     else{

//     this.arrow4.setVisible(true);
//     this.arrow2.setVisible(false);

//             this.dem1_final_spon1.setTexture('final_spon1');
//             this.dem1_final_spon1.x=1000;
//             this.dem1_final_spon1.y=200;
//         }

//     },this);

// ////////2

//     this.dem2_final_spon1 = this.add.image(1000,200,'final_spon1');
//     this.dem2_final_spon1.setVisible(false);
//     // this.dem2_final_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem2_final_spon1.on('drag', (pointer, dragX, dragY) => {
//         this.dem2_final_spon1.x = dragX;
//         this.dem2_final_spon1.y = dragY;
//         this.dem2_final_spon1.setTexture('final_spon2');
//     this.arrow4.setVisible(false);
//     this.arrow2.setVisible(true);

//         this.children.bringToTop(this.dem2_final_spon1);
//         this.children.bringToTop(this.musicBtn);
//         this.children.bringToTop(this.logo);

//     });
//     this.dem2_final_spon1.on('dragend', () => {
//     if ((this.input.x>450 && this.input.x<810 && this.input.y>360 && this.input.y<500)){
//     this.dem2_final_spon1.setVisible(false);
//     this.final_cream3.alpha=1;
//     this.dem3_final_spon1.setVisible(true);
//     this.dem3_final_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.arrow4.setVisible(true);
//     this.arrow2.setVisible(false);


//     }

//     else{

//     this.arrow4.setVisible(true);
//     this.arrow2.setVisible(false);

//             this.dem2_final_spon1.setTexture('final_spon1');
//             this.dem2_final_spon1.x=1000;
//             this.dem2_final_spon1.y=200;
//         }

//     },this);

// ////////3

//     this.dem3_final_spon1 = this.add.image(1000,200,'final_spon1');
//     this.dem3_final_spon1.setVisible(false);
//     // this.dem3_final_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem3_final_spon1.on('drag', (pointer, dragX, dragY) => {
//         this.dem3_final_spon1.x = dragX;
//         this.dem3_final_spon1.y = dragY;
//         this.dem3_final_spon1.setTexture('final_spon2');
//     this.arrow4.setVisible(false);
//     this.arrow2.setVisible(true);

//         this.children.bringToTop(this.dem3_final_spon1);
//         this.children.bringToTop(this.musicBtn);
//         this.children.bringToTop(this.logo);

//     });
//     this.dem3_final_spon1.on('dragend', () => {
//     if ((this.input.x>450 && this.input.x<810 && this.input.y>360 && this.input.y<500)){
//     this.dem3_final_spon1.setVisible(false);
//     this.final_cream2.alpha=1;
//     this.dem4_final_spon1.setVisible(true);
//     this.dem4_final_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.arrow4.setVisible(true);
//     this.arrow2.setVisible(false);


//     }

//     else{

//     this.arrow4.setVisible(true);
//     this.arrow2.setVisible(false);

//             this.dem3_final_spon1.setTexture('final_spon1');
//             this.dem3_final_spon1.x=1000;
//             this.dem3_final_spon1.y=200;
//         }

//     },this);

// ////////4

//     this.dem4_final_spon1 = this.add.image(1000,200,'final_spon1');
//     this.dem4_final_spon1.setVisible(false);
//     // this.dem4_final_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem4_final_spon1.on('drag', (pointer, dragX, dragY) => {
//         this.dem4_final_spon1.x = dragX;
//         this.dem4_final_spon1.y = dragY;
//         this.dem4_final_spon1.setTexture('final_spon2');
//     this.arrow4.setVisible(false);
//     this.arrow2.setVisible(true);

//         this.children.bringToTop(this.dem4_final_spon1);
//         this.children.bringToTop(this.musicBtn);
//         this.children.bringToTop(this.logo);

//     });
//     this.dem4_final_spon1.on('dragend', () => {
//     if ((this.input.x>450 && this.input.x<810 && this.input.y>360 && this.input.y<500)){
//     this.dem4_final_spon1.setVisible(false);
//     this.final_cream4.alpha=1;

//     this.drg_final_spon01.setVisible(true);
//     this.drg_final_spon01.setInteractive({useHandCursor:true});
//     this.children.bringToTop(this.drg_final_spon01);

//     this.arrow4.setVisible(false);
//     this.arrow2.setVisible(true);


//     }

//     else{

//     this.arrow4.setVisible(true);
//     this.arrow2.setVisible(false);


//             this.dem4_final_spon1.setTexture('final_spon1');
//             this.dem4_final_spon1.x=1000;
//             this.dem4_final_spon1.y=200;
//         }

//     },this);

// ////////////////spon_drg//////////////////////

//     this.drg_final_spon01= this.physics.add.sprite(500, 350, 'final_spon1');
//     this.drg_final_spon01.setVisible(false);
//     // this.drg_final_spon01.setInteractive({useHandCursor:true});
//     this.drg_final_spon01.on('pointerdown',function(){
//     this.drg_final_spon01.setVisible(false);

//     this.drg_final_spon1.setVisible(true);
//     this.drg_final_spon1_drag=true;


//     this.children.bringToTop(this.drg_final_spon1);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);

//     },this);

// ////////////////////////////////

// this.drg_final_spon1 = this.add.sprite(500,350, "final_spon1");
// this.drg_final_spon1.setVisible(false);
// this.drg_final_spon1_drag=false;

//  const tool_2X = [463,505,578,642,706,771,736,671,596,519,561,630,727,];

//  const tool_2Y = [441,412,399,399,398,425,468,476,476,476,447,441,442,];

//     this.hitGroup_tool_2 = this.physics.add.group();
//     for (let i = 0; i < tool_2X.length; i++) {
//             const hitCircle_tool_2 = this.add.graphics();
//             hitCircle_tool_2.fillStyle(0x000000, 0);
//             hitCircle_tool_2.fillCircle(0, 0, 40);
//             hitCircle_tool_2.x = tool_2X[i];
//             hitCircle_tool_2.y = tool_2Y[i];
//             hitCircle_tool_2.id = i;
//             this.hitGroup_tool_2.add(hitCircle_tool_2);
//             this.physics.add.existing(hitCircle_tool_2);
//         }

//         this.hitSprite_tool_2_count = 0;

//         this.circleGroup_tool_2 = this.add.group();
//         this.circle_tool_2 = this.add.graphics();
//         this.circle_tool_2.fillStyle(0x000000, 0);
//         this.circleGroup_tool_2.add(this.circle_tool_2);
//         // this.l3_zoom_teeth_bluegum.visible = true;
//         // this.l3_zoom_teeth_bluegum.mask = new Phaser.Display.Masks.GeometryMask(this, this.circle_tool_2);

//         this.dragCircle_tool_2 = this.add.graphics();
//         this.dragCircle_tool_2.fillStyle(0x000000, 0);
//         this.dragCircle_tool_2.fillCircle(0, 0, 40);
//         this.physics.add.existing(this.dragCircle_tool_2);
//         this.physics.add.collider(this.dragCircle_tool_2, this.hitGroup_tool_2, hitSprite_group_tool_2, null, this);

// function hitSprite_group_tool_2(dragCircle_tool_2, hitCircle_tool_2) {
// const distance = Phaser.Math.Distance.Between(dragCircle_tool_2.x, dragCircle_tool_2.y, hitCircle_tool_2.x, hitCircle_tool_2.y);
// if (distance <= 80) {

//     const stepsize=1/ tool_2X.length;

//     this.final_cream1.alpha -= stepsize;
//     this.final_cream2.alpha -= stepsize;
//     this.final_cream3.alpha -= stepsize;
//     this.final_cream4.alpha -= stepsize;

//     this.fnl_crm_full.alpha += stepsize;

//         this.circle_tool_2.fillCircle(hitCircle_tool_2.x, hitCircle_tool_2.y, 40);
//         hitCircle_tool_2.destroy();
//         this.hitSprite_tool_2_count++;
//         if (this.hitSprite_tool_2_count >= tool_2X.length) {

//         this.drg_final_spon1.setVisible(false);
//         this.drg_final_spon1_drag=false;
//         this.arrow2.setVisible(false);

//         this.tweens.add({targets:this.jam_ams,x:260,ease: 'Quadratic',duration:1200,onComplete:() => { }},this);
//         this.tweens.add({targets:this.jam_top,x:200+60,ease: 'Quadratic',duration:1200,onComplete:() => {
//         this.wall_spon001.setInteractive({useHandCursor:true});
//         this.arrow5.setVisible(true);
//         this.wall_spon001.setVisible(true);

//          }},this);

//           }
//          }
//         }

// //////////////////////////////////////////

//     this.wall_spon001= this.physics.add.sprite(760, 170, 'wall_spon');
//     this.wall_spon001.setVisible(false);
//     // this.wall_spon001.setInteractive({useHandCursor:true});
//     this.wall_spon001.on('pointerdown',function(){
//     this.wall_spon001.setVisible(false);
//     this.arrow5.setVisible(false);
//     this.arrow6.setVisible(true);

//      this.red_spon.setVisible(true);
//      this.red_spon1.setVisible(false);
//      this.red_spon_drag=true;
//      this.red_spon1_drag=false;

//      this.children.bringToTop(this.red_spon);
//      this.children.bringToTop(this.logo);
//      this.children.bringToTop(this.musicBtn);
     



//     // this.jam_spon1.setVisible(false);
//     // this.jam_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});

//     },this);

// ///////////////////spri////////////////////

//     this.dem_spri1= this.physics.add.sprite(230, 330, 'spri1');
//     // this.dem_spri1.setInteractive({useHandCursor:true});
//     this.dem_spri1.on('pointerdown',function(){
//     this.dem_spri1.setTexture('spri2');
//     this.dem_spri1.setVisible(false);
//     this.arrow1.setVisible(false);
//     this.arrow2.setVisible(true);

//     this.spri1.setVisible(true);
//     this.spri1_drag=true;

//     this.children.bringToTop(this.spri1);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);

//     },this);

// ///////////////////////////////////////////////////

// this.spri1 = this.add.sprite(1050,550, "spri2");
// this.spri1.setVisible(false);
// this.spri1_drag=false;

//  const tool_1X = [463,505,578,642,706,771,736,671,596,519,561,630,727,];

//  const tool_1Y = [441,412,399,399,398,425,468,476,476,476,447,441,442,];

//     this.hitGroup_tool_1 = this.physics.add.group();
//     for (let i = 0; i < tool_1X.length; i++) {
//             const hitCircle_tool_1 = this.add.graphics();
//             hitCircle_tool_1.fillStyle(0x000000, 0);
//             hitCircle_tool_1.fillCircle(0, 0, 40);
//             hitCircle_tool_1.x = tool_1X[i];
//             hitCircle_tool_1.y = tool_1Y[i];
//             hitCircle_tool_1.id = i;
//             this.hitGroup_tool_1.add(hitCircle_tool_1);
//             this.physics.add.existing(hitCircle_tool_1);
//         }

//         this.hitSprite_tool_1_count = 0;

//         this.circleGroup_tool_1 = this.add.group();
//         this.circle_tool_1 = this.add.graphics();
//         this.circle_tool_1.fillStyle(0x000000, 0);
//         this.circleGroup_tool_1.add(this.circle_tool_1);
//         // this.l3_zoom_teeth_bluegum.visible = true;
//         // this.l3_zoom_teeth_bluegum.mask = new Phaser.Display.Masks.GeometryMask(this, this.circle_tool_1);

//         this.dragCircle_tool_1 = this.add.graphics();
//         this.dragCircle_tool_1.fillStyle(0x000000, 0);
//         this.dragCircle_tool_1.fillCircle(0, 0, 40);
//         this.physics.add.existing(this.dragCircle_tool_1);
//         this.physics.add.collider(this.dragCircle_tool_1, this.hitGroup_tool_1, hitSprite_group_tool_1, null, this);

// function hitSprite_group_tool_1(dragCircle_tool_1, hitCircle_tool_1) {
// const distance = Phaser.Math.Distance.Between(dragCircle_tool_1.x, dragCircle_tool_1.y, hitCircle_tool_1.x, hitCircle_tool_1.y);
// if (distance <= 80) {

//     const stepsize=1/ tool_1X.length;
//     this.blow_butter.alpha += stepsize;

//         this.circle_tool_1.fillCircle(hitCircle_tool_1.x, hitCircle_tool_1.y, 40);
//         hitCircle_tool_1.destroy();
//         this.hitSprite_tool_1_count++;
//         if (this.hitSprite_tool_1_count >= tool_1X.length) {

//         this.spri1.setVisible(false);
//         this.spri1_drag=false;
//         this.dem_bisket1.setInteractive({useHandCursor:true,draggable:true,});
//         this.arrow2.setVisible(false);
//         this.arrow3.setVisible(true);

//           }
//          }
//         }

// ///////////////////biskt/////////////////////

//     this.bisket_plt= this.physics.add.sprite(200, 520, 'bisket_plt');

// /////////01

//     this.dem_bisket2= this.physics.add.sprite(170, 510, 'bisket');
//     // this.dem_bisket2.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem_bisket2.on('drag', (pointer, dragX, dragY) => {
//     this.dem_bisket2.x = dragX;
//     this.dem_bisket2.y = dragY;
//     this.bisket2.alpha=0.5;
//     this.arrow3.setVisible(false);
//     this.arrow2.setVisible(true);

//     this.children.bringToTop(this.dem_bisket2);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);

//     });
//     this.dem_bisket2.on('dragend', () => {
//     if ((this.input.x>450 && this.input.x<810 && this.input.y>360 && this.input.y<500)){
//         this.dem_bisket2.visible=false; 
//         this.bisket2.alpha=1;
//         this.dem_bisket3.setInteractive({useHandCursor:true,draggable:true,});
//     this.arrow3.setVisible(true);
//     this.arrow2.setVisible(false);

//         }

//     else{ 

//     this.arrow3.setVisible(true);
//     this.arrow2.setVisible(false);

//             this.bisket2.alpha=0;
//             this.dem_bisket2.x=170;
//             this.dem_bisket2.y=510;
//         }

//     },this);

// /////////02

//     this.dem_bisket3= this.physics.add.sprite(230, 510, 'bisket');
//     // this.dem_bisket3.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem_bisket3.on('drag', (pointer, dragX, dragY) => {
//     this.dem_bisket3.x = dragX;
//     this.dem_bisket3.y = dragY;
//     this.bisket3.alpha=0.5;
//     this.arrow3.setVisible(false);
//     this.arrow2.setVisible(true);

//     this.children.bringToTop(this.dem_bisket3);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);

//     });
//     this.dem_bisket3.on('dragend', () => {
//     if ((this.input.x>450 && this.input.x<810 && this.input.y>360 && this.input.y<500)){
//         this.dem_bisket3.visible=false; 
//         this.bisket3.alpha=1;
//         this.dem_bisket4.setInteractive({useHandCursor:true,draggable:true,});
//     this.arrow3.setVisible(true);
//     this.arrow2.setVisible(false);

//         }

//     else{ 

//     this.arrow3.setVisible(true);
//     this.arrow2.setVisible(false);

//             this.bisket3.alpha=0;
//             this.dem_bisket3.x=230;
//             this.dem_bisket3.y=510;
//         }

//     },this);

// /////////03

//     this.dem_bisket4= this.physics.add.sprite(270, 510, 'bisket');
//     // this.dem_bisket4.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem_bisket4.on('drag', (pointer, dragX, dragY) => {
//     this.dem_bisket4.x = dragX;
//     this.dem_bisket4.y = dragY;
//     this.bisket4.alpha=0.5;
//     this.arrow3.setVisible(false);
//     this.arrow2.setVisible(true);

//     this.children.bringToTop(this.dem_bisket4);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);

//     });
//     this.dem_bisket4.on('dragend', () => {
//     if ((this.input.x>450 && this.input.x<810 && this.input.y>360 && this.input.y<500)){
//         this.dem_bisket4.visible=false; 
//         this.bisket4.alpha=1;
//         this.wall_spon.setInteractive({useHandCursor:true});
//     this.arrow3.setVisible(false);
//     this.arrow2.setVisible(false);
//     this.arrow5.setVisible(true);

//         }

//     else{
//     this.arrow3.setVisible(true);
//     this.arrow2.setVisible(false);

//             this.bisket4.alpha=0;
//             this.dem_bisket4.x=270;
//             this.dem_bisket4.y=510;
//         }

//     },this);

// /////////04

//     this.dem_bisket1= this.physics.add.sprite(130, 510, 'bisket');
//     // this.dem_bisket1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem_bisket1.on('drag', (pointer, dragX, dragY) => {
//     this.dem_bisket1.x = dragX;
//     this.dem_bisket1.y = dragY;
//     this.bisket1.alpha=0.5;
//     this.arrow3.setVisible(false);
//     this.arrow2.setVisible(true);

//     this.children.bringToTop(this.dem_bisket1);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);

//     });
//     this.dem_bisket1.on('dragend', () => {
//     if ((this.input.x>450 && this.input.x<810 && this.input.y>360 && this.input.y<500)){
//         this.dem_bisket1.visible=false; 
//         this.bisket1.alpha=1;
//         this.dem_bisket2.setInteractive({useHandCursor:true,draggable:true,});
//     this.arrow3.setVisible(true);
//     this.arrow2.setVisible(false);

//         }

//     else{ 
//     this.arrow3.setVisible(true);
//     this.arrow2.setVisible(false);

//             this.bisket1.alpha=0;
//             this.dem_bisket1.x=130;
//             this.dem_bisket1.y=510;
//         }

//     },this);

// ///////////////////stber/////////////////////

//     this.stber_plt= this.physics.add.sprite(1020, 540, 'stber_plt');

// /////////01

//     this.stbar1_dme= this.physics.add.sprite(950, 530, 'stbar_move');
//     // this.stbar1_dme.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.stbar1_dme.on('drag', (pointer, dragX, dragY) => {
//     this.stbar1_dme.x = dragX;
//     this.stbar1_dme.y = dragY;
//     this.stbare_cup1.alpha=0.5;
//     this.arrow7.setVisible(false);
//     this.arrow2.setVisible(true);

//     this.children.bringToTop(this.stbar1_dme);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);

//     });
//     this.stbar1_dme.on('dragend', () => {
//     if ((this.input.x>450 && this.input.x<810 && this.input.y>360 && this.input.y<500)){
//         this.stbar1_dme.visible=false; 
//         this.stbare_cup1.alpha=1;
//         this.stbar2_dem.setInteractive({useHandCursor:true,draggable:true,});

//     this.arrow7.setVisible(true);
//     this.arrow2.setVisible(false);

//         }

//     else{ 

//     this.arrow7.setVisible(true);
//     this.arrow2.setVisible(false);

//             this.stbare_cup1.alpha=0;
//             this.stbar1_dme.x=950;
//             this.stbar1_dme.y=530;
//         }

//     },this);

// /////////02

//     this.stbar2_dem= this.physics.add.sprite(990, 530, 'stbar_move');
//     // this.stbar2_dem.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.stbar2_dem.on('drag', (pointer, dragX, dragY) => {
//     this.stbar2_dem.x = dragX;
//     this.stbar2_dem.y = dragY;
//     this.stbare_cup2.alpha=0.5;

//     this.arrow7.setVisible(false);
//     this.arrow2.setVisible(true);

//     this.children.bringToTop(this.stbar2_dem);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);

//     });
//     this.stbar2_dem.on('dragend', () => {
//     if ((this.input.x>450 && this.input.x<810 && this.input.y>360 && this.input.y<500)){
//         this.stbar2_dem.visible=false; 
//         this.stbare_cup2.alpha=1;
//         this.stbar3_dem.setInteractive({useHandCursor:true,draggable:true,});
//     this.arrow7.setVisible(true);
//     this.arrow2.setVisible(false);

//         }

//     else{ 

//     this.arrow7.setVisible(true);
//     this.arrow2.setVisible(false);

//             this.stbare_cup2.alpha=0;
//             this.stbar2_dem.x=990;
//             this.stbar2_dem.y=530;
//         }

//     },this);

// /////////03

//     this.stbar3_dem= this.physics.add.sprite(1030, 530, 'stbar_move');
//     // this.stbar3_dem.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.stbar3_dem.on('drag', (pointer, dragX, dragY) => {
//     this.stbar3_dem.x = dragX;
//     this.stbar3_dem.y = dragY;
//     this.stbare_cup3.alpha=0.5;

//     this.arrow7.setVisible(false);
//     this.arrow2.setVisible(true);


//     this.children.bringToTop(this.stbar3_dem);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);

//     });
//     this.stbar3_dem.on('dragend', () => {
//     if ((this.input.x>450 && this.input.x<810 && this.input.y>360 && this.input.y<500)){
//         this.stbar3_dem.visible=false; 
//         this.stbare_cup3.alpha=1;
//         this.stbar4_dem.setInteractive({useHandCursor:true,draggable:true,});
//     this.arrow7.setVisible(true);
//     this.arrow2.setVisible(false);

//         }

//     else{ 

//     this.arrow7.setVisible(true);
//     this.arrow2.setVisible(false);

//             this.stbare_cup3.alpha=0;
//             this.stbar3_dem.x=1030;
//             this.stbar3_dem.y=530;
//         }

//     },this);

// /////////04

//     this.stbar4_dem= this.physics.add.sprite(1080, 530, 'stbar_move');
//     // this.stbar4_dem.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.stbar4_dem.on('drag', (pointer, dragX, dragY) => {
//     this.stbar4_dem.x = dragX;
//     this.stbar4_dem.y = dragY;
//     this.stbare_cup4.alpha=0.5;
//     this.arrow7.setVisible(false);
//     this.arrow2.setVisible(true);

//     this.children.bringToTop(this.stbar4_dem);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);

//     });
//     this.stbar4_dem.on('dragend', () => {
//     if ((this.input.x>450 && this.input.x<810 && this.input.y>360 && this.input.y<500)){
//         this.stbar4_dem.visible=false; 
//         this.stbare_cup4.alpha=1;
//     this.arrow7.setVisible(false);
//     this.arrow2.setVisible(false);

//         this.time.delayedCall(200,() => {
//         this.scene.start('l3_food_box2');  

//     this.anims.remove('jam_spon_key1');
//     this.anims.remove('jam_spon_key2');
//     this.anims.remove('jam_spon_key3');
//     this.anims.remove('jam_spon_key4');
//         },this);

//         }

//     else{ 

//     this.arrow7.setVisible(true);
//     this.arrow2.setVisible(false);

//             this.stbare_cup4.alpha=0;
//             this.stbar4_dem.x=1080;
//             this.stbar4_dem.y=530;
//         }

//     },this);

// ////////////////////jam_ams///////////////////

//     this.jam_ams= this.physics.add.sprite(-1000, 360, 'jam_ams');
//     // this.jam_ams.play('jam_ams_key1');
//     this.jam_ams.on("animationcomplete",function() {


//     },this);


//     this.anims.create({key: 'jam_ams_key1',
//     frames: this.anims.generateFrameNames('jam_ams', 
//     { start: 0, end: 1, zeroPad: 1, prefix: 'jam_ams' }),
//     frameRate: 8 });  

//     this.anims.create({key: 'jam_ams_key2',
//     frames: this.anims.generateFrameNames('jam_ams', 
//     { start: 1, end: 2, zeroPad: 1, prefix: 'jam_ams' }),
//     frameRate: 8 });  

//     this.anims.create({key: 'jam_ams_key3',
//     frames: this.anims.generateFrameNames('jam_ams', 
//     { start: 2, end: 3, zeroPad: 1, prefix: 'jam_ams' }),
//     frameRate: 8 });  

//     this.anims.create({key: 'jam_ams_key4',
//     frames: this.anims.generateFrameNames('jam_ams', 
//     { start: 3, end: 4, zeroPad: 1, prefix: 'jam_ams' }),
//     frameRate: 8 });   

//     this.anims.create({key: 'jam_ams_key5',
//     frames: this.anims.generateFrameNames('jam_ams', 
//     { start: 4, end: 5, zeroPad: 1, prefix: 'jam_ams' }),
//     frameRate: 8 });

// ////////////////////jam_spn///////////////////b1111111111111111111111111111
// ///////0

// ///////////////////////////////////////////

  



// ///////////////////////////////////////////


//     this.jam_spon1= this.physics.add.sprite(200, 280, 'jam_spon').setScale(0.9);
//     this.jam_spon1.setVisible(false);
//     // this.jam_spon1.setInteractive({useHandCursor:true});
//     this.jam_spon1.on('pointerdown',function(){
//     this.arrow6.setVisible(false);

//     this.jam_spon1.disableInteractive();
//     this.jam_spon1.setVisible(false);
//     this.jam_spon01.setVisible(true);
//     this.jam_spon01.play('jam_spon_key1');

//     },this);

//    ////////////////////////////////////////////////

//       this.n1_point1 = this.physics.add.sprite(260, 340, 'circul').setAlpha(0).setScale(3);
//       this.n1_point2 = this.physics.add.sprite(0, 0, 'circul').setAlpha(0);
//       this.physics.add.collider(this.n1_point1, this.n1_point2, function () {
//       this.n1_point1.destroy();
//       this.n1_point2.destroy();
//     this.arrow6.setVisible(false);

//     this.red_spon.setVisible(false);
//     this.red_spon1.setVisible(true);
//     this.red_spon_drag=false;
//     this.red_spon1_drag=true;

//     this.click_rect01.setInteractive({useHandCursor:true});

//     this.children.bringToTop(this.red_spon1);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);



//      }, null, this);

//    ////////////////


//       this.n2_point1 = this.physics.add.sprite(260, 340, 'circul').setAlpha(0).setScale(3);
//       this.n2_point2 = this.physics.add.sprite(0, 0, 'circul').setAlpha(0);

//       this.physics.add.collider(this.n2_point1, this.n2_point2, function () {
//       this.n2_point1.destroy();
//       this.n2_point2.destroy();


//     this.red_spon2.setVisible(false);
//     this.red_spon1.setVisible(true);
//     this.red_spon2_drag=false;
//     this.red_spon1_drag=true;

//     this.click_rect02.setInteractive({useHandCursor:true});

//     this.children.bringToTop(this.red_spon1);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);


//      }, null, this);

   
//       this.n3_point1 = this.physics.add.sprite(260, 340, 'circul').setAlpha(0).setScale(3);
//       this.n3_point2 = this.physics.add.sprite(0, 0, 'circul').setAlpha(0);

//       this.physics.add.collider(this.n3_point1, this.n3_point2, function () {
//       this.n3_point1.destroy();
//       this.n3_point2.destroy();



//     this.red_spon3.setVisible(false);
//     this.red_spon1.setVisible(true);
//     this.red_spon3_drag=false;
//     this.red_spon1_drag=true;

//     this.click_rect03.setInteractive({useHandCursor:true});

//     this.children.bringToTop(this.red_spon1);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);



//      }, null, this);
   
//       this.n4_point1 = this.physics.add.sprite(260, 340, 'circul').setAlpha(0).setScale(3);
//       this.n4_point2 = this.physics.add.sprite(0, 0, 'circul').setAlpha(0);

//       this.physics.add.collider(this.n4_point1, this.n4_point2, function () {
//       this.n4_point1.destroy();
//       this.n4_point2.destroy();


//     this.red_spon4.setVisible(false);
//     this.red_spon1.setVisible(true);
//     this.red_spon4_drag=false;
//     this.red_spon1_drag=true;

//     this.click_rect04.setInteractive({useHandCursor:true});

//     this.children.bringToTop(this.red_spon1);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);




//      }, null, this);


//     this.red_spon= this.physics.add.sprite(200, 280, 'red_spon');
//     this.red_spon.setVisible(false);


//     this.red_spon1= this.physics.add.sprite(200, 280, 'red_spon1');
//     this.red_spon1.setVisible(false);

//     this.red_spon2= this.physics.add.sprite(200, 280, 'red_spon');
//     this.red_spon2.setVisible(false);

//     this.red_spon3= this.physics.add.sprite(200, 280, 'red_spon');
//     this.red_spon3.setVisible(false);

//     this.red_spon4= this.physics.add.sprite(200, 280, 'red_spon');
//     this.red_spon4.setVisible(false);



// ///////1

//     this.click_rect001 = this.add.rectangle(260, 350, 150, 180, 0xff0000,0).setOrigin(0.5);
//     // this.click_rect001.setInteractive({useHandCursor:true});
//     this.click_rect001.on('pointerdown',function(){
//     this.jam_spon01.setVisible(false);
//     this.jam_spon02.setVisible(true);
//     this.jam_spon02.play('jam_spon_key2');



//     },this);

// ///////2

//     this.click_rect002 = this.add.rectangle(260, 350, 150, 180, 0xff0000,0).setOrigin(0.5);
//     // this.click_rect002.setInteractive({useHandCursor:true});
//     this.click_rect002.on('pointerdown',function(){
//     this.jam_spon02.setVisible(false);
//     this.jam_spon03.setVisible(true);
//     this.jam_spon03.play('jam_spon_key3');

//     },this);

// ///////3

//     this.click_rect003 = this.add.rectangle(260, 350, 150, 180, 0xff0000,0).setOrigin(0.5);
//     // this.click_rect003.setInteractive({useHandCursor:true});
//     this.click_rect003.on('pointerdown',function(){
//     this.jam_spon03.setVisible(false);
//     this.jam_spon04.setVisible(true);
//     this.jam_spon04.play('jam_spon_key4');

//     },this);

// ///////////ames/////////////
// ///////1

//     this.jam_spon01= this.physics.add.sprite(200, 260, 'jam_spon').setScale(0.9);
//     this.jam_spon01.setVisible(false);
//     this.jam_spon01.on("animationcomplete",function() {
//     this.click_rect01.setInteractive({useHandCursor:true});
//     this.jam_spon01_drag=true;

//     this.children.bringToTop(this.jam_spon01)
//     this.children.bringToTop(this.musicBtn)
//     this.children.bringToTop(this.logo)


//     },this);
//     this.anims.create({key: 'jam_spon_key1',
//     frames: this.anims.generateFrameNames('jam_spon', 
//     { start: 0, end: 5, zeroPad: 1, prefix: 'jam_spon' }),
//     frameRate: 8 });

// ///////2

//     this.jam_spon02= this.physics.add.sprite(200, 260, 'jam_spon').setScale(0.9);
//     this.jam_spon02.setVisible(false);
//     this.jam_spon02.on("animationcomplete",function() {
//     this.click_rect02.setInteractive({useHandCursor:true});
//     this.jam_spon02_drag=true;

//     this.children.bringToTop(this.jam_spon02)
//     this.children.bringToTop(this.musicBtn)
//     this.children.bringToTop(this.logo)


//     },this);
//     this.anims.create({key: 'jam_spon_key2',
//     frames: this.anims.generateFrameNames('jam_spon', 
//     { start: 0, end: 5, zeroPad: 1, prefix: 'jam_spon' }),
//     frameRate: 8 });

// ///////3

//     this.jam_spon03= this.physics.add.sprite(200, 260, 'jam_spon').setScale(0.9);
//     this.jam_spon03.setVisible(false);
//     this.jam_spon03.on("animationcomplete",function() {
//     this.click_rect03.setInteractive({useHandCursor:true});
//     this.jam_spon03_drag=true;

//     this.children.bringToTop(this.jam_spon03)
//     this.children.bringToTop(this.musicBtn)
//     this.children.bringToTop(this.logo)


//     },this);
//     this.anims.create({key: 'jam_spon_key3',
//     frames: this.anims.generateFrameNames('jam_spon', 
//     { start: 0, end: 5, zeroPad: 1, prefix: 'jam_spon' }),
//     frameRate: 8 });

// ///////4

//     this.jam_spon04= this.physics.add.sprite(200, 260, 'jam_spon').setScale(0.9);
//     this.jam_spon04.setVisible(false);
//     this.jam_spon04.on("animationcomplete",function() {
//     this.click_rect04.setInteractive({useHandCursor:true});
//     this.jam_spon04_drag=true;

//     this.children.bringToTop(this.jam_spon04)
//     this.children.bringToTop(this.musicBtn)
//     this.children.bringToTop(this.logo)


//     },this);
//     this.anims.create({key: 'jam_spon_key4',
//     frames: this.anims.generateFrameNames('jam_spon', 
//     { start: 0, end: 5, zeroPad: 1, prefix: 'jam_spon' }),
//     frameRate: 8 });

// ////////////////

//     this.jam_top= this.physics.add.sprite(-1000, 360,'jam_top');

// /////////////////food_cup///////////////////

//     this.food_cup_btm= this.physics.add.sprite(630, 460,'food_cup_btm');

//     this.blow_butter= this.physics.add.sprite(630, 440, 'blow_butter');
//     this.blow_butter.alpha=0;

// /////////bisket////////

//     this.bisket1= this.physics.add.sprite(745, 450, 'bisket');
//     this.bisket1.alpha=0;

//     this.bisket2= this.physics.add.sprite(670, 450, 'bisket');
//     this.bisket2.alpha=0;

//     this.bisket3= this.physics.add.sprite(590, 450, 'bisket');
//     this.bisket3.alpha=0;

//     this.bisket4= this.physics.add.sprite(515, 450, 'bisket');
//     this.bisket4.alpha=0;

// /////////rice////////

//     this.final_cream1= this.physics.add.sprite(730, 440, 'final_cream');
//     this.final_cream1.alpha=0;

//     this.final_cream2= this.physics.add.sprite(610, 440, 'final_cream');
//     this.final_cream2.alpha=0;  

//     this.final_cream3= this.physics.add.sprite(670, 460, 'final_cream');
//     this.final_cream3.alpha=0; 

//     this.final_cream4= this.physics.add.sprite(540, 450, 'final_cream');
//     this.final_cream4.alpha=0;

// /////////shap////////

//     // this.fnl_crm_1= this.physics.add.sprite(710, 450, 'fnl_crm_1');
//     // this.fnl_crm_1.alpha=0;

//     // this.fnl_crm_2= this.physics.add.sprite(550, 450, 'fnl_crm_2');
//     // this.fnl_crm_2.alpha=0;

//     this.fnl_crm_full= this.physics.add.sprite(630, 450, 'fnl_crm_full');
//     this.fnl_crm_full.alpha=0;

// /////////jam////////

//     this.final_jam1= this.physics.add.sprite(630, 440, 'final_jam1');
//     this.final_jam1.alpha=0; 

//     this.final_jam2= this.physics.add.sprite(630, 440, 'final_jam2');
//     this.final_jam2.alpha=0; 

//     this.final_jam3= this.physics.add.sprite(630, 440, 'final_jam3');
//     this.final_jam3.alpha=0; 

//     this.final_jam4= this.physics.add.sprite(630, 440, 'final_jam4');
//     this.final_jam4.alpha=0;

//     this.stbare_cup1= this.physics.add.sprite(675, 440, 'stbare_cup1');
//     this.stbare_cup1.alpha=0;

//     this.stbare_cup2= this.physics.add.sprite(675, 440, 'stbare_cup2');
//     this.stbare_cup2.alpha=0;

//     this.stbare_cup3= this.physics.add.sprite(675, 440, 'stbare_cup3');
//     this.stbare_cup3.alpha=0;

//     this.stbare_cup4= this.physics.add.sprite(675, 440, 'stbare_cup4');
//     this.stbare_cup4.alpha=0;

// ////////////////////////

//     this.food_cup_top= this.physics.add.sprite(630, 460, 'food_cup_top');

// ////////////////jam_dwn//////////////
// /////////1

//     this.click_rect01 = this.add.rectangle(630, 460, 350, 200, 0xff0000,0).setOrigin(0.5);
//     // this.click_rect01.setInteractive({useHandCursor:true});
//     this.click_rect01.on('pointerdown',function(){
//     this.final_jam1.alpha=1;
//     this.jam_spon01.setFrame('jam_spon1');
//     // this.click_rect001.setInteractive({useHandCursor:true});


//      this.red_spon1_drag=false;
//      this.red_spon1.setVisible(false);

//      this.red_spon2_drag=true;
//      this.red_spon2.setVisible(true);

//     this.children.bringToTop(this.red_spon2);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);


//     },this);  

// /////////2

//     this.click_rect02 = this.add.rectangle(630, 460, 350, 200, 0xff0000,0).setOrigin(0.5);
//     // this.click_rect02.setInteractive({useHandCursor:true});
//     this.click_rect02.on('pointerdown',function(){
//     this.final_jam2.alpha=1;
//     this.jam_spon02.setFrame('jam_spon1');
//     // this.click_rect002.setInteractive({useHandCursor:true});


//      this.red_spon1_drag=false;
//      this.red_spon1.setVisible(false);

//      this.red_spon3_drag=true;
//      this.red_spon3.setVisible(true);

//     this.children.bringToTop(this.red_spon3);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);

//     },this);

// /////////2

//     this.click_rect03 = this.add.rectangle(630, 460, 350, 200, 0xff0000,0).setOrigin(0.5);
//     // this.click_rect03.setInteractive({useHandCursor:true});
//     this.click_rect03.on('pointerdown',function(){
//     this.final_jam3.alpha=1;
//     this.jam_spon03.setFrame('jam_spon1');
//     // this.click_rect003.setInteractive({useHandCursor:true});


//      this.red_spon1_drag=false;
//      this.red_spon1.setVisible(false);

//      this.red_spon4_drag=true;
//      this.red_spon4.setVisible(true);

//     this.children.bringToTop(this.red_spon4);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);


//     },this);

// /////////2

//     this.click_rect04 = this.add.rectangle(630, 460, 350, 200, 0xff0000,0).setOrigin(0.5);
//     // this.click_rect04.setInteractive({useHandCursor:true});
//     this.click_rect04.on('pointerdown',function(){
//     this.final_jam4.alpha=1;
//     this.jam_spon04.setFrame('jam_spon1');

//         this.red_spon1_drag=false;
//        this.red_spon1.setVisible(false);

//     this.time.delayedCall(500,() => {

//     this.arrow7.setVisible(true);
//     this.jam_spon04.setVisible(false);
//     this.stbar1_dme.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     },this);

//     },this);

// ////////////////////arrow///////////////////////

//     var arrow_Posx = [240,630,200,1080,910,250,1010,];
//     var arrow_Posy = [150,350,380,90,90,140,380,];
             
//     for (var i = 1; i <= 50; i++) {
//         this['arrow' + i] = this.add.sprite(arrow_Posx[i - 1], arrow_Posy[i - 1], 'arrow');
//         this['arrow' + i].setOrigin(0.5);
//         this['arrow' + i].anims.create({key: 'arrow',
//             frames: this.anims.generateFrameNumbers('arrow', { start: 0, end: 8 }),
//             frameRate: 20,
//             repeat: -1
//     });

//     this['arrow' + i].anims.play('arrow');
//     this['arrow' + i].setVisible(false);

//     if (i === 5 ) {
//         this['arrow' + i].setVisible(false);
//         this['arrow' + i].rotation=1.58;
//         }

//     // if (i === 1 ) {
//     //     this['arrow' + i].setVisible(false);
//     //     this['arrow' + i].rotation=1.58;
//     //     }

//     // if (i === 6 ) {
//     //     this['arrow' + i].setVisible(false);
//     //     this['arrow' + i].rotation=-1.58;
//     //     }            
            
//     }

// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////

//        this.playbtn=this.add.image(1190,640,'btn2').setOrigin(0.5, 0.5).setScale(0);
//         this.playbtn.setInteractive({ useHandCursor: true });
//         this.playbtn.on('pointerover',function(){this.playbtn.setScale(1.05)},this);
//         this.playbtn.on('pointerout',function(){this.playbtn.setScale(1)},this);
//         this.playbtn.on('pointerdown',this.enterRoom,this);

//         this.morebtn=this.add.image(60,660,'btn4').setOrigin(0.5, 0.5).setScale(0);
//         this.morebtn.setInteractive({ useHandCursor: true });
//         this.morebtn.on('pointerover',function(){this.morebtn.setScale(1.05)},this);
//         this.morebtn.on('pointerout',function(){this.morebtn.setScale(1)},this);
//         this.morebtn.on('pointerup',this.morebtnLink,this);

//          this.logo =this.add.image(165,55,'logo').setScale(0.65);
//         this.logo.setInteractive({pixelPerfect:true});
//         this.logo.on('pointerup',this.LogoLink,this);

//           this.musicBtn = this.add.sprite(1212,50,"music-on");
//         this.musicBtn.setInteractive();
//         this.musicBtn.on('pointerup',this.changemusic,this);

//     // this.shutter_group = this.add.container();
//     // this.shutter_bg =this.add.image(320,360,'shutter_bg');
//     // this.shutter_bg2 =this.add.image(960,360,'shutter_bg2');
//     // this.shutter_group.add(this.shutter_bg);
//     // this.shutter_group.add(this.shutter_bg2);

//     // this.tweens.add({targets:this.shutter_group,y:-720,ease: 'Quadratic',duration:1200,onComplete:() => {
//     this.dem_spri1.setInteractive({useHandCursor:true});
//     this.arrow1.setVisible(true);

//     // }},this);


//         if (!this.sound.mute) {
//         this.musicBtn.setTexture('music-on');
//         } else {
//         this.musicBtn.setTexture('music-off');
//         }
// }
// update() {
//   // console.log(this.input.x + ':' + this.input.y); 

//   if (this.dummy_drag) {
//         this.dummy.x = this.input.activePointer.x ;
//         this.dummy.y = this.input.activePointer.y;
//         }

//   if (this.spri1_drag) {
//         this.spri1.x = this.input.activePointer.x ;
//         this.spri1.y = this.input.activePointer.y;

//         this.dragCircle_tool_1.x = this.input.activePointer.x;
//         this.dragCircle_tool_1.y = this.input.activePointer.y;

//         } 

//   if (this.drg_final_spon1_drag) {
//         this.drg_final_spon1.x = this.input.activePointer.x-50;
//         this.drg_final_spon1.y = this.input.activePointer.y-50;

//         this.dragCircle_tool_2.x = this.input.activePointer.x;
//         this.dragCircle_tool_2.y = this.input.activePointer.y;

//         } 



//        if (this.red_spon1_drag) {
//         this.red_spon1.x = this.input.activePointer.x-50;
//         this.red_spon1.y = this.input.activePointer.y-50;
//         } 



//         if (this.red_spon_drag) {

//         this.red_spon.x = this.input.activePointer.x-50;
//         this.red_spon.y = this.input.activePointer.y-50;

//         this.n1_point2.x = this.input.activePointer.x;
//         this.n1_point2.y = this.input.activePointer.y;

//         } 



//         if (this.red_spon2_drag) {

//         this.red_spon2.x = this.input.activePointer.x-50;
//         this.red_spon2.y = this.input.activePointer.y-50;

//         this.n2_point2.x = this.input.activePointer.x;
//         this.n2_point2.y = this.input.activePointer.y;

//         } 


//         if (this.red_spon3_drag) {

//         this.red_spon3.x = this.input.activePointer.x-50;
//         this.red_spon3.y = this.input.activePointer.y-50;

//         this.n3_point2.x = this.input.activePointer.x;
//         this.n3_point2.y = this.input.activePointer.y;

//         } 

//         if (this.red_spon4_drag) {

//         this.red_spon4.x = this.input.activePointer.x-50;
//         this.red_spon4.y = this.input.activePointer.y-50;

//         this.n4_point2.x = this.input.activePointer.x;
//         this.n4_point2.y = this.input.activePointer.y;

//         } 









//   }
          
// morebtnLink (){
//   YYGGames.navigate("game", "morebutton");
// }
// LogoLink (){
//       YYGGames.navigate("game", "logo");
// }
// enterRoom (){

//     this.anims.remove('jam_spon_key1');
//     this.anims.remove('jam_spon_key2');
//     this.anims.remove('jam_spon_key3');
//     this.anims.remove('jam_spon_key4');

//     // this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     // var state = 'finalscreen';
//     // MyShowAD(this, state);
//     // }},this);

//    }
  
// changemusic() {
//      if (!this.sound.mute) {
//     this.musicBtn.setTexture('music-off');
//     this.sound.mute = true;
//   } else {
//     this.musicBtn.setTexture('music-on');
//     this.sound.mute = false;
//   }
//   }   
// }

// //////////////////////////////////////////
// //////////////////////////////////////////


// class l3_food_box2 extends Phaser.Scene {

// constructor() {
//  super('l3_food_box2');
// }
//  create() {
     
//     this.levelGroup = this.add.container();

//     // this.title_bg = this.add.sprite(320,360, "title_bg");
//     // this.title_bg2 = this.add.sprite(960,360, "title_bg2");

//     // this.levelGroup.add(this.title_bg);
//     // this.levelGroup.add(this.title_bg2);

// /////////////////////////////////////////////////////

//     this.cook_bg1 = this.add.sprite(320,360, "cook_bg1");

//     this.cook_bg2 = this.add.sprite(960,360, "cook_bg2");

// /////////////////////////////////////////////////////

//     this.wall_anger = this.add.sprite(880,50, "wall_anger");

//     this.wall_spon= this.physics.add.sprite(760, 170, 'wall_spon');
//     // this.wall_spon.setInteractive({useHandCursor:true});
//     this.wall_spon.on('pointerdown',function(){
//     this.wall_spon.setVisible(false);
//     this.arrow5.setVisible(false);
//     this.arrow4.setVisible(true);

//     this.dem1_final_spon1.setVisible(true);
//     this.dem1_final_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});

//     },this);

//     this.anker_top= this.physics.add.sprite(765, 70, 'anker_top');

// ///////////////////cup///////////////////////

//     this.final_cup_btm= this.physics.add.sprite(1060, 350, 'final_cup_btm');
//     this.final_dft_color= this.physics.add.sprite(1080, 270, 'final_dft_color');
//     this.final_cup_top= this.physics.add.sprite(1060, 350, 'final_cup_top');

// //////////////////spon1/////////////////////
// ////////1

//     this.dem1_final_spon1 = this.add.image(1000,200,'final_spon1');
//     this.dem1_final_spon1.setVisible(false);
//     // this.dem1_final_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem1_final_spon1.on('drag', (pointer, dragX, dragY) => {
//         this.dem1_final_spon1.x = dragX;
//         this.dem1_final_spon1.y = dragY;
//         this.dem1_final_spon1.setTexture('final_spon2');
//     this.arrow4.setVisible(false);
//     this.arrow2.setVisible(true);

//         this.children.bringToTop(this.dem1_final_spon1);
//         this.children.bringToTop(this.musicBtn);
//         this.children.bringToTop(this.logo);

//     });
//     this.dem1_final_spon1.on('dragend', () => {
//     if ((this.input.x>450 && this.input.x<810 && this.input.y>360 && this.input.y<500)){
//     this.dem1_final_spon1.setVisible(false);
//     this.final_cream1.alpha=1;
//     this.dem2_final_spon1.setVisible(true);
//     this.dem2_final_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.arrow4.setVisible(true);

//     this.arrow2.setVisible(false);

//     }

//     else{
//     this.arrow4.setVisible(true);

//     this.arrow2.setVisible(false);

//             this.dem1_final_spon1.setTexture('final_spon1');
//             this.dem1_final_spon1.x=1000;
//             this.dem1_final_spon1.y=200;
//         }

//     },this);

// ////////2

//     this.dem2_final_spon1 = this.add.image(1000,200,'final_spon1');
//     this.dem2_final_spon1.setVisible(false);
//     // this.dem2_final_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem2_final_spon1.on('drag', (pointer, dragX, dragY) => {
//         this.dem2_final_spon1.x = dragX;
//         this.dem2_final_spon1.y = dragY;
//         this.dem2_final_spon1.setTexture('final_spon2');
//     this.arrow4.setVisible(false);

//     this.arrow2.setVisible(true);

//         this.children.bringToTop(this.dem2_final_spon1);
//         this.children.bringToTop(this.musicBtn);
//         this.children.bringToTop(this.logo);

//     });
//     this.dem2_final_spon1.on('dragend', () => {
//     if ((this.input.x>450 && this.input.x<810 && this.input.y>360 && this.input.y<500)){
//     this.dem2_final_spon1.setVisible(false);
//     this.final_cream3.alpha=1;
//     this.dem3_final_spon1.setVisible(true);
//     this.dem3_final_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.arrow4.setVisible(true);

//     this.arrow2.setVisible(false);


//     }

//     else{
//     this.arrow4.setVisible(true);

//     this.arrow2.setVisible(false);

//             this.dem2_final_spon1.setTexture('final_spon1');
//             this.dem2_final_spon1.x=1000;
//             this.dem2_final_spon1.y=200;
//         }

//     },this);

// ////////3

//     this.dem3_final_spon1 = this.add.image(1000,200,'final_spon1');
//     this.dem3_final_spon1.setVisible(false);
//     // this.dem3_final_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem3_final_spon1.on('drag', (pointer, dragX, dragY) => {
//         this.dem3_final_spon1.x = dragX;
//         this.dem3_final_spon1.y = dragY;
//         this.dem3_final_spon1.setTexture('final_spon2');
//     this.arrow4.setVisible(false);

//     this.arrow2.setVisible(true);

//         this.children.bringToTop(this.dem3_final_spon1);
//         this.children.bringToTop(this.musicBtn);
//         this.children.bringToTop(this.logo);

//     });
//     this.dem3_final_spon1.on('dragend', () => {
//     if ((this.input.x>450 && this.input.x<810 && this.input.y>360 && this.input.y<500)){
//     this.dem3_final_spon1.setVisible(false);
//     this.final_cream2.alpha=1;
//     this.dem4_final_spon1.setVisible(true);
//     this.dem4_final_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.arrow4.setVisible(true);

//     this.arrow2.setVisible(false);


//     }

//     else{
//     this.arrow4.setVisible(true);

//     this.arrow2.setVisible(false);

//             this.dem3_final_spon1.setTexture('final_spon1');
//             this.dem3_final_spon1.x=1000;
//             this.dem3_final_spon1.y=200;
//         }

//     },this);

// ////////4

//     this.dem4_final_spon1 = this.add.image(1000,200,'final_spon1');
//     this.dem4_final_spon1.setVisible(false);
//     // this.dem4_final_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem4_final_spon1.on('drag', (pointer, dragX, dragY) => {
//         this.dem4_final_spon1.x = dragX;
//         this.dem4_final_spon1.y = dragY;
//         this.dem4_final_spon1.setTexture('final_spon2');
//     this.arrow4.setVisible(false);

//     this.arrow2.setVisible(true);

//         this.children.bringToTop(this.dem4_final_spon1);
//         this.children.bringToTop(this.musicBtn);
//         this.children.bringToTop(this.logo);

//     });
//     this.dem4_final_spon1.on('dragend', () => {
//     if ((this.input.x>450 && this.input.x<810 && this.input.y>360 && this.input.y<500)){
//     this.dem4_final_spon1.setVisible(false);
//     this.final_cream4.alpha=1;

//     this.drg_final_spon01.setVisible(true);
//     this.drg_final_spon01.setInteractive({useHandCursor:true});
//     this.children.bringToTop(this.drg_final_spon01);
//     this.drg_final_spon01.setInteractive({useHandCursor:true});
//     this.arrow4.setVisible(false);

//     this.arrow2.setVisible(true);

//     }

//     else{
//     this.arrow4.setVisible(true);

//     this.arrow2.setVisible(false);

//             this.dem4_final_spon1.setTexture('final_spon1');
//             this.dem4_final_spon1.x=1000;
//             this.dem4_final_spon1.y=200;
//         }

//     },this);

// ////////////////spon_drg//////////////////////

//     this.drg_final_spon01= this.physics.add.sprite(500, 350, 'final_spon1');
//     this.drg_final_spon01.setVisible(false);
//     // this.drg_final_spon01.setInteractive({useHandCursor:true});
//     this.drg_final_spon01.on('pointerdown',function(){
//     this.drg_final_spon01.setVisible(false);

//     this.drg_final_spon1.setVisible(true);
//     this.drg_final_spon1_drag=true;


//     this.children.bringToTop(this.drg_final_spon1);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);

//     },this);

// ////////////////////////////////

// this.drg_final_spon1 = this.add.sprite(500,350, "final_spon1");
// this.drg_final_spon1.setVisible(false);
// this.drg_final_spon1_drag=false;

//  const tool_2X = [463,505,578,642,706,771,736,671,596,519,561,630,727,];

//  const tool_2Y = [441,412,399,399,398,425,468,476,476,476,447,441,442,];

//     this.hitGroup_tool_2 = this.physics.add.group();
//     for (let i = 0; i < tool_2X.length; i++) {
//             const hitCircle_tool_2 = this.add.graphics();
//             hitCircle_tool_2.fillStyle(0x000000, 0);
//             hitCircle_tool_2.fillCircle(0, 0, 40);
//             hitCircle_tool_2.x = tool_2X[i];
//             hitCircle_tool_2.y = tool_2Y[i];
//             hitCircle_tool_2.id = i;
//             this.hitGroup_tool_2.add(hitCircle_tool_2);
//             this.physics.add.existing(hitCircle_tool_2);
//         }

//         this.hitSprite_tool_2_count = 0;

//         this.circleGroup_tool_2 = this.add.group();
//         this.circle_tool_2 = this.add.graphics();
//         this.circle_tool_2.fillStyle(0x000000, 0);
//         this.circleGroup_tool_2.add(this.circle_tool_2);
//         // this.l3_zoom_teeth_bluegum.visible = true;
//         // this.l3_zoom_teeth_bluegum.mask = new Phaser.Display.Masks.GeometryMask(this, this.circle_tool_2);

//         this.dragCircle_tool_2 = this.add.graphics();
//         this.dragCircle_tool_2.fillStyle(0x000000, 0);
//         this.dragCircle_tool_2.fillCircle(0, 0, 40);
//         this.physics.add.existing(this.dragCircle_tool_2);
//         this.physics.add.collider(this.dragCircle_tool_2, this.hitGroup_tool_2, hitSprite_group_tool_2, null, this);

// function hitSprite_group_tool_2(dragCircle_tool_2, hitCircle_tool_2) {
// const distance = Phaser.Math.Distance.Between(dragCircle_tool_2.x, dragCircle_tool_2.y, hitCircle_tool_2.x, hitCircle_tool_2.y);
// if (distance <= 80) {

//     const stepsize=1/ tool_2X.length;

//     this.final_cream1.alpha -= stepsize;
//     this.final_cream2.alpha -= stepsize;
//     this.final_cream3.alpha -= stepsize;
//     this.final_cream4.alpha -= stepsize;

//     this.fnl_crm_full.alpha += stepsize;

//         this.circle_tool_2.fillCircle(hitCircle_tool_2.x, hitCircle_tool_2.y, 40);
//         hitCircle_tool_2.destroy();
//         this.hitSprite_tool_2_count++;
//         if (this.hitSprite_tool_2_count >= tool_2X.length) {

//         this.drg_final_spon1.setVisible(false);
//         this.drg_final_spon1_drag=false;
//         this.arrow2.setVisible(false);

//     this.tweens.add({targets:this.jam_ams,x:260,ease: 'Quadratic',duration:1200,onComplete:() => { }},this);
//     this.tweens.add({targets:this.jam_top,x:200+60,ease: 'Quadratic',duration:1200,onComplete:() => {
//     this.wall_spon001.setInteractive({useHandCursor:true});
//         this.arrow5.setVisible(true);
//     this.wall_spon001.setVisible(true)

//     }},this);


//           }
//          }
//         }

// //////////////////////////////////////////

//     this.wall_spon001= this.physics.add.sprite(760, 170, 'wall_spon');
//     this.wall_spon001.setVisible(false)
//     // this.wall_spon001.setInteractive({useHandCursor:true});
//     this.wall_spon001.on('pointerdown',function(){
//     this.wall_spon001.setVisible(false);
//     this.arrow5.setVisible(false);

//     this.arrow6.setVisible(true);

//     // this.jam_spon1.setVisible(true);
//     // this.jam_spon1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});


//      this.red_spon.setVisible(true);
//      this.red_spon1.setVisible(false);
//      this.red_spon_drag=true;
//      this.red_spon1_drag=false;

//      this.children.bringToTop(this.red_spon);
//      this.children.bringToTop(this.logo);
//      this.children.bringToTop(this.musicBtn);
     

//     },this);

// ///////////////////biskt/////////////////////

//     this.bisket_plt= this.physics.add.sprite(200, 520, 'bisket_plt');

// /////////01

//     this.dem_bisket2= this.physics.add.sprite(170, 510, 'bisket');
//     // this.dem_bisket2.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem_bisket2.on('drag', (pointer, dragX, dragY) => {
//     this.dem_bisket2.x = dragX;
//     this.dem_bisket2.y = dragY;
//     this.bisket2.alpha=0.5;
//     this.arrow3.setVisible(false);
//     this.arrow2.setVisible(true);

//     this.children.bringToTop(this.dem_bisket2);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);

//     });
//     this.dem_bisket2.on('dragend', () => {
//     if ((this.input.x>450 && this.input.x<810 && this.input.y>360 && this.input.y<500)){
//         this.dem_bisket2.visible=false; 
//         this.bisket2.alpha=1;
//         this.dem_bisket3.setInteractive({useHandCursor:true,draggable:true,});
//     this.arrow3.setVisible(true);

//     this.arrow2.setVisible(false);

//         }

//     else{ 
//     this.arrow3.setVisible(true);

//     this.arrow2.setVisible(false);

//             this.bisket2.alpha=0;
//             this.dem_bisket2.x=170;
//             this.dem_bisket2.y=510;
//         }

//     },this);

// /////////02

//     this.dem_bisket3= this.physics.add.sprite(230, 510, 'bisket');
//     // this.dem_bisket3.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem_bisket3.on('drag', (pointer, dragX, dragY) => {
//     this.dem_bisket3.x = dragX;
//     this.dem_bisket3.y = dragY;
//     this.bisket3.alpha=0.5;
//     this.arrow3.setVisible(false);

//     this.arrow2.setVisible(true);

//     this.children.bringToTop(this.dem_bisket3);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);

//     });
//     this.dem_bisket3.on('dragend', () => {
//     if ((this.input.x>450 && this.input.x<810 && this.input.y>360 && this.input.y<500)){
//         this.dem_bisket3.visible=false; 
//         this.bisket3.alpha=1;
//         this.dem_bisket4.setInteractive({useHandCursor:true,draggable:true,});
//     this.arrow3.setVisible(true);

//     this.arrow2.setVisible(false);

//         }

//     else{ 
//     this.arrow3.setVisible(true);

//     this.arrow2.setVisible(false);

//             this.bisket3.alpha=0;
//             this.dem_bisket3.x=230;
//             this.dem_bisket3.y=510;
//         }

//     },this);

// /////////03

//     this.dem_bisket4= this.physics.add.sprite(270, 510, 'bisket');
//     // this.dem_bisket4.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem_bisket4.on('drag', (pointer, dragX, dragY) => {
//     this.dem_bisket4.x = dragX;
//     this.dem_bisket4.y = dragY;
//     this.bisket4.alpha=0.5;
//     this.arrow3.setVisible(false);

//     this.arrow2.setVisible(true);

//     this.children.bringToTop(this.dem_bisket4);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);

//     });
//     this.dem_bisket4.on('dragend', () => {
//     if ((this.input.x>450 && this.input.x<810 && this.input.y>360 && this.input.y<500)){
//         this.dem_bisket4.visible=false; 
//         this.bisket4.alpha=1;
//         this.wall_spon.setInteractive({useHandCursor:true});
//     this.arrow3.setVisible(false);
//     this.arrow2.setVisible(false);
//     this.arrow5.setVisible(true);

//         }

//     else{ 
//     this.arrow3.setVisible(true);

//     this.arrow2.setVisible(false);

//             this.bisket4.alpha=0;
//             this.dem_bisket4.x=270;
//             this.dem_bisket4.y=510;
//         }

//     },this);

// /////////04

//     this.dem_bisket1= this.physics.add.sprite(130, 510, 'bisket');
//     // this.dem_bisket1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem_bisket1.on('drag', (pointer, dragX, dragY) => {
//     this.dem_bisket1.x = dragX;
//     this.dem_bisket1.y = dragY;
//     this.bisket1.alpha=0.5;
//     this.arrow3.setVisible(false);

//     this.arrow2.setVisible(true);

//     this.children.bringToTop(this.dem_bisket1);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);

//     });
//     this.dem_bisket1.on('dragend', () => {
//     if ((this.input.x>450 && this.input.x<810 && this.input.y>360 && this.input.y<500)){
//         this.dem_bisket1.visible=false; 
//         this.bisket1.alpha=1;
//         this.dem_bisket2.setInteractive({useHandCursor:true,draggable:true,});
//     this.arrow3.setVisible(true);

//     this.arrow2.setVisible(false);

//         }

//     else{ 
//     this.arrow3.setVisible(true);

//     this.arrow2.setVisible(false);

//             this.bisket1.alpha=0;
//             this.dem_bisket1.x=130;
//             this.dem_bisket1.y=510;
//         }

//     },this);

// ///////////////////stber/////////////////////

//     this.stber_plt= this.physics.add.sprite(1020, 540, 'stber_plt');

// /////////01

//     this.stbar1_dme= this.physics.add.sprite(950, 530, 'stbar_move');
//     // this.stbar1_dme.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.stbar1_dme.on('drag', (pointer, dragX, dragY) => {
//     this.stbar1_dme.x = dragX;
//     this.stbar1_dme.y = dragY;
//     this.stbare_cup1.alpha=0.5;
//     this.arrow7.setVisible(false);

//     this.arrow2.setVisible(true);

//     this.children.bringToTop(this.stbar1_dme);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);

//     });
//     this.stbar1_dme.on('dragend', () => {
//     if ((this.input.x>450 && this.input.x<810 && this.input.y>360 && this.input.y<500)){
//         this.stbar1_dme.visible=false; 
//         this.stbare_cup1.alpha=1;
//         this.stbar2_dem.setInteractive({useHandCursor:true,draggable:true,});
//     this.arrow7.setVisible(true);

//     this.arrow2.setVisible(false);

//         }

//     else{ 
//     this.arrow7.setVisible(true);

//     this.arrow2.setVisible(false);

//             this.stbare_cup1.alpha=0;
//             this.stbar1_dme.x=950;
//             this.stbar1_dme.y=530;
//         }

//     },this);

// /////////02

//     this.stbar2_dem= this.physics.add.sprite(990, 530, 'stbar_move');
//     // this.stbar2_dem.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.stbar2_dem.on('drag', (pointer, dragX, dragY) => {
//     this.stbar2_dem.x = dragX;
//     this.stbar2_dem.y = dragY;
//     this.stbare_cup2.alpha=0.5;
//     this.arrow7.setVisible(false);

//     this.arrow2.setVisible(true);

//     this.children.bringToTop(this.stbar2_dem);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);

//     });
//     this.stbar2_dem.on('dragend', () => {
//     if ((this.input.x>450 && this.input.x<810 && this.input.y>360 && this.input.y<500)){
//         this.stbar2_dem.visible=false; 
//         this.stbare_cup2.alpha=1;
//         this.stbar3_dem.setInteractive({useHandCursor:true,draggable:true,});
//     this.arrow7.setVisible(true);

//     this.arrow2.setVisible(false);

//         }

//     else{ 
//     this.arrow7.setVisible(true);

//     this.arrow2.setVisible(false);

//             this.stbare_cup2.alpha=0;
//             this.stbar2_dem.x=990;
//             this.stbar2_dem.y=530;
//         }

//     },this);

// /////////03

//     this.stbar3_dem= this.physics.add.sprite(1030, 530, 'stbar_move');
//     // this.stbar3_dem.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.stbar3_dem.on('drag', (pointer, dragX, dragY) => {
//     this.stbar3_dem.x = dragX;
//     this.stbar3_dem.y = dragY;
//     this.stbare_cup3.alpha=0.5;
//     this.arrow7.setVisible(false);

//     this.arrow2.setVisible(true);

//     this.children.bringToTop(this.stbar3_dem);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);

//     });
//     this.stbar3_dem.on('dragend', () => {
//     if ((this.input.x>450 && this.input.x<810 && this.input.y>360 && this.input.y<500)){
//         this.stbar3_dem.visible=false; 
//         this.stbare_cup3.alpha=1;
//         this.stbar4_dem.setInteractive({useHandCursor:true,draggable:true,});
//     this.arrow7.setVisible(true);

//     this.arrow2.setVisible(false);

//         }

//     else{ 
//     this.arrow7.setVisible(true);

//     this.arrow2.setVisible(false);

//             this.stbare_cup3.alpha=0;
//             this.stbar3_dem.x=1030;
//             this.stbar3_dem.y=530;
//         }

//     },this);

// /////////04

//     this.stbar4_dem= this.physics.add.sprite(1080, 530, 'stbar_move');
//     // this.stbar4_dem.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.stbar4_dem.on('drag', (pointer, dragX, dragY) => {
//     this.stbar4_dem.x = dragX;
//     this.stbar4_dem.y = dragY;
//     this.stbare_cup4.alpha=0.5;
//     this.arrow7.setVisible(false);

//     this.arrow2.setVisible(true);

//     this.children.bringToTop(this.stbar4_dem);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);

//     });
//     this.stbar4_dem.on('dragend', () => {
//     if ((this.input.x>450 && this.input.x<810 && this.input.y>360 && this.input.y<500)){
//         this.stbar4_dem.visible=false; 
//         this.stbare_cup4.alpha=1;
//     this.arrow7.setVisible(false);

//     this.arrow2.setVisible(false);

//         this.time.delayedCall(200,() => {
//         this.done1.alpha=1;
//         this.done1.setInteractive({useHandCursor:true});
//         },this);

//         }

//     else{ 
//     this.arrow7.setVisible(true);

//     this.arrow2.setVisible(false);

//             this.stbare_cup4.alpha=0;
//             this.stbar4_dem.x=1080;
//             this.stbar4_dem.y=530;
//         }

//     },this);

// ////////////////////jam_ams///////////////////

//     this.jam_ams= this.physics.add.sprite(-1000, 360, 'jam_ams');
//     // this.jam_ams.play('jam_ams_key1');
//     this.jam_ams.on("animationcomplete",function() {


//     },this);


//     this.anims.create({key: 'jam_ams_key1',
//     frames: this.anims.generateFrameNames('jam_ams', 
//     { start: 0, end: 1, zeroPad: 1, prefix: 'jam_ams' }),
//     frameRate: 8 });  

//     this.anims.create({key: 'jam_ams_key2',
//     frames: this.anims.generateFrameNames('jam_ams', 
//     { start: 1, end: 2, zeroPad: 1, prefix: 'jam_ams' }),
//     frameRate: 8 });  

//     this.anims.create({key: 'jam_ams_key3',
//     frames: this.anims.generateFrameNames('jam_ams', 
//     { start: 2, end: 3, zeroPad: 1, prefix: 'jam_ams' }),
//     frameRate: 8 });  

//     this.anims.create({key: 'jam_ams_key4',
//     frames: this.anims.generateFrameNames('jam_ams', 
//     { start: 3, end: 4, zeroPad: 1, prefix: 'jam_ams' }),
//     frameRate: 8 });   

//     this.anims.create({key: 'jam_ams_key5',
//     frames: this.anims.generateFrameNames('jam_ams', 
//     { start: 4, end: 5, zeroPad: 1, prefix: 'jam_ams' }),
//     frameRate: 8 });

// ////////////////////jam_spn///////////////////b2222222222222222222
// ///////0

//     this.jam_spon1= this.physics.add.sprite(200, 280, 'jam_spon').setScale(0.9);
//     this.jam_spon1.setVisible(false);
//     // this.jam_spon1.setInteractive({useHandCursor:true});
//     this.jam_spon1.on('pointerdown',function(){
//     this.arrow6.setVisible(false);


//     this.jam_spon1.disableInteractive();
//     this.jam_spon1.setVisible(false);
//     this.jam_spon01.setVisible(true);
//     this.jam_spon01.play('jam_spon_key1');

//     },this);

// ////////////////////////////////////////////////////

// this.n1_point1 = this.physics.add.sprite(260, 340, 'circul').setAlpha(0).setScale(3);
//       this.n1_point2 = this.physics.add.sprite(0, 0, 'circul').setAlpha(0);
//       this.physics.add.collider(this.n1_point1, this.n1_point2, function () {
//       this.n1_point1.destroy();
//       this.n1_point2.destroy();
//     this.arrow6.setVisible(false);

//     this.red_spon.setVisible(false);
//     this.red_spon1.setVisible(true);
//     this.red_spon_drag=false;
//     this.red_spon1_drag=true;

//     this.click_rect01.setInteractive({useHandCursor:true});

//     this.children.bringToTop(this.red_spon1);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);



//      }, null, this);

//    ////////////////


//       this.n2_point1 = this.physics.add.sprite(260, 340, 'circul').setAlpha(0).setScale(3);
//       this.n2_point2 = this.physics.add.sprite(0, 0, 'circul').setAlpha(0);

//       this.physics.add.collider(this.n2_point1, this.n2_point2, function () {
//       this.n2_point1.destroy();
//       this.n2_point2.destroy();


//     this.red_spon2.setVisible(false);
//     this.red_spon1.setVisible(true);
//     this.red_spon2_drag=false;
//     this.red_spon1_drag=true;

//     this.click_rect02.setInteractive({useHandCursor:true});

//     this.children.bringToTop(this.red_spon1);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);


//      }, null, this);

   
//       this.n3_point1 = this.physics.add.sprite(260, 340, 'circul').setAlpha(0).setScale(3);
//       this.n3_point2 = this.physics.add.sprite(0, 0, 'circul').setAlpha(0);

//       this.physics.add.collider(this.n3_point1, this.n3_point2, function () {
//       this.n3_point1.destroy();
//       this.n3_point2.destroy();



//     this.red_spon3.setVisible(false);
//     this.red_spon1.setVisible(true);
//     this.red_spon3_drag=false;
//     this.red_spon1_drag=true;

//     this.click_rect03.setInteractive({useHandCursor:true});

//     this.children.bringToTop(this.red_spon1);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);



//      }, null, this);
   
//       this.n4_point1 = this.physics.add.sprite(260, 340, 'circul').setAlpha(0).setScale(3);
//       this.n4_point2 = this.physics.add.sprite(0, 0, 'circul').setAlpha(0);

//       this.physics.add.collider(this.n4_point1, this.n4_point2, function () {
//       this.n4_point1.destroy();
//       this.n4_point2.destroy();


//     this.red_spon4.setVisible(false);
//     this.red_spon1.setVisible(true);
//     this.red_spon4_drag=false;
//     this.red_spon1_drag=true;

//     this.click_rect04.setInteractive({useHandCursor:true});

//     this.children.bringToTop(this.red_spon1);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);




//      }, null, this);


//     this.red_spon= this.physics.add.sprite(200, 280, 'red_spon');
//     this.red_spon.setVisible(false);


//     this.red_spon1= this.physics.add.sprite(200, 280, 'red_spon1');
//     this.red_spon1.setVisible(false);

//     this.red_spon2= this.physics.add.sprite(200, 280, 'red_spon');
//     this.red_spon2.setVisible(false);

//     this.red_spon3= this.physics.add.sprite(200, 280, 'red_spon');
//     this.red_spon3.setVisible(false);

//     this.red_spon4= this.physics.add.sprite(200, 280, 'red_spon');
//     this.red_spon4.setVisible(false);



// ///////1

//     this.click_rect001 = this.add.rectangle(260, 350, 150, 180, 0xff0000,0).setOrigin(0.5);
//     // this.click_rect001.setInteractive({useHandCursor:true});
//     this.click_rect001.on('pointerdown',function(){
//     this.jam_spon01.setVisible(false);
//     this.jam_spon02.setVisible(true);
//     this.jam_spon02.play('jam_spon_key2');

//     },this);

// ///////2

//     this.click_rect002 = this.add.rectangle(260, 350, 150, 180, 0xff0000,0).setOrigin(0.5);
//     // this.click_rect002.setInteractive({useHandCursor:true});
//     this.click_rect002.on('pointerdown',function(){
//     this.jam_spon02.setVisible(false);
//     this.jam_spon03.setVisible(true);
//     this.jam_spon03.play('jam_spon_key3');

//     },this);

// ///////3

//     this.click_rect003 = this.add.rectangle(260, 350, 150, 180, 0xff0000,0).setOrigin(0.5);
//     // this.click_rect003.setInteractive({useHandCursor:true});
//     this.click_rect003.on('pointerdown',function(){
//     this.jam_spon03.setVisible(false);
//     this.jam_spon04.setVisible(true);
//     this.jam_spon04.play('jam_spon_key4');

//     },this);

// ///////////ames/////////////
// ///////1

//     this.jam_spon01= this.physics.add.sprite(200, 260, 'jam_spon').setScale(0.9);
//     this.jam_spon01.setVisible(false);
//     this.jam_spon01.on("animationcomplete",function() {
//     this.click_rect01.setInteractive({useHandCursor:true});
//     this.jam_spon01_drag=true;

//     this.children.bringToTop(this.jam_spon01)
//     this.children.bringToTop(this.musicBtn)
//     this.children.bringToTop(this.logo)


//     },this);
//     this.anims.create({key: 'jam_spon_key1',
//     frames: this.anims.generateFrameNames('jam_spon', 
//     { start: 0, end: 6, zeroPad: 1, prefix: 'jam_spon' }),
//     frameRate: 8 });

// ///////2

//     this.jam_spon02= this.physics.add.sprite(200, 260, 'jam_spon').setScale(0.9);
//     this.jam_spon02.setVisible(false);
//     this.jam_spon02.on("animationcomplete",function() {
//     this.click_rect02.setInteractive({useHandCursor:true});
//     this.jam_spon02_drag=true;

//     this.children.bringToTop(this.jam_spon02)
//     this.children.bringToTop(this.musicBtn)
//     this.children.bringToTop(this.logo)


//     },this);
//     this.anims.create({key: 'jam_spon_key2',
//     frames: this.anims.generateFrameNames('jam_spon', 
//     { start: 0, end: 6, zeroPad: 1, prefix: 'jam_spon' }),
//     frameRate: 8 });

// ///////3

//     this.jam_spon03= this.physics.add.sprite(200, 260, 'jam_spon').setScale(0.9);
//     this.jam_spon03.setVisible(false);
//     this.jam_spon03.on("animationcomplete",function() {
//     this.click_rect03.setInteractive({useHandCursor:true});
//     this.jam_spon03_drag=true;

//     this.children.bringToTop(this.jam_spon03)
//     this.children.bringToTop(this.musicBtn)
//     this.children.bringToTop(this.logo)


//     },this);
//     this.anims.create({key: 'jam_spon_key3',
//     frames: this.anims.generateFrameNames('jam_spon', 
//     { start: 0, end: 6, zeroPad: 1, prefix: 'jam_spon' }),
//     frameRate: 8 });

// ///////4

//     this.jam_spon04= this.physics.add.sprite(200, 260, 'jam_spon').setScale(0.9);
//     this.jam_spon04.setVisible(false);
//     this.jam_spon04.on("animationcomplete",function() {
//     this.click_rect04.setInteractive({useHandCursor:true});
//     this.jam_spon04_drag=true;

//     this.children.bringToTop(this.jam_spon04)
//     this.children.bringToTop(this.musicBtn)
//     this.children.bringToTop(this.logo)


//     },this);
//     this.anims.create({key: 'jam_spon_key4',
//     frames: this.anims.generateFrameNames('jam_spon', 
//     { start: 0, end: 6, zeroPad: 1, prefix: 'jam_spon' }),
//     frameRate: 8 });

// ////////////////

//     this.jam_top= this.physics.add.sprite(-1000, 360,'jam_top');

// /////////////////food_cup///////////////////

//     this.food_cup_btm= this.physics.add.sprite(630, 460,'food_cup_btm');

//     this.blow_butter= this.physics.add.sprite(630, 440, 'blow_butter');
//     this.blow_butter.alpha=0;

//     this.box_food1= this.physics.add.sprite(630, 450, 'box_food1');

// /////////bisket////////

//     this.bisket1= this.physics.add.sprite(745, 450, 'bisket');
//     this.bisket1.alpha=0;

//     this.bisket2= this.physics.add.sprite(670, 450, 'bisket');
//     this.bisket2.alpha=0;

//     this.bisket3= this.physics.add.sprite(590, 450, 'bisket');
//     this.bisket3.alpha=0;

//     this.bisket4= this.physics.add.sprite(515, 450, 'bisket');
//     this.bisket4.alpha=0;

// /////////rice////////

//     this.final_cream1= this.physics.add.sprite(730, 440, 'final_cream');
//     this.final_cream1.alpha=0;

//     this.final_cream2= this.physics.add.sprite(610, 440, 'final_cream');
//     this.final_cream2.alpha=0;  

//     this.final_cream3= this.physics.add.sprite(670, 460, 'final_cream');
//     this.final_cream3.alpha=0; 

//     this.final_cream4= this.physics.add.sprite(540, 450, 'final_cream');
//     this.final_cream4.alpha=0;

// /////////shap////////

//     // this.fnl_crm_1= this.physics.add.sprite(710, 450, 'fnl_crm_1');
//     // this.fnl_crm_1.alpha=0;

//     // this.fnl_crm_2= this.physics.add.sprite(550, 450, 'fnl_crm_2');
//     // this.fnl_crm_2.alpha=0;

//     this.fnl_crm_full= this.physics.add.sprite(630, 450, 'fnl_crm_full');
//     this.fnl_crm_full.alpha=0;

// /////////jam////////

//     this.final_jam1= this.physics.add.sprite(630, 440, 'final_jam1');
//     this.final_jam1.alpha=0; 

//     this.final_jam2= this.physics.add.sprite(630, 440, 'final_jam2');
//     this.final_jam2.alpha=0; 

//     this.final_jam3= this.physics.add.sprite(630, 440, 'final_jam3');
//     this.final_jam3.alpha=0; 

//     this.final_jam4= this.physics.add.sprite(630, 440, 'final_jam4');
//     this.final_jam4.alpha=0;

//     this.stbare_cup1= this.physics.add.sprite(675, 440, 'stbare_cup1');
//     this.stbare_cup1.alpha=0;

//     this.stbare_cup2= this.physics.add.sprite(675, 440, 'stbare_cup2');
//     this.stbare_cup2.alpha=0;

//     this.stbare_cup3= this.physics.add.sprite(675, 440, 'stbare_cup3');
//     this.stbare_cup3.alpha=0;

//     this.stbare_cup4= this.physics.add.sprite(675, 440, 'stbare_cup4');
//     this.stbare_cup4.alpha=0;

// ////////////////////////

//     this.food_cup_top= this.physics.add.sprite(630, 460, 'food_cup_top');

// ////////////////jam_dwn//////////////
// /////////1

//     this.click_rect01 = this.add.rectangle(630, 460, 350, 200, 0xff0000,0).setOrigin(0.5);
//     // this.click_rect01.setInteractive({useHandCursor:true});
//     this.click_rect01.on('pointerdown',function(){
//     this.final_jam1.alpha=1;
//     this.jam_spon01.setFrame('jam_spon1');


//     // this.click_rect001.setInteractive({useHandCursor:true});

//     this.red_spon1_drag=false;
//      this.red_spon1.setVisible(false);

//      this.red_spon2_drag=true;
//      this.red_spon2.setVisible(true);

//     this.children.bringToTop(this.red_spon2);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);

//     },this);  

// /////////2

//     this.click_rect02 = this.add.rectangle(630, 460, 350, 200, 0xff0000,0).setOrigin(0.5);
//     // this.click_rect02.setInteractive({useHandCursor:true});
//     this.click_rect02.on('pointerdown',function(){
//     this.final_jam2.alpha=1;
//     this.jam_spon02.setFrame('jam_spon1');
//     // this.click_rect002.setInteractive({useHandCursor:true});


//      this.red_spon1_drag=false;
//      this.red_spon1.setVisible(false);

//      this.red_spon3_drag=true;
//      this.red_spon3.setVisible(true);

//     this.children.bringToTop(this.red_spon3);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);

//     },this);

// /////////2

//     this.click_rect03 = this.add.rectangle(630, 460, 350, 200, 0xff0000,0).setOrigin(0.5);
//     // this.click_rect03.setInteractive({useHandCursor:true});
//     this.click_rect03.on('pointerdown',function(){
//     this.final_jam3.alpha=1;
//     this.jam_spon03.setFrame('jam_spon1');
//     // this.click_rect003.setInteractive({useHandCursor:true});

//      this.red_spon1_drag=false;
//      this.red_spon1.setVisible(false);

//      this.red_spon4_drag=true;
//      this.red_spon4.setVisible(true);

//     this.children.bringToTop(this.red_spon4);
//     this.children.bringToTop(this.musicBtn);
//     this.children.bringToTop(this.logo);


//     },this);

// /////////2

//     this.click_rect04 = this.add.rectangle(630, 460, 350, 200, 0xff0000,0).setOrigin(0.5);
//     // this.click_rect04.setInteractive({useHandCursor:true});
//     this.click_rect04.on('pointerdown',function(){
//     this.final_jam4.alpha=1;
//     this.jam_spon04.setFrame('jam_spon1');

//        this.red_spon1_drag=false;
//        this.red_spon1.setVisible(false);

//     this.time.delayedCall(500,() => {
//     this.arrow7.setVisible(true);
//     this.arrow7.setVisible(true);
//     this.jam_spon04.setVisible(false);
//     this.stbar1_dme.setInteractive({useHandCursor:true,draggable:true,});
//     },this);

//     },this);

// //////////////done_btn////////////////////

//     this.done1=this.add.image(1190,640,'btn5');
//     this.done1.alpha=0;
//     this.done1.setInteractive({useHandCursor:true});
//     this.done1.on('pointerdown',function(){

//     this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     var state = 'l3_ferger_box';
//     MyShowAD(this, state);
//     }},this);
    

//     },this);

// ////////////////////arrow///////////////////////

//      var arrow_Posx = [240,630,200,1080,910,250,1010,];
//      var arrow_Posy = [150,350,380,90,90,140,380,];
             
             
//     for (var i = 1; i <= 50; i++) {
//         this['arrow' + i] = this.add.sprite(arrow_Posx[i - 1], arrow_Posy[i - 1], 'arrow');
//         this['arrow' + i].setOrigin(0.5);
//         this['arrow' + i].anims.create({key: 'arrow',
//             frames: this.anims.generateFrameNumbers('arrow', { start: 0, end: 8 }),
//             frameRate: 20,
//             repeat: -1
//     });

//     this['arrow' + i].anims.play('arrow');
//     this['arrow' + i].setVisible(false);

//     if (i === 5 ) {
//         this['arrow' + i].setVisible(false);
//         this['arrow' + i].rotation=1.58;
//         }

//     // if (i === 1 ) {
//     //     this['arrow' + i].setVisible(false);
//     //     this['arrow' + i].rotation=1.58;
//     //     }

//     // if (i === 6 ) {
//     //     this['arrow' + i].setVisible(false);
//     //     this['arrow' + i].rotation=-1.58;
//     //     }            
            
//     }

// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////

//        this.playbtn=this.add.image(1190,640,'btn2').setOrigin(0.5, 0.5).setScale(0);
//         this.playbtn.setInteractive({ useHandCursor: true });
//         this.playbtn.on('pointerover',function(){this.playbtn.setScale(1.05)},this);
//         this.playbtn.on('pointerout',function(){this.playbtn.setScale(1)},this);
//         this.playbtn.on('pointerdown',this.enterRoom,this);

//         this.morebtn=this.add.image(60,660,'btn4').setOrigin(0.5, 0.5).setScale(0);
//         this.morebtn.setInteractive({ useHandCursor: true });
//         this.morebtn.on('pointerover',function(){this.morebtn.setScale(1.05)},this);
//         this.morebtn.on('pointerout',function(){this.morebtn.setScale(1)},this);
//         this.morebtn.on('pointerup',this.morebtnLink,this);

//          this.logo =this.add.image(165,55,'logo').setScale(0.65);
//         this.logo.setInteractive({pixelPerfect:true});
//         this.logo.on('pointerup',this.LogoLink,this);

//           this.musicBtn = this.add.sprite(1212,50,"music-on");
//         this.musicBtn.setInteractive();
//         this.musicBtn.on('pointerup',this.changemusic,this);

//     // this.shutter_group = this.add.container();
//     // this.shutter_bg =this.add.image(320,360,'shutter_bg');
//     // this.shutter_bg2 =this.add.image(960,360,'shutter_bg2');
//     // this.shutter_group.add(this.shutter_bg);
//     // this.shutter_group.add(this.shutter_bg2);

//     // this.tweens.add({targets:this.shutter_group,y:-720,ease: 'Quadratic',duration:1200,onComplete:() => {
//     this.dem_bisket1.setInteractive({useHandCursor:true,draggable:true,});
//     this.arrow3.setVisible(true);

//     // }},this);


//         if (!this.sound.mute) {
//         this.musicBtn.setTexture('music-on');
//         } else {
//         this.musicBtn.setTexture('music-off');
//         }
// }
// update() {
//   // console.log(this.input.x + ':' + this.input.y); 

//   if (this.dummy_drag) {
//         this.dummy.x = this.input.activePointer.x ;
//         this.dummy.y = this.input.activePointer.y;
//         }

//   if (this.drg_final_spon1_drag) {
//         this.drg_final_spon1.x = this.input.activePointer.x-50;
//         this.drg_final_spon1.y = this.input.activePointer.y-50;

//         this.dragCircle_tool_2.x = this.input.activePointer.x;
//         this.dragCircle_tool_2.y = this.input.activePointer.y;

//         } 


//   // if (this.jam_spon01_drag) {
//   //       this.jam_spon01.x = this.input.activePointer.x-50;
//   //       this.jam_spon01.y = this.input.activePointer.y+20;
//   //       }  

//   // if (this.jam_spon02_drag) {
//   //       this.jam_spon02.x = this.input.activePointer.x-50;
//   //       this.jam_spon02.y = this.input.activePointer.y+20;
//   //       }   

//   // if (this.jam_spon03_drag) {
//   //       this.jam_spon03.x = this.input.activePointer.x-50;
//   //       this.jam_spon03.y = this.input.activePointer.y+20;
//   //       } 

//   // if (this.jam_spon04_drag) {
//   //       this.jam_spon04.x = this.input.activePointer.x-50;
//   //       this.jam_spon04.y = this.input.activePointer.y+20;
//   //       } 



//         if (this.red_spon1_drag) {
//         this.red_spon1.x = this.input.activePointer.x-50;
//         this.red_spon1.y = this.input.activePointer.y-50;
//         } 



//         if (this.red_spon_drag) {

//         this.red_spon.x = this.input.activePointer.x-50;
//         this.red_spon.y = this.input.activePointer.y-50;

//         this.n1_point2.x = this.input.activePointer.x;
//         this.n1_point2.y = this.input.activePointer.y;

//         } 



//         if (this.red_spon2_drag) {

//         this.red_spon2.x = this.input.activePointer.x-50;
//         this.red_spon2.y = this.input.activePointer.y-50;

//         this.n2_point2.x = this.input.activePointer.x;
//         this.n2_point2.y = this.input.activePointer.y;

//         } 


//         if (this.red_spon3_drag) {

//         this.red_spon3.x = this.input.activePointer.x-50;
//         this.red_spon3.y = this.input.activePointer.y-50;

//         this.n3_point2.x = this.input.activePointer.x;
//         this.n3_point2.y = this.input.activePointer.y;

//         } 

//         if (this.red_spon4_drag) {

//         this.red_spon4.x = this.input.activePointer.x-50;
//         this.red_spon4.y = this.input.activePointer.y-50;

//         this.n4_point2.x = this.input.activePointer.x;
//         this.n4_point2.y = this.input.activePointer.y;

//         } 

//   }
          
// morebtnLink (){
//   YYGGames.navigate("game", "morebutton");
// }
// LogoLink (){
//       YYGGames.navigate("game", "logo");
// }
// enterRoom (){

//     this.anims.remove('jam_spon_key1');
//     this.anims.remove('jam_spon_key2');
//     this.anims.remove('jam_spon_key3');
//     this.anims.remove('jam_spon_key4');

//     // this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     // var state = 'finalscreen';
//     // MyShowAD(this, state);
//     // }},this);

//    }
  
// changemusic() {
//      if (!this.sound.mute) {
//     this.musicBtn.setTexture('music-off');
//     this.sound.mute = true;
//   } else {
//     this.musicBtn.setTexture('music-on');
//     this.sound.mute = false;
//   }
//   }   
// }


// //////////////////////////////////////////
// //////////////////////////////////////////

// class l3_ferger_box extends Phaser.Scene {

// constructor() {
//  super('l3_ferger_box');
// }
//  create() {
     
//     this.levelGroup = this.add.container();

//     // this.title_bg = this.add.sprite(320,360, "title_bg");
//     // this.title_bg2 = this.add.sprite(960,360, "title_bg2");

//     // this.levelGroup.add(this.title_bg);
//     // this.levelGroup.add(this.title_bg2);

// ///////////////////////////////////////////////////////

//     this.cook_bg1 = this.add.sprite(320,360, "cook_bg1");

//     this.cook_bg2 = this.add.sprite(960,360, "cook_bg2");

// ///////////////////////freezer/////////////////////

//     this.freezer1 = this.add.sprite(930,360, "freezer1");

// ////////01

//     this.click_rect1 = this.add.rectangle(880, 400, 550, 350, 0xff0000,0).setOrigin(0.5);
//     // this.click_rect1.setInteractive({useHandCursor:true});
//     this.click_rect1.on('pointerdown',function(){
//     this.click_rect1.disableInteractive();
//     this.freezer1.setTexture('freezer2');
//     this.dem_ferger_food.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.arrow1.setVisible(false);
//     this.arrow2.setVisible(true);


//     },this);

// ////////02

//     this.click_rect2 = this.add.rectangle(880, 400, 550, 350, 0xff0000,0).setOrigin(0.5);
//     // this.click_rect2.setInteractive({useHandCursor:true});
//     this.click_rect2.on('pointerdown',function(){
//     this.click_rect2.disableInteractive();
//     this.freezer1.setTexture('freezer1');
//     this.ferger_food.alpha=0;
//     this.arrow3.setVisible(false);

//        this.number.setVisible(true);
//         this.spiner_ams.setVisible(false);
//         this.spiner_ams.play('spiner_ams_key');
//         this.number.play('number_key');

//     // this.time_liner3.setVisible(true);
//     // this.time_liner3.play('time_liner3_key');

 
//     },this);   

// ////////03

//     this.click_rect3 = this.add.rectangle(880, 400, 550, 350, 0xff0000,0).setOrigin(0.5);
//     // this.click_rect3.setInteractive({useHandCursor:true});
//     this.click_rect3.on('pointerdown',function(){
//     this.click_rect3.disableInteractive();
//     this.freezer1.setTexture('freezer2');
//     this.ferger_food.setVisible(false);
//     this.arrow1.setVisible(false);
//     this.arrow3.setVisible(true);

//     this.dem1_ferger_food.setVisible(true);
//     this.dem1_ferger_food.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});

//     },this);

// ///////////////////food/////////////////

//     this.ferger_food = this.add.sprite(840,350, "ferger_food").setScale(0.8);
//     this.ferger_food.alpha=0;

//     this.ferger_food1 = this.add.sprite(300,450, "ferger_food").setScale(0.8);
//     this.ferger_food1.alpha=0;

// /////////////02

//     this.dem1_ferger_food = this.add.sprite(840,350, "ferger_food").setScale(0.8);
//     this.dem1_ferger_food.setVisible(false);
//     // this.dem1_ferger_food.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem1_ferger_food.on('drag', (pointer, dragX, dragY) => {
//     this.dem1_ferger_food.x = dragX;
//     this.dem1_ferger_food.y = dragY;
//     this.arrow3.setVisible(false);
//     this.arrow2.setVisible(true);

//     });

//     this.dem1_ferger_food.on('dragend', () => {
//     if ((this.input.x>60 && this.input.x<440 && this.input.y>240 && this.input.y<560)){
//         this.dem1_ferger_food.visible=false; 
//         this.ferger_food1.alpha=1;
//         this.done2.alpha=1;  
//     this.arrow3.setVisible(false);
//     this.arrow2.setVisible(false);
  

//     }

//     else{

//     this.arrow3.setVisible(true);
//     this.arrow2.setVisible(false);

//           this.dem1_ferger_food.x=840;
//           this.dem1_ferger_food.y=350;
//         }

//     },this);

// /////////////01

//     this.dem_ferger_food = this.add.sprite(300,450, "ferger_food").setScale(0.8);
//     // this.dem_ferger_food.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//     this.dem_ferger_food.on('drag', (pointer, dragX, dragY) => {
//     this.dem_ferger_food.x = dragX;
//     this.dem_ferger_food.y = dragY;
//     this.arrow2.setVisible(false);
//     this.arrow3.setVisible(true);

//     });

//     this.dem_ferger_food.on('dragend', () => {
//     if ((this.input.x>600 && this.input.x<1150 && this.input.y>240 && this.input.y<560)){
//         this.dem_ferger_food.visible=false; 
//         this.ferger_food.alpha=1;
//         this.click_rect2.setInteractive({useHandCursor:true});
//     this.arrow2.setVisible(false);
//     this.arrow3.setVisible(true);
                                    
//     }

//     else{

//     this.arrow2.setVisible(true);
//     this.arrow3.setVisible(false);

//           this.dem_ferger_food.x=300;
//           this.dem_ferger_food.y=450;
//     }

//     },this);

// ////////////amns////////////
// /////////////01

//     this.spiner_ams= this.physics.add.sprite(910, 420, 'spiner_ams');
//     this.spiner_ams.setVisible(false);
//     // this.spiner_ams.play('spiner_ams_key');
//     this.spiner_ams.on("animationcomplete",function() {

//     },this);
//     this.anims.create({key: 'spiner_ams_key',
//     frames: this.anims.generateFrameNames('spiner_ams', 
//     { start: 0, end: 7, zeroPad: 1, prefix: 'spiner_ams' }),
//     frameRate: 3,repeat:-1 });  

// /////////////02

//     this.number= this.physics.add.sprite(910, 421, 'number').setScale(0.8);
//     this.number.setVisible(false);
//     // this.number.play('number_key');
//     this.number.on("animationcomplete",function() {
//     this.number.setVisible(false);
//     this.spiner_ams.setVisible(false);
//     this.click_rect3.setInteractive({useHandCursor:true});
//     this.arrow1.setVisible(true);

//     // this.time_liner3.setVisible(false);

//     },this);
//     this.anims.create({key: 'number_key',
//     frames: this.anims.generateFrameNames('number', 
//     { start: 9, end: 15, zeroPad: 1, prefix: 'number' }),
//     frameRate: 1,});

// //////////////done_btn////////////////////

//     this.done2=this.add.image(1190,640,'btn5');
//     this.done2.alpha=0;
//     this.done2.setInteractive({useHandCursor:true});
//     this.done2.on('pointerdown',function(){

//     this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     var state = 'l3_dekraction_lavel';
//     MyShowAD(this, state);
//     }},this);
    

//     },this);

//     //  this.time_liner3 = this.add.sprite(650,630, "time_liner");
//     // this.time_liner3.setVisible(false);

//     //     this.time_liner3Frame1 = this.anims.generateFrameNames('time_liner', {start: 0,end: 14,zeroPad: 1,
//     //     prefix: 'time_liner'});
//     //     this.anims.create({key: 'time_liner3_key',frames: this.time_liner3Frame1,frameRate:1,}); 
//     //     this.time_liner3.on("animationcomplete",function() {

//     //    },this);

// ////////////////////arrow///////////////////////

//     var arrow_Posx = [660,300,850,];
//     var arrow_Posy = [150,330,250,];
             
//     for (var i = 1; i <= 50; i++) {
//         this['arrow' + i] = this.add.sprite(arrow_Posx[i - 1], arrow_Posy[i - 1], 'arrow');
//         this['arrow' + i].setOrigin(0.5);
//         this['arrow' + i].anims.create({key: 'arrow',
//             frames: this.anims.generateFrameNumbers('arrow', { start: 0, end: 8 }),
//             frameRate: 20,
//             repeat: -1
//     });

//     this['arrow' + i].anims.play('arrow');
//     this['arrow' + i].setVisible(false);

//     // if (i === 1 ) {
//     //     this['arrow' + i].setVisible(false);
//     //     this['arrow' + i].rotation=1.58;
//     //     }

//     // if (i === 6 ) {
//     //     this['arrow' + i].setVisible(false);
//     //     this['arrow' + i].rotation=-1.58;
//     //     }            
            
//     }


// //////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////

//        this.playbtn=this.add.image(1190,640,'btn2').setOrigin(0.5, 0.5).setScale(0);
//         this.playbtn.setInteractive({ useHandCursor: true });
//         this.playbtn.on('pointerover',function(){this.playbtn.setScale(1.05)},this);
//         this.playbtn.on('pointerout',function(){this.playbtn.setScale(1)},this);
//         this.playbtn.on('pointerdown',this.enterRoom,this);

//         this.morebtn=this.add.image(60,660,'btn4').setOrigin(0.5, 0.5).setScale(0);
//         this.morebtn.setInteractive({ useHandCursor: true });
//         this.morebtn.on('pointerover',function(){this.morebtn.setScale(1.05)},this);
//         this.morebtn.on('pointerout',function(){this.morebtn.setScale(1)},this);
//         this.morebtn.on('pointerup',this.morebtnLink,this);

//          this.logo =this.add.image(165,55,'logo').setScale(0.65);
//         this.logo.setInteractive({pixelPerfect:true});
//         this.logo.on('pointerup',this.LogoLink,this);

//           this.musicBtn = this.add.sprite(1212,50,"music-on");
//         this.musicBtn.setInteractive();
//         this.musicBtn.on('pointerup',this.changemusic,this);

//     this.shutter_group = this.add.container();
//     this.shutter_bg =this.add.image(320,360,'shutter_bg');
//     this.shutter_bg2 =this.add.image(960,360,'shutter_bg2');
//     this.shutter_group.add(this.shutter_bg);
//     this.shutter_group.add(this.shutter_bg2);

//     this.tweens.add({targets:this.shutter_group,y:-720,ease: 'Quadratic',duration:1200,onComplete:() => {
//     this.click_rect1.setInteractive({useHandCursor:true});
//     this.arrow1.setVisible(true);

//     }},this);

//         if (!this.sound.mute) {
//         this.musicBtn.setTexture('music-on');
//         } else {
//         this.musicBtn.setTexture('music-off');
//         }
// }
// update() {
//   // console.log(this.input.x + ':' + this.input.y); 

//   if (this.dummy_drag) {
//         this.dummy.x = this.input.activePointer.x ;
//         this.dummy.y = this.input.activePointer.y;
//         } 



//   }
          
// morebtnLink (){
//   YYGGames.navigate("game", "morebutton");
// }
// LogoLink (){
//       YYGGames.navigate("game", "logo");
// }
// enterRoom (){

//         this.anims.remove('spiner_ams_key');
//         this.anims.remove('number_key');

//     this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     var state = 'finalscreen';
//     MyShowAD(this, state);
//     }},this);
//    }
  
// changemusic() {
//      if (!this.sound.mute) {
//     this.musicBtn.setTexture('music-off');
//     this.sound.mute = true;
//   } else {
//     this.musicBtn.setTexture('music-on');
//     this.sound.mute = false;
//   }
//   }   
// }


// ////////////////////////////////////////////////////////
// ///////////////////l3_dekraction_lavel//////////////////

// class l3_dekraction_lavel extends Phaser.Scene {

// constructor() {
//  super('l3_dekraction_lavel');
// }
//  create() {
     
//     this.levelGroup = this.add.container();

//     // this.title_bg = this.add.sprite(320,360, "title_bg");
//     // this.title_bg2 = this.add.sprite(960,360, "title_bg2");

//     // this.levelGroup.add(this.title_bg);
//     // this.levelGroup.add(this.title_bg2);

// //////////////////////////////////////////////////

//     this.l3_dekrt_bg1 = this.add.sprite(320,360, "l3_dekrt_bg1");

//     this.l3_dekrt_bg2 = this.add.sprite(960,360, "l3_dekrt_bg2");

// ///////////////////////////////////////////

//     this.l3_dkrt_juice1 = this.add.sprite(1020,280, "l3_dkrt_juice"+Main.dekrat_array[1]);

//     this.l3_dkrt_cup1 = this.add.sprite(730,500, "l3_dkrt_cup"+Main.dekrat_array[0]);

//     this.dkrt_plt_food = this.add.sprite(730,500, "dkrt_plt_food").setScale(1.2);

//     this.l3_dkrt_cup_top1 = this.add.sprite(730,500, "l3_dkrt_cup_top"+Main.dekrat_array[0]);

//     this.l3_dkrt_spon1 = this.add.sprite(1170,530, "l3_dkrt_spon"+Main.dekrat_array[2]).setScale(0.9);

// ///////////////////icon////////////////////////

//     this.dkrt_array=[0,0,0,]

//     this.l3_icon_pnl = this.add.sprite(100,360, "l3_icon_pnl");

//     this.l3_btn_pnl = this.add.sprite(295,360, "l3_btn_pnl");
//     this.l3_btn_pnl.alpha=0;

// ////////01

//     this.l3_icon1 = this.add.sprite(100,200, "l3_icon1");
//     this.l3_icon1.setInteractive({useHandCursor:true});
//     this.l3_icon1.on('pointerdown',function(){
//     this.l3_btn_pnl.alpha=1;

//     this.cup_grp.setVisible(true);
//     this.juie_grp.setVisible(false);
//     this.spon_grp.setVisible(false);

//     },this);

// ////////02

//     this.l3_icon2 = this.add.sprite(100,400, "l3_icon2");
//     this.l3_icon2.setInteractive({useHandCursor:true});
//     this.l3_icon2.on('pointerdown',function(){
//     this.l3_btn_pnl.alpha=1;

//     this.cup_grp.setVisible(false);
//     this.juie_grp.setVisible(true);
//     this.spon_grp.setVisible(false);

//     },this);

// ////////03

//     this.l3_icon3 = this.add.sprite(100,600, "l3_icon3");
//     this.l3_icon3.setInteractive({useHandCursor:true});
//     this.l3_icon3.on('pointerdown',function(){
//     this.l3_btn_pnl.alpha=1;

//     this.cup_grp.setVisible(false);
//     this.juie_grp.setVisible(false);
//     this.spon_grp.setVisible(true);

//     },this);

// ///////////////////cup_grp////////////////////////

//     this.cup_grp = this.add.container();   
//     this.cup_grp.setVisible(false);

//     this.cup_grp1 = this.add.container();  
//     // this.cup_grp1.setVisible(false);  

//     const l3_dkrt_cup_btn_pos1X = [295,295,295,];
//     const l3_dkrt_cup_btn_pos1Y = [240,350,470,];

//     for (let i = 1; i <= 3; i++) {  
              
//     this['l3_dkrt_cup_btn' + i] = this.add.sprite(l3_dkrt_cup_btn_pos1X[i - 1], l3_dkrt_cup_btn_pos1Y[i - 1], 'l3_dkrt_cup_btn' + i);
//     this['l3_dkrt_cup_btn' + i].setOrigin(0.5).setScale(0.9);
//     this['l3_dkrt_cup_btn' + i].id = i;
//     this['l3_dkrt_cup_btn' + i].setInteractive({ useHandCursor: true});
//     // this[' l3_dkrt_cup_btn' + i].on('pointerover', function () { this.setScale(1.05) }, this[' l3_dkrt_cup_btn' + i]);
//     // this[' l3_dkrt_cup_btn' + i].on('pointerout', function () { this.setScale(1) }, this[' l3_dkrt_cup_btn' + i]);
//     this['l3_dkrt_cup_btn' + i].on('pointerdown', cup_grp_function.bind(this, this['l3_dkrt_cup_btn' + i]), this);
//     this.cup_grp1.add(this['l3_dkrt_cup_btn' + i]);

//     }
            
//     this.cup_grp.add(this.cup_grp1); 

// ////////////

//     this.cup_grp2 = this.add.container();   
//     this.cup_grp2.setVisible(false);  

//     const l3_dkrt_cup_btn_pos2X = [295,295,295,];
//     const l3_dkrt_cup_btn_pos2Y = [240,350,470,]


//     for (let i = 4; i <= 6; i++) {  
             
//     this['l3_dkrt_cup_btn' + i] = this.add.sprite(l3_dkrt_cup_btn_pos2X[i - 4], l3_dkrt_cup_btn_pos2Y[i - 4], 'l3_dkrt_cup_btn' + i);
//     this['l3_dkrt_cup_btn' + i].setOrigin(0.5).setScale(0.9);
//     this['l3_dkrt_cup_btn' + i].id = i;
//     this['l3_dkrt_cup_btn' + i].setInteractive({ useHandCursor: true});
//     // this[' l3_dkrt_cup_btn' + i].on('pointerover', function () { this.setScale(1.05) }, this[' l3_dkrt_cup_btn' + i]);
//     // this[' l3_dkrt_cup_btn' + i].on('pointerout', function () { this.setScale(1) }, this[' l3_dkrt_cup_btn' + i]);
//     this['l3_dkrt_cup_btn' + i].on('pointerdown', cup_grp_function.bind(this, this['l3_dkrt_cup_btn' + i]), this);
//     this.cup_grp2.add(this['l3_dkrt_cup_btn' + i]);

//     }
              
//     this.cup_grp.add(this.cup_grp2); 

// ////////////

//     this.cup_grp3 = this.add.container();   
//     this.cup_grp3.setVisible(false);  

//     const l3_dkrt_cup_btn_pos3X = [295,295,];
//     const l3_dkrt_cup_btn_pos3Y = [240,350,]


//     for (let i = 7; i <= 7; i++) {  
             
//     this['l3_dkrt_cup_btn' + i] = this.add.sprite(l3_dkrt_cup_btn_pos3X[i - 7], l3_dkrt_cup_btn_pos3Y[i - 7], 'l3_dkrt_cup_btn' + i);
//     this['l3_dkrt_cup_btn' + i].setOrigin(0.5).setScale(0.9);
//     this['l3_dkrt_cup_btn' + i].id = i;
//     this['l3_dkrt_cup_btn' + i].setInteractive({ useHandCursor: true});
//     // this[' l3_dkrt_cup_btn' + i].on('pointerover', function () { this.setScale(1.05) }, this[' l3_dkrt_cup_btn' + i]);
//     // this[' l3_dkrt_cup_btn' + i].on('pointerout', function () { this.setScale(1) }, this[' l3_dkrt_cup_btn' + i]);
//     this['l3_dkrt_cup_btn' + i].on('pointerdown', cup_grp_function.bind(this, this['l3_dkrt_cup_btn' + i]), this);
//     this.cup_grp3.add(this['l3_dkrt_cup_btn' + i]);

//     }
              
//     this.cup_grp.add(this.cup_grp3); 

// /////////////////

// function cup_grp_function(pointer) {

//     this.l3_dkrt_cup1.setTexture('l3_dkrt_cup'+pointer.id);
//     this.l3_dkrt_cup_top1.setTexture('l3_dkrt_cup_top'+pointer.id);
//     Main.dekrat_array[0]=pointer.id; 
  
//     this.dkrt_array[0]=1;

//     if (this.dkrt_array.indexOf(0)<(0)) {
//         this.tweens.add({targets:this.playbtn,scaleX: 1,scaleY:1,ease: 'Bounce',duration:800,});
//         this.tweens.add({targets:this.morebtn,scaleX: 1,scaleY:1,ease: 'Bounce',duration:800,}); 
//     }

//     }

// /////////////////

//     this.l3_dkrt_nxt1 = this.add.image(295,620,'l3_dkrt_nxt').setOrigin(0.5, 0.5);
//     this.l3_dkrt_nxt1.setInteractive({ useHandCursor: true });
//     this.l3_dkrt_nxt1.id = 1;
//     this.l3_dkrt_nxt1.on('pointerdown', cup_grp_next_function.bind(this, this.l3_dkrt_nxt1), this);
//     this.cup_grp.add(this.l3_dkrt_nxt1);

//     this.l3_dkrt_prt1 = this.add.image(295,115,'l3_dkrt_prt').setOrigin(0.5, 0.5);
//     this.l3_dkrt_prt1.setVisible(false);
//     this.l3_dkrt_prt1.setInteractive({ useHandCursor: true });
//     this.l3_dkrt_prt1.id = 2;
//     this.l3_dkrt_prt1.on('pointerdown', cup_grp_next_function.bind(this, this.l3_dkrt_prt1), this);           
//     this.cup_grp.add(this.l3_dkrt_prt1);

// /////////////////

// function cup_grp_next_function(pointer) {  
//     if (pointer.id == 1) {
//             Main.drs_next_array1[0]++;
//             this['cup_grp' + Main.drs_next_array1[0]].setVisible(false);
//             this['cup_grp' + (Main.drs_next_array1[0] + 1)].setVisible(true);
//         } 

//     if (pointer.id == 2) {
//             Main.drs_next_array1[0]--;
//             this['cup_grp' + (Main.drs_next_array1[0] + 2)].setVisible(false);
//             this['cup_grp' + (Main.drs_next_array1[0] + 1)].setVisible(true);
//         }

//     if (Main.drs_next_array1[0] == 1) { 
//             this.l3_dkrt_nxt1.setVisible(true);
//             this.l3_dkrt_prt1.setVisible(true);
//         }
         
//     if (Main.drs_next_array1[0]==2) {
//             this.l3_dkrt_prt1.setVisible(true);
//             this.l3_dkrt_nxt1.setVisible(false);

//             }  

//     if (Main.drs_next_array1[0]==0) {
//             this.l3_dkrt_prt1.setVisible(false);
//             this.l3_dkrt_nxt1.setVisible(true);

//             } 

//         }

// ///////////////////juie_grp////////////////////////

//     this.juie_grp = this.add.container();   
//     this.juie_grp.setVisible(false);

//     this.juie_grp1 = this.add.container();  
//     // this.juie_grp1.setVisible(false);  

//     const l3_dkrt_juice_btn_pos1X = [295,295,295,];
//     const l3_dkrt_juice_btn_pos1Y = [240,350,470,];

//     for (let i = 1; i <= 3; i++) {  
              
//     this['l3_dkrt_juice_btn' + i] = this.add.sprite(l3_dkrt_juice_btn_pos1X[i - 1], l3_dkrt_juice_btn_pos1Y[i - 1], 'l3_dkrt_juice_btn' + i);
//     this['l3_dkrt_juice_btn' + i].setOrigin(0.5).setScale(0.9);
//     this['l3_dkrt_juice_btn' + i].id = i;
//     this['l3_dkrt_juice_btn' + i].setInteractive({ useHandCursor: true});
//     // this[' l3_dkrt_juice_btn' + i].on('pointerover', function () { this.setScale(1.05) }, this[' l3_dkrt_juice_btn' + i]);
//     // this[' l3_dkrt_juice_btn' + i].on('pointerout', function () { this.setScale(1) }, this[' l3_dkrt_juice_btn' + i]);
//     this['l3_dkrt_juice_btn' + i].on('pointerdown', juie_grp_function.bind(this, this['l3_dkrt_juice_btn' + i]), this);
//     this.juie_grp1.add(this['l3_dkrt_juice_btn' + i]);

//     }
            
//     this.juie_grp.add(this.juie_grp1); 

// ////////////

//     this.juie_grp2 = this.add.container();   
//     this.juie_grp2.setVisible(false);  

//     const l3_dkrt_juice_btn_pos2X = [295,295,295,];
//     const l3_dkrt_juice_btn_pos2Y = [240,350,470,]


//     for (let i = 4; i <= 6; i++) {  
             
//     this['l3_dkrt_juice_btn' + i] = this.add.sprite(l3_dkrt_juice_btn_pos2X[i - 4], l3_dkrt_juice_btn_pos2Y[i - 4], 'l3_dkrt_juice_btn' + i);
//     this['l3_dkrt_juice_btn' + i].setOrigin(0.5).setScale(0.9);
//     this['l3_dkrt_juice_btn' + i].id = i;
//     this['l3_dkrt_juice_btn' + i].setInteractive({ useHandCursor: true});
//     // this[' l3_dkrt_juice_btn' + i].on('pointerover', function () { this.setScale(1.05) }, this[' l3_dkrt_juice_btn' + i]);
//     // this[' l3_dkrt_juice_btn' + i].on('pointerout', function () { this.setScale(1) }, this[' l3_dkrt_juice_btn' + i]);
//     this['l3_dkrt_juice_btn' + i].on('pointerdown', juie_grp_function.bind(this, this['l3_dkrt_juice_btn' + i]), this);
//     this.juie_grp2.add(this['l3_dkrt_juice_btn' + i]);

//     }
              
//     this.juie_grp.add(this.juie_grp2); 

// /////////////////

// function juie_grp_function(pointer) {

//     this.l3_dkrt_juice1.setTexture('l3_dkrt_juice'+pointer.id);
//     Main.dekrat_array[1]=pointer.id; 
  
// this.dkrt_array[1]=1;

// if (this.dkrt_array.indexOf(0)<(0)) {
//         this.tweens.add({targets:this.playbtn,scaleX: 1,scaleY:1,ease: 'Bounce',duration:800,});
//         this.tweens.add({targets:this.morebtn,scaleX: 1,scaleY:1,ease: 'Bounce',duration:800,}); 
//     }

//     }

// /////////////////

//     this.l3_dkrt_nxt2 = this.add.image(295,620,'l3_dkrt_nxt').setOrigin(0.5, 0.5);
//     this.l3_dkrt_nxt2.setInteractive({ useHandCursor: true });
//     this.l3_dkrt_nxt2.id = 1;
//     this.l3_dkrt_nxt2.on('pointerdown', juie_grp_next_function.bind(this, this.l3_dkrt_nxt2), this);
//     this.juie_grp.add(this.l3_dkrt_nxt2);

//     this.l3_dkrt_prt2 = this.add.image(295,115,'l3_dkrt_prt').setOrigin(0.5, 0.5);
//     this.l3_dkrt_prt2.setVisible(false);
//     this.l3_dkrt_prt2.setInteractive({ useHandCursor: true });
//     this.l3_dkrt_prt2.id = 2;
//     this.l3_dkrt_prt2.on('pointerdown', juie_grp_next_function.bind(this, this.l3_dkrt_prt2), this);           
//     this.juie_grp.add(this.l3_dkrt_prt2);

// /////////////////

// function juie_grp_next_function(pointer) {  
//     if (pointer.id == 1) {
//             Main.drs_next_array2[0]++;
//             this['juie_grp' + Main.drs_next_array2[0]].setVisible(false);
//             this['juie_grp' + (Main.drs_next_array2[0] + 1)].setVisible(true);
//         } 

//     if (pointer.id == 2) {
//             Main.drs_next_array2[0]--;
//             this['juie_grp' + (Main.drs_next_array2[0] + 2)].setVisible(false);
//             this['juie_grp' + (Main.drs_next_array2[0] + 1)].setVisible(true);
//         }

//     if (Main.drs_next_array2[0] == 1) { 
//             this.l3_dkrt_nxt2.setVisible(false);
//             this.l3_dkrt_prt2.setVisible(true);
//         }
         

//     if (Main.drs_next_array2[0]==0) {
//             this.l3_dkrt_prt2.setVisible(false);
//             this.l3_dkrt_nxt2.setVisible(true);

//             } 

//         }

// ///////////////////spon_grp////////////////////////

//     this.spon_grp = this.add.container();   
//     this.spon_grp.setVisible(false);

//     this.spon_grp1 = this.add.container();  
//     // this.spon_grp1.setVisible(false);  

//     const l3_dkrt_spon_btn_pos1X = [295,295,295,];
//     const l3_dkrt_spon_btn_pos1Y = [240,350,470,];

//     for (let i = 1; i <= 3; i++) {  
              
//     this['l3_dkrt_spon_btn' + i] = this.add.sprite(l3_dkrt_spon_btn_pos1X[i - 1], l3_dkrt_spon_btn_pos1Y[i - 1], 'l3_dkrt_spon_btn' + i);
//     this['l3_dkrt_spon_btn' + i].setOrigin(0.5).setScale(0.9);
//     this['l3_dkrt_spon_btn' + i].id = i;
//     this['l3_dkrt_spon_btn' + i].setInteractive({ useHandCursor: true});
//     // this[' l3_dkrt_spon_btn' + i].on('pointerover', function () { this.setScale(1.05) }, this[' l3_dkrt_spon_btn' + i]);
//     // this[' l3_dkrt_spon_btn' + i].on('pointerout', function () { this.setScale(1) }, this[' l3_dkrt_spon_btn' + i]);
//     this['l3_dkrt_spon_btn' + i].on('pointerdown', spon_grp_function.bind(this, this['l3_dkrt_spon_btn' + i]), this);
//     this.spon_grp1.add(this['l3_dkrt_spon_btn' + i]);

//     }
            
//     this.spon_grp.add(this.spon_grp1); 

// ////////////

//     this.spon_grp2 = this.add.container();   
//     this.spon_grp2.setVisible(false);  

//     const l3_dkrt_spon_btn_pos2X = [295,295,295,];
//     const l3_dkrt_spon_btn_pos2Y = [240,350,470,]


//     for (let i = 4; i <= 6; i++) {  
             
//     this['l3_dkrt_spon_btn' + i] = this.add.sprite(l3_dkrt_spon_btn_pos2X[i - 4], l3_dkrt_spon_btn_pos2Y[i - 4], 'l3_dkrt_spon_btn' + i);
//     this['l3_dkrt_spon_btn' + i].setOrigin(0.5).setScale(0.9);
//     this['l3_dkrt_spon_btn' + i].id = i;
//     this['l3_dkrt_spon_btn' + i].setInteractive({ useHandCursor: true});
//     // this[' l3_dkrt_spon_btn' + i].on('pointerover', function () { this.setScale(1.05) }, this[' l3_dkrt_spon_btn' + i]);
//     // this[' l3_dkrt_spon_btn' + i].on('pointerout', function () { this.setScale(1) }, this[' l3_dkrt_spon_btn' + i]);
//     this['l3_dkrt_spon_btn' + i].on('pointerdown', spon_grp_function.bind(this, this['l3_dkrt_spon_btn' + i]), this);
//     this.spon_grp2.add(this['l3_dkrt_spon_btn' + i]);

//     }
              
//     this.spon_grp.add(this.spon_grp2); 

// /////////////////

// function spon_grp_function(pointer) {

//     this.l3_dkrt_spon1.setTexture('l3_dkrt_spon'+pointer.id);
//     Main.dekrat_array[2]=pointer.id; 
  
// this.dkrt_array[2]=1;

// if (this.dkrt_array.indexOf(0)<(0)) {
//         this.tweens.add({targets:this.playbtn,scaleX: 1,scaleY:1,ease: 'Bounce',duration:800,});
//         this.tweens.add({targets:this.morebtn,scaleX: 1,scaleY:1,ease: 'Bounce',duration:800,}); 
// }

//     }

// /////////////////

//     this.l3_dkrt_nxt3 = this.add.image(295,620,'l3_dkrt_nxt').setOrigin(0.5, 0.5);
//     this.l3_dkrt_nxt3.setInteractive({ useHandCursor: true });
//     this.l3_dkrt_nxt3.id = 1;
//     this.l3_dkrt_nxt3.on('pointerdown', spon_grp_next_function.bind(this, this.l3_dkrt_nxt3), this);
//     this.spon_grp.add(this.l3_dkrt_nxt3);

//     this.l3_dkrt_prt3 = this.add.image(295,115,'l3_dkrt_prt').setOrigin(0.5, 0.5);
//     this.l3_dkrt_prt3.setVisible(false);
//     this.l3_dkrt_prt3.setInteractive({ useHandCursor: true });
//     this.l3_dkrt_prt3.id = 2;
//     this.l3_dkrt_prt3.on('pointerdown', spon_grp_next_function.bind(this, this.l3_dkrt_prt3), this);           
//     this.spon_grp.add(this.l3_dkrt_prt3);

// /////////////////

// function spon_grp_next_function(pointer) {  
//     if (pointer.id == 1) {
//             Main.drs_next_array3[0]++;
//             this['spon_grp' + Main.drs_next_array3[0]].setVisible(false);
//             this['spon_grp' + (Main.drs_next_array3[0] + 1)].setVisible(true);
//         } 

//     if (pointer.id == 2) {
//             Main.drs_next_array3[0]--;
//             this['spon_grp' + (Main.drs_next_array3[0] + 2)].setVisible(false);
//             this['spon_grp' + (Main.drs_next_array3[0] + 1)].setVisible(true);
//         }

//     if (Main.drs_next_array3[0] == 1) { 
//             this.l3_dkrt_nxt3.setVisible(false);
//             this.l3_dkrt_prt3.setVisible(true);
//         }
         

//     if (Main.drs_next_array3[0]==0) {
//             this.l3_dkrt_prt3.setVisible(false);
//             this.l3_dkrt_nxt3.setVisible(true);

//             } 

//         }

// //////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////

//         this.playbtn=this.add.image(1190,660,'btn2').setOrigin(0.5, 0.5).setScale(0);
//         this.playbtn.setInteractive({ useHandCursor: true });
//         this.playbtn.on('pointerover',function(){this.playbtn.setScale(1.05)},this);
//         this.playbtn.on('pointerout',function(){this.playbtn.setScale(1)},this);
//         this.playbtn.on('pointerdown',this.enterRoom,this);

//         this.morebtn=this.add.image(1030,660,'btn4').setOrigin(0.5, 0.5).setScale(0);
//         this.morebtn.setInteractive({ useHandCursor: true });
//         this.morebtn.on('pointerover',function(){this.morebtn.setScale(1.05)},this);
//         this.morebtn.on('pointerout',function(){this.morebtn.setScale(1)},this);
//         this.morebtn.on('pointerup',this.morebtnLink,this);

//          this.logo =this.add.image(165,55,'logo').setScale(0.65);
//         this.logo.setInteractive({pixelPerfect:true});
//         this.logo.on('pointerup',this.LogoLink,this);

//           this.musicBtn = this.add.sprite(1212,50,"music-on");
//         this.musicBtn.setInteractive();
//         this.musicBtn.on('pointerup',this.changemusic,this);

//     this.shutter_group = this.add.container();
//     this.shutter_bg =this.add.image(320,360,'shutter_bg');
//     this.shutter_bg2 =this.add.image(960,360,'shutter_bg2');
//     this.shutter_group.add(this.shutter_bg);
//     this.shutter_group.add(this.shutter_bg2);

//     this.tweens.add({targets:this.shutter_group,y:-720,ease: 'Quadratic',duration:1200,onComplete:() => {

//     }},this);

//         if (!this.sound.mute) {
//         this.musicBtn.setTexture('music-on');
//         } else {
//         this.musicBtn.setTexture('music-off');
//         }
// }
// update() {
//   // console.log(this.input.x + ':' + this.input.y); 

//   if (this.dummy_drag) {
//         this.dummy.x = this.input.activePointer.x ;
//         this.dummy.y = this.input.activePointer.y;
//         } 

//   }
          
// morebtnLink (){
//   YYGGames.navigate("game", "morebutton");
// }
// LogoLink (){
//       YYGGames.navigate("game", "logo");
// }
// enterRoom (){
//     this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     var state = 'finalscreen_l3';
//     MyShowAD(this, state);
//     }},this);
//    }
  
// changemusic() {
//      if (!this.sound.mute) {
//     this.musicBtn.setTexture('music-off');
//     this.sound.mute = true;
//   } else {
//     this.musicBtn.setTexture('music-on');
//     this.sound.mute = false;
//   }
//   }   
// }




// ///////////////////////////////////////////////////////

// class level2_cocking extends Phaser.Scene {

// constructor() {
//  super('level2_cocking');
// }
//  create() {
     
//     this.levelGroup = this.add.container();

//     this.l2_bg = this.add.sprite(320,360, "l2_bg");
//     this.l2_bg1 = this.add.sprite(960,360, "l2_bg1");

//     this.levelGroup.add(this.l2_bg);
//     this.levelGroup.add(this.l2_bg1);



//          this.l2_cup_ani = this.add.sprite(708,410, "l2_cup_ani");

//         this.l2_cup_aniFrame1 = this.anims.generateFrameNames('l2_cup_ani', {start: 1,end: 8,zeroPad: 1,
//         prefix: 'l2_cup_ani'});
//         this.anims.create({key: 'l2_cup_ani_key',frames: this.l2_cup_aniFrame1,frameRate:8,}); 

     
//         this.l2_cup_aniFrame2 = this.anims.generateFrameNames('l2_cup_ani', {start: 8,end: 17,zeroPad: 1,
//         prefix: 'l2_cup_ani'});
//         this.anims.create({key: 'l2_cup_ani_key1',frames: this.l2_cup_aniFrame2,frameRate:8,});


//          this.l2_cup1_ani = this.add.sprite(730,250, "l2_cup1_ani");
//          this.l2_cup1_ani.setVisible(false);


     
//         this.l2_cup1_aniFrame2 = this.anims.generateFrameNames('l2_cup1_ani', {start: 0,end: 5,zeroPad: 1,
//         prefix: 'l2_cup1_ani'});
//         this.anims.create({key: 'l2_cup1_ani_key1',frames: this.l2_cup1_aniFrame2,frameRate:8,});
//         // this.l2_cup1_ani.on("animationcomplete",function() {
       
//         // },this);

//          this.l2_cup2_ani = this.add.sprite(730,250, "l2_cup2_ani");
//          this.l2_cup2_ani.setVisible(false);

//         this.l2_cup2_aniFrame2 = this.anims.generateFrameNames('l2_cup2_ani', {start: 0,end: 5,zeroPad: 1,
//         prefix: 'l2_cup2_ani'});
//         this.anims.create({key: 'l2_cup2_ani_key1',frames: this.l2_cup2_aniFrame2,frameRate:8,});



// ///////////////////////////////////////////////////////////



//          this.l2hand_ani = this.add.sprite(708,200, "l2hand_ani");
//          this.l2hand_ani.setVisible(false);

//         this.l2hand_aniFrame1 = this.anims.generateFrameNames('l2hand_ani', {start: 0,end: 4,zeroPad: 1,
//         prefix: 'l2hand_ani'});
//         this.anims.create({key: 'l2hand_ani_key',frames: this.l2hand_aniFrame1,frameRate:10,repeat:-1,}); 
//         this.l2hand_ani.play('l2hand_ani_key');

//          this.l2hand1_ani = this.add.sprite(450,220, "l2hand1_ani");
//          this.l2hand1_ani.setVisible(true);

//         this.l2hand1_aniFrame1 = this.anims.generateFrameNames('l2hand1_ani', {start: 0,end: 4,zeroPad: 1,
//         prefix: 'l2hand1_ani'});
//         this.anims.create({key: 'l2hand1_ani_key',frames: this.l2hand1_aniFrame1,frameRate:10,repeat:-1,}); 
//         this.l2hand1_ani.play('l2hand1_ani_key');



//           this.l2hand1_ani1 = this.add.sprite(930,200, "l2hand1_ani");
//           this.l2hand1_ani1.setVisible(false);
//           this.l2hand1_ani1.flipX=true

//         this.l2hand1_ani1Frame1 = this.anims.generateFrameNames('l2hand1_ani', {start: 0,end: 4,zeroPad: 1,
//         prefix: 'l2hand1_ani'});
//         this.anims.create({key: 'l2hand1_ani1_key',frames: this.l2hand1_ani1Frame1,frameRate:10,repeat:-1,}); 
//         this.l2hand1_ani1.play('l2hand1_ani1_key');





//     ////////////////////////////////////////////

//     this.l2_flour1 = this.add.sprite(500,180, "l2_flour");
//     this.l2_flour1.setFrame('l2_flour1');
//     this.l2_flour1.setVisible(false);

//         this.l2_flour1Frame1 = this.anims.generateFrameNames('l2_flour', {start: 1,end: 4,zeroPad: 1,
//         prefix: 'l2_flour'});
//         this.anims.create({key: 'l2_flour1_key',frames: this.l2_flour1Frame1,frameRate:6,repeat:1,}); 
//         this.l2_flour1.on("animationcomplete",function() {
//         this.l2_flour1.setVisible(false);
//           this.l2hand1_ani1.setVisible(true);
//             this.time_liner1.setVisible(false);

//         this.l2water_ani.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
      

            
//         },this);


//         this.l2_flour = this.add.sprite(352,200, "l2_flour");
//         // this.l2_flour.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.l2_flour.on('drag', (pointer, dragX, dragY) => {
//             this.l2_flour.x = dragX;
//             this.l2_flour.y = dragY;

//           this.children.bringToTop(this.l2_flour);
//           this.children.bringToTop(this.logo);
//           this.children.bringToTop(this.musicBtn);
//           this.children.bringToTop(this.shutter_bg);


//          this.l2hand1_ani.setVisible(false);
//          this.l2hand_ani.setVisible(true);


//         });
//         this.l2_flour.on('dragend', () => {
//             if ((this.input.x>437 && this.input.x<975 && this.input.y>110 && this.input.y<480)){
//             this.l2_flour.setVisible(false);
//              this.l2hand_ani.setVisible(false);
//             this.l2_flour1.setVisible(true);
//             this.time_liner1.setVisible(true);

//              this.time_liner1.play('time_liner1_key');

//             this.l2_flour1.play('l2_flour1_key');

//         this.time.delayedCall(300,() => {
//         this.l2_cup_ani.play('l2_cup_ani_key');

//         },this);


//             }
//              else{

//          this.l2hand1_ani.setVisible(true);
//          this.l2hand_ani.setVisible(false);

//              this.l2_flour.x=352;
//              this.l2_flour.y=200;
//              }
//         },this);



//     ////////////////////////////////////////////

//     this.l2water_ani1 = this.add.sprite(960,180, "l2water_ani");
//     this.l2water_ani1.setFrame('l2water_ani1');
//     this.l2water_ani1.setVisible(false);

//         this.l2water_ani1Frame1 = this.anims.generateFrameNames('l2water_ani', {start: 1,end:4,zeroPad: 1,
//         prefix: 'l2water_ani'});
//         this.anims.create({key: 'l2water_ani1_key',frames: this.l2water_ani1Frame1,frameRate:6,repeat:1,}); 
//         this.l2water_ani1.on("animationcomplete",function() {
//         this.l2water_ani1.setVisible(false);
//             this.time_liner1.setVisible(false);

//         this.time.delayedCall(300,() => {

//          this.l2_cup_ani.setVisible(false);
//          this.l2_cup_ani_top.setVisible(false);
//          this.l2_cup1_ani.setVisible(true);

//         this.hand_colide.setInteractive({ useHandCursor: true });
//          this.l2hand_ani.setVisible(true);


//         },this);

            
//         },this);




//         this.l2water_ani = this.add.sprite(970,210, "l2water_ani");
//         // this.l2water_ani.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.l2water_ani.on('drag', (pointer, dragX, dragY) => {
//             this.l2water_ani.x = dragX;
//             this.l2water_ani.y = dragY;

//               this.l2hand1_ani1.setVisible(false);
//               this.l2hand_ani.setVisible(true);

//           this.children.bringToTop(this.l2water_ani);
//           this.children.bringToTop(this.logo);
//           this.children.bringToTop(this.musicBtn);
//           this.children.bringToTop(this.shutter_bg);


//         });
//         this.l2water_ani.on('dragend', () => {
//             if ((this.input.x>437 && this.input.x<975 && this.input.y>110 && this.input.y<480)){
//             this.l2hand_ani.setVisible(false);

//             this.l2water_ani.setVisible(false);
//             this.l2water_ani1.setVisible(true);
//            this.l2water_ani1.play('l2water_ani1_key');

//             this.time_liner1.setVisible(true);

//           this.time_liner1.play('time_liner1_key');

        
//              this.time.delayedCall(300,() => {
//         this.l2_cup_ani.play('l2_cup_ani_key1');

//         },this);


//             }
//              else{

//             this.l2hand1_ani1.setVisible(true);
//             this.l2hand_ani.setVisible(false);

//              this.l2water_ani.x=970;
//              this.l2water_ani.y=210;
//              }
//         },this);

//     ////////////////////////////////////////////

//     this.l2_cup_ani_top = this.add.sprite(709,457, "l2_cup_ani_top");

//     this.time_liner1 = this.add.sprite(650,630, "time_liner");
//     this.time_liner1.setVisible(false);

//         this.time_liner1Frame1 = this.anims.generateFrameNames('time_liner', {start: 0,end: 14,zeroPad: 1,
//         prefix: 'time_liner'});
//         this.anims.create({key: 'time_liner1_key',frames: this.time_liner1Frame1,frameRate:10,}); 
//         this.time_liner1.on("animationcomplete",function() {

//        },this);

   

//     ////////////////////////////////////////////


// let z_hand_count5 = 1;
// let hand_count4 = 1;
// let delayCounter3 = 0;
// const delayIncrement3 = 15;

// this.hand_colide = this.add.rectangle(710,380, 550, 270, 0xffffff, 0).setOrigin(0.5);
// // this.hand_colide.setInteractive({ useHandCursor: true });
// this.hand_colide.on('pointerup', function (pointer) {
//     }, this);
// this.hand_colide.on('pointerdown', function (pointer) {
//     this.hand_colide.on('pointermove', function () {
//         if (pointer.isDown) {
//             delayCounter3++;
//     // this.time_liner1.setVisible(true);
          

//             if(z_hand_count5==5){
//              this.hand_colide.disableInteractive();    
//             // this.l2hand_ani.setVisible(false);
//             // this.nxt_btn1.setVisible(true);
//             // this.time_liner1.setVisible(false);
//          this.hand_colide1.setInteractive({ useHandCursor: true });
            
//          this.l2_cup1_ani.setVisible(false);
//          this.l2_cup2_ani.setVisible(true);
        
//             }


//             if (delayCounter3 >= delayIncrement3) {
//                 delayCounter3 = 0;
//                     if (pointer.prevPosition.y < pointer.position.y || pointer.prevPosition.y > pointer.position.y) {
//                 z_hand_count5++;
//                 hand_count4++;
//                 this.l2_cup1_ani.setFrame('l2_cup1_ani' + z_hand_count5);
               
//                 // this.time_liner1.setFrame('time_liner' + z_hand_count5);
                
//             }
//             }
//         }
//     }, this);
//     }, this);

//     ///////////////////////////

// let z_hand_count6 = 1;
// let hand_count5 = 1;
// let delayCounter4 = 0;
// const delayIncrement4 = 15;

// this.hand_colide1 = this.add.rectangle(710,380, 550, 270, 0xffffff, 0).setOrigin(0.5);
// // this.hand_colide1.setInteractive({ useHandCursor: true });
// this.hand_colide1.on('pointerup', function (pointer) {
//     }, this);
// this.hand_colide1.on('pointerdown', function (pointer) {
//     this.hand_colide1.on('pointermove', function () {
//         if (pointer.isDown) {
//             delayCounter4++;
//     // this.time_liner1.setVisible(true);
          

//             if(z_hand_count6==5){
//              this.hand_colide1.disableInteractive();    
//             this.l2hand_ani.setVisible(false);
//             this.nxt_btn1.setVisible(true);
//             this.time_liner1.setVisible(false);
            

//             }


//             if (delayCounter4 >= delayIncrement4) {
//                 delayCounter4 = 0;
//                     if (pointer.prevPosition.y < pointer.position.y || pointer.prevPosition.y > pointer.position.y) {
//                 z_hand_count6++;
//                 hand_count5++;
//                 this.l2_cup2_ani.setFrame('l2_cup2_ani' + z_hand_count6);
//                 // this.time_liner1.setFrame('time_liner' + z_hand_count6);
                
//             }
//             }
//         }
//     }, this);
//     }, this);

//     ///////////////////////////

      




//         this.nxt_btn1 = this.add.sprite(1140,500, "btn5");
//         this.nxt_btn1.setVisible(false);
//         this.nxt_btn1.setInteractive({useHandCursor:true});
//         this.nxt_btn1.on('pointerdown',function(){
//         this.nxt_btn1.disableInteractive();
//         this.nxt_btn1.setVisible(false);

//         this.l2_cup1_ani.setVisible(false);
//         this.l2_cup_ani_top.setVisible(false);
//          this.l2_cup1_ani.setVisible(false);
//          this.l2_cup2_ani.setVisible(false);

//         this.hand_arrow.setVisible(true);
//         this.l2_zoom_bg.setVisible(true);
//         this.Cutting_wood.setVisible(true);
//         this.l2_nife.setVisible(true);

//           this.tweens.add({targets: this.hand_arrow,scaleX: 1.09,scaleY: 1.09,duration: 1000 / 2,ease: 'Linear',yoyo: true,repeat: -1,});
      

//         },this);



//     ////////////////////////////////////////////

//            this.l2_zoom_bg = this.add.sprite(640,360, "l2_zoom_bg");
//            this.l2_zoom_bg.setVisible(false);


       
//         this.Cutting_wood = this.add.sprite(640,450, "Cutting_wood");
//         this.Cutting_wood.setVisible(false);


//         this.l2_nife = this.add.sprite(640,150, "l2_nife").setScale(0.9);
//         this.l2_nife.setVisible(false);
//         this.l2_nife.setInteractive({useHandCursor:true});
//         this.l2_nife.on('pointerdown',function(){
//         this.l2_nife.disableInteractive();

          
//           this.hand_arrow.setVisible(false);

//           this.l2_nife.setVisible(false);
//           this.l2Knife_ani0001.setVisible(true);
//           this.l2Knife_ani0001_drag=true;
//           this.yellow_cutting_pice0001.setVisible(true);
//           this.mavu_rect1.setInteractive({useHandCursor:true});
//           this.tweens.add({targets: this.hand_arrow1,scaleX: 1.09,scaleY: 1.09,duration: 1000 / 2,ease: 'Linear',yoyo: true,repeat: -1,});
//           this.hand_arrow1.setVisible(true);


//         },this);

//            this.hand_arrow = this.add.sprite(708,70, "hand_arrow");
//           this.hand_arrow.setVisible(false);


//            this.yellow_cutting_pice0001 = this.add.sprite(640,420, "yellow_cutting_pice0001");
//            this.yellow_cutting_pice0001.setVisible(false);

//            this.l2Knife_ani0001 = this.add.sprite(640,350, "l2Knife_ani0001");
//            this.l2Knife_ani0001.setVisible(false);


//         this.mavu_rect1 = this.add.rectangle(730, 410, 220, 320, 0xff0000,0).setOrigin(0.5);
//         // this.mavu_rect1.setInteractive({useHandCursor:true});
//         this.mavu_rect1.on('pointerdown',function(){
//         this.mavu_rect1.disableInteractive();
//         this.hand_arrow1.setVisible(false);

//            this.yellow_cutting_pice0001.setTexture('yellow_cutting_pice0002');
//         this.mavu_rect2.setInteractive({useHandCursor:true});

//           this.tweens.add({targets: this.hand_arrow2,scaleX: 1.09,scaleY: 1.09,duration: 1000 / 2,ease: 'Linear',yoyo: true,repeat: -1,});
//           this.hand_arrow2.setVisible(true);


//         },this);


//         this.mavu_rect2 = this.add.rectangle(680, 410, 220, 320, 0xff0000,0).setOrigin(0.5);
//         // this.mavu_rect2.setInteractive({useHandCursor:true});
//         this.mavu_rect2.on('pointerdown',function(){
//         this.mavu_rect2.disableInteractive();
//           this.hand_arrow2.setVisible(false);
       
//            this.yellow_cutting_pice0001.setTexture('yellow_cutting_pice0003');
//           this.mavu_rect3.setInteractive({useHandCursor:true});

//           this.tweens.add({targets: this.hand_arrow3,scaleX: 1.09,scaleY: 1.09,duration: 1000 / 2,ease: 'Linear',yoyo: true,repeat: -1,});
//           this.hand_arrow3.setVisible(true);


//         },this);


//         this.mavu_rect3 = this.add.rectangle(530, 410, 220, 320, 0xff0000,0).setOrigin(0.5);
//         // this.mavu_rect3.setInteractive({useHandCursor:true});
//         this.mavu_rect3.on('pointerdown',function(){
//         this.mavu_rect3.disableInteractive();
//           this.hand_arrow3.setVisible(false);
       
//            this.yellow_cutting_pice0001.setTexture('yellow_cutting_pice0004');

//           this.l2Knife_ani0001.setVisible(false);
//           this.l2Knife_ani0001_drag=false;

//      this.tweens.add({targets:this.yellow_cutting_pice0001,x:2000,ease: 'Quadratic',duration:1200,onComplete:() => {
//            this.yellow_roll_pice0001.setVisible(true);
//         this.rool_rect1.setInteractive({useHandCursor:true});
//           this.hand_arrow4.setVisible(true);
//           this.tweens.add({targets: this.hand_arrow4,scaleX: 1.09,scaleY: 1.09,duration: 1000 / 2,ease: 'Linear',yoyo: true,repeat: -1,});

//      }},this);



//         },this);



    



//            this.yellow_roll_pice0001 = this.add.sprite(640,420, "yellow_roll_pice0001");
//            this.yellow_roll_pice0001.setVisible(false);


//            this.yellow_roll = this.add.sprite(640,420, "yellow_roll_pice0001");
//            this.yellow_roll.setVisible(false);

           

//         this.rool_rect1 = this.add.rectangle(680, 410, 130, 320, 0xff0000,0).setOrigin(0.5);
//         // this.rool_rect1.setInteractive({useHandCursor:true});
//         this.rool_rect1.on('pointerdown',function(){
//         this.rool_rect1.disableInteractive();
//            this.hand_arrow4.setVisible(false);
//            this.yellow_roll_pice0001.setTexture('yellow_roll_pice0002');
//            this.rool_rect2.setInteractive({useHandCursor:true});

//             this.hand_arrow5.setVisible(true);
//             this.tweens.add({targets: this.hand_arrow5,scaleX: 1.09,scaleY: 1.09,duration: 1000 / 2,ease: 'Linear',yoyo: true,repeat: -1,});



//         },this);



//          this.rool_rect2 = this.add.rectangle(640, 410, 130, 320, 0xff0000,0).setOrigin(0.5);
//         // this.rool_rect2.setInteractive({useHandCursor:true});
//         this.rool_rect2.on('pointerdown',function(){
//         this.rool_rect2.disableInteractive();
//         this.hand_arrow5.setVisible(false);
//         this.yellow_roll_pice0001.setTexture('yellow_roll_pice0003');

//         this.time.delayedCall(500,() => {

//         this.yellow_roll_pice0001.setVisible(false);

//         this.yellow_roll.setVisible(true);

//         this.hand_arrow5.setVisible(true);
//         this.rool_rect3.setInteractive({useHandCursor:true});

//           // this.yellow_roll_pice0001.setTexture('yellow_roll_pice0005');


//          //  this.hand_arrow6.setVisible(true);
//          // this.l2_nife1.setInteractive({useHandCursor:true});
//          // this.tweens.add({targets: this.hand_arrow6,scaleX: 1.09,scaleY: 1.09,duration: 1000 / 2,ease: 'Linear',yoyo: true,repeat: -1,});




//         },this);
//         },this);



//         this.rool_rect3 = this.add.rectangle(640, 410, 130, 320, 0xff0000,0).setOrigin(0.5);
//         // this.rool_rect3.setInteractive({useHandCursor:true});
//         this.rool_rect3.on('pointerdown',function(){
//         this.rool_rect3.disableInteractive();
//         this.yellow_roll.setTexture('yellow_roll_pice0002');

//         this.rool_rect4.setInteractive({useHandCursor:true});
     
        
//        },this);



//         this.rool_rect4 = this.add.rectangle(640, 410, 130, 320, 0xff0000,0).setOrigin(0.5);
//         // this.rool_rect4.setInteractive({useHandCursor:true});
//         this.rool_rect4.on('pointerdown',function(){
//         this.rool_rect4.disableInteractive();
//         this.yellow_roll.setTexture('yellow_roll_pice0003');
//         this.hand_arrow5.setVisible(false);

//         this.time.delayedCall(500,() => {

//         this.yellow_roll.setVisible(false);
//         this.yellow_roll_pice0001.setVisible(true);


//                  this.yellow_roll_pice0001.setTexture('yellow_roll_pice0005');
//          this.hand_arrow6.setVisible(true);
//          this.l2_nife1.setInteractive({useHandCursor:true});
//          this.tweens.add({targets: this.hand_arrow6,scaleX: 1.09,scaleY: 1.09,duration: 1000 / 2,ease: 'Linear',yoyo: true,repeat: -1,});
//         this.l2_nife1.setVisible(true);

//         },this);
//         },this);


//         // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//            // this.yellow_roll_pice0005 = this.add.sprite(640,420, "yellow_roll_pice0005");
//            // this.yellow_roll_pice0005.setVisible(true);


//         // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



//         this.l2_nife1 = this.add.sprite(640,150, "l2_nife").setScale(0.9);
//         this.l2_nife1.setVisible(false);
//         // this.l2_nife1.setInteractive({useHandCursor:true});
//         this.l2_nife1.on('pointerdown',function(){
//         this.l2_nife1.disableInteractive();
//         this.hand_arrow6.setVisible(false);

//         this.l2_nife1_drag=true;
//         this.nife_rect1.setInteractive({useHandCursor:true});

//         this.hand_arrow7.setVisible(true);
//         this.tweens.add({targets: this.hand_arrow7,scaleX: 1.09,scaleY: 1.09,duration: 1000 / 2,ease: 'Linear',yoyo: true,repeat: -1,});

//         },this);


//         this.nife_rect1 = this.add.rectangle(640, 480, 130, 130, 0xff0000,0).setOrigin(0.5);
//         // this.nife_rect1.setInteractive({useHandCursor:true});
//         this.nife_rect1.on('pointerdown',function(){
//         this.nife_rect1.disableInteractive();
//         this.l2_nife1_drag=false;
//         this.hand_arrow7.setVisible(false);

//         this.tweens.add({targets:this.l2_nife1,y:590,ease: 'Quadratic',duration:1000,onComplete:() => {
//         this.yellow_roll_pice0001.setTexture('yellow_roll_pice0006');
//         this.l2_nife1_drag=true;
//         this.nife_rect2.setInteractive({useHandCursor:true});
//         this.hand_arrow7.setVisible(true);
//         this.tweens.add({targets: this.hand_arrow7,scaleX: 1.09,scaleY: 1.09,duration: 1000 / 2,ease: 'Linear',yoyo: true,repeat: -1,});

//           }},this);
//           },this);




//         this.nife_rect2 = this.add.rectangle(640, 400, 130, 130, 0xff0000,0).setOrigin(0.5);
//         // this.nife_rect2.setInteractive({useHandCursor:true});
//         this.nife_rect2.on('pointerdown',function(){
//         this.nife_rect2.disableInteractive();
//         this.l2_nife1_drag=false;
//         this.hand_arrow7.setVisible(false);

//         this.tweens.add({targets:this.l2_nife1,y:590,ease: 'Quadratic',duration:1000,onComplete:() => {
//         this.yellow_roll_pice0001.setTexture('yellow_roll_pice0007');
//         this.l2_nife1_drag=true;

//          this.hand_arrow7.setVisible(true);
//          this.tweens.add({targets: this.hand_arrow7,scaleX: 1.09,scaleY: 1.09,duration: 1000 / 2,ease: 'Linear',yoyo: true,repeat: -1,});

//         this.nife_rect3.setInteractive({useHandCursor:true});

//           }},this);
//           },this);


//         this.nife_rect3 = this.add.rectangle(640, 330, 130, 130, 0xff0000,0).setOrigin(0.5);
//         // this.nife_rect3.setInteractive({useHandCursor:true});
//         this.nife_rect3.on('pointerdown',function(){
//         this.nife_rect3.disableInteractive();
//         this.l2_nife1_drag=false;
//         this.hand_arrow7.setVisible(false);

//         this.tweens.add({targets:this.l2_nife1,y:590,ease: 'Quadratic',duration:1000,onComplete:() => {
//         this.l2_nife1_drag=false;
//         this.l2_nife1.setVisible(false);

//         this.yellow_roll_pice0001.setTexture('yellow_roll_pice0008');
//         this.tweens.add({targets:this.yellow_roll_pice0001,y:1200,ease: 'Quadratic',duration:1000,onComplete:() => {
//            this.yellow_roll_pice0002.setVisible(true);
//         this.l2_nife2.setVisible(true);
        
//          this.hand_arrow8.setVisible(true);
//          this.tweens.add({targets: this.hand_arrow8,scaleX: 1.09,scaleY: 1.09,duration: 1000 / 2,ease: 'Linear',yoyo: true,repeat: -1,});


//           }},this);
//           }},this);
//           },this);


//            this.yellow_roll_pice0002 = this.add.sprite(640,420, "yellow_roll_pice0005");
//            this.yellow_roll_pice0002.setVisible(false);

// ////////////////////////////////////////////////////step2_nife


//         this.l2_nife2 = this.add.sprite(640,150, "l2_nife").setScale(0.9);
//         this.l2_nife2.setVisible(false);
//         this.l2_nife2.setInteractive({useHandCursor:true});
//         this.l2_nife2.on('pointerdown',function(){
//         this.l2_nife2.disableInteractive();
//         this.hand_arrow8.setVisible(false);

//         this.l2_nife2_drag=true;
//         this.nife_rect4.setInteractive({useHandCursor:true});

//         this.hand_arrow9.setVisible(true);
//         this.tweens.add({targets: this.hand_arrow9,scaleX: 1.09,scaleY: 1.09,duration: 1000 / 2,ease: 'Linear',yoyo: true,repeat: -1,});

//         },this);



// this.nife_rect4 = this.add.rectangle(640, 480, 130, 130, 0xff0000,0).setOrigin(0.5);
//         // this.nife_rect4.setInteractive({useHandCursor:true});
//         this.nife_rect4.on('pointerdown',function(){
//         this.nife_rect4.disableInteractive();
//         this.l2_nife2_drag=false;
//         this.hand_arrow9.setVisible(false);

//         this.tweens.add({targets:this.l2_nife2,y:590,ease: 'Quadratic',duration:1000,onComplete:() => {
//         this.yellow_roll_pice0002.setTexture('yellow_roll_pice0006');
//         this.l2_nife2_drag=true;
//         this.nife_rect5.setInteractive({useHandCursor:true});
//         this.hand_arrow9.setVisible(true);
//         this.tweens.add({targets: this.hand_arrow9,scaleX: 1.09,scaleY: 1.09,duration: 1000 / 2,ease: 'Linear',yoyo: true,repeat: -1,});

//           }},this);
//           },this);




//         this.nife_rect5 = this.add.rectangle(640, 400, 130, 130, 0xff0000,0).setOrigin(0.5);
//         // this.nife_rect5.setInteractive({useHandCursor:true});
//         this.nife_rect5.on('pointerdown',function(){
//         this.nife_rect5.disableInteractive();
//         this.l2_nife2_drag=false;
//         this.hand_arrow9.setVisible(false);

//         this.tweens.add({targets:this.l2_nife2,y:590,ease: 'Quadratic',duration:1000,onComplete:() => {
//         this.yellow_roll_pice0002.setTexture('yellow_roll_pice0007');
//         this.l2_nife2_drag=true;

//          this.hand_arrow9.setVisible(true);
//          this.tweens.add({targets: this.hand_arrow9,scaleX: 1.09,scaleY: 1.09,duration: 1000 / 2,ease: 'Linear',yoyo: true,repeat: -1,});

//         this.nife_rect6.setInteractive({useHandCursor:true});

//           }},this);
//           },this);


//         this.nife_rect6 = this.add.rectangle(640, 330, 130, 130, 0xff0000,0).setOrigin(0.5);
//         // this.nife_rect6.setInteractive({useHandCursor:true});
//         this.nife_rect6.on('pointerdown',function(){
//         this.nife_rect6.disableInteractive();
//         this.l2_nife2_drag=false;
//         this.hand_arrow9.setVisible(false);

//         this.tweens.add({targets:this.l2_nife2,y:590,ease: 'Quadratic',duration:1000,onComplete:() => {
//         this.l2_nife2_drag=false;
//         this.l2_nife2.setVisible(false);

//         this.yellow_roll_pice0002.setTexture('yellow_roll_pice0008');
//         this.tweens.add({targets:this.yellow_roll_pice0002,y:1200,ease: 'Quadratic',duration:1000,onComplete:() => {
         
//         this.l2_nife3.setVisible(true);

//          this.hand_arrow10.setVisible(true);
//          this.tweens.add({targets: this.hand_arrow10,scaleX: 1.09,scaleY: 1.09,duration: 1000 / 2,ease: 'Linear',yoyo: true,repeat: -1,});


//           }},this);
//           }},this);
//           },this);




//  ////////////////////////////////////////////chees_cutting


//         this.l2_nife3 = this.add.sprite(640,150, "l2_nife").setScale(0.9);
//         this.l2_nife3.setVisible(false);
//         this.l2_nife3.setInteractive({useHandCursor:true});
//         this.l2_nife3.on('pointerdown',function(){
//         this.l2_nife3.disableInteractive();
//         this.hand_arrow10.setVisible(false);
//         this.l2_nife3.setVisible(false);
//         this.chess_cutting0001.setVisible(true);

//            this.chess_Knife_drag=true;
//            this.chess_Knife_.setVisible(true);

//          this.hand_arrow11.setVisible(true);
//          this.tweens.add({targets: this.hand_arrow11,scaleX: 1.09,scaleY: 1.09,duration: 1000 / 2,ease: 'Linear',yoyo: true,repeat: -1,});

//         this.chess_rect1.setInteractive({useHandCursor:true});

//           },this);

//         ///////////////////////////////////////////

//            this.chess_cutting0001 = this.add.sprite(640,450, "chess_cutting0001");
//            this.chess_cutting0001.setVisible(false);

//            this.l2_leef0001 = this.add.sprite(640,450, "l2_leef0001");
//            this.l2_leef0001.setVisible(false);

//            this.pundu_cutting0001 = this.add.sprite(640,450, "pundu_cutting0001");
//            this.pundu_cutting0001.setVisible(false);

//            this.meat_cutting0001 = this.add.sprite(640,450, "meat_cutting0001");
//            this.meat_cutting0001.setVisible(false);




//         ///////////////////////////////////////////



//            this.chess_Knife_ = this.add.sprite(640,150, "l2Knife_ani0001");
//            this.chess_Knife_.setVisible(false);



//         this.chess_rect1 = this.add.rectangle(750, 450, 210, 250, 0xff0000,0).setOrigin(0.5);
//         // this.chess_rect1.setInteractive({useHandCursor:true});
//         this.chess_rect1.on('pointerdown',function(){
//         this.chess_rect1.disableInteractive();
//          this.hand_arrow11.setVisible(false);
//         this.chess_cutting0001.setTexture('chess_cutting0002');

//         this.chess_rect2.setInteractive({useHandCursor:true});

//          this.hand_arrow12.setVisible(true);
//          this.tweens.add({targets: this.hand_arrow12,scaleX: 1.09,scaleY: 1.09,duration: 1000 / 2,ease: 'Linear',yoyo: true,repeat: -1,});

//         },this);


//          this.chess_rect2 = this.add.rectangle(650, 450, 210, 250, 0xff0000,0).setOrigin(0.5);
//         // this.chess_rect2.setInteractive({useHandCursor:true});
//         this.chess_rect2.on('pointerdown',function(){
//         this.chess_rect2.disableInteractive();
//          this.hand_arrow12.setVisible(false);
//         this.chess_cutting0001.setTexture('chess_cutting0003');

//         this.chess_rect3.setInteractive({useHandCursor:true});

//          this.hand_arrow13.setVisible(true);
//          this.tweens.add({targets: this.hand_arrow13,scaleX: 1.09,scaleY: 1.09,duration: 1000 / 2,ease: 'Linear',yoyo: true,repeat: -1,});


//         },this);


//         this.chess_rect3 = this.add.rectangle(500, 450, 210, 250, 0xff0000,0).setOrigin(0.5);
//         // this.chess_rect3.setInteractive({useHandCursor:true});
//         this.chess_rect3.on('pointerdown',function(){
//         this.chess_rect3.disableInteractive();
//          this.hand_arrow13.setVisible(false);
//         this.chess_cutting0001.setTexture('chess_cutting0005');

//         this.chess_rect4.setInteractive({useHandCursor:true});

//          this.hand_arrow14.setVisible(true);
//          this.tweens.add({targets: this.hand_arrow14,scaleX: 1.09,scaleY: 1.09,duration: 1000 / 2,ease: 'Linear',yoyo: true,repeat: -1,});


//         },this);





//         this.chess_rect4 = this.add.rectangle(750, 450, 210, 250, 0xff0000,0).setOrigin(0.5);
//         // this.chess_rect4.setInteractive({useHandCursor:true});
//         this.chess_rect4.on('pointerdown',function(){
//         this.chess_rect4.disableInteractive();
//          this.hand_arrow14.setVisible(false);
//         this.chess_cutting0001.setTexture('chess_cutting0006');

//         this.chess_rect5.setInteractive({useHandCursor:true});

//          this.hand_arrow15.setVisible(true);
//          this.tweens.add({targets: this.hand_arrow15,scaleX: 1.09,scaleY: 1.09,duration: 1000 / 2,ease: 'Linear',yoyo: true,repeat: -1,});

//         },this);


//         this.chess_rect5 = this.add.rectangle(650, 450, 210, 250, 0xff0000,0).setOrigin(0.5);
//         // this.chess_rect5.setInteractive({useHandCursor:true});
//         this.chess_rect5.on('pointerdown',function(){
//         this.chess_rect5.disableInteractive();
//          this.hand_arrow15.setVisible(false);
//         this.chess_cutting0001.setTexture('chess_cutting0007');

//         this.chess_rect6.setInteractive({useHandCursor:true});

//          this.hand_arrow16.setVisible(true);
//          this.tweens.add({targets: this.hand_arrow16,scaleX: 1.09,scaleY: 1.09,duration: 1000 / 2,ease: 'Linear',yoyo: true,repeat: -1,});


//         },this);


//         this.chess_rect6 = this.add.rectangle(500, 450, 210, 250, 0xff0000,0).setOrigin(0.5);
//         // this.chess_rect6.setInteractive({useHandCursor:true});
//         this.chess_rect6.on('pointerdown',function(){
//         this.chess_rect6.disableInteractive();
//          this.hand_arrow16.setVisible(false);
//         this.chess_cutting0001.setTexture('chess_cutting0008');

//         this.chess_rect7.setInteractive({useHandCursor:true});

//         this.hand_arrow17.setVisible(true);
//          this.tweens.add({targets: this.hand_arrow17,scaleX: 1.09,scaleY: 1.09,duration: 1000 / 2,ease: 'Linear',yoyo: true,repeat: -1,});


//         },this);


//          this.chess_rect7 = this.add.rectangle(750, 450, 210, 250, 0xff0000,0).setOrigin(0.5);
//         // this.chess_rect7.setInteractive({useHandCursor:true});
//         this.chess_rect7.on('pointerdown',function(){
//         this.chess_rect7.disableInteractive();
//          this.hand_arrow17.setVisible(false);
//         this.chess_cutting0001.setTexture('chess_cutting0009');

//         this.chess_rect8.setInteractive({useHandCursor:true});

//          this.hand_arrow18.setVisible(true);
//          this.tweens.add({targets: this.hand_arrow18,scaleX: 1.09,scaleY: 1.09,duration: 1000 / 2,ease: 'Linear',yoyo: true,repeat: -1,});

//         },this);


//         this.chess_rect8 = this.add.rectangle(650, 450, 210, 250, 0xff0000,0).setOrigin(0.5);
//         // this.chess_rect8.setInteractive({useHandCursor:true});
//         this.chess_rect8.on('pointerdown',function(){
//         this.chess_rect8.disableInteractive();
//          this.hand_arrow18.setVisible(false);
//         this.chess_cutting0001.setTexture('chess_cutting00010');

//         this.chess_rect9.setInteractive({useHandCursor:true});

//          this.hand_arrow19.setVisible(true);
//          this.tweens.add({targets: this.hand_arrow19,scaleX: 1.09,scaleY: 1.09,duration: 1000 / 2,ease: 'Linear',yoyo: true,repeat: -1,});


//         },this);


//         this.chess_rect9 = this.add.rectangle(500, 450, 210, 250, 0xff0000,0).setOrigin(0.5);
//         // this.chess_rect9.setInteractive({useHandCursor:true});
//         this.chess_rect9.on('pointerdown',function(){
//         this.chess_rect9.disableInteractive();
//          this.hand_arrow19.setVisible(false);
//         this.chess_cutting0001.setTexture('chess_cutting00012');

//             this.chess_Knife_drag=false;
//             this.chess_Knife_.setVisible(false);


//         this.time.delayedCall(800,() => {
//         this.chess_cutting0001.setVisible(false);

//            this.l2_leef0001.setVisible(true);

//             this.chess_Knife_drag=true;
//             this.chess_Knife_.setVisible(true);
//            this.leef_rect1.setInteractive({useHandCursor:true});

//            this.arrow1.setVisible(true);


//         },this);

//         },this);


//     ////////////////////////////////////////////leef_cutting


//         this.leef_rect1 = this.add.rectangle(780, 450, 250, 350, 0xff0000,0).setOrigin(0.5);
//         // this.leef_rect1.setInteractive({useHandCursor:true});
//         this.leef_rect1.on('pointerdown',function(){
//         this.leef_rect1.disableInteractive();
//            this.l2_leef0001.setTexture('l2_leef0003');
//         this.leef_rect2.setInteractive({useHandCursor:true});

//            this.arrow1.setVisible(false);
//            this.arrow2.setVisible(true);

//            },this);




//         this.leef_rect2 = this.add.rectangle(680, 450, 250, 350, 0xff0000,0).setOrigin(0.5);
//         // this.leef_rect2.setInteractive({useHandCursor:true});
//         this.leef_rect2.on('pointerdown',function(){
//         this.leef_rect2.disableInteractive();
//            this.l2_leef0001.setTexture('l2_leef0004');
//         this.leef_rect3.setInteractive({useHandCursor:true});
//            this.arrow2.setVisible(false);
//            this.arrow3.setVisible(true);


//            },this);



//         this.leef_rect3 = this.add.rectangle(550, 450, 250, 350, 0xff0000,0).setOrigin(0.5);
//         // this.leef_rect3.setInteractive({useHandCursor:true});
//         this.leef_rect3.on('pointerdown',function(){
//         this.leef_rect3.disableInteractive();
//            this.arrow3.setVisible(false);

//            this.l2_leef0001.setTexture('l2_leef0006');

//             this.chess_Knife_drag=false;
//             this.chess_Knife_.setVisible(false);

//             this.time.delayedCall(800,() => {
//             this.l2_leef0001.setVisible(false);
//            this.pundu_cutting0001.setVisible(true);

//              this.chess_Knife_drag=true;
//              this.chess_Knife_.setVisible(true);
//         this.pundu_rect1.setInteractive({useHandCursor:true});

//         this.arrow4.setVisible(true);


//            },this);
//            },this);

//         ///////////////////////////////////////////////////////////pundu_cutting


//         this.pundu_rect1 = this.add.rectangle(730, 450, 150, 350, 0xff0000,0).setOrigin(0.5);
//         // this.pundu_rect1.setInteractive({useHandCursor:true});
//         this.pundu_rect1.on('pointerdown',function(){
//         this.pundu_rect1.disableInteractive();

//         this.pundu_cutting0001.setTexture('pundu_cutting0002');
//         this.pundu_rect2.setInteractive({useHandCursor:true});

//         this.arrow4.setVisible(false);
//         this.arrow5.setVisible(true);


//          },this);



//          this.pundu_rect2 = this.add.rectangle(630, 450, 150, 350, 0xff0000,0).setOrigin(0.5);
//         // this.pundu_rect2.setInteractive({useHandCursor:true});
//         this.pundu_rect2.on('pointerdown',function(){
//         this.pundu_rect2.disableInteractive();

//         this.pundu_cutting0001.setTexture('pundu_cutting0003');
//         this.pundu_rect3.setInteractive({useHandCursor:true});

//           this.arrow5.setVisible(false);
//           this.arrow6.setVisible(true);


//          },this);


// //////////////////////////////////


//          this.pundu_rect3 = this.add.rectangle(560, 450, 150, 350, 0xff0000,0).setOrigin(0.5);
//         // this.pundu_rect3.setInteractive({useHandCursor:true});
//         this.pundu_rect3.on('pointerdown',function(){
//         this.pundu_rect3.disableInteractive();
//            this.pundu_cutting0001.setTexture('pundu_cutting0004');
//            this.arrow6.setVisible(false);

//              this.chess_Knife_drag=false;
//              this.chess_Knife_.setVisible(false);

//             this.time.delayedCall(800,() => {
//             this.pundu_cutting0001.setVisible(false);
//             this.meat_cutting0001.setVisible(true);
          
//              this.chess_Knife_drag=true;
//              this.chess_Knife_.setVisible(true);
       
//         this.meet_cutting_rect1.setInteractive({useHandCursor:true});

//           this.arrow7.setVisible(true);
//            },this);

//          },this);


//     /////////////////////////////////////////meet_cutting

//         this.meet_cutting_rect1 = this.add.rectangle(760, 450, 220, 350, 0xff0000,0).setOrigin(0.5);
//         // this.meet_cutting_rect1.setInteractive({useHandCursor:true});
//         this.meet_cutting_rect1.on('pointerdown',function(){
//         this.meet_cutting_rect1.disableInteractive();
//           this.arrow7.setVisible(false);
//           this.arrow8.setVisible(true);

//             this.meat_cutting0001.setTexture('meat_cutting0002');

//            this.meet_cutting_rect2.setInteractive({useHandCursor:true});

//        },this);


//         this.meet_cutting_rect2 = this.add.rectangle(630, 450, 220, 350, 0xff0000,0).setOrigin(0.5);
//         // this.meet_cutting_rect2.setInteractive({useHandCursor:true});
//         this.meet_cutting_rect2.on('pointerdown',function(){
//         this.meet_cutting_rect2.disableInteractive();
//           this.arrow8.setVisible(false);
//           this.arrow9.setVisible(true);

//             this.meat_cutting0001.setTexture('meat_cutting0003');
//             this.meet_cutting_rect3.setInteractive({useHandCursor:true});

//        },this);


//         this.meet_cutting_rect3 = this.add.rectangle(500, 450, 220, 350, 0xff0000,0).setOrigin(0.5);
//         // this.meet_cutting_rect3.setInteractive({useHandCursor:true});
//         this.meet_cutting_rect3.on('pointerdown',function(){
//         this.meet_cutting_rect3.disableInteractive();
//            this.arrow9.setVisible(false);
             
//             this.meat_cutting0001.setTexture('meat_cutting0004');

         
//          this.meet_cutting_rect4.setInteractive({useHandCursor:true});

//           this.arrow7.setVisible(true);

//        },this);



//                 this.meet_cutting_rect4 = this.add.rectangle(760, 450, 220, 350, 0xff0000,0).setOrigin(0.5);
//         // this.meet_cutting_rect4.setInteractive({useHandCursor:true});
//         this.meet_cutting_rect4.on('pointerdown',function(){
//         this.meet_cutting_rect4.disableInteractive();
//           this.arrow7.setVisible(false);
//           this.arrow8.setVisible(true);

//             this.meat_cutting0001.setTexture('meat_cutting0005');

//            this.meet_cutting_rect5.setInteractive({useHandCursor:true});

//        },this);


//         this.meet_cutting_rect5 = this.add.rectangle(630, 450, 220, 350, 0xff0000,0).setOrigin(0.5);
//         // this.meet_cutting_rect5.setInteractive({useHandCursor:true});
//         this.meet_cutting_rect5.on('pointerdown',function(){
//         this.meet_cutting_rect5.disableInteractive();
//           this.arrow8.setVisible(false);
//           this.arrow9.setVisible(true);

//             this.meat_cutting0001.setTexture('meat_cutting0006');
//             this.meet_cutting_rect6.setInteractive({useHandCursor:true});

//        },this);


//         this.meet_cutting_rect6 = this.add.rectangle(500, 450, 220, 350, 0xff0000,0).setOrigin(0.5);
//         // this.meet_cutting_rect6.setInteractive({useHandCursor:true});
//         this.meet_cutting_rect6.on('pointerdown',function(){
//         this.meet_cutting_rect6.disableInteractive();
//           this.arrow9.setVisible(false);
             
//           this.meat_cutting0001.setTexture('meat_cutting0008');

//             this.chess_Knife_drag=false;
//              this.chess_Knife_.setVisible(false);

//              this.time.delayedCall(800,() => {

//               this.meat_cutting0001.setVisible(false);

//               this.scene.start('level2_jar_cocking');

//              },this);


//        },this);


//     ////////////////////////////////////////////

//           this.hand_arrow1 = this.add.sprite(750,330, "hand_arrow");
//           this.hand_arrow1.setVisible(false);

//           this.hand_arrow2 = this.add.sprite(680,330, "hand_arrow");
//           this.hand_arrow2.setVisible(false);

//           this.hand_arrow3 = this.add.sprite(510,330, "hand_arrow");
//           this.hand_arrow3.setVisible(false);

//           this.hand_arrow4 = this.add.sprite(680,410, "hand_arrow");
//           this.hand_arrow4.setVisible(false);

//           this.hand_arrow5 = this.add.sprite(640,410, "hand_arrow");
//           this.hand_arrow5.setVisible(false);

//           this.hand_arrow6 = this.add.sprite(708,70, "hand_arrow");
//           this.hand_arrow6.setVisible(false);

//           this.hand_arrow7 = this.add.sprite(640,160, "hand_arrow");
//           this.hand_arrow7.setVisible(false);

//           this.hand_arrow8 = this.add.sprite(708,70, "hand_arrow");
//           this.hand_arrow8.setVisible(false);

//           this.hand_arrow9 = this.add.sprite(640,160, "hand_arrow");
//           this.hand_arrow9.setVisible(false);

//           this.hand_arrow10 = this.add.sprite(708,70, "hand_arrow");
//           this.hand_arrow10.setVisible(false);

//           this.hand_arrow11 = this.add.sprite(750,370, "hand_arrow");
//           this.hand_arrow11.setVisible(false);

//           this.hand_arrow12 = this.add.sprite(650,370, "hand_arrow");
//           this.hand_arrow12.setVisible(false);

//           this.hand_arrow13 = this.add.sprite(500,370, "hand_arrow");
//           this.hand_arrow13.setVisible(false);

//           this.hand_arrow14 = this.add.sprite(750,370, "hand_arrow");
//           this.hand_arrow14.setVisible(false);

//           this.hand_arrow15 = this.add.sprite(650,370, "hand_arrow");
//           this.hand_arrow15.setVisible(false);

//           this.hand_arrow16 = this.add.sprite(500,370, "hand_arrow");
//           this.hand_arrow16.setVisible(false);

//           this.hand_arrow17 = this.add.sprite(750,370, "hand_arrow");
//           this.hand_arrow17.setVisible(false);

//           this.hand_arrow18 = this.add.sprite(650,370, "hand_arrow");
//           this.hand_arrow18.setVisible(false);

//           this.hand_arrow19 = this.add.sprite(500,370, "hand_arrow");
//           this.hand_arrow19.setVisible(false);



//     ////////////////////////////////////////////



  
//     // *********************************time event creation***********************************************  // 

//         // this.time.delayedCall(1000,() => {
            
//         // },this);
        
//     // *********************************drag & drop creation***********************************************  // 

//         // this.drag_image = this.add.image(450,692,'drag_image').setOrigin(0.5, 0.5);
//         // this.drag_image.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         // this.drag_image.on('drag', (pointer, dragX, dragY) => {
//         //     this.drag_image.x = dragX;
//         //     this.drag_image.y = dragY;
//         // });
//         // this.drag_image.on('dragend', () => {
//         //     if ((this.input.x>370 && this.input.x<480 && this.input.y>120 && this.input.y<220)){
//         //     this.drag_image.visible=false; 
//         //     }
//         //      else{
//         //      this.drag_image.x=430;
//         //      this.drag_image.y=320;
//         //      }
//         // },this);

//     // *********************************click_rectangle creation***********************************************  // 
//         // this.click_rect = this.add.rectangle(250, 250, 70, 150, 0xff0000,0).setOrigin(0.5);
//         // this.click_rect.setInteractive({useHandCursor:true});
//         // this.click_rect.on('pointerdown',function(){
//         // this.click_rect.disableInteractive();
//         // },this);

//     // ********************************************************************************  // 

//         // this.dummy_drag=true;
//         // this.dummy =this.add.sprite(226,403,'l2_cup1_ani');


//     // ****************************************************************************************************** //
            
//     // ***********************************Arrow *********************************************** //


        
       

//              var arrow_Posx = [780,680,550,730,630,560,760,630,500];
//              var arrow_Posy = [380,380,380,380,380,380,380,380,380];
             
//          for (var i = 1; i <= 50; i++) {
//             this['arrow' + i] = this.add.sprite(arrow_Posx[i - 1], arrow_Posy[i - 1], 'arrow');
//             this['arrow' + i].setOrigin(0.5);
//             this['arrow' + i].anims.create({key: 'arrow',
//                 frames: this.anims.generateFrameNumbers('arrow', { start: 0, end: 8 - 1 }),
//                 frameRate: 15,
//                 repeat: -1
//             });
//             this['arrow' + i].anims.play('arrow');
//             this['arrow' + i].setVisible(false);

//             if (i === 1 ) {
//                 this['arrow' + i].setVisible(false);
//                 // this['arrow' + i].rotation=1.58;
//             }

                    
            
//         }

//     // ********************************Collide creation************************************************** //

//           // this.mcir = this.add.graphics();
//         // this.mcir.fillStyle(0x666666, 0.1);
//         // this.mcir.fillRect(0, 0, 1280, 720);
//         // this.mcir.setInteractive(new Phaser.Geom.Rectangle(0, 0, 1280, 720), Phaser.Geom.Rectangle.Contains);
//         // this.mcir.on('pointerdown', function (pointer) {
//         //   this.mcnt1++;
//         //   this['xcnt' + this.mcnt1] = pointer.x;
//         //   this['ycnt' + this.mcnt1] = pointer.y;
//         //   const circle = this.add.graphics();
//         //   circle.fillStyle(0x000000, 0.5);
//         //   circle.fillCircle(pointer.x, pointer.y, 20);
//         //   circle.setDepth(1);
//         //   console.log(this['xcnt' + this.mcnt1] + ':' + this['ycnt' + this.mcnt1]);
//         // }, this);

//     // ************************************Ad creation********************************************** //
        
//         // const { lockedItem: lock_r1, adfaildbtn: adfaildbtn_r1, addismisbtn: addismisbtn_r1 } = 
//         // createLockedItem(this, 139, 585, 'panel_acc0001ad',  () => {
//         // this.panel_acc0001.setInteractive({ useHandCursor: true });
//             // });
//         // lock_r1.setScale(0.43); 
//         // this.acc_group.add(lock_r1); 

//     // ********************************************************************************** //

//        this.playbtn=this.add.image(1190,640,'btn2').setOrigin(0.5, 0.5).setScale(0);
//         this.playbtn.setInteractive({ useHandCursor: true });
//         this.playbtn.on('pointerover',function(){this.playbtn.setScale(1.05)},this);
//         this.playbtn.on('pointerout',function(){this.playbtn.setScale(1)},this);
//         this.playbtn.on('pointerdown',this.enterRoom,this);

//         this.morebtn=this.add.image(60,660,'btn4').setOrigin(0.5, 0.5).setScale(0);
//         this.morebtn.setInteractive({ useHandCursor: true });
//         this.morebtn.on('pointerover',function(){this.morebtn.setScale(1.05)},this);
//         this.morebtn.on('pointerout',function(){this.morebtn.setScale(1)},this);
//         this.morebtn.on('pointerup',this.morebtnLink,this);

      

//          this.logo =this.add.image(165,55,'logo').setScale(0.65);
//         this.logo.setInteractive({pixelPerfect:true});
//         this.logo.on('pointerup',this.LogoLink,this);

//           this.musicBtn = this.add.sprite(1212,50,"music-on");
//         this.musicBtn.setInteractive();
//         this.musicBtn.on('pointerup',this.changemusic,this);

//     this.shutter_group = this.add.container();
//     this.shutter_bg =this.add.image(320,360,'shutter_bg');
//     this.shutter_bg2 =this.add.image(960,360,'shutter_bg2');
//     this.shutter_group.add(this.shutter_bg);
//     this.shutter_group.add(this.shutter_bg2);

//     this.tweens.add({targets:this.shutter_group,y:-720,ease: 'Quadratic',duration:1200,onComplete:() => {
//         this.l2_flour.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});

      

//     }},this);

//         if (!this.sound.mute) {
//         this.musicBtn.setTexture('music-on');
//         } else {
//         this.musicBtn.setTexture('music-off');
//         }
// }
// update() {
//   // console.log(this.input.x + ':' + this.input.y); 

//   if (this.dummy_drag) {
//         this.dummy.x = this.input.activePointer.x ;
//         this.dummy.y = this.input.activePointer.y;
//         } 

//         if (this.l2Knife_ani0001_drag) {
//         this.l2Knife_ani0001.x = this.input.activePointer.x;
//         this.l2Knife_ani0001.y = this.input.activePointer.y+100;
//         } 


//         if (this.l2_nife1_drag) {
//         this.l2_nife1.x = this.input.activePointer.x+110;
//         this.l2_nife1.y = this.input.activePointer.y+40;
//         } 

//         if (this.l2_nife2_drag) {
//         this.l2_nife2.x = this.input.activePointer.x+110;
//         this.l2_nife2.y = this.input.activePointer.y+40;
//         } 


//          if (this.chess_Knife_drag) {
//         this.chess_Knife_.x = this.input.activePointer.x;
//         this.chess_Knife_.y = this.input.activePointer.y+100;
//         } 



//   }
          
// morebtnLink (){
//   YYGGames.navigate("game", "morebutton");
// }
// LogoLink (){
//       YYGGames.navigate("game", "logo");
// }
// enterRoom (){



//         this.anims.remove('l2hand_ani_key');
//         this.anims.remove('l2hand1_ani_key');
//         this.anims.remove('l2hand1_ani1_key');
//         this.anims.remove('time_liner1_key');
//         this.anims.remove('l2_flour1_key');
//         this.anims.remove('l2_cup_ani_key');
//         this.anims.remove('l2water_ani1_key');
//         this.anims.remove('time_liner1_key');
//         this.anims.remove('l2_cup_ani_key1');



//     this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     var state = 'level2_jar_cocking';
//     MyShowAD(this, state);
//     }},this);
//    }
  
// changemusic() {
//      if (!this.sound.mute) {
//     this.musicBtn.setTexture('music-off');
//     this.sound.mute = true;
//   } else {
//     this.musicBtn.setTexture('music-on');
//     this.sound.mute = false;
//   }
//   }   
// }


// ///////////////////////////////////////////////////////

// class level2_jar_cocking extends Phaser.Scene {

// constructor() {
//  super('level2_jar_cocking');
// }
//  create() {
     
//     this.levelGroup = this.add.container();

//     this.l2_bg = this.add.sprite(320,360, "l2_bg");
//     this.l2_bg1 = this.add.sprite(960,360, "l2_bg1");


//     this.levelGroup.add(this.l2_bg);
//     this.levelGroup.add(this.l2_bg1);

//     //////////////////////////////////////////////////////////

//         this.l2_jar_machine = this.add.sprite(960,280, "l2_jar_machine");

//         this.l2_jar_machineFrame1 = this.anims.generateFrameNames('l2_jar_machine', {start: 1,end: 6,zeroPad: 1,
//         prefix: 'l2_jar_machine'});
//         this.anims.create({key: 'l2_jar_machine_key',frames: this.l2_jar_machineFrame1,frameRate:7,}); 
//         this.l2_jar_machine.on("animationcomplete",function() {
//                this.time_liner2.setVisible(false);
//                 this.nxt_btn1.setVisible(true);


//        },this);


//                this.time_liner2 = this.add.sprite(270,400, "time_liner");
//                this.time_liner2.setVisible(false);



//         this.time_liner2Frame1 = this.anims.generateFrameNames('time_liner', {start: 0,end: 14,zeroPad: 1,
//         prefix: 'time_liner'});
//         this.anims.create({key: 'time_liner2_key',frames: this.time_liner2Frame1,frameRate:17,}); 
//         this.time_liner2.on("animationcomplete",function() {

//              },this);


//     //////////////////////////////////////////////////////////

//          this.l2_yellow_plat1 = this.add.sprite(730,280, "l2_yellow_plat");
//          this.l2_yellow_plat1.setFrame('l2_yellow_plat1')
//          this.l2_yellow_plat1.setVisible(false);


//         this.l2_yellow_plat1Frame1 = this.anims.generateFrameNames('l2_yellow_plat', {start: 1,end: 5,zeroPad: 1,
//         prefix: 'l2_yellow_plat'});
//         this.anims.create({key: 'l2_yellow_plat1_key',frames: this.l2_yellow_plat1Frame1,frameRate:10,}); 

//         this.l2_yellow_plat1.on("animationcomplete",function() {
//         this.l2_green_plat.setVisible(true);
//         this.arrow1.setVisible(true);

//        },this);




//         this.l2_yellow_plat = this.add.sprite(470,500, "l2_yellow_plat");
//         // this.l2_yellow_plat.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.l2_yellow_plat.on('drag', (pointer, dragX, dragY) => {
//         this.l2_yellow_plat.x = dragX;
//         this.l2_yellow_plat.y = dragY;

//        this.arrow1.setVisible(false);
//        this.arrow2.setVisible(true);


//            this.children.bringToTop(this.l2_yellow_plat);
//            this.children.bringToTop(this.logo);
//            this.children.bringToTop(this.musicBtn);
//            this.children.bringToTop(this.shutter_bg);

//         });
//         this.l2_yellow_plat.on('dragend', () => {
//             if ((this.input.x>700 && this.input.x<990 && this.input.y>110 && this.input.y<410)){
//             this.l2_yellow_plat.setVisible(false);
//             this.l2_yellow_plat1.setVisible(true);
//             this.l2_yellow_plat1.play('l2_yellow_plat1_key');
//             this.arrow2.setVisible(false);


            
//             }
//              else{

//                   this.arrow1.setVisible(true);
//                   this.arrow2.setVisible(false);

//              this.l2_yellow_plat.x=470;
//              this.l2_yellow_plat.y=500;
//              }
//         },this);

//     //////////////////////////////////////////////////////////

//     this.l2_green_plat1 = this.add.sprite(730,280, "l2_green_plat").setScale(0.95);
//     this.l2_green_plat1.setFrame('l2_green_plat1')
//     this.l2_green_plat1.setVisible(false);


//         this.l2_green_plat1Frame1 = this.anims.generateFrameNames('l2_green_plat', {start: 1,end: 4,zeroPad: 1,
//         prefix: 'l2_green_plat'});
//         this.anims.create({key: 'l2_green_plat1_key',frames: this.l2_green_plat1Frame1,frameRate:10,}); 
//         this.l2_green_plat1.on("animationcomplete",function() {
//        this.l2_green_plat1.setVisible(false);

//         this.arrow1.setVisible(true);
//        this.l2_pundu_plat.setVisible(true);

//        },this);



//         this.l2_green_plat = this.add.sprite(470,500, "l2_green_plat");
//         this.l2_green_plat.setVisible(false);
//         this.l2_green_plat.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.l2_green_plat.on('drag', (pointer, dragX, dragY) => {
//             this.l2_green_plat.x = dragX;
//             this.l2_green_plat.y = dragY;

//        this.arrow1.setVisible(false);
//        this.arrow2.setVisible(true);


//            this.children.bringToTop(this.l2_green_plat);
//            this.children.bringToTop(this.logo);
//            this.children.bringToTop(this.musicBtn);
//            this.children.bringToTop(this.shutter_bg);

//         });
//         this.l2_green_plat.on('dragend', () => {
//             if ((this.input.x>700 && this.input.x<990 && this.input.y>110 && this.input.y<410)){
//             this.l2_green_plat.setVisible(false);
//             this.l2_green_plat1.setVisible(true);
//             this.l2_green_plat1.play('l2_green_plat1_key');
//             this.arrow2.setVisible(false);


            
//             }
//              else{

//                   this.arrow1.setVisible(true);
//                   this.arrow2.setVisible(false);

//              this.l2_green_plat.x=470;
//              this.l2_green_plat.y=500;
//              }
//         },this);



//     //////////////////////////////////////////////////////////


//     this.l2_pundu_plat1 = this.add.sprite(585,290, "l2_pundu_plat");
//     this.l2_pundu_plat1.setFrame('l2_pundu_plat1')
//     this.l2_pundu_plat1.setVisible(false);


//         this.l2_pundu_plat1Frame1 = this.anims.generateFrameNames('l2_pundu_plat', {start: 1,end: 4,zeroPad: 1,
//         prefix: 'l2_pundu_plat'});
//         this.anims.create({key: 'l2_pundu_plat1_key',frames: this.l2_pundu_plat1Frame1,frameRate:10,}); 
//         this.l2_pundu_plat1.on("animationcomplete",function() {
//         this.l2_pundu_plat1.setVisible(false);

//         this.arrow1.setVisible(true);
//         this.l2_red_plat.setVisible(true);





//        },this);


//         this.l2_pundu_plat = this.add.sprite(600,300, "l2_pundu_plat");
//         this.l2_pundu_plat.setVisible(false);
//         this.l2_pundu_plat.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.l2_pundu_plat.on('drag', (pointer, dragX, dragY) => {
//             this.l2_pundu_plat.x = dragX;
//             this.l2_pundu_plat.y = dragY;

//        this.arrow1.setVisible(false);
//        this.arrow2.setVisible(true);


//            this.children.bringToTop(this.l2_pundu_plat);
//            this.children.bringToTop(this.logo);
//            this.children.bringToTop(this.musicBtn);
//            this.children.bringToTop(this.shutter_bg);

//         });
//         this.l2_pundu_plat.on('dragend', () => {
//             if ((this.input.x>700 && this.input.x<990 && this.input.y>110 && this.input.y<410)){
//             this.l2_pundu_plat.setVisible(false);
//             this.l2_pundu_plat1.setVisible(true);
//             this.l2_pundu_plat1.play('l2_pundu_plat1_key');
//             this.arrow2.setVisible(false);


            
//             }
//              else{

//                   this.arrow1.setVisible(true);
//                   this.arrow2.setVisible(false);

//              this.l2_pundu_plat.x=600;
//              this.l2_pundu_plat.y=300;
//              }
//         },this);


//     //////////////////////////////////////////////////////////


//     this.l2_red_plat1 = this.add.sprite(730,280, "l2_red_plat");
//     this.l2_red_plat1.setFrame('l2_red_plat1')
//     this.l2_red_plat1.setVisible(false);


//         this.l2_red_plat1Frame1 = this.anims.generateFrameNames('l2_red_plat', {start: 1,end: 4,zeroPad: 1,
//         prefix: 'l2_red_plat'});
//         this.anims.create({key: 'l2_red_plat1_key',frames: this.l2_red_plat1Frame1,frameRate:10,}); 
//         this.l2_red_plat1.on("animationcomplete",function() {
//         this.l2_red_plat1.setVisible(false);

//         this.machin_rect.setInteractive({useHandCursor:true});

//         this.arrow3.setVisible(true);
//        },this);



//         this.l2_red_plat = this.add.sprite(470,500, "l2_red_plat");
//         this.l2_red_plat.setVisible(false);
//         this.l2_red_plat.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.l2_red_plat.on('drag', (pointer, dragX, dragY) => {
//             this.l2_red_plat.x = dragX;
//             this.l2_red_plat.y = dragY;

//        this.arrow1.setVisible(false);
//        this.arrow2.setVisible(true);


//            this.children.bringToTop(this.l2_red_plat);
//            this.children.bringToTop(this.logo);
//            this.children.bringToTop(this.musicBtn);
//            this.children.bringToTop(this.shutter_bg);

//         });
//         this.l2_red_plat.on('dragend', () => {
//             if ((this.input.x>700 && this.input.x<990 && this.input.y>110 && this.input.y<410)){
//             this.l2_red_plat.setVisible(false);
//             this.l2_red_plat1.setVisible(true);
//             this.l2_red_plat1.play('l2_red_plat1_key');
//             this.arrow2.setVisible(false);


            
//             }
//              else{

//                   this.arrow1.setVisible(true);
//                   this.arrow2.setVisible(false);

//              this.l2_red_plat.x=470;
//              this.l2_red_plat.y=500;
//              }
//         },this);

//     //////////////////////////////////////////////////////////
//     this.l2_Jar_top = this.add.sprite(827,396, "l2_Jar_top");
//     //////////////////////////////////////////////////////////


//         this.machin_rect = this.add.rectangle(1112, 205, 150, 150, 0xff0000,0).setOrigin(0.5);
//         // this.machin_rect.setInteractive({useHandCursor:true});
//         this.machin_rect.on('pointerdown',function(){
//         this.machin_rect.disableInteractive();
//         this.arrow3.setVisible(false);

//          // this.l2_jar_machine.setFrame('l2_jar_machine1');

//                this.l2_jar_machine.play('l2_jar_machine_key');

//                this.time_liner2.setVisible(true);
//                this.time_liner2.play('time_liner2_key');

       
     

      

//         },this);

//         this.nxt_btn1 = this.add.sprite(1150,650, "btn5");
//         this.nxt_btn1.setVisible(false);
//         this.nxt_btn1.setInteractive({useHandCursor:true});
//         this.nxt_btn1.on('pointerdown',function(){
//         this.nxt_btn1.disableInteractive();
//         this.nxt_btn1.setVisible(false);

//           this.l2_jar_machine.setVisible(false);
//           this.l2_Jar_top.setVisible(false);
//           this.l2_green_plat1.setVisible(false);
//           this.l2_pundu_plat1.setVisible(false);
//           this.l2_red_plat1.setVisible(false);
//           this.l2_yellow_plat.setVisible(false);

//           this.final_cup0001.setVisible(false);

//           this.final_cup0001.setVisible(true);
//           this.rde_cream_ani.setVisible(true);
//           this.spone_1.setVisible(true);
//           this.arrow4.setVisible(true);

      

//      },this);


//     //////////////////////////////////////////////////////////


//           this.final_cup0001 = this.add.sprite(400,400, "final_cup0001");
//           this.final_cup0001.setVisible(false);

//           this.rde_cream_ani = this.add.sprite(850,300, "rde_cream_ani");
//           this.rde_cream_ani.setVisible(false);

//           this.spone_1 = this.add.sprite(880,150, "spone_1");
//           this.spone_1.setVisible(false);
//           this.spone_1.setInteractive({useHandCursor:true});
//           this.spone_1.on('pointerdown',function(){
//           this.spone_1.disableInteractive();

//            this.spone_1_drag=true;

//            this.spone_rect.setInteractive({useHandCursor:true});

//           this.arrow4.setVisible(false);
//           this.arrow5.setVisible(true);
          

//            },this);




//           this.spone_2 = this.add.sprite(880,250, "spone_2");
//           this.spone_2.setVisible(false);


//              this.spone_rect = this.add.rectangle(1000, 300, 300, 150, 0xff0000,0).setOrigin(0.5);
//              // this.spone_rect.setInteractive({useHandCursor:true});
//              this.spone_rect.on('pointerdown',function(){
//              this.spone_rect.disableInteractive();

//               this.spone_1_drag=false;
//               this.spone_1.setVisible(false);
//               this.spone_2.setVisible(true);
//               this.spone_2_drag=true;

//              this.spone_rect1.setInteractive({useHandCursor:true});


//              this.arrow5.setVisible(false);
//              this.arrow6.setVisible(true);
          

//              },this);





//              this.spone_rect1 = this.add.rectangle(400, 400, 370, 150, 0xff0000,0).setOrigin(0.5);
//              // this.spone_rect1.setInteractive({useHandCursor:true});
//              this.spone_rect1.on('pointerdown',function(){
//              this.spone_rect1.disableInteractive();

//               this.final_cup0001.setTexture('final_cup0002');

//               this.spone_1_drag=true;
//               this.spone_2_drag=false;
//               this.spone_1.setVisible(true);
//               this.spone_2.setVisible(false);

//              this.spone_rect2.setInteractive({useHandCursor:true});

//               this.arrow6.setVisible(false);
//               this.arrow5.setVisible(true);
          



//              },this);


//     //////////////////////////////////////////////////////////


//              this.spone_rect2 = this.add.rectangle(1000, 300, 300, 150, 0xff0000,0).setOrigin(0.5);
//              // this.spone_rect2.setInteractive({useHandCursor:true});
//              this.spone_rect2.on('pointerdown',function(){
//              this.spone_rect2.disableInteractive();

//               this.spone_1_drag=false;
//               this.spone_1.setVisible(false);
//               this.spone_2.setVisible(true);
//               this.spone_2_drag=true;

//              this.spone_rect3.setInteractive({useHandCursor:true});

//                this.arrow5.setVisible(false);
//                this.arrow6.setVisible(true);
          

//              },this);



//              this.spone_rect3 = this.add.rectangle(400, 400, 370, 150, 0xff0000,0).setOrigin(0.5);
//              // this.spone_rect3.setInteractive({useHandCursor:true});
//              this.spone_rect3.on('pointerdown',function(){
//              this.spone_rect3.disableInteractive();

//               this.final_cup0001.setTexture('final_cup0003');

//               this.spone_1_drag=true;
//               this.spone_2_drag=false;
//               this.spone_1.setVisible(true);
//               this.spone_2.setVisible(false);

//              this.spone_rect4.setInteractive({useHandCursor:true});

//                this.arrow6.setVisible(false);
//                this.arrow5.setVisible(true);
          


//              },this);

//     //////////////////////////////////////////////////////////



//              this.spone_rect4 = this.add.rectangle(1000, 300, 300, 150, 0xff0000,0).setOrigin(0.5);
//              // this.spone_rect4.setInteractive({useHandCursor:true});
//              this.spone_rect4.on('pointerdown',function(){
//              this.spone_rect4.disableInteractive();

//               this.spone_1_drag=false;
//               this.spone_1.setVisible(false);
//               this.spone_2.setVisible(true);
//               this.spone_2_drag=true;

//              this.spone_rect5.setInteractive({useHandCursor:true});

//                this.arrow5.setVisible(false);
//                this.arrow6.setVisible(true);
          

//              },this);



//              this.spone_rect5 = this.add.rectangle(400, 400, 370, 150, 0xff0000,0).setOrigin(0.5);
//              // this.spone_rect5.setInteractive({useHandCursor:true});
//              this.spone_rect5.on('pointerdown',function(){
//              this.spone_rect5.disableInteractive();

//               this.final_cup0001.setTexture('final_cup0004');

//               this.spone_1_drag=false;
//               this.spone_2_drag=false;
//               this.spone_1.setVisible(false);
//               this.spone_2.setVisible(false);
//               this.rde_cream_ani.setVisible(false);

//                this.arrow6.setVisible(false);

//                this.tweens.add({targets:this.red_liqued,x:1000,ease: 'Quadratic',duration:1200,onComplete:() => {
//                this.arrow5.setVisible(true);

//              }},this);
//              },this);


//     //////////////////////////////////////////////////////////

//           this.red_chose_ani = this.add.sprite(410,250, "red_chose_ani");
//           this.red_chose_ani.setVisible(false);

//         this.red_chose_aniFrame1 = this.anims.generateFrameNames('red_chose_ani', {start: 0,end: 4,zeroPad: 1,
//         prefix: 'red_chose_ani'});
//         this.anims.create({key: 'red_chose_ani_key',frames: this.red_chose_aniFrame1,frameRate:10,repeat:-1,}); 
       
      

//         this.red_liqued = this.add.sprite(2000,400, "red_liqued");
//         this.red_liqued.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.red_liqued.on('drag', (pointer, dragX, dragY) => {
//             this.red_liqued.x = dragX;
//             this.red_liqued.y = dragY;

//         this.arrow5.setVisible(false);
//         this.arrow6.setVisible(true);

//         });
//         this.red_liqued.on('dragend', () => {
//             if ((this.input.x>135 && this.input.x<670 && this.input.y>200 && this.input.y<490)){
//             this.red_liqued.setVisible(false);
//             this.red_chose_ani.setVisible(true);
//         this.arrow6.setVisible(false);

//             this.red_chose_ani.play('red_chose_ani_key');

//             this.time.delayedCall(300,() => {
//             this.final_cup0001.setTexture('final_cup0006');

//             this.time.delayedCall(300,() => {
//             this.final_cup0001.setTexture('final_cup0007');

//             this.time.delayedCall(300,() => {
//             this.final_cup0001.setTexture('final_cup0008');

//             this.time.delayedCall(300,() => {
//             this.final_cup0001.setTexture('final_cup0009');

//             this.time.delayedCall(300,() => {
//             this.red_chose_ani.setVisible(false);

//         this.tweens.add({targets:this.top_final_cup,x:400,ease: 'Quadratic',duration:1200,onComplete:() => {
//         this.time.delayedCall(200,() => {

//           this.final_cup0001.setVisible(false);
//           this.top_final_cup.setVisible(false);
//           this.final_cup.setVisible(true);
//           this.l2_Ovan0001.setVisible(true);

//              this.oven_rect1.setInteractive({useHandCursor:true});

//                this.arrow7.setVisible(true);

//             },this);
//             }},this);
//             },this);
//             },this);
//             },this);
//             },this);
//             },this);



//             }
//              else{

//         this.arrow5.setVisible(true);
//         this.arrow6.setVisible(false);

//              this.red_liqued.x=1000;
//              this.red_liqued.y=400;
//              }
//         },this);
       

//           this.top_final_cup = this.add.sprite(2000,360, "top_final_cup");


//           this.l2_Ovan0001 = this.add.sprite(920,385, "l2_Ovan0001");
//           this.l2_Ovan0001.setVisible(false);
          


//     //////////////////////////////////////////////////////////

//              this.oven_rect1 = this.add.rectangle(880, 400, 480, 250, 0xff0000,0).setOrigin(0.5);
//              // this.oven_rect1.setInteractive({useHandCursor:true});
//              this.oven_rect1.on('pointerdown',function(){
//              this.oven_rect1.disableInteractive();

//               this.l2_Ovan0001.setTexture('l2_Ovan0002');
//               this.final_cup.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//                this.arrow7.setVisible(false);
//                this.arrow8.setVisible(true);

//                   },this);



//         this.final_cup = this.add.sprite(270,400, "final_cup");
//         this.final_cup.setVisible(false);
//         // this.final_cup.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.final_cup.on('drag', (pointer, dragX, dragY) => {
//             this.final_cup.x = dragX;
//             this.final_cup.y = dragY;


//                this.arrow8.setVisible(false);
//                this.arrow7.setVisible(true);

//         });
//         this.final_cup.on('dragend', () => {
//             if ((this.input.x>630 && this.input.x<1050 && this.input.y>210 && this.input.y<480)){
//             this.final_cup.setVisible(false);
//              this.l2_Ovan0001.setTexture('l2_Ovan0003');
//                this.arrow7.setVisible(false);

//              this.time.delayedCall(200,() => {
//              this.oven_rect2.setInteractive({useHandCursor:true});
//              this.arrow7.setVisible(true);
//              },this);

          

//             }
//              else{

//                this.arrow7.setVisible(false);
//                this.arrow8.setVisible(true);

//              this.final_cup.x=270;
//              this.final_cup.y=400;
//              }
//         },this);
//     //////////////////////////////////////////////////////////


//              this.oven_rect2 = this.add.rectangle(880, 400, 480, 250, 0xff0000,0).setOrigin(0.5);
//              // this.oven_rect2.setInteractive({useHandCursor:true});
//              this.oven_rect2.on('pointerdown',function(){
//              this.oven_rect2.disableInteractive();
//              this.arrow7.setVisible(false);
//              this.arrow9.setVisible(true);

//               this.l2_Ovan0001.setTexture('l2_Ovan0004');

              

//              this.oven_rect3.setInteractive({useHandCursor:true});

//               },this);



//              this.oven_rect3 = this.add.rectangle(1195, 263, 100, 100, 0xff0000,0).setOrigin(0.5);
//              // this.oven_rect3.setInteractive({useHandCursor:true});
//              this.oven_rect3.on('pointerdown',function(){
//              this.oven_rect3.disableInteractive();
//              this.arrow9.setVisible(false);
            
//               this.l2_Ovan0001.setTexture('l2_Ovan0005');

//                 this.time_liner1.setVisible(true);
//                 this.time_liner1.play('time_liner1_key');


//                 },this);




//                this.time_liner1 = this.add.sprite(270,400, "time_liner");
//                this.time_liner1.setVisible(false);




//         this.time_liner1Frame1 = this.anims.generateFrameNames('time_liner', {start: 0,end: 14,zeroPad: 1,
//         prefix: 'time_liner'});
//         this.anims.create({key: 'time_liner1_key',frames: this.time_liner1Frame1,frameRate:3,}); 
//         this.time_liner1.on("animationcomplete",function() {

//         this.time_liner1.setVisible(false);
//              this.l2_Ovan0001.setTexture('l2_Ovan0002');
//         this.final_cup1.setVisible(true);

//         this.final_cup1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});

//              this.arrow7.setVisible(true);

//        },this);


//         this.final_cup1 = this.add.sprite(880,385, "final_cup");
//         this.final_cup1.setVisible(false);
//         // this.final_cup1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.final_cup1.on('drag', (pointer, dragX, dragY) => {
//             this.final_cup1.x = dragX;
//             this.final_cup1.y = dragY;

//              this.arrow7.setVisible(false);
//              this.arrow8.setVisible(true);

            
//         });
//         this.final_cup1.on('dragend', () => {
//             if ((this.input.x>44 && this.input.x<522 && this.input.y>200 && this.input.y<600)){
//              this.final_cup1.setVisible(false);
//              this.arrow8.setVisible(false);
          
//                this.final_cup0001.setVisible(true);
//                this.final_cup0001.setTexture('final_cup00010');
//                this.l2_Ovan0001.setVisible(false);
             
//                this.nxt_btn2.setVisible(true);

//             }
//              else{

//                  this.arrow7.setVisible(true);
//              this.arrow8.setVisible(false);

//              this.final_cup1.x=880;
//              this.final_cup1.y=385;
//              }
//         },this);


//         this.nxt_btn2 = this.add.sprite(1140,400, "btn5");
//         this.nxt_btn2.setVisible(false);
//         this.nxt_btn2.setInteractive({useHandCursor:true});
//         this.nxt_btn2.on('pointerdown',function(){
//         this.nxt_btn2.disableInteractive();
//         this.nxt_btn2.setVisible(false);

//          this.l2_smock_ani.setVisible(true);

//          this.l2_smock_ani1.setVisible(true);


        


//          this.scene.start('l2_dekraction_lavel');


//             this.anims.remove('l2_yellow_plat1_key');
//             this.anims.remove('l2_green_plat1_key');
//             this.anims.remove('l2_pundu_plat1_key');
//             this.anims.remove('l2_red_plat1_key');
//             this.anims.remove('red_chose_ani_key');
//             this.anims.remove('time_liner1_key');
//             this.anims.remove('l2_smock_ani_key');
//             this.anims.remove('l2_smock_ani1_key');


//  },this);


//     ///////////////////////////////////////


//         this.l2_smock_ani = this.add.sprite(300,250, "l2_smock_ani");
//         this.l2_smock_ani.setFrame('l2_smock_ani2');
//         this.l2_smock_ani.setVisible(false);

//         this.l2_smock_ani1 = this.add.sprite(470,250, "l2_smock_ani");
//         this.l2_smock_ani1.setFrame('l2_smock_ani2');
//         this.l2_smock_ani1.setVisible(false);
    
//         this.l2_smock_aniFrame1 = this.anims.generateFrameNames('l2_smock_ani', {start: 1,end: 7,zeroPad: 1,
//         prefix: 'l2_smock_ani'});
//         this.anims.create({key: 'l2_smock_ani_key',frames: this.l2_smock_aniFrame1,frameRate:10,repeat:-1,}); 

//         this.l2_smock_ani1Frame2 = this.anims.generateFrameNames('l2_smock_ani', {start: 1,end: 7,zeroPad: 1,
//         prefix: 'l2_smock_ani'});
//         this.anims.create({key: 'l2_smock_ani1_key',frames: this.l2_smock_ani1Frame2,frameRate:10,repeat:-1,}); 
        


//         this.l2_smock_ani.play('l2_smock_ani_key');

//         this.l2_smock_ani1.play('l2_smock_ani1_key');


//     //////////////////////////////////////////////////////////




 

//     // *********************************time event creation***********************************************  // 

//         // this.time.delayedCall(1000,() => {
            
//         // },this);

//     // *********************************drag & drop creation***********************************************  // 

//         // this.drag_image = this.add.image(450,692,'drag_image').setOrigin(0.5, 0.5);
//         // this.drag_image.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         // this.drag_image.on('drag', (pointer, dragX, dragY) => {
//         //     this.drag_image.x = dragX;
//         //     this.drag_image.y = dragY;
//         // });
//         // this.drag_image.on('dragend', () => {
//         //     if ((this.input.x>370 && this.input.x<480 && this.input.y>120 && this.input.y<220)){
//         //     this.drag_image.visible=false; 
//         //     }
//         //      else{
//         //      this.drag_image.x=430;
//         //      this.drag_image.y=320;
//         //      }
//         // },this);

//     // *********************************click_rectangle creation***********************************************  // 
//         // this.click_rect = this.add.rectangle(250, 250, 70, 150, 0xff0000,0).setOrigin(0.5);
//         // this.click_rect.setInteractive({useHandCursor:true});
//         // this.click_rect.on('pointerdown',function(){
//         // this.click_rect.disableInteractive();
//         // },this);

//     // ********************************************************************************  // 

//         // this.dummy_drag=true;
//         // this.dummy =this.add.sprite(226,403,'l2_Jar_top');



    

//     // ****************************************************************************************************** //
            
//     // ***********************************Arrow *********************************************** //


//              var arrow_Posx = [350,878,1119,970,1003,400,872,300,1195];
//              var arrow_Posy = [300,185,170,90,220,290,340,270,180];
             
//          for (var i = 1; i <= 50; i++) {
//             this['arrow' + i] = this.add.sprite(arrow_Posx[i - 1], arrow_Posy[i - 1], 'arrow');
//             this['arrow' + i].setOrigin(0.5);
//             this['arrow' + i].anims.create({key: 'arrow',
//                 frames: this.anims.generateFrameNumbers('arrow', { start: 0, end: 8 - 1 }),
//                 frameRate: 15,
//                 repeat: -1
//             });
//             this['arrow' + i].anims.play('arrow');
//             this['arrow' + i].setVisible(false);

//             if (i === 1 ) {
//                 this['arrow' + i].setVisible(false);
//                 // this['arrow' + i].rotation=1.58;
//             }
                     
            
//         }

//     // ********************************Collide creation************************************************** //

//           // this.mcir = this.add.graphics();
//         // this.mcir.fillStyle(0x666666, 0.1);
//         // this.mcir.fillRect(0, 0, 1280, 720);
//         // this.mcir.setInteractive(new Phaser.Geom.Rectangle(0, 0, 1280, 720), Phaser.Geom.Rectangle.Contains);
//         // this.mcir.on('pointerdown', function (pointer) {
//         //   this.mcnt1++;
//         //   this['xcnt' + this.mcnt1] = pointer.x;
//         //   this['ycnt' + this.mcnt1] = pointer.y;
//         //   const circle = this.add.graphics();
//         //   circle.fillStyle(0x000000, 0.5);
//         //   circle.fillCircle(pointer.x, pointer.y, 20);
//         //   circle.setDepth(1);
//         //   console.log(this['xcnt' + this.mcnt1] + ':' + this['ycnt' + this.mcnt1]);
//         // }, this);

//     // ************************************Ad creation********************************************** //
        
//         // const { lockedItem: lock_r1, adfaildbtn: adfaildbtn_r1, addismisbtn: addismisbtn_r1 } = 
//         // createLockedItem(this, 139, 585, 'panel_acc0001ad',  () => {
//         // this.panel_acc0001.setInteractive({ useHandCursor: true });
//             // });
//         // lock_r1.setScale(0.43); 
//         // this.acc_group.add(lock_r1); 

//     // ********************************************************************************** //

//        this.playbtn=this.add.image(1190,640,'btn2').setOrigin(0.5, 0.5).setScale(0);
//         this.playbtn.setInteractive({ useHandCursor: true });
//         this.playbtn.on('pointerover',function(){this.playbtn.setScale(1.05)},this);
//         this.playbtn.on('pointerout',function(){this.playbtn.setScale(1)},this);
//         this.playbtn.on('pointerdown',this.enterRoom,this);

//         this.morebtn=this.add.image(60,660,'btn4').setOrigin(0.5, 0.5).setScale(0);
//         this.morebtn.setInteractive({ useHandCursor: true });
//         this.morebtn.on('pointerover',function(){this.morebtn.setScale(1.05)},this);
//         this.morebtn.on('pointerout',function(){this.morebtn.setScale(1)},this);
//         this.morebtn.on('pointerup',this.morebtnLink,this);

      

//          this.logo =this.add.image(165,55,'logo').setScale(0.65);
//         this.logo.setInteractive({pixelPerfect:true});
//         this.logo.on('pointerup',this.LogoLink,this);

//           this.musicBtn = this.add.sprite(1212,50,"music-on");
//         this.musicBtn.setInteractive();
//         this.musicBtn.on('pointerup',this.changemusic,this);

//     this.shutter_group = this.add.container();
//     this.shutter_bg =this.add.image(-320,360,'shutter_bg');
//     this.shutter_bg2 =this.add.image(-960,360,'shutter_bg2');
//     this.shutter_group.add(this.shutter_bg);
//     this.shutter_group.add(this.shutter_bg2);

//     // this.tweens.add({targets:this.shutter_group,y:-720,ease: 'Quadratic',duration:1200,onComplete:() => {
//         this.l2_yellow_plat.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
// this.arrow1.setVisible(true);

//     // }},this);

//         if (!this.sound.mute) {
//         this.musicBtn.setTexture('music-on');
//         } else {
//         this.musicBtn.setTexture('music-off');
//         }
// }
// update() {
//   // console.log(this.input.x + ':' + this.input.y); 

//   if (this.dummy_drag) {
//         this.dummy.x = this.input.activePointer.x ;
//         this.dummy.y = this.input.activePointer.y;
//         } 

//   if (this.spone_1_drag) {
//         this.spone_1.x = this.input.activePointer.x-50;
//         this.spone_1.y = this.input.activePointer.y-10;
//         } 

//   if (this.spone_2_drag) {
//         this.spone_2.x = this.input.activePointer.x-50;
//         this.spone_2.y = this.input.activePointer.y-10;
//         } 

  



//   }
          
// morebtnLink (){
//   YYGGames.navigate("game", "morebutton");
// }
// LogoLink (){
//       YYGGames.navigate("game", "logo");
// }
// enterRoom (){
//     this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     var state = 'finalscreen';
//     MyShowAD(this, state);
//     }},this);
//    }
  
// changemusic() {
//      if (!this.sound.mute) {
//     this.musicBtn.setTexture('music-off');
//     this.sound.mute = true;
//   } else {
//     this.musicBtn.setTexture('music-on');
//     this.sound.mute = false;
//   }
//   }   
// }

// ////////////////////////////////////////////////////////////////////

// class l2_dekraction_lavel extends Phaser.Scene {

// constructor() {
//  super('l2_dekraction_lavel');
// }
//  create() {
     
//     this.levelGroup = this.add.container();

//     // this.title_bg = this.add.sprite(320,360, "title_bg");
//     // this.title_bg2 = this.add.sprite(960,360, "title_bg2");

//     // this.levelGroup.add(this.title_bg);
//     // this.levelGroup.add(this.title_bg2);

// //////////////////////////////////////////////////

//     this.l3_dekrt_bg1 = this.add.sprite(320,360, "l3_dekrt_bg1");

//     this.l3_dekrt_bg2 = this.add.sprite(960,360, "l3_dekrt_bg2");

// ///////////////////////////////////////////

//     this.l3_dkrt_juice1 = this.add.sprite(1020,280, "l3_dkrt_juice1");

//     this.l2_cup_decration0001 = this.add.sprite(730,500, "l2_cup_decration0001");

//     this.l3_dkrt_spon1 = this.add.sprite(1170,535, "l3_dkrt_spon1").setScale(0.9);



//     this.l2_smock_ani = this.add.sprite(850,330, "l2_smock_ani");

//     this.l2_smock_ani1 = this.add.sprite(580,330, "l2_smock_ani");
    


//         this.l2_smock_aniFrame1 = this.anims.generateFrameNames('l2_smock_ani', {start: 1,end: 7,zeroPad: 1,
//         prefix: 'l2_smock_ani'});
//         this.anims.create({key: 'l2_smock_ani_key',frames: this.l2_smock_aniFrame1,frameRate:10,repeat:-1,}); 



//         this.l2_smock_ani1Frame1 = this.anims.generateFrameNames('l2_smock_ani', {start: 1,end: 7,zeroPad: 1,
//         prefix: 'l2_smock_ani'});
//         this.anims.create({key: 'l2_smock_ani1_key',frames: this.l2_smock_ani1Frame1,frameRate:10,repeat:-1,}); 

        

//     this.l2_smock_ani.play('l2_smock_ani_key');

//     this.l2_smock_ani1.play('l2_smock_ani1_key');

// ///////////////////icon////////////////////////

//     this.dkrt_array=[0,0,0,]

//     this.l3_icon_pnl = this.add.sprite(100,360, "l3_icon_pnl");

//     this.l3_btn_pnl = this.add.sprite(295,360, "l3_btn_pnl");
//     this.l3_btn_pnl.alpha=0;

// ////////01

//     this.l3_icon1 = this.add.sprite(100,200, "l3_icon1");
//     this.l3_icon1.setInteractive({useHandCursor:true});
//     this.l3_icon1.on('pointerdown',function(){
//     this.l3_btn_pnl.alpha=1;

//     this.cup_grp.setVisible(true);
//     this.juie_grp.setVisible(false);
//     this.spon_grp.setVisible(false);

//     },this);

// ////////02

//     this.l3_icon2 = this.add.sprite(100,400, "l3_icon2");
//     this.l3_icon2.setInteractive({useHandCursor:true});
//     this.l3_icon2.on('pointerdown',function(){
//     this.l3_btn_pnl.alpha=1;

//     this.cup_grp.setVisible(false);
//     this.juie_grp.setVisible(true);
//     this.spon_grp.setVisible(false);

//     },this);

// ////////03

//     this.l3_icon3 = this.add.sprite(100,600, "l3_icon3");
//     this.l3_icon3.setInteractive({useHandCursor:true});
//     this.l3_icon3.on('pointerdown',function(){
//     this.l3_btn_pnl.alpha=1;

//     this.cup_grp.setVisible(false);
//     this.juie_grp.setVisible(false);
//     this.spon_grp.setVisible(true);

//     },this);

// ///////////////////cup_grp////////////////////////

//     this.cup_grp = this.add.container();   
//     this.cup_grp.setVisible(false);

//     this.cup_grp1 = this.add.container();  
//     // this.cup_grp1.setVisible(false);  

//     const l3_dkrt_cup_btn_pos1X = [295,295,295,];
//     const l3_dkrt_cup_btn_pos1Y = [240,350,470,];

//     for (let i = 1; i <= 3; i++) {  
              
//     this['l3_dkrt_cup_btn' + i] = this.add.sprite(l3_dkrt_cup_btn_pos1X[i - 1], l3_dkrt_cup_btn_pos1Y[i - 1], 'l3_dkrt_cup_btn' + i);
//     this['l3_dkrt_cup_btn' + i].setOrigin(0.5).setScale(0.9);
//     this['l3_dkrt_cup_btn' + i].id = i;
//     this['l3_dkrt_cup_btn' + i].setInteractive({ useHandCursor: true});
//     // this[' l3_dkrt_cup_btn' + i].on('pointerover', function () { this.setScale(1.05) }, this[' l3_dkrt_cup_btn' + i]);
//     // this[' l3_dkrt_cup_btn' + i].on('pointerout', function () { this.setScale(1) }, this[' l3_dkrt_cup_btn' + i]);
//     this['l3_dkrt_cup_btn' + i].on('pointerdown', cup_grp_function.bind(this, this['l3_dkrt_cup_btn' + i]), this);
//     this.cup_grp1.add(this['l3_dkrt_cup_btn' + i]);

//     }
            
//     this.cup_grp.add(this.cup_grp1); 

// ////////////

//     this.cup_grp2 = this.add.container();   
//     this.cup_grp2.setVisible(false);  

//     const l3_dkrt_cup_btn_pos2X = [295,295,295,];
//     const l3_dkrt_cup_btn_pos2Y = [240,350,470,]


//     for (let i = 4; i <= 6; i++) {  
             
//     this['l3_dkrt_cup_btn' + i] = this.add.sprite(l3_dkrt_cup_btn_pos2X[i - 4], l3_dkrt_cup_btn_pos2Y[i - 4], 'l3_dkrt_cup_btn' + i);
//     this['l3_dkrt_cup_btn' + i].setOrigin(0.5).setScale(0.9);
//     this['l3_dkrt_cup_btn' + i].id = i;
//     this['l3_dkrt_cup_btn' + i].setInteractive({ useHandCursor: true});
//     // this[' l3_dkrt_cup_btn' + i].on('pointerover', function () { this.setScale(1.05) }, this[' l3_dkrt_cup_btn' + i]);
//     // this[' l3_dkrt_cup_btn' + i].on('pointerout', function () { this.setScale(1) }, this[' l3_dkrt_cup_btn' + i]);
//     this['l3_dkrt_cup_btn' + i].on('pointerdown', cup_grp_function.bind(this, this['l3_dkrt_cup_btn' + i]), this);
//     this.cup_grp2.add(this['l3_dkrt_cup_btn' + i]);

//     }
              
//     this.cup_grp.add(this.cup_grp2); 

// ////////////

//     this.cup_grp3 = this.add.container();   
//     this.cup_grp3.setVisible(false);  

//     const l3_dkrt_cup_btn_pos3X = [295,295,];
//     const l3_dkrt_cup_btn_pos3Y = [240,350,]


//     for (let i = 7; i <= 7; i++) {  
             
//     this['l3_dkrt_cup_btn' + i] = this.add.sprite(l3_dkrt_cup_btn_pos3X[i - 7], l3_dkrt_cup_btn_pos3Y[i - 7], 'l3_dkrt_cup_btn' + i);
//     this['l3_dkrt_cup_btn' + i].setOrigin(0.5).setScale(0.9);
//     this['l3_dkrt_cup_btn' + i].id = i;
//     this['l3_dkrt_cup_btn' + i].setInteractive({ useHandCursor: true});
//     // this[' l3_dkrt_cup_btn' + i].on('pointerover', function () { this.setScale(1.05) }, this[' l3_dkrt_cup_btn' + i]);
//     // this[' l3_dkrt_cup_btn' + i].on('pointerout', function () { this.setScale(1) }, this[' l3_dkrt_cup_btn' + i]);
//     this['l3_dkrt_cup_btn' + i].on('pointerdown', cup_grp_function.bind(this, this['l3_dkrt_cup_btn' + i]), this);
//     this.cup_grp3.add(this['l3_dkrt_cup_btn' + i]);

//     }
              
//     this.cup_grp.add(this.cup_grp3); 

// /////////////////

// function cup_grp_function(pointer) {

//     this.l2_cup_decration0001.setTexture('l2_cup_decration000'+pointer.id);
//     Main.l2dekrat_array[0]=pointer.id; 
  
//     this.dkrt_array[0]=1;

//     if (this.dkrt_array.indexOf(0)<(0)) {
//         this.tweens.add({targets:this.playbtn,scaleX: 1,scaleY:1,ease: 'Bounce',duration:800,});
//         this.tweens.add({targets:this.morebtn,scaleX: 1,scaleY:1,ease: 'Bounce',duration:800,}); 
//     }

//     }

// /////////////////

//     this.l3_dkrt_nxt1 = this.add.image(295,620,'l3_dkrt_nxt').setOrigin(0.5, 0.5);
//     this.l3_dkrt_nxt1.setInteractive({ useHandCursor: true });
//     this.l3_dkrt_nxt1.id = 1;
//     this.l3_dkrt_nxt1.on('pointerdown', cup_grp_next_function.bind(this, this.l3_dkrt_nxt1), this);
//     this.cup_grp.add(this.l3_dkrt_nxt1);

//     this.l3_dkrt_prt1 = this.add.image(295,115,'l3_dkrt_prt').setOrigin(0.5, 0.5);
//     this.l3_dkrt_prt1.setVisible(false);
//     this.l3_dkrt_prt1.setInteractive({ useHandCursor: true });
//     this.l3_dkrt_prt1.id = 2;
//     this.l3_dkrt_prt1.on('pointerdown', cup_grp_next_function.bind(this, this.l3_dkrt_prt1), this);           
//     this.cup_grp.add(this.l3_dkrt_prt1);

// /////////////////

// function cup_grp_next_function(pointer) {  
//     if (pointer.id == 1) {
//             Main.l2drs_next_array1[0]++;
//             this['cup_grp' + Main.l2drs_next_array1[0]].setVisible(false);
//             this['cup_grp' + (Main.l2drs_next_array1[0] + 1)].setVisible(true);
//         } 

//     if (pointer.id == 2) {
//             Main.l2drs_next_array1[0]--;
//             this['cup_grp' + (Main.l2drs_next_array1[0] + 2)].setVisible(false);
//             this['cup_grp' + (Main.l2drs_next_array1[0] + 1)].setVisible(true);
//         }

//     if (Main.l2drs_next_array1[0] == 1) { 
//             this.l3_dkrt_nxt1.setVisible(true);
//             this.l3_dkrt_prt1.setVisible(true);
//         }
         
//     if (Main.l2drs_next_array1[0]==1) {
//             this.l3_dkrt_prt1.setVisible(true);
//             this.l3_dkrt_nxt1.setVisible(false);

//             }  

//     if (Main.l2drs_next_array1[0]==0) {
//             this.l3_dkrt_prt1.setVisible(false);
//             this.l3_dkrt_nxt1.setVisible(true);

//             } 

//         }

// ///////////////////juie_grp////////////////////////

//     this.juie_grp = this.add.container();   
//     this.juie_grp.setVisible(false);

//     this.juie_grp1 = this.add.container();  
//     // this.juie_grp1.setVisible(false);  

//     const l3_dkrt_juice_btn_pos1X = [295,295,295,];
//     const l3_dkrt_juice_btn_pos1Y = [240,350,470,];

//     for (let i = 1; i <= 3; i++) {  
              
//     this['l3_dkrt_juice_btn' + i] = this.add.sprite(l3_dkrt_juice_btn_pos1X[i - 1], l3_dkrt_juice_btn_pos1Y[i - 1], 'l3_dkrt_juice_btn' + i);
//     this['l3_dkrt_juice_btn' + i].setOrigin(0.5).setScale(0.9);
//     this['l3_dkrt_juice_btn' + i].id = i;
//     this['l3_dkrt_juice_btn' + i].setInteractive({ useHandCursor: true});
//     // this[' l3_dkrt_juice_btn' + i].on('pointerover', function () { this.setScale(1.05) }, this[' l3_dkrt_juice_btn' + i]);
//     // this[' l3_dkrt_juice_btn' + i].on('pointerout', function () { this.setScale(1) }, this[' l3_dkrt_juice_btn' + i]);
//     this['l3_dkrt_juice_btn' + i].on('pointerdown', juie_grp_function.bind(this, this['l3_dkrt_juice_btn' + i]), this);
//     this.juie_grp1.add(this['l3_dkrt_juice_btn' + i]);

//     }
            
//     this.juie_grp.add(this.juie_grp1); 

// ////////////

//     this.juie_grp2 = this.add.container();   
//     this.juie_grp2.setVisible(false);  

//     const l3_dkrt_juice_btn_pos2X = [295,295,295,];
//     const l3_dkrt_juice_btn_pos2Y = [240,350,470,]


//     for (let i = 4; i <= 6; i++) {  
             
//     this['l3_dkrt_juice_btn' + i] = this.add.sprite(l3_dkrt_juice_btn_pos2X[i - 4], l3_dkrt_juice_btn_pos2Y[i - 4], 'l3_dkrt_juice_btn' + i);
//     this['l3_dkrt_juice_btn' + i].setOrigin(0.5).setScale(0.9);
//     this['l3_dkrt_juice_btn' + i].id = i;
//     this['l3_dkrt_juice_btn' + i].setInteractive({ useHandCursor: true});
//     // this[' l3_dkrt_juice_btn' + i].on('pointerover', function () { this.setScale(1.05) }, this[' l3_dkrt_juice_btn' + i]);
//     // this[' l3_dkrt_juice_btn' + i].on('pointerout', function () { this.setScale(1) }, this[' l3_dkrt_juice_btn' + i]);
//     this['l3_dkrt_juice_btn' + i].on('pointerdown', juie_grp_function.bind(this, this['l3_dkrt_juice_btn' + i]), this);
//     this.juie_grp2.add(this['l3_dkrt_juice_btn' + i]);

//     }
              
//     this.juie_grp.add(this.juie_grp2); 

// /////////////////

// function juie_grp_function(pointer) {

//     this.l3_dkrt_juice1.setTexture('l3_dkrt_juice'+pointer.id);
//     Main.l2dekrat_array[1]=pointer.id; 
  
// this.dkrt_array[1]=1;

// if (this.dkrt_array.indexOf(0)<(0)) {
//         this.tweens.add({targets:this.playbtn,scaleX: 1,scaleY:1,ease: 'Bounce',duration:800,});
//         this.tweens.add({targets:this.morebtn,scaleX: 1,scaleY:1,ease: 'Bounce',duration:800,}); 
//     }

//     }

// /////////////////

//     this.l3_dkrt_nxt2 = this.add.image(295,620,'l3_dkrt_nxt').setOrigin(0.5, 0.5);
//     this.l3_dkrt_nxt2.setInteractive({ useHandCursor: true });
//     this.l3_dkrt_nxt2.id = 1;
//     this.l3_dkrt_nxt2.on('pointerdown', juie_grp_next_function.bind(this, this.l3_dkrt_nxt2), this);
//     this.juie_grp.add(this.l3_dkrt_nxt2);

//     this.l3_dkrt_prt2 = this.add.image(295,115,'l3_dkrt_prt').setOrigin(0.5, 0.5);
//     this.l3_dkrt_prt2.setVisible(false);
//     this.l3_dkrt_prt2.setInteractive({ useHandCursor: true });
//     this.l3_dkrt_prt2.id = 2;
//     this.l3_dkrt_prt2.on('pointerdown', juie_grp_next_function.bind(this, this.l3_dkrt_prt2), this);           
//     this.juie_grp.add(this.l3_dkrt_prt2);

// /////////////////

// function juie_grp_next_function(pointer) {  
//     if (pointer.id == 1) {
//             Main.l2drs_next_array2[0]++;
//             this['juie_grp' + Main.l2drs_next_array2[0]].setVisible(false);
//             this['juie_grp' + (Main.l2drs_next_array2[0] + 1)].setVisible(true);
//         } 

//     if (pointer.id == 2) {
//             Main.l2drs_next_array2[0]--;
//             this['juie_grp' + (Main.l2drs_next_array2[0] + 2)].setVisible(false);
//             this['juie_grp' + (Main.l2drs_next_array2[0] + 1)].setVisible(true);
//         }

//     if (Main.l2drs_next_array2[0] == 1) { 
//             this.l3_dkrt_nxt2.setVisible(false);
//             this.l3_dkrt_prt2.setVisible(true);
//         }
         

//     if (Main.l2drs_next_array2[0]==0) {
//             this.l3_dkrt_prt2.setVisible(false);
//             this.l3_dkrt_nxt2.setVisible(true);

//             } 

//         }

// ///////////////////spon_grp////////////////////////

//     this.spon_grp = this.add.container();   
//     this.spon_grp.setVisible(false);

//     this.spon_grp1 = this.add.container();  
//     // this.spon_grp1.setVisible(false);  

//     const l3_dkrt_spon_btn_pos1X = [295,295,295,];
//     const l3_dkrt_spon_btn_pos1Y = [240,350,470,];

//     for (let i = 1; i <= 3; i++) {  
              
//     this['l3_dkrt_spon_btn' + i] = this.add.sprite(l3_dkrt_spon_btn_pos1X[i - 1], l3_dkrt_spon_btn_pos1Y[i - 1], 'l3_dkrt_spon_btn' + i);
//     this['l3_dkrt_spon_btn' + i].setOrigin(0.5).setScale(0.9);
//     this['l3_dkrt_spon_btn' + i].id = i;
//     this['l3_dkrt_spon_btn' + i].setInteractive({ useHandCursor: true});
//     // this[' l3_dkrt_spon_btn' + i].on('pointerover', function () { this.setScale(1.05) }, this[' l3_dkrt_spon_btn' + i]);
//     // this[' l3_dkrt_spon_btn' + i].on('pointerout', function () { this.setScale(1) }, this[' l3_dkrt_spon_btn' + i]);
//     this['l3_dkrt_spon_btn' + i].on('pointerdown', spon_grp_function.bind(this, this['l3_dkrt_spon_btn' + i]), this);
//     this.spon_grp1.add(this['l3_dkrt_spon_btn' + i]);

//     }
            
//     this.spon_grp.add(this.spon_grp1); 

// ////////////

//     this.spon_grp2 = this.add.container();   
//     this.spon_grp2.setVisible(false);  

//     const l3_dkrt_spon_btn_pos2X = [295,295,295,];
//     const l3_dkrt_spon_btn_pos2Y = [240,350,470,]


//     for (let i = 4; i <= 6; i++) {  
             
//     this['l3_dkrt_spon_btn' + i] = this.add.sprite(l3_dkrt_spon_btn_pos2X[i - 4], l3_dkrt_spon_btn_pos2Y[i - 4], 'l3_dkrt_spon_btn' + i);
//     this['l3_dkrt_spon_btn' + i].setOrigin(0.5).setScale(0.9);
//     this['l3_dkrt_spon_btn' + i].id = i;
//     this['l3_dkrt_spon_btn' + i].setInteractive({ useHandCursor: true});
//     // this[' l3_dkrt_spon_btn' + i].on('pointerover', function () { this.setScale(1.05) }, this[' l3_dkrt_spon_btn' + i]);
//     // this[' l3_dkrt_spon_btn' + i].on('pointerout', function () { this.setScale(1) }, this[' l3_dkrt_spon_btn' + i]);
//     this['l3_dkrt_spon_btn' + i].on('pointerdown', spon_grp_function.bind(this, this['l3_dkrt_spon_btn' + i]), this);
//     this.spon_grp2.add(this['l3_dkrt_spon_btn' + i]);

//     }
              
//     this.spon_grp.add(this.spon_grp2); 

// /////////////////

// function spon_grp_function(pointer) {

//     this.l3_dkrt_spon1.setTexture('l3_dkrt_spon'+pointer.id);
//     Main.l2dekrat_array[2]=pointer.id; 
  
// this.dkrt_array[2]=1;

// if (this.dkrt_array.indexOf(0)<(0)) {
//         this.tweens.add({targets:this.playbtn,scaleX: 1,scaleY:1,ease: 'Bounce',duration:800,});
//         this.tweens.add({targets:this.morebtn,scaleX: 1,scaleY:1,ease: 'Bounce',duration:800,}); 
// }

//     }

// /////////////////

//     this.l3_dkrt_nxt3 = this.add.image(295,620,'l3_dkrt_nxt').setOrigin(0.5, 0.5);
//     this.l3_dkrt_nxt3.setInteractive({ useHandCursor: true });
//     this.l3_dkrt_nxt3.id = 1;
//     this.l3_dkrt_nxt3.on('pointerdown', spon_grp_next_function.bind(this, this.l3_dkrt_nxt3), this);
//     this.spon_grp.add(this.l3_dkrt_nxt3);

//     this.l3_dkrt_prt3 = this.add.image(295,115,'l3_dkrt_prt').setOrigin(0.5, 0.5);
//     this.l3_dkrt_prt3.setVisible(false);
//     this.l3_dkrt_prt3.setInteractive({ useHandCursor: true });
//     this.l3_dkrt_prt3.id = 2;
//     this.l3_dkrt_prt3.on('pointerdown', spon_grp_next_function.bind(this, this.l3_dkrt_prt3), this);           
//     this.spon_grp.add(this.l3_dkrt_prt3);

// /////////////////

// function spon_grp_next_function(pointer) {  
//     if (pointer.id == 1) {
//             Main.l2drs_next_array3[0]++;
//             this['spon_grp' + Main.l2drs_next_array3[0]].setVisible(false);
//             this['spon_grp' + (Main.l2drs_next_array3[0] + 1)].setVisible(true);
//         } 

//     if (pointer.id == 2) {
//             Main.l2drs_next_array3[0]--;
//             this['spon_grp' + (Main.l2drs_next_array3[0] + 2)].setVisible(false);
//             this['spon_grp' + (Main.l2drs_next_array3[0] + 1)].setVisible(true);
//         }

//     if (Main.l2drs_next_array3[0] == 1) { 
//             this.l3_dkrt_nxt3.setVisible(false);
//             this.l3_dkrt_prt3.setVisible(true);
//         }
         

//     if (Main.l2drs_next_array3[0]==0) {
//             this.l3_dkrt_prt3.setVisible(false);
//             this.l3_dkrt_nxt3.setVisible(true);

//             } 

//         }

// //////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////

//         this.playbtn=this.add.image(1190,660,'btn2').setOrigin(0.5, 0.5).setScale(0);
//         this.playbtn.setInteractive({ useHandCursor: true });
//         this.playbtn.on('pointerover',function(){this.playbtn.setScale(1.05)},this);
//         this.playbtn.on('pointerout',function(){this.playbtn.setScale(1)},this);
//         this.playbtn.on('pointerdown',this.enterRoom,this);

//         this.morebtn=this.add.image(1030,660,'btn4').setOrigin(0.5, 0.5).setScale(0);
//         this.morebtn.setInteractive({ useHandCursor: true });
//         this.morebtn.on('pointerover',function(){this.morebtn.setScale(1.05)},this);
//         this.morebtn.on('pointerout',function(){this.morebtn.setScale(1)},this);
//         this.morebtn.on('pointerup',this.morebtnLink,this);

//          this.logo =this.add.image(165,55,'logo').setScale(0.65);
//         this.logo.setInteractive({pixelPerfect:true});
//         this.logo.on('pointerup',this.LogoLink,this);

//           this.musicBtn = this.add.sprite(1212,50,"music-on");
//         this.musicBtn.setInteractive();
//         this.musicBtn.on('pointerup',this.changemusic,this);

//     this.shutter_group = this.add.container();
//     this.shutter_bg =this.add.image(320,360,'shutter_bg');
//     this.shutter_bg2 =this.add.image(960,360,'shutter_bg2');
//     this.shutter_group.add(this.shutter_bg);
//     this.shutter_group.add(this.shutter_bg2);

//     this.tweens.add({targets:this.shutter_group,y:-720,ease: 'Quadratic',duration:1200,onComplete:() => {

//     }},this);

//         if (!this.sound.mute) {
//         this.musicBtn.setTexture('music-on');
//         } else {
//         this.musicBtn.setTexture('music-off');
//         }
// }
// update() {
//   // console.log(this.input.x + ':' + this.input.y); 

//   if (this.dummy_drag) {
//         this.dummy.x = this.input.activePointer.x ;
//         this.dummy.y = this.input.activePointer.y;
//         } 

//   }
          
// morebtnLink (){
//   YYGGames.navigate("game", "morebutton");
// }
// LogoLink (){
//       YYGGames.navigate("game", "logo");
// }
// enterRoom (){

//     this.anims.remove('l2_smock_ani_key');
//     this.anims.remove('l2_smock_ani1_key');


//     this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     var state = 'finalscreen_l2';
//     MyShowAD(this, state);
//     }},this);
//    }
  
// changemusic() {
//      if (!this.sound.mute) {
//     this.musicBtn.setTexture('music-off');
//     this.sound.mute = true;
//   } else {
//     this.musicBtn.setTexture('music-on');
//     this.sound.mute = false;
//   }
//   }   
// }

// ///////////////////////////////////////////////////////


// class level1_cocking extends Phaser.Scene {

// constructor() {
//  super('level1_cocking');
// }
//  create() {
     
//        this.levelGroup = this.add.container();

//     this.title_bg = this.add.sprite(320,360, "l2_bg");
//     this.title_bg2 = this.add.sprite(960,360, "l2_bg1");

//     this.levelGroup.add(this.title_bg);
//     this.levelGroup.add(this.title_bg2);

//     //////////////////////////////////////////////////////////////////////////


//         this.l2_cup_ani = this.add.sprite(708,410, "l2_cup_ani");

//         this.l2_cup_aniFrame1 = this.anims.generateFrameNames('l2_cup_ani', {start: 1,end: 8,zeroPad: 1,
//         prefix: 'l2_cup_ani'});
//         this.anims.create({key: 'l2_cup_ani_key',frames: this.l2_cup_aniFrame1,frameRate:8,}); 

     
//         this.l2_cup_aniFrame2 = this.anims.generateFrameNames('l2_cup_ani', {start: 8,end: 17,zeroPad: 1,
//         prefix: 'l2_cup_ani'});
//         this.anims.create({key: 'l2_cup_ani_key1',frames: this.l2_cup_aniFrame2,frameRate:8,});



        
       
//          this.l2_cup1_ani = this.add.sprite(730,250, "l2_cup1_ani");
//          this.l2_cup1_ani.setVisible(false);


     
//         this.l2_cup1_aniFrame2 = this.anims.generateFrameNames('l2_cup1_ani', {start: 0,end: 5,zeroPad: 1,
//         prefix: 'l2_cup1_ani'});
//         this.anims.create({key: 'l2_cup1_ani_key1',frames: this.l2_cup1_aniFrame2,frameRate:8,});
//         // this.l2_cup1_ani.on("animationcomplete",function() {
       
//         // },this);

//          this.l2_cup2_ani = this.add.sprite(730,250, "l2_cup2_ani");
//          this.l2_cup2_ani.setVisible(false);

//         this.l2_cup2_aniFrame2 = this.anims.generateFrameNames('l2_cup2_ani', {start: 0,end: 5,zeroPad: 1,
//         prefix: 'l2_cup2_ani'});
//         this.anims.create({key: 'l2_cup2_ani_key1',frames: this.l2_cup2_aniFrame2,frameRate:8,});






//         this.l2_flour1 = this.add.sprite(500,180, "l2_flour");
//         this.l2_flour1.setFrame('l2_flour1');
//         this.l2_flour1.setVisible(false);

//         this.l2_flour1Frame1 = this.anims.generateFrameNames('l2_flour', {start: 1,end: 4,zeroPad: 1,
//         prefix: 'l2_flour'});
//         this.anims.create({key: 'l2_flour1_key',frames: this.l2_flour1Frame1,frameRate:6,repeat:1,}); 
//         this.l2_flour1.on("animationcomplete",function() {
//         this.l2_flour1.setVisible(false);
//         this.l2hand1_ani1.setVisible(true);
//         this.time_liner1.setVisible(false);

//         this.l2water_ani.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
      

            
//         },this);


//         this.l2_flour = this.add.sprite(352,200, "l2_flour");
//         // this.l2_flour.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.l2_flour.on('drag', (pointer, dragX, dragY) => {
//             this.l2_flour.x = dragX;
//             this.l2_flour.y = dragY;

//           this.children.bringToTop(this.l2_flour);
//           this.children.bringToTop(this.logo);
//           this.children.bringToTop(this.musicBtn);
//           this.children.bringToTop(this.shutter_bg);


//          this.l2hand1_ani.setVisible(false);
//          this.l2hand_ani.setVisible(true);


//         });
//         this.l2_flour.on('dragend', () => {
//             if ((this.input.x>437 && this.input.x<975 && this.input.y>110 && this.input.y<480)){
//             this.l2_flour.setVisible(false);
//              this.l2hand_ani.setVisible(false);
//             this.l2_flour1.setVisible(true);
//             this.time_liner1.setVisible(true);

//              this.time_liner1.play('time_liner1_key');

//             this.l2_flour1.play('l2_flour1_key');

//         this.time.delayedCall(300,() => {
//         this.l2_cup_ani.play('l2_cup_ani_key');

//         },this);


//             }
//              else{

//          this.l2hand1_ani.setVisible(true);
//          this.l2hand_ani.setVisible(false);

//              this.l2_flour.x=352;
//              this.l2_flour.y=200;
//              }
//         },this);



//     ////////////////////////////////////////////

//     this.l2water_ani1 = this.add.sprite(960,180, "l2water_ani");
//     this.l2water_ani1.setFrame('l2water_ani1');
//     this.l2water_ani1.setVisible(false);

//         this.l2water_ani1Frame1 = this.anims.generateFrameNames('l2water_ani', {start: 1,end: 4,zeroPad: 1,
//         prefix: 'l2water_ani'});
//         this.anims.create({key: 'l2water_ani1_key',frames: this.l2water_ani1Frame1,frameRate:6,repeat:1,}); 
//         this.l2water_ani1.on("animationcomplete",function() {
//         this.l2water_ani1.setVisible(false);
//             this.time_liner1.setVisible(false);

//         this.time.delayedCall(300,() => {

//          this.l2_cup_ani_top.setVisible(false);
//          this.l2_cup_ani.setVisible(false);
//          this.l2_cup1_ani.setVisible(true);

//         this.hand_colide.setInteractive({ useHandCursor: true });
//          this.l2hand_ani.setVisible(true);


//         },this);

            
//         },this);




//         this.l2water_ani = this.add.sprite(970,210, "l2water_ani");
//         // this.l2water_ani.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.l2water_ani.on('drag', (pointer, dragX, dragY) => {
//             this.l2water_ani.x = dragX;
//             this.l2water_ani.y = dragY;

//               this.l2hand1_ani1.setVisible(false);
//               this.l2hand_ani.setVisible(true);

//           this.children.bringToTop(this.l2water_ani);
//           this.children.bringToTop(this.logo);
//           this.children.bringToTop(this.musicBtn);
//           this.children.bringToTop(this.shutter_bg);


//         });
//         this.l2water_ani.on('dragend', () => {
//             if ((this.input.x>437 && this.input.x<975 && this.input.y>110 && this.input.y<480)){
//             this.l2hand_ani.setVisible(false);

//             this.l2water_ani.setVisible(false);
//             this.l2water_ani1.setVisible(true);
//            this.l2water_ani1.play('l2water_ani1_key');

//             this.time_liner1.setVisible(true);

//           this.time_liner1.play('time_liner1_key');

        
//              this.time.delayedCall(300,() => {
//         this.l2_cup_ani.play('l2_cup_ani_key1');

//         },this);


//             }
//              else{

//             this.l2hand1_ani1.setVisible(true);
//             this.l2hand_ani.setVisible(false);

//              this.l2water_ani.x=970;
//              this.l2water_ani.y=210;
//              }
//         },this);

//     ////////////////////////////////////////////

//         this.l2_cup_ani_top = this.add.sprite(708,458, "l2_cup_ani_top");

//         this.time_liner1 = this.add.sprite(650,630, "time_liner");
//         this.time_liner1.setVisible(false);

//         this.time_liner1Frame1 = this.anims.generateFrameNames('time_liner', {start: 0,end: 14,zeroPad: 1,
//         prefix: 'time_liner'});
//         this.anims.create({key: 'time_liner1_key',frames: this.time_liner1Frame1,frameRate:10,}); 
//         this.time_liner1.on("animationcomplete",function() {

//        },this);

   

//     ////////////////////////////////////////////


// let z_hand_count5 = 1;
// let hand_count4 = 1;
// let delayCounter3 = 0;
// const delayIncrement3 = 15;

// this.hand_colide = this.add.rectangle(710,380, 550, 270, 0xffffff, 0).setOrigin(0.5);
// // this.hand_colide.setInteractive({ useHandCursor: true });
// this.hand_colide.on('pointerup', function (pointer) {
//     }, this);
// this.hand_colide.on('pointerdown', function (pointer) {
//     this.hand_colide.on('pointermove', function () {
//         if (pointer.isDown) {
//             delayCounter3++;
//     // this.time_liner1.setVisible(true);
          

//             if(z_hand_count5==5){
//              this.hand_colide.disableInteractive();    
//             // this.l2hand_ani.setVisible(false);
//             // this.nxt_btn1.setVisible(true);
//             // this.time_liner1.setVisible(false);
//          this.hand_colide1.setInteractive({ useHandCursor: true });
            
//          this.l2_cup1_ani.setVisible(false);
//          this.l2_cup2_ani.setVisible(true);
        
//             }


//             if (delayCounter3 >= delayIncrement3) {
//                 delayCounter3 = 0;
//                     if (pointer.prevPosition.y < pointer.position.y || pointer.prevPosition.y > pointer.position.y) {
//                 z_hand_count5++;
//                 hand_count4++;
//                 this.l2_cup1_ani.setFrame('l2_cup1_ani' + z_hand_count5);
               
//                 // this.time_liner1.setFrame('time_liner' + z_hand_count5);
                
//             }
//             }
//         }
//     }, this);
//     }, this);

//     ///////////////////////////

// let z_hand_count6 = 1;
// let hand_count5 = 1;
// let delayCounter4 = 0;
// const delayIncrement4 = 15;

// this.hand_colide1 = this.add.rectangle(710,380, 550, 270, 0xffffff, 0).setOrigin(0.5);
// // this.hand_colide1.setInteractive({ useHandCursor: true });
// this.hand_colide1.on('pointerup', function (pointer) {
//     }, this);
// this.hand_colide1.on('pointerdown', function (pointer) {
//     this.hand_colide1.on('pointermove', function () {
//         if (pointer.isDown) {
//             delayCounter4++;
//     // this.time_liner1.setVisible(true);
          

//             if(z_hand_count6==5){
//              this.hand_colide1.disableInteractive();    
//             this.l2hand_ani.setVisible(false);
//             this.nxt_btn1.setVisible(true);
//             this.time_liner1.setVisible(false);
            

//             }


//             if (delayCounter4 >= delayIncrement4) {
//                 delayCounter4 = 0;
//                     if (pointer.prevPosition.y < pointer.position.y || pointer.prevPosition.y > pointer.position.y) {
//                 z_hand_count6++;
//                 hand_count5++;
//                 this.l2_cup2_ani.setFrame('l2_cup2_ani' + z_hand_count6);
//                 // this.time_liner1.setFrame('time_liner' + z_hand_count6);
                
//             }
//             }
//         }
//     }, this);
//     }, this);



// ///////////////////////////////////





//           this.nxt_btn1 = this.add.sprite(1140,500, "btn5");
//           this.nxt_btn1.setVisible(false);
//           this.nxt_btn1.setInteractive({useHandCursor:true});
//           this.nxt_btn1.on('pointerdown',function(){
//           this.nxt_btn1.disableInteractive();
//           this.nxt_btn1.setVisible(false);
//          this.l2_cup1_ani.setVisible(false);
//          this.l2_cup2_ani.setVisible(false);

//           this.l2_cup1_ani.setVisible(false);
//           this.l2_cup_ani_top.setVisible(false);

//           this.shape1_machine.setVisible(true);
//           this.shape2_machine.setVisible(false);
//           this.l1_plate.setVisible(true);
//           this.l2_bowll.setVisible(true);
//           this.l2_bowl_top.setVisible(true);
//           this.yellow_cutting_pice0001.setVisible(true);

//           this.cutter_slide1.setVisible(true);
//           this.cutter_slide2.setVisible(true);


//           this.cshape_rect1.setInteractive({useHandCursor:true});
//           this.cshape_rect2.setInteractive({useHandCursor:true});

//           this.arrow13.setVisible(true);
//           this.arrow14.setVisible(true);
//           this.arrow14.flipY=true;
//           this.arrow13.flipY=true;
        

//         },this);


//     //////////////////////////////////////////////////////////////////////


//           this.l2hand_ani = this.add.sprite(708,200, "l2hand_ani");
//           this.l2hand_ani.setVisible(false);

//         this.l2hand_aniFrame1 = this.anims.generateFrameNames('l2hand_ani', {start: 0,end: 4,zeroPad: 1,
//         prefix: 'l2hand_ani'});
//         this.anims.create({key: 'l2hand_ani_key',frames: this.l2hand_aniFrame1,frameRate:10,repeat:-1,}); 
//         this.l2hand_ani.play('l2hand_ani_key');

//          this.l2hand1_ani = this.add.sprite(450,220, "l2hand1_ani");
//          this.l2hand1_ani.setVisible(true);

//         this.l2hand1_aniFrame1 = this.anims.generateFrameNames('l2hand1_ani', {start: 0,end: 4,zeroPad: 1,
//         prefix: 'l2hand1_ani'});
//         this.anims.create({key: 'l2hand1_ani_key',frames: this.l2hand1_aniFrame1,frameRate:10,repeat:-1,}); 
//         this.l2hand1_ani.play('l2hand1_ani_key');



//           this.l2hand1_ani1 = this.add.sprite(930,200, "l2hand1_ani");
//           this.l2hand1_ani1.setVisible(false);
//           this.l2hand1_ani1.flipX=true

//         this.l2hand1_ani1Frame1 = this.anims.generateFrameNames('l2hand1_ani', {start: 0,end: 4,zeroPad: 1,
//         prefix: 'l2hand1_ani'});
//         this.anims.create({key: 'l2hand1_ani1_key',frames: this.l2hand1_ani1Frame1,frameRate:10,repeat:-1,}); 
//         this.l2hand1_ani1.play('l2hand1_ani1_key');


//     //////////////////////////////////////////////////////////////////////

//           this.l1_plate = this.add.sprite(485,460, "l1_plate").setScale(0.83);
//           this.l1_plate.setVisible(false);


//           this.shape1_machine = this.add.sprite(930,350, "shape1_machine");
//           this.shape1_machine.setVisible(false);


//         this.shape1_machineFrame1 = this.anims.generateFrameNames('shape1_machine', {start: 1,end: 6,zeroPad: 1,
//         prefix: 'shape1_machine'});
//         this.anims.create({key: 'shape1_machine_key',frames: this.shape1_machineFrame1,frameRate:10,}); 

//         this.shape1_machineFrame2 = this.anims.generateFrameNames('shape1_machine', {start: 7,end: 10,zeroPad: 1,
//         prefix: 'shape1_machine'});
//         this.anims.create({key: 'shape1_machine_key1',frames: this.shape1_machineFrame2,frameRate:10,}); 


//         this.shape1_machineFrame3 = this.anims.generateFrameNames('shape1_machine', {start: 11,end: 14,zeroPad: 1,
//         prefix: 'shape1_machine'});
//         this.anims.create({key: 'shape1_machine_key2',frames: this.shape1_machineFrame3,frameRate:10,}); 


//           //////////////////////////////////////////////////////////////////////////

//           this.shape2_machine = this.add.sprite(930,355, "shape2_machine");
//           this.shape2_machine.setVisible(false);



//         this.shape2_machineFrame1 = this.anims.generateFrameNames('shape2_machine', {start: 1,end: 6,zeroPad: 1,
//         prefix: 'shape2_machine'});
//         this.anims.create({key: 'shape2_machine_key',frames: this.shape2_machineFrame1,frameRate:10,}); 

//         this.shape2_machineFrame2 = this.anims.generateFrameNames('shape2_machine', {start: 7,end: 10,zeroPad: 1,
//         prefix: 'shape2_machine'});
//         this.anims.create({key: 'shape2_machine_key1',frames: this.shape2_machineFrame2,frameRate:10,}); 


//         this.shape2_machineFrame3 = this.anims.generateFrameNames('shape2_machine', {start: 11,end: 14,zeroPad: 1,
//         prefix: 'shape2_machine'});
//         this.anims.create({key: 'shape2_machine_key2',frames: this.shape2_machineFrame3,frameRate:10,}); 



//           this.l2_bowll = this.add.sprite(247,310, "l2_bowll");
//           this.l2_bowll.setVisible(false);

//           //////////////////////////////////////////////////////////////////////////
       
         
//         this.yellow_cutting_pice0001 = this.add.sprite(260,300, "yellow_cutting_pice0001").setScale(0.9);
//         this.yellow_cutting_pice0001.setVisible(false);
//         // this.yellow_cutting_pice0001.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.yellow_cutting_pice0001.on('drag', (pointer, dragX, dragY) => {
//             this.yellow_cutting_pice0001.x = dragX;
//             this.yellow_cutting_pice0001.y = dragY;

//                this.children.bringToTop(this.yellow_cutting_pice0001);
//                this.children.bringToTop(this.musicBtn);
//                this.children.bringToTop(this.logo);
//                this.children.bringToTop(this.shutter_bg);

//           this.arrow15.setVisible(false);
//           this.arrow16.setVisible(true);


//         });
//         this.yellow_cutting_pice0001.on('dragend', () => {
//             if ((this.input.x>930 && this.input.x<1250 && this.input.y>120 && this.input.y<360)){
//             this.yellow_cutting_pice0001.visible=false; 
//           this.arrow16.setVisible(false);
//           this.l2_bowll.setVisible(false);
//           this.l2_bowl_top.setVisible(false);

           
//              this.shape1_machine.setVisible(true);
//              this.shape1_machine.setFrame('shape1_machine1');

//         if (Main.l1_shap_array[0]==1) {
//           this.mshape1_rect1.setInteractive({useHandCursor:true});
//           this.arrow17.setVisible(true);

//              }
//         if (Main.l1_shap_array[1]==1) {
         
//           this.mshape2_rect1.setInteractive({useHandCursor:true});
//                   this.arrow17.setVisible(true);

//              }



            
//             }


//              else{

//                   this.arrow15.setVisible(true);
//                   this.arrow16.setVisible(false);

//                this.children.bringToTop(this.arrow15);
//                this.children.bringToTop(this.l2_bowl_top);

//                this.children.bringToTop(this.l2_bowl_top);

//              this.yellow_cutting_pice0001.x=260;
//              this.yellow_cutting_pice0001.y=300;
//              }
//         },this);

             


//           ///////////////////////////////////////////////////////////////


//           this.l2_bowl_top = this.add.sprite(247,310, "l2_bowl_top");
//           this.l2_bowl_top.setVisible(false);

         
//           this.box_pice1 = this.add.sprite(490,450, "box_pice").setScale(0.8);
//           this.box_pice1.setVisible(false);

//           this.box_pice2 = this.add.sprite(490,430, "box_pice").setScale(0.8);
//           this.box_pice2.setVisible(false);

//           this.box_pice3 = this.add.sprite(485,410, "box_pice").setScale(0.8);
//           this.box_pice3.setVisible(false);


//           this.spring_pice1 = this.add.sprite(490,440, "spring_pice0001").setScale(0.8);
//           this.spring_pice1.setVisible(false);

//           this.spring_pice2 = this.add.sprite(490,425, "spring_pice0001").setScale(0.8);
//           this.spring_pice2.setVisible(false);

//           this.spring_pice3 = this.add.sprite(495,410, "spring_pice0001").setScale(0.8);
//           this.spring_pice3.setVisible(false);



//           this.cutter_slide1 = this.add.sprite(470,200, "cutter_slide1");
//           this.cutter_slide1.setVisible(false);

//           this.cutter_slide2 = this.add.sprite(850,200, "cutter_slide2");
//           this.cutter_slide2.setVisible(false);

// ///////////////////////////////////////////////////////////////////


          
//         this.cshape_rect1 = this.add.rectangle(470, 180, 200, 200, 0xff0000,0).setOrigin(0.5);
//         // this.cshape_rect1.setInteractive({useHandCursor:true});
//         this.cshape_rect1.on('pointerdown',function(){
//         this.cshape_rect1.disableInteractive();

//         this.mshape1_rect1.disableInteractive();
//         this.mshape1_rect2.disableInteractive();
           

//           this.arrow13.setVisible(false);
//           this.arrow14.setVisible(false);
//           this.arrow15.setVisible(true);

//             Main.l1_shap_array[0]=1;

//           this.cutter_slide1.setVisible(false);
//           this.cutter_slide2.setVisible(false);

//         this.yellow_cutting_pice0001.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});

          

//         // this.time.delayedCall(2000,() => {
// // this.mshape1_rect1.setInteractive({useHandCursor:true});
// //         this.arrow17.setVisible(true);


//         // },this);



//         },this);



//         this.cshape_rect2 = this.add.rectangle(820, 180, 200, 200, 0xff0000,0).setOrigin(0.5);
//         // this.cshape_rect2.setInteractive({useHandCursor:true});
//         this.cshape_rect2.on('pointerdown',function(){
//         this.cshape_rect2.disableInteractive();

//         this.mshape1_rect1.disableInteractive();
//         this.mshape1_rect2.disableInteractive();
         
//            this.cutter_slide1.setVisible(false);
//            this.cutter_slide2.setVisible(false);

//           this.arrow13.setVisible(false);
//           this.arrow14.setVisible(false);
//           this.arrow15.setVisible(true);


//             Main.l1_shap_array[1]=1;
         
           

         

//         this.yellow_cutting_pice0001.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});

//           // this.time.delayedCall(2000,() => {

//           // this.mshape2_rect1.setInteractive({useHandCursor:true});
//           //         this.arrow17.setVisible(true);

//           // },this);

//         },this);


// /////////////////////////////////////////////////////////////////////////////////////////m111111111111111111

//         this.mshape1_rect1 = this.add.rectangle(940, 250, 100, 200, 0xff0000,0).setOrigin(0.5);
//         // this.mshape1_rect1.setVisible(false);
//         // this.mshape1_rect1.setInteractive({useHandCursor:true});
//         this.mshape1_rect1.on('pointerdown',function(){
//         this.mshape1_rect1.disableInteractive();

//         this.shape2_machine.setVisible(false);
//         this.shape1_machine.setVisible(true);
//         this.shape1_machine.play('shape1_machine_key');


//          this.time_liner2.setVisible(true);
//          this.time_liner2.play('time_liner2_key');

//           this.time.delayedCall(500,() => {
//           this.box_pice1.setVisible(true);
//           this.mshape1_rect2.setInteractive({useHandCursor:true});

//             this.children.bringToTop(this.box_pice1);
             

//         },this);
//         },this);

//         this.mshape1_rect2 = this.add.rectangle(940, 250, 100, 200, 0xff0000,0).setOrigin(0.5);
//         // this.mshape1_rect2.setInteractive({useHandCursor:true});
//         this.mshape1_rect2.on('pointerdown',function(){
//         this.mshape1_rect2.disableInteractive();

//         this.shape2_machine.setVisible(false);
//         this.shape1_machine.setVisible(true);
//         this.shape1_machine.play('shape1_machine_key1');


//          this.time_liner2.setVisible(true);
//          this.time_liner2.play('time_liner2_key1');

//           this.time.delayedCall(500,() => {
//         this.mshape1_rect3.setInteractive({useHandCursor:true});
//           this.box_pice2.setVisible(true);
//   this.children.bringToTop(this.box_pice2);
              
//         },this);
//         },this);

//         this.mshape1_rect3 = this.add.rectangle(940, 250, 100, 200, 0xff0000,0).setOrigin(0.5);
//         // this.mshape1_rect3.setInteractive({useHandCursor:true});
//         this.mshape1_rect3.on('pointerdown',function(){
//         this.mshape1_rect3.disableInteractive();
//                   this.arrow17.setVisible(false);

//         this.shape2_machine.setVisible(false);
//         this.shape1_machine.setVisible(true);
//         this.shape1_machine.play('shape1_machine_key2');
//  this.children.bringToTop(this.box_pice3);


//          this.time_liner2.setVisible(true);
//          this.time_liner2.play('time_liner2_key2');

//           this.time.delayedCall(500,() => {
//           this.box_pice3.setVisible(true);
//           this.nxt_btn2.setVisible(true);

//         },this);
//         },this);


//     //////////////////////////////////////////////////////m2222222222222222222

//         this.mshape2_rect1 = this.add.rectangle(940, 250, 100, 200, 0xff0000,0).setOrigin(0.5);
//         // this.mshape2_rect1.setVisible(false);
//         // this.mshape2_rect1.setInteractive({useHandCursor:true});
//         this.mshape2_rect1.on('pointerdown',function(){
//         this.mshape2_rect1.disableInteractive();

//         this.shape2_machine.setVisible(true);
//         this.shape1_machine.setVisible(false);
//         this.shape2_machine.play('shape2_machine_key');


//          this.time_liner2.setVisible(true);
//          this.time_liner2.play('time_liner2_key');

//           this.time.delayedCall(500,() => {
//           this.spring_pice1.setVisible(true);
//         this.mshape2_rect2.setInteractive({useHandCursor:true});

//         },this);
//         },this);

//         this.mshape2_rect2 = this.add.rectangle(940, 250, 100, 200, 0xff0000,0).setOrigin(0.5);
//         // this.mshape2_rect2.setInteractive({useHandCursor:true});
//         this.mshape2_rect2.on('pointerdown',function(){
//         this.mshape2_rect2.disableInteractive();

//         this.shape2_machine.setVisible(true);
//         this.shape1_machine.setVisible(false);
//         this.shape2_machine.play('shape2_machine_key1');


//          this.time_liner2.setVisible(true);
//          this.time_liner2.play('time_liner2_key1');

//           this.time.delayedCall(500,() => {
//         this.mshape2_rect3.setInteractive({useHandCursor:true});
//           this.spring_pice2.setVisible(true);

//         },this);
//         },this);

//         this.mshape2_rect3 = this.add.rectangle(940, 250, 100, 200, 0xff0000,0).setOrigin(0.5);
//         // this.mshape2_rect3.setInteractive({useHandCursor:true});
//         this.mshape2_rect3.on('pointerdown',function(){
//         this.mshape2_rect3.disableInteractive();
//                   this.arrow17.setVisible(false);

//         this.shape2_machine.setVisible(true);
//         this.shape1_machine.setVisible(false);
//         this.shape2_machine.play('shape2_machine_key2');


//          this.time_liner2.setVisible(true);
//          this.time_liner2.play('time_liner2_key2');

//           this.time.delayedCall(500,() => {
//           this.spring_pice3.setVisible(true);
//           this.nxt_btn2.setVisible(true);

//         },this);
//         },this);



//         /////////////////////////////////////////////

//            this.time_liner2 = this.add.sprite(650,100, "time_liner");
//            this.time_liner2.setVisible(false);


//         this.time_liner2Frame1 = this.anims.generateFrameNames('time_liner', {start: 0,end: 5,zeroPad: 1,
//         prefix: 'time_liner'});
//         this.anims.create({key: 'time_liner2_key',frames: this.time_liner2Frame1,frameRate:10,});

//         this.time_liner2Frame2 = this.anims.generateFrameNames('time_liner', {start: 5,end: 9,zeroPad: 1,
//         prefix: 'time_liner'});
//         this.anims.create({key: 'time_liner2_key1',frames: this.time_liner2Frame2,frameRate:10,}); 

//         this.time_liner2Frame3 = this.anims.generateFrameNames('time_liner', {start: 9,end: 14,zeroPad: 1,
//         prefix: 'time_liner'});
//         this.anims.create({key: 'time_liner2_key2',frames: this.time_liner2Frame3,frameRate:10,}); 

//         /////////////////////////////////////////////

//           this.nxt_btn2 = this.add.sprite(1190,640, "btn5");
//           this.nxt_btn2.setVisible(false);
//           this.nxt_btn2.setInteractive({useHandCursor:true});
//           this.nxt_btn2.on('pointerdown',function(){
//           this.nxt_btn2.disableInteractive();
//           this.nxt_btn2.setVisible(false);

//           this.l2_bowl_top.setVisible(false);
//           this.box_pice1.setVisible(false);
//           this.box_pice2.setVisible(false);
//           this.box_pice3.setVisible(false);
//           this.spring_pice1.setVisible(false);
//           this.spring_pice2.setVisible(false);
//           this.spring_pice3.setVisible(false);
//           this.shape1_machine.setVisible(false);
//           this.shape2_machine.setVisible(false);
//           this.time_liner2.setVisible(false);
//           this.l2_bowll.setVisible(false);
//           this.l1_plate.setVisible(false);


//         this.l2_zoom_bg.setVisible(true);
//         this.Cutting_wood.setVisible(true);
//         this.tomato_cutting0001.setVisible(true);
//         this.temoto_rect.setVisible(true);
//         this.temoto_rect.setInteractive({useHandCursor:true});

//         this.arrow2.setVisible(true);
       
//         this.hand_colide.disableInteractive();    
//         this.nxt_btn1.disableInteractive();
//         this.cshape_rect1.disableInteractive();
//         this.cshape_rect2.disableInteractive();
//         this.mshape1_rect1.disableInteractive();
//         this.mshape1_rect2.disableInteractive();
//         this.mshape1_rect3.disableInteractive();
//         this.mshape2_rect1.disableInteractive();
//         this.mshape2_rect2.disableInteractive();
//         this.mshape2_rect3.disableInteractive();
//         this.nxt_btn2.disableInteractive();

//          },this);


//         /////////////////////////////////////////////

//         this.l2_zoom_bg = this.add.sprite(640,360, "l2_zoom_bg");
//         this.l2_zoom_bg.setVisible(false);

//         this.Cutting_wood = this.add.sprite(640,450, "Cutting_wood");
//         this.Cutting_wood.setVisible(false);

//         this.tomato_cutting0001 = this.add.sprite(640,450, "tomato_cutting0001");
//         this.tomato_cutting0001.setVisible(false);

//         this.koda_melga0001 = this.add.sprite(640,450, "koda_melga0001");
//         this.koda_melga0001.setVisible(false);

//         this.onion_cutting0001 = this.add.sprite(640,450, "onion_cutting0001");
//         this.onion_cutting0001.setVisible(false);

//         this.pundu_cutting0001 = this.add.sprite(640,450, "pundu_cutting0001");
//         this.pundu_cutting0001.setVisible(false);

//         this.meat_cutting0001 = this.add.sprite(640,450, "meat_cutting0001");
//         this.meat_cutting0001.setVisible(false);



//         this.l2Knife_ani0001 = this.add.sprite(900,450, "l2Knife_ani0001");
//         this.l2Knife_ani0001.setVisible(false);
//         // this.l2Knife_ani0001.setInteractive({useHandCursor:true});
//         this.l2Knife_ani0001.on('pointerdown',function(){
//         this.l2Knife_ani0001.disableInteractive();
//         this.arrow1.setVisible(false);
//         this.l2Knife_ani0001_drag=true;

//         this.arrow3.setVisible(true);
//         this.temoto_rect1.setInteractive({useHandCursor:true});

//         },this);


//         this.temoto_rect = this.add.rectangle(550, 450, 200, 200, 0xff0000,0).setOrigin(0.5);
//         this.temoto_rect.setVisible(false);
//         // this.temoto_rect.setInteractive({useHandCursor:true});
//         this.temoto_rect.on('pointerdown',function(){
//         this.temoto_rect.disableInteractive();
//         this.arrow2.setVisible(false);
//         this.arrow1.setVisible(true);

//         this.tomato_cutting0001.setTexture('tomato_cutting0002');

       
//         this.l2Knife_ani0001.setVisible(true);
//         this.l2Knife_ani0001.setInteractive({useHandCursor:true});

//         },this);


//         this.temoto_rect1 = this.add.rectangle(630, 450, 150, 250, 0xff0000,0).setOrigin(0.5);
//         // this.temoto_rect1.setInteractive({useHandCursor:true});
//         this.temoto_rect1.on('pointerdown',function(){
//         this.temoto_rect1.disableInteractive();
//         this.arrow3.setVisible(false);
//         this.arrow4.setVisible(true);

//         this.tomato_cutting0001.setTexture('tomato_cutting0003');

//         this.temoto_rect2.setInteractive({useHandCursor:true});

//         },this);

//         this.temoto_rect2 = this.add.rectangle(530, 450, 150, 250, 0xff0000,0).setOrigin(0.5);
//         // this.temoto_rect2.setInteractive({useHandCursor:true});
//         this.temoto_rect2.on('pointerdown',function(){
//         this.temoto_rect2.disableInteractive();
//         this.arrow4.setVisible(false);
//         this.arrow5.setVisible(true);

//         this.tomato_cutting0001.setTexture('tomato_cutting0004');
//         this.temoto_rect3.setInteractive({useHandCursor:true});

//         },this);



//         this.temoto_rect3 = this.add.rectangle(450, 450, 150, 250, 0xff0000,0).setOrigin(0.5);
//         // this.temoto_rect3.setInteractive({useHandCursor:true});
//         this.temoto_rect3.on('pointerdown',function(){
//         this.temoto_rect3.disableInteractive();
//                this.arrow5.setVisible(false);


//         this.tomato_cutting0001.setTexture('tomato_cutting0005');

//         this.l2Knife_ani0001.setVisible(false);
//         this.l2Knife_ani0001_drag=false;

//     this.tweens.add({targets:this.tomato_cutting0001,x:2000,ease: 'Quadratic',duration:1200,onComplete:() => {
//         this.koda_melga0001.setVisible(true);

//          this.l2Knife_ani0001.setVisible(false);
//          this.l2Knife_ani0001_drag=false;

//         this.arrow2.setVisible(true);
//     this.koda_rect.setInteractive({useHandCursor:true});
//     }},this);


//         },this);

//         /////////////////////////////////////////////


//         this.koda_rect = this.add.rectangle(550, 430, 200, 250, 0xff0000,0).setOrigin(0.5);
//         // this.koda_rect.setInteractive({useHandCursor:true});
//         this.koda_rect.on('pointerdown',function(){
//         this.koda_rect.disableInteractive();

//          this.l2Knife_ani0001.setVisible(true);
//          this.l2Knife_ani0001_drag=true;


//         this.koda_melga0001.setTexture('koda_melga0002');
//         this.koda_rect1.setInteractive({useHandCursor:true});
//         this.arrow2.setVisible(false);
//         this.arrow3.setVisible(true);

//         },this);


//         this.koda_rect1 = this.add.rectangle(630, 450, 200, 250, 0xff0000,0).setOrigin(0.5);
//         // this.koda_rect1.setInteractive({useHandCursor:true});
//         this.koda_rect1.on('pointerdown',function(){
//         this.koda_rect1.disableInteractive();

//         this.koda_melga0001.setTexture('koda_melga0004');
//         this.koda_rect2.setInteractive({useHandCursor:true});

//         this.arrow3.setVisible(false);
//         this.arrow4.setVisible(true);


//         },this);

//         this.koda_rect2 = this.add.rectangle(590, 450, 200, 250, 0xff0000,0).setOrigin(0.5);
//         // this.koda_rect2.setInteractive({useHandCursor:true});
//         this.koda_rect2.on('pointerdown',function(){
//         this.koda_rect2.disableInteractive();

//         this.koda_melga0001.setTexture('koda_melga0005');
//         this.koda_rect3.setInteractive({useHandCursor:true});

//         this.arrow4.setVisible(false);
//         this.arrow5.setVisible(true);


//         },this);



//         this.koda_rect3 = this.add.rectangle(540, 450, 200, 250, 0xff0000,0).setOrigin(0.5);
//         // this.koda_rect3.setInteractive({useHandCursor:true});
//         this.koda_rect3.on('pointerdown',function(){
//         this.koda_rect3.disableInteractive();
        
//         this.koda_melga0001.setTexture('koda_melga0006');
       
//             this.arrow5.setVisible(false);


//         this.l2Knife_ani0001.setVisible(false);
//         this.l2Knife_ani0001_drag=false;

//     this.tweens.add({targets:this.koda_melga0001,x:2000,ease: 'Quadratic',duration:1200,onComplete:() => {
//     this.l2Knife_ani0001.setVisible(true);
//          this.l2Knife_ani0001_drag=true;
//         this.onion_cutting0001.setVisible(true);
//         this.onion.setInteractive({useHandCursor:true});
//             this.arrow2.setVisible(true);

//   }},this);
           

//         },this);


//         /////////////////////////////////////////////



//         this.onion = this.add.rectangle(550, 440, 250, 250, 0xff0000,0).setOrigin(0.5);
//         // this.onion.setInteractive({useHandCursor:true});
//         this.onion.on('pointerdown',function(){
//         this.onion.disableInteractive();

//         this.onion_cutting0001.setTexture('onion_cutting0002');
//         this.onion1.setInteractive({useHandCursor:true});

//             this.arrow2.setVisible(false);
//             this.arrow3.setVisible(true);

//           },this);

//         this.onion1 = this.add.rectangle(650, 440, 220, 250, 0xff0000,0).setOrigin(0.5);
//         // this.onion1.setInteractive({useHandCursor:true});
//         this.onion1.on('pointerdown',function(){
//         this.onion1.disableInteractive();

//         this.onion_cutting0001.setTexture('onion_cutting0004');
//         this.onion2.setInteractive({useHandCursor:true});

//             this.arrow3.setVisible(false);
//             this.arrow4.setVisible(true);


//           },this);


//         this.onion2 = this.add.rectangle(590, 440, 220, 250, 0xff0000,0).setOrigin(0.5);
//         // this.onion2.setInteractive({useHandCursor:true});
//         this.onion2.on('pointerdown',function(){
//         this.onion2.disableInteractive();

//         this.onion_cutting0001.setTexture('onion_cutting0005');
//         this.onion3.setInteractive({useHandCursor:true});

//             this.arrow4.setVisible(false);
//             this.arrow5.setVisible(true);


//           },this);

//         this.onion3 = this.add.rectangle(520, 440, 220, 250, 0xff0000,0).setOrigin(0.5);
//         // this.onion3.setInteractive({useHandCursor:true});
//         this.onion3.on('pointerdown',function(){
//         this.onion3.disableInteractive();
//             this.arrow5.setVisible(false);

//         this.onion_cutting0001.setTexture('onion_cutting0006');



//         this.l2Knife_ani0001.setVisible(false);
//         this.l2Knife_ani0001_drag=false;

//         this.tweens.add({targets:this.onion_cutting0001,x:2000,ease: 'Quadratic',duration:1200,onComplete:() => {
//         this.l2Knife_ani0001.setVisible(true);
//         this.l2Knife_ani0001_drag=true;

//         this.meet_cutting_rect1.setInteractive({useHandCursor:true});

//             this.arrow7.setVisible(true);

//         this.meat_cutting0001.setVisible(true);

//         }},this);
//         },this);

//         /////////////////////////////////////////meet


//          this.meet_cutting_rect1 = this.add.rectangle(760, 450, 220, 350, 0xff0000,0).setOrigin(0.5);
//         // this.meet_cutting_rect1.setInteractive({useHandCursor:true});
//         this.meet_cutting_rect1.on('pointerdown',function(){
//         this.meet_cutting_rect1.disableInteractive();
//           this.arrow7.setVisible(false);
//           this.arrow8.setVisible(true);

//             this.meat_cutting0001.setTexture('meat_cutting0002');

//            this.meet_cutting_rect2.setInteractive({useHandCursor:true});

//        },this);


//         this.meet_cutting_rect2 = this.add.rectangle(630, 450, 220, 350, 0xff0000,0).setOrigin(0.5);
//         // this.meet_cutting_rect2.setInteractive({useHandCursor:true});
//         this.meet_cutting_rect2.on('pointerdown',function(){
//         this.meet_cutting_rect2.disableInteractive();
//           this.arrow8.setVisible(false);
//           this.arrow9.setVisible(true);

//             this.meat_cutting0001.setTexture('meat_cutting0003');
//             this.meet_cutting_rect3.setInteractive({useHandCursor:true});

//        },this);


//         this.meet_cutting_rect3 = this.add.rectangle(500, 450, 220, 350, 0xff0000,0).setOrigin(0.5);
//         // this.meet_cutting_rect3.setInteractive({useHandCursor:true});
//         this.meet_cutting_rect3.on('pointerdown',function(){
//         this.meet_cutting_rect3.disableInteractive();
//            this.arrow9.setVisible(false);
             
//             this.meat_cutting0001.setTexture('meat_cutting0004');

         
//          this.meet_cutting_rect4.setInteractive({useHandCursor:true});

//           this.arrow7.setVisible(true);

//        },this);



//                 this.meet_cutting_rect4 = this.add.rectangle(760, 450, 220, 350, 0xff0000,0).setOrigin(0.5);
//         // this.meet_cutting_rect4.setInteractive({useHandCursor:true});
//         this.meet_cutting_rect4.on('pointerdown',function(){
//         this.meet_cutting_rect4.disableInteractive();
//           this.arrow7.setVisible(false);
//           this.arrow8.setVisible(true);

//             this.meat_cutting0001.setTexture('meat_cutting0005');

//            this.meet_cutting_rect5.setInteractive({useHandCursor:true});

//        },this);


//         this.meet_cutting_rect5 = this.add.rectangle(630, 450, 220, 350, 0xff0000,0).setOrigin(0.5);
//         // this.meet_cutting_rect5.setInteractive({useHandCursor:true});
//         this.meet_cutting_rect5.on('pointerdown',function(){
//         this.meet_cutting_rect5.disableInteractive();
//           this.arrow8.setVisible(false);
//           this.arrow9.setVisible(true);

//             this.meat_cutting0001.setTexture('meat_cutting0006');
//             this.meet_cutting_rect6.setInteractive({useHandCursor:true});

//        },this);


//         this.meet_cutting_rect6 = this.add.rectangle(500, 450, 220, 350, 0xff0000,0).setOrigin(0.5);
//         // this.meet_cutting_rect6.setInteractive({useHandCursor:true});
//         this.meet_cutting_rect6.on('pointerdown',function(){
//         this.meet_cutting_rect6.disableInteractive();
//           this.arrow9.setVisible(false);
             
//           this.meat_cutting0001.setTexture('meat_cutting0008');

//              this.l2Knife_ani0001_drag=false;
//              this.l2Knife_ani0001.setVisible(false);

//              this.tweens.add({targets:this.meat_cutting0001,x:2000,ease: 'Quadratic',duration:1200,onComplete:() => {
//         this.l2Knife_ani0001.setVisible(true);
//         this.l2Knife_ani0001_drag=true;
//              this.pundu_cutting0001.setVisible(true);
//         this.pundu_rect1.setInteractive({useHandCursor:true});
//         this.arrow10.setVisible(true);

//    }},this);


//        },this);



//         /////////////////////////////////////////////


//         this.pundu_rect1 = this.add.rectangle(730, 450, 150, 350, 0xff0000,0).setOrigin(0.5);
//         // this.pundu_rect1.setInteractive({useHandCursor:true});
//         this.pundu_rect1.on('pointerdown',function(){
//         this.pundu_rect1.disableInteractive();

//         this.pundu_cutting0001.setTexture('pundu_cutting0002');
//         this.pundu_rect2.setInteractive({useHandCursor:true});

//         this.arrow10.setVisible(false);
//         this.arrow11.setVisible(true);


//          },this);


// //////////////////////////////////
//          this.pundu_rect2 = this.add.rectangle(630, 450, 150, 350, 0xff0000,0).setOrigin(0.5);
//         // this.pundu_rect2.setInteractive({useHandCursor:true});
//         this.pundu_rect2.on('pointerdown',function(){
//         this.pundu_rect2.disableInteractive();

//         this.pundu_cutting0001.setTexture('pundu_cutting0003');
//         this.pundu_rect3.setInteractive({useHandCursor:true});

//           this.arrow11.setVisible(false);
//           this.arrow12.setVisible(true);


//          },this);


// //////////////////////////////////


//          this.pundu_rect3 = this.add.rectangle(560, 450, 150, 350, 0xff0000,0).setOrigin(0.5);
//         // this.pundu_rect3.setInteractive({useHandCursor:true});
//         this.pundu_rect3.on('pointerdown',function(){
//         this.pundu_rect3.disableInteractive();
//         this.pundu_cutting0001.setTexture('pundu_cutting0004');
//         this.arrow12.setVisible(false);
//              this.l2Knife_ani0001_drag=false;
//              this.l2Knife_ani0001.setVisible(false);

//     this.tweens.add({targets:this.pundu_cutting0001,x:2000,ease: 'Quadratic',duration:1200,onComplete:() => {

//         this.scene.start('level1_pan_cocking');




//      }},this);
          
          
//          },this);
//         /////////////////////////////////////////////

//     // *********************************time event creation***********************************************  // 

//         // this.time.delayedCall(1000,() => {
            
//         // },this);
        
   

//     // *********************************drag & drop creation***********************************************  // 

//         // this.drag_image = this.add.image(450,692,'drag_image').setOrigin(0.5, 0.5);
//         // this.drag_image.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         // this.drag_image.on('drag', (pointer, dragX, dragY) => {
//         //     this.drag_image.x = dragX;
//         //     this.drag_image.y = dragY;
//         // });
//         // this.drag_image.on('dragend', () => {
//         //     if ((this.input.x>370 && this.input.x<480 && this.input.y>120 && this.input.y<220)){
//         //     this.drag_image.visible=false; 
//         //     }
//         //      else{
//         //      this.drag_image.x=430;
//         //      this.drag_image.y=320;
//         //      }
//         // },this);

//     // *********************************click_rectangle creation***********************************************  // 
//         // this.click_rect = this.add.rectangle(250, 250, 70, 150, 0xff0000,0).setOrigin(0.5);
//         // this.click_rect.setInteractive({useHandCursor:true});
//         // this.click_rect.on('pointerdown',function(){
//         // this.click_rect.disableInteractive();
//         // },this);

//     // ********************************************************************************  // 

//         // this.dummy_drag=true;
//         // this.dummy =this.add.sprite(226,403,'l2_bowl_top');

//     // ****************************************************************************************************** //
            
//     // ***********************************Arrow *********************************************** //111111111111111111111111

    


//              var arrow_Posx = [980,580,630,590,470,460,760,630,500,730,630,560,460,822,240,1111,934];
//              var arrow_Posy = [400,370,370,370,370,370,380,380,380,380,380,380,320,320,220,230,200];
             
//          for (var i = 1; i <= 50; i++) {
//             this['arrow' + i] = this.add.sprite(arrow_Posx[i - 1], arrow_Posy[i - 1], 'arrow');
//             this['arrow' + i].setOrigin(0.5);
//             this['arrow' + i].anims.create({key: 'arrow',
//                 frames: this.anims.generateFrameNumbers('arrow', { start: 0, end: 9 - 1 }),
//                 frameRate: 15,
//                 repeat: -1
//             });
//             this['arrow' + i].anims.play('arrow');
//             this['arrow' + i].setVisible(false);

//             if (i === 1 ) {
//                 this['arrow' + i].setVisible(false);
//                 this['arrow' + i].rotation=1.58;
//             }
                     
            
//         }

//     // ********************************Collide creation************************************************** //

//           // this.mcir = this.add.graphics();
//         // this.mcir.fillStyle(0x666666, 0.1);
//         // this.mcir.fillRect(0, 0, 1280, 720);
//         // this.mcir.setInteractive(new Phaser.Geom.Rectangle(0, 0, 1280, 720), Phaser.Geom.Rectangle.Contains);
//         // this.mcir.on('pointerdown', function (pointer) {
//         //   this.mcnt1++;
//         //   this['xcnt' + this.mcnt1] = pointer.x;
//         //   this['ycnt' + this.mcnt1] = pointer.y;
//         //   const circle = this.add.graphics();
//         //   circle.fillStyle(0x000000, 0.5);
//         //   circle.fillCircle(pointer.x, pointer.y, 20);
//         //   circle.setDepth(1);
//         //   console.log(this['xcnt' + this.mcnt1] + ':' + this['ycnt' + this.mcnt1]);
//         // }, this);

//     // ************************************Ad creation********************************************** //
        
//         // const { lockedItem: lock_r1, adfaildbtn: adfaildbtn_r1, addismisbtn: addismisbtn_r1 } = 
//         // createLockedItem(this, 139, 585, 'panel_acc0001ad',  () => {
//         // this.panel_acc0001.setInteractive({ useHandCursor: true });
//             // });
//         // lock_r1.setScale(0.43); 
//         // this.acc_group.add(lock_r1); 

//     // ********************************************************************************** //

//        this.playbtn=this.add.image(1190,640,'btn2').setOrigin(0.5, 0.5).setScale(0);
//         this.playbtn.setInteractive({ useHandCursor: true });
//         this.playbtn.on('pointerover',function(){this.playbtn.setScale(1.05)},this);
//         this.playbtn.on('pointerout',function(){this.playbtn.setScale(1)},this);
//         this.playbtn.on('pointerdown',this.enterRoom,this);

//         this.morebtn=this.add.image(60,660,'btn4').setOrigin(0.5, 0.5).setScale(0);
//         this.morebtn.setInteractive({ useHandCursor: true });
//         this.morebtn.on('pointerover',function(){this.morebtn.setScale(1.05)},this);
//         this.morebtn.on('pointerout',function(){this.morebtn.setScale(1)},this);
//         this.morebtn.on('pointerup',this.morebtnLink,this);

      

//          this.logo =this.add.image(165,55,'logo').setScale(0.65);
//         this.logo.setInteractive({pixelPerfect:true});
//         this.logo.on('pointerup',this.LogoLink,this);

//           this.musicBtn = this.add.sprite(1212,50,"music-on");
//         this.musicBtn.setInteractive();
//         this.musicBtn.on('pointerup',this.changemusic,this);

//     this.shutter_group = this.add.container();
//     this.shutter_bg =this.add.image(320,360,'shutter_bg');
//     this.shutter_bg2 =this.add.image(960,360,'shutter_bg2');
//     this.shutter_group.add(this.shutter_bg);
//     this.shutter_group.add(this.shutter_bg2);

//     this.tweens.add({targets:this.shutter_group,y:-720,ease: 'Quadratic',duration:1200,onComplete:() => {

//      this.l2_flour.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});


//     }},this);

//         if (!this.sound.mute) {
//         this.musicBtn.setTexture('music-on');
//         } else {
//         this.musicBtn.setTexture('music-off');
//         }
// }
// update() {
//   // console.log(this.input.x + ':' + this.input.y); 

//   if (this.dummy_drag) {
//         this.dummy.x = this.input.activePointer.x ;
//         this.dummy.y = this.input.activePointer.y;
//         } 

//            if (this.l2Knife_ani0001_drag) {
//         this.l2Knife_ani0001.x = this.input.activePointer.x;
//         this.l2Knife_ani0001.y = this.input.activePointer.y+100;
//         } 


  



//   }
          
// morebtnLink (){
//   YYGGames.navigate("game", "morebutton");
// }
// LogoLink (){
//       YYGGames.navigate("game", "logo");
// }
// enterRoom (){

//          this.anims.remove('time_liner1_key');
//          this.anims.remove('l2_flour1_key');
//          this.anims.remove('l2_cup_ani_key');
//          this.anims.remove('l2water_ani1_key');
//          this.anims.remove('time_liner1_key');
//          this.anims.remove('l2_cup_ani_key1');
//          this.anims.remove('l2hand_ani_key');
//          this.anims.remove('l2hand1_ani_key');
//          this.anims.remove('l2hand1_ani1_key');
//          this.anims.remove('shape1_machine_key');
//          this.anims.remove('time_liner2_key');
//          this.anims.remove('shape1_machine_key1');
//          this.anims.remove('time_liner2_key1');
//          this.anims.remove('shape1_machine_key2');
//          this.anims.remove('time_liner2_key2');
//          this.anims.remove('shape2_machine_key');
//          this.anims.remove('time_liner2_key');
//          this.anims.remove('shape2_machine_key1');
//          this.anims.remove('time_liner2_key1');
//          this.anims.remove('shape2_machine_key2');
//          this.anims.remove('time_liner2_key2');
//     this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     var state = 'level1_pan_cocking';
//     MyShowAD(this, state);
//     }},this);
//    }
  
// changemusic() {
//      if (!this.sound.mute) {
//     this.musicBtn.setTexture('music-off');
//     this.sound.mute = true;
//   } else {
//     this.musicBtn.setTexture('music-on');
//     this.sound.mute = false;
//   }
//   }   
// }

// ///////////////////////////////////////////////////////

// class level1_pan_cocking extends Phaser.Scene {

// constructor() {
//  super('level1_pan_cocking');
// }
//  create() {
     
//        this.levelGroup = this.add.container();

//     this.l2_bg = this.add.sprite(320,360, "l2_bg");
//     this.l2_bg1 = this.add.sprite(960,360, "l2_bg1");

//     this.levelGroup.add(this.l2_bg);
//     this.levelGroup.add(this.l2_bg1);
// ////////////////////////////////////////////////////////////


//     this.l1_hanger = this.add.sprite(900,100, "l1_hanger");

// ////////////////////////////////////////////////////////////

   
//         this.l1_karandi = this.add.sprite(770,200, "l1_karandi");
//         // this.l1_karandi.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.l1_karandi.on('drag', (pointer, dragX, dragY) => {
//             this.l1_karandi.x = dragX;
//             this.l1_karandi.y = dragY;

//             this.children.bringToTop(this.l1_karandi);
//             this.children.bringToTop(this.logo);
//             this.children.bringToTop(this.musicBtn);
//             this.children.bringToTop(this.shutter_bg);

//             this.arrow5.setVisible(false);
//             this.arrow2.setVisible(true);

//         });
//         this.l1_karandi.on('dragend', () => {
//             if ((this.input.x>50 && this.input.x<466 && this.input.y>170 && this.input.y<420)){
//             this.l1_karandi.visible=false; 
//             this.arrow2.setVisible(false);

//         this.l1_oli_ani.play('l1_oli_ani_frame_3');

//          this.time_liner2.setVisible(true);
//         this.time_liner2.play('time_liner2_key');

   
//         this.time.delayedCall(500,() => {
//     this.l1_oli_ani.setVisible(false);

//     this.l1_ove_ani.setVisible(true);

//         this.l1_salt.setVisible(true);
//         this.melga_ani.setVisible(true);
//         this.l1_tomato_plat.setVisible(true);

//         this.l1_tomato_plat.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//             this.arrow4.setVisible(true);
         
//         },this);


//             }
//              else{

//             this.children.bringToTop(this.arrow5);
            
//             this.arrow5.setVisible(true);
//             this.arrow2.setVisible(false);

//              this.l1_karandi.x=770;
//              this.l1_karandi.y=200;
//              }
//         },this);

// ////////////////////////////////////////////////////////////


//     this.l1_stove0001 = this.add.sprite(339,440, "l1_stove0001");


//     this.l1tawa = this.add.sprite(140,356, "l1tawa");



//     this.l1_oli_ani = this.add.sprite(266,254, "l1_oli_ani");
//     // this.l1_oli_ani.setFrame('l1_oli_ani16')
//     this.l1_oli_ani.setVisible(false);

//     this.l1_oli_ani_frame = this.anims.generateFrameNames('l1_oli_ani', {start: 0,end:6,zeroPad:1,
//     prefix: 'l1_oli_ani'});
//     this.anims.create({key:'l1_oli_ani_frame',frames: this.l1_oli_ani_frame,frameRate:7,});

//     this.l1_oli_ani_frame1 = this.anims.generateFrameNames('l1_oli_ani', {start: 7,end:10,zeroPad:1,
//     prefix: 'l1_oli_ani'});
//     this.anims.create({key:'l1_oli_ani_frame_1',frames: this.l1_oli_ani_frame1,frameRate:7,});

//     this.l1_oli_ani_frame2 = this.anims.generateFrameNames('l1_oli_ani', {start: 10,end:11,zeroPad:1,
//     prefix: 'l1_oli_ani'});
//     this.anims.create({key:'l1_oli_ani_frame_2',frames: this.l1_oli_ani_frame2,frameRate:7,});

//     this.l1_oli_ani_frame3 = this.anims.generateFrameNames('l1_oli_ani', {start: 12,end:16,zeroPad:1,
//     prefix: 'l1_oli_ani'});
//     this.anims.create({key:'l1_oli_ani_frame_3',frames: this.l1_oli_ani_frame3,frameRate:5,});

//     ///////////////////////////////////////////////////////////////////////
      

//     this.l1_ove_ani = this.add.sprite(266,330, "l1_ove_ani");
//     // this.l1_ove_ani.setFrame('l1_ove_ani16')
//     this.l1_ove_ani.setVisible(false);

//     this.l1_ove_ani_frame = this.anims.generateFrameNames('l1_ove_ani', {start: 0,end:4,zeroPad:1,
//     prefix: 'l1_ove_ani'});
//     this.anims.create({key:'l1_ove_ani_frame1',frames: this.l1_ove_ani_frame,frameRate:7,});

//     this.l1_ove_ani_frame2 = this.anims.generateFrameNames('l1_ove_ani', {start: 5,end:6,zeroPad:1,
//     prefix: 'l1_ove_ani'});
//     this.anims.create({key:'l1_ove_ani_frame2',frames: this.l1_ove_ani_frame2,frameRate:7,});

//     this.l1_ove_ani_frame3 = this.anims.generateFrameNames('l1_ove_ani', {start: 6,end:8,zeroPad:1,
//     prefix: 'l1_ove_ani'});
//     this.anims.create({key:'l1_ove_ani_frame3',frames: this.l1_ove_ani_frame3,frameRate:7,});


//     this.l1_ove_ani_frame4 = this.anims.generateFrameNames('l1_ove_ani', {start: 9,end:22,zeroPad:1,
//     prefix: 'l1_ove_ani'});
//     this.anims.create({key:'l1_ove_ani_frame4',frames: this.l1_ove_ani_frame4,frameRate:7,});

 

//     this.l1_ove_ani_frame5 = this.anims.generateFrameNames('l1_ove_ani', {start: 22,end:25,zeroPad:1,
//     prefix: 'l1_ove_ani'});
//     this.anims.create({key:'l1_ove_ani_frame5',frames: this.l1_ove_ani_frame5,frameRate:7,});

//     this.l1_ove_ani_frame6 = this.anims.generateFrameNames('l1_ove_ani', {start: 25,end:29,zeroPad:1,
//     prefix: 'l1_ove_ani'});
//     this.anims.create({key:'l1_ove_ani_frame6',frames: this.l1_ove_ani_frame6,frameRate:7,});

 
//     this.l1_ove_ani_frame7 = this.anims.generateFrameNames('l1_ove_ani', {start: 29,end:36,zeroPad:1,
//     prefix: 'l1_ove_ani'});
//     this.anims.create({key:'l1_ove_ani_frame7',frames: this.l1_ove_ani_frame7,frameRate:7,});

 

//     this.l1_ove_ani_frame8 = this.anims.generateFrameNames('l1_ove_ani', {start: 36,end:41,zeroPad:1,
//     prefix: 'l1_ove_ani'});
//     this.anims.create({key:'l1_ove_ani_frame8',frames: this.l1_ove_ani_frame8,frameRate:7,});

 


//     ///////////////////////////////////////////////////////////////

//      this.l1_oil_battlani = this.add.sprite(370,240, "l1_oil_battlani");
//      this.l1_oil_battlani.setVisible(false);

//      this.l1_oil_battlani_frame = this.anims.generateFrameNames('l1_oil_battlani', {start: 0,end:4,zeroPad:1,
//      prefix: 'l1_oil_battlani'});
//      this.anims.create({key:'l1_oil_battlani_frame',frames: this.l1_oil_battlani_frame,frameRate:7,repeat:-1,});
      
//      this.l1_oil_battlani = this.add.sprite(370,240, "l1_oil_battlani");
//      this.l1_oil_battlani.setVisible(false);


//           this.l1_pundu1 = this.add.sprite(500,250, "l1_pundu");
//           this.l1_pundu1.setFrame('l1_pundu4');
//           this.l1_pundu1.setVisible(false);

//      this.l1_pundu1_frame = this.anims.generateFrameNames('l1_pundu', {start: 4,end:4,zeroPad:1,
//      prefix: 'l1_pundu'});
//      this.anims.create({key:'l1_pundu1_frame',frames: this.l1_pundu1_frame,frameRate:7,});

         

//     ///////////////////////////////////////////////////////////////


//         this.l1_oil = this.add.sprite(1110,324, "l1_oil");
//         // this.l1_oil.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.l1_oil.on('drag', (pointer, dragX, dragY) => {
//             this.l1_oil.x = dragX;
//             this.l1_oil.y = dragY;

//             this.children.bringToTop(this.l1_oil);
//             this.children.bringToTop(this.logo);
//             this.children.bringToTop(this.musicBtn);
//             this.children.bringToTop(this.shutter_bg);

//             this.arrow1.setVisible(false);
//             this.arrow2.setVisible(true)




//         });
//         this.l1_oil.on('dragend', () => {
//             if ((this.input.x>50 && this.input.x<466 && this.input.y>170 && this.input.y<420)){
//             this.l1_oil.visible=false; 
//             this.arrow2.setVisible(false);

//             this.l1_oil_battlani.setVisible(true);
//             this.l1_oli_ani.setVisible(true);

//             this.l1_oil_battlani.play('l1_oil_battlani_frame');

//         this.time.delayedCall(200,() => {
//         this.l1_oli_ani.play('l1_oli_ani_frame');
//         },this);

//         this.time.delayedCall(1200,() => {
//         this.l1_oil_battlani.setVisible(false);
//         this.click_rect.setInteractive({useHandCursor:true});

//         this.arrow9.setVisible(true);

       
//         },this);


//             }
//              else{
//             this.children.bringToTop(this.arrow1);

//             this.arrow2.setVisible(false);
//             this.arrow1.setVisible(true)

//              this.l1_oil.x=1110;
//              this.l1_oil.y=324;
//              }
//         },this);

// //////////////////////////////////////////////////////////////////

//         this.click_rect = this.add.rectangle(580, 530, 100, 100, 0xff0000,0).setOrigin(0.5);
//         // this.click_rect.setInteractive({useHandCursor:true});
//         this.click_rect.on('pointerdown',function(){
//         this.click_rect.disableInteractive();
//         this.arrow9.setVisible(false);

//         this.l1_stove0001.setTexture('l1_stove0002')
//         this.l1_pundu.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.arrow3.setVisible(true)

//          this.fair_fair.alpha=1;
//         this.fair_fair.play('fair_fair_frame');

//         },this);




// //////////////////////////////////////////////////////////////////

//            this.l1_pundu = this.add.sprite(608,270, "l1_pundu");
//         // this.l1_pundu.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.l1_pundu.on('drag', (pointer, dragX, dragY) => {
//             this.l1_pundu.x = dragX;
//             this.l1_pundu.y = dragY;

//             this.children.bringToTop(this.l1_pundu);
//             this.children.bringToTop(this.logo);
//             this.children.bringToTop(this.musicBtn);
//             this.children.bringToTop(this.shutter_bg);

//             this.arrow3.setVisible(false)
//             this.arrow2.setVisible(true)



//         });
//         this.l1_pundu.on('dragend', () => {
//             if ((this.input.x>50 && this.input.x<466 && this.input.y>170 && this.input.y<420)){
//             this.l1_pundu.visible=false; 
//             this.arrow2.setVisible(false);

//         this.l1_pundu1.setVisible(true);
//         this.l1_pundu1.play('l1_pundu1_frame');
//         this.time.delayedCall(100,() => {
//           this.l1_pundu1.setVisible(false);

//         this.l1_oli_ani.play('l1_oli_ani_frame_1');
//         },this);
//         this.time.delayedCall(500,() => {
//         this.onion_plat.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
         
//             this.arrow4.setVisible(true);

//         },this);


//             }
//              else{

//             this.children.bringToTop(this.arrow3);


//             this.arrow3.setVisible(true);
//             this.arrow2.setVisible(false);

//              this.l1_pundu.x=608;
//              this.l1_pundu.y=270;
//              }
//         },this);

// //////////////////////////////////////////////////////////////////

//     this.onion_plat1 = this.add.sprite(630,320, "onion_plat");
//     this.onion_plat1.setFrame('onion_plat4')
//     this.onion_plat1.setVisible(false);

//      this.onion_plat1_frame = this.anims.generateFrameNames('onion_plat', {start: 3,end:4,zeroPad:1,
//      prefix: 'onion_plat'});
//      this.anims.create({key:'onion_plat1_frame',frames: this.onion_plat1_frame,frameRate:7,});

         

    



//         this.onion_plat = this.add.sprite(733,341, "onion_plat");
//         // this.onion_plat.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.onion_plat.on('drag', (pointer, dragX, dragY) => {
//             this.onion_plat.x = dragX;
//             this.onion_plat.y = dragY;

//             this.children.bringToTop(this.onion_plat);
//             this.children.bringToTop(this.logo);
//             this.children.bringToTop(this.musicBtn);
//             this.children.bringToTop(this.shutter_bg);

//             this.arrow4.setVisible(false);
//             this.arrow2.setVisible(true);

//         });
//         this.onion_plat.on('dragend', () => {
//             if ((this.input.x>50 && this.input.x<466 && this.input.y>170 && this.input.y<420)){
//             this.onion_plat.visible=false; 
//             this.arrow2.setVisible(false);

//         this.onion_plat1.setVisible(true);
//         this.onion_plat1.play('onion_plat1_frame');
//         this.time.delayedCall(200,() => {
//           this.onion_plat1.setVisible(false);

//         this.l1_oli_ani.play('l1_oli_ani_frame_2');
//         },this);
//         this.time.delayedCall(500,() => {
//             this.arrow5.setVisible(true);
         
//         this.l1_karandi.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});

//         },this);


//             }
//              else{

//             this.children.bringToTop(this.arrow4);

//             this.arrow4.setVisible(true);
//             this.arrow2.setVisible(false);

//              this.onion_plat.x=733;
//              this.onion_plat.y=341;
//              }
//         },this);


// //////////////////////////////////////////////////////////////////

//        this.l1salt_ani = this.add.sprite(270,240, "l1salt_ani");
//        this.l1salt_ani.setVisible(false);

//        this.l1salt_ani_frame = this.anims.generateFrameNames('l1salt_ani', {start: 1,end:4,zeroPad:1,
//        prefix: 'l1salt_ani'});
//        this.anims.create({key:'l1salt_ani_frame',frames: this.l1salt_ani_frame,frameRate:7,repeat:-1,});


//           this.l1_salt = this.add.sprite(1110,335, "l1_salt");
//           this.l1_salt.setVisible(false);
//         // this.l1_salt.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.l1_salt.on('drag', (pointer, dragX, dragY) => {
//             this.l1_salt.x = dragX;
//             this.l1_salt.y = dragY;

//             this.children.bringToTop(this.l1_salt);
//             this.children.bringToTop(this.logo);
//             this.children.bringToTop(this.musicBtn);
//             this.children.bringToTop(this.shutter_bg);

//             this.arrow1.setVisible(false)
//             this.arrow2.setVisible(true)
         

//         });
//         this.l1_salt.on('dragend', () => {
//             if ((this.input.x>50 && this.input.x<466 && this.input.y>170 && this.input.y<420)){
//             this.l1_salt.visible=false; 
//             this.arrow2.setVisible(false)
           
//         this.l1salt_ani.setVisible(true);
//         this.l1salt_ani.play('l1salt_ani_frame');
//         this.time.delayedCall(200,() => {

//           this.l1_ove_ani.setVisible(true);
//           this.l1_ove_ani.play('l1_ove_ani_frame3');

//         },this);
//         this.time.delayedCall(1200,() => {
//            this.l1salt_ani.setVisible(false);
//            this.l1_karandi1.setVisible(true);
           
//             this.l1_karandi1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//             this.arrow5.setVisible(true)
   

//         },this);


//             }
//              else{
//             this.children.bringToTop(this.arrow1);


//             this.arrow1.setVisible(true)
//             this.arrow2.setVisible(false)
         

//              this.l1_salt.x=1110;
//              this.l1_salt.y=335;
//              }
//         },this);
// /////////////////////////////////////////////////////////

//        this.melga_ani1 = this.add.sprite(450,320, "melga_ani");
//        this.melga_ani1.setFrame('melga_ani4')
//        this.melga_ani1.setVisible(false);

//      this.melga_ani1_frame = this.anims.generateFrameNames('melga_ani', {start: 4,end:4,zeroPad:1,
//      prefix: 'melga_ani'});
//      this.anims.create({key:'melga_ani1_frame',frames: this.melga_ani1_frame,frameRate:7,});



//         this.melga_ani = this.add.sprite(608,320, "melga_ani");
//         this.melga_ani.setVisible(false);
//         // this.melga_ani.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.melga_ani.on('drag', (pointer, dragX, dragY) => {
//             this.melga_ani.x = dragX;
//             this.melga_ani.y = dragY;

//             this.children.bringToTop(this.melga_ani);
//             this.children.bringToTop(this.logo);
//             this.children.bringToTop(this.musicBtn);
//             this.children.bringToTop(this.shutter_bg);

//             this.arrow3.setVisible(false)
//             this.arrow2.setVisible(true)


//         });
//         this.melga_ani.on('dragend', () => {
//             if ((this.input.x>50 && this.input.x<466 && this.input.y>170 && this.input.y<420)){
//             this.melga_ani.visible=false; 
//             this.arrow2.setVisible(false)
           
//         this.melga_ani1.setVisible(true);
//         this.melga_ani1.play('melga_ani1_frame');
//         this.time.delayedCall(200,() => {
//           this.melga_ani1.setVisible(false);

//           this.l1_ove_ani.setVisible(true);
//           this.l1_ove_ani.play('l1_ove_ani_frame2');

//         },this);
//         this.time.delayedCall(500,() => {
//         this.l1_salt.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
           
//             this.arrow1.setVisible(true)
   

//         },this);


//             }
//              else{

//             this.arrow3.setVisible(true)
//             this.arrow2.setVisible(false)

//             this.children.bringToTop(this.arrow3);

//              this.melga_ani.x=608;
//              this.melga_ani.y=320;
//              }
//         },this);


// /////////////////////////////////////////////////////////


//        this.l1_tomato_plat1 = this.add.sprite(630,320, "l1_tomato_plat");
//        this.l1_tomato_plat1.setFrame('l1_tomato_plat2')
//        this.l1_tomato_plat1.setVisible(false);

//      this.l1_tomato_plat1_frame = this.anims.generateFrameNames('l1_tomato_plat', {start: 2,end:3,zeroPad:1,
//      prefix: 'l1_tomato_plat'});
//      this.anims.create({key:'l1_tomato_plat1_frame',frames: this.l1_tomato_plat1_frame,frameRate:7,});

         

// /////////////////////////////////////////////////////////


//         this.l1_tomato_plat = this.add.sprite(733,350, "l1_tomato_plat");
//         this.l1_tomato_plat.setVisible(false);
//         // this.l1_tomato_plat.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.l1_tomato_plat.on('drag', (pointer, dragX, dragY) => {
//             this.l1_tomato_plat.x = dragX;
//             this.l1_tomato_plat.y = dragY;

//             this.children.bringToTop(this.l1_tomato_plat);
//             this.children.bringToTop(this.logo);
//             this.children.bringToTop(this.musicBtn);
//             this.children.bringToTop(this.shutter_bg);

//             this.arrow4.setVisible(false)
//             this.arrow2.setVisible(true)

         

//         });
//         this.l1_tomato_plat.on('dragend', () => {
//         if ((this.input.x>50 && this.input.x<466 && this.input.y>170 && this.input.y<420)){
//         this.l1_tomato_plat.visible=false; 
//         this.arrow2.setVisible(false)
           
//         this.l1_tomato_plat1.setVisible(true);
//         this.l1_tomato_plat1.play('l1_tomato_plat1_frame');
//         this.time.delayedCall(200,() => {
//           this.l1_tomato_plat1.setVisible(false);

//           this.l1_ove_ani.setVisible(true);
//           this.l1_ove_ani.play('l1_ove_ani_frame1');

//         },this);
//         this.time.delayedCall(500,() => {

//             this.melga_ani.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//             this.arrow3.setVisible(true)
   

//         },this);


//             }
//              else{

           
//             this.arrow4.setVisible(true)
//             this.arrow2.setVisible(false)

//             this.children.bringToTop(this.arrow4);
         

//              this.l1_tomato_plat.x=733;
//              this.l1_tomato_plat.y=350;
//              }
//         },this);


// //////////////////////////

//             this.karandi_ani = this.add.sprite(228,260, "karandi_ani");
//             this.karandi_ani.setVisible(false);

//             this.karandi_ani_frame = this.anims.generateFrameNames('karandi_ani', {start: 0,end:5,zeroPad:1,
//             prefix: 'karandi_ani'});
//             this.anims.create({key:'karandi_ani_frame',frames: this.karandi_ani_frame,frameRate:7,repeat:-1,});

// //////////////////////////////////////

     
//         this.l1_karandi1 = this.add.sprite(770,200, "l1_karandi");
//         this.l1_karandi1.setVisible(false);
//         // this.l1_karandi1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.l1_karandi1.on('drag', (pointer, dragX, dragY) => {
//             this.l1_karandi1.x = dragX;
//             this.l1_karandi1.y = dragY;

//         this.children.bringToTop(this.l1_karandi1);
//         this.children.bringToTop(this.logo);
//         this.children.bringToTop(this.musicBtn);
//         this.children.bringToTop(this.shutter_bg);

      
//             this.arrow5.setVisible(false)
//             this.arrow2.setVisible(true)

         
         

//         });
//         this.l1_karandi1.on('dragend', () => {
//         if ((this.input.x>50 && this.input.x<466 && this.input.y>170 && this.input.y<420)){
//         this.l1_karandi1.visible=false; 

//         this.arrow2.setVisible(false)
           
//         this.karandi_ani.setVisible(true);
//         this.karandi_ani.play('karandi_ani_frame');

//          this.time_liner3.setVisible(true);
//          this.time_liner3.play('time_liner3_key');


//           this.l1_ove_ani.setVisible(true);
//           this.l1_ove_ani.play('l1_ove_ani_frame4');

//         this.time.delayedCall(800,() => {
//         this.karandi_ani.setVisible(false);

//         this.tweens.add({targets:this.kari_plate,x:720,ease: 'Quadratic',duration:1200,onComplete:() => {
//         this.kari_plate.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.arrow6.setVisible(true);

//        }},this);


//         },this);


       

//             }
//              else{

//             this.arrow5.setVisible(true)
//             this.arrow2.setVisible(false);

//             this.children.bringToTop(this.arrow5);

//              this.l1_karandi1.x=770;
//              this.l1_karandi1.y=200;

//              }
//         },this);


// ////////////////////////////

//            this.kari_plate1 = this.add.sprite(650,320, "kari_plate");
//            this.kari_plate1.setFrame('kari_plate2');
//            this.kari_plate1.setVisible(false);


//             this.kari_plate1_frame = this.anims.generateFrameNames('kari_plate', {start: 2,end:4,zeroPad:1,
//             prefix: 'kari_plate'});
//             this.anims.create({key:'kari_plate1_frame',frames: this.kari_plate1_frame,frameRate:7,});



//         this.kari_plate = this.add.sprite(1500,330, "kari_plate");
//         // this.kari_plate.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.kari_plate.on('drag', (pointer, dragX, dragY) => {
//             this.kari_plate.x = dragX;
//             this.kari_plate.y = dragY;

//         this.children.bringToTop(this.kari_plate);
//         this.children.bringToTop(this.logo);
//         this.children.bringToTop(this.musicBtn);
//         this.children.bringToTop(this.shutter_bg);

//         this.arrow6.setVisible(false);
//         this.arrow2.setVisible(true);

         

//         });
//         this.kari_plate.on('dragend', () => {
//         if ((this.input.x>50 && this.input.x<466 && this.input.y>170 && this.input.y<420)){
//         this.kari_plate.visible=false; 
//         this.arrow2.setVisible(false)
//         this.arrow2.setVisible(false);
           
//         this.kari_plate1.setVisible(true);
//         this.kari_plate1.play('kari_plate1_frame');
//         this.time.delayedCall(150,() => {
//         this.kari_plate1.setVisible(false);
//         this.l1_karandi2.setVisible(true);

//           this.l1_ove_ani.setVisible(true);
//           this.l1_ove_ani.play('l1_ove_ani_frame5');

//         this.l1_karandi2.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});

//          this.arrow5.setVisible(true);
//         },this);


       

//             }
//              else{
//         this.children.bringToTop(this.arrow6);

//          this.arrow6.setVisible(true);
//          this.arrow2.setVisible(false);

        
//              this.kari_plate.x=720;
//              this.kari_plate.y=330;

//              }
//         },this);
// ////////////////////////////

//             this.karandi_ani1 = this.add.sprite(228,260, "karandi_ani");
//             this.karandi_ani1.setVisible(false);

//             this.karandi_ani1_frame = this.anims.generateFrameNames('karandi_ani', {start: 0,end:5,zeroPad:1,
//             prefix: 'karandi_ani'});
//             this.anims.create({key:'karandi_ani1_frame',frames: this.karandi_ani1_frame,frameRate:7,repeat:-1,});




//         this.l1_karandi2 = this.add.sprite(770,200, "l1_karandi");
//         this.l1_karandi2.setVisible(false);
//         // this.l1_karandi2.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.l1_karandi2.on('drag', (pointer, dragX, dragY) => {
//             this.l1_karandi2.x = dragX;
//             this.l1_karandi2.y = dragY;

//         this.children.bringToTop(this.l1_karandi2);
//         this.children.bringToTop(this.logo);
//         this.children.bringToTop(this.musicBtn);
//         this.children.bringToTop(this.shutter_bg);

      
//             this.arrow5.setVisible(false)
//             this.arrow2.setVisible(true)

         
         

//         });
//         this.l1_karandi2.on('dragend', () => {
//         if ((this.input.x>50 && this.input.x<466 && this.input.y>170 && this.input.y<420)){
//         this.l1_karandi2.visible=false; 
//         this.arrow2.setVisible(false)
           
//         this.karandi_ani1.setVisible(true);
//         this.karandi_ani1.play('karandi_ani1_frame');

//           this.time_liner4.setVisible(true);
//           this.time_liner4.play('time_liner4_key');


//           this.l1_ove_ani.setVisible(true);
//           this.l1_ove_ani.play('l1_ove_ani_frame6');

//         this.time.delayedCall(800,() => {
//         this.karandi_ani1.setVisible(false);

//         this.tweens.add({targets:this.red_liqued,x:900,ease: 'Quadratic',duration:1200,onComplete:() => {
//         this.red_liqued.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//             this.arrow7.setVisible(true);

//        }},this);
     

//         },this);


       

//             }
//              else{
//         this.children.bringToTop(this.arrow5);

//             this.arrow5.setVisible(true)
//             this.arrow2.setVisible(false);

//             this.children.bringToTop(this.arrow5);

//              this.l1_karandi2.x=770;
//              this.l1_karandi2.y=200;

//              }
//         },this);

// ////////////////////////////////////////////////////////////////

//         this.red_chose_ani = this.add.sprite(260,200, "red_chose_ani");
//         this.red_chose_ani.setVisible(false);

//         this.red_chose_aniFrame1 = this.anims.generateFrameNames('red_chose_ani', {start: 0,end: 4,zeroPad: 1,
//         prefix: 'red_chose_ani'});
//         this.anims.create({key: 'red_chose_ani_key',frames: this.red_chose_aniFrame1,frameRate:10,repeat:-1,}); 
       

            
//         this.red_liqued = this.add.sprite(1500,330, "red_liqued");
//         // this.red_liqued.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.red_liqued.on('drag', (pointer, dragX, dragY) => {
//             this.red_liqued.x = dragX;
//             this.red_liqued.y = dragY;

//         this.children.bringToTop(this.red_liqued);
//         this.children.bringToTop(this.logo);
//         this.children.bringToTop(this.musicBtn);
//         this.children.bringToTop(this.shutter_bg);

//             this.arrow7.setVisible(false);
//             this.arrow2.setVisible(true);
      
        
         

//         });
//         this.red_liqued.on('dragend', () => {
//         if ((this.input.x>50 && this.input.x<466 && this.input.y>170 && this.input.y<420)){
//         this.red_liqued.visible=false; 
//         this.arrow2.setVisible(false)
           
//         this.red_chose_ani.setVisible(true);
//         this.red_chose_ani.play('red_chose_ani_key');

//           this.l1_ove_ani.setVisible(true);
//           this.l1_ove_ani.play('l1_ove_ani_frame7');

//         this.time.delayedCall(800,() => {
//         this.red_chose_ani.setVisible(false);
//         this.l1_karandi3.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.l1_karandi3.setVisible(true);

//             this.arrow5.setVisible(true);
     

//         },this);


       

//             }
//              else{

//             this.arrow7.setVisible(true);
//             this.arrow2.setVisible(false);
      
            
//              this.red_liqued.x=900;
//              this.red_liqued.y=330;

//              }
//         },this);

// ////////////////////////////

//           this.front_tawa = this.add.sprite(228,380, "front_tawa");

//         this.fair_fair = this.add.sprite(270,410, "fair_fair");
//         this.fair_fair.alpha=0;

//            this.fair_fair_frame = this.anims.generateFrameNames('fair_fair', {start: 0,end:6,zeroPad:1,
//             prefix: 'fair_fair'});
//             this.anims.create({key:'fair_fair_frame',frames: this.fair_fair_frame,frameRate:12,repeat:-1,});

      

// ///////////////////////////////

//             this.karandi_ani2 = this.add.sprite(228,260, "karandi_ani");
//             this.karandi_ani2.setVisible(false);

//             this.karandi_ani2_frame = this.anims.generateFrameNames('karandi_ani', {start: 0,end:5,zeroPad:1,
//             prefix: 'karandi_ani'});
//             this.anims.create({key:'karandi_ani2_frame',frames: this.karandi_ani2_frame,frameRate:7,repeat:-1,});




//         this.l1_karandi3 = this.add.sprite(770,200, "l1_karandi");
//         this.l1_karandi3.setVisible(false);
//         // this.l1_karandi3.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.l1_karandi3.on('drag', (pointer, dragX, dragY) => {
//             this.l1_karandi3.x = dragX;
//             this.l1_karandi3.y = dragY;

//         this.children.bringToTop(this.l1_karandi3);
//         this.children.bringToTop(this.logo);
//         this.children.bringToTop(this.musicBtn);
//         this.children.bringToTop(this.shutter_bg);

      
//             this.arrow5.setVisible(false)
//             this.arrow2.setVisible(true)

         
         

//         });
//         this.l1_karandi3.on('dragend', () => {
//         if ((this.input.x>50 && this.input.x<466 && this.input.y>170 && this.input.y<420)){
//         this.l1_karandi3.visible=false; 
//         this.arrow2.setVisible(false)
       
           
//         this.karandi_ani1.setVisible(true);
//         this.karandi_ani1.play('karandi_ani1_frame');

//           this.l1_ove_ani.setVisible(true);
//           this.l1_ove_ani.play('l1_ove_ani_frame8');

//  this.time_liner4.setVisible(true);
//           this.time_liner4.play('time_liner4_key');

//         this.time.delayedCall(800,() => {
      
//         this.karandi_ani1.setVisible(false);
      
//     this.front_tawa.setVisible(false);
//     this.l1tawa.setVisible(false);
//     this.l1_ove_ani.setVisible(false);
//     this.l1_oli_ani.setVisible(false);
//     this.l1final_tawa.setVisible(true);
//         this.l1final_tawa.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//             this.l1meet_bowl.setVisible(true);

//             this.arrow2.setVisible(true);
      
//         },this);


       

//             }
//              else{
//         this.children.bringToTop(this.arrow5);

//             this.arrow5.setVisible(true)
//             this.arrow2.setVisible(false);

//             this.children.bringToTop(this.arrow5);

//              this.l1_karandi3.x=770;
//              this.l1_karandi3.y=200;

//              }
//         },this);
// ///////////////////////////////



//             this.l1meet_bowl = this.add.sprite(900,400, "l1meet_bowl");
//             this.l1meet_bowl.setVisible(false);

//             this.l1meet_bowl_frame = this.anims.generateFrameNames('l1meet_bowl', {start: 0,end:4,zeroPad:1,
//             prefix: 'l1meet_bowl'});
//             this.anims.create({key:'l1meet_bowl_frame',frames: this.l1meet_bowl_frame,frameRate:7,});


//     this.l1final_tawa1 = this.add.sprite(401,184, "l1final_tawa");
//     this.l1final_tawa1.setVisible(false);
   

//             this.l1final_tawa1_frame = this.anims.generateFrameNames('l1final_tawa', {start: 3,end:9,zeroPad:1,
//             prefix: 'l1final_tawa'});
//             this.anims.create({key:'l1final_tawa1_frame',frames: this.l1final_tawa1_frame,frameRate:7,});



// ///////////////////////////////


//         this.l1final_tawa = this.add.sprite(401,184, "l1final_tawa");
//         this.l1final_tawa.setVisible(false);
//         this.l1final_tawa.setFrame('l1final_tawa1');
//         // this.l1final_tawa.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.l1final_tawa.on('drag', (pointer, dragX, dragY) => {
//             this.l1final_tawa.x = dragX;
//             this.l1final_tawa.y = dragY;

//         this.children.bringToTop(this.l1final_tawa);
//         this.children.bringToTop(this.logo);
//         this.children.bringToTop(this.musicBtn);
//         this.children.bringToTop(this.shutter_bg);

      
//             this.arrow2.setVisible(false);
//             this.arrow8.setVisible(true);
         
//          this.fair_fair.alpha=0;
         

//         });
//         this.l1final_tawa.on('dragend', () => {
//         if ((this.input.x>700 && this.input.x<1100 && this.input.y>180 && this.input.y<480)){
//         this.l1final_tawa.setVisible(false);
//             this.arrow8.setVisible(false);

//          this.fair_fair.alpha=0;


//         this.l1final_tawa1.setVisible(true);
//         this.l1final_tawa1.play('l1final_tawa1_frame');
        
//             this.time.delayedCall(400,() => {
//             this.l1meet_bowl.setVisible(true);
//             this.l1meet_bowl.play('l1meet_bowl_frame');

//             },this);
     
//         this.time.delayedCall(500,() => {
//         this.l1final_tawa1.setVisible(false);

//         // this.nxt_btn1.setVisible(true);

//              this.tweens.add({targets:this.playbtn,scaleX: 1,scaleY:1,ease: 'Bounce',duration:800,});


//         },this);
       

//             }
//              else{

//         this.children.bringToTop(this.arrow2);
           
//             this.arrow2.setVisible(true);
//             this.arrow8.setVisible(false);
         

//              this.l1final_tawa.x=401;
//              this.l1final_tawa.y=184;

//              }
//         },this);




//         this.nxt_btn1 = this.add.sprite(1140,500, "btn5");
//         this.nxt_btn1.setVisible(false);
//         this.nxt_btn1.setInteractive({useHandCursor:true});
//         this.nxt_btn1.on('pointerdown',function(){
//         this.nxt_btn1.disableInteractive();
//         this.nxt_btn1.setVisible(false);

//         // this.scene.start('level1_pan_cocking')





//         },this);


//     this.time_liner2 = this.add.sprite(650,630, "time_liner");
//     this.time_liner2.setVisible(false);

//         this.time_liner2Frame1 = this.anims.generateFrameNames('time_liner', {start: 0,end: 14,zeroPad: 1,
//         prefix: 'time_liner'});
//         this.anims.create({key: 'time_liner2_key',frames: this.time_liner2Frame1,frameRate:20,}); 
//         this.time_liner2.on("animationcomplete",function() {
//     this.time_liner2.setVisible(false);

//        },this);

   
//    this.time_liner3 = this.add.sprite(650,630, "time_liner");
//     this.time_liner3.setVisible(false);

//         this.time_liner3Frame1 = this.anims.generateFrameNames('time_liner', {start: 0,end: 14,zeroPad: 1,
//         prefix: 'time_liner'});
//         this.anims.create({key: 'time_liner3_key',frames: this.time_liner3Frame1,frameRate:15,}); 
//         this.time_liner3.on("animationcomplete",function() {
//     this.time_liner3.setVisible(false);

//        },this);


//         this.time_liner4 = this.add.sprite(650,630, "time_liner");
//         this.time_liner4.setVisible(false);

//         this.time_liner4Frame1 = this.anims.generateFrameNames('time_liner', {start: 0,end: 14,zeroPad: 1,
//         prefix: 'time_liner'});
//         this.anims.create({key: 'time_liner4_key',frames: this.time_liner4Frame1,frameRate:17,}); 
//         this.time_liner4.on("animationcomplete",function() {
//         this.time_liner4.setVisible(false);

//        },this);



//         this.time_liner5 = this.add.sprite(650,630, "time_liner");
//         this.time_liner5.setVisible(false);

//         this.time_liner5Frame1 = this.anims.generateFrameNames('time_liner', {start: 0,end: 14,zeroPad: 1,
//         prefix: 'time_liner'});
//         this.anims.create({key: 'time_liner5_key',frames: this.time_liner5Frame1,frameRate:17,}); 
//         this.time_liner5.on("animationcomplete",function() {
//         this.time_liner5.setVisible(false);

//        },this);


        
// ///////////////////////////////

//         // this.dummy_drag=true;
//         // this.dummy =this.add.sprite(226,403,'l1final_tawa');

  
//     // *********************************drag & drop creation***********************************************  // 

//         // this.drag_image = this.add.image(450,692,'drag_image').setOrigin(0.5, 0.5);
//         // this.drag_image.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         // this.drag_image.on('drag', (pointer, dragX, dragY) => {
//         //     this.drag_image.x = dragX;
//         //     this.drag_image.y = dragY;
//         // });
//         // this.drag_image.on('dragend', () => {
//         //     if ((this.input.x>370 && this.input.x<480 && this.input.y>120 && this.input.y<220)){
//         //     this.drag_image.visible=false; 
//         //     }
//         //      else{
//         //      this.drag_image.x=430;
//         //      this.drag_image.y=320;
//         //      }
//         // },this);

//     // *********************************click_rectangle creation***********************************************  // 
//         // this.click_rect = this.add.rectangle(250, 250, 70, 150, 0xff0000,0).setOrigin(0.5);
//         // this.click_rect.setInteractive({useHandCursor:true});
//         // this.click_rect.on('pointerdown',function(){
//         // this.click_rect.disableInteractive();
//         // },this);

//     // ********************************************************************************  // 



   

//     // ****************************************************************************************************** //
            
//     // ***********************************Arrow *********************************************** //


//              var arrow_Posx = [1112,260,810,1030,776,1050,890,900,580];
//              var arrow_Posy = [160,270,300,400,90,400,160,330,460,440];
             
//          for (var i = 1; i <= 50; i++) {
//             this['arrow' + i] = this.add.sprite(arrow_Posx[i - 1], arrow_Posy[i - 1], 'arrow');
//             this['arrow' + i].setOrigin(0.5);
//             this['arrow' + i].anims.create({key: 'arrow',
//                 frames: this.anims.generateFrameNumbers('arrow', { start: 0, end: 9 - 1 }),
//                 frameRate: 15,
//                 repeat: -1
//             });
//             this['arrow' + i].anims.play('arrow');
//             this['arrow' + i].setVisible(false);

//             if (i === 1 ) {
//                 this['arrow' + i].setVisible(false);
//                 // this['arrow' + i].rotation=1.58;
//             }
                      
            
//         }

//     // ********************************Collide creation************************************************** //

//           // this.mcir = this.add.graphics();
//         // this.mcir.fillStyle(0x666666, 0.1);
//         // this.mcir.fillRect(0, 0, 1280, 720);
//         // this.mcir.setInteractive(new Phaser.Geom.Rectangle(0, 0, 1280, 720), Phaser.Geom.Rectangle.Contains);
//         // this.mcir.on('pointerdown', function (pointer) {
//         //   this.mcnt1++;
//         //   this['xcnt' + this.mcnt1] = pointer.x;
//         //   this['ycnt' + this.mcnt1] = pointer.y;
//         //   const circle = this.add.graphics();
//         //   circle.fillStyle(0x000000, 0.5);
//         //   circle.fillCircle(pointer.x, pointer.y, 20);
//         //   circle.setDepth(1);
//         //   console.log(this['xcnt' + this.mcnt1] + ':' + this['ycnt' + this.mcnt1]);
//         // }, this);

//     // ************************************Ad creation********************************************** //
        
//         // const { lockedItem: lock_r1, adfaildbtn: adfaildbtn_r1, addismisbtn: addismisbtn_r1 } = 
//         // createLockedItem(this, 139, 585, 'panel_acc0001ad',  () => {
//         // this.panel_acc0001.setInteractive({ useHandCursor: true });
//             // });
//         // lock_r1.setScale(0.43); 
//         // this.acc_group.add(lock_r1); 

//     // ********************************************************************************** //

//        this.playbtn=this.add.image(1190,640,'btn2').setOrigin(0.5, 0.5).setScale(0);
//         this.playbtn.setInteractive({ useHandCursor: true });
//         this.playbtn.on('pointerover',function(){this.playbtn.setScale(1.05)},this);
//         this.playbtn.on('pointerout',function(){this.playbtn.setScale(1)},this);
//         this.playbtn.on('pointerdown',this.enterRoom,this);

//         this.morebtn=this.add.image(60,660,'btn4').setOrigin(0.5, 0.5).setScale(0);
//         this.morebtn.setInteractive({ useHandCursor: true });
//         this.morebtn.on('pointerover',function(){this.morebtn.setScale(1.05)},this);
//         this.morebtn.on('pointerout',function(){this.morebtn.setScale(1)},this);
//         this.morebtn.on('pointerup',this.morebtnLink,this);

      

//          this.logo =this.add.image(165,55,'logo').setScale(0.65);
//         this.logo.setInteractive({pixelPerfect:true});
//         this.logo.on('pointerup',this.LogoLink,this);

//           this.musicBtn = this.add.sprite(1212,50,"music-on");
//         this.musicBtn.setInteractive();
//         this.musicBtn.on('pointerup',this.changemusic,this);

//     this.shutter_group = this.add.container();
//     this.shutter_bg =this.add.image(320,360,'shutter_bg');
//     this.shutter_bg2 =this.add.image(960,360,'shutter_bg2');
//     this.shutter_group.add(this.shutter_bg);
//     this.shutter_group.add(this.shutter_bg2);

//     this.tweens.add({targets:this.shutter_group,y:-720,ease: 'Quadratic',duration:1200,onComplete:() => {
//         this.l1_oil.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});

//         this.arrow1.setVisible(true);

//     }},this);

//         if (!this.sound.mute) {
//         this.musicBtn.setTexture('music-on');
//         } else {
//         this.musicBtn.setTexture('music-off');
//         }
// }
// update() {
//   // console.log(this.input.x + ':' + this.input.y); 

//   if (this.dummy_drag) {
//         this.dummy.x = this.input.activePointer.x ;
//         this.dummy.y = this.input.activePointer.y;
//         } 

  



//   }
          
// morebtnLink (){
//   YYGGames.navigate("game", "morebutton");
// }
// LogoLink (){
//       YYGGames.navigate("game", "logo");
// }
// enterRoom (){


//         this.anims.remove('l1_oli_ani_frame_3');
//         this.anims.remove('l1_oil_battlani_frame');
//         this.anims.remove('l1_oli_ani_frame');
//         this.anims.remove('l1_pundu1_frame');
//         this.anims.remove('l1_oli_ani_frame_1');
//         this.anims.remove('onion_plat1_frame');
//         this.anims.remove('l1_oli_ani_frame_2');
//         this.anims.remove('l1salt_ani_frame');
//         this.anims.remove('l1_ove_ani_frame3');
//         this.anims.remove('melga_ani1_frame');
//         this.anims.remove('l1_ove_ani_frame2');
//         this.anims.remove('l1_tomato_plat1_frame');
//         this.anims.remove('l1_ove_ani_frame1');
//         this.anims.remove('karandi_ani_frame');
//         this.anims.remove('l1_ove_ani_frame4');
//         this.anims.remove('kari_plate1_frame');
//         this.anims.remove('l1_ove_ani_frame5');
//         this.anims.remove('karandi_ani1_frame');
//         this.anims.remove('l1_ove_ani_frame6');
//         this.anims.remove('red_chose_ani_key');
//         this.anims.remove('l1_ove_ani_frame7');
//         this.anims.remove('karandi_ani1_frame');
//         this.anims.remove('l1_ove_ani_frame8');
//         this.anims.remove('l1final_tawa1_frame');
//         this.anims.remove('l1meet_bowl_frame');
//         this.anims.remove('time_liner2_key');
//         this.anims.remove('time_liner3_key');
//         this.anims.remove('time_liner4_key');
//         this.anims.remove('time_liner5_key');


           


//   if (Main.l1_shap_array[0]==1 ) {
//     this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     var state = 'shape_selection_lavel';
//     MyShowAD(this, state);

   
//     }},this);

//         }

//     if (Main.l1_shap_array[1]==1 ) {
//     this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     var state = 'level1_crack_shape';
//     MyShowAD(this, state);

   
//     }},this);

//         }
        


//    }
  
// changemusic() {
//      if (!this.sound.mute) {
//     this.musicBtn.setTexture('music-off');
//     this.sound.mute = true;
//   } else {
//     this.musicBtn.setTexture('music-on');
//     this.sound.mute = false;
//   }
//   }   
// }
// ///////////////////////////////////////

// class level1_crack_shape extends Phaser.Scene {

// constructor() {
//  super('level1_crack_shape');
// }
//  create() {
     
//        this.levelGroup = this.add.container();

//         this.l2_bg = this.add.sprite(320,360, "l2_bg");
//         this.l2_bg1 = this.add.sprite(960,360, "l2_bg1");

//         this.levelGroup.add(this.l2_bg);
//         this.levelGroup.add(this.l2_bg1);




//             this.l1meet_bowl = this.add.sprite(200,340, "l1meet_bowl");
//             this.l1meet_bowl.setVisible(true);
//             this.l1meet_bowl.setFrame('l1meet_bowl4');

//             this.blue1_Front_open = this.add.sprite(700,355, "blue1_Front_open");
//             this.blue1_Front_open.setVisible(true);

//             this.box_shap0001 = this.add.sprite(700,340, "spring_pice0001");
//             this.box_shap0001.setVisible(false);

//             this.Chees_topings = this.add.sprite(700,290, "Chees_topings");
//             this.Chees_topings.alpha=0;

//             this.blue1_Front = this.add.sprite(700,355, "blue1_Front");
//             this.blue1_Front.setVisible(true);

//             this.l1_plate = this.add.sprite(302,500, "l1_plate").setScale(0.95);
//             this.l1_plate.setVisible(true);

//             this.l1_plate1 = this.add.sprite(794,514, "l1_plate");
//             this.l1_plate1.setVisible(true);

//             this.scrwwer_tra = this.add.sprite(2000,290, "scrwwer_tra");

// ////////////////////////////////////

//             this.l1Chees_ani = this.add.sprite(708,230, "l1Chees_ani");
//             this.l1Chees_ani.setVisible(false);

//             this.l1Chees_ani_frame = this.anims.generateFrameNames('l1Chees_ani', {start: 0,end:4,zeroPad:1,
//             prefix: 'l1Chees_ani'});
//             this.anims.create({key:'l1Chees_ani_frame',frames: this.l1Chees_ani_frame,frameRate:7,repeat:-1,});


//             /////////////////////////////////



//         this.box_pice = this.add.sprite(304,480, "spring_pice0001").setScale(0.9);
//         this.box_pice.setVisible(true);
//         // this.box_pice.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.box_pice.on('drag', (pointer, dragX, dragY) => {
//             this.box_pice.x = dragX;
//             this.box_pice.y = dragY;

//                  this.arrow1.setVisible(false);
//                  this.arrow2.setVisible(true);

//         });
//         this.box_pice.on('dragend', () => {
//             if ((this.input.x>460 && this.input.x<930 && this.input.y>180 && this.input.y<383)){
//             this.box_pice.setVisible(false);
//             this.box_shap0001.setTexture('spring_pice00010');
//                  this.arrow2.setVisible(false);

//             this.l1meet_bowl.setVisible(false);
//             this.l1_plate1.setVisible(false);

//     this.l1_chees_peac.setVisible(true);
//     this.tweens.add({targets:this.scrwwer_tra,x:730,ease: 'Quadratic',duration:1200,onComplete:() => {
//         this.l1_chees_peac.setInteractive({useHandCursor:true,draggable:true,});

//                  this.arrow1.setVisible(true);

//     }},this);



//             }
//              else{

//                  this.arrow1.setVisible(true);
//                  this.arrow2.setVisible(false);


//              this.box_pice.x=304;
//              this.box_pice.y=480;
//              }
//         },this);
//             ////////////////////////////////////////////////////////
          
//         this.box_pice1 = this.add.sprite(304,460, "spring_pice0001").setScale(0.95);
//         this.box_pice1.setVisible(true);
//         // this.box_pice1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.box_pice1.on('drag', (pointer, dragX, dragY) => {
//             this.box_pice1.x = dragX;
//             this.box_pice1.y = dragY;

//                  this.arrow1.setVisible(false);
//                  this.arrow2.setVisible(true);

//         });
//         this.box_pice1.on('dragend', () => {
//             if ((this.input.x>460 && this.input.x<930 && this.input.y>180 && this.input.y<383)){
//             this.box_pice1.setVisible(false);
//             this.box_shap0001.setTexture('spring_pice0007');
//         this.red_sppon5.setInteractive({useHandCursor:true});
//                  this.arrow2.setVisible(false);
//                  this.arrow3.setVisible(true);


//             }
//              else{
//                 this.arrow1.setVisible(true);
//                  this.arrow2.setVisible(false);

//              this.box_pice1.x=304;
//              this.box_pice1.y=470;
//              }
//         },this);



//         ////////////////////////////////////////////////////////
 
//         this.box_pice2 = this.add.sprite(304,445, "spring_pice0001").setScale(0.95);
//         this.box_pice2.setVisible(true);
//         // this.box_pice2.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.box_pice2.on('drag', (pointer, dragX, dragY) => {
//             this.box_pice2.x = dragX;
//             this.box_pice2.y = dragY;

//               this.arrow1.setVisible(false);
//               this.arrow2.setVisible(true);

//         });
//         this.box_pice2.on('dragend', () => {
//             if ((this.input.x>460 && this.input.x<930 && this.input.y>180 && this.input.y<383)){
//             this.box_pice2.setVisible(false);
//             this.box_shap0001.setTexture('spring_pice0004');
//             this.red_sppon3.setInteractive({useHandCursor:true});
//                  this.arrow2.setVisible(false);
//                  this.arrow3.setVisible(true);

//             }
//              else{

//                  this.arrow1.setVisible(true);
//                  this.arrow2.setVisible(false);

//              this.box_pice2.x=304;
//              this.box_pice2.y=445;
//              }
//         },this);

//             ////////////////////////////////////////////////////////

//         this.box_pice3 = this.add.sprite(304,430, "spring_pice0001").setScale(0.95);
//         this.box_pice3.setVisible(true);
//         // this.box_pice3.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.box_pice3.on('drag', (pointer, dragX, dragY) => {
//             this.box_pice3.x = dragX;
//             this.box_pice3.y = dragY;

//         this.arrow1.setVisible(false);
//         this.arrow2.setVisible(true);




//         });
//         this.box_pice3.on('dragend', () => {
//             if ((this.input.x>460 && this.input.x<930 && this.input.y>180 && this.input.y<383)){
//             this.box_pice3.setVisible(false);
//                  this.arrow2.setVisible(false);

//             this.box_shap0001.setVisible(true);
//             this.box_shap0001.setTexture('spring_pice0001');

//                  this.red_sppon1.setInteractive({useHandCursor:true});
//                  this.arrow3.setVisible(true);

//             }
//              else{

//                  this.arrow1.setVisible(true);
//                  this.arrow2.setVisible(false);

//              this.box_pice3.x=304;
//              this.box_pice3.y=430;
//              }
//         },this);


        

// /////////////////////////////////////////////////chees

        
//         this.chees_pice1 = this.add.sprite(800,520, "chees_pice");
//         this.chees_pice1.setVisible(true);
//         // this.chees_pice1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.chees_pice1.on('drag', (pointer, dragX, dragY) => {
//             this.chees_pice1.x = dragX;
//             this.chees_pice1.y = dragY;

//                  this.arrow4.setVisible(false);
//                  this.arrow2.setVisible(true);

//         });
//         this.chees_pice1.on('dragend', () => {
//             if ((this.input.x>460 && this.input.x<930 && this.input.y>180 && this.input.y<383)){
//             this.chees_pice1.setVisible(false);
//             this.box_shap0001.setTexture('spring_pice0009');
//         this.box_pice.setInteractive({useHandCursor:true,draggable:true,});
//                  this.arrow2.setVisible(false);
//                  this.arrow1.setVisible(true);

//             }
//              else{

//                   this.arrow4.setVisible(true);
//                  this.arrow2.setVisible(false);

//              this.chees_pice1.x=800;
//              this.chees_pice1.y=520;
//              }
//         },this);


//             // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

           
//         this.chees_pice2 = this.add.sprite(800,500, "chees_pice");
//         this.chees_pice2.setVisible(true);
//         // this.chees_pice2.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.chees_pice2.on('drag', (pointer, dragX, dragY) => {
//             this.chees_pice2.x = dragX;
//             this.chees_pice2.y = dragY;

//                  this.arrow4.setVisible(false);
//                  this.arrow2.setVisible(true);

//         });
//         this.chees_pice2.on('dragend', () => {
//             if ((this.input.x>460 && this.input.x<930 && this.input.y>180 && this.input.y<383)){
//             this.chees_pice2.setVisible(false);
//             this.box_shap0001.setTexture('spring_pice0006');
//         this.box_pice1.setInteractive({useHandCursor:true,draggable:true,});
//                  this.arrow2.setVisible(false);
//                  this.arrow1.setVisible(true);



//             }
//              else{

//                  this.arrow4.setVisible(true);
//                  this.arrow2.setVisible(false);
//              this.chees_pice2.x=800;
//              this.chees_pice2.y=500;
//              }
//         },this);

//             // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//         this.chees_pice3 = this.add.sprite(800,480, "chees_pice");
//         this.chees_pice3.setVisible(true);
//         // this.chees_pice3.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.chees_pice3.on('drag', (pointer, dragX, dragY) => {
//             this.chees_pice3.x = dragX;
//             this.chees_pice3.y = dragY;
//                  this.arrow4.setVisible(false);
//                  this.arrow2.setVisible(true);


//         });
//         this.chees_pice3.on('dragend', () => {
//             if ((this.input.x>460 && this.input.x<930 && this.input.y>180 && this.input.y<383)){
//             this.chees_pice3.setVisible(false);
//             this.box_shap0001.setTexture('spring_pice0003');
//         this.box_pice2.setInteractive({useHandCursor:true,draggable:true,});
//               this.arrow2.setVisible(false);
//               this.arrow1.setVisible(true);


//             }
//              else{

//               this.arrow4.setVisible(true);
//               this.arrow2.setVisible(false);


//              this.chees_pice3.x=800;
//              this.chees_pice3.y=480;
//              }
//         },this);


// ////////////////////////////////////////////////////


//             this.spone_1 = this.add.sprite(150,270, "spone_1");
//             this.spone_1.setVisible(true);

//             this.spone_2 = this.add.sprite(150,270, "spone_2");
//             this.spone_2.setVisible(false);


//         this.red_sppon1 = this.add.rectangle(200, 300, 270, 100, 0xff0000,0).setOrigin(0.5);
//         // this.red_sppon1.setInteractive({useHandCursor:true});
//         this.red_sppon1.on('pointerdown',function(){
//         this.red_sppon1.disableInteractive();
//                  this.arrow3.setVisible(false);
//                  this.arrow2.setVisible(true);

//             this.l1meet_bowl.setFrame('l1meet_bowl3');

//         this.spone_1.setVisible(false);
//         this.spone_2.setVisible(true);
//         this.spone_2_drag=true;

//         this.red_sppon2.setInteractive({useHandCursor:true});
           

//         },this);

// ////////////////////////////////////////////////////


//         this.red_sppon2 = this.add.rectangle(700, 340, 350, 150, 0xff0000,0).setOrigin(0.5);
//         // this.red_sppon2.setInteractive({useHandCursor:true});
//         this.red_sppon2.on('pointerdown',function(){
//         this.red_sppon2.disableInteractive();
//             this.box_shap0001.setTexture('spring_pice0002');
//                  this.arrow2.setVisible(false);

//         this.spone_1.setVisible(true);
//         this.spone_2.setVisible(false);
//         this.spone_2_drag=false;
//         this.chees_pice3.setInteractive({useHandCursor:true,draggable:true,});
//                  this.arrow4.setVisible(true);

//         },this);


// ////////////////////////////////////////////////////

//         this.red_sppon3 = this.add.rectangle(200, 300, 270, 100, 0xff0000,0).setOrigin(0.5);
//         // this.red_sppon3.setInteractive({useHandCursor:true});
//         this.red_sppon3.on('pointerdown',function(){
//         this.red_sppon3.disableInteractive();

//             this.l1meet_bowl.setFrame('l1meet_bowl2');

//         this.spone_1.setVisible(false);
//         this.spone_2.setVisible(true);
//         this.spone_2_drag=true;

//         this.red_sppon4.setInteractive({useHandCursor:true});
           
//                  this.arrow3.setVisible(false);
//                  this.arrow2.setVisible(true);

//         },this);

// ////////////////////////////////////////////////////


//         this.red_sppon4 = this.add.rectangle(700, 340, 350, 150, 0xff0000,0).setOrigin(0.5);
//         // this.red_sppon4.setInteractive({useHandCursor:true});
//         this.red_sppon4.on('pointerdown',function(){
//         this.red_sppon4.disableInteractive();
//             this.box_shap0001.setTexture('spring_pice0005');

//                   this.arrow2.setVisible(false);
//                  this.arrow4.setVisible(true);


//         this.spone_1.setVisible(true);
//         this.spone_2.setVisible(false);
//         this.spone_2_drag=false;
//         this.chees_pice2.setInteractive({useHandCursor:true,draggable:true,});
      
//         },this);

// ////////////////////////////////////////////////////

//         this.red_sppon5 = this.add.rectangle(200, 300, 270, 100, 0xff0000,0).setOrigin(0.5);
//         // this.red_sppon5.setInteractive({useHandCursor:true});
//         this.red_sppon5.on('pointerdown',function(){
//         this.red_sppon5.disableInteractive();

//             this.l1meet_bowl.setFrame('l1meet_bowl0');

//         this.spone_1.setVisible(false);
//         this.spone_2.setVisible(true);
//         this.spone_2_drag=true;

//         this.red_sppon6.setInteractive({useHandCursor:true});
           
//                  this.arrow3.setVisible(false);
//                  this.arrow2.setVisible(true);

//         },this);

// ////////////////////////////////////////////////////


//         this.red_sppon6 = this.add.rectangle(700, 340, 350, 150, 0xff0000,0).setOrigin(0.5);
//         // this.red_sppon6.setInteractive({useHandCursor:true});
//         this.red_sppon6.on('pointerdown',function(){
//         this.red_sppon6.disableInteractive();
//             this.box_shap0001.setTexture('spring_pice0008');

//         this.spone_1.setVisible(false);
//         this.spone_2.setVisible(false);
//         this.spone_2_drag=false;
//         this.chees_pice1.setInteractive({useHandCursor:true,draggable:true,});
//                  this.arrow2.setVisible(false);
//                  this.arrow4.setVisible(true);
      
//         },this);

// ////////////////////////////////////////////////////

//         this.l1_chees_peac = this.add.sprite(300,480, "l1_chees_peac");
//         this.l1_chees_peac.setVisible(false);
//         // this.l1_chees_peac.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.l1_chees_peac.on('drag', (pointer, dragX, dragY) => {
//             this.l1_chees_peac.x = dragX;
//             this.l1_chees_peac.y = dragY;

//                  this.arrow1.setVisible(false);
//                  this.arrow2.setVisible(true);



//         });
//         this.l1_chees_peac.on('dragend', () => {
//             if ((this.input.x>460 && this.input.x<930 && this.input.y>180 && this.input.y<383)){
//             this.l1_chees_peac.setVisible(false);
//                  this.arrow2.setVisible(false);

//                 this.l1Chees_ani.setVisible(true);
//                  this.l1Chees_ani.play('l1Chees_ani_frame');

//     this.tweens.add({targets:this.Chees_topings,alpha:1,ease: 'Quadratic',duration:1200,onComplete:() => {
//                 this.scrwwer_tra.setVisible(false);
//                 this.l1Chees_ani.setVisible(false);
//                 this.l1_plate.setVisible(false);

//           this.time.delayedCall(1000,() => {



//                 this.scene.start('level1_crack_oven')

//         },this);
//         }},this);


//             }
//              else{

//                  this.arrow1.setVisible(true);
//                  this.arrow2.setVisible(false);

//              this.l1_chees_peac.x=300;
//              this.l1_chees_peac.y=480;
//              }
//         },this);


// ////////////////////////////////////////////////////













  
//     // *********************************time event creation***********************************************  // 

//         // this.time.delayedCall(1000,() => {
            
//         // },this);
        
   


//     // *********************************drag & drop creation***********************************************  // 

//         // this.drag_image = this.add.image(450,692,'drag_image').setOrigin(0.5, 0.5);
//         // this.drag_image.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         // this.drag_image.on('drag', (pointer, dragX, dragY) => {
//         //     this.drag_image.x = dragX;
//         //     this.drag_image.y = dragY;
//         // });
//         // this.drag_image.on('dragend', () => {
//         //     if ((this.input.x>370 && this.input.x<480 && this.input.y>120 && this.input.y<220)){
//         //     this.drag_image.visible=false; 
//         //     }
//         //      else{
//         //      this.drag_image.x=430;
//         //      this.drag_image.y=320;
//         //      }
//         // },this);

//     // *********************************click_rectangle creation***********************************************  // 
//         // this.click_rect = this.add.rectangle(250, 250, 70, 150, 0xff0000,0).setOrigin(0.5);
//         // this.click_rect.setInteractive({useHandCursor:true});
//         // this.click_rect.on('pointerdown',function(){
//         // this.click_rect.disableInteractive();
//         // },this);

//     // ********************************************************************************  // 

//         // this.dummy_drag=true;
//         // this.dummy =this.add.sprite(226,403,'chees_pice');



   

//     // ****************************************************************************************************** //
            
//     // ***********************************Arrow *********************************************** //


//              var arrow_Posx = [304,706,214,800];
//              var arrow_Posy = [400,280,200,410];
             
//          for (var i = 1; i <= 50; i++) {
//             this['arrow' + i] = this.add.sprite(arrow_Posx[i - 1], arrow_Posy[i - 1], 'arrow');
//             this['arrow' + i].setOrigin(0.5);
//             this['arrow' + i].anims.create({key: 'arrow',
//                 frames: this.anims.generateFrameNumbers('arrow', { start: 0, end: 9 - 1 }),
//                 frameRate: 15,
//                 repeat: -1
//             });
//             this['arrow' + i].anims.play('arrow');
//             this['arrow' + i].setVisible(false);

//             if (i === 1 ) {
//                 this['arrow' + i].setVisible(false);
               
//             }

                     
            
//         }

//     // ********************************Collide creation************************************************** //

//           // this.mcir = this.add.graphics();
//         // this.mcir.fillStyle(0x666666, 0.1);
//         // this.mcir.fillRect(0, 0, 1280, 720);
//         // this.mcir.setInteractive(new Phaser.Geom.Rectangle(0, 0, 1280, 720), Phaser.Geom.Rectangle.Contains);
//         // this.mcir.on('pointerdown', function (pointer) {
//         //   this.mcnt1++;
//         //   this['xcnt' + this.mcnt1] = pointer.x;
//         //   this['ycnt' + this.mcnt1] = pointer.y;
//         //   const circle = this.add.graphics();
//         //   circle.fillStyle(0x000000, 0.5);
//         //   circle.fillCircle(pointer.x, pointer.y, 20);
//         //   circle.setDepth(1);
//         //   console.log(this['xcnt' + this.mcnt1] + ':' + this['ycnt' + this.mcnt1]);
//         // }, this);

//     // ************************************Ad creation********************************************** //
        
//         // const { lockedItem: lock_r1, adfaildbtn: adfaildbtn_r1, addismisbtn: addismisbtn_r1 } = 
//         // createLockedItem(this, 139, 585, 'panel_acc0001ad',  () => {
//         // this.panel_acc0001.setInteractive({ useHandCursor: true });
//             // });
//         // lock_r1.setScale(0.43); 
//         // this.acc_group.add(lock_r1); 

//     // ********************************************************************************** //

//        this.playbtn=this.add.image(1190,640,'btn2').setOrigin(0.5, 0.5).setScale(0);
//         this.playbtn.setInteractive({ useHandCursor: true });
//         this.playbtn.on('pointerover',function(){this.playbtn.setScale(1.05)},this);
//         this.playbtn.on('pointerout',function(){this.playbtn.setScale(1)},this);
//         this.playbtn.on('pointerdown',this.enterRoom,this);

//         this.morebtn=this.add.image(60,660,'btn4').setOrigin(0.5, 0.5).setScale(0);
//         this.morebtn.setInteractive({ useHandCursor: true });
//         this.morebtn.on('pointerover',function(){this.morebtn.setScale(1.05)},this);
//         this.morebtn.on('pointerout',function(){this.morebtn.setScale(1)},this);
//         this.morebtn.on('pointerup',this.morebtnLink,this);

      

//          this.logo =this.add.image(165,55,'logo').setScale(0.65);
//         this.logo.setInteractive({pixelPerfect:true});
//         this.logo.on('pointerup',this.LogoLink,this);

//           this.musicBtn = this.add.sprite(1212,50,"music-on");
//         this.musicBtn.setInteractive();
//         this.musicBtn.on('pointerup',this.changemusic,this);

//     this.shutter_group = this.add.container();
//     this.shutter_bg =this.add.image(320,360,'shutter_bg');
//     this.shutter_bg2 =this.add.image(960,360,'shutter_bg2');
//     this.shutter_group.add(this.shutter_bg);
//     this.shutter_group.add(this.shutter_bg2);

//     this.tweens.add({targets:this.shutter_group,y:-720,ease: 'Quadratic',duration:1200,onComplete:() => {

//         this.box_pice3.setInteractive({useHandCursor:true,draggable:true,});
//         this.arrow1.setVisible(true);


//     }},this);

//         if (!this.sound.mute) {
//         this.musicBtn.setTexture('music-on');
//         } else {
//         this.musicBtn.setTexture('music-off');
//         }
// }
// update() {
//   // console.log(this.input.x + ':' + this.input.y); 

//   if (this.dummy_drag) {
//         this.dummy.x = this.input.activePointer.x ;
//         this.dummy.y = this.input.activePointer.y;
//         } 

//   if (this.spone_2_drag) {
//         this.spone_2.x = this.input.activePointer.x-40;
//         this.spone_2.y = this.input.activePointer.y;
//         } 

  



//   }
          
// morebtnLink (){
//   YYGGames.navigate("game", "morebutton");
// }
// LogoLink (){
//       YYGGames.navigate("game", "logo");
// }
// enterRoom (){
//     this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     var state = 'level1_box_shape';
//     MyShowAD(this, state);
//     }},this);
//    }
  
// changemusic() {
//      if (!this.sound.mute) {
//     this.musicBtn.setTexture('music-off');
//     this.sound.mute = true;
//   } else {
//     this.musicBtn.setTexture('music-on');
//     this.sound.mute = false;
//   }
//   }   
// }


// ///////////////////////////////////////

// class level1_box_shape extends Phaser.Scene {

// constructor() {
//  super('level1_box_shape');
// }
//  create() {
     
//        this.levelGroup = this.add.container();

//         this.l2_bg = this.add.sprite(320,360, "l2_bg");
//         this.l2_bg1 = this.add.sprite(960,360, "l2_bg1");

//         this.levelGroup.add(this.l2_bg);
//         this.levelGroup.add(this.l2_bg1);




//             this.l1meet_bowl = this.add.sprite(200,340, "l1meet_bowl");
//             this.l1meet_bowl.setVisible(true);
//             this.l1meet_bowl.setFrame('l1meet_bowl4');

//             this.blue1_Front_open = this.add.sprite(700,355, "blue1_Front_open");
//             this.blue1_Front_open.setVisible(true);

//             this.box_shap0001 = this.add.sprite(700,340, "box_shap0007");
//             this.box_shap0001.setVisible(false);

//             this.Chees_topings = this.add.sprite(700,290, "Chees_topings");
//             this.Chees_topings.alpha=0;

//             this.blue1_Front = this.add.sprite(700,355, "blue1_Front");
//             this.blue1_Front.setVisible(true);

//             this.l1_plate = this.add.sprite(302,512, "l1_plate");
//             this.l1_plate.setVisible(true);

//             this.l1_plate1 = this.add.sprite(794,520, "l1_plate");
//             this.l1_plate1.setVisible(true);

//             this.scrwwer_tra = this.add.sprite(2000,290, "scrwwer_tra");

// ////////////////////////////////////

//             this.l1Chees_ani = this.add.sprite(708,230, "l1Chees_ani");
//             this.l1Chees_ani.setVisible(false);

//             this.l1Chees_ani_frame = this.anims.generateFrameNames('l1Chees_ani', {start: 0,end:4,zeroPad:1,
//             prefix: 'l1Chees_ani'});
//             this.anims.create({key:'l1Chees_ani_frame',frames: this.l1Chees_ani_frame,frameRate:7,repeat:-1,});


//             /////////////////////////////////



//         this.box_pice = this.add.sprite(304,510, "box_pice").setScale(0.9);
//         this.box_pice.setVisible(true);
//         // this.box_pice.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.box_pice.on('drag', (pointer, dragX, dragY) => {
//             this.box_pice.x = dragX;
//             this.box_pice.y = dragY;

//                  this.arrow1.setVisible(false);
//                  this.arrow2.setVisible(true);

//         });
//         this.box_pice.on('dragend', () => {
//             if ((this.input.x>460 && this.input.x<930 && this.input.y>180 && this.input.y<383)){
//             this.box_pice.setVisible(false);
//             this.box_shap0001.setTexture('box_shap00010');
//                  this.arrow2.setVisible(false);

//             this.l1meet_bowl.setVisible(false);
//             this.l1_plate1.setVisible(false);

//     this.l1_chees_peac.setVisible(true);
//     this.tweens.add({targets:this.scrwwer_tra,x:730,ease: 'Quadratic',duration:1200,onComplete:() => {
//         this.l1_chees_peac.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});

//                  this.arrow1.setVisible(true);

//     }},this);



//             }
//              else{

//                  this.arrow1.setVisible(true);
//                  this.arrow2.setVisible(false);


//              this.box_pice.x=304;
//              this.box_pice.y=510;
//              }
//         },this);
//             ////////////////////////////////////////////////////////
          
//         this.box_pice1 = this.add.sprite(304,496, "box_pice").setScale(0.95);
//         this.box_pice1.setVisible(true);
//         // this.box_pice1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.box_pice1.on('drag', (pointer, dragX, dragY) => {
//             this.box_pice1.x = dragX;
//             this.box_pice1.y = dragY;

//                  this.arrow1.setVisible(false);
//                  this.arrow2.setVisible(true);

//         });
//         this.box_pice1.on('dragend', () => {
//             if ((this.input.x>460 && this.input.x<930 && this.input.y>180 && this.input.y<383)){
//             this.box_pice1.setVisible(false);
//             this.box_shap0001.setTexture('box_shap0007');
//         this.red_sppon5.setInteractive({useHandCursor:true});
//                  this.arrow2.setVisible(false);
//                  this.arrow3.setVisible(true);


//             }
//              else{
//                 this.arrow1.setVisible(true);
//                  this.arrow2.setVisible(false);

//              this.box_pice1.x=304;
//              this.box_pice1.y=496;
//              }
//         },this);



//         ////////////////////////////////////////////////////////
 
//         this.box_pice2 = this.add.sprite(304,480, "box_pice").setScale(0.95);
//         this.box_pice2.setVisible(true);
//         // this.box_pice2.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.box_pice2.on('drag', (pointer, dragX, dragY) => {
//             this.box_pice2.x = dragX;
//             this.box_pice2.y = dragY;

//               this.arrow1.setVisible(false);
//               this.arrow2.setVisible(true);

//         });
//         this.box_pice2.on('dragend', () => {
//             if ((this.input.x>460 && this.input.x<930 && this.input.y>180 && this.input.y<383)){
//             this.box_pice2.setVisible(false);
//             this.box_shap0001.setTexture('box_shap0004');
//             this.red_sppon3.setInteractive({useHandCursor:true});
//                  this.arrow2.setVisible(false);
//                  this.arrow3.setVisible(true);

//             }
//              else{

//                  this.arrow1.setVisible(true);
//                  this.arrow2.setVisible(false);

//              this.box_pice2.x=304;
//              this.box_pice2.y=480;
//              }
//         },this);

//             ////////////////////////////////////////////////////////

//         this.box_pice3 = this.add.sprite(304,465, "box_pice").setScale(0.95);
//         this.box_pice3.setVisible(true);
//         // this.box_pice3.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.box_pice3.on('drag', (pointer, dragX, dragY) => {
//             this.box_pice3.x = dragX;
//             this.box_pice3.y = dragY;

//         this.arrow1.setVisible(false);
//         this.arrow2.setVisible(true);




//         });
//         this.box_pice3.on('dragend', () => {
//             if ((this.input.x>460 && this.input.x<930 && this.input.y>180 && this.input.y<383)){
//             this.box_pice3.setVisible(false);
//                  this.arrow2.setVisible(false);

//             this.box_shap0001.setVisible(true);
//             this.box_shap0001.setTexture('box_shap0001');

//                  this.red_sppon1.setInteractive({useHandCursor:true});
//                  this.arrow3.setVisible(true);

//             }
//              else{

//                  this.arrow1.setVisible(true);
//                  this.arrow2.setVisible(false);

//              this.box_pice3.x=304;
//              this.box_pice3.y=465;
//              }
//         },this);


        

// /////////////////////////////////////////////////chees

        
//         this.chees_pice1 = this.add.sprite(800,520, "chees_pice");
//         this.chees_pice1.setVisible(true);
//         // this.chees_pice1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.chees_pice1.on('drag', (pointer, dragX, dragY) => {
//             this.chees_pice1.x = dragX;
//             this.chees_pice1.y = dragY;

//                  this.arrow4.setVisible(false);
//                  this.arrow2.setVisible(true);

//         });
//         this.chees_pice1.on('dragend', () => {
//             if ((this.input.x>460 && this.input.x<930 && this.input.y>180 && this.input.y<383)){
//             this.chees_pice1.setVisible(false);
//             this.box_shap0001.setTexture('box_shap0009');
//         this.box_pice.setInteractive({useHandCursor:true,draggable:true,});
//                  this.arrow2.setVisible(false);
//                  this.arrow1.setVisible(true);

//             }
//              else{

//                   this.arrow4.setVisible(true);
//                  this.arrow2.setVisible(false);

//              this.chees_pice1.x=800;
//              this.chees_pice1.y=520;
//              }
//         },this);


//             // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

           
//         this.chees_pice2 = this.add.sprite(800,500, "chees_pice");
//         this.chees_pice2.setVisible(true);
//         // this.chees_pice2.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.chees_pice2.on('drag', (pointer, dragX, dragY) => {
//             this.chees_pice2.x = dragX;
//             this.chees_pice2.y = dragY;

//                  this.arrow4.setVisible(false);
//                  this.arrow2.setVisible(true);

//         });
//         this.chees_pice2.on('dragend', () => {
//             if ((this.input.x>460 && this.input.x<930 && this.input.y>180 && this.input.y<383)){
//             this.chees_pice2.setVisible(false);
//             this.box_shap0001.setTexture('box_shap0006');
//         this.box_pice1.setInteractive({useHandCursor:true,draggable:true,});
//                  this.arrow2.setVisible(false);
//                  this.arrow1.setVisible(true);



//             }
//              else{

//                  this.arrow4.setVisible(true);
//                  this.arrow2.setVisible(false);
//              this.chees_pice2.x=800;
//              this.chees_pice2.y=500;
//              }
//         },this);

//             // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//         this.chees_pice3 = this.add.sprite(800,480, "chees_pice");
//         this.chees_pice3.setVisible(true);
//         // this.chees_pice3.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.chees_pice3.on('drag', (pointer, dragX, dragY) => {
//             this.chees_pice3.x = dragX;
//             this.chees_pice3.y = dragY;
//                  this.arrow4.setVisible(false);
//                  this.arrow2.setVisible(true);


//         });
//         this.chees_pice3.on('dragend', () => {
//             if ((this.input.x>460 && this.input.x<930 && this.input.y>180 && this.input.y<383)){
//             this.chees_pice3.setVisible(false);
//             this.box_shap0001.setTexture('box_shap0003');
//         this.box_pice2.setInteractive({useHandCursor:true,draggable:true,});
//               this.arrow2.setVisible(false);
//               this.arrow1.setVisible(true);


//             }
//              else{

//               this.arrow4.setVisible(true);
//               this.arrow2.setVisible(false);


//              this.chees_pice3.x=800;
//              this.chees_pice3.y=480;
//              }
//         },this);


// ////////////////////////////////////////////////////


//             this.spone_1 = this.add.sprite(150,270, "spone_1");
//             this.spone_1.setVisible(true);

//             this.spone_2 = this.add.sprite(150,270, "spone_2");
//             this.spone_2.setVisible(false);


//         this.red_sppon1 = this.add.rectangle(200, 300, 270, 100, 0xff0000,0).setOrigin(0.5);
//         // this.red_sppon1.setInteractive({useHandCursor:true});
//         this.red_sppon1.on('pointerdown',function(){
//         this.red_sppon1.disableInteractive();
//                  this.arrow3.setVisible(false);
//                  this.arrow2.setVisible(true);

//             this.l1meet_bowl.setFrame('l1meet_bowl3');

//         this.spone_1.setVisible(false);
//         this.spone_2.setVisible(true);
//         this.spone_2_drag=true;

//         this.red_sppon2.setInteractive({useHandCursor:true});
           

//         },this);

// ////////////////////////////////////////////////////


//         this.red_sppon2 = this.add.rectangle(700, 340, 350, 150, 0xff0000,0).setOrigin(0.5);
//         // this.red_sppon2.setInteractive({useHandCursor:true});
//         this.red_sppon2.on('pointerdown',function(){
//         this.red_sppon2.disableInteractive();
//             this.box_shap0001.setTexture('box_shap0002');
//                  this.arrow2.setVisible(false);

//         this.spone_1.setVisible(true);
//         this.spone_2.setVisible(false);
//         this.spone_2_drag=false;
//         this.chees_pice3.setInteractive({useHandCursor:true,draggable:true,});
//                  this.arrow4.setVisible(true);

//         },this);


// ////////////////////////////////////////////////////

//         this.red_sppon3 = this.add.rectangle(200, 300, 270, 100, 0xff0000,0).setOrigin(0.5);
//         // this.red_sppon3.setInteractive({useHandCursor:true});
//         this.red_sppon3.on('pointerdown',function(){
//         this.red_sppon3.disableInteractive();

//             this.l1meet_bowl.setFrame('l1meet_bowl2');

//         this.spone_1.setVisible(false);
//         this.spone_2.setVisible(true);
//         this.spone_2_drag=true;

//         this.red_sppon4.setInteractive({useHandCursor:true});
           
//                  this.arrow3.setVisible(false);
//                  this.arrow2.setVisible(true);

//         },this);

// ////////////////////////////////////////////////////


//         this.red_sppon4 = this.add.rectangle(700, 340, 350, 150, 0xff0000,0).setOrigin(0.5);
//         // this.red_sppon4.setInteractive({useHandCursor:true});
//         this.red_sppon4.on('pointerdown',function(){
//         this.red_sppon4.disableInteractive();
//             this.box_shap0001.setTexture('box_shap0005');

//                   this.arrow2.setVisible(false);
//                  this.arrow4.setVisible(true);


//         this.spone_1.setVisible(true);
//         this.spone_2.setVisible(false);
//         this.spone_2_drag=false;
//         this.chees_pice2.setInteractive({useHandCursor:true,draggable:true,});
      
//         },this);

// ////////////////////////////////////////////////////

//         this.red_sppon5 = this.add.rectangle(200, 300, 270, 100, 0xff0000,0).setOrigin(0.5);
//         // this.red_sppon5.setInteractive({useHandCursor:true});
//         this.red_sppon5.on('pointerdown',function(){
//         this.red_sppon5.disableInteractive();

//             this.l1meet_bowl.setFrame('l1meet_bowl0');

//         this.spone_1.setVisible(false);
//         this.spone_2.setVisible(true);
//         this.spone_2_drag=true;

//         this.red_sppon6.setInteractive({useHandCursor:true});
           
//                  this.arrow3.setVisible(false);
//                  this.arrow2.setVisible(true);

//         },this);

// ////////////////////////////////////////////////////


//         this.red_sppon6 = this.add.rectangle(700, 340, 350, 150, 0xff0000,0).setOrigin(0.5);
//         // this.red_sppon6.setInteractive({useHandCursor:true});
//         this.red_sppon6.on('pointerdown',function(){
//         this.red_sppon6.disableInteractive();
//             this.box_shap0001.setTexture('box_shap0008');

//         this.spone_1.setVisible(false);
//         this.spone_2.setVisible(false);
//         this.spone_2_drag=false;
//         this.chees_pice1.setInteractive({useHandCursor:true,draggable:true,});
//                  this.arrow2.setVisible(false);
//                  this.arrow4.setVisible(true);
      
//         },this);

// ////////////////////////////////////////////////////

//         this.l1_chees_peac = this.add.sprite(300,480, "l1_chees_peac");
//         this.l1_chees_peac.setVisible(false);
//         // this.l1_chees_peac.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.l1_chees_peac.on('drag', (pointer, dragX, dragY) => {
//             this.l1_chees_peac.x = dragX;
//             this.l1_chees_peac.y = dragY;

//                  this.arrow1.setVisible(false);
//                  this.arrow2.setVisible(true);



//         });
//         this.l1_chees_peac.on('dragend', () => {
//             if ((this.input.x>460 && this.input.x<930 && this.input.y>180 && this.input.y<383)){
//             this.l1_chees_peac.setVisible(false);
//                  this.arrow2.setVisible(false);

//                 this.l1Chees_ani.setVisible(true);
//                  this.l1Chees_ani.play('l1Chees_ani_frame');

//     this.tweens.add({targets:this.Chees_topings,alpha:1,ease: 'Quadratic',duration:1200,onComplete:() => {
//                 this.scrwwer_tra.setVisible(false);
//                 this.l1Chees_ani.setVisible(false);
//                 this.l1_plate.setVisible(false);

//                 this.scene.start('level1_oven')

//     }},this);


//             }
//              else{

//                  this.arrow1.setVisible(true);
//                  this.arrow2.setVisible(false);

//              this.l1_chees_peac.x=300;
//              this.l1_chees_peac.y=480;
//              }
//         },this);


// ////////////////////////////////////////////////////













  
//     // *********************************time event creation***********************************************  // 

//         // this.time.delayedCall(1000,() => {
            
//         // },this);
        
   


//     // *********************************drag & drop creation***********************************************  // 

//         // this.drag_image = this.add.image(450,692,'drag_image').setOrigin(0.5, 0.5);
//         // this.drag_image.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         // this.drag_image.on('drag', (pointer, dragX, dragY) => {
//         //     this.drag_image.x = dragX;
//         //     this.drag_image.y = dragY;
//         // });
//         // this.drag_image.on('dragend', () => {
//         //     if ((this.input.x>370 && this.input.x<480 && this.input.y>120 && this.input.y<220)){
//         //     this.drag_image.visible=false; 
//         //     }
//         //      else{
//         //      this.drag_image.x=430;
//         //      this.drag_image.y=320;
//         //      }
//         // },this);

//     // *********************************click_rectangle creation***********************************************  // 
//         // this.click_rect = this.add.rectangle(250, 250, 70, 150, 0xff0000,0).setOrigin(0.5);
//         // this.click_rect.setInteractive({useHandCursor:true});
//         // this.click_rect.on('pointerdown',function(){
//         // this.click_rect.disableInteractive();
//         // },this);

//     // ********************************************************************************  // 

//         // this.dummy_drag=true;
//         // this.dummy =this.add.sprite(226,403,'chees_pice');



   

//     // ****************************************************************************************************** //
            
//     // ***********************************Arrow *********************************************** //


//              var arrow_Posx = [304,706,214,800];
//              var arrow_Posy = [400,280,200,410];
             
//          for (var i = 1; i <= 50; i++) {
//             this['arrow' + i] = this.add.sprite(arrow_Posx[i - 1], arrow_Posy[i - 1], 'arrow');
//             this['arrow' + i].setOrigin(0.5);
//             this['arrow' + i].anims.create({key: 'arrow',
//                 frames: this.anims.generateFrameNumbers('arrow', { start: 0, end: 9 - 1 }),
//                 frameRate: 15,
//                 repeat: -1
//             });
//             this['arrow' + i].anims.play('arrow');
//             this['arrow' + i].setVisible(false);

//             if (i === 1 ) {
//                 this['arrow' + i].setVisible(false);
               
//             }

                     
            
//         }

//     // ********************************Collide creation************************************************** //

//           // this.mcir = this.add.graphics();
//         // this.mcir.fillStyle(0x666666, 0.1);
//         // this.mcir.fillRect(0, 0, 1280, 720);
//         // this.mcir.setInteractive(new Phaser.Geom.Rectangle(0, 0, 1280, 720), Phaser.Geom.Rectangle.Contains);
//         // this.mcir.on('pointerdown', function (pointer) {
//         //   this.mcnt1++;
//         //   this['xcnt' + this.mcnt1] = pointer.x;
//         //   this['ycnt' + this.mcnt1] = pointer.y;
//         //   const circle = this.add.graphics();
//         //   circle.fillStyle(0x000000, 0.5);
//         //   circle.fillCircle(pointer.x, pointer.y, 20);
//         //   circle.setDepth(1);
//         //   console.log(this['xcnt' + this.mcnt1] + ':' + this['ycnt' + this.mcnt1]);
//         // }, this);

//     // ************************************Ad creation********************************************** //
        
//         // const { lockedItem: lock_r1, adfaildbtn: adfaildbtn_r1, addismisbtn: addismisbtn_r1 } = 
//         // createLockedItem(this, 139, 585, 'panel_acc0001ad',  () => {
//         // this.panel_acc0001.setInteractive({ useHandCursor: true });
//             // });
//         // lock_r1.setScale(0.43); 
//         // this.acc_group.add(lock_r1); 

//     // ********************************************************************************** //

//        this.playbtn=this.add.image(1190,640,'btn2').setOrigin(0.5, 0.5).setScale(0);
//         this.playbtn.setInteractive({ useHandCursor: true });
//         this.playbtn.on('pointerover',function(){this.playbtn.setScale(1.05)},this);
//         this.playbtn.on('pointerout',function(){this.playbtn.setScale(1)},this);
//         this.playbtn.on('pointerdown',this.enterRoom,this);

//         this.morebtn=this.add.image(60,660,'btn4').setOrigin(0.5, 0.5).setScale(0);
//         this.morebtn.setInteractive({ useHandCursor: true });
//         this.morebtn.on('pointerover',function(){this.morebtn.setScale(1.05)},this);
//         this.morebtn.on('pointerout',function(){this.morebtn.setScale(1)},this);
//         this.morebtn.on('pointerup',this.morebtnLink,this);

      

//          this.logo =this.add.image(165,55,'logo').setScale(0.65);
//         this.logo.setInteractive({pixelPerfect:true});
//         this.logo.on('pointerup',this.LogoLink,this);

//           this.musicBtn = this.add.sprite(1212,50,"music-on");
//         this.musicBtn.setInteractive();
//         this.musicBtn.on('pointerup',this.changemusic,this);

//     this.shutter_group = this.add.container();
//     this.shutter_bg =this.add.image(320,360,'shutter_bg');
//     this.shutter_bg2 =this.add.image(960,360,'shutter_bg2');
//     this.shutter_group.add(this.shutter_bg);
//     this.shutter_group.add(this.shutter_bg2);

//     this.tweens.add({targets:this.shutter_group,y:-720,ease: 'Quadratic',duration:1200,onComplete:() => {

//         this.box_pice3.setInteractive({useHandCursor:true,draggable:true,});
//         this.arrow1.setVisible(true);


//     }},this);

//         if (!this.sound.mute) {
//         this.musicBtn.setTexture('music-on');
//         } else {
//         this.musicBtn.setTexture('music-off');
//         }
// }
// update() {
//   // console.log(this.input.x + ':' + this.input.y); 

//   if (this.dummy_drag) {
//         this.dummy.x = this.input.activePointer.x ;
//         this.dummy.y = this.input.activePointer.y;
//         } 

//   if (this.spone_2_drag) {
//         this.spone_2.x = this.input.activePointer.x-40;
//         this.spone_2.y = this.input.activePointer.y;
//         } 

  



//   }
          
// morebtnLink (){
//   YYGGames.navigate("game", "morebutton");
// }
// LogoLink (){
//       YYGGames.navigate("game", "logo");
// }
// enterRoom (){
//     this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     var state = 'level1_box_shape';
//     MyShowAD(this, state);
//     }},this);
//    }
  
// changemusic() {
//      if (!this.sound.mute) {
//     this.musicBtn.setTexture('music-off');
//     this.sound.mute = true;
//   } else {
//     this.musicBtn.setTexture('music-on');
//     this.sound.mute = false;
//   }
//   }   
// }


// ///////////////////////////////////////


// class l1_dekraction_lavel extends Phaser.Scene {

// constructor() {
//  super('l1_dekraction_lavel');
// }
//  create() {
     
//     this.levelGroup = this.add.container();

//     // this.title_bg = this.add.sprite(320,360, "title_bg");
//     // this.title_bg2 = this.add.sprite(960,360, "title_bg2");

//     // this.levelGroup.add(this.title_bg);
//     // this.levelGroup.add(this.title_bg2);

// //////////////////////////////////////////////////

//     this.l3_dekrt_bg1 = this.add.sprite(320,360, "l3_dekrt_bg1");

//     this.l3_dekrt_bg2 = this.add.sprite(960,360, "l3_dekrt_bg2");

// ///////////////////////////////////////////

//     this.l3_dkrt_juice1 = this.add.sprite(1020,280, "l3_dkrt_juice1");

//     this.l1_final_bowl0001 = this.add.sprite(730,350, "l1_final_bowl0001");

//     this.l3_dkrt_spon1 = this.add.sprite(1170,535, "l3_dkrt_spon1").setScale(0.9);



//     this.l2_smock_ani = this.add.sprite(850,330, "l2_smock_ani");

//     this.l2_smock_ani1 = this.add.sprite(580,330, "l2_smock_ani");
    


//         this.l2_smock_aniFrame1 = this.anims.generateFrameNames('l2_smock_ani', {start: 1,end: 7,zeroPad: 1,
//         prefix: 'l2_smock_ani'});
//         this.anims.create({key: 'l2_smock_ani_key',frames: this.l2_smock_aniFrame1,frameRate:10,repeat:-1,}); 



//         this.l2_smock_ani1Frame1 = this.anims.generateFrameNames('l2_smock_ani', {start: 1,end: 7,zeroPad: 1,
//         prefix: 'l2_smock_ani'});
//         this.anims.create({key: 'l2_smock_ani1_key',frames: this.l2_smock_ani1Frame1,frameRate:10,repeat:-1,}); 

        

//     this.l2_smock_ani.play('l2_smock_ani_key');

//     this.l2_smock_ani1.play('l2_smock_ani1_key');

// ///////////////////icon////////////////////////

//     this.dkrt_array=[0,0,0,]

//     this.l3_icon_pnl = this.add.sprite(100,360, "l3_icon_pnl");

//     this.l3_btn_pnl = this.add.sprite(295,360, "l3_btn_pnl");
//     this.l3_btn_pnl.alpha=0;

// ////////01

//     this.l3_icon1 = this.add.sprite(100,200, "l3_icon1");
//     this.l3_icon1.setInteractive({useHandCursor:true});
//     this.l3_icon1.on('pointerdown',function(){
//     this.l3_btn_pnl.alpha=1;

//     this.cup_grp.setVisible(true);
//     this.juie_grp.setVisible(false);
//     this.spon_grp.setVisible(false);

//     },this);

// ////////02

//     this.l3_icon2 = this.add.sprite(100,400, "l3_icon2");
//     this.l3_icon2.setInteractive({useHandCursor:true});
//     this.l3_icon2.on('pointerdown',function(){
//     this.l3_btn_pnl.alpha=1;

//     this.cup_grp.setVisible(false);
//     this.juie_grp.setVisible(true);
//     this.spon_grp.setVisible(false);

//     },this);

// ////////03

//     this.l3_icon3 = this.add.sprite(100,600, "l3_icon3");
//     this.l3_icon3.setInteractive({useHandCursor:true});
//     this.l3_icon3.on('pointerdown',function(){
//     this.l3_btn_pnl.alpha=1;

//     this.cup_grp.setVisible(false);
//     this.juie_grp.setVisible(false);
//     this.spon_grp.setVisible(true);

//     },this);

// ///////////////////cup_grp////////////////////////

//     this.cup_grp = this.add.container();   
//     this.cup_grp.setVisible(false);

//     this.cup_grp1 = this.add.container();  
//     // this.cup_grp1.setVisible(false);  

//     const l3_dkrt_cup_btn_pos1X = [295,295,295,];
//     const l3_dkrt_cup_btn_pos1Y = [240,350,470,];

//     for (let i = 1; i <= 3; i++) {  
              
//     this['l3_dkrt_cup_btn' + i] = this.add.sprite(l3_dkrt_cup_btn_pos1X[i - 1], l3_dkrt_cup_btn_pos1Y[i - 1], 'l3_dkrt_cup_btn' + i);
//     this['l3_dkrt_cup_btn' + i].setOrigin(0.5).setScale(0.9);
//     this['l3_dkrt_cup_btn' + i].id = i;
//     this['l3_dkrt_cup_btn' + i].setInteractive({ useHandCursor: true});
//     // this[' l3_dkrt_cup_btn' + i].on('pointerover', function () { this.setScale(1.05) }, this[' l3_dkrt_cup_btn' + i]);
//     // this[' l3_dkrt_cup_btn' + i].on('pointerout', function () { this.setScale(1) }, this[' l3_dkrt_cup_btn' + i]);
//     this['l3_dkrt_cup_btn' + i].on('pointerdown', cup_grp_function.bind(this, this['l3_dkrt_cup_btn' + i]), this);
//     this.cup_grp1.add(this['l3_dkrt_cup_btn' + i]);

//     }
            
//     this.cup_grp.add(this.cup_grp1); 

// ////////////

//     this.cup_grp2 = this.add.container();   
//     this.cup_grp2.setVisible(false);  

//     const l3_dkrt_cup_btn_pos2X = [295,295,295,];
//     const l3_dkrt_cup_btn_pos2Y = [240,350,470,]


//     for (let i = 4; i <= 6; i++) {  
             
//     this['l3_dkrt_cup_btn' + i] = this.add.sprite(l3_dkrt_cup_btn_pos2X[i - 4], l3_dkrt_cup_btn_pos2Y[i - 4], 'l3_dkrt_cup_btn' + i);
//     this['l3_dkrt_cup_btn' + i].setOrigin(0.5).setScale(0.9);
//     this['l3_dkrt_cup_btn' + i].id = i;
//     this['l3_dkrt_cup_btn' + i].setInteractive({ useHandCursor: true});
//     // this[' l3_dkrt_cup_btn' + i].on('pointerover', function () { this.setScale(1.05) }, this[' l3_dkrt_cup_btn' + i]);
//     // this[' l3_dkrt_cup_btn' + i].on('pointerout', function () { this.setScale(1) }, this[' l3_dkrt_cup_btn' + i]);
//     this['l3_dkrt_cup_btn' + i].on('pointerdown', cup_grp_function.bind(this, this['l3_dkrt_cup_btn' + i]), this);
//     this.cup_grp2.add(this['l3_dkrt_cup_btn' + i]);

//     }
              
//     this.cup_grp.add(this.cup_grp2); 

// ////////////

//     this.cup_grp3 = this.add.container();   
//     this.cup_grp3.setVisible(false);  

//     const l3_dkrt_cup_btn_pos3X = [295,295,];
//     const l3_dkrt_cup_btn_pos3Y = [240,350,]


//     for (let i = 7; i <= 7; i++) {  
             
//     this['l3_dkrt_cup_btn' + i] = this.add.sprite(l3_dkrt_cup_btn_pos3X[i - 7], l3_dkrt_cup_btn_pos3Y[i - 7], 'l3_dkrt_cup_btn' + i);
//     this['l3_dkrt_cup_btn' + i].setOrigin(0.5).setScale(0.9);
//     this['l3_dkrt_cup_btn' + i].id = i;
//     this['l3_dkrt_cup_btn' + i].setInteractive({ useHandCursor: true});
//     // this[' l3_dkrt_cup_btn' + i].on('pointerover', function () { this.setScale(1.05) }, this[' l3_dkrt_cup_btn' + i]);
//     // this[' l3_dkrt_cup_btn' + i].on('pointerout', function () { this.setScale(1) }, this[' l3_dkrt_cup_btn' + i]);
//     this['l3_dkrt_cup_btn' + i].on('pointerdown', cup_grp_function.bind(this, this['l3_dkrt_cup_btn' + i]), this);
//     this.cup_grp3.add(this['l3_dkrt_cup_btn' + i]);

//     }
              
//     this.cup_grp.add(this.cup_grp3); 

// /////////////////

// function cup_grp_function(pointer) {

//     this.l1_final_bowl0001.setTexture('l1_final_bowl000'+pointer.id);
//     Main.l1dekrat_array[0]=pointer.id; 
  
//     this.dkrt_array[0]=1;

//     if (this.dkrt_array.indexOf(0)<(0)) {
//         this.tweens.add({targets:this.playbtn,scaleX: 1,scaleY:1,ease: 'Bounce',duration:800,});
//         this.tweens.add({targets:this.morebtn,scaleX: 1,scaleY:1,ease: 'Bounce',duration:800,}); 
//     }

//     }

// /////////////////

//     this.l3_dkrt_nxt1 = this.add.image(295,620,'l3_dkrt_nxt').setOrigin(0.5, 0.5);
//     this.l3_dkrt_nxt1.setInteractive({ useHandCursor: true });
//     this.l3_dkrt_nxt1.id = 1;
//     this.l3_dkrt_nxt1.on('pointerdown', cup_grp_next_function.bind(this, this.l3_dkrt_nxt1), this);
//     this.cup_grp.add(this.l3_dkrt_nxt1);

//     this.l3_dkrt_prt1 = this.add.image(295,115,'l3_dkrt_prt').setOrigin(0.5, 0.5);
//     this.l3_dkrt_prt1.setVisible(false);
//     this.l3_dkrt_prt1.setInteractive({ useHandCursor: true });
//     this.l3_dkrt_prt1.id = 2;
//     this.l3_dkrt_prt1.on('pointerdown', cup_grp_next_function.bind(this, this.l3_dkrt_prt1), this);           
//     this.cup_grp.add(this.l3_dkrt_prt1);

// /////////////////

// function cup_grp_next_function(pointer) {  
//     if (pointer.id == 1) {
//             Main.l1drs_next_array1[0]++;
//             this['cup_grp' + Main.l1drs_next_array1[0]].setVisible(false);
//             this['cup_grp' + (Main.l1drs_next_array1[0] + 1)].setVisible(true);
//         } 

//     if (pointer.id == 2) {
//             Main.l1drs_next_array1[0]--;
//             this['cup_grp' + (Main.l1drs_next_array1[0] + 2)].setVisible(false);
//             this['cup_grp' + (Main.l1drs_next_array1[0] + 1)].setVisible(true);
//         }

//     if (Main.l1drs_next_array1[0] == 1) { 
//             this.l3_dkrt_nxt1.setVisible(true);
//             this.l3_dkrt_prt1.setVisible(true);
//         }
         
//     if (Main.l1drs_next_array1[0]==1) {
//             this.l3_dkrt_prt1.setVisible(true);
//             this.l3_dkrt_nxt1.setVisible(false);

//             }  

//     if (Main.l1drs_next_array1[0]==0) {
//             this.l3_dkrt_prt1.setVisible(false);
//             this.l3_dkrt_nxt1.setVisible(true);

//             } 

//         }

// ///////////////////juie_grp////////////////////////

//     this.juie_grp = this.add.container();   
//     this.juie_grp.setVisible(false);

//     this.juie_grp1 = this.add.container();  
//     // this.juie_grp1.setVisible(false);  

//     const l3_dkrt_juice_btn_pos1X = [295,295,295,];
//     const l3_dkrt_juice_btn_pos1Y = [240,350,470,];

//     for (let i = 1; i <= 3; i++) {  
              
//     this['l3_dkrt_juice_btn' + i] = this.add.sprite(l3_dkrt_juice_btn_pos1X[i - 1], l3_dkrt_juice_btn_pos1Y[i - 1], 'l3_dkrt_juice_btn' + i);
//     this['l3_dkrt_juice_btn' + i].setOrigin(0.5).setScale(0.9);
//     this['l3_dkrt_juice_btn' + i].id = i;
//     this['l3_dkrt_juice_btn' + i].setInteractive({ useHandCursor: true});
//     // this[' l3_dkrt_juice_btn' + i].on('pointerover', function () { this.setScale(1.05) }, this[' l3_dkrt_juice_btn' + i]);
//     // this[' l3_dkrt_juice_btn' + i].on('pointerout', function () { this.setScale(1) }, this[' l3_dkrt_juice_btn' + i]);
//     this['l3_dkrt_juice_btn' + i].on('pointerdown', juie_grp_function.bind(this, this['l3_dkrt_juice_btn' + i]), this);
//     this.juie_grp1.add(this['l3_dkrt_juice_btn' + i]);

//     }
            
//     this.juie_grp.add(this.juie_grp1); 

// ////////////

//     this.juie_grp2 = this.add.container();   
//     this.juie_grp2.setVisible(false);  

//     const l3_dkrt_juice_btn_pos2X = [295,295,295,];
//     const l3_dkrt_juice_btn_pos2Y = [240,350,470,]


//     for (let i = 4; i <= 6; i++) {  
             
//     this['l3_dkrt_juice_btn' + i] = this.add.sprite(l3_dkrt_juice_btn_pos2X[i - 4], l3_dkrt_juice_btn_pos2Y[i - 4], 'l3_dkrt_juice_btn' + i);
//     this['l3_dkrt_juice_btn' + i].setOrigin(0.5).setScale(0.9);
//     this['l3_dkrt_juice_btn' + i].id = i;
//     this['l3_dkrt_juice_btn' + i].setInteractive({ useHandCursor: true});
//     // this[' l3_dkrt_juice_btn' + i].on('pointerover', function () { this.setScale(1.05) }, this[' l3_dkrt_juice_btn' + i]);
//     // this[' l3_dkrt_juice_btn' + i].on('pointerout', function () { this.setScale(1) }, this[' l3_dkrt_juice_btn' + i]);
//     this['l3_dkrt_juice_btn' + i].on('pointerdown', juie_grp_function.bind(this, this['l3_dkrt_juice_btn' + i]), this);
//     this.juie_grp2.add(this['l3_dkrt_juice_btn' + i]);

//     }
              
//     this.juie_grp.add(this.juie_grp2); 

// /////////////////

// function juie_grp_function(pointer) {

//     this.l3_dkrt_juice1.setTexture('l3_dkrt_juice'+pointer.id);
//     Main.l1dekrat_array[1]=pointer.id; 
  
// this.dkrt_array[1]=1;

// if (this.dkrt_array.indexOf(0)<(0)) {
//         this.tweens.add({targets:this.playbtn,scaleX: 1,scaleY:1,ease: 'Bounce',duration:800,});
//         this.tweens.add({targets:this.morebtn,scaleX: 1,scaleY:1,ease: 'Bounce',duration:800,}); 
//     }

//     }

// /////////////////

//     this.l3_dkrt_nxt2 = this.add.image(295,620,'l3_dkrt_nxt').setOrigin(0.5, 0.5);
//     this.l3_dkrt_nxt2.setInteractive({ useHandCursor: true });
//     this.l3_dkrt_nxt2.id = 1;
//     this.l3_dkrt_nxt2.on('pointerdown', juie_grp_next_function.bind(this, this.l3_dkrt_nxt2), this);
//     this.juie_grp.add(this.l3_dkrt_nxt2);

//     this.l3_dkrt_prt2 = this.add.image(295,115,'l3_dkrt_prt').setOrigin(0.5, 0.5);
//     this.l3_dkrt_prt2.setVisible(false);
//     this.l3_dkrt_prt2.setInteractive({ useHandCursor: true });
//     this.l3_dkrt_prt2.id = 2;
//     this.l3_dkrt_prt2.on('pointerdown', juie_grp_next_function.bind(this, this.l3_dkrt_prt2), this);           
//     this.juie_grp.add(this.l3_dkrt_prt2);

// /////////////////

// function juie_grp_next_function(pointer) {  
//     if (pointer.id == 1) {
//             Main.l1drs_next_array2[0]++;
//             this['juie_grp' + Main.l1drs_next_array2[0]].setVisible(false);
//             this['juie_grp' + (Main.l1drs_next_array2[0] + 1)].setVisible(true);
//         } 

//     if (pointer.id == 2) {
//             Main.l1drs_next_array2[0]--;
//             this['juie_grp' + (Main.l1drs_next_array2[0] + 2)].setVisible(false);
//             this['juie_grp' + (Main.l1drs_next_array2[0] + 1)].setVisible(true);
//         }

//     if (Main.l1drs_next_array2[0] == 1) { 
//             this.l3_dkrt_nxt2.setVisible(false);
//             this.l3_dkrt_prt2.setVisible(true);
//         }
         

//     if (Main.l1drs_next_array2[0]==0) {
//             this.l3_dkrt_prt2.setVisible(false);
//             this.l3_dkrt_nxt2.setVisible(true);

//             } 

//         }

// ///////////////////spon_grp////////////////////////

//     this.spon_grp = this.add.container();   
//     this.spon_grp.setVisible(false);

//     this.spon_grp1 = this.add.container();  
//     // this.spon_grp1.setVisible(false);  

//     const l3_dkrt_spon_btn_pos1X = [295,295,295,];
//     const l3_dkrt_spon_btn_pos1Y = [240,350,470,];

//     for (let i = 1; i <= 3; i++) {  
              
//     this['l3_dkrt_spon_btn' + i] = this.add.sprite(l3_dkrt_spon_btn_pos1X[i - 1], l3_dkrt_spon_btn_pos1Y[i - 1], 'l3_dkrt_spon_btn' + i);
//     this['l3_dkrt_spon_btn' + i].setOrigin(0.5).setScale(0.9);
//     this['l3_dkrt_spon_btn' + i].id = i;
//     this['l3_dkrt_spon_btn' + i].setInteractive({ useHandCursor: true});
//     // this[' l3_dkrt_spon_btn' + i].on('pointerover', function () { this.setScale(1.05) }, this[' l3_dkrt_spon_btn' + i]);
//     // this[' l3_dkrt_spon_btn' + i].on('pointerout', function () { this.setScale(1) }, this[' l3_dkrt_spon_btn' + i]);
//     this['l3_dkrt_spon_btn' + i].on('pointerdown', spon_grp_function.bind(this, this['l3_dkrt_spon_btn' + i]), this);
//     this.spon_grp1.add(this['l3_dkrt_spon_btn' + i]);

//     }
            
//     this.spon_grp.add(this.spon_grp1); 

// ////////////

//     this.spon_grp2 = this.add.container();   
//     this.spon_grp2.setVisible(false);  

//     const l3_dkrt_spon_btn_pos2X = [295,295,295,];
//     const l3_dkrt_spon_btn_pos2Y = [240,350,470,]


//     for (let i = 4; i <= 6; i++) {  
             
//     this['l3_dkrt_spon_btn' + i] = this.add.sprite(l3_dkrt_spon_btn_pos2X[i - 4], l3_dkrt_spon_btn_pos2Y[i - 4], 'l3_dkrt_spon_btn' + i);
//     this['l3_dkrt_spon_btn' + i].setOrigin(0.5).setScale(0.9);
//     this['l3_dkrt_spon_btn' + i].id = i;
//     this['l3_dkrt_spon_btn' + i].setInteractive({ useHandCursor: true});
//     // this[' l3_dkrt_spon_btn' + i].on('pointerover', function () { this.setScale(1.05) }, this[' l3_dkrt_spon_btn' + i]);
//     // this[' l3_dkrt_spon_btn' + i].on('pointerout', function () { this.setScale(1) }, this[' l3_dkrt_spon_btn' + i]);
//     this['l3_dkrt_spon_btn' + i].on('pointerdown', spon_grp_function.bind(this, this['l3_dkrt_spon_btn' + i]), this);
//     this.spon_grp2.add(this['l3_dkrt_spon_btn' + i]);

//     }
              
//     this.spon_grp.add(this.spon_grp2); 

// /////////////////

// function spon_grp_function(pointer) {

//     this.l3_dkrt_spon1.setTexture('l3_dkrt_spon'+pointer.id);
//     Main.l1dekrat_array[2]=pointer.id; 
  
// this.dkrt_array[2]=1;

// if (this.dkrt_array.indexOf(0)<(0)) {
//         this.tweens.add({targets:this.playbtn,scaleX: 1,scaleY:1,ease: 'Bounce',duration:800,});
//         this.tweens.add({targets:this.morebtn,scaleX: 1,scaleY:1,ease: 'Bounce',duration:800,}); 
// }

//     }

// /////////////////

//     this.l3_dkrt_nxt3 = this.add.image(295,620,'l3_dkrt_nxt').setOrigin(0.5, 0.5);
//     this.l3_dkrt_nxt3.setInteractive({ useHandCursor: true });
//     this.l3_dkrt_nxt3.id = 1;
//     this.l3_dkrt_nxt3.on('pointerdown', spon_grp_next_function.bind(this, this.l3_dkrt_nxt3), this);
//     this.spon_grp.add(this.l3_dkrt_nxt3);

//     this.l3_dkrt_prt3 = this.add.image(295,115,'l3_dkrt_prt').setOrigin(0.5, 0.5);
//     this.l3_dkrt_prt3.setVisible(false);
//     this.l3_dkrt_prt3.setInteractive({ useHandCursor: true });
//     this.l3_dkrt_prt3.id = 2;
//     this.l3_dkrt_prt3.on('pointerdown', spon_grp_next_function.bind(this, this.l3_dkrt_prt3), this);           
//     this.spon_grp.add(this.l3_dkrt_prt3);

// /////////////////

// function spon_grp_next_function(pointer) {  
//     if (pointer.id == 1) {
//             Main.l1drs_next_array3[0]++;
//             this['spon_grp' + Main.l1drs_next_array3[0]].setVisible(false);
//             this['spon_grp' + (Main.l1drs_next_array3[0] + 1)].setVisible(true);
//         } 

//     if (pointer.id == 2) {
//             Main.l1drs_next_array3[0]--;
//             this['spon_grp' + (Main.l1drs_next_array3[0] + 2)].setVisible(false);
//             this['spon_grp' + (Main.l1drs_next_array3[0] + 1)].setVisible(true);
//         }

//     if (Main.l1drs_next_array3[0] == 1) { 
//             this.l3_dkrt_nxt3.setVisible(false);
//             this.l3_dkrt_prt3.setVisible(true);
//         }
         

//     if (Main.l1drs_next_array3[0]==0) {
//             this.l3_dkrt_prt3.setVisible(false);
//             this.l3_dkrt_nxt3.setVisible(true);

//             } 

//         }

// //////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////

//         this.playbtn=this.add.image(1190,660,'btn2').setOrigin(0.5, 0.5).setScale(0);
//         this.playbtn.setInteractive({ useHandCursor: true });
//         this.playbtn.on('pointerover',function(){this.playbtn.setScale(1.05)},this);
//         this.playbtn.on('pointerout',function(){this.playbtn.setScale(1)},this);
//         this.playbtn.on('pointerdown',this.enterRoom,this);

//         this.morebtn=this.add.image(1030,660,'btn4').setOrigin(0.5, 0.5).setScale(0);
//         this.morebtn.setInteractive({ useHandCursor: true });
//         this.morebtn.on('pointerover',function(){this.morebtn.setScale(1.05)},this);
//         this.morebtn.on('pointerout',function(){this.morebtn.setScale(1)},this);
//         this.morebtn.on('pointerup',this.morebtnLink,this);

//          this.logo =this.add.image(165,55,'logo').setScale(0.65);
//         this.logo.setInteractive({pixelPerfect:true});
//         this.logo.on('pointerup',this.LogoLink,this);

//           this.musicBtn = this.add.sprite(1212,50,"music-on");
//         this.musicBtn.setInteractive();
//         this.musicBtn.on('pointerup',this.changemusic,this);

//     this.shutter_group = this.add.container();
//     this.shutter_bg =this.add.image(320,360,'shutter_bg');
//     this.shutter_bg2 =this.add.image(960,360,'shutter_bg2');
//     this.shutter_group.add(this.shutter_bg);
//     this.shutter_group.add(this.shutter_bg2);

//     this.tweens.add({targets:this.shutter_group,y:-720,ease: 'Quadratic',duration:1200,onComplete:() => {

//     }},this);

//         if (!this.sound.mute) {
//         this.musicBtn.setTexture('music-on');
//         } else {
//         this.musicBtn.setTexture('music-off');
//         }
// }
// update() {
//   // console.log(this.input.x + ':' + this.input.y); 

//   if (this.dummy_drag) {
//         this.dummy.x = this.input.activePointer.x ;
//         this.dummy.y = this.input.activePointer.y;
//         } 

//   }
          
// morebtnLink (){
//   YYGGames.navigate("game", "morebutton");
// }
// LogoLink (){
//       YYGGames.navigate("game", "logo");
// }
// enterRoom (){
//     this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     var state = 'finalscreen_l1';
//     MyShowAD(this, state);
//     }},this);
//    }
  
// changemusic() {
//      if (!this.sound.mute) {
//     this.musicBtn.setTexture('music-off');
//     this.sound.mute = true;
//   } else {
//     this.musicBtn.setTexture('music-on');
//     this.sound.mute = false;
//   }
//   }   
// }

// ///////////////////////////////////////////////////////




// class level1_oven extends Phaser.Scene {

// constructor() {
//  super('level1_oven');
// }
//  create() {
     
//        this.levelGroup = this.add.container();

//     this.l2_bg = this.add.sprite(320,360, "l2_bg");
//     this.l2_bg1 = this.add.sprite(960,360, "l2_bg1");

//     this.levelGroup.add(this.l2_bg);
//     this.levelGroup.add(this.l2_bg1);

// ///////////////////////////////////////////////////////////////////////////////


//     this.l1_machin0002 = this.add.sprite(900,400, "l1_machin0002");
//     this.l1_machin0002.setVisible(false);

//     this.l2_Ovan0002 = this.add.sprite(900,415, "l2_Ovan0002");


//         this.l1final_shape0001 = this.add.sprite(300,300, "l1final_shape0001");
//         // this.l1final_shape0001.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.l1final_shape0001.on('drag', (pointer, dragX, dragY) => {
//             this.l1final_shape0001.x = dragX;
//             this.l1final_shape0001.y = dragY;

//             this.arrow1.setVisible(false);
//             this.arrow2.setVisible(true);



//         });
//         this.l1final_shape0001.on('dragend', () => {
//             if ((this.input.x>570 && this.input.x<1140 && this.input.y>170 && this.input.y<520)){
//             this.l1final_shape0001.visible=false; 
//             this.l2_Ovan0002.setVisible(false);
//             this.l1_machin0002.setVisible(true);

//         this.click_rect.setInteractive({useHandCursor:true});
//                  this.arrow2.setVisible(false);
//                  this.arrow3.setVisible(true);

//             }
//              else{

//                  this.arrow1.setVisible(true);
//                  this.arrow2.setVisible(false);

//              this.l1final_shape0001.x=300;
//              this.l1final_shape0001.y=300;
//              }
//         },this);













// ///////////////////////////////////////////


//         this.click_rect = this.add.rectangle(850, 600, 400, 200, 0xff0000,0).setOrigin(0.5);
//         // this.click_rect.setInteractive({useHandCursor:true});
//         this.click_rect.on('pointerdown',function(){
//         this.click_rect.disableInteractive();

//                 this.arrow3.setVisible(false);
//                 this.arrow4.setVisible(true);

//             this.l1_machin0002.setTexture('l1_machin0005');
//             this.click_rect1.setInteractive({useHandCursor:true});

//         },this);



// ///////////////////////////////////////////

//         this.click_rect1 = this.add.rectangle(1170, 270, 100, 100, 0xff0000,0).setOrigin(0.5);
//         // this.click_rect1.setInteractive({useHandCursor:true});
//         this.click_rect1.on('pointerdown',function(){
//         this.click_rect1.disableInteractive();
//                  this.arrow4.setVisible(false);
//             this.l1_machin0002.setTexture('l1_machin0008');

//         this.time_liner1.setVisible(true);
//         this.time_liner1.play('time_liner1_key');
//         this.time.delayedCall(300,() => {

//         },this);
//         },this);


// ///////////////////////////////////////////


//         this.time_liner1 = this.add.sprite(270,400, "time_liner");
//         this.time_liner1.setVisible(false);



//         this.time_liner1Frame1 = this.anims.generateFrameNames('time_liner', {start: 0,end: 14,zeroPad: 1,
//         prefix: 'time_liner'});
//         this.anims.create({key: 'time_liner1_key',frames: this.time_liner1Frame1,frameRate:3,}); 
//         this.time_liner1.on("animationcomplete",function() {
//         this.time_liner1.setVisible(false);

//             this.l1_machin0002.setTexture('l1_machin0009');
//         this.time.delayedCall(500,() => {


//             this.scene.start('l1_dekraction_lavel')

//         },this);


//        },this);
    


// ///////////////////////////////////////////


  

//     // ****************************************************************************************************** //
            
//     // ***********************************Arrow *********************************************** //


//              var arrow_Posx = [305,860,850,1180];
//              var arrow_Posy = [350,400,580,220];
             
//          for (var i = 1; i <= 50; i++) {
//             this['arrow' + i] = this.add.sprite(arrow_Posx[i - 1], arrow_Posy[i - 1], 'arrow');
//             this['arrow' + i].setOrigin(0.5);
//             this['arrow' + i].anims.create({key: 'arrow',
//                 frames: this.anims.generateFrameNumbers('arrow', { start: 0, end: 9 - 1 }),
//                 frameRate: 15,
//                 repeat: -1
//             });
//             this['arrow' + i].anims.play('arrow');
//             this['arrow' + i].setVisible(false);

//             if (i === 1 ) {
//                 this['arrow' + i].setVisible(false);
                
//             }
                      
            
//         }

//     // ********************************Collide creation************************************************** //

//           // this.mcir = this.add.graphics();
//         // this.mcir.fillStyle(0x666666, 0.1);
//         // this.mcir.fillRect(0, 0, 1280, 720);
//         // this.mcir.setInteractive(new Phaser.Geom.Rectangle(0, 0, 1280, 720), Phaser.Geom.Rectangle.Contains);
//         // this.mcir.on('pointerdown', function (pointer) {
//         //   this.mcnt1++;
//         //   this['xcnt' + this.mcnt1] = pointer.x;
//         //   this['ycnt' + this.mcnt1] = pointer.y;
//         //   const circle = this.add.graphics();
//         //   circle.fillStyle(0x000000, 0.5);
//         //   circle.fillCircle(pointer.x, pointer.y, 20);
//         //   circle.setDepth(1);
//         //   console.log(this['xcnt' + this.mcnt1] + ':' + this['ycnt' + this.mcnt1]);
//         // }, this);

//     // ************************************Ad creation********************************************** //
        
//         // const { lockedItem: lock_r1, adfaildbtn: adfaildbtn_r1, addismisbtn: addismisbtn_r1 } = 
//         // createLockedItem(this, 139, 585, 'panel_acc0001ad',  () => {
//         // this.panel_acc0001.setInteractive({ useHandCursor: true });
//             // });
//         // lock_r1.setScale(0.43); 
//         // this.acc_group.add(lock_r1); 

//     // ********************************************************************************** //

//        this.playbtn=this.add.image(1190,640,'btn2').setOrigin(0.5, 0.5).setScale(0);
//         this.playbtn.setInteractive({ useHandCursor: true });
//         this.playbtn.on('pointerover',function(){this.playbtn.setScale(1.05)},this);
//         this.playbtn.on('pointerout',function(){this.playbtn.setScale(1)},this);
//         this.playbtn.on('pointerdown',this.enterRoom,this);

//         this.morebtn=this.add.image(60,660,'btn4').setOrigin(0.5, 0.5).setScale(0);
//         this.morebtn.setInteractive({ useHandCursor: true });
//         this.morebtn.on('pointerover',function(){this.morebtn.setScale(1.05)},this);
//         this.morebtn.on('pointerout',function(){this.morebtn.setScale(1)},this);
//         this.morebtn.on('pointerup',this.morebtnLink,this);

      

//          this.logo =this.add.image(165,55,'logo').setScale(0.65);
//         this.logo.setInteractive({pixelPerfect:true});
//         this.logo.on('pointerup',this.LogoLink,this);

//           this.musicBtn = this.add.sprite(1212,50,"music-on");
//         this.musicBtn.setInteractive();
//         this.musicBtn.on('pointerup',this.changemusic,this);

//     this.shutter_group = this.add.container();
//     this.shutter_bg =this.add.image(320,360,'shutter_bg');
//     this.shutter_bg2 =this.add.image(960,360,'shutter_bg2');
//     this.shutter_group.add(this.shutter_bg);
//     this.shutter_group.add(this.shutter_bg2);

//     this.tweens.add({targets:this.shutter_group,y:-720,ease: 'Quadratic',duration:1200,onComplete:() => {
//         this.l1final_shape0001.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.arrow1.setVisible(true);

//     }},this);

//         if (!this.sound.mute) {
//         this.musicBtn.setTexture('music-on');
//         } else {
//         this.musicBtn.setTexture('music-off');
//         }
// }
// update() {
//   // console.log(this.input.x + ':' + this.input.y); 

//   if (this.dummy_drag) {
//         this.dummy.x = this.input.activePointer.x ;
//         this.dummy.y = this.input.activePointer.y;
//         } 

  



//   }
          
// morebtnLink (){
//   YYGGames.navigate("game", "morebutton");
// }
// LogoLink (){
//       YYGGames.navigate("game", "logo");
// }
// enterRoom (){
//     this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     var state = 'finalscreen';
//     MyShowAD(this, state);
//     }},this);
//    }
  
// changemusic() {
//      if (!this.sound.mute) {
//     this.musicBtn.setTexture('music-off');
//     this.sound.mute = true;
//   } else {
//     this.musicBtn.setTexture('music-on');
//     this.sound.mute = false;
//   }
//   }   
// }


// ////////////////////////////////////////////



// class level1_crack_oven extends Phaser.Scene {

// constructor() {
//  super('level1_crack_oven');
// }
//  create() {
     
//        this.levelGroup = this.add.container();

//     this.l2_bg = this.add.sprite(320,360, "l2_bg");
//     this.l2_bg1 = this.add.sprite(960,360, "l2_bg1");

//     this.levelGroup.add(this.l2_bg);
//     this.levelGroup.add(this.l2_bg1);

// ///////////////////////////////////////////////////////////////////////////////


//     this.l1_machin0002 = this.add.sprite(900,400, "l1_machin0003");
//     this.l1_machin0002.setVisible(false);

//     this.l2_Ovan0002 = this.add.sprite(900,415, "l2_Ovan0002");


//         this.l1final_shape0001 = this.add.sprite(300,350, "l1final_shape0002");
//         // this.l1final_shape0001.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.l1final_shape0001.on('drag', (pointer, dragX, dragY) => {
//             this.l1final_shape0001.x = dragX;
//             this.l1final_shape0001.y = dragY;

//             this.arrow1.setVisible(false);
//             this.arrow2.setVisible(true);



//         });
//         this.l1final_shape0001.on('dragend', () => {
//             if ((this.input.x>570 && this.input.x<1140 && this.input.y>170 && this.input.y<520)){
//             this.l1final_shape0001.visible=false; 
//             this.l2_Ovan0002.setVisible(false);
//             this.l1_machin0002.setVisible(true);

//         this.click_rect.setInteractive({useHandCursor:true});
//                  this.arrow2.setVisible(false);
//                  this.arrow3.setVisible(true);

//             }
//              else{

//                  this.arrow1.setVisible(true);
//                  this.arrow2.setVisible(false);

//              this.l1final_shape0001.x=300;
//              this.l1final_shape0001.y=350;
//              }
//         },this);













// ///////////////////////////////////////////


//         this.click_rect = this.add.rectangle(850, 600, 400, 200, 0xff0000,0).setOrigin(0.5);
//         // this.click_rect.setInteractive({useHandCursor:true});
//         this.click_rect.on('pointerdown',function(){
//         this.click_rect.disableInteractive();

//                 this.arrow3.setVisible(false);
//                 this.arrow4.setVisible(true);

//             this.l1_machin0002.setTexture('l1_machin0006');
//             this.click_rect1.setInteractive({useHandCursor:true});

//         },this);



// ///////////////////////////////////////////

//         this.click_rect1 = this.add.rectangle(1170, 270, 100, 100, 0xff0000,0).setOrigin(0.5);
//         // this.click_rect1.setInteractive({useHandCursor:true});
//         this.click_rect1.on('pointerdown',function(){
//         this.click_rect1.disableInteractive();
//                  this.arrow4.setVisible(false);
//             this.l1_machin0002.setTexture('l1_machin0008');

//         this.time_liner1.setVisible(true);
//         this.time_liner1.play('time_liner1_key');
//         this.time.delayedCall(300,() => {

//         },this);
//         },this);


// ///////////////////////////////////////////


//         this.time_liner1 = this.add.sprite(270,400, "time_liner");
//         this.time_liner1.setVisible(false);



//         this.time_liner1Frame1 = this.anims.generateFrameNames('time_liner', {start: 0,end: 14,zeroPad: 1,
//         prefix: 'time_liner'});
//         this.anims.create({key: 'time_liner1_key',frames: this.time_liner1Frame1,frameRate:3,}); 
//         this.time_liner1.on("animationcomplete",function() {
//         this.time_liner1.setVisible(false);

//             this.l1_machin0002.setTexture('l1_machin0009');
//         this.time.delayedCall(500,() => {


//             this.scene.start('l1_dekraction_lavel')

//         },this);


//        },this);
    


// ///////////////////////////////////////////


  

//     // ****************************************************************************************************** //
            
//     // ***********************************Arrow *********************************************** //


//              var arrow_Posx = [305,860,850,1180];
//              var arrow_Posy = [350,400,580,220];
             
//          for (var i = 1; i <= 50; i++) {
//             this['arrow' + i] = this.add.sprite(arrow_Posx[i - 1], arrow_Posy[i - 1], 'arrow');
//             this['arrow' + i].setOrigin(0.5);
//             this['arrow' + i].anims.create({key: 'arrow',
//                 frames: this.anims.generateFrameNumbers('arrow', { start: 0, end: 9 - 1 }),
//                 frameRate: 15,
//                 repeat: -1
//             });
//             this['arrow' + i].anims.play('arrow');
//             this['arrow' + i].setVisible(false);

//             if (i === 1 ) {
//                 this['arrow' + i].setVisible(false);
                
//             }
                      
            
//         }

//     // ********************************Collide creation************************************************** //

//           // this.mcir = this.add.graphics();
//         // this.mcir.fillStyle(0x666666, 0.1);
//         // this.mcir.fillRect(0, 0, 1280, 720);
//         // this.mcir.setInteractive(new Phaser.Geom.Rectangle(0, 0, 1280, 720), Phaser.Geom.Rectangle.Contains);
//         // this.mcir.on('pointerdown', function (pointer) {
//         //   this.mcnt1++;
//         //   this['xcnt' + this.mcnt1] = pointer.x;
//         //   this['ycnt' + this.mcnt1] = pointer.y;
//         //   const circle = this.add.graphics();
//         //   circle.fillStyle(0x000000, 0.5);
//         //   circle.fillCircle(pointer.x, pointer.y, 20);
//         //   circle.setDepth(1);
//         //   console.log(this['xcnt' + this.mcnt1] + ':' + this['ycnt' + this.mcnt1]);
//         // }, this);

//     // ************************************Ad creation********************************************** //
        
//         // const { lockedItem: lock_r1, adfaildbtn: adfaildbtn_r1, addismisbtn: addismisbtn_r1 } = 
//         // createLockedItem(this, 139, 585, 'panel_acc0001ad',  () => {
//         // this.panel_acc0001.setInteractive({ useHandCursor: true });
//             // });
//         // lock_r1.setScale(0.43); 
//         // this.acc_group.add(lock_r1); 

//     // ********************************************************************************** //

//        this.playbtn=this.add.image(1190,640,'btn2').setOrigin(0.5, 0.5).setScale(0);
//         this.playbtn.setInteractive({ useHandCursor: true });
//         this.playbtn.on('pointerover',function(){this.playbtn.setScale(1.05)},this);
//         this.playbtn.on('pointerout',function(){this.playbtn.setScale(1)},this);
//         this.playbtn.on('pointerdown',this.enterRoom,this);

//         this.morebtn=this.add.image(60,660,'btn4').setOrigin(0.5, 0.5).setScale(0);
//         this.morebtn.setInteractive({ useHandCursor: true });
//         this.morebtn.on('pointerover',function(){this.morebtn.setScale(1.05)},this);
//         this.morebtn.on('pointerout',function(){this.morebtn.setScale(1)},this);
//         this.morebtn.on('pointerup',this.morebtnLink,this);

      

//         this.logo =this.add.image(165,55,'logo').setScale(0.65);
//         this.logo.setInteractive({pixelPerfect:true});
//         this.logo.on('pointerup',this.LogoLink,this);

//          this.musicBtn = this.add.sprite(1212,50,"music-on");
//         this.musicBtn.setInteractive();
//         this.musicBtn.on('pointerup',this.changemusic,this);

//     this.shutter_group = this.add.container();
//     this.shutter_bg =this.add.image(320,360,'shutter_bg');
//     this.shutter_bg2 =this.add.image(960,360,'shutter_bg2');
//     this.shutter_group.add(this.shutter_bg);
//     this.shutter_group.add(this.shutter_bg2);

//     this.tweens.add({targets:this.shutter_group,y:-720,ease: 'Quadratic',duration:1200,onComplete:() => {
//         this.l1final_shape0001.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.arrow1.setVisible(true);

//     }},this);

//         if (!this.sound.mute) {
//         this.musicBtn.setTexture('music-on');
//         } else {
//         this.musicBtn.setTexture('music-off');
//         }
// }
// update() {
//   // console.log(this.input.x + ':' + this.input.y); 

//   if (this.dummy_drag) {
//         this.dummy.x = this.input.activePointer.x ;
//         this.dummy.y = this.input.activePointer.y;
//         } 

  



//   }
          
// morebtnLink (){
//   YYGGames.navigate("game", "morebutton");
// }
// LogoLink (){
//       YYGGames.navigate("game", "logo");
// }
// enterRoom (){
//     this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     var state = 'finalscreen';
//     MyShowAD(this, state);
//     }},this);
//    }
  
// changemusic() {
//      if (!this.sound.mute) {
//     this.musicBtn.setTexture('music-off');
//     this.sound.mute = true;
//   } else {
//     this.musicBtn.setTexture('music-on');
//     this.sound.mute = false;
//   }
//   }   
// }

// class level1_round_oven extends Phaser.Scene {

// constructor() {
//  super('level1_round_oven');
// }
//  create() {
     
//        this.levelGroup = this.add.container();

//     this.l2_bg = this.add.sprite(320,360, "l2_bg");
//     this.l2_bg1 = this.add.sprite(960,360, "l2_bg1");

//     this.levelGroup.add(this.l2_bg);
//     this.levelGroup.add(this.l2_bg1);

// ///////////////////////////////////////////////////////////////////////////////


//     this.l1_machin0002 = this.add.sprite(900,400, "l1_machin0004");
//     this.l1_machin0002.setVisible(true);

//     this.l2_Ovan0002 = this.add.sprite(900,415, "l2_Ovan0002");


//         this.l1final_shape0001 = this.add.sprite(300,350, "l1final_shape0003");
//         // this.l1final_shape0001.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.l1final_shape0001.on('drag', (pointer, dragX, dragY) => {
//             this.l1final_shape0001.x = dragX;
//             this.l1final_shape0001.y = dragY;

//             this.arrow1.setVisible(false);
//             this.arrow2.setVisible(true);



//         });
//         this.l1final_shape0001.on('dragend', () => {
//             if ((this.input.x>570 && this.input.x<1140 && this.input.y>170 && this.input.y<520)){
//             this.l1final_shape0001.visible=false; 
//             this.l2_Ovan0002.setVisible(false);
//             this.l1_machin0002.setVisible(true);

//         this.click_rect.setInteractive({useHandCursor:true});
//                  this.arrow2.setVisible(false);
//                  this.arrow3.setVisible(true);

//             }
//              else{

//                  this.arrow1.setVisible(true);
//                  this.arrow2.setVisible(false);

//              this.l1final_shape0001.x=300;
//              this.l1final_shape0001.y=350;
//              }
//         },this);













// ///////////////////////////////////////////


//         this.click_rect = this.add.rectangle(850, 600, 400, 200, 0xff0000,0).setOrigin(0.5);
//         // this.click_rect.setInteractive({useHandCursor:true});
//         this.click_rect.on('pointerdown',function(){
//         this.click_rect.disableInteractive();

//                 this.arrow3.setVisible(false);
//                 this.arrow4.setVisible(true);

//             this.l1_machin0002.setTexture('l1_machin0007');
//             this.click_rect1.setInteractive({useHandCursor:true});

//         },this);



// ///////////////////////////////////////////

//         this.click_rect1 = this.add.rectangle(1170, 270, 100, 100, 0xff0000,0).setOrigin(0.5);
//         // this.click_rect1.setInteractive({useHandCursor:true});
//         this.click_rect1.on('pointerdown',function(){
//         this.click_rect1.disableInteractive();
//                  this.arrow4.setVisible(false);
//             this.l1_machin0002.setTexture('l1_machin0008');

//         this.time_liner1.setVisible(true);
//         this.time_liner1.play('time_liner1_key');
//         this.time.delayedCall(300,() => {

//         },this);
//         },this);


// ///////////////////////////////////////////


//         this.time_liner1 = this.add.sprite(270,400, "time_liner");
//         this.time_liner1.setVisible(false);



//         this.time_liner1Frame1 = this.anims.generateFrameNames('time_liner', {start: 0,end: 14,zeroPad: 1,
//         prefix: 'time_liner'});
//         this.anims.create({key: 'time_liner1_key',frames: this.time_liner1Frame1,frameRate:3,}); 
//         this.time_liner1.on("animationcomplete",function() {
//         this.time_liner1.setVisible(false);

//             this.l1_machin0002.setTexture('l1_machin0009');
//         this.time.delayedCall(500,() => {


//             this.scene.start('l1_dekraction_lavel')

//         },this);


//        },this);
    


// ///////////////////////////////////////////


  

//     // ****************************************************************************************************** //
            
//     // ***********************************Arrow *********************************************** //


//              var arrow_Posx = [305,860,850,1180];
//              var arrow_Posy = [350,400,580,220];
             
//          for (var i = 1; i <= 50; i++) {
//             this['arrow' + i] = this.add.sprite(arrow_Posx[i - 1], arrow_Posy[i - 1], 'arrow');
//             this['arrow' + i].setOrigin(0.5);
//             this['arrow' + i].anims.create({key: 'arrow',
//                 frames: this.anims.generateFrameNumbers('arrow', { start: 0, end: 9 - 1 }),
//                 frameRate: 15,
//                 repeat: -1
//             });
//             this['arrow' + i].anims.play('arrow');
//             this['arrow' + i].setVisible(false);

//             if (i === 1 ) {
//                 this['arrow' + i].setVisible(false);
                
//             }
                      
            
//         }

//     // ********************************Collide creation************************************************** //

//           // this.mcir = this.add.graphics();
//         // this.mcir.fillStyle(0x666666, 0.1);
//         // this.mcir.fillRect(0, 0, 1280, 720);
//         // this.mcir.setInteractive(new Phaser.Geom.Rectangle(0, 0, 1280, 720), Phaser.Geom.Rectangle.Contains);
//         // this.mcir.on('pointerdown', function (pointer) {
//         //   this.mcnt1++;
//         //   this['xcnt' + this.mcnt1] = pointer.x;
//         //   this['ycnt' + this.mcnt1] = pointer.y;
//         //   const circle = this.add.graphics();
//         //   circle.fillStyle(0x000000, 0.5);
//         //   circle.fillCircle(pointer.x, pointer.y, 20);
//         //   circle.setDepth(1);
//         //   console.log(this['xcnt' + this.mcnt1] + ':' + this['ycnt' + this.mcnt1]);
//         // }, this);

//     // ************************************Ad creation********************************************** //
        
//         // const { lockedItem: lock_r1, adfaildbtn: adfaildbtn_r1, addismisbtn: addismisbtn_r1 } = 
//         // createLockedItem(this, 139, 585, 'panel_acc0001ad',  () => {
//         // this.panel_acc0001.setInteractive({ useHandCursor: true });
//             // });
//         // lock_r1.setScale(0.43); 
//         // this.acc_group.add(lock_r1); 

//     // ********************************************************************************** //

//        this.playbtn=this.add.image(1190,640,'btn2').setOrigin(0.5, 0.5).setScale(0);
//         this.playbtn.setInteractive({ useHandCursor: true });
//         this.playbtn.on('pointerover',function(){this.playbtn.setScale(1.05)},this);
//         this.playbtn.on('pointerout',function(){this.playbtn.setScale(1)},this);
//         this.playbtn.on('pointerdown',this.enterRoom,this);

//         this.morebtn=this.add.image(60,660,'btn4').setOrigin(0.5, 0.5).setScale(0);
//         this.morebtn.setInteractive({ useHandCursor: true });
//         this.morebtn.on('pointerover',function(){this.morebtn.setScale(1.05)},this);
//         this.morebtn.on('pointerout',function(){this.morebtn.setScale(1)},this);
//         this.morebtn.on('pointerup',this.morebtnLink,this);

      

//         this.logo =this.add.image(165,55,'logo').setScale(0.65);
//         this.logo.setInteractive({pixelPerfect:true});
//         this.logo.on('pointerup',this.LogoLink,this);

//           this.musicBtn = this.add.sprite(1212,50,"music-on");
//         this.musicBtn.setInteractive();
//         this.musicBtn.on('pointerup',this.changemusic,this);

//     this.shutter_group = this.add.container();
//     this.shutter_bg =this.add.image(320,360,'shutter_bg');
//     this.shutter_bg2 =this.add.image(960,360,'shutter_bg2');
//     this.shutter_group.add(this.shutter_bg);
//     this.shutter_group.add(this.shutter_bg2);

//     this.tweens.add({targets:this.shutter_group,y:-720,ease: 'Quadratic',duration:1200,onComplete:() => {
//         this.l1final_shape0001.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.arrow1.setVisible(true);

//     }},this);

//         if (!this.sound.mute) {
//         this.musicBtn.setTexture('music-on');
//         } else {
//         this.musicBtn.setTexture('music-off');
//         }
// }
// update() {
//   // console.log(this.input.x + ':' + this.input.y); 

//   if (this.dummy_drag) {
//         this.dummy.x = this.input.activePointer.x ;
//         this.dummy.y = this.input.activePointer.y;
//         } 

  



//   }
          
// morebtnLink (){
//   YYGGames.navigate("game", "morebutton");
// }
// LogoLink (){
//       YYGGames.navigate("game", "logo");
// }
// enterRoom (){
//     this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     var state = 'finalscreen';
//     MyShowAD(this, state);
//     }},this);
//    }
  
// changemusic() {
//      if (!this.sound.mute) {
//     this.musicBtn.setTexture('music-off');
//     this.sound.mute = true;
//   } else {
//     this.musicBtn.setTexture('music-on');
//     this.sound.mute = false;
//   }
//   }   
// }

// ///////////////////////////////////////////////////////////////////////




// class level1_round_shape extends Phaser.Scene {

// constructor() {
//  super('level1_round_shape');
// }
//  create() {
     
//        this.levelGroup = this.add.container();

//     this.l2_bg = this.add.sprite(320,360, "l2_bg");
//     this.l2_bg1 = this.add.sprite(960,360, "l2_bg1");

//     this.levelGroup.add(this.l2_bg);
//     this.levelGroup.add(this.l2_bg1);

// ///////////////////////////////////////////////////////////////////

//             this.l1meet_bowl = this.add.sprite(200,340, "l1meet_bowl");
//             this.l1meet_bowl.setVisible(true);
//             this.l1meet_bowl.setFrame('l1meet_bowl4');

//             this.blue1_Front_open = this.add.sprite(700,350, "blue1_Front_open");
//             this.blue1_Front_open.setVisible(true);

//             this.round_pice0001 = this.add.sprite(700,340, "round_pice0001");
//             this.round_pice0001.setVisible(false);

//             this.Chees_topings = this.add.sprite(700,290, "Chees_topings");
//             this.Chees_topings.alpha=0;

//             this.blue1_Front = this.add.sprite(700,350, "blue1_Front");
//             this.blue1_Front.setVisible(true);

//             this.l1_plate = this.add.sprite(302,512, "l1_plate");
//             this.l1_plate.setVisible(true);

//             this.l1_plate1 = this.add.sprite(794,514, "l1_plate");
//             this.l1_plate1.setVisible(true);

//             this.scrwwer_tra = this.add.sprite(2000,290, "scrwwer_tra");


//             this.l1Chees_ani = this.add.sprite(708,230, "l1Chees_ani");
//             this.l1Chees_ani.setVisible(false);

//             this.l1Chees_ani_frame = this.anims.generateFrameNames('l1Chees_ani', {start: 0,end:4,zeroPad:1,
//             prefix: 'l1Chees_ani'});
//             this.anims.create({key:'l1Chees_ani_frame',frames: this.l1Chees_ani_frame,frameRate:7,repeat:-1,});


            
//         ///////////////////////////////////////////////////////////////////////////

//         this.box_pice1 = this.add.sprite(304,496, "box_pice").setScale(0.95);
//           this.box_pice1.setVisible(true);
//         // this.box_pice1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.box_pice1.on('drag', (pointer, dragX, dragY) => {
//             this.box_pice1.x = dragX;
//             this.box_pice1.y = dragY;

//             this.arrow1.setVisible(false);
//             this.arrow2.setVisible(true);


//         });
//         this.box_pice1.on('dragend', () => {
//             if ((this.input.x>577 && this.input.x<1004 && this.input.y>430 && this.input.y<580)){
//             this.box_pice1.visible=false; 
//             this.box_shap0001.setVisible(true);
//             this.box_shap0001.setTexture('box_shap0001');
//             this.arrow2.setVisible(false);

//             this.red_sppon7.setInteractive({useHandCursor:true});
          
//             this.arrow3.setVisible(true);
            
//             }



//              else{

//             this.arrow1.setVisible(true);
//             this.arrow2.setVisible(false);

//              this.box_pice1.x=304;
//              this.box_pice1.y=496;
//              }
//         },this);
//         ///////////////////////////////////////////////////////////////////////////

//       this.box_pice2 = this.add.sprite(304,480, "box_pice").setScale(0.95);
//         this.box_pice2.setVisible(true);
//         // this.box_pice2.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.box_pice2.on('drag', (pointer, dragX, dragY) => {
//             this.box_pice2.x = dragX;
//             this.box_pice2.y = dragY;

//             this.arrow1.setVisible(false);
//             this.arrow2.setVisible(true);




//         });
//         this.box_pice2.on('dragend', () => {
//             if ((this.input.x>577 && this.input.x<1004 && this.input.y>430 && this.input.y<580)){
//             this.box_pice2.visible=false; 

//             this.box_shap0001.setVisible('true');
//             this.box_shap0001.setTexture('box_shap0001');
//             this.red_sppon4.setInteractive({useHandCursor:true});
//             this.arrow2.setVisible(false);
//             this.arrow3.setVisible(true);
            
//             }



//              else{

//             this.arrow1.setVisible(true);
//             this.arrow2.setVisible(false);

//              this.box_pice2.x=304;
//              this.box_pice2.y=480;
//              }
//         },this);
//         ///////////////////////////////////////////////////////////////////////////

//         this.box_pice3 = this.add.sprite(304,465, "box_pice").setScale(0.95);
//         this.box_pice3.setVisible(true);
//         // this.box_pice3.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.box_pice3.on('drag', (pointer, dragX, dragY) => {
//             this.box_pice3.x = dragX;
//             this.box_pice3.y = dragY;

//           this.arrow1.setVisible(false);
//           this.arrow2.setVisible(true);




//         });
//         this.box_pice3.on('dragend', () => {
//             if ((this.input.x>577 && this.input.x<1004 && this.input.y>430 && this.input.y<580)){
//             this.box_pice3.visible=false; 
//             this.box_shap0001.setVisible(true);
//             this.red_sppon1.setInteractive({useHandCursor:true});
//                  this.arrow2.setVisible(false);
//                  this.arrow3.setVisible(true);
            
//             }



//              else{

//                  this.arrow1.setVisible(true);
//                  this.arrow2.setVisible(false);


//              this.box_pice3.x=304;
//              this.box_pice3.y=465;
//              }
//         },this);

       

//         ///////////////////////////////////////////////////////////////////////////


//         this.box_shap0001 = this.add.sprite(800,470, "box_shap0001").setScale(0.9);
//         this.box_shap0001.setVisible(false);


    

//         ///////////////////////////////////////////////////////////////////////////

//             this.spone_1 = this.add.sprite(150,270, "spone_1");
//             this.spone_1.setVisible(true);

//             this.spone_2 = this.add.sprite(150,270, "spone_2");
//             this.spone_2.setVisible(false);

//         ///////////////////////////////////////////////////////////////////////////




//         this.red_sppon1 = this.add.rectangle(200, 300, 270, 100, 0xff0000,0).setOrigin(0.5);
//         // this.red_sppon1.setInteractive({useHandCursor:true});
//         this.red_sppon1.on('pointerdown',function(){
//         this.red_sppon1.disableInteractive();
               
//             this.l1meet_bowl.setFrame('l1meet_bowl3');

//         this.spone_1.setVisible(false);
//         this.spone_2.setVisible(true);
//         this.spone_2_drag=true;

//         this.red_sppon2.setInteractive({useHandCursor:true});
           
//                  this.arrow3.setVisible(false);
//                  this.arrow2.setVisible(true);

//         },this);


//         this.red_sppon2 = this.add.rectangle(800, 490, 350, 150, 0xff0000,0).setOrigin(0.5);
//         // this.red_sppon2.setInteractive({useHandCursor:true});
//         this.red_sppon2.on('pointerdown',function(){
//         this.red_sppon2.disableInteractive();
//                  this.arrow2.setVisible(false);

//             this.box_shap0001.setTexture('box_shap0002');
//             this.box_shap0001.setVisible(true);
//              this.round_rooll1.setVisible(true);
                
//         this.spone_1.setVisible(true);
//         this.spone_2.setVisible(false);
//         this.spone_2_drag=false;

//         this.red_sppon3.setInteractive({useHandCursor:true});

//                  this.arrow2.setVisible(true);

//         },this);

//         /////////////////////////////


//           this.red_sppon3 = this.add.rectangle(800, 490, 350, 150, 0xff0000,0).setOrigin(0.5);
//         // this.red_sppon3.setInteractive({useHandCursor:true});
//         this.red_sppon3.on('pointerdown',function(){
//         this.red_sppon3.disableInteractive();
//              this.box_shap0001.setVisible(false);
//              this.round_rooll1.setVisible(true);
//              this.round_rooll1.play('round_rooll1_key');

//           this.arrow2.setVisible(false);

//           },this);


// //////////////////////////////

//         this.red_sppon4 = this.add.rectangle(200, 300, 270, 100, 0xff0000,0).setOrigin(0.5);
//         // this.red_sppon4.setInteractive({useHandCursor:true});
//         this.red_sppon4.on('pointerdown',function(){
//         this.red_sppon4.disableInteractive();
               
//             this.l1meet_bowl.setFrame('l1meet_bowl2');

//         this.spone_1.setVisible(false);
//         this.spone_2.setVisible(true);
//         this.spone_2_drag=true;

//         this.red_sppon5.setInteractive({useHandCursor:true});
//             this.arrow3.setVisible(false);
//             this.arrow2.setVisible(true);
           

//         },this);


//         this.red_sppon5 = this.add.rectangle(800, 490, 350, 150, 0xff0000,0).setOrigin(0.5);
//         // this.red_sppon5.setInteractive({useHandCursor:true});
//         this.red_sppon5.on('pointerdown',function(){
//         this.red_sppon5.disableInteractive();

//             this.box_shap0001.setTexture('box_shap0002');
//             this.box_shap0001.setVisible(true);
//             this.round_rooll2.setVisible(true);
                
//         this.spone_1.setVisible(true);
//         this.spone_2.setVisible(false);
//         this.spone_2_drag=false;

//         this.red_sppon6.setInteractive({useHandCursor:true});


//         },this);

//         /////////////////////////////


//           this.red_sppon6 = this.add.rectangle(800, 490, 350, 150, 0xff0000,0).setOrigin(0.5);
//         // this.red_sppon6.setInteractive({useHandCursor:true});
//         this.red_sppon6.on('pointerdown',function(){
//         this.red_sppon6.disableInteractive();
//             this.box_shap0001.setVisible(false);
//              this.round_rooll2.setVisible(true);
//              this.round_rooll2.play('round_rooll2_key');
//             this.arrow2.setVisible(false);


//           },this);

// //////////////////////////////

//         this.red_sppon7 = this.add.rectangle(200, 300, 270, 100, 0xff0000,0).setOrigin(0.5);
//         // this.red_sppon7.setInteractive({useHandCursor:true});
//         this.red_sppon7.on('pointerdown',function(){
//         this.red_sppon7.disableInteractive();
               
//             this.l1meet_bowl.setFrame('l1meet_bowl0');

//         this.spone_1.setVisible(false);
//         this.spone_2.setVisible(true);
//         this.spone_2_drag=true;

//         this.red_sppon8.setInteractive({useHandCursor:true});
           
//             this.arrow3.setVisible(false);
//             this.arrow2.setVisible(true);
          

//         },this);


//         this.red_sppon8 = this.add.rectangle(800, 490, 350, 150, 0xff0000,0).setOrigin(0.5);
//         // this.red_sppon8.setInteractive({useHandCursor:true});
//         this.red_sppon8.on('pointerdown',function(){
//         this.red_sppon8.disableInteractive();

//             this.box_shap0001.setTexture('box_shap0002');
//             this.box_shap0001.setVisible(true);
//             this.round_rooll3.setVisible(true);
                
//         this.spone_1.setVisible(false);
//         this.spone_2.setVisible(false);
//         this.spone_2.setVisible(false);
//         this.spone_2_drag=false;
//             this.l1meet_bowl.setVisible(false);
          

//         this.red_sppon9.setInteractive({useHandCursor:true});


//         },this);

//         /////////////////////////////


//           this.red_sppon9 = this.add.rectangle(800, 490, 350, 150, 0xff0000,0).setOrigin(0.5);
//         // this.red_sppon9.setInteractive({useHandCursor:true});
//         this.red_sppon9.on('pointerdown',function(){
//         this.red_sppon9.disableInteractive();
//             this.box_shap0001.setVisible(false);
//              this.round_rooll3.setVisible(true);
//              this.round_rooll3.play('round_rooll3_key');
//             this.arrow2.setVisible(false);


//           },this);

// //////////////////////////////

     

           
//         this.round_rooll1 = this.add.sprite(800,470, "round_rooll");
//         this.round_rooll1.setVisible(false);
//         // this.round_rooll1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.round_rooll1.on('drag', (pointer, dragX, dragY) => {
//             this.round_rooll1.x = dragX;
//             this.round_rooll1.y = dragY;

//           this.arrow5.setVisible(false);
//           this.arrow4.setVisible(true);




//         });
//         this.round_rooll1.on('dragend', () => {
//             if ((this.input.x>460 && this.input.x<960 && this.input.y>250 && this.input.y<420)){
//             this.round_rooll1.visible=false; 
//             this.round_pice0001.setVisible(true);
//             this.round_pice0001.setTexture('round_pice0001');
//         this.box_pice2.setInteractive({useHandCursor:true,draggable:true,});
//             this.arrow4.setVisible(false);
//             this.arrow1.setVisible(true);

//             }



//              else{

//             this.arrow5.setVisible(true);
//             this.arrow4.setVisible(false);


//              this.round_rooll1.x=800;
//              this.round_rooll1.y=470;
//              }
//         },this);

       


//         this.round_rooll1Frame1 = this.anims.generateFrameNames('round_rooll', {start: 0,end: 4,zeroPad: 1,
//         prefix: 'round_rooll'});
//         this.anims.create({key: 'round_rooll1_key',frames: this.round_rooll1Frame1,frameRate:8,}); 
//         this.round_rooll1.on("animationcomplete",function() {
//         this.round_rooll1.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//           this.arrow5.setVisible(true);

//         },this);






// //////////////////////////////


        

     



//         this.round_rooll2 = this.add.sprite(800,470, "round_rooll");
//         this.round_rooll2.setVisible(false);
//         // this.round_rooll2.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.round_rooll2.on('drag', (pointer, dragX, dragY) => {
//             this.round_rooll2.x = dragX;
//             this.round_rooll2.y = dragY;

//             this.arrow5.setVisible(false);
//             this.arrow4.setVisible(true);




//         });
//         this.round_rooll2.on('dragend', () => {
//             if ((this.input.x>460 && this.input.x<960 && this.input.y>250 && this.input.y<420)){
//             this.round_rooll2.visible=false; 
//             this.round_pice0001.setTexture('round_pice0002');
//             this.box_pice1.setInteractive({useHandCursor:true,draggable:true,});
//             this.arrow4.setVisible(false);
//             this.arrow1.setVisible(true);

//             }



//              else{


//             this.arrow5.setVisible(true);
//             this.arrow4.setVisible(false);

//              this.round_rooll2.x=800;
//              this.round_rooll2.y=470;
//              }
//         },this);

//             this.round_rooll2Frame1 = this.anims.generateFrameNames('round_rooll', {start: 0,end: 4,zeroPad: 1,
//         prefix: 'round_rooll'});
//         this.anims.create({key: 'round_rooll2_key',frames: this.round_rooll2Frame1,frameRate:8,}); 
//         this.round_rooll2.on("animationcomplete",function() {

//         this.round_rooll2.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//             this.arrow5.setVisible(true);

//         },this);

       

// //////////////////////////////


//         this.round_rooll3 = this.add.sprite(800,470, "round_rooll");
//         this.round_rooll3.setVisible(false);


//          this.round_rooll3 = this.add.sprite(800,470, "round_rooll");
//          this.round_rooll3.setVisible(false);
//         // this.round_rooll3.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.round_rooll3.on('drag', (pointer, dragX, dragY) => {
//             this.round_rooll3.x = dragX;
//             this.round_rooll3.y = dragY;

//             this.arrow5.setVisible(false);
//             this.arrow4.setVisible(true);




//         });
//         this.round_rooll3.on('dragend', () => {
//             if ((this.input.x>460 && this.input.x<960 && this.input.y>250 && this.input.y<420)){
//             this.round_rooll3.visible=false; 
//             this.round_pice0001.setTexture('round_pice0003');
//             this.l1_plate1.setVisible(false);
//             this.arrow4.setVisible(false);

//         this.l1_chees_peac.setVisible(true);

//               this.tweens.add({targets:this.scrwwer_tra,x:730,ease: 'Quadratic',duration:1200,onComplete:() => {
//         this.l1_chees_peac.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});

//             this.arrow1.setVisible(true);
//     }},this);

//             }



//              else{

//             this.arrow5.setVisible(true);
//             this.arrow4.setVisible(false);

//              this.round_rooll3.x=800;
//              this.round_rooll3.y=470;
//              }
//         },this);

       



//         this.round_rooll3Frame1 = this.anims.generateFrameNames('round_rooll', {start: 0,end: 4,zeroPad: 1,
//         prefix: 'round_rooll'});
//         this.anims.create({key: 'round_rooll3_key',frames: this.round_rooll3Frame1,frameRate:8,}); 
//         this.round_rooll3.on("animationcomplete",function() {
//         this.round_rooll3.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});

//             this.arrow5.setVisible(true);


//         },this);

// //////////////////////////////


//         this.l1_chees_peac = this.add.sprite(300,480, "l1_chees_peac");
//         this.l1_chees_peac.setVisible(false);
//         // this.l1_chees_peac.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         this.l1_chees_peac.on('drag', (pointer, dragX, dragY) => {
//             this.l1_chees_peac.x = dragX;
//             this.l1_chees_peac.y = dragY;

//             this.arrow1.setVisible(false);
//             this.arrow4.setVisible(true);

               


//         });
//         this.l1_chees_peac.on('dragend', () => {
//             if ((this.input.x>460 && this.input.x<930 && this.input.y>180 && this.input.y<383)){
//             this.l1_chees_peac.setVisible(false);
//                  this.arrow4.setVisible(false);
              

//                  this.l1Chees_ani.setVisible(true);
//                  this.l1Chees_ani.play('l1Chees_ani_frame');

//                 this.tweens.add({targets:this.Chees_topings,alpha:1,ease: 'Quadratic',duration:1200,onComplete:() => {
//                 this.scrwwer_tra.setVisible(false);
//                 this.l1Chees_ani.setVisible(false);
//                 this.l1_plate.setVisible(false);
//                    this.scene.start('level1_round_oven')

//                 }},this);


//             }
//              else{

//                  this.arrow1.setVisible(true);
//                  this.arrow4.setVisible(false);

//              this.l1_chees_peac.x=300;
//              this.l1_chees_peac.y=480;
//              }
//         },this);

// //////////////////////////////











   

//     // *********************************time event creation***********************************************  // 

//         // this.time.delayedCall(1000,() => {
            
//         // },this);
        
//     // *********************************sprite animation creation***********************************************  // 

//         // this.sprite_name= this.physics.add.sprite(400, 252, 'sprite_name0001');
//         // this.sprite_name.play('sprite_key');
//         // this.sprite_name.on("animationcomplete",function() {

//         // },this);

//         //  this.anims.create({key: 'sprite_name_key',
//         //     frames: this.anims.generateFrameNames('sprite_name', 
//         //     { start: 0, end: 10, zeroPad: 1, prefix: 'sprite_name' }),
//         //     frameRate: 8
//         // });



//     // *********************************image animation creation***********************************************  // 

//         // this.asset_name =this.add.sprite(500,360,'asset_name');

//         // const asset_name_storage = [];
//         // for (let i = 1; i <= 10; i++) {
//         //     asset_name_storage.push({ key: 'asset_name' + i });
//         // }

//         // this.anims.create({
//         //     key: 'asset_name_key1',
//         //     frames: asset_name_storage,
//         //     frameRate: 12
//         // });


//     // *********************************drag & drop creation***********************************************  // 

//         // this.drag_image = this.add.image(450,692,'drag_image').setOrigin(0.5, 0.5);
//         // this.drag_image.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         // this.drag_image.on('drag', (pointer, dragX, dragY) => {
//         //     this.drag_image.x = dragX;
//         //     this.drag_image.y = dragY;
//         // });
//         // this.drag_image.on('dragend', () => {
//         //     if ((this.input.x>370 && this.input.x<480 && this.input.y>120 && this.input.y<220)){
//         //     this.drag_image.visible=false; 
//         //     }
//         //      else{
//         //      this.drag_image.x=430;
//         //      this.drag_image.y=320;
//         //      }
//         // },this);



//     // *********************************click_rectangle creation***********************************************  // 
//         // this.click_rect = this.add.rectangle(250, 250, 70, 150, 0xff0000,0).setOrigin(0.5);
//         // this.click_rect.setInteractive({useHandCursor:true});
//         // this.click_rect.on('pointerdown',function(){
//         // this.click_rect.disableInteractive();
//         // },this);

//     // ********************************************************************************  // 

//         // this.dummy_drag=true;
//         // this.dummy =this.add.sprite(226,403,'tick0001');



   

//     // ****************************************************************************************************** //
            
//     // ***********************************Arrow *********************************************** //


//              var arrow_Posx = [304,800,190,700,930];
//              var arrow_Posy = [380,420,220,290,350];
             
//          for (var i = 1; i <= 50; i++) {
//             this['arrow' + i] = this.add.sprite(arrow_Posx[i - 1], arrow_Posy[i - 1], 'arrow');
//             this['arrow' + i].setOrigin(0.5);
//             this['arrow' + i].anims.create({key: 'arrow',
//                 frames: this.anims.generateFrameNumbers('arrow', { start: 0, end: 9 - 1 }),
//                 frameRate: 15,
//                 repeat: -1
//             });
//             this['arrow' + i].anims.play('arrow');
//             this['arrow' + i].setVisible(false);

//             if (i === 1 ) {
//                 this['arrow' + i].setVisible(false);
              
//             }


                    
            
//         }

//     // ********************************Collide creation************************************************** //

//           // this.mcir = this.add.graphics();
//         // this.mcir.fillStyle(0x666666, 0.1);
//         // this.mcir.fillRect(0, 0, 1280, 720);
//         // this.mcir.setInteractive(new Phaser.Geom.Rectangle(0, 0, 1280, 720), Phaser.Geom.Rectangle.Contains);
//         // this.mcir.on('pointerdown', function (pointer) {
//         //   this.mcnt1++;
//         //   this['xcnt' + this.mcnt1] = pointer.x;
//         //   this['ycnt' + this.mcnt1] = pointer.y;
//         //   const circle = this.add.graphics();
//         //   circle.fillStyle(0x000000, 0.5);
//         //   circle.fillCircle(pointer.x, pointer.y, 20);
//         //   circle.setDepth(1);
//         //   console.log(this['xcnt' + this.mcnt1] + ':' + this['ycnt' + this.mcnt1]);
//         // }, this);

//     // ************************************Ad creation********************************************** //
        
//         // const { lockedItem: lock_r1, adfaildbtn: adfaildbtn_r1, addismisbtn: addismisbtn_r1 } = 
//         // createLockedItem(this, 139, 585, 'panel_acc0001ad',  () => {
//         // this.panel_acc0001.setInteractive({ useHandCursor: true });
//             // });
//         // lock_r1.setScale(0.43); 
//         // this.acc_group.add(lock_r1); 

//     // ********************************************************************************** //

//        this.playbtn=this.add.image(1190,640,'btn2').setOrigin(0.5, 0.5).setScale(0);
//         this.playbtn.setInteractive({ useHandCursor: true });
//         this.playbtn.on('pointerover',function(){this.playbtn.setScale(1.05)},this);
//         this.playbtn.on('pointerout',function(){this.playbtn.setScale(1)},this);
//         this.playbtn.on('pointerdown',this.enterRoom,this);

//         this.morebtn=this.add.image(60,660,'btn4').setOrigin(0.5, 0.5).setScale(0);
//         this.morebtn.setInteractive({ useHandCursor: true });
//         this.morebtn.on('pointerover',function(){this.morebtn.setScale(1.05)},this);
//         this.morebtn.on('pointerout',function(){this.morebtn.setScale(1)},this);
//         this.morebtn.on('pointerup',this.morebtnLink,this);

      

//          this.logo =this.add.image(165,55,'logo').setScale(0.65);
//         this.logo.setInteractive({pixelPerfect:true});
//         this.logo.on('pointerup',this.LogoLink,this);

//           this.musicBtn = this.add.sprite(1212,50,"music-on");
//         this.musicBtn.setInteractive();
//         this.musicBtn.on('pointerup',this.changemusic,this);

//     this.shutter_group = this.add.container();
//     this.shutter_bg =this.add.image(320,360,'shutter_bg');
//     this.shutter_bg2 =this.add.image(960,360,'shutter_bg2');
//     this.shutter_group.add(this.shutter_bg);
//     this.shutter_group.add(this.shutter_bg2);

//     this.tweens.add({targets:this.shutter_group,y:-720,ease: 'Quadratic',duration:1200,onComplete:() => {
//     this.box_pice3.setInteractive({useHandCursor:true,draggable:true,});

//           this.arrow1.setVisible(true);

//     }},this);

//         if (!this.sound.mute) {
//         this.musicBtn.setTexture('music-on');
//         } else {
//         this.musicBtn.setTexture('music-off');
//         }
// }
// update() {
//   // console.log(this.input.x + ':' + this.input.y); 

//   if (this.dummy_drag) {
//         this.dummy.x = this.input.activePointer.x ;
//         this.dummy.y = this.input.activePointer.y;
//         } 

//   if (this.spone_2_drag) {
//         this.spone_2.x = this.input.activePointer.x ;
//         this.spone_2.y = this.input.activePointer.y;
//         } 

  



//   }
          
// morebtnLink (){
//   YYGGames.navigate("game", "morebutton");
// }
// LogoLink (){
//       YYGGames.navigate("game", "logo");
// }
// enterRoom (){
//     this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     var state = 'finalscreen';
//     MyShowAD(this, state);
//     }},this);
//    }
  
// changemusic() {
//      if (!this.sound.mute) {
//     this.musicBtn.setTexture('music-off');
//     this.sound.mute = true;
//   } else {
//     this.musicBtn.setTexture('music-on');
//     this.sound.mute = false;
//   }
//   }   
// }



// ///////////////////////////////////////////////////////

// //////////////////////01///////////////////////////

// class finalscreen_l1 extends Phaser.Scene {
    
// constructor() {
//  super('finalscreen_l1');
// }
//  create() {

//     this.levelGroup = this.add.container();

//     this.l2_bg = this.add.sprite(320,360, "l3_dekrt_bg1");
//     this.l2_bg1 = this.add.sprite(960,360, "l3_dekrt_bg2");

//     this.levelGroup.add(this.l2_bg);
//     this.levelGroup.add(this.l2_bg1);

//     this.l3_dkrt_juice1 = this.add.sprite(1020,280, "l3_dkrt_juice"+Main.l1dekrat_array[1]);

//     this.l1_final_bowl0001 = this.add.sprite(600,270, "l1_final_bowl000"+Main.l2dekrat_array[0]);

//     this.l3_dkrt_spon1 = this.add.sprite(1170,530, "l3_dkrt_spon"+Main.l1dekrat_array[2]).setScale(0.9);





// ////////////////////////////////////////////////////        

//     this.morebtn = this.add.image(380-300,650,'btn4').setOrigin(0.5, 0.5).setScale(0);
//     this.morebtn.setInteractive({ useHandCursor: true });
//     this.morebtn.on('pointerover',function(){this.morebtn.setScale(1.05)},this);
//     this.morebtn.on('pointerout',function(){this.morebtn.setScale(1)},this);
//     this.morebtn.on('pointerup',this.morebtnLink,this);

//     this.playbtn=this.add.image(780-300,650,'btn1').setOrigin(0.5, 0.5).setScale(0);
//     this.playbtn.setInteractive({ useHandCursor: true });
//     this.playbtn.on('pointerover',function(){this.playbtn.setScale(1.05)},this);
//     this.playbtn.on('pointerout',function(){this.playbtn.setScale(1)},this);
//     this.playbtn.on('pointerdown',this.enterRoom,this);

//     var self = this;
//     randomIndex = Math.floor(Math.random() * 5);
//     var thumbframeVar = {
//         width: 317,
//         height: 237,
//     };

//     var container = self.add.container(252, 700);
//     var sprite = self.add.sprite(0, 0, 'image' + randomIndex);
//     sprite.setOrigin(0.5);
//     sprite.setDisplaySize(thumbframeVar.width - 15, thumbframeVar.height - 15);
//     sprite.setInteractive({
//         useHandCursor: true
//     });
//     sprite.on('pointerup', this.thumbLink, self);

//     var frame = self.add.image(0, 0, 'tumpframe');
//     frame.setOrigin(0.5);
//     frame.setDisplaySize(thumbframeVar.width, thumbframeVar.height);

//     container.add([sprite, frame]);
//     container.x = 580-300;
//     container.y = 630;
//     container.setScale(0.7);
           

//      this.logo =this.add.image(165,55,'logo').setScale(0.65);
//     this.logo.setInteractive({pixelPerfect:true});
//     this.logo.on('pointerup',this.LogoLink,this);

//       this.musicBtn = this.add.sprite(1212,50,"music-on");
//     this.musicBtn.setInteractive();
//     this.musicBtn.on('pointerup',this.changemusic,this);

//     this.shutter_group = this.add.container();
//     this.shutter_bg =this.add.image(320,360,'shutter_bg');
//     this.shutter_bg2 =this.add.image(960,360,'shutter_bg2');
//     this.shutter_group.add(this.shutter_bg);
//     this.shutter_group.add(this.shutter_bg2);
//     this.tweens.add({targets:this.shutter_group,y:-720,ease: 'Quadratic',duration:1200,onComplete:() => {
//          this.tweens.add({targets:this.playbtn,scaleX: 1,scaleY:1,ease: 'Quadratic',duration:800,});
//          this.tweens.add({targets:this.morebtn,scaleX: 1,scaleY:1,ease: 'Quadratic',duration:800,}); 
//     }},this);


//      if (!this.sound.mute) {
//         this.musicBtn.setTexture('music-on');
//         } else {
//         this.musicBtn.setTexture('music-off');
//         }

// }

// thumbLink() {
//  YYGGames.navigate("gameover", "thumb", RelatedGames[randomIndex]['id']);
//   }
// enterRoom (){

//     Main.dressup_array=[1,1,1,1,1,1,1,1];
//     Main.next_array=[0];
//     Main.l2dekrat_array=[1,1,1];
//     Main.l1dekrat_array=[1,1,1];
//     Main.dekrat_array=[1,1,1];
//     Main.drs_next_array1=[0];
//     Main.drs_next_array2=[0];
//     Main.drs_next_array3=[0];
//     Main.l2drs_next_array1=[0];
//     Main.l2drs_next_array2=[0];
//     Main.l2drs_next_array3=[0];
//     Main.l1drs_next_array1=[0];
//     Main.l1drs_next_array2=[0];
//     Main.l1drs_next_array3=[0];
//     Main.l1_shap_array=[0,0];



//     this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     var state = 'selection_lavel';
//     MyShowAD(this, state);
//     }},this);
//    }
  
//  morebtnLink (){
//     YYGGames.navigate("gameover", "morebutton");
// }
//    LogoLink (){
//         YYGGames.navigate("gameover", "logo");
// }

// changemusic() {
//      if (!this.sound.mute) {
//     this.musicBtn.setTexture('music-off');
//     this.sound.mute = true;
//   } else {
//     this.musicBtn.setTexture('music-on');
//     this.sound.mute = false;
//   }
//   }   
// }

// ///////////////////////////////////////////////////
// //////////////////////02///////////////////////////

// class finalscreen_l2 extends Phaser.Scene {
    
// constructor() {
//  super('finalscreen_l2');
// }
//  create() {

//     this.levelGroup = this.add.container();

//     this.l2_bg = this.add.sprite(320,360, "l3_dekrt_bg1");
//     this.l2_bg1 = this.add.sprite(960,360, "l3_dekrt_bg2");

//     this.levelGroup.add(this.l2_bg);
//     this.levelGroup.add(this.l2_bg1);


//     this.l3_dkrt_juice1 = this.add.sprite(1020,280, "l3_dkrt_juice"+Main.l2dekrat_array[1]);

//     this.l2_cup_decration0001 = this.add.sprite(600,400, "l2_cup_decration000"+Main.l2dekrat_array[0]);

//     this.l3_dkrt_spon1 = this.add.sprite(1170,530, "l3_dkrt_spon"+Main.l2dekrat_array[2]).setScale(0.9);



// ////////////////////////////////////////////////////        
// ////////////////////////////////////////////////////        

//     this.morebtn = this.add.image(380-300,650,'btn4').setOrigin(0.5, 0.5).setScale(0);
//     this.morebtn.setInteractive({ useHandCursor: true });
//     this.morebtn.on('pointerover',function(){this.morebtn.setScale(1.05)},this);
//     this.morebtn.on('pointerout',function(){this.morebtn.setScale(1)},this);
//     this.morebtn.on('pointerup',this.morebtnLink,this);

//     this.playbtn=this.add.image(780-300,650,'btn1').setOrigin(0.5, 0.5).setScale(0);
//     this.playbtn.setInteractive({ useHandCursor: true });
//     this.playbtn.on('pointerover',function(){this.playbtn.setScale(1.05)},this);
//     this.playbtn.on('pointerout',function(){this.playbtn.setScale(1)},this);
//     this.playbtn.on('pointerdown',this.enterRoom,this);

//     var self = this;
//     randomIndex = Math.floor(Math.random() * 5);
//     var thumbframeVar = {
//         width: 317,
//         height: 237,
//     };

//     var container = self.add.container(252, 700);
//     var sprite = self.add.sprite(0, 0, 'image' + randomIndex);
//     sprite.setOrigin(0.5);
//     sprite.setDisplaySize(thumbframeVar.width - 15, thumbframeVar.height - 15);
//     sprite.setInteractive({
//         useHandCursor: true
//     });
//     sprite.on('pointerup', this.thumbLink, self);

//     var frame = self.add.image(0, 0, 'tumpframe');
//     frame.setOrigin(0.5);
//     frame.setDisplaySize(thumbframeVar.width, thumbframeVar.height);

//     container.add([sprite, frame]);
//     container.x = 580-300;
//     container.y = 630;
//     container.setScale(0.7);
           

//      this.logo =this.add.image(165,55,'logo').setScale(0.65);
//     this.logo.setInteractive({pixelPerfect:true});
//     this.logo.on('pointerup',this.LogoLink,this);

//       this.musicBtn = this.add.sprite(1212,50,"music-on");
//     this.musicBtn.setInteractive();
//     this.musicBtn.on('pointerup',this.changemusic,this);

//     this.shutter_group = this.add.container();
//     this.shutter_bg =this.add.image(320,360,'shutter_bg');
//     this.shutter_bg2 =this.add.image(960,360,'shutter_bg2');
//     this.shutter_group.add(this.shutter_bg);
//     this.shutter_group.add(this.shutter_bg2);
//     this.tweens.add({targets:this.shutter_group,y:-720,ease: 'Quadratic',duration:1200,onComplete:() => {
//          this.tweens.add({targets:this.playbtn,scaleX: 1,scaleY:1,ease: 'Quadratic',duration:800,});
//          this.tweens.add({targets:this.morebtn,scaleX: 1,scaleY:1,ease: 'Quadratic',duration:800,}); 
//     }},this);


//      if (!this.sound.mute) {
//         this.musicBtn.setTexture('music-on');
//         } else {
//         this.musicBtn.setTexture('music-off');
//         }

// }

// thumbLink() {
//  YYGGames.navigate("gameover", "thumb", RelatedGames[randomIndex]['id']);
//   }
// enterRoom (){

//     Main.dressup_array=[1,1,1,1,1,1,1,1];
//     Main.next_array=[0];
//     Main.l2dekrat_array=[1,1,1];
//     Main.l1dekrat_array=[1,1,1];
//     Main.dekrat_array=[1,1,1];
//     Main.drs_next_array1=[0];
//     Main.drs_next_array2=[0];
//     Main.drs_next_array3=[0];
//     Main.l2drs_next_array1=[0];
//     Main.l2drs_next_array2=[0];
//     Main.l2drs_next_array3=[0];
//     Main.l1drs_next_array1=[0];
//     Main.l1drs_next_array2=[0];
//     Main.l1drs_next_array3=[0];
//     Main.l1_shap_array=[0,0];

//     this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     var state = 'selection_lavel';
//     MyShowAD(this, state);
//     }},this);
//    }
  
//  morebtnLink (){
//     YYGGames.navigate("gameover", "morebutton");
// }
//    LogoLink (){
//         YYGGames.navigate("gameover", "logo");
// }

// changemusic() {
//      if (!this.sound.mute) {
//     this.musicBtn.setTexture('music-off');
//     this.sound.mute = true;
//   } else {
//     this.musicBtn.setTexture('music-on');
//     this.sound.mute = false;
//   }
//   }   
// }

// ///////////////////////////////////////////////////
// //////////////////////03///////////////////////////

// class finalscreen_l3 extends Phaser.Scene {
    
// constructor() {
//  super('finalscreen_l3');
// }
//  create() {

//      this.levelGroup = this.add.container();

//     this.title_bg = this.add.sprite(320,360, "title_bg");
//     this.title_bg2 = this.add.sprite(960,360, "title_bg2");

//     this.levelGroup.add(this.title_bg);
//     this.levelGroup.add(this.title_bg2);

// ////////////////////////////////////////////////////   

//     this.l3_dekrt_bg1 = this.add.sprite(320,360, "l3_dekrt_bg1");

//     this.l3_dekrt_bg2 = this.add.sprite(960,360, "l3_dekrt_bg2");

// ///////////////////////////////////////////

//     this.l3_dkrt_juice1 = this.add.sprite(1020,280, "l3_dkrt_juice"+Main.dekrat_array[1]);

//     this.l3_dkrt_cup1 = this.add.sprite(730,500, "l3_dkrt_cup"+Main.dekrat_array[0]);

//     this.dkrt_plt_food = this.add.sprite(730,500, "dkrt_plt_food").setScale(1.2);

//     this.l3_dkrt_cup_top1 = this.add.sprite(730,500, "l3_dkrt_cup_top"+Main.dekrat_array[0]);

//     this.l3_dkrt_spon1 = this.add.sprite(1170,530, "l3_dkrt_spon"+Main.dekrat_array[2]);

// ////////////////////////////////////////////////////        
// ////////////////////////////////////////////////////        

//     this.morebtn = this.add.image(385-300,650,'btn4').setOrigin(0.5, 0.5).setScale(0);
//     this.morebtn.setInteractive({ useHandCursor: true });
//     this.morebtn.on('pointerover',function(){this.morebtn.setScale(1.05)},this);
//     this.morebtn.on('pointerout',function(){this.morebtn.setScale(1)},this);
//     this.morebtn.on('pointerup',this.morebtnLink,this);

//     this.playbtn=this.add.image(780-300,650,'btn1').setOrigin(0.5, 0.5).setScale(0);
//     this.playbtn.setInteractive({ useHandCursor: true });
//     this.playbtn.on('pointerover',function(){this.playbtn.setScale(1.05)},this);
//     this.playbtn.on('pointerout',function(){this.playbtn.setScale(1)},this);
//     this.playbtn.on('pointerdown',this.enterRoom,this);

//     var self = this;
//     randomIndex = Math.floor(Math.random() * 5);
//     var thumbframeVar = {
//         width: 317,
//         height: 237,
//     };

//     var container = self.add.container(252, 700);
//     var sprite = self.add.sprite(0, 0, 'image' + randomIndex);
//     sprite.setOrigin(0.5);
//     sprite.setDisplaySize(thumbframeVar.width - 15, thumbframeVar.height - 15);
//     sprite.setInteractive({
//         useHandCursor: true
//     });
//     sprite.on('pointerup', this.thumbLink, self);

//     var frame = self.add.image(0, 0, 'tumpframe');
//     frame.setOrigin(0.5);
//     frame.setDisplaySize(thumbframeVar.width, thumbframeVar.height);

//     container.add([sprite, frame]);
//     container.x = 580-300;
//     container.y = 630;
//     container.setScale(0.7);
           

//     this.logo =this.add.image(165,55,'logo').setScale(0.65);
//     this.logo.setInteractive({pixelPerfect:true});
//     this.logo.on('pointerup',this.LogoLink,this);

//       this.musicBtn = this.add.sprite(1212,50,"music-on");
//     this.musicBtn.setInteractive();
//     this.musicBtn.on('pointerup',this.changemusic,this);

//     this.shutter_group = this.add.container();
//     this.shutter_bg =this.add.image(320,360,'shutter_bg');
//     this.shutter_bg2 =this.add.image(960,360,'shutter_bg2');
//     this.shutter_group.add(this.shutter_bg);
//     this.shutter_group.add(this.shutter_bg2);
//     this.tweens.add({targets:this.shutter_group,y:-720,ease: 'Quadratic',duration:1200,onComplete:() => {
//          this.tweens.add({targets:this.playbtn,scaleX: 1,scaleY:1,ease: 'Quadratic',duration:800,});
//          this.tweens.add({targets:this.morebtn,scaleX: 1,scaleY:1,ease: 'Quadratic',duration:800,}); 
//     }},this);


//      if (!this.sound.mute) {
//         this.musicBtn.setTexture('music-on');
//         } else {
//         this.musicBtn.setTexture('music-off');
//         }

// }

// thumbLink() {
//  YYGGames.navigate("gameover", "thumb", RelatedGames[randomIndex]['id']);
//   }
// enterRoom (){

//     Main.dressup_array=[1,1,1,1,1,1,1,1];
//     Main.next_array=[0];
//     Main.l2dekrat_array=[1,1,1];
//     Main.l1dekrat_array=[1,1,1];
//     Main.dekrat_array=[1,1,1];
//     Main.drs_next_array1=[0];
//     Main.drs_next_array2=[0];
//     Main.drs_next_array3=[0];
//     Main.l2drs_next_array1=[0];
//     Main.l2drs_next_array2=[0];
//     Main.l2drs_next_array3=[0];
//     Main.l1drs_next_array1=[0];
//     Main.l1drs_next_array2=[0];
//     Main.l1drs_next_array3=[0];
//     Main.l1_shap_array=[0,0];

//     this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     var state = 'selection_lavel';
//     MyShowAD(this, state);
//     }},this);
//    }
  
//  morebtnLink (){
//     YYGGames.navigate("gameover", "morebutton");
// }
//    LogoLink (){
//         YYGGames.navigate("gameover", "logo");
// }

// changemusic() {
//      if (!this.sound.mute) {
//     this.musicBtn.setTexture('music-off');
//     this.sound.mute = true;
//   } else {
//     this.musicBtn.setTexture('music-on');
//     this.sound.mute = false;
//   }
//   }   
// }

// //////////////////////////////////////////////////////


// ///////////////////////////////////////////////////////

// // ******************* // mainscreen MMMMMMMMMMMM
// class mainscreen extends Phaser.Scene {

// constructor() {
//  super('mainscreen');
// }
//  create() {
     
//        this.levelGroup = this.add.container();

//     this.title_bg = this.add.sprite(320,360, "title_bg");
//     this.title_bg2 = this.add.sprite(960,360, "title_bg2");

//     this.levelGroup.add(this.title_bg);
//     this.levelGroup.add(this.title_bg2);
//   // ******************************collide**************************************************  // 

//  // const tool_1X = [126,139,158,];

//  // const tool_1Y = [504,508,508,];


//  //     this.hitGroup_tool_1 = this.physics.add.group();
//  //        for (let i = 0; i < tool_1X.length; i++) {
//  //            const hitCircle_tool_1 = this.add.graphics();
//  //            hitCircle_tool_1.fillStyle(0x000000, 0);
//  //            hitCircle_tool_1.fillCircle(0, 0, 30);
//  //            hitCircle_tool_1.x = tool_1X[i];
//  //            hitCircle_tool_1.y = tool_1Y[i];
//  //            hitCircle_tool_1.id = i;
//  //            this.hitGroup_tool_1.add(hitCircle_tool_1);
//  //            this.physics.add.existing(hitCircle_tool_1);
//  //        }

//  //        this.hitSprite_tool_1_count = 0;

//  //        this.circleGroup_tool_1 = this.add.group();
//  //        this.circle_tool_1 = this.add.graphics();
//  //        this.circle_tool_1.fillStyle(0x000000, 0);
//  //        this.circleGroup_tool_1.add(this.circle_tool_1);
//  //        this.ghr_bubble1_1.visible = true;
//  //        this.ghr_bubble1_1.mask = new Phaser.Display.Masks.GeometryMask(this, this.circle_tool_1);

//  //        this.dragCircle_tool_1 = this.add.graphics();
//  //        this.dragCircle_tool_1.fillStyle(0x000000, 0);
//  //        this.dragCircle_tool_1.fillCircle(0, 0, 30);
//  //        this.physics.add.existing(this.dragCircle_tool_1);
//  //        this.physics.add.collider(this.dragCircle_tool_1, this.hitGroup_tool_1, hitSprite_group_tool_1, null, this);

//  //        function hitSprite_group_tool_1(dragCircle_tool_1, hitCircle_tool_1) {
//  //    const distance = Phaser.Math.Distance.Between(dragCircle_tool_1.x, dragCircle_tool_1.y, hitCircle_tool_1.x, hitCircle_tool_1.y);
//  //    if (distance <= 60) {
//  //            this.circle_tool_1.fillCircle(hitCircle_tool_1.x, hitCircle_tool_1.y, 30);
//  //            hitCircle_tool_1.destroy();
//  //            this.hitSprite_tool_1_count++;
//  //            if (this.hitSprite_tool_1_count >= tool_1X.length) {
       
           
//  //            }
//  //            }
//  //        }
 
//           // ******************************dressup_group creation**************************************************  // 


//         //  this.first_group = this.add.container();
//         //  this.first_group.setVisible(false);

//         //  this.first_group1 = this.add.container()
//         //  const first_group_pos1X = [454,454,454,454];
//         //  const first_group_pos1Y = [230,340,440,550];

//         // for (let i = 1; i <= 5; i++) {
//         //   this['button_name' + i] = this.add.sprite(first_group_pos1X[i - 1], first_group_pos1Y[i - 1], 'button_name' + i);
//         //   this['button_name' + i].setOrigin(0.5);
//         //   this['button_name' + i].id = i;
//         //   this['button_name' + i].setInteractive({ useHandCursor: true});
//         //   this['button_name' + i].on('pointerover',function(){ this['button_name' + i].setScale(1.1)},this);
//         //   this['button_name' + i].on('pointerout',function(){ this['button_name' + i].setScale(1)},this);
//         //   this['button_name' + i].on('pointerdown', first_group_function.bind(this, this['button_name' + i]), this);
//         //   this.first_group1.add(this['button_name' + i]);
//         // }
//         // this.first_group.add(this.first_group1);

//         // this.final_array=[0,0,0,0,0]

//         //   function first_group_function(pointer) {
//         //   this.image_name.setTexture('image_name'+pointer.id);
//         //   Main.dressup_array[0]=pointer.id;
//         // this.final_array[0]=1;
//         // if (this.final_array.indexOf(0)<(0)) {
//         //   this.tweens.add({targets:this.playbtn,scaleX: 1,scaleY:1,ease: 'Bounce',duration:800,});
//         //   this.tweens.add({targets:this.morebtn,scaleX: 1,scaleY:1,ease: 'Bounce',duration:800,}); 
//         //    }     
        
//         // }

//           // ******************************dressup_next_button creation**************************************************  // 
         
//         // this.next_1 = this.add.image(450,692,'down').setOrigin(0.5, 0.5);
//         // this.next_1.setInteractive({ useHandCursor: true });
//         // this.next_1.id = 1;
//         // this.next_1.on('pointerdown', first_group_next_function.bind(this, this.next_1), this);
//         // this.first_group.add(this.next_1);

//         // this.prr_1 = this.add.image(449,85,'up').setOrigin(0.5, 0.5);
//         // this.prr_1.setVisible(false);
//         // this.prr_1.setInteractive({ useHandCursor: true });
//         // this.prr_1.id = 2;
//         // this.prr_1.on('pointerdown', first_group_next_function.bind(this, this.prr_1), this);           
//         // this.first_group.add(this.prr_1);


//         // function first_group_next_function(pointer) {
//         // if (pointer.id == 1) {
//         //     Main.next_array[0]++;
//         //     this['first_group' + Main.next_array[0]].setVisible(false);
//         //     this['first_group' + (Main.next_array[0] + 1)].setVisible(true);
//         // } 

//         // if (pointer.id == 2) {
//         //     Main.next_array[0]--;
//         //     this['first_group' + (Main.next_array[0] + 2)].setVisible(false);
//         //     this['first_group' + (Main.next_array[0] + 1)].setVisible(true);
//         // }


//         // if (Main.next_array[0] == 1) {   // for 2 groups next prr true
//         //     this.next_1.setVisible(true);
//         //     this.prr_1.setVisible(true);
//         // }

//         // if (Main.next_array[0] == 2) {  // for 3 groups next prr true
//         //     this.next_1.setVisible(false);
//         //     this.prr_1.setVisible(true);
//         // }
         
//         // if (Main.next_array[0]==0) {
//         //          this.prr_1.setVisible(false);
//         //          this.next_1.setVisible(true);
//         //        }
//         // }

//     // *********************************time event creation***********************************************  // 

//         // this.time.delayedCall(1000,() => {
            
//         // },this);
        
//     // *********************************sprite animation creation***********************************************  // 

//         // this.sprite_name= this.physics.add.sprite(400, 252, 'sprite_name0001');
//         // this.sprite_name.play('sprite_key');
//         // this.sprite_name.on("animationcomplete",function() {

//         // },this);

//         //  this.anims.create({key: 'sprite_name_key',
//         //     frames: this.anims.generateFrameNames('sprite_name', 
//         //     { start: 0, end: 10, zeroPad: 1, prefix: 'sprite_name' }),
//         //     frameRate: 8
//         // });



//     // *********************************image animation creation***********************************************  // 

//         // this.asset_name =this.add.sprite(500,360,'asset_name');

//         // const asset_name_storage = [];
//         // for (let i = 1; i <= 10; i++) {
//         //     asset_name_storage.push({ key: 'asset_name' + i });
//         // }

//         // this.anims.create({
//         //     key: 'asset_name_key1',
//         //     frames: asset_name_storage,
//         //     frameRate: 12
//         // });


//     // *********************************drag & drop creation***********************************************  // 

//         // this.drag_image = this.add.image(450,692,'drag_image').setOrigin(0.5, 0.5);
//         // this.drag_image.setInteractive({useHandCursor:true,draggable:true,pixelPerfect:true});
//         // this.drag_image.on('drag', (pointer, dragX, dragY) => {
//         //     this.drag_image.x = dragX;
//         //     this.drag_image.y = dragY;
//         // });
//         // this.drag_image.on('dragend', () => {
//         //     if ((this.input.x>370 && this.input.x<480 && this.input.y>120 && this.input.y<220)){
//         //     this.drag_image.visible=false; 
//         //     }
//         //      else{
//         //      this.drag_image.x=430;
//         //      this.drag_image.y=320;
//         //      }
//         // },this);



//     // *********************************click_rectangle creation***********************************************  // 
//         // this.click_rect = this.add.rectangle(250, 250, 70, 150, 0xff0000,0).setOrigin(0.5);
//         // this.click_rect.setInteractive({useHandCursor:true});
//         // this.click_rect.on('pointerdown',function(){
//         // this.click_rect.disableInteractive();
//         // },this);

//     // ********************************************************************************  // 

//         // this.dummy_drag=true;
//         // this.dummy =this.add.sprite(226,403,'tick0001');



//     // *******************************slider for animation*************************************************** //

// //         this.slide_click_animatin = this.add.rectangle(240,540,220, 220, 0xffffff,0).setOrigin(0.5);    
// //     const frameChangeDelay = 25;
// //     let frameChangeCounter = 0;
// //     let hand_count = 0;

// //     this.slide_click_animatin.on('pointerup', function (pointer) {
// // }, this);
// //     this.slide_click_animatin.on('pointerdown', function (pointer) {
// //     this.slide_click_animatin.on('pointermove', function () {
// //         if (pointer.isDown) {
// //             frameChangeCounter++;
// //             hand_count++;
// //             if(hand_count==500){
           

// //             }

// //             if (frameChangeCounter >= frameChangeDelay) {
// //                 frameChangeCounter = 0;
// //                 this.s_hand_1.anims.stop();

// //                 const currentFrame = this.s_hand_1.frame.name + 1;
// //                 const maxFrames = 6;
// //                 // const stepSize = 1 / 45;

// //                 if (pointer.prevPosition.x < pointer.position.x) {
// //                     this.s_hand_1.setFrame((this.s_hand_1.frame.name + 1) % maxFrames);
// //                 } else if (pointer.prevPosition.x > pointer.position.x) {
// //                     this.s_hand_1.setFrame((this.s_hand_1.frame.name + 1) % maxFrames);
// //                 }
// //             }
// //         }
// //     }, this);
// // }, this);

//     // *************************************slide fpr animaton repeat mode********************************************************* //

// //         this.slide_setframe_anim = this.add.rectangle(270, 240, 260, 640, 0xffffff, 0).setOrigin(0.5);
// // // this.slide_setframe_anim.setInteractive({ useHandCursor: true });
// // const frameChangeDelay2 = 50;
// // let frameChangeCounter2 = 0;
    
// // this.slide_setframe_anim.on('pointerup', function (pointer) {
// // }, this);

// // this.slide_setframe_anim.on('pointerdown', function (pointer) {

// // // Add pointermove event listener here
// // this.slide_setframe_anim.on('pointermove', function () {
// // if (pointer.isDown) {
// // frameChangeCounter2++;

// // if (frameChangeCounter2 >= frameChangeDelay2) {
// //     frameChangeCounter2 = 0;
// //     this.s_need_ani.anims.stop();

// //     const currentFrame = this.s_need_ani.frame.name + 1;
// //     const maxFrames = 10;

// //     if (pointer.prevPosition.y < pointer.position.y) {
// //         // Check for downward movement
// //         this.s_need_ani.setFrame((this.s_need_ani.frame.name + 1) % maxFrames);

// //         if (this.s_need_ani.frame.name === 9) {
// //             // Stop the animation when it reaches the 10th frame
// //             this.slide_setframe_anim.disableInteractive();
// //                 //closer
// //         }
// //     }
// // }
// // }
// // }, this);
// // }, this);
//     // *****************************************image settexture anim************************************************************* //

// //         let z_hand_count1 = 0;
// // let delayCounter1 = 0;
// // const delayIncrement1 = 40; 

// // this.image_settexture = this.add.rectangle(640,360, 504, 700, 0xffffff, 0).setOrigin(0.5);
// // // this.image_settexture.setInteractive({ useHandCursor: true });
// // this.image_settexture.on('pointerup', function (pointer) {
// //     }, this);
// // this.image_settexture.on('pointerdown', function (pointer) {
// //     this.image_settexture.on('pointermove', function () {
// //         if (pointer.isDown) {
// //             delayCounter1++;

// //             if(z_hand_count1==12){
// //              this.image_settexture.disableInteractive();

      
// //             }
// //             if (delayCounter1 >= delayIncrement1) {
// //                 delayCounter1 = 0;
// //                     if (pointer.prevPosition.x < pointer.position.x) {
// //                 z_hand_count1++;
// //                 this.z_incet001.setTexture('z_incet00' + z_hand_count1);
// //             }
// //             }
// //         }
// //     }, this);
// // }, this);


//     // ****************************************************************************************************** //
            
//     // ***********************************Arrow *********************************************** //


//         //      var arrow_Posx = [200];
//         //      var arrow_Posy = [200];
             
//         //  for (var i = 1; i <= 50; i++) {
//         //     this['arrow' + i] = this.add.sprite(arrow_Posx[i - 1], arrow_Posy[i - 1], 'arrow');
//         //     this['arrow' + i].setOrigin(0.5);
//         //     this['arrow' + i].anims.create({key: 'arrow',
//         //         frames: this.anims.generateFrameNumbers('arrow', { start: 0, end: 13 - 1 }),
//         //         frameRate: 25,
//         //         repeat: -1
//         //     });
//         //     this['arrow' + i].anims.play('arrow');
//         //     this['arrow' + i].setVisible(false);

//         //     if (i === 1 ) {
//         //         this['arrow' + i].setVisible(false);
//         //         this['arrow' + i].rotation=1.58;
//         //     }
//         //     if (i === 6 ) {
//         //         this['arrow' + i].setVisible(false);
//         //         this['arrow' + i].rotation=-1.58;
//         //     }            
            
//         // }

//     // ********************************Collide creation************************************************** //

//           // this.mcir = this.add.graphics();
//         // this.mcir.fillStyle(0x666666, 0.1);
//         // this.mcir.fillRect(0, 0, 1280, 720);
//         // this.mcir.setInteractive(new Phaser.Geom.Rectangle(0, 0, 1280, 720), Phaser.Geom.Rectangle.Contains);
//         // this.mcir.on('pointerdown', function (pointer) {
//         //   this.mcnt1++;
//         //   this['xcnt' + this.mcnt1] = pointer.x;
//         //   this['ycnt' + this.mcnt1] = pointer.y;
//         //   const circle = this.add.graphics();
//         //   circle.fillStyle(0x000000, 0.5);
//         //   circle.fillCircle(pointer.x, pointer.y, 20);
//         //   circle.setDepth(1);
//         //   console.log(this['xcnt' + this.mcnt1] + ':' + this['ycnt' + this.mcnt1]);
//         // }, this);

//     // ************************************Ad creation********************************************** //
        
//         // const { lockedItem: lock_r1, adfaildbtn: adfaildbtn_r1, addismisbtn: addismisbtn_r1 } = 
//         // createLockedItem(this, 139, 585, 'panel_acc0001ad',  () => {
//         // this.panel_acc0001.setInteractive({ useHandCursor: true });
//             // });
//         // lock_r1.setScale(0.43); 
//         // this.acc_group.add(lock_r1); 

//     // ********************************************************************************** //

//         this.playbtn=this.add.image(1190,640,'btn2').setOrigin(0.5, 0.5).setScale(1);
//         this.playbtn.setInteractive({ useHandCursor: true });
//         this.playbtn.on('pointerover',function(){this.playbtn.setScale(1.05)},this);
//         this.playbtn.on('pointerout',function(){this.playbtn.setScale(1)},this);
//         this.playbtn.on('pointerdown',this.enterRoom,this);

//         this.morebtn=this.add.image(85,640,'btn4').setOrigin(0.5, 0.5).setScale(1);
//         this.morebtn.setInteractive({ useHandCursor: true });
//         this.morebtn.on('pointerover',function(){this.morebtn.setScale(1.05)},this);
//         this.morebtn.on('pointerout',function(){this.morebtn.setScale(1)},this);
//         this.morebtn.on('pointerup',this.morebtnLink,this);

      

//          this.logo =this.add.image(165,55,'logo').setScale(0.65);
//         this.logo.setInteractive({pixelPerfect:true});
//         this.logo.on('pointerup',this.LogoLink,this);

//           this.musicBtn = this.add.sprite(1212,50,"music-on");
//         this.musicBtn.setInteractive();
//         this.musicBtn.on('pointerup',this.changemusic,this);

//     this.shutter_group = this.add.container();
//     this.shutter_bg =this.add.image(320,360,'shutter_bg');
//     this.shutter_bg2 =this.add.image(960,360,'shutter_bg2');
//     this.shutter_group.add(this.shutter_bg);
//     this.shutter_group.add(this.shutter_bg2);

//     this.tweens.add({targets:this.shutter_group,y:-720,ease: 'Quadratic',duration:1200,onComplete:() => {

//     }},this);

//         if (!this.sound.mute) {
//         this.musicBtn.setTexture('music-on');
//         } else {
//         this.musicBtn.setTexture('music-off');
//         }
// }
// update() {
//   // console.log(this.input.x + ':' + this.input.y); 

//   if (this.dummy_drag) {
//         this.dummy.x = this.input.activePointer.x ;
//         this.dummy.y = this.input.activePointer.y;
//         } 

  



//   }
          
// morebtnLink (){
//   YYGGames.navigate("game", "morebutton");
// }
// LogoLink (){
//       YYGGames.navigate("game", "logo");
// }
// enterRoom (){
//     this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     var state = 'finalscreen';
//     MyShowAD(this, state);
//     }},this);
//    }
  
// changemusic() {
//      if (!this.sound.mute) {
//     this.musicBtn.setTexture('music-off');
//     this.sound.mute = true;
//   } else {
//     this.musicBtn.setTexture('music-on');
//     this.sound.mute = false;
//   }
//   }   
// }


//  // ******************* // finalscreen  FFFFFFFFFFFFF

// class finalscreen extends Phaser.Scene {
    
// constructor() {
//  super('finalscreen');
// }
//  create() {

//      this.levelGroup = this.add.container();

//     this.title_bg = this.add.sprite(320,360, "title_bg");
//     this.title_bg2 = this.add.sprite(960,360, "title_bg2");

//     this.levelGroup.add(this.title_bg);
//     this.levelGroup.add(this.title_bg2);

         
//         this.morebtn = this.add.image(440,640,'btn4').setOrigin(0.5, 0.5).setScale(0);
//         this.morebtn.setInteractive({ useHandCursor: true });
//         this.morebtn.on('pointerover',function(){this.morebtn.setScale(1.05)},this);
//         this.morebtn.on('pointerout',function(){this.morebtn.setScale(1)},this);
//         this.morebtn.on('pointerup',this.morebtnLink,this);

//         this.playbtn=this.add.image(840,640,'btn1').setOrigin(0.5, 0.5).setScale(0);
//         this.playbtn.setInteractive({ useHandCursor: true });
//         this.playbtn.on('pointerover',function(){this.playbtn.setScale(1.05)},this);
//         this.playbtn.on('pointerout',function(){this.playbtn.setScale(1)},this);
//         this.playbtn.on('pointerdown',this.enterRoom,this);


//     var self = this;
//     randomIndex = Math.floor(Math.random() * 5);
//     var thumbframeVar = {
//         width: 317,
//         height: 237,
//     };

//     var container = self.add.container(252, 700);
//     var sprite = self.add.sprite(0, 0, 'image' + randomIndex);
//     sprite.setOrigin(0.5);
//     sprite.setDisplaySize(thumbframeVar.width - 15, thumbframeVar.height - 15);
//     sprite.setInteractive({
//         useHandCursor: true
//     });
//     sprite.on('pointerup', this.thumbLink, self);

//     var frame = self.add.image(0, 0, 'tumpframe');
//     frame.setOrigin(0.5);
//     frame.setDisplaySize(thumbframeVar.width, thumbframeVar.height);

//     container.add([sprite, frame]);
//     container.x = 640;
//     container.y = 600;
//     container.setScale(0.7);
           

//         this.logo =this.add.image(165,55,'logo').setScale(0.65);
//         this.logo.setInteractive({pixelPerfect:true});
//         this.logo.on('pointerup',this.LogoLink,this);

//           this.musicBtn = this.add.sprite(1212,50,"music-on");
//         this.musicBtn.setInteractive();
//         this.musicBtn.on('pointerup',this.changemusic,this);


//      this.shutter_group = this.add.container();
//     this.shutter_bg =this.add.image(320,360,'shutter_bg');
//     this.shutter_bg2 =this.add.image(960,360,'shutter_bg2');
//     this.shutter_group.add(this.shutter_bg);
//     this.shutter_group.add(this.shutter_bg2);
//     this.tweens.add({targets:this.shutter_group,y:-720,ease: 'Quadratic',duration:1200,onComplete:() => {
//          this.tweens.add({targets:this.playbtn,scaleX: 1,scaleY:1,ease: 'Quadratic',duration:800,});
//          this.tweens.add({targets:this.morebtn,scaleX: 1,scaleY:1,ease: 'Quadratic',duration:800,}); 
//     }},this);


//      if (!this.sound.mute) {
//         this.musicBtn.setTexture('music-on');
//         } else {
//         this.musicBtn.setTexture('music-off');
//         }

// }

// thumbLink() {
//  YYGGames.navigate("gameover", "thumb", RelatedGames[randomIndex]['id']);
//   }
// enterRoom (){
//     this.tweens.add({targets:this.shutter_group,y:0,ease: 'Quadratic',duration:1200,onComplete:() => {       
//     var state = 'title';
//     MyShowAD(this, state);
//     }},this);
//    }
  
//  morebtnLink (){
//     YYGGames.navigate("gameover", "morebutton");
// }
//    LogoLink (){
//         YYGGames.navigate("gameover", "logo");
// }

// changemusic() {
//      if (!this.sound.mute) {
//     this.musicBtn.setTexture('music-off');
//     this.sound.mute = true;
//   } else {
//     this.musicBtn.setTexture('music-on');
//     this.sound.mute = false;
//   }
//   }   
// }




var state1 = 'main'
// function MyShowAD_InterstialAD(scene, state1) {
//     console.error("MyShowAD");
//     const currentScene1 = scene; 
    
//     YYGGames.showInterstitial({
//         beforeShowAd: () => {
//             currentScene1.sound.pauseAll(); 
//         },
//         afterShowAd: () => {
//             currentScene1.sound.resumeAll(); 
//         }
//     });
// }

// function MyShowAD(scene, state) {
//     console.error("MyShowAD");
//     const currentScene = scene; 
    
//     YYGGames.showInterstitial({
//     beforeShowAd: () => {
//     currentScene.sound.pauseAll(); 
//     },
//     afterShowAd: () => {
//     currentScene.sound.resumeAll(); 
//     currentScene.scene.start(state); 
//     }
//     });
// }

//  YYGGames.init({
//     appName: "Cook-Baked-Dishes-And-Desserts",
//     channel:2,
// })
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
        selection_lavel]
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
