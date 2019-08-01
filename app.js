const PageState = function() {
  let currentState = new homeState(this);

  this.init = function() {
    this.change(new homeState());
  };

  this.change = function(state) {
    currentState = state;
  };
};

// Home State
const homeState = function(page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
  <section class='futur'>
     <div class="container">
      <div class="calc-container">
        <div class="row">
          <form name="calc">
            <input
              type="text"
              id="entry"
              class="entry text-right"
              value="0"
              readonly
            />
          </form>
        </div>
        <div class="row">
          <button
            id="numBut"
            type="button"
            class="btn neon numBut"
            onclick="numButPress(7)"
          >
            7
          </button>
          <button
            id="numBut"
            type="button"
            class="btn neon numBut"
            onclick="numButPress(8)"
          >
            8
          </button>
          <button
            id="numBut"
            type="button"
            class="btn neon numBut"
            onclick="numButPress(9)"
          >
            9
          </button>
          <button
            id="mathBut"
            type="button"
            class="btn neon mathBut"
            onclick='mathButPress("+")'
          >
            +
          </button>
        </div>

        <div class="row">
          <button
            id="numBut"
            type="button"
            class="btn neon numBut"
            onclick="numButPress(4)"
          >
            4
          </button>
          <button
            id="numBut"
            type="button"
            class="btn neon numBut"
            onclick="numButPress(5)"
          >
            5
          </button>
          <button
            id="numBut"
            type="button"
            class="btn neon numBut"
            onclick="numButPress(6)"
          >
            6
          </button>
          <button
            id="mathBut"
            type="button"
            class="btn neon mathBut"
            onclick='mathButPress("-")'
          >
            -
          </button>
        </div>

        <div class="row">
          <button
            id="numBut"
            type="button"
            class="btn neon numBut"
            onclick="numButPress(1)"
          >
            1
          </button>
          <button
            id="numBut"
            type="button"
            class="btn neon numBut"
            onclick="numButPress(2)"
          >
            2
          </button>
          <button
            id="numBut"
            type="button"
            class="btn neon numBut"
            onclick="numButPress(3)"
          >
            3
          </button>
          <button
            id="mathBut"
            type="button"
            class="btn neon mathBut"
            onclick='mathButPress("*")'
          >
            *
          </button>
        </div>

        <div class="row">
          <button
            id="clearBut"
            type="button"
            class="btn neon aBut"
            onclick="clearButPress()"
          >
            AC
          </button>
          <button
            id="numBut"
            type="button"
            class="btn neon numBut"
            onclick="numButPress(0)"
          >
            0
          </button>
          <button
            id="numBut"
            type="button"
            class="btn neon numBut"
            onclick="numButPress('.')"
          >
            .
          </button>
          <button
            id="mathBut"
            type="button"
            class="btn neon mathBut"
            onclick='mathButPress("/")'
          >
            /
          </button>
        </div>

        <div class="row">
          <button
            id="addMemBut"
            type="button"
            class="btn neon mBut"
            onclick="copyButPress()"
          >
            MC
          </button>
          <button
            id="pasteBut"
            type="button"
            class="btn neon mBut"
            onclick="pasteButPress()"
          >
            MP
          </button>
          <button
            id="equalBut"
            type="button"
            class="btn neon equalBut"
            onclick="equalButPress()"
          >
            =
          </button>
        </div>
      </div>
    </div>
  <section>
  `;
};

// About State
const aboutState = function(page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
  <section class='modern'>
    <div class="containerM">
      <div class="calc-containerM">
        <div class="row">
          <form name="calc">
            <input
              type="text"
              id="entryM"
              class="entryM text-right"
              value="0"
              readonly
            />
          </form>
        </div>
        <div class="row">
          <button
            id="numButM"
            type="button"
            class="btn numButM"
            onclick="numButPressM(7)"
          >
            7
          </button>
          <button
            id="numButM"
            type="button"
            class="btn numButM"
            onclick="numButPressM(8)"
          >
            8
          </button>
          <button
            id="numButM"
            type="button"
            class="btn numButM"
            onclick="numButPressM(9)"
          >
            9
          </button>
          <button
            id="mathButM"
            type="button"
            class="btn mathButM"
            onclick='mathButPressM("+")'
          >
            +
          </button>
        </div>

        <div class="row">
          <button
            id="numButM"
            type="button"
            class="btn numButM"
            onclick="numButPressM(4)"
          >
            4
          </button>
          <button
            id="numButM"
            type="button"
            class="btn numButM"
            onclick="numButPressM(5)"
          >
            5
          </button>
          <button
            id="numButM"
            type="button"
            class="btn numButM"
            onclick="numButPressM(6)"
          >
            6
          </button>
          <button
            id="mathButM"
            type="button"
            class="btn mathButM"
            onclick='mathButPressM("-")'
          >
            -
          </button>
        </div>

        <div class="row">
          <button
            id="numButM"
            type="button"
            class="btn numButM"
            onclick="numButPressM(1)"
          >
            1
          </button>
          <button
            id="numButM"
            type="button"
            class="btn numButM"
            onclick="numButPressM(2)"
          >
            2
          </button>
          <button
            id="numButM"
            type="button"
            class="btn numButM"
            onclick="numButPressM(3)"
          >
            3
          </button>
          <button
            id="mathButM"
            type="button"
            class="btn mathButM"
            onclick='mathButPressM("*")'
          >
            *
          </button>
        </div>

        <div class="row">
          <button
            id="clearButM"
            type="button"
            class="btn aButM"
            onclick="clearButPressM()"
          >
            AC
          </button>
          <button
            id="numButM"
            type="button"
            class="btn numButM"
            onclick="numButPressM(0)"
          >
            0
          </button>
          <button
            id="numButM"
            type="button"
            class="btn numButM"
            onclick="numButPressM('.')"
          >
            .
          </button>
          <button
            id="mathButM"
            type="button"
            class="btn mathButM"
            onclick='mathButPressM("/")'
          >
            /
          </button>
        </div>

        <div class="row">
          <button
            id="addMemButM"
            type="button"
            class="btn mButM"
            onclick="copyButPressM()"
          >
            MC
          </button>
          <button
            id="pasteButM"
            type="button"
            class="btn mButM"
            onclick="pasteButPressM()"
          >
            MP
          </button>
          <button
            id="equalButM"
            type="button"
            class="btn equalButM"
            onclick="equalButPressM()"
          >
            =
          </button>
        </div>
      </div>
    </div>
  </section>
`;
};

// Contact State
const contactState = function(page) {
  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#content').innerHTML = `
  <form>
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control">
    </div>
    <div class="form-group">
    <label>Email address</label>
    <input type="email" class="form-control">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
`;
};

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// UI Vars
const home = document.getElementById('home'),
  about = document.getElementById('about'),
  contact = document.getElementById('contact');

// Home
home.addEventListener('click', e => {
  page.change(new homeState());

  e.preventDefault();
});

// About
about.addEventListener('click', e => {
  page.change(new aboutState());

  e.preventDefault();
});

// Contact
contact.addEventListener('click', e => {
  page.change(new contactState());

  e.preventDefault();
});
