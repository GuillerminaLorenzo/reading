import React from 'react';
import render from 'react-test-renderer';
import PrevButton from '../../../scr/components/buttons/NextButton';

describe('PrevButton', () => {
    it('has 1 child', () => {
        const tree = render.create(
            <PrevButton  
            webviewRef={"{'current': {'goBack': [Function goBack], 'goForward': [Function goForward], 'injectJavaScript': [Function injectJavaScript], 'postMessage': [Function postMessage], 'reload': [Function reload], 'requestFocus': [Function requestFocus], 'stopLoading': [Function stopLoading]}}"} 
            currentHeading={1}
            pageHeading={'[{"top": 8}, {"top": 747}, {"top": 1516}, {"top": 2339}]'} />).toJSON();
        expect(tree.children.length).toBe(1);
    });

});