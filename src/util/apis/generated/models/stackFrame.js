/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * a single frame of a stack trace
 *
 */
class StackFrame {
  /**
   * Create a StackFrame.
   * @property {string} [address] address of the frame
   * @property {string} [className] name of the class
   * @property {string} [method] name of the method
   * @property {boolean} [classMethod] is a class method
   * @property {string} [file] name of the file
   * @property {number} [line] line number
   * @property {boolean} appCode this line isn't from any framework
   * @property {string} [frameworkName] Name of the framework
   * @property {string} codeRaw Raw frame string
   * @property {string} codeFormatted Formatted frame string
   * @property {string} [language] programming language of the frame. Possible
   * values include: 'JavaScript', 'CSharp', 'Objective-C', 'Objective-Cpp',
   * 'Cpp', 'C', 'Swift', 'Java', 'Unknown'
   * @property {boolean} [relevant] frame should be shown always
   * @property {string} [methodParams] parameters of the frames method
   */
  constructor() {
  }

  /**
   * Defines the metadata of StackFrame
   *
   * @returns {object} metadata of StackFrame
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StackFrame',
      type: {
        name: 'Composite',
        className: 'StackFrame',
        modelProperties: {
          address: {
            required: false,
            serializedName: 'address',
            type: {
              name: 'String'
            }
          },
          className: {
            required: false,
            serializedName: 'class_name',
            type: {
              name: 'String'
            }
          },
          method: {
            required: false,
            serializedName: 'method',
            type: {
              name: 'String'
            }
          },
          classMethod: {
            required: false,
            serializedName: 'class_method',
            type: {
              name: 'Boolean'
            }
          },
          file: {
            required: false,
            serializedName: 'file',
            type: {
              name: 'String'
            }
          },
          line: {
            required: false,
            serializedName: 'line',
            type: {
              name: 'Number'
            }
          },
          appCode: {
            required: true,
            serializedName: 'app_code',
            type: {
              name: 'Boolean'
            }
          },
          frameworkName: {
            required: false,
            serializedName: 'framework_name',
            type: {
              name: 'String'
            }
          },
          codeRaw: {
            required: true,
            serializedName: 'code_raw',
            type: {
              name: 'String'
            }
          },
          codeFormatted: {
            required: true,
            serializedName: 'code_formatted',
            type: {
              name: 'String'
            }
          },
          language: {
            required: false,
            serializedName: 'language',
            type: {
              name: 'String'
            }
          },
          relevant: {
            required: false,
            serializedName: 'relevant',
            type: {
              name: 'Boolean'
            }
          },
          methodParams: {
            required: false,
            serializedName: 'method_params',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = StackFrame;
