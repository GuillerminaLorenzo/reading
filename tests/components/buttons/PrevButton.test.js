import React from 'react';
import render from 'react-test-renderer';
import PrevButton from '../../../scr/components/buttons/PrevButton';

describe('PrevButton', () => {
    it('should render successfully', () => {
        const tree = render.create(
            <PrevButton  
            webviewRef={"{'current': {'goBack': [Function goBack], 'goForward': [Function goForward], 'injectJavaScript': [Function injectJavaScript], 'postMessage': [Function postMessage], 'reload': [Function reload], 'requestFocus': [Function requestFocus], 'stopLoading': [Function stopLoading]}}"} 
            currentHeading={1}
            pageHeading={'[{"top": 8}, {"top": 747}, {"top": 1516}, {"top": 2339}]'} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('has 1 child', () => {
        const tree = render.create(
            <PrevButton  
            webviewRef={"{'current': {'goBack': [Function goBack], 'goForward': [Function goForward], 'injectJavaScript': [Function injectJavaScript], 'postMessage': [Function postMessage], 'reload': [Function reload], 'requestFocus': [Function requestFocus], 'stopLoading': [Function stopLoading]}}"} 
            currentHeading={1}
            pageHeading={'[{"top": 8}, {"top": 747}, {"top": 1516}, {"top": 2339}]'} />).toJSON();
        expect(tree.children.length).toBe(1);
    });

    it('handles prev button press correctly', () => {
        const webviewRef = { current: { injectJavaScript: jest.fn() } };
        const pageHeading = [{ top: 0 }, { top: 100 }, { top: 200 }];
        const tree = render.create(
        <PrevButton webviewRef={webviewRef} currentHeading={1} pageHeading={pageHeading} />
        );
        const button = tree.root.find(el => el.props.testID === 'prev');
        button.props.onPress();
        expect(webviewRef.current.injectJavaScript).toHaveBeenCalledWith(`
      window.scrollTo(0, ${pageHeading[0].top});
    `);
    });

    it('handles last prev button press correctly', () => {
        const webviewRef = { current: { injectJavaScript: jest.fn() } };
        const pageHeading = [{ top: 0 }, { top: 100 }, { top: 200 }];
        const tree = render.create(
          <PrevButton webviewRef={webviewRef} currentHeading={0} pageHeading={pageHeading} />
        );
        const button = tree.root.find(el => el.props.testID === 'prev');
        button.props.onPress();
        expect(webviewRef.current.injectJavaScript).toHaveBeenCalledWith(`
      window.scrollTo(0, ${pageHeading[2].top});
    `);
    });
});