class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("ENTER THE NUBER ")


    this.button = createButton('Submit');
   this.Question = createElement('h3')
   this.option1 = createElement('h4')
   this.option2 = createElement('h4')
   this.option3 = createElement('h4')
   this.option4 = createElement('h4')

    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
      this.input1.hide();
      this.button.hide();
      this.input2.hide();
      this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    this.Question.position(100,100)
    this.option1.position(120,120)
    this.option2.position(120,140)
    this.option3.position(120,160)
    this.option4.position(120,180)
    this.Question.html("how many continents are there?")
    this.option1.html("7")
    this.option2.html("3")
    this.option3.html("6")
    this.option4.html("9")
    


    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
    this.message.html("there are 3 continents in technicality, afro-eurasia, America and Australia")
    this.message.position(350,350)
    })


  }
}
