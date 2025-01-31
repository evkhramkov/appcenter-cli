/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a UserProfileResponse.
 */
class UserProfileResponse {
  /**
   * Create a UserProfileResponse.
   * @member {uuid} id The unique id (UUID) of the user
   * @member {string} [avatarUrl] The avatar URL of the user
   * @member {boolean} [canChangePassword] User is required to send an old
   * password in order to change the password.
   * @member {string} displayName The full name of the user. Might for example
   * be first and last name
   * @member {string} email The email address of the user
   * @member {string} name The unique name that is used to identify the user.
   * @member {array} [permissions] The permissions the user has for the app
   * @member {string} origin The creation origin of this user. Possible values
   * include: 'appcenter', 'hockeyapp', 'codepush'
   */
  constructor() {
  }

  /**
   * Defines the metadata of UserProfileResponse
   *
   * @returns {object} metadata of UserProfileResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UserProfileResponse',
      type: {
        name: 'Composite',
        className: 'UserProfileResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          avatarUrl: {
            required: false,
            serializedName: 'avatar_url',
            type: {
              name: 'String'
            }
          },
          canChangePassword: {
            required: false,
            serializedName: 'can_change_password',
            type: {
              name: 'Boolean'
            }
          },
          displayName: {
            required: true,
            serializedName: 'display_name',
            type: {
              name: 'String'
            }
          },
          email: {
            required: true,
            serializedName: 'email',
            type: {
              name: 'String'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          permissions: {
            required: false,
            serializedName: 'permissions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          origin: {
            required: true,
            serializedName: 'origin',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UserProfileResponse;
