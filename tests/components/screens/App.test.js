import React from 'react';
import render from 'react-test-renderer';
import App from '../../../scr/screens/App';


describe('Results', () => {
    it('should render successfully', () => {
        const tree = render.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('has 2 child', () => {
        const tree = render.create(<App />).toJSON();
        expect(tree.children.length).toBe(2);
    });
});