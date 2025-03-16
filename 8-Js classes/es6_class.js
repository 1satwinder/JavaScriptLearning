class human{
    name= "jaswinder";
    google = "amazon";

    getName() {
        return this.name + this.google;
    }
}


console.log("result", new human().getName());