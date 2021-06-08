    

       import Controller from './controller.js'    
        import Model from './model.js'
      

        QUnit.test("Attacks test", function (assert) {
            console.log('hei', Model)
            Controller.Attack();
            const actual = Model.currentAttack > 1;
            const expected = true;
            assert.equal(actual, expected, Model.currentAttack);
        });


        