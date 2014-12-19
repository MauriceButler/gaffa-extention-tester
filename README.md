# gaffa-extention-tester

Generic, reusable Tape tests for Gaffa Extentions

# Usage

    var test = require('tape'),
        gaffaExtentionTester = require('gaffa-extention-tester'),
        MyCoolViewItem = require('../myCoolViewItem'),
        MyCoolAction = require('../myCoolAction'),
        MyCoolView = require('../myCoolView'),
        MyCoolBehaviour = require('../myCoolBehaviour');

    test('MyCoolViewItem is a Gaffa ViewItem', function (t) {
        gaffaTester.viewItemTester(t, MyCoolViewItem);
    });

    test('MyCoolAction is a Gaffa Action', function (t) {
        gaffaTester.actionTester(t, MyCoolAction);
    });

    test('MyCoolView is a Gaffa View', function (t) {
        gaffaTester.viewTester(t, MyCoolView);
    });

    test('MyCoolBehaviour is a Gaffa Behaviour', function (t) {
        gaffaTester.behaviorTester(t, MyCoolBehaviour);
    });
