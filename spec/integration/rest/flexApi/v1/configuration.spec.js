'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Configuration', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.flexApi.v1.configuration().fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://flex-api.twilio.com/v1/Configuration';

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
          'date_created': '2016-08-01T22:10:40Z',
          'date_updated': '2016-08-01T22:10:40Z',
          'attributes': {
              'main_attribute': 'some_attribute'
          },
          'status': 'ok',
          'taskrouter_workspace_sid': 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'taskrouter_target_workflow_sid': 'WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'taskrouter_target_taskqueue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'taskrouter_taskqueues': [
              {
                  'sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
                  'targettable': true
              },
              {
                  'sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac',
                  'targettable': false
              }
          ],
          'taskrouter_skills': [
              {
                  'name': 'sales',
                  'multivalue': false,
                  'minimum': 0,
                  'maximum': 0
              },
              {
                  'name': 'support',
                  'multivalue': true,
                  'minimum': 0,
                  'maximum': 10
              }
          ],
          'taskrouter_worker_channels': {
              'agent': [
                  {
                      'name': 'default',
                      'availability': true,
                      'capacity': 1
                  },
                  {
                      'name': 'voice',
                      'availability': false,
                      'capacity': 2
                  }
              ],
              'supervisor': [
                  {
                      'name': 'default',
                      'availability': true,
                      'capacity': 2
                  }
              ]
          },
          'taskrouter_worker_attributes': {
              'agent': {
                  'region': 'us-east'
              },
              'supervisor': {
                  'region': 'us'
              }
          },
          'taskrouter_offline_activity_sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'runtime_domain': 'https://flex.twilio.com',
          'messaging_service_instance_sid': 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'chat_service_instance_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'flex_service_instance_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'ui_language': 'en',
          'ui_attributes': {},
          'ui_dependencies': {},
          'ui_version': '1.0',
          'service_version': '1.0',
          'call_recording_enabled': true,
          'call_recording_webhook_url': 'https://www.example.com/call-recording',
          'crm_enabled': true,
          'crm_type': 'custom',
          'crm_callback_url': 'https://crm.com/a',
          'crm_fallback_url': 'https://crm.com/b',
          'crm_attributes': {
              'crm_attribute': 'some_crm'
          },
          'public_attributes': {
              'public': 'test'
          },
          'plugin_service_enabled': true,
          'plugin_service_attributes': {
              'agent-logger': '^3.10.5',
              'typewriter': '^7.0.1'
          },
          'integrations': [
              {
                  'name': 'twilio',
                  'type': 'http',
                  'active': true,
                  'config': '{\'callback\':\'twilio.com/cb\',\'allowed_methods\':[\'GET\',\'POST\']}',
                  'logo': 'logo1',
                  'author': 'somebody1'
              },
              {
                  'name': 'twilio-stage',
                  'type': 'http',
                  'active': false,
                  'config': '{\'callback\':\'twilio.com/cb\',\'allowed_methods\':[\'GET\',\'POST\']}'
              }
          ],
          'outbound_call_flows': {
              'default': {
                  'caller_id': '+12345',
                  'queue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'location': 'EE',
                  'workflow_sid': 'WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          },
          'queue_stats_configuration': {
              'default': {
                  'service_level_threshold': 20,
                  'short_abandoned_threshold': 5,
                  'reset_timezone': 'America/New_York',
                  'reset_time': '00:00'
              },
              'queue_configurations': [
                  {
                      'queue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'reset_timezone': 'Europe/Tallinn',
                      'reset_time': '01:00'
                  },
                  {
                      'queue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
                      'reset_timezone': 'Europe/Paris',
                      'reset_time': '02:00'
                  }
              ],
              'queue_channel_configurations': [
                  {
                      'queue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'channel_sid': 'TCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'service_level_threshold': 10,
                      'short_abandoned_threshold': 10
                  },
                  {
                      'queue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
                      'channel_sid': 'TCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
                      'service_level_threshold': 30,
                      'short_abandoned_threshold': 15
                  }
              ]
          },
          'serverless_service_sids': [
              'ZSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              'ZSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab'
          ],
          'url': 'https://flex-api.twilio.com/v1/Configuration'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.flexApi.v1.configuration().fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.flexApi.v1.configuration().create();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://flex-api.twilio.com/v1/Configuration';

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2016-08-01T22:10:40Z',
          'date_updated': '2016-08-01T22:10:40Z',
          'attributes': {
              'main_attribute': 'some_attribute'
          },
          'status': 'ok',
          'taskrouter_workspace_sid': 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'taskrouter_target_workflow_sid': 'WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'taskrouter_target_taskqueue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'taskrouter_taskqueues': [
              {
                  'sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
                  'targettable': true
              },
              {
                  'sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac',
                  'targettable': false
              }
          ],
          'taskrouter_skills': [
              {
                  'name': 'sales',
                  'multivalue': false,
                  'minimum': 0,
                  'maximum': 0
              },
              {
                  'name': 'support',
                  'multivalue': true,
                  'minimum': 0,
                  'maximum': 10
              }
          ],
          'taskrouter_worker_channels': {
              'agent': [
                  {
                      'name': 'default',
                      'availability': true,
                      'capacity': 1
                  },
                  {
                      'name': 'voice',
                      'availability': false,
                      'capacity': 2
                  }
              ],
              'supervisor': [
                  {
                      'name': 'default',
                      'availability': true,
                      'capacity': 2
                  }
              ]
          },
          'taskrouter_worker_attributes': {
              'agent': {
                  'region': 'us-east'
              },
              'supervisor': {
                  'region': 'us'
              }
          },
          'taskrouter_offline_activity_sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'runtime_domain': 'https://flex.twilio.com',
          'messaging_service_instance_sid': 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'chat_service_instance_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'flex_service_instance_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'ui_language': 'en',
          'ui_attributes': {},
          'ui_dependencies': {},
          'ui_version': '1.0',
          'service_version': '1.0',
          'call_recording_enabled': true,
          'call_recording_webhook_url': 'https://www.example.com/call-recording',
          'crm_enabled': true,
          'crm_type': 'custom',
          'crm_callback_url': 'https://crm.com/a',
          'crm_fallback_url': 'https://crm.com/b',
          'crm_attributes': {
              'crm_attribute': 'some_crm'
          },
          'public_attributes': {
              'public': 'test'
          },
          'plugin_service_enabled': true,
          'plugin_service_attributes': {
              'agent-logger': '^3.10.5',
              'typewriter': '^7.0.1'
          },
          'integrations': [
              {
                  'name': 'twilio',
                  'type': 'http',
                  'active': true,
                  'config': '{\'callback\':\'twilio.com/cb\',\'allowed_methods\':[\'GET\',\'POST\']}',
                  'logo': 'logo1',
                  'author': 'somebody1'
              },
              {
                  'name': 'twilio-stage',
                  'type': 'http',
                  'active': false,
                  'config': '{\'callback\':\'twilio.com/cb\',\'allowed_methods\':[\'GET\',\'POST\']}'
              }
          ],
          'outbound_call_flows': {
              'default': {
                  'caller_id': '+12345',
                  'queue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'location': 'EE',
                  'workflow_sid': 'WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          },
          'queue_stats_configuration': {
              'default': {
                  'service_level_threshold': 20,
                  'short_abandoned_threshold': 5,
                  'reset_timezone': 'America/New_York',
                  'reset_time': '00:00'
              },
              'queue_configurations': [
                  {
                      'queue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'reset_timezone': 'Europe/Tallinn',
                      'reset_time': '01:00'
                  },
                  {
                      'queue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
                      'reset_timezone': 'Europe/Paris',
                      'reset_time': '02:00'
                  }
              ],
              'queue_channel_configurations': [
                  {
                      'queue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'channel_sid': 'TCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'service_level_threshold': 10,
                      'short_abandoned_threshold': 10
                  },
                  {
                      'queue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
                      'channel_sid': 'TCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
                      'service_level_threshold': 30,
                      'short_abandoned_threshold': 15
                  }
              ]
          },
          'serverless_service_sids': [
              'ZSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              'ZSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab'
          ],
          'url': 'https://flex-api.twilio.com/v1/Configuration'
      };

      holodeck.mock(new Response(201, body));

      var promise = client.flexApi.v1.configuration().create();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid update request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.flexApi.v1.configuration().update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://flex-api.twilio.com/v1/Configuration';

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2016-08-01T22:10:40Z',
          'date_updated': '2016-08-01T22:10:40Z',
          'attributes': {
              'main_attribute': 'some_attribute'
          },
          'status': 'ok',
          'taskrouter_workspace_sid': 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'taskrouter_target_workflow_sid': 'WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'taskrouter_target_taskqueue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'taskrouter_taskqueues': [
              {
                  'sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
                  'targettable': true
              },
              {
                  'sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac',
                  'targettable': false
              }
          ],
          'taskrouter_skills': [
              {
                  'name': 'sales',
                  'multivalue': false,
                  'minimum': 0,
                  'maximum': 0
              },
              {
                  'name': 'support',
                  'multivalue': true,
                  'minimum': 0,
                  'maximum': 10
              }
          ],
          'taskrouter_worker_channels': {
              'agent': [
                  {
                      'name': 'default',
                      'availability': true,
                      'capacity': 1
                  },
                  {
                      'name': 'voice',
                      'availability': false,
                      'capacity': 2
                  }
              ],
              'supervisor': [
                  {
                      'name': 'default',
                      'availability': true,
                      'capacity': 2
                  }
              ]
          },
          'taskrouter_worker_attributes': {
              'agent': {
                  'region': 'us-east'
              },
              'supervisor': {
                  'region': 'us'
              }
          },
          'taskrouter_offline_activity_sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'runtime_domain': 'https://flex.twilio.com',
          'messaging_service_instance_sid': 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'chat_service_instance_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'flex_service_instance_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'ui_language': 'en',
          'ui_attributes': {},
          'ui_dependencies': {},
          'ui_version': '1.0',
          'service_version': '1.0',
          'call_recording_enabled': true,
          'call_recording_webhook_url': 'https://www.example.com/call-recording',
          'crm_enabled': true,
          'crm_type': 'custom',
          'crm_callback_url': 'https://crm.com/a',
          'crm_fallback_url': 'https://crm.com/b',
          'crm_attributes': {
              'crm_attribute': 'some_crm'
          },
          'public_attributes': {
              'public': 'test'
          },
          'plugin_service_enabled': false,
          'plugin_service_attributes': {
              'agent-logger': '^3.10.5',
              'typewriter': '^7.0.1'
          },
          'integrations': [
              {
                  'name': 'twilio',
                  'type': 'http',
                  'active': true,
                  'config': '{\'callback\':\'twilio.com/cb\',\'allowed_methods\':[\'GET\',\'POST\']}',
                  'logo': 'logo1',
                  'author': 'somebody1'
              },
              {
                  'name': 'twilio-stage',
                  'type': 'http',
                  'active': false,
                  'config': '{\'callback\':\'twilio.com/cb\',\'allowed_methods\':[\'GET\',\'POST\']}'
              }
          ],
          'outbound_call_flows': {
              'default': {
                  'caller_id': '+12345',
                  'queue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'location': 'EE',
                  'workflow_sid': 'WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          },
          'queue_stats_configuration': {
              'default': {
                  'service_level_threshold': 20,
                  'short_abandoned_threshold': 5,
                  'reset_timezone': 'America/New_York',
                  'reset_time': '00:00'
              },
              'queue_configurations': [
                  {
                      'queue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'reset_timezone': 'Europe/Tallinn',
                      'reset_time': '01:00'
                  },
                  {
                      'queue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
                      'reset_timezone': 'Europe/Paris',
                      'reset_time': '02:00'
                  }
              ],
              'queue_channel_configurations': [
                  {
                      'queue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'channel_sid': 'TCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'service_level_threshold': 10,
                      'short_abandoned_threshold': 10
                  },
                  {
                      'queue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
                      'channel_sid': 'TCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
                      'service_level_threshold': 30,
                      'short_abandoned_threshold': 15
                  }
              ]
          },
          'serverless_service_sids': [
              'ZSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              'ZSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab'
          ],
          'url': 'https://flex-api.twilio.com/v1/Configuration'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.flexApi.v1.configuration().update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
