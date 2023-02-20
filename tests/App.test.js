import React from 'react';
import render, {act} from 'react-test-renderer';
import App from '../App';


describe('App', () => {
    it('should render successfully', () => {
        const tree = render.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('has 2 children', () => {
        const tree = render.create(<App />).toJSON();
        expect(tree.children.length).toBe(2);
        expect(tree.children).toMatchSnapshot();

        // children[0] tests
        expect(tree.children[0].type).toEqual('View');
        expect(tree.children[0].children[0].type).toEqual('RNCWebView');
        
        // children[1] tests
        expect(tree.children[1].type).toEqual('View');
        expect(tree.children[1].children.length).toBe(2);
    });

    // onMessage test
    it('has onMessage funtion', () => {
        const component = render.create(<App pageHeading={[{"top":0},{"top":100},{"top":200}]}/>);
        const instance = component.root;
        const webview = component.toJSON().children[0].children[0];
        act(() => {
            webview.props.onMessage({ nativeEvent: { data: '[{"top":0},{"top":100},{"top":200}]' } });
        });
        expect(instance.props.pageHeading).toEqual([{"top":0},{"top":100},{"top":200}]); 
    });
});