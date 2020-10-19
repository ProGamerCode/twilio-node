'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('ExecutionStepContext', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.studio.v2.flows('FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .executions('FNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .steps('FTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .stepContext().fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var flowSid = 'FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var executionSid = 'FNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var stepSid = 'FTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://studio.twilio.com/v2/Flows/${flowSid}/Executions/${executionSid}/Steps/${stepSid}/Context`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'context': {
              'foo': 'bar'
          },
          'flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'execution_sid': 'FNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'step_sid': 'FTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://studio.twilio.com/v2/Flows/FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Executions/FNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Steps/FTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Context'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.studio.v2.flows('FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .executions('FNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .steps('FTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .stepContext().fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
