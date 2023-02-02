import React from 'react';
import render from 'react-test-renderer';
import NextButton from '../../../scr/components/buttons/NextButton';

describe('NextButton', () => {
  const pageHeading = [{ top: 0 }, { top: 100 }, { top: 200 }];
  const webviewRef = { current: { injectJavaScript: jest.fn() } };
    it('should render successfully', () => {
        const tree = render.create(
        <NextButton webviewRef={webviewRef} currentHeading={1} pageHeading={pageHeading} setCurrentHeading={jest.fn()}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('has 1 child', () => {
        const tree = render.create(
        <NextButton webviewRef={webviewRef} currentHeading={1} pageHeading={pageHeading} setCurrentHeading={jest.fn()}/>).toJSON();
        expect(tree.children.length).toBe(1);
    });

    it('handles next button press correctly', () => {
        const tree = render.create(
        <NextButton webviewRef={webviewRef} currentHeading={1} pageHeading={pageHeading} setCurrentHeading={jest.fn()}/>
        );
        const button = tree.root.find(el => el.props.testID === 'next');
        button.props.onPress();
        expect(webviewRef.current.injectJavaScript).toHaveBeenCalledWith(`
      window.scrollTo(0, ${pageHeading[2].top});
    `);
    });

    it('handles last next button press correctly', () => {
        const tree = render.create(
          <NextButton webviewRef={webviewRef} currentHeading={2} pageHeading={pageHeading} setCurrentHeading={jest.fn()}/>
        );
        const button = tree.root.find(el => el.props.testID === 'next');
        button.props.onPress();
        expect(webviewRef.current.injectJavaScript).toHaveBeenCalledWith(`
      window.scrollTo(0, ${pageHeading[0].top});
    `)
    });
});