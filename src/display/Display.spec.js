import React from 'react';
import renderer from 'react-test-renderer';

import Display from './Display';

describe('<Display/>', () => {
    it('test for display', () => {
        const tree = renderer.create(<Display/>);

        expect(tree.toJSON()).toMatchSnapshot();
    })
})