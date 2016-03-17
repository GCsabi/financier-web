import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('transactions-list', 'Integration | Component | transactions list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

    this.set('model', ['One', 'Two', 'Three']);
  this.render(hbs`{{transactions-list title="Test title" transactions=model}}`);

  assert.equal(this.$().text().trim(), `
    Test title

      One
      Two
      Three
  `);

  // Template block usage:
  this.render(hbs`
    {{#transactions-list}}
      template block text
    {{/transactions-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
