const PageState = function() {
  let currentState = new futurState(this);

  this.init = function() {
    this.change(new futurState());
  };

  this.change = function(state) {
    currentState = state;
  };
};

// Futur. State
const futurState = function(page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
  <section class='futur'>
     <div class="container">
     <h3>futur.</h3>
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
  </section>
  `;
};

// Modern State
const modernState = function(page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
  <section class='modern'>
    <div class="containerM">
      <h3>modern. Y</h3>
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
    <div class="containerM">
      <h3>modern. X</h3>
      <div class="calc-containerMX">
        <div class="row">
          <form name="calc">
            <input
              type="text"
              id="entryMX"
              class="entryMX text-right"
              value="0"
              readonly
            />
          </form>
        </div>
        <div class="row">
          <button
            id="numButMX"
            type="button"
            class="btn numButMX"
            onclick="numButPressMX(7)"
          >
            7
          </button>
          <button
            id="numButMX"
            type="button"
            class="btn numButMX"
            onclick="numButPressMX(8)"
          >
            8
          </button>
          <button
            id="numButMX"
            type="button"
            class="btn numButMX"
            onclick="numButPressMX(9)"
          >
            9
          </button>
          <button
            id="mathButMX"
            type="button"
            class="btn mathButMX"
            onclick='mathButPressMX("+")'
          >
            +
          </button>
        </div>

        <div class="row">
          <button
            id="numButMX"
            type="button"
            class="btn numButMX"
            onclick="numButPressMX(4)"
          >
            4
          </button>
          <button
            id="numButMX"
            type="button"
            class="btn numButMX"
            onclick="numButPressMX(5)"
          >
            5
          </button>
          <button
            id="numButMX"
            type="button"
            class="btn numButMX"
            onclick="numButPressMX(6)"
          >
            6
          </button>
          <button
            id="mathButMX"
            type="button"
            class="btn mathButMX"
            onclick='mathButPressMX("-")'
          >
            -
          </button>
        </div>

        <div class="row">
          <button
            id="numButMX"
            type="button"
            class="btn numButMX"
            onclick="numButPressMX(1)"
          >
            1
          </button>
          <button
            id="numButMX"
            type="button"
            class="btn numButMX"
            onclick="numButPressMX(2)"
          >
            2
          </button>
          <button
            id="numButMX"
            type="button"
            class="btn numButMX"
            onclick="numButPressMX(3)"
          >
            3
          </button>
          <button
            id="mathButMX"
            type="button"
            class="btn mathButMX"
            onclick='mathButPressMX("*")'
          >
            *
          </button>
        </div>

        <div class="row">
          <button
            id="clearButMX"
            type="button"
            class="btn aButMX"
            onclick="clearButPressMX()"
          >
            AC
          </button>
          <button
            id="numButMX"
            type="button"
            class="btn numButMX"
            onclick="numButPressMX(0)"
          >
            0
          </button>
          <button
            id="numButMX"
            type="button"
            class="btn numButMX"
            onclick="numButPressMX('.')"
          >
            .
          </button>
          <button
            id="mathButMX"
            type="button"
            class="btn mathButMX"
            onclick='mathButPressMX("/")'
          >
            /
          </button>
        </div>

        <div class="row">
          <button
            id="addMemButMX"
            type="button"
            class="btn mButMX"
            onclick="copyButPressMX()"
          >
            MC
          </button>
          <button
            id="pasteButMX"
            type="button"
            class="btn mButMX"
            onclick="pasteButPressMX()"
          >
            MP
          </button>
          <button
            id="equalButMX"
            type="button"
            class="btn equalButMX"
            onclick="equalButPressMX()"
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
const futur = document.getElementById('futur'),
  modern = document.getElementById('modern'),
  contact = document.getElementById('contact');

// Futur.
futur.addEventListener('click', e => {
  page.change(new futurState());

  e.preventDefault();
});

// Modern
modern.addEventListener('click', e => {
  page.change(new modernState());

  e.preventDefault();
});

// ModernX
modernX.addEventListener('click', e => {
  page.change(new modernStateX());

  e.preventDefault();
});

// Contact
contact.addEventListener('click', e => {
  page.change(new contactState());

  e.preventDefault();
});
