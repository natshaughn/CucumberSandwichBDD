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
// Did not need my own Given's as the code above had {int}.
// End

When("a fibonacci sequence is started", function() {
    // Nothing to do, as done by the custom world
});

When("the sequence is skipped {int} time(s)", function(value) {
    this.fibonacci.skip(value);
});

// My own 
When("the next function is called {int} times", function(value) {
    for(let i = 0; i < value; i++) {
        this.fibonacci.next();
    }
});
// End


Then("the next number should be {int}", function(value) {
    assert(this.fibonacci.next() == value);
});

Then("the state should be {string}", function(value) {
    assert(this.fibonacci.state() == value);
});


// My own
Then("it should throw an exception", function() {
    assert(this.hasThrown())
});
// end 