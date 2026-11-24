class Nave{
    #posX;
    #posY;
    #velocidade;

    constructor(x,y,v){
        this.#posX = x;
        this.#posY = y;
        this.#velocidade = v;
    }

    show(){
        square(this.#posX,this.#posY,50);
    }

    move(sentido){
        if(sentido =='e'){
            this.#posX-= this.#velocidade;
          }
        if(sentido=='d'){
            this.#posX+= this.#velocidade;
        }
    }

    move2(sentido){
        if(sentido =='c'){
            this.#posY-= this.#velocidade;
        }
        if(sentido == 'b'){
        this.#posY+= this.#velocidade;
        }
    }

    //Getters
    getPosX(){return this.#posX;}
    getPosY(){return this.#posY;}
    getVelocidade(){return this.#velocidade;}
    //Setters
    setPosX(x){this.#posX=x;}
    setPosY(y){this.#posY=y;}
    setVelocidade(v){this.#velocidade=v;}
}