/*
 * This is the JS to implement the UI for my website and responds to
 * different user interactions with the main webpage
 */
"use strict";
(function() {

  window.addEventListener("load", init);

  /** this function initiates the code when the page loads and adds event listeners to my buttons */
  function init() {
    id("cats").addEventListener("click", cats);
    id("others").addEventListener("click", others);
    document.querySelector("form").addEventListener("submit", (send) => {
      send.preventDefault();
      grabDefinition();
    });
  }

  /**
   * take input and return a drink recipe
   */
  function grabDefinition() {
    let word = document.qs("input").value;
    fetch("/drinks?word=" + word);
  }

  /** displays cat latte art */
  function cats() {
    fetch("/cats")
      .then(statusCheck)
      .then(resp => resp.json())
      .then(displayFriend)
      .catch(handleError);
  }

  /** displays other animal latte art */
  function others() {
    fetch("/others")
      .then(statusCheck)
      .then(resp => resp.json())
      .then(displayFriend)
      .catch(handleError);
  }

  /**
   * adds latte art image and a welcome message
   * @param {Object} retrieve - API information
   */
  function displayFriend(retrieve) {
    let friend = gen("img");
    let newFriend = gen("p");
    let describe = "a new" + retrieve.alt;
    newFriend.textContent = "a new friend!";
    friend.src = retrieve.image;
    friend.alt = describe;
    id("photos").appendChild(friend);
    id("photos").appendChild(newFriend);
  }

  /**
   * Returns a new element with the given tag name.
   * @param {string} tagName - HTML tag name for new DOM element.
   * @returns {object} New DOM object for given HTML tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }

  /**
   * Helper function to return the response"s result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} res - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected
   *                    Promise result
   */
  async function statusCheck(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  /**
   * generates error message for user
   * @param {error} error - error that was caught from API fetch
   */
  function handleError(error) {
    let errorMessage = gen("p");
    errorMessage.textContent = "Error:" + error;
    qs("body").appendChild(errorMessage);
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * retrieves the first element matched by CSS selector string
   * @param {selector} selector - CSS selector
   * @returns {Element} - first match of the selector
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

})();
