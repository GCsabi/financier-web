import DS from 'ember-data';

export default DS.Model.extend({
    amount: DS.attr(),
    description: DS.attr(),
    account: DS.attr(),
    performed_at: DS.attr()
});
