Feature: Fibonacci number sequences

  Scenario: Default sequence initiated
    When a fibonacci sequence is started
    Then the next number should be 1

  Scenario: Initialized with a legitimate fibonacci number
    Given a fibonacci sequence initialized to 8
    Then the next number should be 13
    
  Scenario: Sequence is initialized and skipped
    Given a fibonacci sequence initialized to 2
    When the sequence is skipped 3 times
    Then the state should be "The current number is 8"
    And the next number should be 13

# My features below
  Scenario: High numbered sequence is initialized the next number should be returned
    Given a fibonacci sequence initialized to 2584
    Then the next number should be 4181

  Scenario: Throw when initialized with an ilegitimate fibonacci number
    Given a fibonacci sequence initialized to 7
    Then it should throw an exception

  Scenario: Call the next function five times
    Given a fibonacci sequence is initialized to 2
    When the next function is called 5 times
    Then the next number should be 21
   
  Scenario: Sequence is initialized with a minus
    Given a fibonacci sequence initialized to -1
    Then it should throw an exception