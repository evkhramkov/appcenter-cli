/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a TestGDPRUser.
 */
class TestGDPRUser {
  /**
   * Create a TestGDPRUser.
   * @member {uuid} [id]
   */
  constructor() {
  }

  /**
   * Defines the metadata of TestGDPRUser
   *
   * @returns {object} metadata of TestGDPRUser
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TestGDPRUser',
      type: {
        name: 'Composite',
        className: 'TestGDPRUser',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TestGDPRUser;
