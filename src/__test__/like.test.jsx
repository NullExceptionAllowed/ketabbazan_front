// import { render, screen, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import Enzyme,{shallow} from 'enzyme';
// import Comment from "../Components/Comment/Comment";
// import React from 'react';
// import Adapter from '@cfaester/enzyme-adapter-react-18';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { shallow } from 'enzyme';

   


     const setup = () => {
            return shallow(<Comment/>);
           
      }

      const findbytestAttribute = (wrapper , val) =>
      {
         return wrapper.find(`[data-test="${val}"]`);
      }

      test("render without error like" , () => {
         const wrapper =  shallow(<Comment/>);
          const component = findbytestAttribute(wrapper, 'like');
          expect(component.length).toBe(1);
      })


      test("render without error dislike" , () => {
       const wrapper =  setup();
       const component = findbytestAttribute(wrapper, 'dislike');
       expect(component.length).toBe(1);
    })


    test("dislike button work correctly" , () => {
       const wrapper =  setup();
       const dislikevaluebeforclick = findbytestAttribute(wrapper, 'dislikevalue');
       const dislikebutton = findbytestAttribute(wrapper, 'dislikebutton');
       dislikebutton.simulate('click');
       const dislikevalue = findbytestAttribute(wrapper, 'dislikevalue');
       expect(dislikevalue.text()).toContain(dislikevaluebeforclick - 1);
      
    })