//Model
const Model= {
    currentCar: null,
    cars: [
        {
            clickCount: 0,
            name: 'Coupe Maserati',
            imgSrc: '	https://rafaeldavish.github.io/car-clicker/img/black-convertible-coupe.jpg',
        },
        {
            clickCount: 0,
            name: 'Camaro SS 1LE',
            imgSrc: 'https://rafaeldavish.github.io/car-clicker/img/chevrolet-camaro.jpg',
        },
        {
            clickCount: 0,
            name: 'Dodger Charger 1970',
            imgSrc: 'https://rafaeldavish.github.io/car-clicker/img/dodge-charger.jpg',
        },
        {
            clickCount: 0,
            name: 'Ford Mustang 1966',
            imgSrc: 'https://rafaeldavish.github.io/car-clicker/img/ford-mustang.jpg',
        },
        {
            clickCount: 0,
            name: '190 SL Roadster 1962',
            imgSrc: 'https://rafaeldavish.github.io/car-clicker/img/mercedes-benz.jpg',
        },
    ],
}




//View
const carListView = {
    init(){
        this.carList = document.getElementById("car-list");
        this.render();

    },
    
    render(){
        
        let listItem;
        let carsArr = appController.getCars();

        carsArr.forEach(carObj => {
            listItem = document.createElement("li");
            listItem.setAttribute("class", "list-group-item");
            listItem.textContent = carObj.name;
            listItem.addEventListener("click", function(e) {
                appController.setCurrentCar(carObj)
                carView.render()
            });
            this.carList.appendChild(listItem);

        })
        
    },

    }



const carView = {
    named: "helo",
    init(){
        this.carNameEl= document.getElementById("car-name");
        this.carCountEl = document.getElementById("car-count");
        this.carImgEl = document.getElementById("car-img");

        this.carImgEl.addEventListener("click",() => {
            appController.incrementCount()
            console.log(this.carCountEl)
        })

        this.render();
    },

    render(){
        console.log(this.carCountEl.textContent)
        const currentCar = appController.getCurrentCar();
        this.carNameEl.textContent = currentCar.name; 
        this.carCountEl.textContent = currentCar.clickCount;
        this.carImgEl.src =  currentCar.imgSrc;

        
        
    }
}





//Controller
const appController = {
    init(){
        Model.currentCar = Model.cars[0];
        carListView.init();
        carView.init();
    },
    
    getCars(){
        return Model.cars;
    },
    
    getCurrentCar(){
        return Model.currentCar;
    },
    
    setCurrentCar(car){
        Model.currentCar = car;
    },

    incrementCount(){
        Model.currentCar.clickCount++;
        carView.render();
    }
}



appController.init();