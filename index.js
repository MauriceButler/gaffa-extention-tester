var Gaffa = require('gaffa');

function viewItemTester(t, ViewItemConstructor){
    t.plan((t._plan || 0) + 4);

    t.equal(typeof ViewItemConstructor, 'function',  ViewItemConstructor.name + ' is a function');

    var viewItem = new ViewItemConstructor();

    t.ok(viewItem instanceof ViewItemConstructor,  ViewItemConstructor.name + ' is a constructor');
    t.ok(viewItem instanceof Gaffa.ViewItem,  ViewItemConstructor.name + ' is a Gaffa ViewItem');
    t.equal(viewItem._type.toLowerCase(), ViewItemConstructor.name.toLowerCase(),  ViewItemConstructor.name + '._type is set correctly');
}

function actionTester(t, ActionConstructor){
    t.plan((t._plan || 0) + 2);

    viewItemTester(t, ActionConstructor);

    var action = new ActionConstructor();

    t.ok(action instanceof Gaffa.Action,  ActionConstructor.name + ' is a Gaffa Action');
    t.equal(typeof action.trigger, 'function',  ActionConstructor.name + ' has a trigger function');
}

function behaviourTester(t, BehaviourConstructor){
    t.plan((t._plan || 0) + 2);

    viewItemTester(t, BehaviourConstructor);

    var behaviour = new BehaviourConstructor();

    t.ok(behaviour instanceof Gaffa.Behaviour,  BehaviourConstructor.name + ' is a Gaffa Behaviour');
    t.equal(typeof behaviour.bind, 'function',  BehaviourConstructor.name + ' has a bind function');
}

function viewTester(t, ViewConstructor){
    t.plan((t._plan || 0) + 4);

    viewItemTester(t, ViewConstructor);

    var view = new ViewConstructor();

    t.ok(view instanceof Gaffa.View,  ViewConstructor.name + ' is a Gaffa View');
    t.equal(typeof view.render, 'function',  ViewConstructor.name + ' has a trigger function');
    t.notOk(view.renderedElement, ViewConstructor.name + ' has no renderedElement before render');

    view.render();

    t.ok(view.renderedElement, ViewConstructor.name + ' has a renderedElement after render');

    // TODO: HARD -- on destroy should remove all event handelers
}

module.exports = {
    viewItemTester: viewItemTester,
    actionTester: actionTester,
    behaviourTester: behaviourTester,
    viewTester: viewTester
};