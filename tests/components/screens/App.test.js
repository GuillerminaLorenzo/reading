import React from 'react';
import render from 'react-test-renderer';
import App from '../../../scr/screens/App';


describe('App', () => {
    it('should render successfully', () => {
        const tree = render.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('has 2 children', () => {
        const tree = render.create(<App />).toJSON();
        expect(tree.children.length).toBe(2);
        expect(tree.children[0].type).toEqual('View');
        expect(tree.children[0].children[0].type).toEqual('RNCWebView');
        expect(tree.children[0].type).toMatchSnapshot();
    });

    // onMessage tests
    xit('has onMessage funtion', () => {
        const tree = render.create(<App />).toJSON();

        
    });
});