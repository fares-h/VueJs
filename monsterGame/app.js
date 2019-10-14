new Vue({
    el : '#app',
    data : {
        myHit : 0,
        monsterHit : 0,
        allHits : [],
        isHeal : false,
        myHealth : 100,
        monsterHealth : 100,
        gameStarted : false,
        gameEnd : false,
        myRandom : 0,
        monsterRandom : 0,
        myHealthBarStyle : {
            backgroundColor: 'green',
            margin: 0,
            color: 'white',
            width: 100+ '%',
        },
        monsterHealthBarStyle : {
            backgroundColor: 'green',
            margin: 0,
            color: 'white',
            width: 100+ '%',
        }


    },
    computed: {

    },
    methods : {
        startGame : function () {
            this.gameStarted = true;
        },
        attack : function () {
            this.myRandom = Math.floor(Math.random()*(20 - 10) + 10);
            this.monsterRandom = Math.floor(Math.random()*(20 - 10) + 10);
            this.myHealth -= this.myRandom;
            this.monsterHealth -= this.monsterRandom;
            this.allHits.push(this.monsterRandom);
            this.allHits.push(this.myRandom);
            this.myHealthBarStyle.width = (this.myHealth)+'%';
            this.monsterHealthBarStyle.width = (this.monsterHealth)+'%';

            if(this.myHealth <= 0 ){
                alert('Player lost the Game ');
                this.gameEnd = true;
                this.giveUp();
            }
            if(this.monsterHealth <= 0 ){
                alert('Player won the Game ');
                this.gameEnd = true;
                this.giveUp();
            }
            console.log(this.myHealth);
        },
        specialAttack : function () {
            this.myRandom = Math.floor(Math.random()*(20 - 10) + 10);
            this.monsterRandom = Math.floor(Math.random()*(30 - 20) + 20);
            this.myHealth -= this.myRandom;
            this.monsterHealth -= this.monsterRandom;
            this.allHits.push(this.monsterRandom);
            this.allHits.push(this.myRandom);
            this.myHealthBarStyle.width = (this.myHealth)+'%';
            this.monsterHealthBarStyle.width = (this.monsterHealth)+'%';


            if(this.myHealth <= 0 ){
                alert('Player lost the Game ');
                this.gameEnd = true;
                this.giveUp();
            }
            if(this.monsterHealth <= 0 ){
                alert('Player won the Game ');
                this.gameEnd = true;
                this.giveUp();
            }
            //console.log(this.monsterHealth);
        },
        heal : function () {
            this.myHealth += 20;
            this.isHeal = true;
            this.myHealthBarStyle.width = (this.myHealth)+'%';

        },
        giveUp : function () {
            if(this.gameEnd !== true)
                alert('YOU GAVE UP!');

            this.myHealth = 100;
            this.monsterHealth = 100;
            this.allHits=[];
            this.myHealthBarStyle.width = 100+'%';
            this.monsterHealthBarStyle.width = 100+'%';
            this.gameStarted = false;
            this.gameEnd = false;

        }
    }

});