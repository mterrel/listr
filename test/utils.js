import test from 'ava';
import {Observable as RxObservable} from 'rxjs';
import ZenObservable from 'zen-observable';
import Listr from '..';
import {isListr, isObservable} from '../lib/utils';

test('isListr', t => {
	t.false(isListr(null));
	t.false(isListr({}));
	t.false(isListr(() => {}));
	t.true(isListr(new Listr([])));
});

test('isObservable', t => {
	t.false(isObservable(null));
	t.false(isObservable({}));
	t.true(isObservable(new Listr([])));
	t.false(isObservable(new Promise(() => {})));
	t.true(isObservable(new RxObservable(() => {})));
	t.true(isObservable(new ZenObservable(() => {})));
});
