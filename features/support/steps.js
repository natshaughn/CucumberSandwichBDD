/*
 ******************************************************************************
 * Cucumber/Gherkin
 * ============================================================================
 * 
 * NOTES:
 * - Arrow functions not supported by cucumber when accessing the 'world' class
 *   SEE: github.com/cucumber/cucumber-js/blob/main/docs/support_files/world.md
 * 
 ******************************************************************************
*/

const assert = require('assert');
const {Given, When, Then} = require('@cucumber/cucumber');

// ----------------------------------------------------------------------------
// Steps for the first learning outcome
// ----------------------------------------------------------------------------

Given("a fibonacci sequence initialized to {int}", function(value) {
    try {
        this.fibonacci.init(value);
    } catch {
        this.itThrew();
    }
});

// My own

// Given("a fibonacci sequence initialized to 2584", function(value) {
//     this.fibonacci.init(value);
// }); DON'T NEED AS FUNCTION ABOVE CALLS INT

// Given("a fibonacci sequence initialized to 7", function(value) {
    // try {
    //     this.fibonacci.init(value);
    // } catch {
    //     this.itThrew();
    // }
// });
// End

When("a fibonacci sequence is started", function() {
    // Nothing to do, as done by the custom world
});

When("the sequence is skipped {int} time(s)", function(value) {
    this.fibonacci.skip(value);
});

// My own 
When("the next function is called 5 times", function(value) {
    for(let i = 0; i < value; i++) {
        this.fibonacci.next();
    }
})
// End


Then("the next number should be {int}", function(value) {
    assert(this.fibonacci.next() == value);
});

Then("the state should be {string}", function(value) {
    assert(this.fibonacci.state() == value);
});


// My own
Then("the next number should be 4181", function(value) {
    assert(this.fibonacci.next());
});

Then("it should throw an exception", function(value) {
    assert(this.hasThrown())
});


// end 