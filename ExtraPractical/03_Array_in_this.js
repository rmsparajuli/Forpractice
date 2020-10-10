const practice = () => {
  function talk() {
    console.log("this in array function", this);
  }
};

const practiceObj = {
  talk() {
    console.warn("this on object", this);
  },
};

const person = {
  talk() {
    setTimeout(function () {
      console.log("this on person", this);
    },1000);
  },
};

person.talk();

// practice.talk();

// practiceObj.talk();
