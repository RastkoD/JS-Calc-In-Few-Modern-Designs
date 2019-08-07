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
            <label class="switch">
              <input type="checkbox">
              <span class="slider round"></span>
            </label>
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
            class="btn disabled numBut"
            onclick="numButPress(7)"
          >
            7
          </button>
          <button
            id="numBut"
            type="button"
            class="btn disabled numBut"
            onclick="numButPress(8)"
          >
            8
          </button>
          <button
            id="numBut"
            type="button"
            class="btn disabled numBut"
            onclick="numButPress(9)"
          >
            9
          </button>
          <button
            id="mathBut"
            type="button"
            class="btn disabled mathBut"
            onclick='mathButPress("+")'
          >
            +
          </button>
        </div>

        <div class="row">
          <button
            id="numBut"
            type="button"
            class="btn disabled numBut"
            onclick="numButPress(4)"
          >
            4
          </button>
          <button
            id="numBut"
            type="button"
            class="btn disabled numBut"
            onclick="numButPress(5)"
          >
            5
          </button>
          <button
            id="numBut"
            type="button"
            class="btn disabled numBut"
            onclick="numButPress(6)"
          >
            6
          </button>
          <button
            id="mathBut"
            type="button"
            class="btn disabled mathBut"
            onclick='mathButPress("-")'
          >
            -
          </button>
        </div>

        <div class="row">
          <button
            id="numBut"
            type="button"
            class="btn disabled numBut"
            onclick="numButPress(1)"
          >
            1
          </button>
          <button
            id="numBut"
            type="button"
            class="btn disabled numBut"
            onclick="numButPress(2)"
          >
            2
          </button>
          <button
            id="numBut"
            type="button"
            class="btn disabled numBut"
            onclick="numButPress(3)"
          >
            3
          </button>
          <button
            id="mathBut"
            type="button"
            class="btn disabled mathBut"
            onclick='mathButPress("*")'
          >
            *
          </button>
        </div>

        <div class="row">
          <button
            id="clearBut"
            type="button"
            class="btn disabled aBut"
            onclick="clearButPress()"
          >
            AC
          </button>
          <button
            id="numBut"
            type="button"
            class="btn disabled numBut"
            onclick="numButPress(0)"
          >
            0
          </button>
          <button
            id="numBut"
            type="button"
            class="btn disabled numBut"
            onclick="numButPress('.')"
          >
            .
          </button>
          <button
            id="mathBut"
            type="button"
            class="btn disabled mathBut"
            onclick='mathButPress("/")'
          >
            /
          </button>
        </div>

        <div class="row">
          <button
            id="addMemBut"
            type="button"
            class="btn disabled mBut"
            onclick="copyButPress()"
          >
            MC
          </button>
          <button
            id="pasteBut"
            type="button"
            class="btn disabled mBut"
            onclick="pasteButPress()"
          >
            MP
          </button>
          <button
            id="equalBut"
            type="button"
            class="btn disabled equalBut"
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
              value="model Y"
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
              value="model X"
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

// Blck State
const blckState = function(page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
  <section class='blck'>
    <div class="containerB">
      <h3>.bLcK</h3>
      <div class="calc-containerB">
        <div class="row">
          <form name="calc">
            <input
              type="text"
              id="entryB"
              class="entryB text-right"
              value="0"
              readonly
            />
          </form>
        </div>
        <div class="row">
          <button
            id="numButB"
            type="button"
            class="btn numButB"
            onclick="numButPressB(7)"
          >
            7
          </button>
          <button
            id="numButB"
            type="button"
            class="btn numButB"
            onclick="numButPressB(8)"
          >
            8
          </button>
          <button
            id="numButB"
            type="button"
            class="btn numButB"
            onclick="numButPressB(9)"
          >
            9
          </button>
          <button
            id="mathButB"
            type="button"
            class="btn mathButB"
            onclick='mathButPressB("+")'
          >
            +
          </button>
        </div>

        <div class="row">
          <button
            id="numButB"
            type="button"
            class="btn numButB"
            onclick="numButPressB(4)"
          >
            4
          </button>
          <button
            id="numButB"
            type="button"
            class="btn numButB"
            onclick="numButPressB(5)"
          >
            5
          </button>
          <button
            id="numButB"
            type="button"
            class="btn numButB"
            onclick="numButPressB(6)"
          >
            6
          </button>
          <button
            id="mathButB"
            type="button"
            class="btn mathButB"
            onclick='mathButPressB("-")'
          >
            -
          </button>
        </div>

        <div class="row">
          <button
            id="numButB"
            type="button"
            class="btn numButB"
            onclick="numButPressB(1)"
          >
            1
          </button>
          <button
            id="numButB"
            type="button"
            class="btn numButB"
            onclick="numButPressB(2)"
          >
            2
          </button>
          <button
            id="numButB"
            type="button"
            class="btn numButB"
            onclick="numButPressB(3)"
          >
            3
          </button>
          <button
            id="mathButB"
            type="button"
            class="btn mathButB"
            onclick='mathButPressB("*")'
          >
            *
          </button>
        </div>

        <div class="row">
          <button
            id="clearButB"
            type="button"
            class="btn aButB"
            onclick="clearButPressB()"
          >
            AC
          </button>
          <button
            id="numButB"
            type="button"
            class="btn numButB"
            onclick="numButPressB(0)"
          >
            0
          </button>
          <button
            id="numButB"
            type="button"
            class="btn numButB"
            onclick="numButPressB('.')"
          >
            .
          </button>
          <button
            id="mathButB"
            type="button"
            class="btn mathButB"
            onclick='mathButPressB("/")'
          >
            /
          </button>
        </div>

        <div class="row">
          <button
            id="addMemButB"
            type="button"
            class="btn mButB"
            onclick="copyButPressB()"
          >
            MC
          </button>
          <button
            id="pasteButB"
            type="button"
            class="btn mButB"
            onclick="pasteButPressB()"
          >
            MP
          </button>
          <button
            id="equalButB"
            type="button"
            class="btn equalButB"
            onclick="equalButPressB()"
          >
            =
          </button>
        </div>
      </div>
    </div>
    <div class="containerB">
      <h3>Dark</h3>
      <div class="calc-containerBX">
        <div class="row">
          <form name="calc">
            <input
              type="text"
              id="entryBX"
              class="entryBX text-right"
              value="0"
              readonly
            />
          </form>
        </div>
        <div class="row">
          <button
            id="numButBX"
            type="button"
            class="btn numButBX"
            onclick="numButPressBX(7)"
          >
            7
          </button>
          <button
            id="numButBX"
            type="button"
            class="btn numButBX"
            onclick="numButPressBX(8)"
          >
            8
          </button>
          <button
            id="numButBX"
            type="button"
            class="btn numButBX"
            onclick="numButPressBX(9)"
          >
            9
          </button>
          <button
            id="mathButBX"
            type="button"
            class="btn mathButBX"
            onclick='mathButPressBX("+")'
          >
            +
          </button>
        </div>

        <div class="row">
          <button
            id="numButBX"
            type="button"
            class="btn numButBX"
            onclick="numButPressBX(4)"
          >
            4
          </button>
          <button
            id="numButBX"
            type="button"
            class="btn numButBX"
            onclick="numButPressBX(5)"
          >
            5
          </button>
          <button
            id="numButBX"
            type="button"
            class="btn numButBX"
            onclick="numButPressBX(6)"
          >
            6
          </button>
          <button
            id="mathButBX"
            type="button"
            class="btn mathButBX"
            onclick='mathButPressBX("-")'
          >
            -
          </button>
        </div>

        <div class="row">
          <button
            id="numButBX"
            type="button"
            class="btn numButBX"
            onclick="numButPressBX(1)"
          >
            1
          </button>
          <button
            id="numButBX"
            type="button"
            class="btn numButBX"
            onclick="numButPressBX(2)"
          >
            2
          </button>
          <button
            id="numButBX"
            type="button"
            class="btn numButBX"
            onclick="numButPressBX(3)"
          >
            3
          </button>
          <button
            id="mathButBX"
            type="button"
            class="btn mathButBX"
            onclick='mathButPressBX("*")'
          >
            *
          </button>
        </div>

        <div class="row">
          <button
            id="clearButBX"
            type="button"
            class="btn aButBX"
            onclick="clearButPressBX()"
          >
            AC
          </button>
          <button
            id="numButBX"
            type="button"
            class="btn numButBX"
            onclick="numButPressBX(0)"
          >
            0
          </button>
          <button
            id="numButBX"
            type="button"
            class="btn numButBX"
            onclick="numButPressBX('.')"
          >
            .
          </button>
          <button
            id="mathButBX"
            type="button"
            class="btn mathButBX"
            onclick='mathButPressBX("/")'
          >
            /
          </button>
        </div>

        <div class="row">
          <button
            id="addMemButBX"
            type="button"
            class="btn mButBX"
            onclick="copyButPressBX()"
          >
            MC
          </button>
          <button
            id="pasteButBX"
            type="button"
            class="btn mButBX"
            onclick="pasteButPressBX()"
          >
            MP
          </button>
          <button
            id="equalButBX"
            type="button"
            class="btn equalButBX"
            onclick="equalButPressBX()"
          >
            =
          </button>
        </div>
      </div>
    </div>
  </section>
`;
};

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// UI Vars
const futur = document.getElementById('futur'),
  modern = document.getElementById('modern'),
  blck = document.getElementById('blck');

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

// Blck
blck.addEventListener('click', e => {
  page.change(new blckState());

  e.preventDefault();
});
