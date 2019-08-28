//base class
var Job = function(){
    this.pays =true
    
}
//prototype method
Job.prototype.print = function(){
    console.log(this.pays ?'Please hire me':'No thank you')
}

//sub class object
var TechJob = function(title,pays){
    Job.call(this);
    this.title = title;
    this.pays = pays;
}

TechJob.prototype = Object.create(Job.prototype);
TechJob.prototype.constructor = TechJob;

var softwarePosition = new TechJob('jacvascript developer',true)

console.log(softwarePosition.print())

