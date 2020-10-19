'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Step', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.studio.v1.flows('FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .engagements('FNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .steps.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var flowSid = 'FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var engagementSid = 'FNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://studio.twilio.com/v1/Flows/${flowSid}/Engagements/${engagementSid}/Steps`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'meta': {
              'previous_page_url': null,
              'next_page_url': null,
              'url': 'https://studio.twilio.com/v1/Flows/FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Engagements/FNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Steps?PageSize=50&Page=0',
              'page': 0,
              'first_page_url': 'https://studio.twilio.com/v1/Flows/FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Engagements/FNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Steps?PageSize=50&Page=0',
              'page_size': 50,
              'key': 'steps'
          },
          'steps': []
      };

      holodeck.mock(new Response(200, body));

      var promise = client.studio.v1.flows('FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .engagements('FNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .steps.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.studio.v1.flows('FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .engagements('FNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .steps('FTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var flowSid = 'FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var engagementSid = 'FNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'FTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://studio.twilio.com/v1/Flows/${flowSid}/Engagements/${engagementSid}/Steps/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'sid': 'FTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'engagement_sid': 'FNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'name': 'incomingRequest',
          'context': {},
          'transitioned_from': 'Trigger',
          'transitioned_to': 'Ended',
          'date_created': '2017-11-06T12:00:00Z',
          'date_updated': null,
          'url': 'https://studio.twilio.com/v1/Flows/FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Engagements/FNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Steps/FTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'step_context': 'https://studio.twilio.com/v1/Flows/FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Engagements/FNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Steps/FTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Context'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.studio.v1.flows('FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .engagements('FNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .steps('FTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
